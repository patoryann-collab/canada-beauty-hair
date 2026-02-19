import { motion } from 'framer-motion';
import { WorkspacePremium, People, Favorite, AutoAwesome, Schedule, LocationOn, Phone, Mail } from '@mui/icons-material';

export default function About() {
  const teamMembers = [
    {
      name: "Sophie Laurent",
      role: "Directrice & Esthéticienne",
      image: "https://images.unsplash.com/photo-1494790108755-2616b912a3f6?q=80&w=400",
      experience: "15+ ans"
    },
    {
      name: "Marie Dubois",
      role: "Maquilleuse Professionnelle",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      experience: "10+ ans"
    },
    {
      name: "Claire Martin",
      role: "Coiffeuse & Coloriste",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
      experience: "12+ ans"
    }
  ];

  const milestones = [
    { year: "2014", title: "Ouverture du Salon", description: "Lancement de Beauty Shop avec 3 collaborateurs" },
    { year: "2017", title: "Première Extension", description: "Agrandissement et ajout de nouveaux services" },
    { year: "2020", title: "Certification Bio", description: "Obtention des certifications bio et écologiques" },
    { year: "2024", title: "Excellence", description: "Plus de 5000 clientes satisfaites" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600" 
            alt="Beauty Shop" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Notre Histoire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#D4AF37] font-medium leading-relaxed"
          >
            Depuis 2014, nous sublimons votre beauté naturelle avec expertise et passion
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl md:text-5xl font-black text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                L'Excellence au Service de la Beauté à Domicile
              </h2>
              <p className="text-[#E5E5E5] mb-6 leading-relaxed">
                Fondée en 2014 par Sophie Laurent, Beauty Shop est né d'une vision : apporter des soins de beauté 
                d'exception directement chez vous. Notre philosophie repose sur l'alliance parfaite 
                entre traditions et innovations, produits bio et techniques de pointe, le tout dans le confort de votre domicile.
              </p>
              <p className="text-[#E5E5E5] mb-8 leading-relaxed">
                Chaque jour, nous nous engageons à vous offrir une expérience unique où votre bien-être est au 
                cœur de nos préoccupations. Notre équipe d'experts dédiés se déplace pour vous accompagner avec conseil personnalisé 
                et savoir-faire artisanal, directement chez vous.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <Favorite fontSize="small" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">99%</div>
                    <div className="text-sm text-[#E5E5E5]">Satisfaction</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <People fontSize="small" className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">5000+</div>
                    <div className="text-sm text-[#E5E5E5]">Clientes</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600" 
                alt="Notre Salon" 
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-white p-6 rounded-3xl shadow-xl">
                <div className="text-3xl font-black mb-2">10+</div>
                <div className="text-sm">Ans d'Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-5xl font-black text-[#1B3022] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nos Valeurs
            </h2>
            <p className="text-xl text-[#C5A059] font-medium uppercase tracking-widest">
              Les piliers de notre engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <AutoAwesome fontSize="small" />,
                title: "Excellence",
                description: "Des prestations d'exception avec des produits haut de gamme et des techniques innovantes"
              },
              {
                icon: <Favorite fontSize="small" />,
                title: "Bienveillance",
                description: "Une approche personnalisée dans un cadre bienveillant et respectueux"
              },
              {
                icon: <WorkspacePremium fontSize="small" />,
                title: "Expertise",
                description: "Plus de 10 ans d'expérience et des certifications professionnelles reconnues"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#E5E5E5]/20 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {value.title}
                </h3>
                <p className="text-[#E5E5E5] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-5xl font-black text-[#1B3022] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Notre Parcours
            </h2>
            <p className="text-xl text-[#C5A059] font-medium uppercase tracking-widest">
              10 ans de passion et de croissance
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#E5E5E5]/20"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-[#1A1A1A] border border-[#E5E5E5]/20 p-6 rounded-3xl shadow-lg">
                    <div className="text-2xl font-black text-[#D4AF37] mb-2">{milestone.year}</div>
                    <h3 
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-[#E5E5E5]">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-5xl font-black text-[#1B3022] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Notre Équipe
            </h2>
            <p className="text-xl text-[#C5A059] font-medium uppercase tracking-widest">
              Des experts passionnés à votre service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#E5E5E5]/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#D4AF37] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-[#E5E5E5]">{member.experience} d'expérience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-5xl font-black mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contactez-Nous
            </h2>
            <p className="text-xl text-[#C5A059] font-medium uppercase tracking-widest">
              Nous sommes là pour vous conseiller
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone fontSize="small" />
              </div>
              <h3 className="text-lg font-bold mb-2">Téléphone</h3>
              <p className="text-gray-300">+1 (514) 998-6842</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail fontSize="small" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-300">contact@beauty-shop.ca</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <LocationOn fontSize="small" />
              </div>
              <h3 className="text-lg font-bold mb-2">Adresse</h3>
              <p className="text-gray-300">Service à domicile<br />Montréal et région</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => window.open('https://wa.me/15149986842?text=Bonjour, je souhaite prendre rendez-vous', '_blank')}
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-full font-medium hover:bg-[#B89430] transition-colors inline-flex items-center space-x-2"
            >
              <AutoAwesome fontSize="small" />
              <span>Réserver sur WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </section>

      </div>
  );
}
