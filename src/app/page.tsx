import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#c9a96e]/30 selection:text-[#f5f0eb]">
      <Navbar />
      <Hero />
      <Projects />
      
      {/* Footer Placeholder */}
      <footer className="w-full bg-[#141414] py-10 text-center text-[#a39e99] text-sm">
        <p>&copy; {new Date().getFullYear()} Fez Dizayn. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
