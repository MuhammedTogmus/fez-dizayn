'use client';

import { motion } from 'framer-motion';

const contactInfo = [
  { label: 'Konum', value: 'Halkalı, İstanbul', href: '' },
  { label: 'Telefon', value: '+90 531 931 78 51', href: 'tel:+905319317851' },
  { label: 'Instagram', value: '@fezdizayn', href: 'https://www.instagram.com/fezdizayn' },
];

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="w-full bg-[#110e0a] py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-[#2e2720]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
          {/* Sol: Başlık */}
          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4"
            >
              İletişim
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2ebe3] leading-tight mb-6"
            >
              Hayalinizdeki Mekanı Birlikte Tasarlayalım
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#b5a898] text-base md:text-lg leading-relaxed max-w-lg"
            >
              İç mimarlık, ahşap tasarım ve dekorasyon projeleriniz için WhatsApp
              üzerinden hızlıca iletişime geçin. İlk danışmanlık ücretsizdir.
            </motion.p>
          </div>

          {/* Sağ: İletişim Bilgileri */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-10">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-l-2 border-[#8b6f47]/40 pl-6"
              >
                <p className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[#f2ebe3] text-lg md:text-xl whitespace-pre-line leading-relaxed hover:text-[#c9a96e] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[#f2ebe3] text-lg md:text-xl whitespace-pre-line leading-relaxed">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA — Massive Visually Striking Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#2e1b10] via-[#1a0f08] to-[#0a0604] border border-[#c9a96e]/30 shadow-[0_0_60px_rgba(201,169,110,0.1)] p-10 sm:p-16 md:p-24 lg:p-32 flex flex-col items-center text-center rounded-sm relative overflow-hidden"
        >

          <h3 className="relative z-10 font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#f2ebe3] mb-4 md:mb-6">
            Siparişleriniz İçin Bize Ulaşın
          </h3>
          <p className="relative z-10 text-[#b5a898] text-sm sm:text-base md:text-xl max-w-2xl mb-8 md:mb-12 leading-relaxed">
            Mekanınıza özel ahşap tasarım ve dekorasyon çözümleri için WhatsApp üzerinden hızlıca iletişime geçin. Tasarım danışmanlığı tamamen ücretsizdir.
          </p>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/905319317851"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#22c55e] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(37,211,102,0.25)] active:scale-[0.97] text-[#110e0a] font-semibold px-10 md:px-14 py-5 text-base md:text-lg uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer rounded-sm"
          >
            {/* WhatsApp Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp ile Yazın
          </a>

          {/* Static accent line */}
          <div className="mt-6 w-48 h-1 rounded-full bg-[#25D366]/20" />
        </motion.div>
      </div>
    </section>
  );
}
