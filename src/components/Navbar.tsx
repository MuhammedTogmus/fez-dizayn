'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className={`fixed top-0 left-0 w-full z-[50] transition-all duration-500 pointer-events-auto ${
          scrolled ? 'bg-[#110e0a]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
          
          {/* Logo routes to home via next/link */}
          <Link href="/" className="relative z-[60]" onClick={() => setMobileOpen(false)}>
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-semibold text-[#f2ebe3] uppercase">
              Fez Dizayn
            </span>
          </Link>

          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm tracking-[0.15em] text-[#f2ebe3]/80 uppercase transition-colors hover:text-[#c9a96e]"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            className="relative z-[60] flex md:hidden flex-col items-center justify-center w-10 h-10 gap-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 9, backgroundColor: '#c9a96e' } : { rotate: 0, y: 0, backgroundColor: '#f2ebe3' }}
              className="block h-[2px] w-8 origin-center transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-8 bg-[#f2ebe3]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -9, backgroundColor: '#c9a96e' } : { rotate: 0, y: 0, backgroundColor: '#f2ebe3' }}
              className="block h-[2px] w-8 origin-center transition-colors"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 z-[40] flex flex-col items-center justify-center bg-[#110e0a] px-6 pointer-events-auto"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-4xl sm:text-5xl tracking-widest text-[#f2ebe3] hover:text-[#c9a96e] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
