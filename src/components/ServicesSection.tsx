'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'İç Mimari Tasarım',
    description: 'Yaşam alanlarınızı fonksiyonellik ve estetiğin mükemmel dengesiyle yeniden kurguluyoruz. Her detayda lüks ve zarafeti hissettiren, size özel, zamansız mekanlar yaratıyoruz.',
  },
  {
    id: '02',
    title: '3D Modelleme & Render',
    description: 'Hayalinizdeki mekanları gerçeğe dönüştürmeden önce, en ince ayrıntısına kadar fotogerçekçi 3D görsellerle deneyimleme imkanı sunuyoruz. Gerçekçi ışık, doku ve materyal kalitesiyle projeyi önceden yaşayın.',
  },
  {
    id: '03',
    title: 'Özel Mobilya Üretimi',
    description: 'Mekanınıza tam uyum sağlayan, birinci sınıf malzemelerle el işçiliğiyle üretilen özgün mobilya tasarımlarıyla yaşam alanlarınıza karakter katıyoruz. Her parça benzersiz bir sanat eseri niteliğinde.',
  },
  {
    id: '04',
    title: 'Proje Yönetimi',
    description: 'Tasarım aşamasından anahtar teslimine kadar tüm süreçleri titizlikle yönetiyor, projelerinizin bütçeye uygun, zamanında ve kusursuz bir şekilde tamamlanmasını sağlıyoruz.',
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="hizmetler" className="bg-[#141414] text-[#f5f0eb] py-24 md:py-32 w-full min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="font-playfair text-4xl md:text-6xl font-light tracking-wide text-[#f5f0eb]">
              Hizmetlerimiz
            </h2>
            <div className="w-24 h-[1px] bg-[#c9a96e] mt-8"></div>
          </div>
          <p className="font-inter text-white/60 font-light max-w-md text-lg">
            Estetik ve fonksiyonelliği bir araya getiren yenilikçi çözümlerle yaşam alanlarınızı dönüştürüyoruz.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => {
            const isExpanded = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-white/10 cursor-pointer overflow-hidden"
              >
                {/* Background Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c9a96e]/5 to-transparent z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10 py-10 md:py-14 px-4 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                  
                  {/* Left Side: Number and Title */}
                  <div className="flex items-start md:items-center gap-6 md:gap-12 md:w-1/2">
                    <span className={`font-inter font-light text-xl md:text-2xl transition-colors duration-500 ${isExpanded ? 'text-[#c9a96e]' : 'text-white/30'}`}>
                      {service.id}
                    </span>
                    <h3 className={`font-playfair text-3xl md:text-5xl lg:text-6xl transition-all duration-500 ${isExpanded ? 'text-[#c9a96e] transform md:translate-x-4' : 'text-[#f5f0eb]'}`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Right Side: Description */}
                  <div className="md:w-1/2 flex justify-end">
                    <motion.div
                      className="overflow-hidden w-full md:max-w-md"
                      initial={false}
                      animate={{ 
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] as any }}
                    >
                      <div className="pt-4 md:pt-0 pb-4 md:pb-0">
                        <p className="font-inter text-lg text-white/70 leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
