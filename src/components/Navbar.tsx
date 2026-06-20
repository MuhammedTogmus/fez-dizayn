'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/#hakkimizda' },
  { label: 'Hizmetlerimiz', href: '/#hizmetler' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'İletişim', href: 'https://wa.me/905319317851', external: true },
];

// Overlay animation – smooth opacity + vertical slide
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 1, 1], delay: 0.15 } },
};

// Stagger container for nav links
const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1, duration: 0.15 },
  },
};

// Individual link animation – simple, GPU-friendly transforms only
const navItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAnimating = useRef(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    if (!mobileOpen) return;
    if (isAnimating.current) return;
    isAnimating.current = true;
    setMobileOpen(false);
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return;
    
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      closeMenu();
      const hash = href.substring(1);
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    } else {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  // Release the animation lock after state settles (safety net)
  useEffect(() => {
    const timeout = setTimeout(() => {
      isAnimating.current = false;
    }, 900);
    return () => clearTimeout(timeout);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className={`fixed top-0 left-0 w-full z-[50] transition-all duration-500 pointer-events-auto ${
          scrolled ? 'bg-[#110e0a]/90 backdrop-blur-md border-b border-[#2e2720]/50 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="flex w-full items-center justify-between px-6 md:px-12 lg:px-24 xl:px-32">
          
          <Link href="/" className="relative z-[60]" onClick={(e) => handleNavClick(e, '/')}>
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
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className={`group relative text-sm tracking-[0.15em] uppercase transition-colors ${
                  link.external ? 'text-[#c9a96e] hover:text-[#d4b97a] font-medium' : 'text-[#f2ebe3]/80 hover:text-[#c9a96e]'
                }`}
              >
                {link.label}
                {!link.external && <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu */}
          <button
            className="relative z-[60] flex md:hidden flex-col items-end justify-center w-12 h-12 gap-2 cursor-pointer p-2 rounded-md hover:bg-white/5 active:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Menüyü Aç/Kapat"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`block h-[2px] w-8 origin-center ${mobileOpen ? 'bg-[#E8DCC4]' : 'bg-[#f2ebe3]'}`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '24px' }}
              transition={{ duration: 0.3 }}
              className={`block h-[2px] ${mobileOpen ? 'bg-[#E8DCC4]' : 'bg-[#f2ebe3]'}`}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -10, width: '32px' } : { rotate: 0, y: 0, width: '16px' }}
              transition={{ duration: 0.3 }}
              className={`block h-[2px] origin-center ${mobileOpen ? 'bg-[#E8DCC4]' : 'bg-[#f2ebe3]'}`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence mode="wait" onExitComplete={() => { isAnimating.current = false; }}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={() => { isAnimating.current = false; }}
            className="fixed inset-0 z-[40] flex flex-col justify-center px-8 sm:px-16 pointer-events-auto overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #1a1510 0%, #110e0a 40%, #0d0b08 70%, #15120d 100%)'
            }}
          >
            {/* Subtle decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full bg-[#c9a96e]/[0.03] blur-3xl" />
              <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full bg-[#c9a96e]/[0.02] blur-3xl" />
              {/* Thin gold accent line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as any }}
                className="absolute left-8 sm:left-16 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-[#c9a96e]/20 to-transparent origin-top"
              />
            </div>

            <motion.div 
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-8 md:gap-10 mt-10"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  variants={navItemVariants}
                >
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={(e) => handleNavClick(e, link.href, link.external)}
                    className="group flex flex-col items-center justify-center transition-colors text-[#E8DCC4] hover:text-[#c9a96e] text-center"
                  >
                    <span className="block text-sm text-[#E8DCC4]/40 mb-1 font-sans tracking-widest group-hover:text-[#c9a96e]/70 transition-colors duration-300">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide group-hover:tracking-[0.15em] transition-all duration-500">
                      {link.label}
                    </span>
                    <span className="block h-[1px] w-0 bg-[#c9a96e]/50 group-hover:w-full transition-all duration-500 mt-2" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }} 
              transition={{ delay: 0.5, duration: 0.4 }}
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
