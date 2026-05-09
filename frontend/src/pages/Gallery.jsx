import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Expand, Sparkles, Box, Zap } from 'lucide-react';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Massive dataset of 25 items with randomized sizes for a true masonry feel
  const galleryItems = [
    { id: 1, title: "Neon Cyberpunk", cat: "Digital Art", size: "h-[500px]" },
    { id: 2, title: "Mountain Peak", cat: "Nature", size: "h-[300px]" },
    { id: 3, title: "Abstract Flow", cat: "Minimal", size: "h-[450px]" },
    { id: 4, title: "Future Tech", cat: "3D Render", size: "h-[350px]" },
    { id: 5, title: "Urban Jungle", cat: "Architecture", size: "h-[600px]" },
    { id: 6, title: "Golden Hour", cat: "Photography", size: "h-[400px]" },
    { id: 7, title: "Liquid Metal", cat: "Abstract", size: "h-[550px]" },
    { id: 8, title: "Deep Space", cat: "Digital Art", size: "h-[320px]" },
    { id: 9, title: "Vintage Soul", cat: "Retro", size: "h-[480px]" },
    { id: 10, title: "Glass UI", cat: "Design", size: "h-[380px]" },
    { id: 11, title: "Forest Mist", cat: "Nature", size: "h-[520px]" },
    { id: 12, title: "Iron Structure", cat: "Industrial", size: "h-[300px]" },
    { id: 13, title: "Prism Light", cat: "Concept", size: "h-[450px]" },
    { id: 14, title: "Ocean Deep", cat: "Nature", size: "h-[600px]" },
    { id: 15, title: "Smart Logic", cat: "Tech", size: "h-[350px]" },
    { id: 16, title: "Marble Texture", cat: "Material", size: "h-[400px]" },
    { id: 17, title: "Desert Wind", cat: "Photography", size: "h-[550px]" },
    { id: 18, title: "Cyber Glitch", cat: "Digital Art", size: "h-[320px]" },
    { id: 19, title: "Modern Loft", cat: "Interior", size: "h-[480px]" },
    { id: 20, title: "Bio Organic", cat: "Abstract", size: "h-[500px]" },
    { id: 21, title: "Sunset Glow", cat: "Nature", size: "h-[360px]" },
    { id: 22, title: "Wireframe", cat: "Tech", size: "h-[420px]" },
    { id: 23, title: "Ancient Ruins", cat: "History", size: "h-[580px]" },
    { id: 24, title: "Fluid Motion", cat: "Abstract", size: "h-[330px]" },
    { id: 25, title: "Hyperdrive", cat: "Sci-Fi", size: "h-[470px]" },
  ];

  const filteredItems = galleryItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-4 md:px-10">
      {/* Search Header */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 mb-6"
        >
          <Sparkles size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">25 Premium Masterpieces</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight"
        >
          Visual <span className="text-blue-500">Universe</span>
        </motion.h1>

        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={22}/>
          <input 
            type="text"
            placeholder="Explore the archives..."
            className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-[2rem] py-6 pl-16 pr-8 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all text-xl text-white shadow-2xl"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Massive Organic Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className={`relative group rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800/50 shadow-xl cursor-none ${item.size}`}
            >
              <img 
                src={`https://picsum.photos/seed/${item.id + 100}/800/${item.size === 'h-[600px]' ? '1200' : '900'}`} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-125"
              />
              
              {/* Ultra-Smooth Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Box size={14} className="text-blue-400" />
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{item.cat}</span>
                </div>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-black text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                  <button className="p-4 bg-white text-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 delay-150 shadow-xl">
                    <Expand size={20}/>
                  </button>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results Fallback */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <Zap size={48} className="mx-auto text-slate-800 mb-4 animate-bounce" />
          <p className="text-slate-500 text-lg">No matching artifacts found in the universe.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;