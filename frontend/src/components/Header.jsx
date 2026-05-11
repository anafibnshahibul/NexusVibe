import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Camera, Compass, Info, Cpu, Mail, User, Menu, X } from 'lucide-react'; // Added Menu and X icons
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", icon: <HomeIcon size={18}/>, label: "Home" },
    { to: "/gallery", icon: <Camera size={18}/>, label: "Gallery" },
    { to: "/discover", icon: <Compass size={18}/>, label: "Discover" },
    { to: "/services", icon: <Cpu size={18}/>, label: "Services" },
    { to: "/about", icon: <Info size={18}/>, label: "About" },
    { to: "/contact", icon: <Mail size={18}/>, label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-blue-500">
          NEXUS<span className="text-white">VIBE</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="relative group hover:text-blue-400 transition flex items-center gap-1 py-1"
            >
              {link.icon} {link.label}
              {/* Animated Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/profile" className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition flex items-center gap-1 text-white">
            <User size={18}/> Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors text-lg"
                >
                  {link.icon} {link.label}
                </Link>
              ))}
              <Link 
                to="/profile" 
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 w-full py-3 rounded-xl text-center font-bold text-white flex items-center justify-center gap-2"
              >
                <User size={18}/> Profile
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;