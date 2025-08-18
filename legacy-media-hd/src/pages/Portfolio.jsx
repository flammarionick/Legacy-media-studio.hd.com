// src/pages/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 text-white bg-black min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
      <p>Explore our past projects: commercials, weddings, documentaries, music videos, and more.</p>
      {/* Add portfolio grid here later */}
    </motion.div>
  );
};

export default Portfolio;