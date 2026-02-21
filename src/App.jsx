import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNavigation from './components/BottomNavigation';
import Home from './views/Home';
import Services from './views/Services';
import Products from './views/Products';
import About from './views/About';
import ChatbotPage from './views/ChatbotPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <main className="pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
          </Routes>
        </main>
        <Footer />
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
