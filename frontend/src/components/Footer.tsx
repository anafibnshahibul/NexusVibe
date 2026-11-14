import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 text-2xl font-black tracking-tight text-white">
              NEXUS<span className="text-blue-400">VIBE</span>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Product strategy, thoughtful design, and dependable engineering for ambitious digital teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-300">
            <Link to="/services" className="transition hover:text-white">Services</Link>
            <Link to="/gallery" className="transition hover:text-white">Selected work</Link>
            <Link to="/about" className="transition hover:text-white">About</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NexusVibe Studio. Crafted with clarity and intention.</p>
          <p>hello@nexusvibe.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;