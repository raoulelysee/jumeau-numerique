from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from typing import Optional, List, Dict
import json
import uuid
from datetime import datetime
from collections import defaultdict
import time
import boto3
from botocore.exceptions import ClientError
from groq import Groq
from context import prompt
from security import validate_message

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS - restricted to known origins only
origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "X-API-Key"],
)

# API Key for frontend authentication
APP_API_KEY = os.getenv("APP_API_KEY", "")

# Rate limiting: track requests per IP
RATE_LIMIT_MAX = int(os.getenv("RATE_LIMIT_MAX", "10"))  # max requests per window
RATE_LIMIT_WINDOW = int(os.getenv("RATE_LIMIT_WINDOW", "60"))  # window in seconds
rate_limit_store: dict[str, list[float]] = defaultdict(list)


@app.middleware("http")
async def security_middleware(request: Request, call_next):
    from fastapi.responses import JSONResponse

    # Skip for health/root and OPTIONS (CORS preflight)
    if request.url.path in ["/", "/health"] or request.method == "OPTIONS":
        return await call_next(request)

    # API Key check
    if APP_API_KEY:
        provided_key = request.headers.get("X-API-Key", "")
        if provided_key != APP_API_KEY:
            return JSONResponse(status_code=403, content={"detail": "Invalid API key"})

    # Rate limiting by IP
    client_ip = request.client.host if request.client else "unknown"
    now = time.time()
    # Clean old entries outside the window
    rate_limit_store[client_ip] = [t for t in rate_limit_store[client_ip] if now - t < RATE_LIMIT_WINDOW]
    if len(rate_limit_store[client_ip]) >= RATE_LIMIT_MAX:
        return JSONResponse(status_code=429, content={"detail": "Too many requests. Please try again later."})
    rate_limit_store[client_ip].append(now)

    return await call_next(request)


# Initialize Groq client
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Groq model selection
GROQ_MODEL_ID = os.getenv("GROQ_MODEL_ID")

# Memory storage configuration
USE_S3 = os.getenv("USE_S3", "false").lower() == "true"
S3_BUCKET = os.getenv("S3_BUCKET", "")
MEMORY_DIR = os.getenv("MEMORY_DIR", "../memory")

# Initialize S3 client if needed
if USE_S3:
    s3_client = boto3.client("s3")


# Request/Response models
class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None


class ChatResponse(BaseModel):
    response: str
    session_id: str


class Message(BaseModel):
    role: str
    content: str
    timestamp: str


# Memory management functions
def get_memory_path(session_id: str) -> str:
    return f"{session_id}.json"


def load_conversation(session_id: str) -> List[Dict]:
    """Load conversation history from storage"""
    if USE_S3:
        try:
            response = s3_client.get_object(Bucket=S3_BUCKET, Key=get_memory_path(session_id))
            return json.loads(response["Body"].read().decode("utf-8"))
        except ClientError as e:
            if e.response["Error"]["Code"] == "NoSuchKey":
                return []
            raise
    else:
        # Local file storage
        file_path = os.path.join(MEMORY_DIR, get_memory_path(session_id))
        if os.path.exists(file_path):
            with open(file_path, "r") as f:
                return json.load(f)
        return []


def save_conversation(session_id: str, messages: List[Dict]):
    """Save conversation history to storage"""
    if USE_S3:
        s3_client.put_object(
            Bucket=S3_BUCKET,
            Key=get_memory_path(session_id),
            Body=json.dumps(messages, indent=2),
            ContentType="application/json",
        )
    else:
        # Local file storage
        os.makedirs(MEMORY_DIR, exist_ok=True)
        file_path = os.path.join(MEMORY_DIR, get_memory_path(session_id))
        with open(file_path, "w") as f:
            json.dump(messages, f, indent=2)


def call_groq(conversation: List[Dict], user_message: str) -> str:
    """Call Groq API with conversation history"""

    # Build messages in OpenAI/Groq format
    messages = [
        {"role": "system", "content": prompt()}
    ]

    # Add conversation history (limit to last 10 exchanges to manage context)
    for msg in conversation[-20:]:  # Last 10 back-and-forth exchanges
        messages.append({
            "role": msg["role"],
            "content": msg["content"]
        })

    # Add current user message
    messages.append({
        "role": "user",
        "content": user_message
    })

    try:
        # Call Groq API
        response = groq_client.chat.completions.create(
            model=GROQ_MODEL_ID,
            messages=messages,
            max_tokens=2000,
            temperature=0.3,
            top_p=0.9
        )

        # Extract the response text
        return response.choices[0].message.content

    except Exception as e:
        print(f"Groq error: {e}")
        raise HTTPException(status_code=500, detail=f"Groq error: {str(e)}")


@app.get("/")
async def root():
    return {"status": "ok"}


@app.get("/health")
async def health_check():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # Validate and sanitize user input
        is_valid, error_msg, sanitized_message = validate_message(request.message)
        if not is_valid:
            return ChatResponse(
                response=error_msg,
                session_id=request.session_id or str(uuid.uuid4())
            )

        # Validate and generate session ID
        if request.session_id:
            try:
                uuid.UUID(request.session_id, version=4)
                session_id = request.session_id
            except ValueError:
                raise HTTPException(status_code=400, detail="Invalid session ID format")
        else:
            session_id = str(uuid.uuid4())

        # Load conversation history
        conversation = load_conversation(session_id)

        # Call Groq for response
        assistant_response = call_groq(conversation, sanitized_message)

        # Update conversation history
        conversation.append(
            {"role": "user", "content": sanitized_message, "timestamp": datetime.now().isoformat()}
        )
        conversation.append(
            {
                "role": "assistant",
                "content": assistant_response,
                "timestamp": datetime.now().isoformat(),
            }
        )

        # Save conversation
        save_conversation(session_id, conversation)

        return ChatResponse(response=assistant_response, session_id=session_id)

    except HTTPException:
        raise
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/conversation/{session_id}")
async def get_conversation(session_id: str):
    """Retrieve conversation history"""
    try:
        uuid.UUID(session_id, version=4)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid session ID format")
    try:
        conversation = load_conversation(session_id)
        return {"session_id": session_id, "messages": conversation}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)