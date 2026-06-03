import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#c9a96e]/30 selection:text-[#f5f0eb]">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      
      <footer className="w-full bg-[#141414] py-16 text-center border-t border-white/5">
        <p className="text-[#a39e99] text-sm tracking-widest">&copy; {new Date().getFullYear()} Fez Dizayn. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
