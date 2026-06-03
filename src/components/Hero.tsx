'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Performans İyileştirmesi: 3D Sahneyi Sunucu Tarafı Renderdan Çıkartır ve Lazy Load yapar.
const SceneDynamic = dynamic(() => import('./Scene'), { 
  ssr: false, 
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
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
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* 3D Arkaplan Katmanı: z-0 ve pointer-events-none ile etkileşimi tamamen kapatır */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SceneDynamic />
      </div>

      {/* Ana UI Katmanı: z-10 ile öne çıkar, pointer-events-auto ile butonlar çalışır */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center pointer-events-auto">
        
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
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#f5f0eb] leading-[1.1] mb-10 max-w-5xl"
        >
          Yaşam Alanlarınızı Yeniden Tanımlıyoruz
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projeler"
            whileHover={{ scale: 1.05, backgroundColor: '#c9a96e', color: '#0a0a0a' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-[#c9a96e] text-[#f5f0eb] px-10 py-4 uppercase tracking-[0.2em] text-sm transition-colors duration-300 cursor-pointer"
          >
            Projeleri Keşfet
          </motion.a>
        </motion.div>
      </div>
      
      {/* Pürüzsüz geçiş için gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
