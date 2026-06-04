'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
  { id: 1, title: 'Özel Üretim Ahşap Konsol', src: '/images/proje%20(1).jpg', type: 'image', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { id: 2, title: 'Doğal Taş & Modern Lavabo', src: '/videos/video.mp4.mp4', type: 'video', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 3, title: 'Özel Tasarım Mutfak & Yaşam Alanı', src: '/images/proje%20(2).jpg', type: 'image', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 4, title: 'Modern Banyo Mobilyası', src: '/images/proje%20(3).jpg', type: 'image', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
  { id: 5, title: 'Minimalist Ofis Mobilyaları', src: '/images/proje%20(4).jpg', type: 'image', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
  { id: 6, title: 'Özel Marangozluk İşleri', src: '/images/proje%20(5).jpg', type: 'image', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 7, title: 'Lüks Zemin ve Ahşap Detaylar', src: '/images/proje%20(6).jpg', type: 'image', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 8, title: 'Tasarım Kütüphane', src: '/images/proje%20(7).jpg', type: 'image', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#110e0a] font-sans selection:bg-[#c9a96e]/30 selection:text-[#f2ebe3]">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-16 border-b border-[#2e2720]">
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
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f2ebe3] leading-tight max-w-4xl"
          >
            Tasarım ve Ustalığın Kesim Noktası
          </motion.h1>
        </div>
      </section>

      {/* Masonry/Bento Grid Gallery */}
      <section className="py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative overflow-hidden bg-[#1a1510] rounded-sm ${item.colSpan} ${item.rowSpan}`}
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#110e0a]/90 via-[#110e0a]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f2ebe3] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#c9a96e] mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#1a1510] py-16 text-center border-t border-white/5 mt-10">
        <p className="text-[#b5a898] text-sm tracking-widest mb-3">&copy; {new Date().getFullYear()} Fez Dizayn. Tüm hakları saklıdır.</p>
        <p className="text-[#7a6e60] text-xs tracking-wider">Design by Uğur Ozman</p>
      </footer>
    </main>
  );
}
