import React from 'react';
import { motion } from 'framer-motion';
import { SmartToy, Phone } from '@mui/icons-material';
import FloatingChatbotFixed from '../components/FloatingChatbotFixed';

const ChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#D4AF37] p-4 rounded-full">
              <SmartToy className="text-white text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Votre Conseiller Beauté IA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtenez des conseils personnalisés et instantanés pour tous vos besoins capillaires grâce à notre intelligence artificielle avancée.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Discutez avec votre expert beauté
            </h2>
            <p className="text-gray-600">
              Posez vos questions sur les shampoings, soins, brushing, colorations et bien plus encore !
            </p>
          </div>

          {/* Zone pour le chatbot */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <FloatingChatbotFixed />
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#F9F9F9] rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Besoin d'aide humaine ?</h3>
              <p className="text-gray-600 mb-4">
                Nos experts sont disponibles pour vous conseiller personnellement
              </p>
              <button
                onClick={() => window.open('https://wa.me/15149986842?text=Bonjour, je souhaite prendre rendez-vous', '_blank')}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <Phone />
                Contacter sur WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotPage;
