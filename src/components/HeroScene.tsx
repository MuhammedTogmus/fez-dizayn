'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── colour constants ─────────────────────────────────────────────── */
const GOLD = new THREE.Color('#c9a96e');
const GOLD_LIGHT = new THREE.Color('#e0c98f');

/* ── individual shape component ───────────────────────────────────── */
interface ShapeProps {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  speed?: number;
  floatIntensity?: number;
  distort?: boolean;
}

function MetallicShape({
  geometry,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  speed = 0.4,
  floatIntensity = 0.6,
  distort = false,
}: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { pointer } = useThree();

  /* per-shape random offsets so they don't all move in sync */
  const offset = useMemo(
    () => ({
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      z: Math.random() * Math.PI * 2,
    }),
    [],
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;

    /* slow sine-wave rotation */
    meshRef.current.rotation.x = rotation[0] + Math.sin(t + offset.x) * 0.3;
    meshRef.current.rotation.y = rotation[1] + Math.cos(t + offset.y) * 0.3;
    meshRef.current.rotation.z = rotation[2] + Math.sin(t + offset.z) * 0.15;

    /* subtle parallax toward cursor */
    meshRef.current.position.x =
      position[0] + pointer.x * 0.15;
    meshRef.current.position.y =
      position[1] + pointer.y * 0.15;
  });

  return (
    <Float
      speed={speed * 2}
      rotationIntensity={0.2}
      floatIntensity={floatIntensity}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <primitive object={geometry} attach="geometry" />
        {distort ? (
          <MeshDistortMaterial
            color={GOLD}
            metalness={0.85}
            roughness={0.25}
            distort={0.15}
            speed={1.5}
            envMapIntensity={0.6}
          />
        ) : (
          <meshStandardMaterial
            color={GOLD}
            metalness={0.85}
            roughness={0.25}
            envMapIntensity={0.6}
          />
        )}
      </mesh>
    </Float>
  );
}

/* ── main scene ───────────────────────────────────────────────────── */
export default function HeroScene() {
  /* reusable low-poly geometries (memoised so they're created once) */
  const geometries = useMemo(
    () => ({
      box: new THREE.BoxGeometry(1, 1, 1, 1, 1, 1),
      torus: new THREE.TorusGeometry(0.6, 0.2, 12, 32),
      octahedron: new THREE.OctahedronGeometry(0.6, 0),
      icosahedron: new THREE.IcosahedronGeometry(0.5, 0),
      torusKnot: new THREE.TorusKnotGeometry(0.4, 0.15, 48, 8),
    }),
    [],
  );

  return (
    <>
      {/* ── lighting ─────────────────────────────────────────────── */}
      <ambientLight intensity={0.35} color="#ffe8cc" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#fff5e6"
        castShadow
      />
      <directionalLight
        position={[-3, -2, 2]}
        intensity={0.3}
        color={GOLD_LIGHT}
      />
      <pointLight position={[0, 3, 2]} intensity={0.4} color="#c9a96e" />

      {/* ── fog ──────────────────────────────────────────────────── */}
      <fog attach="fog" args={['#0a0a0a', 4, 12]} />

      {/* ── shapes ───────────────────────────────────────────────── */}
      {/* large box — centre-left */}
      <MetallicShape
        geometry={geometries.box}
        position={[-1.8, 0.5, 0]}
        rotation={[0.3, 0.5, 0.1]}
        scale={0.7}
        speed={0.3}
      />

      {/* torus — upper-right */}
      <MetallicShape
        geometry={geometries.torus}
        position={[1.6, 1.0, -0.5]}
        rotation={[1.2, 0, 0.4]}
        scale={0.9}
        speed={0.35}
        distort
      />

      {/* octahedron — centre */}
      <MetallicShape
        geometry={geometries.octahedron}
        position={[0, -0.3, 0.8]}
        rotation={[0.6, 0.3, 0]}
        scale={0.65}
        speed={0.45}
        floatIntensity={0.8}
      />

      {/* icosahedron — lower-left */}
      <MetallicShape
        geometry={geometries.icosahedron}
        position={[-1.0, -1.2, -0.3]}
        rotation={[0.2, 1.0, 0.5]}
        scale={0.55}
        speed={0.5}
        distort
      />

      {/* torus knot — far right */}
      <MetallicShape
        geometry={geometries.torusKnot}
        position={[2.2, -0.5, -1.0]}
        rotation={[0.8, 0.2, 0.3]}
        scale={0.6}
        speed={0.25}
        floatIntensity={1.0}
      />

      {/* small cube — background accent */}
      <MetallicShape
        geometry={geometries.box}
        position={[0.8, 1.6, -1.5]}
        rotation={[0.7, 0.9, 0.2]}
        scale={0.35}
        speed={0.55}
      />

      {/* small octahedron — lower-right background */}
      <MetallicShape
        geometry={geometries.octahedron}
        position={[1.2, -1.6, -2.0]}
        rotation={[0.4, 0.6, 0.8]}
        scale={0.3}
        speed={0.6}
        floatIntensity={0.5}
      />
    </>
  );
}
