'use client';

import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

/* lazy-load the heavy 3D scene so the shell paints immediately */
const HeroScene = lazy(() => import('./HeroScene'));

/* ── loading fallback (renders inside R3F Canvas) ─────────────────── */
function Loader() {
  return (
    <mesh>
      <planeGeometry args={[0, 0]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

/* ── HTML overlay shown while Canvas/scene loads ──────────────────── */
function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="h-8 w-8 rounded-full border-2 border-[#c9a96e]/30 border-t-[#c9a96e] animate-spin" />
    </div>
  );
}

/* ── main export ──────────────────────────────────────────────────── */
export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Suspense fallback={<LoadingOverlay />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'auto',
          }}
        >
          {/* subtle background colour matching the site */}
          <color attach="background" args={['#0a0a0a']} />

          <Suspense fallback={<Loader />}>
            <HeroScene />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
            /* limit vertical orbit so the scene never flips */
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />

          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}
