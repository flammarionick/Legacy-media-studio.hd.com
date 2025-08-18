// src/components/LegacyLogoModel.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = (props) => {
  const { scene } = useGLTF('/models/legacy-logo.glb');
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

// Preload the model
useGLTF.preload('/models/legacy-logo.glb');

export default Model;