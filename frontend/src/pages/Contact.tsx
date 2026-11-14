import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import { studioServices } from '../data/services';
import WordReveal from '../components/WordReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json() as { success?: boolean; message?: string; error?: string };
      if (!response.ok) throw new Error(result.error || 'Unable to send your message.');
      setStatus(result.message || 'Message sent. Thanks for getting in touch!');
      setFormData({ name: '', email: '', service: '', budget: '', message: '' });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'The API is unavailable. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="studio-page min-h-screen px-6 pb-20 pt-32 selection:bg-blue-500">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <span className="section-label">Project inquiries</span>
          <h1 className="contact-heading text-5xl md:text-6xl font-black mb-6 text-white tracking-tighter">
            <WordReveal text="Let’s make your" /><br /><span className="text-gradient"><WordReveal text="next idea real." /></span>
          </h1>

          <p className="max-w-lg text-lg leading-8 text-slate-300">
            Tell us what you’re planning, what’s getting in the way, or where you’d like a second opinion. We’ll reply with a useful next step.
          </p>

          <div className="mt-10 space-y-6">
            <div className="glass-card flex items-center gap-4 p-5 rounded-3xl">
              <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 border border-blue-500/20"><MapPin size={24} /></div>
              <div>
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Working model</p>
                <p className="font-bold text-white">Remote-first · Worldwide</p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-4 p-5 rounded-3xl">
              <div className="p-4 bg-violet-600/10 rounded-2xl text-violet-400 border border-violet-500/20"><Mail size={24} /></div>
              <div>
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Email</p>
                <a className="font-bold text-white transition hover:text-blue-300" href="mailto:hello@nexusvibe.com">hello@nexusvibe.com</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="inquiry-name" className="text-xs font-black uppercase tracking-widest text-slate-500">Full name</label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950/80 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none text-white transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="inquiry-email" className="text-xs font-black uppercase tracking-widest text-slate-500">Work email</label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950/80 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none text-white transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="inquiry-service" className="text-xs font-black uppercase tracking-widest text-slate-500">What do you need help with?</label>
                <select id="inquiry-service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="form-control">
                  <option value="">Choose a service</option>
                  {studioServices.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="inquiry-budget" className="text-xs font-black uppercase tracking-widest text-slate-500">Estimated budget</label>
                <select id="inquiry-budget" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="form-control">
                  <option value="">Prefer not to say</option>
                  <option value="Under $5k">Under $5k</option>
                  <option value="$5k–$15k">$5k–$15k</option>
                  <option value="$15k–$50k">$15k–$50k</option>
                  <option value="$50k+">$50k+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiry-message" className="text-xs font-black uppercase tracking-widest text-slate-500">Project details</label>
              <textarea
                id="inquiry-message"
                rows={4}
                required
                minLength={10}
                maxLength={4000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950/80 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none text-white transition-all"
                placeholder="What are you building, and how can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="button-primary arrow-on-hover w-full !rounded-2xl !py-5 uppercase tracking-widest shadow-xl shadow-blue-600/30 disabled:cursor-wait disabled:opacity-60"
            >
              {isSending ? 'Sending…' : 'Send project inquiry'} <Send size={18} />
            </button>

            {status && (
              <div role="status" className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-center text-xs font-bold tracking-wide text-blue-200">
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