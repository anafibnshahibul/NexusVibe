import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Layout, MousePointer2, Zap, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeuralDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <Link to="/services" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to All Services</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 text-blue-500 mb-6">
              <Sparkles size={24} />
              <span className="text-sm font-black uppercase tracking-[0.4em]">Visual Intelligence</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 italic">
              NEURAL <span className="text-blue-600">DESIGN</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg mb-10">
              We don't just build websites; we engineer visual experiences that synchronize with human psychology. Neural Design is our proprietary approach to high-performance UX.
            </p>

            <Link to="/contact">
            <button className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              Start a Project
            </button>
            </Link>
            
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 group"
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" 
              alt="Neural Design"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Layout className="text-blue-500" />, title: "Immersive UI", desc: "Layered glassmorphism and depth-based interfaces." },
            { icon: <MousePointer2 className="text-purple-500" />, title: "Precision UX", desc: "User flows optimized for conversion and retention." },
            { icon: <Monitor className="text-cyan-500" />, title: "Hi-Res Prototyping", desc: "Ultra-fast wireframes that feel like the final product." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl hover:border-blue-500/30 transition-all"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Result Stats */}
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row justify-between gap-12 text-center">
          <div>
            <h4 className="text-6xl font-black mb-2 tracking-tighter">99%</h4>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">User Satisfaction</p>
          </div>
          <div>
            <h4 className="text-6xl font-black mb-2 tracking-tighter">2.4s</h4>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Avg. Load Time</p>
          </div>
          <div>
            <h4 className="text-6xl font-black mb-2 tracking-tighter">150+</h4>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Projects Delivered</p>
          </div>
          <div className="flex items-center justify-center">
            <Zap size={48} className="text-white fill-white animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralDesign;