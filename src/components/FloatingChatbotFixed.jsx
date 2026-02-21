import React, { useState, useEffect } from 'react';
import { WhatsApp, Close, Send, SmartToy } from '@mui/icons-material';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Messages de bienvenue
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        bot: true,
        text: "👋 Bonjour ! Je suis votre conseiller beauté IA. Comment puis-je vous aider ?",
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  }, [messages.length]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      user: true,
      text: input,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = input;
    setInput('');
    setLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ message: messageToSend })
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        bot: true,
        text: data.reply,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        bot: true,
        text: "😕 Désolé, je rencontre des difficultés techniques pour me connecter au serveur. Essayez de nouveau ou contactez-nous directement.",
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "Quel shampoing pour cheveux secs ?",
    "Comment faire un brushing volume ?",
    "Quelle huile pour cheveux frisés ?",
    "Conseils pour cheveux colorés ?"
  ];

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-[#D4AF37] text-white p-4 rounded-full shadow-lg hover:bg-[#B89430] transition-all duration-300 z-50 hover:scale-110 group"
        >
          <SmartToy fontSize="large" className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-4 md:right-4 w-full max-w-md h-[500px] md:w-96 md:h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-[#D4AF37]/20">
          {/* Header */}
          <div className="bg-[#D4AF37] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SmartToy fontSize="small" />
              <span className="font-semibold">Conseiller Beauté IA</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-lg transition-colors"
            >
              <Close fontSize="small" />
            </button>
          </div>

          {/* Corps du Chat - Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.user 
                    ? 'bg-[#D4AF37] text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70 text-right">{msg.time}</p>
                </div>
              </div>
            ))}
            
            {/* Indicateur de frappe */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-800 rounded-bl-none rounded-2xl p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions de questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-blue-50 border-t border-blue-100">
              <p className="text-xs text-blue-600 font-medium mb-2">Questions rapides :</p>
              <div className="flex flex-wrap gap-1">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInput(question)}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Zone de saisie */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre question beauté..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-[#D4AF37] text-white p-2 rounded-lg hover:bg-[#B89430] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send fontSize="small" />
                )}
              </button>
            </div>
            
            {/* Lien WhatsApp */}
            <div className="mt-2 text-center">
              <button
                onClick={() => window.open('https://wa.me/15149986842?text=Bonjour, je souhaite prendre rendez-vous', '_blank')}
                className="text-xs text-green-600 hover:text-green-700 flex items-center justify-center gap-1 transition-colors"
              >
                <WhatsApp fontSize="small" />
                <span>Parler à un conseiller sur WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;