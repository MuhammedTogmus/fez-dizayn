'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/#hakkimizda' },
  { label: 'Hizmetlerimiz', href: '/#hizmetler' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'İletişim', href: 'https://wa.me/905319317851', external: true },
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
        {/* Preload the heavy background image so there's no delay on first open */}
        <div className="opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden" aria-hidden="true">
          <Image 
            src="/images/menu-bg.jpg" 
            alt="Preload" 
            width={1}
            height={1}
            quality={75}
            priority 
          />
        </div>

        <div className="flex w-full items-center justify-between px-6 md:px-12 lg:px-24 xl:px-32">
          
          <Link href="/" className="relative z-[60]" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}>
            <span className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-semibold uppercase transition-colors duration-300 ${mobileOpen ? 'text-[#E8DCC4]' : 'text-[#f2ebe3]'}`}>
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
              animate={mobileOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className={`block h-[2px] w-8 origin-center transition-all duration-300 ${mobileOpen ? 'bg-[#E8DCC4]' : 'bg-[#f2ebe3]'}`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '24px' }}
              className={`block h-[2px] transition-all duration-300 ${mobileOpen ? 'bg-[#E8DCC4]' : 'bg-[#f2ebe3]'}`}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -10, width: '32px' } : { rotate: 0, y: 0, width: '16px' }}
              className={`block h-[2px] origin-center transition-all duration-300 ${mobileOpen ? 'bg-[#E8DCC4]' : 'bg-[#f2ebe3]'}`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { delay: 0.3, duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] as any }}
            className="fixed inset-0 z-[40] flex flex-col justify-center px-8 sm:px-16 pointer-events-auto overflow-hidden"
          >
            <div className="absolute inset-0 z-[-1]">
              <Image 
                src="/images/menu-bg.jpg" 
                alt="Menu Background" 
                fill 
                className="object-cover object-center"
                quality={75}
                priority 
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[#110e0a]/50" />
            </div>
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col items-center gap-8 md:gap-10 mt-10"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                    exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
                  }}
                >
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="group flex flex-col items-center justify-center transition-colors text-[#E8DCC4] hover:text-[#c9a96e] text-center"
                  >
                    <span className="block text-sm text-[#E8DCC4]/50 mb-1 font-sans tracking-widest group-hover:text-[#c9a96e]/70 transition-colors">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute bottom-12 left-0 right-0 text-center text-[#8c857d] text-xs md:text-sm tracking-[0.2em] uppercase font-sans"
            >
              Fez Dizayn &copy; {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
