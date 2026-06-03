'use client';

import { motion } from 'framer-motion';

const contactInfo = [
  { label: 'Adres', value: 'Halkalı, Küçükçekmece\nİstanbul, Türkiye' },
  { label: 'Telefon', value: '+90 (212) 555 0 123' },
  { label: 'E-posta', value: 'info@fezdizayn.com' },
];

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="w-full bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Üst Alan */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
          {/* Sol: Başlık */}
          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4"
            >
              İletişim
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f5f0eb] leading-tight mb-6"
            >
              Hayalinizdeki Mekanı Birlikte Tasarlayalım
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#a39e99] text-base md:text-lg leading-relaxed max-w-lg"
            >
              Projeleriniz hakkında görüşmek, fiyat teklifi almak veya sadece merhaba demek
              için bizimle iletişime geçin. İlk danışmanlık ücretsizdir.
            </motion.p>
          </div>

          {/* Sağ: İletişim Bilgileri */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-10">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-l-2 border-[#c9a96e]/30 pl-6"
              >
                <p className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-[#f5f0eb] text-lg md:text-xl whitespace-pre-line leading-relaxed">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* İletişim Formu */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#141414] border border-white/5 p-8 md:p-12 lg:p-16"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] mb-10">
            Bize Yazın
          </h3>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Ad Soyad */}
            <div className="flex flex-col gap-2">
              <label className="text-[#a39e99] text-xs tracking-[0.15em] uppercase">
                Ad Soyad
              </label>
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="bg-transparent border-b border-white/10 focus:border-[#c9a96e] text-[#f5f0eb] py-3 outline-none transition-colors placeholder:text-[#6b6560]"
              />
            </div>

            {/* E-posta */}
            <div className="flex flex-col gap-2">
              <label className="text-[#a39e99] text-xs tracking-[0.15em] uppercase">
                E-posta
              </label>
              <input
                type="email"
                placeholder="email@adresiniz.com"
                className="bg-transparent border-b border-white/10 focus:border-[#c9a96e] text-[#f5f0eb] py-3 outline-none transition-colors placeholder:text-[#6b6560]"
              />
            </div>

            {/* Telefon */}
            <div className="flex flex-col gap-2">
              <label className="text-[#a39e99] text-xs tracking-[0.15em] uppercase">
                Telefon
              </label>
              <input
                type="tel"
                placeholder="+90 (5XX) XXX XX XX"
                className="bg-transparent border-b border-white/10 focus:border-[#c9a96e] text-[#f5f0eb] py-3 outline-none transition-colors placeholder:text-[#6b6560]"
              />
            </div>

            {/* Hizmet Türü */}
            <div className="flex flex-col gap-2">
              <label className="text-[#a39e99] text-xs tracking-[0.15em] uppercase">
                Hizmet Türü
              </label>
              <select className="bg-transparent border-b border-white/10 focus:border-[#c9a96e] text-[#f5f0eb] py-3 outline-none transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-[#141414]">Seçiniz</option>
                <option value="ic-mimari" className="bg-[#141414]">İç Mimari Tasarım</option>
                <option value="3d-render" className="bg-[#141414]">3D Modelleme & Render</option>
                <option value="mobilya" className="bg-[#141414]">Özel Mobilya Üretimi</option>
                <option value="proje-yonetimi" className="bg-[#141414]">Proje Yönetimi</option>
              </select>
            </div>

            {/* Mesaj — tam genişlik */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[#a39e99] text-xs tracking-[0.15em] uppercase">
                Mesajınız
              </label>
              <textarea
                rows={4}
                placeholder="Projeniz hakkında kısaca bilgi verin..."
                className="bg-transparent border-b border-white/10 focus:border-[#c9a96e] text-[#f5f0eb] py-3 outline-none transition-colors resize-none placeholder:text-[#6b6560]"
              />
            </div>

            {/* Gönder Butonu */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="border border-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0a] text-[#f5f0eb] px-12 py-4 uppercase tracking-[0.2em] text-sm transition-colors duration-300 cursor-pointer"
              >
                Gönder
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
