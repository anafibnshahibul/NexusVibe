import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center"
      >
        <AlertCircle size={80} className="mx-auto text-blue-500 mb-8 animate-pulse" />
        <h1 className="text-[12rem] md:text-[15rem] font-black tracking-tighter leading-none mb-4 italic text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-slate-900">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tighter">Lost in Space?</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
          The page you are looking for doesn't exist or has been moved to another dimension.
        </p>
        
        <Link to="/">
          <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl group">
            <Home size={20} className="group-hover:-translate-y-1 transition-transform" />
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;