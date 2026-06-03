'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SPRING_CFG = { damping: 25, stiffness: 250, mass: 0.5 };
const DOT_SIZE = 8;
const RING_SIZE = 40;

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  /* raw mouse position */
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  /* smoothed ring position (trails behind) */
  const ringX = useSpring(mouseX, SPRING_CFG);
  const ringY = useSpring(mouseY, SPRING_CFG);

  useEffect(() => {
    /* hide on touch / narrow screens */
    const mq = window.matchMedia('(pointer: fine) and (min-width: 768px)');
    const updateVisibility = () => setVisible(mq.matches);
    updateVisibility();
    mq.addEventListener('change', updateVisibility);

    /* track mouse */
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);

    /* interactive-element hover detection via delegation */
    const INTERACTIVE =
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(INTERACTIVE)) setHovered(true);
    };
    const out = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(INTERACTIVE)) setHovered(false);
    };

    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    return () => {
      mq.removeEventListener('change', updateVisibility);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      {/* ── Small dot (moves instantly) ── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          backgroundColor: '#c9a96e',
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* ── Outer ring (trails with spring) ── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          border: '1.5px solid #c9a96e',
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 1.6 : 1,
          opacity: hovered ? 0.6 : 0.4,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
