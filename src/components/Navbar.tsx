'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hizmetlerimiz', href: '/#hizmetler' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'İletişim / Hızlı Fiyat Al', href: 'https://wa.me/905319317851', external: true },
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
          scrolled ? 'bg-[#110e0a]/90 backdrop-blur-xl border-b border-[#2e2720]/50 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
          
          <Link href="/" className="relative z-[60]" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}>
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-semibold text-[#f2ebe3] uppercase">
              Fez Dizayn
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`group relative text-sm tracking-[0.15em] uppercase transition-colors ${
                  link.external ? 'text-[#c9a96e] hover:text-[#d4b97a] font-medium' : 'text-[#f2ebe3]/80 hover:text-[#c9a96e]'
                }`}
              >
                {link.label}
                {!link.external && <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu - Properly padded and aligned */}
          <button
            className="relative z-[60] flex md:hidden flex-col items-end justify-center w-12 h-12 gap-2 cursor-pointer p-2 rounded-md hover:bg-white/5 active:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 10, backgroundColor: '#c9a96e' } : { rotate: 0, y: 0, backgroundColor: '#f2ebe3' }}
              className="block h-[2px] w-8 origin-center transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '24px' }}
              className="block h-[2px] bg-[#f2ebe3] transition-all"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -10, backgroundColor: '#c9a96e', width: '32px' } : { rotate: 0, y: 0, backgroundColor: '#f2ebe3', width: '16px' }}
              className="block h-[2px] origin-center transition-all"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 z-[40] flex flex-col justify-center bg-[#110e0a] px-8 sm:px-16 pointer-events-auto border-l border-[#2e2720]"
          >
            <div className="flex flex-col gap-10 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`font-serif text-3xl sm:text-4xl tracking-widest transition-colors ${
                      link.external ? 'text-[#c9a96e] hover:text-[#d4a24e]' : 'text-[#f2ebe3] hover:text-[#c9a96e]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-8 sm:left-16 text-[#b5a898] text-xs tracking-[0.2em] uppercase"
            >
              Fez Dizayn &copy; {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
