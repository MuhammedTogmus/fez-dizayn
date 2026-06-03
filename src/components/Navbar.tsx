'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'İletişim', href: '#iletisim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-out ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative z-50"
          >
            <motion.span
              className="font-serif text-xl tracking-[0.3em] font-semibold text-[#f5f0eb] uppercase select-none"
              whileHover={{ letterSpacing: '0.4em' }}
              transition={{ duration: 0.3 }}
            >
              Fez Dizayn
            </motion.span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative text-[#f5f0eb]/80 text-sm tracking-[0.15em] uppercase font-light transition-colors duration-300 hover:text-[#c9a96e]"
                >
                  {link.label}
                  {/* Underline animation */}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a96e] transition-all duration-500 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[6px]"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 8, backgroundColor: '#f5f0eb' }
                  : { rotate: 0, y: 0, backgroundColor: '#f5f0eb' }
              }
              transition={{ duration: 0.3 }}
              className="block h-[1.5px] w-6 origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-6 bg-[#f5f0eb]"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -8, backgroundColor: '#f5f0eb' }
                  : { rotate: 0, y: 0, backgroundColor: '#f5f0eb' }
              }
              transition={{ duration: 0.3 }}
              className="block h-[1.5px] w-6 origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1] as any,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative text-[#f5f0eb] text-3xl tracking-[0.2em] uppercase font-serif font-light transition-colors duration-300 hover:text-[#c9a96e]"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-0 bg-[#c9a96e] transition-all duration-500 ease-out group-hover:w-full" />
                  </a>
                </motion.div>
              ))}

              {/* Optional gold divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 h-px w-16 bg-[#c9a96e]/40"
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
