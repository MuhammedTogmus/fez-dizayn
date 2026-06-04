'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#3b2313] via-[#1a0f08] to-[#0a0604]">
      {/* BACKGROUND LAYER: strictly z-0 and pointer-events-none */}
      <div className="absolute inset-0 z-[0] pointer-events-none overflow-hidden">
        {/* CSS Noise Overlay for realistic wood grain tactile feel */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        
        {/* Typographic Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none mix-blend-overlay">
          <h1 className="font-serif text-[25vw] font-bold text-[#f2ebe3] opacity-[0.02] tracking-tighter whitespace-nowrap">
            FEZ
          </h1>
        </div>
      </div>

      {/* FOREGROUND LAYER: strictly z-10 and pointer-events-auto for clickability */}
      <div className="relative z-[10] h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center pointer-events-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#c9a96e] text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-light"
        >
          Lüks İç Mimarlık Ajansı
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#f2ebe3] leading-[1.1] mb-10 max-w-5xl"
        >
          Yaşam Alanlarınızı Yeniden Tanımlıyoruz
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Using Next.js Link for instantaneous client-side SPA routing */}
          <Link
            href="/projeler"
            className="inline-block border border-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#110e0a] text-[#f2ebe3] px-10 py-4 uppercase tracking-[0.2em] text-sm transition-colors duration-300 cursor-pointer pointer-events-auto"
          >
            Projeleri Keşfet
          </Link>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#110e0a] to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
