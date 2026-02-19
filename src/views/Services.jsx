import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Schedule, People, Filter, Close, WhatsApp } from '@mui/icons-material';

const servicesData = [
  {
    id: 1,
    title: "Knotless Braids",
    description: "Tresses sans nœuds - les plus demandées pour le confort. Technique moderne sans tension sur le cuir chevelu.",
    price: 150,
    duration: "3h",
    rating: 4.9,
    reviews: 245,
    image: "https://i.pinimg.com/736x/83/83/7f/83837fd6e813d409bc6ea2096ec71e23.jpg",
    category: "tresses",
    features: ["Sans tension", "Look naturel", "Durée 4-6 semaines", "Adapté tous types"],
    popular: true
  },
  {
    id: 2,
    title: "Box Braids Classiques",
    description: "Tresses box traditionnelles avec finition parfaite. Style indémodable et polyvalent.",
    price: 120,
    duration: "2h30",
    rating: 4.8,
    reviews: 189,
    image: "https://i.pinimg.com/1200x/9a/ac/be/9aacbea19d9f381e062da34e2eb88e6d.jpg",
    category: "tresses",
    features: ["Style classique", "Finition soignée", "Durée 6-8 semaines", "Entretien facile"]
  },
  {
    id: 3,
    title: "Cornrows / Tresses plaquées",
    description: "Styles minimalistes ou complexes selon votre choix. Tresses plaquées près du cuir chevelu.",
    price: 100,
    duration: "2h",
    rating: 4.7,
    reviews: 156,
    image: "https://i.pinimg.com/736x/0b/05/28/0b052868afa9b36234803c6b490b4cc8.jpg",
    category: "tresses",
    features: ["Styles variés", "Minimaliste ou complexe", "Durée 2-4 semaines", "Protection maximale"]
  },
  {
    id: 4,
    title: "Butterfly Locs",
    description: "Effet texturé et bohème très tendance. Locs avec effet papillon unique.",
    price: 180,
    duration: "4h",
    rating: 4.9,
    reviews: 203,
    image: "https://i.pinimg.com/1200x/f2/fa/5a/f2fa5a843b8ac2db8a62225dda74676d.jpg",
    category: "tresses",
    features: ["Effet bohème", "Texture unique", "Durée 6-8 semaines", "Très tendance"],
    trending: true
  },
  {
    id: 5,
    title: "Soft Locs",
    description: "Léger et élégant. Locs souples avec mouvement naturel et look sophistiqué.",
    price: 160,
    duration: "3h30",
    rating: 4.8,
    reviews: 167,
    image: "https://i.pinimg.com/736x/32/32/c7/3232c7c44e97f015c5c2913c2447251e.jpg",
    category: "tresses",
    features: ["Look léger", "Mouvement naturel", "Élégant", "Durée 4-6 semaines"]
  },
  {
    id: 6,
    title: "Ponytail Braided",
    description: "Queue de cheval tressée haute. Style élégant et pratique pour toutes occasions.",
    price: 80,
    duration: "1h30",
    rating: 4.6,
    reviews: 134,
    image: "https://i.pinimg.com/736x/1b/29/41/1b2941574526e2e689448ca40d9ea564.jpg",
    category: "tresses",
    features: ["Style pratique", "Élégant", "Rapide à réaliser", "Polyvalent"]
  },
  {
    id: 7,
    title: "Tribal Braids",
    description: "Inspirées des styles traditionnels africains. Designs artistiques et culturels.",
    price: 200,
    duration: "4h30",
    rating: 4.9,
    reviews: 278,
    image: "https://i.pinimg.com/736x/f6/98/c5/f698c5195f858a9f4859dea88ba2b052.jpg",
    category: "tresses",
    features: ["Designs artistiques", "Inspiration culturelle", "Unique", "Durée 6-8 semaines"],
    premium: true
  },
  {
    id: 8,
    title: "Lemonade Braids",
    description: "Tresses sur le côté avec queue de cheval. Style frais et moderne très populaire.",
    price: 140,
    duration: "3h",
    rating: 4.7,
    reviews: 195,
    image: "https://i.pinimg.com/736x/b2/31/fe/b231fe2cfd442eb4d2b5a20275e00b03.jpg",
    category: "tresses",
    features: ["Style latéral", "Moderne", "Très populaire", "Look frais"]
  },
  {
    id: 9,
    title: "Passion Twists",
    description: "Look doux et bouclé. Twists souples avec effet naturel et mouvement.",
    price: 130,
    duration: "2h30",
    rating: 4.8,
    reviews: 223,
    image: "https://i.pinimg.com/736x/b5/b5/77/b5b57799e1bf573dfb15c80873c406e0.jpg",
    category: "tresses",
    features: ["Effet doux", "Bouclé naturel", "Mouvement", "Look naturel"]
  },
  {
    id: 10,
    title: "Pop Smoke Braids",
    description: "Tresses larges et symétriques. Style audacieux avec effet fumé unique.",
    price: 170,
    duration: "3h30",
    rating: 4.7,
    reviews: 156,
    image: "https://i.pinimg.com/736x/c0/a6/c0/c0a6c0829cd31e892649e0d4e7e89aa4.jpg",
    category: "tresses",
    features: ["Tresses larges", "Symétriques", "Effet fumé", "Style audacieux"],
    trending: true
  },
  {
    id: 11,
    title: "Balayage AirTouch",
    description: "Technique de coloration la plus haut de gamme en 2026. On utilise un sèche-cheveux pour séparer les petits cheveux avant de colorer.",
    price: 280,
    duration: "4h",
    rating: 4.9,
    reviews: 312,
    image: "https://i.pinimg.com/1200x/e6/f7/1c/e6f71ce5382c31afb3fee42602113024.jpg",
    category: "coloration",
    features: ["Blond ultra-fondu", "Repiose sans démarcation", "Parfait femmes occupées", "Technique 2026"],
    premium: true,
    bestseller: true
  },
  {
    id: 12,
    title: "Rallonges Invisible Tape-In",
    description: "Extensions adhésives ultra-fines qui ne se voient pas, même avec les cheveux attachés.",
    price: 220,
    duration: "2h30",
    rating: 4.8,
    reviews: 267,
    image: "https://i.pinimg.com/1200x/c7/9b/e1/c79be157d84b2c926b357fc27d72be1d.jpg",
    category: "extensions",
    features: ["Ultra-fines", "Invisibles", "Volume instantané", "Parfait rue Peel"],
    trending: true
  },
  {
    id: 13,
    title: "Lissage au Tanin (Taninoplastie)",
    description: "Plus naturel que le lissage brésilien, il répare la fibre tout en lissant.",
    price: 180,
    duration: "3h",
    rating: 4.9,
    reviews: 289,
    image: "https://i.pinimg.com/1200x/27/52/94/275294340a6960cb09761a153c29c6ef.jpg",
    category: "lissage",
    features: ["Répare la fibre", "Combat humidité", "Plus naturel", "Été québécois"],
    premium: true
  },
  {
    id: 14,
    title: "Silk Press de Luxe",
    description: "Lissage thermique sur cheveux naturels pour un fini soyeux et brillant sans produits chimiques permanents.",
    price: 120,
    duration: "2h",
    rating: 4.7,
    reviews: 198,
    image: "https://i.pinimg.com/1200x/7c/b3/62/7cb3627130aee2ce8fd06c6fa4085f61.jpg",
    category: "lissage",
    features: ["Fini soyeux", "Brillant", "Sans chimiques", "Change look temporairement"],
    popular: true
  },

  {
    id: 17,
    title: "Coloration Money Piece & Gloss",
    description: "On décolore uniquement les deux mèches devant le visage pour illuminer le regard, suivi d'un gloss pour la brillance.",
    price: 140,
    duration: "2h",
    rating: 4.7,
    reviews: 178,
    image: "https://i.pinimg.com/1200x/0b/4d/f1/0b4df108fce822434d6426d9ad33de8d.jpg",
    category: "coloration",
    features: ["Illumine le regard", "Rapide et efficace", "Moins coûteux", "Très stylé"],
    popular: true
  }
];

