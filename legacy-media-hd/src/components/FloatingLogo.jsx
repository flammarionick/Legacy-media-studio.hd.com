// src/components/FloatingLogo.jsx
import { useRef, useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function FloatingLogo() {
  const groupRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const { scene, error } = useGLTF('/models/legacy-logo.glb');

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const speed = isHovered ? 0.5 : 0.2;
      groupRef.current.rotation.y = clock.getElapsedTime() * speed;
    }
  });

  if (error) {
    console.error('Logo load error:', error);
    return (
      <Html center>
        <div className="text-xs text-red-500 bg-black p-1 rounded">
          Logo Error
        </div>
      </Html>
    );
  }

  if (!scene) {
    return (
      <Html center>
        <div className="text-xs text-white">Loading...</div>
      </Html>
    );
  }

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <primitive 
        object={scene}
        scale={[0.6, 0.6, 0.6]}
        position={[0, 0, 0]}
      />
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#d4af37"
      />
    </group>
  );
}

useGLTF.preload('/models/legacy-logo.glb');