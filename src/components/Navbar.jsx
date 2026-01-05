import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#latest-works' },
    { name: 'Contact', href: '#contact' },
  
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-white/5 dark:bg-black/20 backdrop-blur-md border-gray-200/10 dark:border-white/5 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gray-900 border border-primary/50 rounded flex items-center justify-center shadow-glow transition-all duration-300 hover:scale-105 group-hover:border-secondary/50">
              <Cpu className="text-primary w-5 h-5 group-hover:text-secondary transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white">RIPA<span className="text-primary"> SARKAR</span></span>
              <div className="flex items-center space-x-1">
                <span className="h-[2px] w-3 bg-primary rounded-full"></span>
                <span className="text-[0.6rem] font-mono text-gray-400 tracking-widest uppercase">core_dev_active</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Hire Button */}
          <div className="hidden md:block">
            <a href="#contact" className="dashed-border-btn px-6 py-2.5 text-sm font-bold text-white tracking-widest hover:bg-primary/10 transition-colors uppercase font-mono">
              Hire_Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium tracking-widest uppercase hover:bg-white/5 w-full text-center rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
               <a href="#" className="mt-4 dashed-border-btn px-6 py-2.5 text-sm font-bold text-white tracking-widest uppercase font-mono inline-block">
                Hire_Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
