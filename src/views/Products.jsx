import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, LocalOffer, Favorite, WhatsApp } from '@mui/icons-material';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const handleOrderProduct = (product) => {
    const message = `Bonjour, je souhaite commander le produit suivant:\n\n📦 *Référence Produit*\n\n🏷️ *Nom*: ${product.name}\n🏢 *Marque*: ${product.brand}\n💰 *Prix*: ${product.price}$\n📝 *Description*: ${product.description}\n\nPouvez-vous me confirmer la disponibilité et les modalités de livraison au Canada ?`;
    window.open(`https://wa.me/33612345678?text=${encodeURIComponent(message)}`, '_blank');
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

  // Produits pour tresses spécialisés pour le marché canadien
  const products = [
    // EXTENSIONS DE CHEVEUX
    {
      id: 1,
      name: "Extensions Box Braids",
      brand: "Premium Hair Canada",
      price: 45.99,
      originalPrice: 55.99,
      rating: 4.8,
      reviews: 234,
      category: "extensions",
      image: "https://i.pinimg.com/736x/8b/3e/4a/8b3e4a1c2f3d4e5f6a7b8c9d0e1f2g3.jpg",
      description: "Extensions de haute qualité pour box braids, texture naturelle adaptée au climat canadien",
      popular: true,
      local: true
    },
    {
      id: 2,
      name: "Extensions Knotless",
      brand: "Quebec Hair Pro",
      price: 52.99,
      originalPrice: 65.99,
      rating: 4.9,
      reviews: 189,
      category: "extensions",
      image: "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p.jpg",
      description: "Extensions premium pour tresses knotless, sans tension sur cuir chevelu",
      popular: true,
      local: true
    },
    {
      id: 3,
      name: "Extensions Colored",
      brand: "Toronto Beauty Supply",
      price: 48.99,
      originalPrice: 58.99,
      rating: 4.7,
      reviews: 156,
      category: "extensions",
      image: "https://i.pinimg.com/736x/c1/d2/e3/c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5.jpg",
      description: "Extensions colorées tendance 2026, large choix de couleurs pour tresses stylées",
      popular: true
    },
    // PRODUITS D'ENTRETIEN
    {
      id: 4,
      name: "Soin Avant Tresses",
      brand: "Montreal Hair Care",
      price: 28.99,
      originalPrice: 35.99,
      rating: 4.8,
      reviews: 267,
      category: "soins",
      image: "https://i.pinimg.com/736x/e1/f2/g3/e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5.jpg",
      description: "Traitement pré-tresses pour cuir chevelu, adapté au froid québécois",
      local: true
    },
    {
      id: 5,
      name: "Huile Entretien Tresses",
      brand: "Vancouver Beauty Co",
      price: 22.99,
      originalPrice: 28.99,
      rating: 4.6,
      reviews: 198,
      category: "soins",
      image: "https://i.pinimg.com/736x/f1/g2/h3/f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5.jpg",
      description: "Huile légère pour entretien quotidien des tresses, ne graisse pas"
    },
    {
      id: 6,
      name: "Shampooing Doux Tresses",
      brand: "Calgary Hair Labs",
      price: 18.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 145,
      category: "soins",
      image: "https://i.pinimg.com/736x/h1/i2/j3/h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5.jpg",
      description: "Shampooing sans sulfates pour nettoyer tresses sans les abîmer"
    },
    // ACCESSOIRES TRESSES
    {
      id: 7,
      name: "Kit Crochet Professionnel",
      brand: "Ottawa Beauty Tools",
      price: 15.99,
      originalPrice: 20.99,
      rating: 4.9,
      reviews: 312,
      category: "outils",
      image: "https://i.pinimg.com/736x/i1/j2/k3/i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5.jpg",
      description: "Kit crochet complet pour installation tresses, qualité professionnelle",
      popular: true
    },
    {
      id: 8,
      name: "Bandeaux Élastiques Tresses",
      brand: "Edmonton Hair Accessories",
      price: 8.99,
      originalPrice: 12.99,
      rating: 4.5,
      reviews: 178,
      category: "outils",
      image: "https://i.pinimg.com/736x/j1/k2/l3/j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5.jpg",
      description: "Pack de 50 bandeaux élastiques pour tresses, plusieurs couleurs"
    },
    // PRODUITS SPÉCIALISÉS
    {
      id: 9,
      name: "Sérum Anti-Démangeaisons",
      brand: "Winnipeg Derm Care",
      price: 24.99,
      originalPrice: 32.99,
      rating: 4.8,
      reviews: 234,
      category: "soins",
      image: "https://i.pinimg.com/736x/k1/l2/m3/k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5.jpg",
      description: "Sérum apaisant pour démangeaisons sous tresses, cuir chevelu sain",
      bestseller: true
    },
    {
      id: 10,
      name: "Mousse Coiffante Tresses",
      brand: "Halifax Styling Co",
      price: 12.99,
      originalPrice: 16.99,
      rating: 4.6,
      reviews: 167,
      category: "soins",
      image: "https://i.pinimg.com/736x/l1/m2/n3/l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5.jpg",
      description: "Mousse légère pour coiffer et fixer les tresses sans effet cartonné"
    },
    {
      id: 11,
      name: "Spray Rafraîchissant",
      brand: "Victoria Beauty Fresh",
      price: 16.99,
      originalPrice: 21.99,
      rating: 4.7,
      reviews: 189,
      category: "soins",
      image: "https://i.pinimg.com/736x/m1/n2/o3/m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5.jpg",
      description: "Spray rafraîchissant pour tresses entre les lavages, senteur fraîche"
    },
    {
      id: 12,
      name: "Protège-Tresses Nuit",
      brand: "Toronto Sleep Care",
      price: 19.99,
      originalPrice: 25.99,
      rating: 4.8,
      reviews: 223,
      category: "outils",
      image: "https://i.pinimg.com/736x/n1/o2/p3/n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5.jpg",
      description: "Bonnet en soie pour protéger tresses pendant la nuit, prévient casse",
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits', icon: <LocalOffer fontSize="small" /> },
    { id: 'extensions', name: 'Extensions', icon: <Star fontSize="small" /> },
    { id: 'soins', name: 'Soins Tresses', icon: <Favorite fontSize="small" /> },
    { id: 'outils', name: 'Accessoires', icon: <LocalOffer fontSize="small" /> },
    { id: 'locaux', name: 'Made in Canada', icon: <Star fontSize="small" /> },
    { id: 'bestsellers', name: 'Best Sellers', icon: <LocalOffer fontSize="small" /> }
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
      <section className="bg-[#0A0A0A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
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
            <div className="text-center p-8 bg-[#F9F9F9] rounded-3xl">
              <div className="text-4xl mb-4">🍁</div>
              <h3 className="text-xl font-bold text-[#1B3022] mb-2">Made in Québec</h3>
              <p className="text-gray-600">Marques locales comme Watier, IDC Dermo, Zorah pour renforcer la confiance de la clientèle montréalaise</p>
            </div>
            <div className="text-center p-8 bg-[#F9F9F9] rounded-3xl">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-[#1B3022] mb-2">Healthy Glow</h3>
              <p className="text-gray-600">Le marché privilégie l'éclat sain plutôt que la couvrance totale en 2026</p>
            </div>
            <div className="text-center p-8 bg-[#F9F9F9] rounded-3xl">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-[#1B3022] mb-2">Bio-Adaptatifs</h3>
              <p className="text-gray-600">Ingrédients innovants : Cactus, Figue de barbarie, et masques LED tendance à Montréal</p>
            </div>
            <div className="text-center p-8 bg-[#F9F9F9] rounded-3xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-[#1B3022] mb-2">Vegan & Zéro Déchet</h3>
              <p className="text-gray-600">Produits BKIND pour les 25-35 ans, emballages compostables et formules véganes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
