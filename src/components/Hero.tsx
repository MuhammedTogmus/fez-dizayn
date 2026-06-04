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
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0604]">
      {/* LAYER 1: Crossfading image carousel — lowest z-index */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src={heroImages[currentIndex]}
            alt="Fez Dizayn - Lüks İç Mimarlık"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* LAYER 2: Semi-dark luxury gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0604]/85 via-[#0a0604]/25 to-[#0a0604]/90 pointer-events-none" />

      {/* LAYER 3: Cinematic vignette */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px 60px rgba(10,6,4,0.5)' }} />

      {/* FOREGROUND: Text & CTA */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-center pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#c9a96e] text-xs md:text-sm tracking-[0.35em] uppercase mb-8 font-light"
        >
          İç Mimarlık · Wood Design · Dekorasyon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-100 leading-[1.08] mb-6 max-w-5xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          Yaşam Alanlarınızı Yeniden Tanımlıyoruz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-stone-300/80 text-sm md:text-base max-w-xl mb-12 leading-relaxed"
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
            className="inline-block border border-[#c9a96e]/80 bg-[#c9a96e]/10 backdrop-blur-sm hover:bg-[#c9a96e] hover:text-[#0a0604] text-stone-100 px-12 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-400 cursor-pointer"
          >
            Projeleri Keşfet
          </Link>
        </motion.div>
      </div>

      {/* Carousel indicator dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-3 pointer-events-none">
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
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#110e0a] to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
