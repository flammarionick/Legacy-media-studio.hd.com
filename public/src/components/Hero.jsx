import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Html } from '@react-three/drei';

function Hero() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <dodecahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial color="#7e22ce" metalness={0.5} roughness={0.2} />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
        <div className="text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to <span className="text-purple-400">Legacy Media</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Elevating your vision through <span className="font-semibold text-purple-300">digital storytelling</span>
          </p>
          <a
            href="/portfolio"
            className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-full text-white text-sm font-semibold"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 z-0" />
    </section>
  );
}

export default Hero;