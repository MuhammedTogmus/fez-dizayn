import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#c9a96e]/30 selection:text-[#f5f0eb]">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Placeholder for future sections */}
      <div id="projeler" className="h-[50vh] bg-[#0a0a0a]" />
      <div id="iletisim" className="h-[50vh] bg-[#141414]" />
    </main>
  );
}
