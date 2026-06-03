'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });
const MagneticButton = dynamic(() => import('./MagneticButton'), { ssr: false });

/* ─── animation helpers ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.6 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
});

const HEADLINE = 'Yaşam Alanlarınızı Yeniden Tanımlıyoruz';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* ── 3D Canvas (behind everything) ── */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* ── Content overlay ── */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        {/* Tagline */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 flex items-center gap-4"
        >
          <span
            className="h-px w-8 md:w-12"
            style={{ backgroundColor: '#c9a96e' }}
          />
          <span
            className="text-xs font-light uppercase tracking-[0.35em] md:text-sm"
            style={{ color: '#c9a96e', fontFamily: 'var(--font-sans)' }}
          >
            İç Mimarlık &amp; Tasarım
          </span>
          <span
            className="h-px w-8 md:w-12"
            style={{ backgroundColor: '#c9a96e' }}
          />
        </motion.div>

        {/* Headline – word-by-word stagger */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl lg:text-8xl"
          style={{ color: '#f5f0eb', fontFamily: 'var(--font-serif)' }}
        >
          {HEADLINE.split(' ').map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="mr-[0.3em] inline-block last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(1.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: '#a39e99', fontFamily: 'var(--font-sans)' }}
        >
          Lüks iç mekan tasarımında 15 yıllık deneyim. Hayal ettiğiniz
          mekanları, olağanüstü detaylarla hayata geçiriyoruz.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp(2.0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10"
        >
          <MagneticButton>Projelerimizi Keşfedin</MagneticButton>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span
          className="text-[11px] font-light uppercase tracking-[0.3em]"
          style={{ color: '#a39e99', fontFamily: 'var(--font-sans)' }}
        >
          Keşfet
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c9a96e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M7 10l5 5 5-5" />
        </motion.svg>
      </motion.div>

      {/* ── Bottom gradient fade ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-40 w-full"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #0a0a0a)',
        }}
      />
    </section>
  );
}
