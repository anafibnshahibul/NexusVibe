import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Camera, Compass, Info, Cpu, Mail, User } from 'lucide-react';

import ServiceDetail from './hooks/ServiceDetail'
import AnalyticsTracker from './hooks/AnalyticsTracker';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Discover from "./pages/Discover";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NeuralDesign from "./pages/NeuralDesign";
import CoreDev from "./pages/CoreDev";
import MobileForce from "./pages/MobileForce";

import NotFound from "./pages/error/NotFound";

//------------------------------------------------------

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        {/* Header */}
        <Header />

        {/* To load page from top */}
        <ScrollToTop />

        {/* Load custom hooks */}
        <AnalyticsTracker />

        {/* Page Content */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Dynamic Service Routes */}
            <Route path="/services/neural-design" element={<NeuralDesign />} />
            <Route path="/services/core-dev" element={<CoreDev />} />
            <Route path="/services/mobile-force" element={<MobileForce />} />
            <Route path="/services/ai-integration" element={<ServiceDetail title="AI Integration" />} />
            <Route path="/services/cloud-forge" element={<ServiceDetail title="Cloud Forge" />} />
            <Route path="/services/cyber-shield" element={<ServiceDetail title="Cyber Shield" />} />
            <Route path="/services/data-analytics" element={<ServiceDetail title="Data Analytics" />} />
            <Route path="/services/growth-engine" element={<ServiceDetail title="Growth Engine" />} />

            {/* Custom 404 Route - This must be at the end */}
            <Route path="*" element={<NotFound />} />
            
          </Routes>

        </div>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;