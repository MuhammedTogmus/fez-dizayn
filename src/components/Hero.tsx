'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamic import with SSR false guarantees the server won't crash trying to render WebGL
const SceneDynamic = dynamic(() => import('./Scene'), { 
  ssr: false, 
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#110e0a]">
      <motion.div 
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="font-serif text-[#c9a96e] tracking-[0.2em] uppercase text-sm"
      >
        Yükleniyor...
      </motion.div>
    </div>
  )
});

export default function Hero() {
  const [mount3D, setMount3D] = useState(false);

  useEffect(() => {
    // Delay heavy WebGL rendering by 1500ms to unblock the main thread for LCP and completely eliminate TBT
    const timer = setTimeout(() => setMount3D(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#110e0a]">
      {/* BACKGROUND LAYER: strictly z-0 and pointer-events-none */}
      <div className="absolute inset-0 z-[0] pointer-events-none overflow-hidden">
        {/* CSS Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2e2720_1px,transparent_1px),linear-gradient(to_bottom,#2e2720_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20" />
        
        {/* Typographic Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none mix-blend-overlay">
          <h1 className="font-serif text-[25vw] font-bold text-[#f2ebe3] opacity-[0.03] tracking-tighter whitespace-nowrap">
            FEZ
          </h1>
        </div>

        {/* 3D WebGL Scene */}
        {mount3D && <SceneDynamic />}
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
          {/* Using a standard Next.js-compatible anchor with pointer events enabled */}
          <a
            href="#projeler"
            className="inline-block border border-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#110e0a] text-[#f2ebe3] px-10 py-4 uppercase tracking-[0.2em] text-sm transition-colors duration-300 cursor-pointer pointer-events-auto"
          >
            Projeleri Keşfet
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#110e0a] to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
