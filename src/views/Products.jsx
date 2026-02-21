import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, LocalOffer, Favorite, WhatsApp } from '@mui/icons-material';
import FloatingChatbotFixed from '../components/FloatingChatbotFixed';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const handleOrderProduct = (product) => {
    const message = `Bonjour, je souhaite commander le produit suivant:\n\n📦 *Référence Produit*\n\n🏷️ *Nom*: ${product.name}\n🏢 *Marque*: ${product.brand}\n💰 *Prix*: ${product.price}$\n📝 *Description*: ${product.description}\n\nPouvez-vous me confirmer la disponibilité et les modalités de livraison au Canada ?`;
    window.open(`https://wa.me/15149986842?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleToggleFavorite = (product) => {
    if (favorites.find(item => item.id === product.id)) {
      setFavorites(favorites.filter(item => item.id !== product.id));
      alert(`${product.name} a été retiré des favoris!`);
    } else {
      setFavorites([...favorites, product]);
      alert(`${product.name} a été ajouté aux favoris!`);
    }
  };

  // Nouvelle liste de produits spécialisés
  const products = [
    // 🧴 SOINS ET HUILES (Le "Liquid Gold")
    {
      id: 1,
      name: "Huile Elixir Ultime (Kérastase)",
      brand: "Kérastase",
      price: 65.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 312,
      category: "soins",
      image: "https://i.pinimg.com/1200x/08/99/82/089982b94e3a38c84fea093913d4dc92.jpg",
      description: "L'icône absolue pour la brillance.",
      premium: true
    },
    {
      id: 2,
      name: "Huile de traitement Maroccanoil",
      brand: "Maroccanoil",
      price: 28.99,
      originalPrice: 35.99,
      rating: 4.7,
      reviews: 245,
      category: "soins",
      image: "https://i.pinimg.com/1200x/27/e6/73/27e67394490d61a3238bd2ce84a8c029.jpg",
      description: "Incontournable pour nourrir les pointes sèches.",
      local: true
    },
    {
      id: 3,
      name: "Huile capillaire infusée au miel (Gisou)",
      brand: "Gisou",
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 189,
      category: "soins",
      image: "https://i.pinimg.com/736x/19/2f/cb/192fcb1bb91c1703d400196b59948dc5.jpg",
      description: "Très virale sur les réseaux sociaux, parfaite pour l'aspect esthétique du site.",
      trending: true
    },
    {
      id: 4,
      name: "Sérum de croissance au Romarin (Mielle)",
      brand: "Mielle",
      price: 45.99,
      originalPrice: 55.99,
      rating: 4.9,
      reviews: 428,
      category: "soins",
      image: "https://i.pinimg.com/736x/1f/a7/1c/1fa71c16c95a9448a92a868f87d4685d.jpg",
      description: "Le produit phare pour la densité capillaire.",
      bestseller: true
    },
    {
      id: 5,
      name: "Huile protectrice thermique (Bumble and Bumble)",
      brand: "Bumble and Bumble",
      price: 38.99,
      originalPrice: 46.99,
      rating: 4.6,
      reviews: 167,
      category: "soins",
      image: "https://i.pinimg.com/1200x/ed/f6/32/edf63251c1764b2ed62cdd5f48d73f0b.jpg",
      description: "Indispensable avant chaque brushing."
    },

    // 💇‍♀️ ACCESSOIRES DE COIFFAGE (Outils Pro)
    {
      id: 6,
      name: "Brosses Mason Pearson",
      brand: "Mason Pearson",
      price: 189.99,
      originalPrice: 229.99,
      rating: 4.9,
      reviews: 89,
      category: "outils",
      image: "https://i.pinimg.com/736x/66/e7/6c/66e76cfe2da4e33ec971502f29f4f67e.jpg",
      description: "Le grand luxe du brossage (très cher, très chic).",
      premium: true
    },
    {
      id: 7,
      name: "Peigne à dents larges en acétate",
      brand: "Professional Tools",
      price: 24.99,
      originalPrice: 32.99,
      rating: 4.7,
      reviews: 134,
      category: "outils",
      image: "https://i.pinimg.com/1200x/1c/58/06/1c580664b424dabbcb3c321e77fcda9c.jpg",
      description: "Pour démêler sous la douche sans casser le cheveu.",
      essential: true
    },
    {
      id: 8,
      name: "Peigne à queue en carbone",
      brand: "Carbon Pro",
      price: 34.99,
      originalPrice: 42.99,
      rating: 4.8,
      reviews: 201,
      category: "outils",
      image: "https://i.pinimg.com/736x/0c/a9/33/0ca933595ddb64490f1a0f6f688fd8e1.jpg",
      description: "L'outil de précision pour les séparations et les tresses.",
      professional: true
    },
    {
      id: 9,
      name: "Brosse ronde en céramique (Olivia Garden)",
      brand: "Olivia Garden",
      price: 67.99,
      originalPrice: 85.99,
      rating: 4.8,
      reviews: 156,
      category: "outils",
      image: "https://i.pinimg.com/736x/44/c4/1d/44c41dbfae7a122e5966e69a03e1f3b9.jpg",
      description: "Pour des brushings volumineux comme en salon.",
      popular: true
    },
    {
      id: 10,
      name: "Brosse démêlante flexible (Wet Brush)",
      brand: "Wet Brush",
      price: 42.99,
      originalPrice: 52.99,
      rating: 4.7,
      reviews: 223,
      category: "outils",
      image: "https://i.pinimg.com/736x/75/b4/7e/75b47e0c6e54865756b77a9716ffdf3f.jpg",
      description: "Douce pour les cheveux fragiles.",
      trending: true
    },

    // 🧵 MÈCHES ET EXTENSIONS (Le volume et la longueur)
    {
      id: 11,
      name: "Extensions à clips en cheveux naturels (Bellami)",
      brand: "Bellami",
      price: 125.99,
      originalPrice: 159.99,
      rating: 4.8,
      reviews: 267,
      category: "extensions",
      image: "https://i.pinimg.com/1200x/69/03/21/6903217b2ffa28c168b33bd18cd5126a.jpg",
      description: "Pour changer de tête en 5 minutes.",
      popular: true
    },
    {
      id: 12,
      name: "Mèches de luxe pour Balayage",
      brand: "Luxury Hair",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 198,
      category: "extensions",
      image: "https://i.pinimg.com/1200x/a6/3a/a6/a63aa6f7041bdd45bc85c39752d13c6b.jpg",
      description: "Extensions pré-colorées pour un effet soleil immédiat.",
      premium: true
    },
    {
      id: 13,
      name: "Mèches pour tresses (X-Pression Premium)",
      brand: "X-Pression",
      price: 76.99,
      originalPrice: 95.99,
      rating: 4.7,
      reviews: 312,
      category: "extensions",
      image: "https://i.pinimg.com/736x/9b/ce/ea/9bceeadc24144d3b28a497338854d632.jpg",
      description: "Très demandées à Montréal pour les styles protecteurs.",
      local: true,
      trending: true
    },
    {
      id: 14,
      name: "Queue de cheval (Ponytail) prête à poser",
      brand: "Ponytail Pro",
      price: 45.99,
      originalPrice: 58.99,
      rating: 4.6,
      reviews: 145,
      category: "extensions",
      image: "https://i.pinimg.com/736x/db/72/23/db722305c60cf59569a5a3ff7a3983ef.jpg",
      description: "Le secret des coiffures sophistiquées rapides.",
      popular: true
    },

    // 🎀 ACCESSOIRES DE MODE & ENTRETIEN
    {
      id: 15,
      name: "Chouchous en soie (Scrunchies)",
      brand: "Silk Luxury",
      price: 28.99,
      originalPrice: 35.99,
      rating: 4.8,
      reviews: 234,
      category: "accessoires",
      image: "https://i.pinimg.com/736x/21/14/9a/21149a47c11e6632f8b3e4e5e0801f22.jpg",
      description: "Évitent la casse des cheveux pendant la nuit.",
      premium: true
    },
    {
      id: 16,
      name: "Bonnet de nuit en satin",
      brand: "Satin Care",
      price: 22.99,
      originalPrice: 28.99,
      rating: 4.7,
      reviews: 189,
      category: "accessoires",
      image: "https://i.pinimg.com/1200x/6b/2d/1e/6b2d1ec5dcc30c0ccb171bd21900f17e.jpg",
      description: "Indispensable pour garder le lissage ou les boucles intactes.",
      essential: true
    },
    {
      id: 17,
      name: "Pinces crocodiles professionnelles",
      brand: "Pro Clips",
      price: 18.99,
      originalPrice: 24.99,
      rating: 4.6,
      reviews: 156,
      category: "accessoires",
      image: "https://i.pinimg.com/1200x/2d/e8/5d/2de85db27406e718e7e72b486d3b80c8.jpg",
      description: "Pour sectionner les cheveux lors du coiffage à la maison.",
      professional: true
    },
    {
      id: 18,
      name: "Bandeau de soin en éponge",
      brand: "Care Band",
      price: 15.99,
      originalPrice: 19.99,
      rating: 4.5,
      reviews: 98,
      category: "accessoires",
      image: "https://i.pinimg.com/736x/ed/16/c9/ed16c9e79fe87ca9b23d75553332c77b.jpg",
      description: "Pour dégager le visage lors de l'application de masques.",
      trending: true
    },

    // ⚡ APPAREILS (Petit matériel)
    {
      id: 19,
      name: "Sèche-cheveux Dyson Supersonic",
      brand: "Dyson",
      price: 549.99,
      originalPrice: 629.99,
      rating: 4.9,
      reviews: 445,
      category: "appareils",
      image: "https://i.pinimg.com/1200x/03/af/d2/03afd27b872ac0670ce7f815007b6155.jpg",
      description: "Le symbole ultime du luxe technologique en salon.",
      premium: true,
      bestseller: true
    },
    {
      id: 20,
      name: "Fer à boucler automatique (BaByliss PRO)",
      brand: "BaByliss",
      price: 189.99,
      originalPrice: 229.99,
      rating: 4.7,
      reviews: 167,
      category: "appareils",
      image: "https://i.pinimg.com/736x/c3/bf/df/c3bfdf6a85c235bdadbfd8e155073714.jpg",
      description: "Pour des ondulations 'Beach Waves' sans effort.",
      trending: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits', icon: <LocalOffer fontSize="small" /> },
    { id: 'soins', name: 'Soins & Huiles', icon: <Star fontSize="small" /> },
    { id: 'outils', name: 'Outils Pro', icon: <LocalOffer fontSize="small" /> },
    { id: 'extensions', name: 'Mèches & Extensions', icon: <Star fontSize="small" /> },
    { id: 'accessoires', name: 'Accessoires', icon: <Favorite fontSize="small" /> },
    { id: 'appareils', name: 'Appareils', icon: <LocalOffer fontSize="small" /> },
    { id: 'premium', name: 'Premium', icon: <Star fontSize="small" /> },
    { id: 'locaux', name: 'Made in Canada', icon: <Star fontSize="small" /> }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : selectedCategory === 'locaux'
    ? products.filter(product => product.local)
    : selectedCategory === 'bestsellers'
    ? products.filter(product => product.bestseller)
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://i.pinimg.com/736x/e7/3f/26/e73f263dde3bdd10350fe374ab43170a.jpg')",
            backgroundPosition: 'center 35%'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#1A1A1A]/90"></div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Produits Luxe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#D4AF37] max-w-2xl mx-auto"
          >
            Sélection exclusive de produits capillaires haut de gamme pour un résultat professionnel
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12 bg-[#0A0A0A] border-y border-[#E5E5E5]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de produits */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#E5E5E5]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                {/* Badges spéciaux */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                  {product.local && (
                    <div className="bg-[#D4AF37] text-white px-2 py-1 rounded-full text-xs font-medium">
                      🍁 Made in Canada
                    </div>
                  )}
                  {product.bestseller && (
                    <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ Best-Seller
                    </div>
                  )}
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent"></div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  {/* Marque et nom */}
                  <div className="mb-2">
                    <p className="text-sm text-[#D4AF37] font-medium">{product.brand}</p>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#E5E5E5] mb-4 line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fontSize="small" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-[#E5E5E5]">
                      {product.rating} ({product.reviews} avis)
                    </span>
                  </div>

                  {/* Prix */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-black text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>{product.price}$</span>
                      <span className="ml-2 text-sm text-[#E5E5E5] line-through">{product.originalPrice}$</span>
                    </div>
                    <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleOrderProduct(product)}
                      className="flex-1 bg-[#D4AF37] text-white px-4 py-2 rounded-full font-medium hover:bg-[#B89430] transition-colors flex items-center justify-center"
                    >
                      <WhatsApp fontSize="small" className="mr-2" />
                      Commander
                    </button>
                    <button 
                      onClick={() => handleToggleFavorite(product)}
                      className={`p-2 border rounded-full transition-colors ${
                        favorites.find(item => item.id === product.id)
                          ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                          : 'border-[#E5E5E5] hover:bg-[#E5E5E5]'
                      }`}
                    >
                      <Favorite fontSize="small" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tendances 2026 Québec */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3022] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tendances Beauté 2026 au Canada
            </h2>
            <p className="text-xl text-[#C5A059] font-medium">
              Marché canadien avec focus Québec & Montréal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[#0A0A0A] rounded-3xl border border-[#E5E5E5]/20">
              <div className="text-4xl mb-4">🧴</div>
              <h3 className="text-xl font-bold text-white mb-2">Liquid Gold</h3>
              <p className="text-[#E5E5E5]">Les huiles capillaires sont les nouveaux produits iconiques du marché</p>
            </div>
            <div className="text-center p-8 bg-[#0A0A0A] rounded-3xl border border-[#E5E5E5]/20">
              <div className="text-4xl mb-4">💇‍♀️</div>
              <h3 className="text-xl font-bold text-white mb-2">Outils Pro</h3>
              <p className="text-[#E5E5E5]">Les accessoires professionnels sont indispensables pour un résultat salon</p>
            </div>
            <div className="text-center p-8 bg-[#0A0A0A] rounded-3xl border border-[#E5E5E5]/20">
              <div className="text-4xl mb-4">🧵</div>
              <h3 className="text-xl font-bold text-white mb-2">Extensions Luxe</h3>
              <p className="text-[#E5E5E5]">Le volume et la longueur en un clin d'œil</p>
            </div>
            <div className="text-center p-8 bg-[#0A0A0A] rounded-3xl border border-[#E5E5E5]/20">
              <div className="text-4xl mb-4">🎀</div>
              <h3 className="text-xl font-bold text-white mb-2">Mode & Entretien</h3>
              <p className="text-[#E5E5E5]">Les accessoires pour protéger et sublimer vos coiffures</p>
            </div>
            <div className="text-center p-8 bg-[#0A0A0A] rounded-3xl border border-[#E5E5E5]/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Tech Beauty</h3>
              <p className="text-[#E5E5E5]">Les appareils high-tech pour des résultats professionnels à domicile</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chatbot IA Flottant */}
      <FloatingChatbotFixed />
    </div>
  );
}
