// src/components/LegacyLogoModel.jsx
import React, { useRef, useEffect } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = (props) => {
  // Using absolute path to public folder
  const { scene, error } = useGLTF('/models/legacy-logo.glb');
  const groupRef = useRef();

  // Debugging and error handling
  useEffect(() => {
    if (error) {
      console.error('Model load error:', error);
      // Additional debug - check if file exists
      fetch('/models/legacy-logo.glb')
        .then(res => console.log('File exists:', res.ok))
        .catch(e => console.error('File check failed:', e));
    }
    if (scene) {
      console.log('Model successfully loaded:', scene);
      scene.traverse(child => {
        if (child.isMesh) {
          console.log('Mesh found:', child.name);
          // Ensure materials are visible
          child.material.emissiveIntensity = 1;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene, error]);

  // Smooth rotation animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  // Error state
  if (error) {
    return (
      <Html center>
        <div style={{
          background: 'rgba(255,0,0,0.7)',
          padding: '1rem',
          borderRadius: '8px',
          color: 'white'
        }}>
          Model failed to load. Check console for details.
        </div>
      </Html>
    );
  }

  // Loading state
  if (!scene) {
    return (
      <Html center>
        <div style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '1rem',
          borderRadius: '8px',
          color: 'white'
        }}>
          Loading 3D model...
        </div>
      </Html>
    );
  }

  // Successful render
  return (
    <group ref={groupRef} {...props}>
      <primitive 
        object={scene}
        scale={[2, 2, 2]}
        position={[0, 0, 0]}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      />
      {/* Additional lighting for better visibility */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#d4af37"
        castShadow
      />
    </group>
  );
};

// Preload with error handling
console.log('Preloading 3D model...');
useGLTF.preload('/models/legacy-logo.glb')
  .then(() => console.log('Model preloaded successfully'))
  .catch(e => console.error('Preload error:', e));

export default Model;