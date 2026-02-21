import os
import sqlite3
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import openai

# Load environment variables
load_dotenv()

# Initialize OpenAI client for OpenRouter
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

client = openai.AsyncOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)

# Database setup
DB_FILE = "chat.db"

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            role TEXT NOT NULL,
            content TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    init_db()
    yield
    # Shutdown

app = FastAPI(lifespan=lifespan)

# Allow CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with exact frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    session_id: str

class ChatResponse(BaseModel):
    reply: str

# Resume data context for the AI
RESUME_CONTEXT = """
You are an AI assistant for Sharique's portfolio website. Your goal is to answer questions about Sharique based on his resume data.
Keep responses concise, polite, and helpful. Do not make up information that is not in the context.

Name: Sharique Rahmani
Role: Full-stack Developer / Frontend Engineer
Links: GitHub (StarkShelby), Twitter (ShariqueStark), LinkedIn

Key Projects:
1. Hotwheels-Collection: Web app to track, organize, and showcase Hot Wheels cars. (HTML, Tailwind, JS, MongoDB, Express)
2. ArtifexAI: Web app that uses AI to generate images from text prompts. (React, Tailwind, JS, MongoDB, Express)
3. Portfolio Website: Personal portfolio to showcase work. (React, Tailwind)
4. Recipe Saver App: iOS app using SwiftUI to save and view recipes.
5. Velora Mist: Sleek mojito shop website with GSAP animations. (React, Tailwind, JS, GSAP)
6. ResumeForge: AI-powered ATS-friendly resume builder. (Next.js, Tailwind, Express, Framer Motion)

Work Experience:
- Frontend Engineer Intern: Developed web platform using React.js.
- Mobile App Dev (JSM Tech): Designed and developed iOS & Android apps using React Native.
- Freelance App Dev Project: Led development of a mobile app for a client.
- Lead Frontend Developer: Developed UI features using modern frontend tech.

Testimonials:
- Ayush (Video Editor): Creative, problem-solver, dedicated.
- Clara (Logo Designer): Sharp eye for design, attention to detail.
- Vishal Meghani: Professional, prompt, exceptional results.

Skills & Tech Stack: React, Next.js, React Native, Tailwind CSS, JavaScript, SwiftUI, MongoDB, Express, GSAP.
"""

def save_message(session_id: str, role: str, content: str):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO messages (session_id, role, content) VALUES (?, ?, ?)",
        (session_id, role, content)
    )
    conn.commit()
    conn.close()

def get_chat_history(session_id: str):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT role, content FROM messages WHERE session_id = ? ORDER BY timestamp ASC",
        (session_id,)
    )
    rows = cursor.fetchall()
    conn.close()
    return [{"role": row[0], "content": row[1]} for row in rows]

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    if not OPENROUTER_API_KEY or OPENROUTER_API_KEY == "your_openrouter_api_key_here":
        raise HTTPException(status_code=500, detail="OpenRouter API Key is not configured")

    session_id = request.session_id
    user_message = request.message

    # Save user message
    save_message(session_id, "user", user_message)

    # Prepare messages for API
    history = get_chat_history(session_id)
    
    messages = [
        {"role": "system", "content": RESUME_CONTEXT}
    ]
    # Add history (up to last 10 messages to save tokens)
    messages.extend(history[-10:])

    try:
        response = await client.chat.completions.create(
            model="openrouter/free",
            messages=messages,
        )
        
        reply_content = response.choices[0].message.content
        
        # Save AI reply
        save_message(session_id, "assistant", reply_content)

        return ChatResponse(reply=reply_content)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
