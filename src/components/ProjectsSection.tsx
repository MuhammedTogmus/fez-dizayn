'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Bosphorus Yalı',
    category: 'İç Mimari & Dekorasyon',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-8',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 2,
    title: 'Levent Penthouse',
    category: 'Modern Yaşam',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 3,
    title: 'Çeşme Villa',
    category: 'Yazlık Ev',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 4,
    title: 'Zorlu Rezidans',
    category: 'Kentsel Lüks',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&q=80&w=800',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-8',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 5,
    title: 'Nişantaşı Loft',
    category: 'Minimalist Lüks',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=800',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-12',
    aspect: 'aspect-[21/9]'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projeler" className="bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-[#c9a96e] font-sans uppercase tracking-widest text-sm mb-4">Portfolyo</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
              Seçkin <span className="italic font-light">Projeler</span>
            </h3>
          </div>
          <button className="text-[#f5f0eb] border-b border-[#c9a96e]/30 pb-1 hover:border-[#c9a96e] transition-colors duration-300 font-sans tracking-wide">
            TÜM PROJELERİ GÖR
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${project.colSpan} relative group overflow-hidden bg-[#141414] ${project.aspect}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-8 md:p-10">
                <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-[#c9a96e] font-sans text-sm tracking-widest uppercase mb-3">
                    {project.category}
                  </p>
                  <h4 className="text-white font-serif text-3xl md:text-4xl">
                    {project.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
