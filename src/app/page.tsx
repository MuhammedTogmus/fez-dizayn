import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollToTop from '@/components/ScrollToTop';
import dynamic from 'next/dynamic';

const Process = dynamic(() => import('@/components/Process'));
const About = dynamic(() => import('@/components/About'));
const Contact = dynamic(() => import('@/components/Contact'));
const Services = dynamic(() => import('@/components/Services'));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#110e0a] font-sans selection:bg-[#c9a96e]/30 selection:text-[#f2ebe3]">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
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
