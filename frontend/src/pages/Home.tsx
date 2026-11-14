import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Layers3, MoveUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studioServices } from '../data/services';
import { studioProjects } from '../data/projects';
import { siteImages } from '../data/images';
import WordReveal from '../components/WordReveal';

const process = [
  { number: '01', title: 'Understand', text: 'We learn your goals, users, and constraints before we recommend a solution.' },
  { number: '02', title: 'Shape', text: 'We turn the brief into a clear plan, visual direction, and working milestones.' },
  { number: '03', title: 'Build', text: 'We design, engineer, and review in the open so progress stays visible.' },
  { number: '04', title: 'Launch', text: 'We ship carefully and leave your team with a product they can grow.' },
];

const Home = () => (
  <div className="studio-page overflow-hidden pb-24 text-white">
    <section className="studio-hero relative isolate min-h-[720px] overflow-hidden px-5 pb-20 pt-24 md:px-8 md:pt-32">
      <img src={siteImages.developerWorkspace} alt="Modern workspace for a product team" className="studio-hero__image absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="studio-hero__overlay absolute inset-0 -z-10" />
      <div className="studio-orb studio-orb--one absolute right-[8%] top-32 -z-0 h-48 w-48 rounded-full border border-blue-200/20 bg-blue-400/10 backdrop-blur-md" />
      <div className="studio-orb studio-orb--two absolute bottom-28 right-[30%] -z-0 h-20 w-20 rounded-3xl border border-violet-200/20 bg-violet-400/10 backdrop-blur-lg" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="section-label border-white/15 bg-slate-950/45 text-blue-100"><Sparkles size={14} /> Independent digital studio</span>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.06em] md:text-7xl xl:text-8xl">
            <WordReveal text="Good ideas deserve" />{' '}<span className="text-gradient"><WordReveal text="great engineering." /></span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200 md:text-xl">
            NexusVibe designs and builds digital products, websites, and mobile experiences for teams ready to move forward.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="button-primary group">Tell us about your project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
            <Link to="/services" className="button-glass">Explore our services <ArrowDown size={16} /></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Product-minded delivery</span>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Clear communication</span>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Thoughtful engineering</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92, rotateY: -8 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 0.75 }} whileHover={{ rotateY: 2, rotateX: -1, y: -5 }} style={{ transformStyle: 'preserve-3d', perspective: 1300 }} className="relative mx-auto w-full max-w-xl">
          <div className="glass-panel studio-showcase overflow-hidden rounded-[2rem] p-3">
            <img src={siteImages.productDesign} alt="Product design work in progress" className="h-[320px] w-full rounded-[1.5rem] object-cover md:h-[390px]" />
            <div className="flex items-center justify-between gap-4 p-5">
              <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">A considered approach</p><p className="mt-2 text-lg font-bold">Strategy, design & engineering</p></div>
              <span className="studio-showcase__icon"><Layers3 size={22} /></span>
            </div>
          </div>
          <div className="studio-floating-note"><span className="studio-floating-note__icon"><Code2 size={16} /></span><span><b>Built for real use</b><small>Reliable, responsive, accessible</small></span><MoveUpRight size={17} className="ml-auto text-blue-200" /></div>
        </motion.div>
      </div>
      <div className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
        {[['Product design', 'From idea to usable'], ['Web platforms', 'Fast and accessible'], ['Mobile apps', 'Made for everyday use'], ['Cloud & AI', 'Practical by design']].map(([value, label]) => <div key={value} className="glass-panel rounded-2xl px-5 py-4"><p className="font-bold">{value}</p><p className="mt-1 text-xs text-slate-400">{label}</p></div>)}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="section-heading"><div><span className="eyebrow">How we can help</span><h2><WordReveal text="One studio. The skills to ship." /></h2><p>Bring us a clear brief or an early idea. We’ll find the right next step together.</p></div><Link to="/services" className="button-text arrow-on-hover">All services <ArrowRight size={16} /></Link></div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {studioServices.slice(0, 4).map((service, index) => <motion.article key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} whileHover={{ y: -7, rotateY: -1 }} className="service-tile group"><div className="service-tile__image"><img src={service.img} alt="" loading="lazy" /><span>{service.category}</span></div><div className="p-5"><h3>{service.title}</h3><p>{service.desc}</p><Link to={`/services/${service.slug}`} className="service-tile__link">Learn about this service <ArrowUpRight size={16} /></Link></div></motion.article>)}
      </div>
    </section>

    <section className="border-y border-white/5 bg-slate-950/45 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2><WordReveal text="Built around meaningful outcomes." /></h2><p>A few examples of the challenges our team loves to solve.</p></div><Link to="/gallery" className="button-text arrow-on-hover">View all projects <ArrowRight size={16} /></Link></div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {studioProjects.slice(0, 3).map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }} className="project-tile"><div className="project-tile__image"><img src={project.image} alt={project.title} loading="lazy" /><span><ArrowUpRight size={18} /></span></div><div className="p-5"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p className="project-tile__summary">{project.summary}</p></div></motion.article>)}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="section-heading"><div><span className="eyebrow">A clear process</span><h2><WordReveal text="Thoughtful from first call to launch." /></h2><p>Good work comes from shared context, small feedback loops, and dependable delivery.</p></div></div>
      <div className="process-grid">{process.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="process-step"><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></motion.article>)}</div>
    </section>

    <section className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="studio-cta"><img src={siteImages.teamCollaboration} alt="A team working together" /><div className="studio-cta__overlay" /><div className="studio-cta__content"><span className="section-label border-white/15 bg-white/10">Have a project in mind?</span><h2><WordReveal text="Let’s make something that matters." /></h2><p>Tell us what you’re working on. We’ll reply with a practical next step.</p><Link to="/contact" className="button-primary group arrow-on-hover">Start a conversation <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div></div>
    </section>
  </div>
);

export default Home;
