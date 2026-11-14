import { motion } from 'framer-motion';
import { ArrowRight, Compass, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteImages } from '../data/images';
import WordReveal from '../components/WordReveal';

const principles = [
  { icon: <Compass size={20} />, title: 'Start with the problem', text: 'We listen carefully, ask useful questions, and make sure we are solving the right thing.' },
  { icon: <Lightbulb size={20} />, title: 'Make complexity clear', text: 'We connect strategy, design, and engineering so the product feels coherent from end to end.' },
  { icon: <ShieldCheck size={20} />, title: 'Build for the long run', text: 'We care about accessibility, maintainability, and the details that earn trust.' },
];

const About = () => (
  <div className="studio-page min-h-screen pb-24 text-white">
    <section className="about-hero relative flex min-h-[570px] items-center overflow-hidden px-5 py-20 md:px-8"><img src={siteImages.teamCollaboration} alt="Designers and engineers collaborating" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" /><div className="mx-auto w-full max-w-7xl"><span className="section-label"><Sparkles size={14} /> About NexusVibe</span><motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="about-heading max-w-4xl text-5xl font-black tracking-[-0.06em] md:text-7xl"><WordReveal text="A small, focused studio" /><br /><span className="text-gradient"><WordReveal text="for ambitious ideas." /></span></motion.h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">We bring product thinking, design craft, and dependable engineering together to help teams build digital products with purpose.</p><Link to="/contact" className="button-primary group arrow-on-hover mt-8">Get to know us <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link></div></section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.85fr_1.15fr]"><div><span className="eyebrow">How we think</span><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl"><WordReveal text="Good work is a partnership." /></h2><p className="mt-5 text-lg leading-8 text-slate-400">The best outcomes happen when the team building a product understands the people using it. We keep the work collaborative, the decisions explainable, and the goals visible.</p><p className="mt-4 leading-7 text-slate-400">From a first prototype to a growing platform, we bring the right people and process around the challenge—not a one-size-fits-all package.</p></div><div className="about-image"><img src={siteImages.developerWorkspace} alt="A calm, organized product development workspace" /><span>Clear collaboration. Careful execution.</span></div></section>
    <section className="border-y border-white/5 bg-slate-950/45 py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="section-heading"><div><span className="eyebrow">Our principles</span><h2>Make the work matter.</h2><p>How we make decisions, collaborate, and deliver.</p></div></div><div className="grid gap-5 md:grid-cols-3">{principles.map((principle, index) => <motion.article key={principle.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="principle-card"><span>{principle.icon}</span><h3>{principle.title}</h3><p>{principle.text}</p></motion.article>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="studio-cta studio-cta--compact"><img src={siteImages.creativeOffice} alt="A bright studio workspace" /><div className="studio-cta__overlay" /><div className="studio-cta__content"><span className="section-label border-white/15 bg-white/10">Let’s work together</span><h2>Bring us the problem you want to solve.</h2><p>We’ll help you turn it into a clear, achievable next step.</p><Link to="/contact" className="button-primary group">Tell us about your project <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link></div></div></section>
  </div>
);

export default About;
