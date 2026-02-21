from fastapi import FastAPI
from transformers import pipeline
import uvicorn

# Chatbot IA Beauté
chatbot = pipeline("conversational", model="microsoft/DialoGPT-medium")

app = FastAPI()

@app.post("/chat")
async def beauty_chat(message: str):
    response = chatbot(message)
    beauty_reply = f"💇‍♀️ Conseil Beauté IA : {response[0]['generated_text']}"
    return {
        "reply": beauty_reply,
        "timestamp": "2024",
        "status": "success"
    }

@app.get("/")
async def home():
    return {"message": "Chatbot Beauté IA - Service Actif"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
