// src/components/LegacyLogo.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import LegacyLogoModel from './LegacyLogoModel';

const LegacyLogo = () => {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[3, 2, 1]} 
          intensity={1.5} 
          color="#d4af37"
        />
        <Suspense fallback={
          <Html center>
            <div className="text-white bg-black/80 p-4 rounded-lg">
              Loading 3D Model...
            </div>
          </Html>
        }>
          <LegacyLogoModel />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default LegacyLogo;