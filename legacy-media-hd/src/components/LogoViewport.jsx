// src/components/LogoViewport.jsx
import { Canvas } from '@react-three/fiber';
import FloatingLogo from './FloatingLogo';

export default function LogoViewport() {
  return (
    <div className="fixed top-4 left-4 w-24 h-24 z-50 
                   bg-black/50 rounded-lg border border-legacy-gold/30
                   hover:border-legacy-gold/80 transition-all duration-300">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ alpha: true }}
      >
        <FloatingLogo />
      </Canvas>
    </div>
  );
}