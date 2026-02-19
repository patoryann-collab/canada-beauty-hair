import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Favorite, ShoppingCart, Menu, Close, Phone } from '@mui/icons-material';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'À Propos', path: '/about' },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15149986842?text=Bonjour, je souhaite prendre rendez-vous', '_blank');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#1B3022] to-[#C5A059] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BS</span>
              </div>
              <span 
                className="text-xl font-black text-[#1B3022] group-hover:text-[#C5A059] transition-colors"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Beauty Shop
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#C5A059]'
                      : 'text-[#1B3022] hover:text-[#C5A059]'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C5A059]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-[#1B3022] hover:text-[#C5A059] transition-colors">
                <Search fontSize="small" />
              </button>
              <button className="p-2 text-[#1B3022] hover:text-[#C5A059] transition-colors">
                <Favorite fontSize="small" />
              </button>
              <button className="p-2 text-[#1B3022] hover:text-[#C5A059] transition-colors">
                <ShoppingCart fontSize="small" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#C5A059] text-white px-4 py-2 rounded-full font-medium hover:bg-[#B8944F] transition-colors flex items-center space-x-2"
              >
                <Phone fontSize="small" />
                <span>Réserver</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#1B3022]"
            >
              {isMenuOpen ? <Close fontSize="small" /> : <Menu fontSize="small" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#C5A059]'
                      : 'text-[#1B3022] hover:text-[#C5A059]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 flex items-center space-x-4">
                <button className="p-2 text-[#1B3022] hover:text-[#C5A059] transition-colors">
                  <Search fontSize="small" />
                </button>
                <button className="p-2 text-[#1B3022] hover:text-[#C5A059] transition-colors">
                  <Favorite fontSize="small" />
                </button>
                <button className="p-2 text-[#1B3022] hover:text-[#C5A059] transition-colors">
                  <ShoppingCart fontSize="small" />
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-[#C5A059] text-white px-4 py-2 rounded-full font-medium hover:bg-[#B8944F] transition-colors flex items-center space-x-2"
                >
                  <Phone fontSize="small" />
                  <span>Réserver</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}
