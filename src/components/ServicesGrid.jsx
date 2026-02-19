import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Schedule, People, Filter, Close, Phone, WhatsApp } from '@mui/icons-material';

const services = [
  {
    id: 1,
    title: "Soin du Visage Luxe",
    description: "Un soin complet du visage avec des produits bio pour une peau éclatante",
    price: "89€",
    duration: "90min",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600",
    category: "soins"
  },
  {
    id: 2,
    title: "Maquillage de Soirée",
    description: "Maquillage professionnel pour vos événements spéciaux",
    price: "65€",
    duration: "60min",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600",
    category: "maquillage"
  },
  {
    id: 3,
    title: "Coupe & Brushing",
    description: "Coupe moderne avec brushing pour un look parfait",
    price: "55€",
    duration: "75min",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600",
    category: "cheveux"
  },
  {
    id: 4,
    title: "Manucure Française",
    description: "Manucure classique au look élégant et intemporel",
    price: "45€",
    duration: "60min",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1604654894618-2e604c8e6a6a?q=80&w=600",
    category: "ongles"
  },
  {
    id: 5,
    title: "Soin Anti-Âge",
    description: "Traitement ciblé pour prévenir et corriger les signes de l'âge",
    price: "120€",
    duration: "120min",
    rating: 5.0,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600",
    category: "soins"
  },
  {
    id: 6,
    title: "Balayage Naturel",
    description: "Balayage subtil pour un effet ensoleillé naturel",
    price: "95€",
    duration: "150min",
    rating: 4.8,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1562322145-9ccb7cc9fd1f?q=80&w=600",
    category: "cheveux"
  }
];

export default function ServicesGrid() {
  const handleWhatsAppBooking = (serviceTitle) => {
    const message = encodeURIComponent(`Bonjour, je souhaite prendre rendez-vous pour : ${serviceTitle}`);
    window.open(`https://wa.me/15149986842?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#1B3022] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nos Prestations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#C5A059] font-medium uppercase tracking-widest"
          >
            Des services d'excellence pour votre beauté
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#C5A059] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {service.category}
                </div>
                
                {/* Quick Action */}
                <button
                  onClick={() => handleWhatsAppBooking(service.title)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#1B3022] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <WhatsApp fontSize="small" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-[#1B3022] mb-2 group-hover:text-[#C5A059] transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Schedule fontSize="small" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star fontSize="small" className="text-yellow-500" />
                    <span>{service.rating}</span>
                    <span>({service.reviews})</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-[#1B3022]">
                      {service.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppBooking(service.title)}
                    className="bg-[#C5A059] text-white px-4 py-2 rounded-full font-medium hover:bg-[#B8944F] transition-colors"
                  >
                    Réserver
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center space-x-2 bg-[#1B3022] text-white px-8 py-4 rounded-full font-medium hover:bg-[#152418] transition-colors"
          >
            <span>Voir tous les services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
