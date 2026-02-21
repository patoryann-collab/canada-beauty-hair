# Chatbot Beauté IA - Backend

## Installation
```bash
# Installer les dépendances manquantes
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
```

## Démarrage
```bash
# Démarrer le serveur IA
python backend/main.py

# Résultat attendu :
# INFO:     Uvicorn running on http://0.0.0.0:8000
# INFO:     Application startup complete.
```

## Test
```bash
# Test direct
curl -X POST "http://localhost:8000/chat" -H "Content-Type: application/json" -d "{\"message\": \"Quel shampoing pour cheveux secs ?\"}"
```

## Architecture
- **FastAPI** : Serveur web professionnel
- **Transformers** : Intelligence Hugging Face
- **Uvicorn** : Lanceur serveur
- **PyTorch** : Moteur IA (installé automatiquement)

## Intégration React
Le chatbot est déjà intégré dans la page Services.jsx

## Questions à tester
- "Quel shampoing pour cheveux secs ?"
- "Comment faire un brushing parfait ?"
- "Quelle couleur pour ma peau ?"
- "Conseils pour cheveux frisés"
