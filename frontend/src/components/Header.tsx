import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home as HomeIcon, BriefcaseBusiness, Images, Info, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', icon: <HomeIcon size={18} />, label: 'Home' },
    { to: '/services', icon: <BriefcaseBusiness size={18} />, label: 'Services' },
    { to: '/gallery', icon: <Images size={18} />, label: 'Work' },
    { to: '/about', icon: <Info size={18} />, label: 'About' },
    { to: '/contact', icon: <Mail size={18} />, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg shadow-blue-600/30">
              <span className="text-lg font-black text-white">N</span>
            </div>
            <div className="text-xl font-black tracking-tight text-white">
              NEXUS<span className="text-blue-400">VIBE</span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `group relative flex items-center gap-2 text-sm font-medium transition hover:text-white ${isActive ? 'active text-white' : 'text-slate-300'}`}
              >
                {link.icon}
                <span>{link.label}</span>
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
              </NavLink>
            ))}
            <Link to="/contact" className="button-primary !min-h-10 !px-4 !py-2 text-xs">
              Start a project <ArrowRight size={14} />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `flex items-center gap-3 rounded-2xl border px-4 py-3 transition hover:border-blue-500/50 hover:text-white ${isActive ? 'border-blue-400/40 bg-blue-500/10 text-white' : 'border-white/5 bg-white/5 text-slate-200'}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;