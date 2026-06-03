'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'Modern Villa, Beykoz', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000' },
  { id: 2, title: 'Luxury Penthouse, Şişli', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000' },
  { id: 3, title: 'Bohem Konsept, Kadıköy', img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000' },
  { id: 4, title: 'Minimalist Ofis, Levent', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000' },
];

export default function Projects() {
  return (
    <section id="projeler" className="w-full bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#f5f0eb]">Öne Çıkan Projeler</h2>
          <p className="text-[#a39e99] max-w-md text-sm md:text-base leading-relaxed">
            Her mekanı bir sanat eserine dönüştürüyoruz. Bugüne kadar tamamladığımız seçkin iç mimari projelerden bazılarına göz atın.
          </p>
        </motion.div>

        {/* CSS Grid for visually stunning masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-[#141414] rounded-sm cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              {/* Force aspect ratio to ensure no black screen / broken layout */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#c9a96e] mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
