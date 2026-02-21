import os
from dotenv import load_dotenv # Pour lire le fichier .env
from groq import Groq
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

# --- 1. CONFIGURATION DE L'IA (SÉCURISÉE) ---
# On charge les variables d'environnement depuis le fichier .env
load_dotenv()

# On récupère la clé sans l'écrire en dur dans le code
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

try:
    if not GROQ_API_KEY:
        raise ValueError("La clé GROQ_API_KEY est introuvable dans le fichier .env")
    
    client = Groq(api_key=GROQ_API_KEY)
    MODEL_NAME = "llama-3.3-70b-versatile"
    print("✅ Connexion à l'IA Groq réussie (via variable d'environnement) !")
except Exception as e:
    print(f"❌ Erreur de configuration : {e}")

app = FastAPI()

# --- 2. CONFIGURATION CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

# --- 3. DÉFINITION DU RÔLE DE L'IA ---
SYSTEM_PROMPT = """
Tu es l'IA Experte Styliste Capillaire de "Beauté Ibrice". 
Ton rôle est de donner des diagnostics et des conseils techniques précis.
- Tu maîtrises la morphologie du visage pour conseiller des coupes.
- Tu connais la science des cheveux afro, bouclés, et lisses (échelles de 1 à 4C).
- Tu donnes des routines de soins basées sur l'état du cheveu (hydratation, nutrition, protéines).
- Tu es capable d'expliquer comment réaliser des coiffures africaines complexes (Braids, Locks, Nappy).
- Réponds de manière professionnelle, structurée et courte.
"""

@app.post("/chat")
async def beauty_chat(request: ChatRequest):
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.message}
            ],
            model=MODEL_NAME,
            temperature=0.7,
            max_tokens=1024,
        )
        
        reply = chat_completion.choices[0].message.content

        return {
            "reply": reply if reply else "Désolé, je n'ai pas pu générer de réponse.",
            "status": "success" if reply else "empty"
        }

    except Exception as e:
        print(f"🔥 Erreur Groq : {e}")
        return {
            "reply": "Erreur de connexion à l'IA. Vérifiez votre configuration .env",
            "status": "error"
        }

if __name__ == "__main__":
    print("🚀 Serveur Beauté Ibrice démarré sur http://localhost:8000")
    uvicorn.run(app, host="0.0.0.0", port=8000)