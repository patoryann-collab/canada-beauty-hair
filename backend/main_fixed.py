from fastapi import FastAPI
import uvicorn

# Chatbot IA Beauté (version simple sans PyTorch)
app = FastAPI()

@app.post("/chat")
async def beauty_chat(message: str):
    # Réponses pré-définies pour éviter l'erreur 500
    responses = {
        "shampoing": "Essayez Kérastase Nutritive pour cheveux secs",
        "brushing": "Utilisez un protecteur thermique avant brushing", 
        "couleur": "Faites un test cutané avant coloration",
        "frisés": "Pour cheveux frisés, essayez la crème à l'karité",
        "normaux": "Un shampoing doux est idéal pour usage quotidien",
        "colorés": "Utilisez un shampoing sans sulfates pour préserver la couleur",
        "sec": "L'huile d'argan est excellente pour nourrir les pointes sèches"
    }
    
    # Simple keyword matching
    message_lower = message.lower()
    if "shampoing" in message_lower or "sec" in message_lower:
        reply = responses["shampoing"]
    elif "brushing" in message_lower:
        reply = responses["brushing"]
    elif "couleur" in message_lower or "coloré" in message_lower:
        reply = responses["couleur"]
    elif "frisé" in message_lower:
        reply = responses["frisés"]
    elif "normal" in message_lower:
        reply = responses["normaux"]
    elif "color" in message_lower:
        reply = responses["colorés"]
    else:
        reply = responses["default"]
    
    return {
        "reply": f"💇‍♀️ Conseil Beauté : {reply}",
        "timestamp": "2024",
        "status": "success"
    }

@app.get("/")
async def home():
    return {"message": "Chatbot Beauté IA - Service Actif"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
