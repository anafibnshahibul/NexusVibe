import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Code2, Database, Zap, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoreDev = () => {
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
              <Terminal size={24} />
              <span className="text-sm font-black uppercase tracking-[0.4em]">System Architecture</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 italic text-white">
              CORE <span className="text-blue-600">DEV</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg mb-10">
              We engineer high-performance backends and scalable systems. From Node.js to Cloud infrastructure, Core Dev ensures your digital engine never stops.
            </p>

            <Link to="/contact">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                Start a Project
              </button>
            </Link>
          </motion.div>

          {/* Futuristic Code Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900/50 border border-blue-500/20 rounded-[3rem] p-10 backdrop-blur-xl font-mono shadow-2xl relative overflow-hidden group"
          >
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <p className="text-purple-400 font-bold">const <span className="text-white">NexusSystem</span> = () ={'>'} {"{"}</p>
              <p className="pl-4 text-slate-500">// Initializing backend protocols</p>
              <p className="pl-4 text-blue-400 italic">await <span className="text-white font-normal">Database.connect();</span></p>
              <p className="pl-4 text-green-400 italic">console.<span className="text-white font-normal">log</span>("Engine is running...");</p>
              <p className="text-purple-400 font-bold">{"}"}</p>
              
              <div className="pt-8 mt-6 border-t border-white/5 flex justify-between items-center text-slate-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> 
                  System Online
                </span>
                <Zap size={18} className="text-yellow-500" />
              </div>
            </div>
            {/* Glass Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Code2 className="text-blue-500" />, title: "Scalable Logic", desc: "Robust server-side architectures built to handle millions of requests." },
            { icon: <Database className="text-purple-500" />, title: "Data Integrity", desc: "Advanced database structures for secure and lightning-fast data flow." },
            { icon: <Zap className="text-cyan-500" />, title: "Engine Speed", desc: "Optimizing every line of code for maximum execution efficiency." }
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

        {/* Results Stats */}
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row justify-between gap-12 text-center shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <div>
            <h4 className="text-6xl font-black mb-2 tracking-tighter">100%</h4>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Uptime Guaranteed</p>
          </div>
          <div>
            <h4 className="text-6xl font-black mb-2 tracking-tighter">0.8s</h4>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">API Response Time</p>
          </div>
          <div>
            <h4 className="text-6xl font-black mb-2 tracking-tighter">Secure</h4>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Encrypted Core</p>
          </div>
          <div className="flex items-center justify-center">
            <Zap size={48} className="text-white fill-white animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreDev;