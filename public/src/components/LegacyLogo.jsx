// src/components/LegacyLogo.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const LogoModel = () => {
  const gltf = useGLTF('/models/legacy-logo.glb'); // Adjust path if different
  return <primitive object={gltf.scene} scale={2} />;
};

const LegacyLogo = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} intensity={1.5} />
        <Suspense fallback={null}>
          <LogoModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default LegacyLogo;