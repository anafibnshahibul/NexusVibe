import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // React Router for navigation
import { Share2, Check, ArrowUpRight, Sparkles } from 'lucide-react';

const Services = () => {
  const [copyStatus, setCopyStatus] = useState(null);

  const services = [
    { 
      id: "neural-design", 
      title: "Neural Design", 
      desc: "Creating immersive UI/UX experiences that breathe life into your brand.", 
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "core-dev", 
      title: "Core Dev", 
      desc: "Architecting robust backend systems and lightning-fast web applications.", 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "mobile-force", 
      title: "Mobile Force", 
      desc: "Native-grade performance for iOS and Android with seamless interactions.", 
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "ai-integration", 
      title: "AI Integration", 
      desc: "Empowering businesses with machine learning and automated intelligence.", 
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "cloud-forge", 
      title: "Cloud Forge", 
      desc: "Scalable cloud infrastructure that grows with your global user base.", 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "cyber-shield", 
      title: "Cyber Shield", 
      desc: "Advanced security protocols to protect your data from digital threats.", 
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "data-analytics", 
      title: "Data Analytics", 
      desc: "Visualizing complex data patterns to drive smarter business decisions.", 
      img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: "growth-engine", 
      title: "Growth Engine", 
      desc: "Strategic digital marketing to scale your presence across the web.", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
    }
  ];

  const handleShare = (title) => {
    navigator.clipboard.writeText(`Explore ${title} services at NexusVibe.`);
    setCopyStatus(title);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 relative selection:bg-blue-500 selection:text-white">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Copy Alert */}
      <AnimatePresence>
        {copyStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2"
          >
            <Check size={18} /> {copyStatus} link copied!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono tracking-[0.3em] mb-4 uppercase text-sm"
          >
            // Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
          >
            OUR <span className="italic text-slate-500 underline decoration-blue-600 underline-offset-8">EXPERTISE</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl"
            >
              {/* Image Layer */}
              <img 
                src={s.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                alt={s.title}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-blue-600 transition-colors">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <button 
                    onClick={() => handleShare(s.title)}
                    className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Share2 size={18} />
                  </button>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 font-medium">
                    {s.desc}
                  </p>
                  
                  {/* Learn More Dynamic Link */}
                  <Link 
                    to={`/services/${s.id}`} 
                    className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-b border-white/20 pb-2 group-hover:border-blue-500 group-hover:text-blue-400 transition-all w-fit"
                  >
                    Learn More <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Gradient Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;