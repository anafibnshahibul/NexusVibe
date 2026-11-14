import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studioProjects, type StudioProject } from '../data/projects';
import WordReveal from '../components/WordReveal';

const Gallery = () => {
  const [projects, setProjects] = useState(studioProjects);
  const [selected, setSelected] = useState<StudioProject | null>(null);
  const [query, setQuery] = useState('');
  const categories = ['All work', ...new Set(studioProjects.map((project) => project.category.split('·')[0].trim()))];
  const [category, setCategory] = useState('All work');

  useEffect(() => {
    fetch('/api/services?resource=projects')
      .then((response) => response.ok ? response.json() as Promise<{ data: StudioProject[] }> : Promise.reject(new Error('API unavailable')))
      .then((result) => { if (result.data.length) setProjects(result.data); })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selected]);

  const filtered = useMemo(() => projects.filter((project) => {
    const matchesText = `${project.title} ${project.category} ${project.summary}`.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = category === 'All work' || project.category.startsWith(category);
    return matchesText && matchesCategory;
  }), [category, projects, query]);

  return (
    <div className="studio-page min-h-screen pb-24 text-white">
      <section className="work-hero px-5 pb-12 pt-20 md:px-8 md:pt-28"><div className="mx-auto max-w-7xl"><span className="section-label">Selected work</span><h1 className="work-heading max-w-4xl text-5xl font-black tracking-[-0.06em] md:text-7xl"><WordReveal text="Good work solves" /><br /><span className="text-gradient"><WordReveal text="real problems." /></span></h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">A selection of product, design, and engineering challenges approached with care.</p><div className="mt-9 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div className="flex gap-2 overflow-x-auto pb-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`filter-pill ${category === item ? 'filter-pill--active' : ''}`}>{item}</button>)}</div><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search projects" placeholder="Search selected work" className="directory-search md:max-w-xs" /></div></div></section>
      <section className="mx-auto max-w-7xl px-5 pt-4 md:px-8"><p className="mb-6 text-sm text-slate-500" aria-live="polite">{filtered.length} projects</p><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((project, index) => <motion.button type="button" key={project.title} onClick={() => setSelected(project)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.06 }} whileHover={{ y: -7, rotateY: -1 }} whileTap={{ scale: 0.985 }} className="project-tile group text-left"><div className="project-tile__image"><img src={project.image} alt={project.title} loading="lazy" /><span><ArrowUpRight size={18} /></span></div><div className="p-5"><p className="eyebrow">{project.category}</p><h2>{project.title}</h2><p className="project-tile__summary">{project.summary}</p><p className="project-tile__result">{project.result}</p></div></motion.button>)}</div>{filtered.length === 0 && <div className="empty-state"><h2>No matching work found</h2><p>Try a different search or category.</p><button type="button" onClick={() => { setQuery(''); setCategory('All work'); }} className="button-secondary mt-4">Clear filters</button></div>}</section>
      <AnimatePresence>{selected && <motion.div role="dialog" aria-modal="true" aria-label={`${selected.title} project details`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="modal-backdrop"><motion.div initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} onClick={(event) => event.stopPropagation()} className="glass-panel project-modal"><button type="button" aria-label="Close project" onClick={() => setSelected(null)} className="project-modal__close"><X size={18} /></button><img src={selected.image} alt={selected.title} /><div className="p-6"><p className="eyebrow">{selected.category}</p><h2>{selected.title}</h2><p className="mt-3 leading-7 text-slate-300">{selected.summary}</p><p className="mt-4 rounded-xl border border-blue-300/10 bg-blue-300/5 p-4 text-sm text-blue-100">{selected.result}</p><Link to="/contact" onClick={() => setSelected(null)} className="button-primary mt-6">Discuss a similar project <ArrowRight size={16} /></Link></div></motion.div></motion.div>}</AnimatePresence>
    </div>
  );
};

export default Gallery;
