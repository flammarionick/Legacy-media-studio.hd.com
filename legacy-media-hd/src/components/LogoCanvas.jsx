// src/components/LogoCanvas.jsx
import { Canvas } from '@react-three/fiber';
import FloatingLogo from './FloatingLogo';

export default function LogoCanvas() {
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      width: '120px',
      height: '120px',
      zIndex: 1000,
      cursor: 'pointer'
    }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingLogo />
      </Canvas>
    </div>
  );
}