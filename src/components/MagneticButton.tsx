'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({ children, onClick, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Raw motion values for cursor offset
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring-smoothed values for magnetic pull
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Offset from center, scaled down for subtle magnetic pull
    const offsetX = (e.clientX - centerX) * 0.3;
    const offsetY = (e.clientY - centerY) * 0.3;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-block cursor-pointer select-none ${className}`}
    >
      <motion.div
        className="relative overflow-hidden border border-[#c9a96e] px-8 py-4 text-sm tracking-[0.2em] uppercase transition-colors duration-500"
        animate={{
          backgroundColor: hovered ? '#c9a96e' : 'transparent',
          color: hovered ? '#0a0a0a' : '#f5f0eb',
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Shine sweep effect on hover */}
        <motion.span
          className="pointer-events-none absolute inset-0"
          initial={{ x: '-100%' }}
          animate={hovered ? { x: '200%' } : { x: '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
          }}
        />

        <span className="relative z-10 font-light">{children}</span>
      </motion.div>
    </motion.div>
  );
}
