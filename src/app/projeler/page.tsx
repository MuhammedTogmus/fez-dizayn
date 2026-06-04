'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
  { id: 1, title: 'Özel Üretim Ahşap Konsol', src: '/images/proje%20(1).jpg', type: 'image' },
  { id: 2, title: 'Doğal Taş & Modern Lavabo', src: '/images/proje%20(2).jpg', type: 'image' },
  { id: 3, title: 'Lüks Banyo Mobilyası', src: '/images/proje%20(3).jpg', type: 'image' },
  { id: 4, title: 'Akıllı Mutfak Sistemleri', src: '/images/proje%20(4).jpg', type: 'image' },
  { id: 5, title: 'Ahşap Duvar Paneli & TV Ünitesi', src: '/images/proje%20(5).jpg', type: 'image' },
  { id: 6, title: 'Özel Üretim Ahşap Dolap', src: '/images/proje%20(6).jpg', type: 'image' },
  { id: 7, title: 'Atölye Üretim Süreci', src: '/videos/video.mp4.mp4', type: 'video' },
  { id: 8, title: 'Tasarım Kütüphane', src: '/images/proje%20(7).jpg', type: 'image' },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#141210] font-sans selection:bg-[#c9a96e]/30 selection:text-[#f2ebe3]">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-16 border-b border-[#2e2720]/50">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4"
          >
            Portfolyo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f2ebe3] leading-tight max-w-4xl"
          >
            Tasarım ve Ustalığın Kesim Noktası
          </motion.h1>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-sm bg-[#1a1715] aspect-[4/3]"
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src}
                    muted 
                    playsInline 
                    loop 
                    autoPlay 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    priority={index < 3}
                    quality={85}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                  <h3 className="font-serif text-xl md:text-2xl text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {item.title}
                  </h3>
                  <div className="w-10 h-[1px] bg-[#c9a96e] mt-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-150" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#1a1715] py-16 text-center border-t border-stone-700/30">
        <p className="text-[#b5a898] text-sm tracking-widest mb-3">&copy; {new Date().getFullYear()} Fez Dizayn. Tüm hakları saklıdır.</p>
        <p className="text-[#7a6e60] text-xs tracking-wider">Design by Uğur Ozman</p>
      </footer>
    </main>
  );
}
