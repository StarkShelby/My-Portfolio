"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMessage, AiOutlineClose, AiOutlineSend } from "react-icons/ai";

interface Message {
    role: "user" | "assistant" | "system";
    content: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi there! I'm Sharique's AI assistant. Ask me anything about his experience, projects, or skills!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Create a session ID on load
    const [sessionId, setSessionId] = useState("");

    useEffect(() => {
        setSessionId(Math.random().toString(36).substring(7));
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            const response = await fetch(`${API_URL}/api/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage.content,
                    session_id: sessionId,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response");
            }

            const data = await response.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Oops! I encountered an error. Please try again later." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-[#0f111a] border border-white-100/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center text-white">
                            <div>
                                <h3 className="font-semibold text-lg">AI Assistant</h3>
                                <p className="text-xs text-white/80 md:-mt-1 md:block">Ask about my portfolio & skills</p>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Close chat"
                            >
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm custom-scrollbar">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user"
                                            ? "bg-purple-600 text-white rounded-tr-none"
                                            : "bg-[#1a1c29] border border-white/10 text-white/90 rounded-tl-none"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1a1c29] border border-white/10 text-white/90 p-3 rounded-2xl rounded-tl-none flex space-x-2 items-center">
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                            className="w-2 h-2 bg-purple-500 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                            className="w-2 h-2 bg-purple-500 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                            className="w-2 h-2 bg-purple-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form
                            onSubmit={sendMessage}
                            className="p-3 border-t border-white/10 bg-[#0f111a]"
                        >
                            <div className="flex items-center space-x-2 bg-[#1a1c29] rounded-full border border-white/10 px-4 py-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-white/40"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className={`p-2 rounded-full transition-colors ${input.trim() && !isLoading
                                        ? "bg-purple-600 text-white hover:bg-purple-700"
                                        : "bg-white/5 text-white/30 cursor-not-allowed"
                                        }`}
                                >
                                    <AiOutlineSend size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleChat}
                        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-900/40 hover:shadow-xl hover:shadow-purple-900/60 transition-all border border-white/20"
                        aria-label="Open chat"
                    >
                        <AiOutlineMessage size={28} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
