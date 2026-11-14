import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Layers3, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studioServices, type StudioService } from '../data/services';
import WordReveal from '../components/WordReveal';

const Services = () => {
  const [services, setServices] = useState(studioServices);

  useEffect(() => {
    fetch('/api/services?resource=services')
      .then((response) => response.ok ? response.json() as Promise<{ data: StudioService[] }> : Promise.reject(new Error('API unavailable')))
      .then((result) => { if (result.data.length) setServices(result.data); })
      .catch(() => undefined);
  }, []);

  return (
    <div className="studio-page min-h-screen pb-24 text-white">
      <section className="catalog-hero relative overflow-hidden px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <div className="catalog-hero__glow" />
        <div className="relative mx-auto max-w-7xl"><span className="section-label"><Sparkles size={14} /> What we do</span><h1 className="catalog-heading max-w-4xl text-5xl font-black tracking-[-0.06em] md:text-7xl"><WordReveal text="Everything you need to" /><br /><span className="text-gradient"><WordReveal text="move your product forward." /></span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">A focused team across product, design, and engineering. Work with us on one clear challenge or bring us in from the first idea.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="button-primary group arrow-on-hover">Tell us what you need <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link><a href="#capabilities" className="button-glass arrow-on-hover">Browse capabilities <ArrowRight size={16} /></a></div></div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-5 pt-8 md:px-8"><div className="section-heading mb-6"><div><span className="eyebrow">Studio capabilities</span><h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl"><WordReveal text="Our services" /></h2></div><p className="hidden text-sm text-slate-500 sm:block">{services.length} ways we can help</p></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => <motion.article key={service.slug} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.06 }} whileHover={{ y: -7, rotateY: -1 }} className="service-tile group"><div className="service-tile__image"><img src={service.img} alt="" loading="lazy" /><span>{service.category}</span><span className="service-tile__image-icon"><Layers3 size={18} /></span></div><div className="p-6"><h3>{service.title}</h3><p>{service.desc}</p><ul className="service-tile__features">{service.features?.slice(0, 3).map((feature) => <li key={feature}><span />{feature}</li>)}</ul><Link to={`/services/${service.slug}`} className="service-tile__link">Explore service <ArrowUpRight size={16} /></Link></div></motion.article>)}
      </div></section>

      <section className="mx-auto mt-24 max-w-7xl px-5 md:px-8"><div className="studio-cta studio-cta--compact"><img src="/images/team-collaboration.jpg" alt="A product team planning their next release" /><div className="studio-cta__overlay" /><div className="studio-cta__content"><span className="section-label border-white/15 bg-white/10">Not sure where to start?</span><h2>Let’s find the right first step.</h2><p>Share your goals and we’ll recommend a practical way forward.</p><Link to="/contact" className="button-primary group">Book a project conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link></div></div></section>
    </div>
  );
};

export default Services;
