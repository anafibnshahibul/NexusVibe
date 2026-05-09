import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const captchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Retrieve reCAPTCHA token
    const token = captchaRef.current.getValue();
    if (!token) {
      setStatus('Please verify that you are not a robot!');
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch('http://100.115.92.206:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken: token }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
        captchaRef.current.reset(); // Reset captcha widget after success
      } else {
        setStatus(data.message || 'Failed to save message.');
      }
    } catch (error) {
      setStatus('Server connection error.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-12 px-6 selection:bg-blue-500">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Contact Info Display */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-6xl font-black mb-6 text-white italic tracking-tighter uppercase">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          
          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 border border-blue-500/20"><MapPin size={24}/></div>
              <div><p className="text-xs text-slate-500 font-black uppercase tracking-widest">Office</p><p className="font-bold text-white">Dhaka, Bangladesh</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-600/10 rounded-2xl text-purple-500 border border-purple-500/20"><Mail size={24}/></div>
              <div><p className="text-xs text-slate-500 font-black uppercase tracking-widest">Email</p><p className="font-bold text-white">hello@nexusvibe.com</p></div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900/40 p-10 rounded-[3rem] border border-white/5 backdrop-blur-xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name</label>
                <input 
                  type="text" required value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none text-white transition-all" 
                  placeholder="Anaf" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                <input 
                  type="email" required value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none text-white transition-all" 
                  placeholder="anaf@example.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
              <textarea 
                rows="4" required value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none text-white transition-all" 
                placeholder="Write your thoughts..."
              ></textarea>
            </div>

            {/* Google reCAPTCHA v2 Component */}
            <div className="flex justify-center py-2 overflow-hidden rounded-xl">
               <ReCAPTCHA
                 sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
                 ref={captchaRef}
                 theme="dark"
               />
            </div>
            
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-blue-600/20">
              Send Message <Send size={18}/>
            </button>

            {status && (
              <div className={`text-center p-3 rounded-xl font-bold uppercase text-xs tracking-widest bg-white/5 border border-white/10 ${status.includes('Successfully') ? 'text-green-500' : 'text-blue-400'}`}>
                {status}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;