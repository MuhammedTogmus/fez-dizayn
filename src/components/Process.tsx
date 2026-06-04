'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Tanışma & Keşif',
    desc: 'Sizi dinliyor, yaşam alanınızın potansiyelini ve tam olarak neye ihtiyacınız olduğunu analiz ediyoruz.',
  },
  {
    number: '02',
    title: '3D Tasarım & Projelendirme',
    desc: 'Fikirleri lüks ve estetikle harmanlayarak, gerçeğe en yakın haliyle modelliyor ve onayınıza sunuyoruz.',
  },
  {
    number: '03',
    title: 'Üretim & Kusursuz Uygulama',
    desc: 'Wood Design uzmanlığımızla ahşaba hayat veriyor, projeyi söz verdiğimiz gibi anahtar teslim uyguluyoruz.',
  },
];

export default function Process() {
  return (
    <section className="w-full bg-[#0d0a07] py-28 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#2e2720]/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4"
          >
            Süreç
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2ebe3] leading-tight mb-5"
          >
            Çalışma Sürecimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#b5a898] text-base md:text-lg leading-relaxed"
          >
            Hayalinizdeki Mekana Giden Yol
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Connecting line (hidden on last item & mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-[#c9a96e]/30 to-transparent pointer-events-none" />
              )}

              {/* Step Number */}
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl text-[#c9a96e]/20 group-hover:text-[#c9a96e]/40 transition-colors duration-500 mb-6 leading-none">
                {step.number}
              </span>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#c9a96e] mb-6 group-hover:w-16 transition-all duration-500" />

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl text-[#f2ebe3] mb-4 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#b5a898] text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
