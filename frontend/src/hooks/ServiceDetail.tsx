import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, MoveUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { studioServices, type StudioService } from '../data/services';
import NotFound from '../pages/error/NotFound';
import WordReveal from '../components/WordReveal';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<StudioService | undefined>(() => studioServices.find((item) => item.slug === slug));

  useEffect(() => {
    fetch('/api/services?resource=services')
      .then((response) => response.ok ? response.json() as Promise<{ data: StudioService[] }> : Promise.reject(new Error('API unavailable')))
      .then((result) => setService(result.data.find((item) => item.slug === slug)))
      .catch(() => undefined);
  }, [slug]);

  if (!service) return <NotFound />;

  return (
    <div className="studio-page min-h-screen pb-24 text-white">
      <section className="service-detail-hero relative overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-7xl"><Link to="/services" className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"><ArrowLeft size={16} /> All services</Link><div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]"><motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}><span className="section-label">{service.category} · NexusVibe studio</span><h1 className="detail-heading max-w-3xl text-5xl font-black tracking-[-0.06em] md:text-7xl"><WordReveal text={service.title} /></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{service.summary}</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="button-primary group arrow-on-hover">Discuss your project <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link><Link to="/gallery" className="button-glass arrow-on-hover">See selected work <MoveUpRight size={15} /></Link></div></motion.div><motion.div initial={{ opacity: 0, scale: 0.94, rotateY: -5 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} whileHover={{ rotateY: 2, y: -4 }} className="service-detail-image"><img src={service.img} alt={`${service.title} service`} /><span>{service.category}</span></motion.div></div></div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-4 md:px-8 lg:grid-cols-[0.7fr_1.3fr]"><div><span className="eyebrow">How we can help</span><h2 className="mt-3 text-3xl font-black tracking-tight">Focused work.<br />Useful outcomes.</h2><p className="mt-4 leading-7 text-slate-400">We shape the engagement around your team, your timeline, and what success needs to look like.</p></div><div className="deliverables-grid">{service.features.map((feature, index) => <motion.div key={feature} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="deliverable-card"><span><Check size={17} /></span><div><h3>{feature}</h3><p>Clear scope, collaborative reviews, and a result your team can use.</p></div></motion.div>)}</div></section>
      <section className="mx-auto mt-20 max-w-7xl px-5 md:px-8"><div className="service-bottom-cta"><div><span className="eyebrow">Ready when you are</span><h2>Let’s talk about {service.title.toLowerCase()}.</h2><p>We’ll help you clarify the opportunity and find a good next step.</p></div><Link to="/contact" className="button-primary group">Start a conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link></div></section>
    </div>
  );
};

export default ServiceDetail;
