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
    <section className="w-full bg-[#1a1715] py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a96e] text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Süreç
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f2ebe3] leading-tight mb-4"
          >
            Çalışma Sürecimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#b5a898] text-base md:text-xl leading-relaxed"
          >
            Hayalinizdeki Mekana Giden Yol
          </motion.p>
        </div>

        {/* Steps Grid — clean and simple */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group will-change-transform transform-gpu"
            >
              {/* Top border line */}
              <div className="border-t border-stone-600/50 pt-6 mb-2" />

              {/* Step Number */}
              <span className="font-serif text-3xl text-[#c9a96e]/40 group-hover:text-[#c9a96e]/70 transition-colors duration-500 block mb-4">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#f2ebe3] mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#b5a898] text-base md:text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
