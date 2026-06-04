'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const heroImages = [
  '/images/hero-bg-1.webp',
  '/images/hero-bg-2.jpg',
  '/images/hero-bg-3.webp',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden flex flex-col justify-center">
      {/* LAYER 1: Crossfading images at z-[0] — absolutely positioned, fill parent */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-[0]"
        >
          <Image
            src={heroImages[currentIndex]}
            alt="Fez Dizayn - Lüks İç Mimarlık"
            fill
            priority={currentIndex === 0}
            quality={75}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 100vw"
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
          className="font-serif text-3xl sm:text-4xl md:text-7xl text-white leading-[1.1] mb-4 md:mb-6 max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
        >
          Yaşam Alanlarınızı Yeniden Tanımlıyoruz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-sm md:text-base max-w-xl mb-10 md:mb-12 leading-relaxed"
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

      {/* Carousel indicator dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-[10] flex gap-3 pointer-events-none">
        {heroImages.map((_, i) => (
          <div
            key={i}
            className={`h-[2px] rounded-full transition-all duration-700 ${
              i === currentIndex ? 'w-8 bg-[#c9a96e]' : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#1a1715] to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
