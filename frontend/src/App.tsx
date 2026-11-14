import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

import ServiceDetail from './hooks/ServiceDetail';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import NotFound from "./pages/error/NotFound";

//------------------------------------------------------

function App() {
  return (
    <Router>
      <AppFrame />
    </Router>
  );
}

function AppFrame() {
  const location = useLocation();
  const { scrollYProgress, scrollY } = useScroll();
  const [showTopButton, setShowTopButton] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    setShowTopButton(value > 420);
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <ScrollToTop />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="pt-20"
        >
          <ScrollReveal />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />

      <AnimatePresence>
        {showTopButton && (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            whileHover={{ y: -4, rotateX: 12, scale: 1.06 }}
            whileTap={{ scale: 0.88, rotateZ: -8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-white shadow-xl shadow-blue-950/30 backdrop-blur-xl"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;