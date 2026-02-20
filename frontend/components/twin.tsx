'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function Twin() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(process.env.NEXT_PUBLIC_API_KEY ? { 'X-API-Key': process.env.NEXT_PUBLIC_API_KEY } : {}),
                },
                body: JSON.stringify({
                    message: userMessage.content,
                    session_id: sessionId || undefined,
                }),
            });

            if (!response.ok) throw new Error('Failed to send message');

            const data = await response.json();

            if (!sessionId) {
                setSessionId(data.session_id);
            }

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.response,
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            // Refocus the input after message is sent
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Check if avatar exists
    const [hasAvatar, setHasAvatar] = useState(false);
    useEffect(() => {
        // Check if avatar.png exists
        fetch('/avatar.png', { method: 'HEAD' })
            .then(res => setHasAvatar(res.ok))
            .catch(() => setHasAvatar(false));
    }, []);

    return (
        <div className="flex flex-col h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 shadow-2xl shadow-black/20 overflow-hidden">
            {/* Header */}
            <div className="bg-zinc-800/50 border-b border-zinc-700/50 px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-base font-medium text-white">
                            Digital Twin Assistant
                        </h2>
                        <p className="text-xs text-zinc-400">Explore my security frameworks and AI architectures</p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        {hasAvatar ? (
                            <img
                                src="/avatar.png"
                                alt="Digital Twin Avatar"
                                className="w-20 h-20 rounded-2xl mx-auto mb-4 border border-zinc-700 shadow-lg"
                            />
                        ) : (
                            <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <Bot className="w-8 h-8 text-zinc-400" />
                            </div>
                        )}
                        <p className="text-white font-medium mb-1">Welcome!</p>
                        <p className="text-zinc-400 text-sm max-w-xs">
                            I&apos;m Raoul&apos;s digital twin. Ask me about my professional experience, skills, or projects.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6 justify-center">
                            <span className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-400">Experience</span>
                            <span className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-400">Skills</span>
                            <span className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-400">Projects</span>
                        </div>
                    </div>
                )}

                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-3 ${
                            message.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {message.role === 'assistant' && (
                            <div className="flex-shrink-0">
                                {hasAvatar ? (
                                    <img
                                        src="/avatar.png"
                                        alt="Digital Twin Avatar"
                                        className="w-8 h-8 rounded-lg border border-zinc-700"
                                    />
                                ) : (
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                )}
                            </div>
                        )}

                        <div
                            className={`max-w-[75%] rounded-xl px-4 py-3 ${
                                message.role === 'user'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-zinc-800 border border-zinc-700/50 text-zinc-100'
                            }`}
                        >
                            <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                            <p
                                className={`text-[10px] mt-2 ${
                                    message.role === 'user' ? 'text-emerald-200' : 'text-zinc-500'
                                }`}
                            >
                                {message.timestamp.toLocaleTimeString()}
                            </p>
                        </div>

                        {message.role === 'user' && (
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center">
                                    <User className="w-4 h-4 text-zinc-300" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-3 justify-start">
                        <div className="flex-shrink-0">
                            {hasAvatar ? (
                                <img
                                    src="/avatar.png"
                                    alt="Digital Twin Avatar"
                                    className="w-8 h-8 rounded-lg border border-zinc-700"
                                />
                            ) : (
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                            )}
                        </div>
                        <div className="bg-zinc-800 border border-zinc-700/50 rounded-xl px-4 py-3">
                            <div className="flex space-x-1.5">
                                <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce delay-100" />
                                <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce delay-200" />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-zinc-800 p-4 bg-zinc-900/50">
                <div className="flex gap-3 mb-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask me anything..."
                        className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-white placeholder-zinc-500 text-sm transition-all"
                        disabled={isLoading}
                        autoFocus
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        className="px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-[10px] text-zinc-600 text-center mt-1">
                    Next.js · AWS Bedrock · Graph RAG · Qdrant · Sovereign Architecture
                </p>
            </div>
        </div>
    );
}