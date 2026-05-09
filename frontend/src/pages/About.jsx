import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Globe, Zap, Cpu, Terminal, Database, Layout, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Frontend Mastery", progress: "95%", icon: <Layout size={20} />, color: "bg-blue-500" },
    { name: "Backend Architecture", progress: "88%", icon: <Database size={20} />, color: "bg-purple-500" },
    { name: "UI/UX Thinking", progress: "92%", icon: <Palette size={20} />, color: "bg-cyan-500" },
    { name: "System Optimization", progress: "85%", icon: <Terminal size={20} />, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500">
      
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Future"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-6 italic uppercase"
          >
            Digital <span className="text-blue-600">Soul</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            NexusVibe is more than just a platform; it's a bridge between human creativity and cutting-edge technology.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-4 text-white uppercase italic">
            <Globe className="text-blue-500" /> Our Vision
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            We empower creators by building a high-performance infrastructure designed for the speed of thought. Our goal is to revolutionize the digital landscape across the globe.
          </p>
          <div className="space-y-4 font-bold text-sm tracking-widest uppercase">
            <div className="flex items-center gap-3 text-blue-400">
              <Zap size={18} /> Ultra-Fast Delivery
            </div>
            <div className="flex items-center gap-3 text-purple-400">
              <Cpu size={18} /> Next-Gen Processing
            </div>
          </div>
        </motion.div>
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            alt="Workspace"
          />
        </div>
      </section>

      <section className="bg-slate-900/30 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter italic">Our <span className="text-blue-600">Skills</span></h2>
            <p className="text-slate-500 font-medium">Evolution through consistent engineering and design development.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-3 items-center">
                    <span className="flex items-center gap-2 font-black uppercase tracking-widest text-xs text-white">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-blue-500 font-mono font-black">{skill.progress}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.progress }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                      className={`h-full ${skill.color} shadow-[0_0_15px_rgba(37,99,235,0.4)]`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2.5rem] overflow-hidden border border-blue-500/20 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Development"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://thumbs.dreamstime.com/b/banner-data-center-multiple-rows-operational-server-racks-banner-data-center-multiple-rows-operational-351218934.jpg?w=992" 
              className="rounded-[3rem] border border-white/5 shadow-2xl opacity-60 hover:opacity-100 transition-opacity duration-700 size-1700px"
              alt="Data Center"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">Solid Foundation</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our core infrastructure is built on rock-solid server architectures and cloud distribution networks, ensuring 24/7 reliability for every user.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="relative rounded-[4rem] overflow-hidden h-[600px] group">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
            alt="Community"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-blue-900/40 to-transparent flex items-end p-12 md:p-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic">Let's build the future together.</h2>
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

export default About;