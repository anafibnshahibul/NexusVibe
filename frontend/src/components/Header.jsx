import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Camera, Compass, Info, Cpu, Mail, User } from 'lucide-react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-blue-500">
          NEXUS<span className="text-white">VIBE</span>
        </div>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link to="/" className="hover:text-blue-400 transition flex items-center gap-1"><HomeIcon size={18}/> Home</Link>
          <Link to="/gallery" className="hover:text-blue-400 transition flex items-center gap-1"><Camera size={18}/> Gallery</Link>
          <Link to="/discover" className="hover:text-blue-400 transition flex items-center gap-1"><Compass size={18}/> Discover</Link>
          <Link to="/services" className="hover:text-blue-400 transition flex items-center gap-1"><Cpu size={18}/> Services</Link>
          <Link to="/about" className="hover:text-blue-400 transition flex items-center gap-1"><Info size={18}/> About</Link>
          <Link to="/contact" className="hover:text-blue-400 transition flex items-center gap-1"><Mail size={18}/> Contact</Link>
          <Link to="/profile" className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition flex items-center gap-1"><User size={18}/> Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;