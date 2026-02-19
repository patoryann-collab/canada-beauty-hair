import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Schedule, People, Filter, Close, WhatsApp } from '@mui/icons-material';

const servicesData = [
  {
    id: 1,
    title: "Coupe Premium",
    description: "Coupe personnalisée avec diagnostic capillaire complet et styling professionnel. Service premium pour un look sur mesure.",
    price: 120,
    duration: "1h30",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600",
    category: "coupe",
    features: ["Diagnostic capillaire", "Coupe sur mesure", "Styling professionnel", "Conseils entretien"],
    popular: true
  },
  {
    id: 2,
    title: "Coloration Luxe",
    description: "Coloration professionnelle avec produits haut de gamme. Balayage, couleur pleine ou mèches selon vos désirs.",
    price: 180,
    duration: "2h30",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600",
    category: "coloration",
    features: ["Couleur sur mesure", "Balayage précis", "Soin post-coloration", "Protection cheveux"],
    popular: true
  },
  {
    id: 3,
    title: "Soins Capillaires",
    description: "Soin profond pour revitaliser vos cheveux. Masque nourrissant et massage crânien relaxant.",
    price: 90,
    duration: "1h",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600",
    category: "soins",
    features: ["Soin profond", "Masque nourrissant", "Massage crânien", "Résultat éclat"]
  },
  {
    id: 4,
    title: "Forfait Complet",
    description: "Package luxe : coupe + coloration + soin complet. Transformation complète pour un look parfait.",
    price: 280,
    duration: "4h",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600",
    category: "forfait",
    features: ["Coupe + coloration", "Soin complet", "Styling final", "Résultat premium"],
    bestseller: true
  },
  {
    id: 5,
    title: "Extension Premium",
    description: "Pose d'extensions de qualité avec méthodes professionnelles. Volume et longueur instantanés.",
    price: 220,
    duration: "3h",
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600",
    category: "extensions",
    features: ["Extensions qualité", "Pose professionnelle", "Effet naturel", "Durée garantie"]
  },
  {
    id: 6,
    title: "Brushing Signature",
    description: "Brushing professionnel avec produits luxe. Coiffage élégant pour événements spéciaux.",
    price: 75,
    duration: "1h",
    rating: 4.6,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600",
    category: "coiffage",
    features: ["Brushing professionnel", "Produits luxe", "Coiffage élégant", "Tenue garantie"]
  }
];

const categories = [
  { id: 'all', name: 'Tous les services', icon: <Filter fontSize="small" /> },
  { id: 'coupe', name: 'Coupe', icon: <Star fontSize="small" /> },
  { id: 'coloration', name: 'Coloration', icon: <Star fontSize="small" /> },
  { id: 'soins', name: 'Soins', icon: <Star fontSize="small" /> },
  { id: 'forfait', name: 'Forfaits', icon: <Star fontSize="small" /> }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

  const handleWhatsAppBooking = (service) => {
    const message = encodeURIComponent(`Bonjour, je souhaite prendre rendez-vous pour : ${service.title}\n\n💰 Prix : ${service.price}$\n⏱️ Durée : ${service.duration}\n\nMerci de me confirmer la disponibilité.`);
    window.open(`https://wa.me/33612345678?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] opacity-90"></div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nos Prestations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#D4AF37] font-medium uppercase tracking-widest"
          >
            Services de luxe exclusifs
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-[#0A0A0A] border-y border-[#E5E5E5]/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/50'
                    : 'bg-[#1A1A1A] text-[#E5E5E5] border border-[#E5E5E5]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#E5E5E5]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {service.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Populaire
                      </div>
                    )}
                    {service.bestseller && (
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Best-seller
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-[#E5E5E5] mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fontSize="small" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-[#E5E5E5]">
                      {service.rating} ({service.reviews} avis)
                    </span>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-black text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {service.price}$
                      </span>
                      <span className="ml-2 text-sm text-[#E5E5E5]">{service.duration}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => handleWhatsAppBooking(service)}
                    className="w-full bg-[#D4AF37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#B89430] transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsApp fontSize="small" />
                    Réserver sur WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1A1A1A] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#E5E5E5]/20"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image */}
                <div className="lg:w-1/2 h-64 lg:h-auto">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2 p-8 flex flex-col">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-full text-[#E5E5E5] hover:bg-[#0A0A0A] transition-colors"
                  >
                    <Close fontSize="small" />
                  </button>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37] text-white text-sm font-medium rounded-full capitalize">
                      {selectedService.category}
                    </span>
                  </div>
                  
                  <h2 
                    className="text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {selectedService.title}
                  </h2>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      <Schedule fontSize="small" className="text-[#D4AF37]" />
                      <span className="text-[#E5E5E5]">{selectedService.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star fontSize="small" className="text-[#D4AF37]" />
                      <span className="text-[#E5E5E5]">{selectedService.rating} ({selectedService.reviews} avis)</span>
                    </div>
                  </div>
                  
                  <p className="text-[#E5E5E5] mb-6 leading-relaxed">
                    {selectedService.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Ce service inclut :</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                          <span className="text-sm text-[#E5E5E5]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {selectedService.price}$
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleWhatsAppBooking(selectedService);
                        setSelectedService(null);
                      }}
                      className="w-full bg-[#D4AF37] text-white px-6 py-4 rounded-full font-medium hover:bg-[#B89430] transition-colors flex items-center justify-center space-x-2"
                    >
                      <WhatsApp fontSize="small" />
                      <span>Réserver via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
