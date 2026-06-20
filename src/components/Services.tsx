'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'İç Mimari & Konsept Tasarım',
    desc: 'Mekanların ruhunu yansıtan, estetik ve fonksiyonel yaşam alanları kurguluyoruz.',
  },
  {
    id: '02',
    title: 'Anahtar Teslim Uygulama',
    desc: 'Tasarım aşamasından son dokunuşa kadar tüm süreci kusursuzca yönetiyoruz.',
  },
  {
    id: '03',
    title: 'Özel Ahşap (Wood Design) Üretimi',
    desc: 'Kendi atölyemizde, mekana ve size özel yüksek kalite ahşap mobilyalar üretiyoruz.',
  },
  {
    id: '04',
    title: '3D Modelleme & Görselleştirme',
    desc: 'Projelerinizi hayata geçmeden önce ultra gerçekçi renderlar ile deneyimlemenizi sağlıyoruz.',
  },
  {
    id: '05',
    title: 'Ticari Mekan & Ofis Tasarımı',
    desc: 'Marka kimliğinizi yansıtan, prestijli ve verimli çalışma alanları tasarlıyoruz.',
  },
  {
    id: '06',
    title: 'Akıllı Alan Çözümleri',
    desc: 'Dar veya zorlu mekanlar için estetiği bozmayan, maksimum verim sağlayan fonksiyonel tasarımlar geliştiriyoruz.',
  },
];

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="w-full bg-[#1a1715] py-24 md:py-32 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a96e] text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Hizmetlerimiz
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f2ebe3] leading-tight"
          >
            Uzmanlık Alanlarımız
          </motion.h2>
        </div>

        {/* Services Grid 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.3) }}
              className="group relative bg-[#110e0a] border border-[#2e2720]/50 p-8 md:p-10 lg:p-12 hover:border-[#c9a96e]/30 transition-colors duration-500 overflow-hidden rounded-sm"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <span className="block font-serif text-4xl text-[#c9a96e]/20 group-hover:text-[#c9a96e]/50 transition-colors duration-500 mb-6">
                {service.id}
              </span>

              <h3 className="font-serif text-2xl md:text-3xl text-[#f2ebe3] mb-4 group-hover:text-[#c9a96e] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#b5a898] text-base md:text-lg leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* Decorative line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#c9a96e] w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
