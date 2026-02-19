import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, LocationOn, Facebook, Instagram, Twitter, Schedule } from '@mui/icons-material';

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33612345678?text=Bonjour, je souhaite prendre rendez-vous', '_blank');
  };

  return (
    <footer className="bg-[#1B3022] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C5A059] to-white rounded-full flex items-center justify-center">
                <span className="text-[#1B3022] font-bold text-lg">BS</span>
              </div>
              <span 
                className="text-xl font-black"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Beauty Shop
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre salon de beauté haut de gamme où l'excellence rencontre la nature. 
              Des prestations d'exception pour sublimer votre beauté naturelle.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-[#C5A059]/20 rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Facebook fontSize="small" />
              </button>
              <button className="w-10 h-10 bg-[#C5A059]/20 rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Instagram fontSize="small" />
              </button>
              <button className="w-10 h-10 bg-[#C5A059]/20 rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Twitter fontSize="small" />
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 
              className="text-lg font-bold text-[#C5A059]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Navigation Rapide
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 
              className="text-lg font-bold text-[#C5A059]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nos Services
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.open('https://wa.me/33612345678?text=Bonjour, je souhaite prendre rendez-vous pour Soins du visage', '_blank')}
                  className="text-gray-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Soins du Visage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://wa.me/33612345678?text=Bonjour, je souhaite prendre rendez-vous pour Maquillage', '_blank')}
                  className="text-gray-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Maquillage Pro
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://wa.me/33612345678?text=Bonjour, je souhaite prendre rendez-vous pour Coiffure', '_blank')}
                  className="text-gray-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Coiffure & Soins
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://wa.me/33612345678?text=Bonjour, je souhaite prendre rendez-vous pour Ongles', '_blank')}
                  className="text-gray-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Manucure & Pédicure
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 
              className="text-lg font-bold text-[#C5A059]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone fontSize="small" className="text-[#C5A059]" />
                <span className="text-gray-300">+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail fontSize="small" className="text-[#C5A059]" />
                <span className="text-gray-300">contact@beauty-shop.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <LocationOn fontSize="small" className="text-[#C5A059]" />
                <span className="text-gray-300">123 Avenue Élégance<br />75008 Paris</span>
              </div>
              <div className="flex items-center space-x-3">
                <Schedule fontSize="small" className="text-[#C5A059]" />
                <div className="text-gray-300">
                  <div>Lun-Ven: 9h-19h</div>
                  <div>Sam: 9h-18h</div>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#C5A059] text-white px-4 py-3 rounded-full font-medium hover:bg-[#B8944F] transition-colors flex items-center justify-center space-x-2"
            >
              <Phone fontSize="small" />
              <span>Réserver sur WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Beauty Shop - Élégance Nature. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#C5A059] transition-colors">
                Politique de Confidentialité
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#C5A059] transition-colors">
                Mentions Légales
              </Link>
              <Link to="/cgv" className="text-gray-400 hover:text-[#C5A059] transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
