'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="hakkimizda" className="w-full bg-[#110e0a] py-24 md:py-32 px-6 md:px-12 lg:px-16 border-b border-[#2e2720]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Typography and Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#c9a96e]" />
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-semibold">Hakkımızda</p>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2ebe3] leading-tight mb-8">
            Estetik ve Ustalığın <br /> <span className="italic text-[#c9a96e]">Buluşma Noktası</span>
          </h2>
          
          <div className="space-y-6 text-[#b5a898] font-light text-base md:text-lg leading-relaxed">
            <p>
              Fez Dizayn olarak, yılların getirdiği tecrübe ve bitmek tükenmek bilmeyen tasarım tutkumuzla yaşam alanlarınızı yeniden tanımlıyoruz. Lüks, sadece nadide materyaller kullanmak değil; doğru orantı, kusursuz işçilik ve mekana karakteristik bir ruh katabilme sanatıdır.
            </p>
            <p>
              Her bir projeyi, müşterilerimizin hayallerini ve yaşam tarzını yansıtan benzersiz bir eser olarak ele alıyoruz. Anahtar teslim özel tasarım mobilyalardan tam kapsamlı iç mimari çözümlere kadar, kaliteden asla ödün vermeyen butik hizmet anlayışımızla sektörde fark yaratmaya devam ediyoruz.
            </p>
            <p>
              Amacımız; estetiğin ve fonksiyonelliğin kusursuz bir uyum içinde dans ettiği, zamanın ötesinde ve ilham veren kalıcı mekanlar inşa etmektir.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Imagery/Stats or Aesthetic block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 w-full relative"
        >
          <div className="relative aspect-[4/5] md:aspect-square w-full rounded-sm overflow-hidden border border-[#2e2720]">
            <div className="absolute inset-0 bg-[#16120e] flex items-center justify-center p-6 md:p-10">
              <div className="border border-[#c9a96e]/30 w-full h-full flex flex-col items-center justify-center text-center p-6">
                
                <span className="font-serif text-6xl md:text-8xl text-[#c9a96e] block mb-2">15+</span>
                <span className="text-[#f2ebe3] text-xs md:text-sm tracking-[0.3em] uppercase">Yıllık Tecrübe ve Ustalık</span>
                
                <div className="w-16 h-[1px] bg-[#2e2720] my-8 md:my-12" />
                
                <span className="font-serif text-5xl md:text-7xl text-[#c9a96e] block mb-2">%100</span>
                <span className="text-[#f2ebe3] text-xs md:text-sm tracking-[0.3em] uppercase">Özel Üretim Tasarım</span>
                
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-24 h-24 md:w-32 md:h-32 border-l border-b border-[#c9a96e]/40 z-[0]" />
        </motion.div>

      </div>
    </section>
  );
}
