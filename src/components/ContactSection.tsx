'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="iletisim" className="bg-[#0a0a0a] text-[#f5f0eb] pt-24 md:pt-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-24">
          
          {/* Left Column: Contact Details */}
          <div className="lg:w-5/12 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="font-playfair text-5xl md:text-7xl font-light tracking-wide mb-8">
                Bize Ulaşın
              </h2>
              <p className="font-inter text-white/60 font-light text-lg mb-12 max-w-md leading-relaxed">
                Yeni bir projeye başlamak veya hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-8 font-inter font-light"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <h4 className="text-[#c9a96e] text-sm uppercase tracking-widest mb-2 font-medium">Adres</h4>
                <p className="text-xl text-white/80">Halkalı Merkez Mah.<br/>Küçükçekmece, İstanbul</p>
              </div>
              
              <div>
                <h4 className="text-[#c9a96e] text-sm uppercase tracking-widest mb-2 font-medium">İletişim</h4>
                <a href="mailto:info@fezdizayn.com" className="block text-xl text-white/80 hover:text-white transition-colors">info@fezdizayn.com</a>
                <a href="tel:+905555555555" className="block text-xl text-white/80 hover:text-white transition-colors mt-1">+90 (555) 555 55 55</a>
              </div>

              <div>
                <h4 className="text-[#c9a96e] text-sm uppercase tracking-widest mb-2 font-medium">Sosyal Medya</h4>
                <div className="flex gap-6">
                  <a href="#" className="text-xl text-white/80 hover:text-[#c9a96e] transition-colors">Instagram</a>
                  <a href="#" className="text-xl text-white/80 hover:text-[#c9a96e] transition-colors">Behance</a>
                  <a href="#" className="text-xl text-white/80 hover:text-[#c9a96e] transition-colors">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <motion.form 
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
              viewport={{ once: true, margin: "-100px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative flex-1 mt-6">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white font-light focus:outline-none focus:border-[#c9a96e] transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-lg text-white/40 pointer-events-none transition-all duration-300
                    peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-[#c9a96e]
                    peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white/60">
                    Adınız Soyadınız
                  </label>
                </div>
                <div className="relative flex-1 mt-6">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white font-light focus:outline-none focus:border-[#c9a96e] transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-lg text-white/40 pointer-events-none transition-all duration-300
                    peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-[#c9a96e]
                    peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white/60">
                    E-posta Adresiniz
                  </label>
                </div>
              </div>

              <div className="relative mt-6">
                <input 
                  type="text" 
                  id="subject"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white font-light focus:outline-none focus:border-[#c9a96e] transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="subject" className="absolute left-0 top-3 text-lg text-white/40 pointer-events-none transition-all duration-300
                  peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-[#c9a96e]
                  peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white/60">
                  Konu
                </label>
              </div>

              <div className="relative mt-6">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white font-light focus:outline-none focus:border-[#c9a96e] transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-lg text-white/40 pointer-events-none transition-all duration-300
                  peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-[#c9a96e]
                  peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white/60">
                  Mesajınız
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 self-start bg-transparent border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0a] px-12 py-4 rounded-full font-inter text-sm uppercase tracking-widest transition-all duration-300"
              >
                Gönder
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-20 relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-playfair text-2xl tracking-wider">
            FEZ <span className="text-[#c9a96e]">DİZAYN</span>
          </div>
          <div className="font-inter font-light text-white/50 text-sm text-center">
            &copy; {new Date().getFullYear()} Fez Dizayn. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-6 font-inter font-light text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </section>
  );
}
