import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#110e0a] font-sans selection:bg-[#c9a96e]/30 selection:text-[#f2ebe3]">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Process />
      <Contact />
      <Services />
      
      <footer className="w-full bg-[#1a1510] py-16 text-center border-t border-white/5">
        <p className="text-[#b5a898] text-sm tracking-widest mb-3">&copy; {new Date().getFullYear()} Fez Dizayn. Tüm hakları saklıdır.</p>
        <p className="text-[#7a6e60] text-xs tracking-wider">Design by Uğur Ozman</p>
      </footer>
    </main>
  );
}
