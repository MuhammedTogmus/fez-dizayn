'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const featuredProjects = [
  { id: 1, title: 'Özel Tasarım Mutfak Çözümleri', src: '/images/proje1.jpg', type: 'image' },
  { id: 2, title: 'Yatak Odası Ahşap Duvar Paneli', src: '/images/proje2.jpg', type: 'image' },
  { id: 3, title: 'Doğal Taş Lavabo Uygulaması', src: '/videos/proje-video.mp4', type: 'video' },
];

export default function Projects() {
  return (
    <section id="projeler" className="w-full bg-[#110e0a] py-24 md:py-32 px-6 md:px-12 lg:px-16 border-b border-[#2e2720]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4">Portfolyo</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2ebe3]">Öne Çıkanlar</h2>
          </div>
          <a
            href="/projeler"
            className="inline-block border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#110e0a] px-8 py-3 uppercase tracking-[0.2em] text-xs transition-colors duration-300"
          >
            Tüm Projeleri Gör
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-[#1a1510] rounded-sm cursor-pointer ${index % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <a href="/projeler" className="block relative w-full aspect-[4/5] overflow-hidden">
                {project.type === 'video' ? (
                  <video 
                    src={project.src}
                    muted 
                    playsInline 
                    loop 
                    autoPlay 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <Image 
                    src={project.src} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f2ebe3] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#c9a96e] mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
