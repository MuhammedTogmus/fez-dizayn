'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'İç Mimarlık',
    desc: 'Yaşam ve çalışma alanlarınızı fonksiyonellik ile estetiğin mükemmel dengesiyle yeniden tasarlıyoruz. Her mekan, sahibinin hikayesini anlatır.',
  },
  {
    id: '02',
    title: 'Wood Design',
    desc: 'Doğal ahşabın sıcaklığını modern tasarım anlayışıyla birleştiriyoruz. Özel ölçü mobilya, duvar panelleri ve ahşap detay çözümleri üretiyoruz.',
  },
  {
    id: '03',
    title: 'Dekorasyon',
    desc: 'Mekanlarınıza karakter ve ruh kazandıran dekorasyon çözümleri sunuyoruz. Renk paletinden aksesuar seçimine kadar her detay titizlikle planlanır.',
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="hizmetler"
      className="w-full bg-[#1a1510] py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Sol Sütun: Başlık */}
        <div className="lg:w-1/3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4"
          >
            Hizmetlerimiz
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2ebe3] leading-tight sticky top-32"
          >
            Uzmanlık Alanlarımız
          </motion.h2>
        </div>

        {/* Sağ Sütun: Kompakt Akordeon */}
        <div className="lg:w-2/3 flex flex-col border-t border-white/10">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group border-b border-white/10 py-8 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-6 md:gap-10">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-[#c9a96e] font-serif text-xl transition-opacity">
                      {service.id}
                    </span>
                    <h3
                      className={`font-serif text-2xl md:text-3xl lg:text-4xl transition-colors duration-500 ${
                        isActive
                          ? 'text-[#f2ebe3]'
                          : 'text-[#f2ebe3]/40 group-hover:text-[#f2ebe3]/70'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Artı ikonu */}
                  <div className="hidden md:flex relative w-5 h-5 items-center justify-center shrink-0">
                    <div className="absolute w-full h-[1px] bg-[#c9a96e]" />
                    <div
                      className={`absolute w-full h-[1px] bg-[#c9a96e] transition-transform duration-300 ${
                        isActive ? 'rotate-0' : 'rotate-90'
                      }`}
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 pl-[3.5rem] md:pl-[4.5rem] text-[#b5a898] max-w-xl text-sm md:text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
