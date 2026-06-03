'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section id="hakkimizda" className="min-h-screen bg-[#141414] text-[#f5f0eb] py-24 px-6 md:px-12 lg:px-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Mimari Mükemmellik,<br />
              <span className="text-[#c9a96e] italic">Zamansız Estetik</span>
            </h2>
            <div className="space-y-6 text-[#f5f0eb]/80 font-sans text-lg md:text-xl font-light leading-relaxed">
              <p>
                Fez Dizayn olarak, mekanları yalnızca tasarlamıyor, onlara ruh katıyoruz. Mimari felsefemiz, lüksün minimalizm ile buluştuğu noktada şekilleniyor. Her bir projede, form ve fonksiyonun kusursuz dengesini arıyoruz.
              </p>
              <p>
                En üst düzey malzemeler, kusursuz işçilik ve kişiye özel yaklaşımımızla, sadece bugünün değil, yarının da estetik anlayışına hitap eden, kalıcı ve ilham verici yaşam alanları yaratıyoruz. Lüksü bir standart değil, bir benzersiz deneyim olarak sunuyoruz.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest overflow-hidden border border-[#c9a96e] text-[#c9a96e] transition-colors duration-500 hover:text-[#141414]">
                <span className="absolute inset-0 bg-[#c9a96e] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10">Daha Fazla Keşfet</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image Content with Parallax */}
        <div ref={containerRef} className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden group">
          <motion.div 
            className="absolute inset-[-15%] w-[130%] h-[130%]"
            style={{ y }}
          >
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
              alt="Fez Dizayn Lüks İç Mimari"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
