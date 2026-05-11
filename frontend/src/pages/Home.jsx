import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe, Palette, Monitor, PenTool, Layout, Rocket, Heart, Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true }
  };

  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      {/* Hero Section - Animated Background */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400"
          >
            <Sparkles size={16} /> <span>Creative Visual Designer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-blue-500"
          >
            DIGITAL ART <br/> <span className="italic">REIMAGINED</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10"
          >
            I create high-fidelity visuals and immersive digital experiences. 
            Blending technical precision with artistic passion.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all transform hover:scale-110 flex items-center justify-center gap-2">
              Start Exploring <ArrowRight size={20}/>
            </button>
            <Link to="/gallery" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-full font-bold transition-all text-center">
              View Showcase
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid - Animated Cards */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Philosophy</h2>
            <p className="text-slate-500">Why my work stands out in the digital crowd.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Zap className="text-yellow-400"/>, title: "Extreme Speed", desc: "Performance is not a feature, it's a foundation." },
              { icon: <Shield className="text-green-400"/>, title: "Rock Solid", desc: "Security and stability in every pixel I deliver." },
              { icon: <Globe className="text-blue-400"/>, title: "Global Vision", desc: "Design that speaks to everyone, everywhere." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="p-10 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all cursor-default group"
              >
                <div className="mb-6 p-4 bg-slate-800 w-fit rounded-2xl group-hover:bg-blue-600 transition-colors">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed About Me Section */}
      <section className="py-32 bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800" 
                alt="Artist Profile" 
                className="rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border-2 border-slate-800"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-black mb-8 leading-tight">Mastering the <span className="text-blue-500">Digital Canvas.</span></h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                As a lead visual artist, I believe design is a language that transcends words.
                I specialize in high-impact graphics and user-centric interfaces. 
                We empower creators by building a high-performance infrastructure designed for the speed of thought. 
                Our goal is to revolutionize the digital landscape across the globe.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10 text-center">
                <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <h4 className="text-3xl font-bold text-white">5+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Years Exp.</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <h4 className="text-3xl font-bold text-white">200+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Projects</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black hover:bg-blue-500 hover:text-white transition-all">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Masonry Style */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-4">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase italic">Featured Pieces</h2>
            <p className="text-slate-500">A collection of my most challenging and rewarding works.</p>
          </motion.div>
          <Link to="/gallery" className="px-6 py-2 border border-slate-800 rounded-full hover:bg-white hover:text-black transition-all">Explore Full Gallery</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ y: -15 }}
              className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-900 relative group"
            >
              <img 
                src={`https://picsum.photos/seed/${item + 120}/600/800`} 
                alt="Portfolio Item" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end">
                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-4 scale-0 group-hover:scale-100 transition-transform">
                  <Rocket size={20} />
                </div>
                <h4 className="text-xl font-bold">Art Piece #{item}</h4>
                <p className="text-slate-400 text-sm">Visual Illustration</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section - High Impact */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="relative rounded-[4rem] overflow-hidden h-[600px] group">
          {/* Background Image with Hover Effect */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
            alt="Community"
          />
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-blue-900/40 to-transparent flex items-end p-12 md:p-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic">
                Let's build the future together.
              </h2>
              {/* Navigation Link to Contact Page */}
              <Link to="/contact">
                <button className="flex items-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-2xl group">
                  <Mail size={24} className="group-hover:rotate-12 transition-transform" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;