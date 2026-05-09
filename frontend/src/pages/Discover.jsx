import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Eye, Heart, Share2, Sparkles, Plus, Check, Zap } from 'lucide-react';

const Discover = () => {
  const categories = ["All", "Nature", "Architecture", "Cyberpunk", "Minimal", "3D Art", "Abstract"];
  const [activeTab, setActiveTab] = useState("All");
  const [copyStatus, setCopyStatus] = useState(null); // For Share animation

  // Massive dataset of 24 items
  const initialItems = Array.from({ length: 24 }).map((_, i) => ({
    id: i + 1,
    title: `Masterpiece #${i + 1}`,
    cat: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    likes: Math.floor(Math.random() * 500) + 50,
    views: (Math.random() * 5 + 0.5).toFixed(1) + "k",
    liked: false,
    collected: false
  }));

  const [items, setItems] = useState(initialItems);

  // Toggle Like with animation logic
  const toggleLike = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, liked: !item.liked, likes: item.liked ? item.likes - 1 : item.likes + 1 } : item
    ));
  };

  // Toggle Collect Art
  const toggleCollect = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, collected: !item.collected } : item
    ));
  };

  // Real Share Functionality
  const handleShare = (title) => {
    navigator.clipboard.writeText(`Check out this artwork: ${title} at NexusVibe Studio!`);
    setCopyStatus(title);
    setTimeout(() => setCopyStatus(null), 2000); // Reset after 2 seconds
  };

  const filteredItems = items.filter(item => activeTab === "All" || item.cat === activeTab);

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-24 px-4 md:px-10 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)] pointer-events-none"></div>

      {/* Share Toast Notification */}
      <AnimatePresence>
        {copyStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-blue-500/40"
          >
            <Check size={20} /> Link copied for {copyStatus}!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Massive Header Area */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 text-blue-400 mb-6 font-black tracking-[0.4em] text-xs">
              <Sparkles size={18} /> EXPLORE THE UNKNOWN
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
            <span className="text-blue-600">DISCOVER</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-xl font-medium">
              Browse through 24+ unique digital artifacts meticulously crafted for the modern age.
            </p>
          </motion.div>
          
          {/* Navigation Bar */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-3 rounded-[2.5rem] border border-slate-800/50 backdrop-blur-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-[2rem] text-sm font-black transition-all duration-300 ${
                  activeTab === cat 
                  ? "bg-white text-black shadow-xl" 
                  : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Huge Discovery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-500 group-hover:border-blue-500/40 shadow-2xl">
                  <img 
                    src={`https://picsum.photos/seed/nexus${item.id}/800/1000`} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    loading="lazy"
                  />
                  
                  {/* Glass Action Icons */}
                  <div className="absolute top-8 right-8 flex flex-col gap-4 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <button 
                      onClick={() => toggleLike(item.id)}
                      className={`p-4 backdrop-blur-2xl rounded-2xl border border-white/10 transition-all ${item.liked ? 'bg-red-500 text-white' : 'bg-black/40 text-white hover:bg-white/20'}`}
                    >
                      <Heart size={22} fill={item.liked ? "currentColor" : "none"} />
                    </button>
                    <button 
                      onClick={() => handleShare(item.title)}
                      className="p-4 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 hover:bg-white/20 text-white transition-all"
                    >
                      <Share2 size={22} />
                    </button>
                  </div>

                  {/* Bottom Panel */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-blue-500/30 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${item.id}`} alt="creator" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg leading-none">{item.title}</h4>
                        <span className="text-blue-500 text-[10px] font-black tracking-widest uppercase">{item.cat}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-5 border-t border-white/5">
                      <div className="flex gap-5 text-slate-400">
                        <span className="flex items-center gap-1.5 text-xs font-bold"><Eye size={16}/> {item.views}</span>
                        <span className="flex items-center gap-1.5 text-xs font-bold"><Heart size={16} className={item.liked ? "text-red-500" : ""}/> {item.likes}</span>
                      </div>
                      <button 
                        onClick={() => toggleCollect(item.id)}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${item.collected ? 'bg-white text-black' : 'bg-blue-600 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]'}`}
                      >
                        {item.collected ? "Owned" : "Collect"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Discover;