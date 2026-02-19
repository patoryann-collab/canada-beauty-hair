import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ContentCut, Star, Phone, WhatsApp } from '@mui/icons-material';
import Footer from '../components/Footer';

const heroImageUrl = "https://i.pinimg.com/736x/54/97/13/549713fb214f17fdd04bf0341e1c7532.jpg";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#0A0A0A]">
      {/* SECTION 1 : HERO */}
      <section className="relative h-[85vh] flex items-center px-6 lg:px-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImageUrl} alt="Hero" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Où la Beauté rencontre la <span className="text-[#D4AF37]">Confiance</span>
              </motion.h1>
              <p className="text-xl text-[#E5E5E5] max-w-lg font-medium mb-8">
                Salon de coiffure luxe à Montréal. Expert en coupes, colorations et soins capillaires premium pour une clientèle exigeante.
              </p>
              <Link 
                to="/services" 
                className="inline-block bg-[#D4AF37] text-white px-12 py-4 rounded-full font-black uppercase shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : STATS */}
      <section className="py-16 bg-[#0A0A0A] border-y border-[#E5E5E5]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { number: '200+', label: 'Experts', icon: <ContentCut fontSize="large" /> },
              { number: '15k+', label: 'Clients', icon: <Star fontSize="large" /> },
              { number: '12+', label: 'Prix', icon: <Phone fontSize="large" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8"
              >
                <div className="text-5xl mb-4 text-[#D4AF37]">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.number}</div>
                <div className="text-lg text-[#E5E5E5] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : SIGNATURE SERVICES */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Services Signature
            </motion.h2>
            <p className="text-xl text-[#D4AF37] font-medium uppercase tracking-widest">
              L'excellence capillaire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Coupe & Style',
                description: 'Coupe sur mesure avec styling professionnel pour un look unique',
                price: 'À partir de 120$',
                image: 'https://i.pinimg.com/736x/8f/bb/46/8fbb46ef1a4d5ae66b0e5a075318ff4d.jpg'
              },
              {
                id: 2,
                title: 'Coloration Expert',
                description: 'Coloration premium avec produits haut de gamme et soin complet',
                price: 'À partir de 180$',
                image: 'https://i.pinimg.com/736x/82/80/ef/8280ef50820d6d2d330b15e45378a742.jpg'
              },
              {
                id: 3,
                title: 'Soins Capillaires',
                description: 'Soins profonds pour la santé et la beauté de vos cheveux',
                price: 'À partir de 90$',
                image: 'https://i.pinimg.com/1200x/5e/d3/49/5ed3496165903b919724ab41147f82b2.jpg'
              }
            ].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] border border-[#E5E5E5]/20 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{service.title}</h3>
                <p className="text-[#E5E5E5] mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>{service.price}</span>
                  <button 
                    onClick={() => window.open('https://wa.me/15149986842?text=Bonjour, je souhaite réserver un service', '_blank')}
                    className="bg-[#D4AF37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#B89430] transition-colors"
                  >
                    <Phone fontSize="small" />
                    Réserver
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : TARIFS LUXURY */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#E5E5E5]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tarifs Prestige
            </motion.h2>
            <p className="text-xl text-[#D4AF37] font-medium uppercase tracking-widest">
              Luxury Made Affordable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Coupe Premium',
                description: 'Coupe personnalisée avec diagnostic capillaire et styling',
                price: 120,
                duration: '1h30'
              },
              {
                title: 'Coloration Luxe',
                description: 'Coloration professionnelle avec balayage ou couleur pleine',
                price: 180,
                duration: '2h30'
              },
              {
                title: 'Soins Complet',
                description: 'Soin profond + masque + massage crânien',
                price: 90,
                duration: '1h'
              },
              {
                title: 'Forfait Complet',
                description: 'Coupe + coloration + soin complet',
                price: 280,
                duration: '4h'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] border border-[#E5E5E5]/20 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{service.title}</h3>
                <p className="text-[#E5E5E5] mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#D4AF37]">{service.duration}</span>
                  <span className="text-2xl font-black text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>{service.price}$</span>
                </div>
                <div className="border-t border-[#E5E5E5]/20 pt-4"></div>
                <button 
                  onClick={() => window.open('https://wa.me/15149986842?text=Bonjour, je souhaite réserver un service', '_blank')}
                  className="w-full bg-[#D4AF37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#B89430] transition-colors"
                >
                  Réserver sur WhatsApp
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 : TÉMOIGNAGES */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#E5E5E5]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Témoignages
            </motion.h2>
            <p className="text-xl text-[#D4AF37] font-medium uppercase tracking-widest">
              Ce que nos clients disent
            </p>
          </div>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {[
                {
                  name: 'Marie Laurent',
                  rating: 5,
                  text: 'Service exceptionnel ! Ma coupe est parfaite et la coloration exactement ce que je voulais. Je recommande vivement !',
                  avatar: 'https://images.unsplash.com/photo-1494790108757-5e7eb9b6e7d?q=80&w=100'
                },
                {
                  name: 'Sophie Bernard',
                  rating: 5,
                  text: 'Professionnalisme au top. Le salon est magnifique et le personnel très Attentionné. Je suis Ravie !',
                  avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722623d1?q=80&w=100'
                },
                {
                  name: 'Thomas Dubois',
                  rating: 5,
                  text: 'Meilleur salon de coiffure à Montréal. Service impeccable et résultat incroyable. À refaire sans hésiter !',
                  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100'
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 bg-[#1A1A1A] border border-[#E5E5E5]/20 rounded-2xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <div className="flex text-[#D4AF37]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} fontSize="small" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#E5E5E5] italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open('https://wa.me/15149986842?text=Bonjour, je souhaite prendre rendez-vous', '_blank')}
        className="fixed bottom-8 right-8 bg-[#D4AF37] text-white p-4 rounded-full shadow-lg hover:bg-[#B89430] transition-all duration-300 z-50 hover:scale-110"
      >
        <WhatsApp fontSize="large" />
      </button>
    </div>
  );
}
