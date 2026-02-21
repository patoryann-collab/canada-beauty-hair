import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ContentCut, SmartToy, ShoppingCart } from '@mui/icons-material';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/services', icon: ContentCut, label: 'Services' },
    { path: '/chatbot', icon: SmartToy, label: 'IA' },
    { path: '/products', icon: ShoppingCart, label: 'Produits' }
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center p-2 transition-colors hover:scale-110 ${
                isActive ? 'text-[#D4AF37]' : 'text-gray-600'
              }`}
            >
              <Icon fontSize="small" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
