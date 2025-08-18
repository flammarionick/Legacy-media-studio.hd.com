// src/components/Hero.jsx
import React, { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

const LegacyLogoModel = lazy(() => import('./LegacyLogoModel'));

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Canvas with large 3D logo */}
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }} className="absolute inset-0 z-0">
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#d4af37" />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
        
        <Suspense fallback={
          <Html center>
            <div className="bg-black/80 p-4 rounded-lg">
              <div className="w-8 h-8 border-t-2 border-legacy-gold border-solid rounded-full animate-spin mx-auto"></div>
            </div>
          </Html>
        }>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <LegacyLogoModel scale={2.5} />
          </Float>
        </Suspense>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-legacy-gold">LEGACY</span> MEDIA STUDIOS
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Expertly crafting exquisite cinematic works for discerning clients
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              to="/portfolio"
              className="btn btn-gold"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="animate-bounce w-6 h-10 border-2 border-legacy-gold rounded-full flex justify-center">
          <div className="w-1 h-2 bg-legacy-gold rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;