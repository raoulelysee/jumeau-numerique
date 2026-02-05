"""
Prompt Injection Protection Module
Zero external dependencies - uses only Python standard library
"""

import re
import logging
from typing import Tuple

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("security")

# Maximum message length (characters)
MAX_MESSAGE_LENGTH = 2000

# Patterns that indicate potential prompt injection attempts
INJECTION_PATTERNS = [
    # Direct instruction override attempts
    r"ignore\s+(all\s+)?(previous|prior|above|earlier)\s+(instructions?|prompts?|rules?|context)",
    r"disregard\s+(all\s+)?(previous|prior|above|earlier)\s+(instructions?|prompts?|rules?)",
    r"forget\s+(all\s+)?(previous|prior|above|earlier)\s+(instructions?|prompts?|rules?)",
    r"override\s+(all\s+)?(previous|prior|system)\s+(instructions?|prompts?|rules?)",

    # System prompt extraction attempts
    r"(show|tell|reveal|display|print|output|repeat)\s+(me\s+)?(your|the)\s+(system\s+)?(prompt|instructions?|rules?|context)",
    r"what\s+(are|is)\s+(your|the)\s+(system\s+)?(prompt|instructions?|rules?)",

    # Role switching attempts
    r"you\s+are\s+now\s+(a|an|the)",
    r"pretend\s+(to\s+be|you\s+are)",
    r"act\s+as\s+(if\s+you\s+are|a|an)",
    r"roleplay\s+as",
    r"from\s+now\s+on\s+(you\s+are|you're|act\s+as)",

    # Developer/debug mode attempts
    r"(enter|enable|activate|switch\s+to)\s+(developer|debug|admin|sudo|root)\s+mode",
    r"dev\s*mode\s*(on|enabled?|activate)",

    # Jailbreak keywords
    r"\bdan\b.*\bjailbreak",
    r"do\s+anything\s+now",
    r"\bdeveloper\s+mode\b",

    # Instruction injection markers
    r"\[system\]",
    r"\[instruction\]",
    r"<\s*system\s*>",
    r"###\s*(instruction|system|prompt)",
]

# Compile patterns for performance
COMPILED_PATTERNS = [re.compile(p, re.IGNORECASE) for p in INJECTION_PATTERNS]


def check_message_length(message: str) -> Tuple[bool, str]:
    """Check if message exceeds maximum length."""
    if len(message) > MAX_MESSAGE_LENGTH:
        return False, f"Message too long. Maximum {MAX_MESSAGE_LENGTH} characters allowed."
    return True, ""


def detect_injection_patterns(message: str) -> Tuple[bool, str]:
    """Detect potential prompt injection patterns."""
    message_lower = message.lower()

    for pattern in COMPILED_PATTERNS:
        if pattern.search(message_lower):
            logger.warning(f"Potential injection detected: pattern matched")
            return False, "I can only answer questions about Raoul's professional experience and skills."

    return True, ""


def sanitize_message(message: str) -> str:
    """
    Sanitize user message.
    Removes potentially harmful characters while preserving readability.
    """
    # Remove null bytes
    message = message.replace('\x00', '')

    # Normalize whitespace (collapse multiple spaces/newlines)
    message = re.sub(r'\s+', ' ', message).strip()

    return message


def validate_message(message: str) -> Tuple[bool, str, str]:
    """
    Main validation function.
    Returns: (is_valid, error_message, sanitized_message)
    """
    # Check for empty message
    if not message or not message.strip():
        return False, "Message cannot be empty.", ""

    # Sanitize first
    sanitized = sanitize_message(message)

    # Check length
    is_valid, error = check_message_length(sanitized)
    if not is_valid:
        return False, error, ""

    # Check for injection patterns
    is_valid, error = detect_injection_patterns(sanitized)
    if not is_valid:
        return False, error, ""

    return True, "", sanitized
