'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const heroImages = [
  '/images/hero-bg-1.webp',
  '/images/hero-bg-2.jpg',
  '/images/hero-bg-4.jpg',
  '/images/hero-bg-5.png',
  '/images/hero-bg-6.webp',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col justify-center">
      


      {/* LAYER 1: Crossfading images at z-[0] — absolutely positioned, fill parent */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 z-[0]"
        >
          <Image
            src={heroImages[currentIndex]}
            alt="Fez Dizayn - Lüks İç Mimarlık"
            fill
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
            quality={60}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* LAYER 2: Refreshing semi-transparent overlay — NOT solid black */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/20 to-black/60 pointer-events-none" />

      {/* FOREGROUND: Text & CTA at z-[10] */}
      <div className="relative z-[10] h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-center pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#c9a96e] text-xs md:text-sm tracking-[0.35em] uppercase mb-4 md:mb-8 font-light"
        >
          İç Mimarlık · Wood Design · Dekorasyon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-4 md:mb-6 max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
        >
          Yaşam Alanlarınızı Yeniden Tanımlıyoruz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          Halkalı, İstanbul merkezli lüks iç mimarlık ve özel ahşap tasarım atölyesi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="/projeler"
            className="inline-block border border-[#c9a96e]/80 bg-[#c9a96e]/10 backdrop-blur-sm hover:bg-[#c9a96e] hover:text-[#0a0604] text-white px-10 md:px-12 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 cursor-pointer"
          >
            Projeleri Keşfet
          </Link>
        </motion.div>
      </div>

      {/* Slider Controls (Prev/Next) */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[20] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#110e0a]/70 hover:bg-[#c9a96e]/20 border border-white/10 hover:border-[#c9a96e]/50 text-white hover:text-[#c9a96e] transition-all duration-300 pointer-events-auto group"
        aria-label="Önceki Görsel"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[20] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#110e0a]/70 hover:bg-[#c9a96e]/20 border border-white/10 hover:border-[#c9a96e]/50 text-white hover:text-[#c9a96e] transition-all duration-300 pointer-events-auto group"
        aria-label="Sonraki Görsel"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Carousel indicator dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-[10] flex gap-3 pointer-events-none">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Görsel ${i + 1}`}
            className={`h-[2px] rounded-full transition-all duration-700 pointer-events-auto cursor-pointer ${
              i === currentIndex ? 'w-8 bg-[#c9a96e]' : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#1a1715] to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
