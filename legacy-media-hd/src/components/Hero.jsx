// src/components/Hero.jsx
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

// src/components/Hero.jsx
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LegacyLogoModel = lazy(() => import('./LegacyLogoModel'));

const Hero = () => {
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFallback(true);
    }, 5000); // Show fallback after 5 seconds if model doesn't load

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="absolute inset-0 z-0"
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#0A1A2F']} />
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#d4af37"
        />
        
        <Suspense fallback={
          <Html center>
            <div className="loading-indicator">
              Loading 3D assets...
            </div>
          </Html>
        }>
          {!fallback ? (
            <LegacyLogoModel />
          ) : (
            <Html center>
              <div className="fallback-content">
                <img 
                  src="/images/legacy-logo-fallback.png" 
                  alt="Legacy Media Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </Html>
          )}
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

    {/* Overlay Content */}
    <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4 bg-gradient-to-t from-black/70 to-transparent">
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
          className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90"
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
            className="btn btn-gold hover:scale-105 transition-transform"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="btn btn-outline hover:bg-legacy-gold/10 transition-colors"
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
      
      
 