const categories = [
  { id: 'all', name: 'Tous les services', icon: <Filter fontSize="small" /> },
  { id: 'tresses', name: 'Tresses & Braids', icon: <Star fontSize="small" /> },
  { id: 'coloration', name: 'Coloration', icon: <Star fontSize="small" /> },
  { id: 'extensions', name: 'Extensions', icon: <Star fontSize="small" /> },
  { id: 'lissage', name: 'Lissage', icon: <Star fontSize="small" /> },
  { id: 'popular', name: 'Populaires', icon: <Star fontSize="small" /> },
  { id: 'trending', name: 'Tendances', icon: <Star fontSize="small" /> },
  { id: 'premium', name: 'Premium', icon: <Star fontSize="small" /> }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : selectedCategory === 'popular'
    ? servicesData.filter(service => service.popular)
    : selectedCategory === 'trending'
    ? servicesData.filter(service => service.trending)
    : selectedCategory === 'premium'
    ? servicesData.filter(service => service.premium)
    : servicesData.filter(service => service.category === selectedCategory);

  const handleWhatsAppBooking = (service) => {
    const message = encodeURIComponent(`Bonjour, je souhaite prendre rendez-vous pour : ${service.title}\n\n💰 Prix : ${service.price}$\n⏱️ Durée : ${service.duration}\n\nMerci de me confirmer la disponibilité.`);
    window.open(`https://wa.me/15149986842?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://i.pinimg.com/736x/37/6f/4b/376f4be86d72e917e334290b6f6debab.jpg')",
            backgroundPosition: 'center 30%'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#1A1A1A]/90"></div>
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
