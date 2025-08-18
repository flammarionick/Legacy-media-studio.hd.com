// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 text-white bg-gray-900 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">What We Offer</h1>
      <ul className="space-y-4">
        <li>🎥 Video Production</li>
        <li>📸 Photography</li>
        <li>🚁 Drone Footage</li>
        <li>💡 Storyboarding & Creative Direction</li>
        <li>🎨 Post-Production & Editing</li>
      </ul>
    </motion.div>
  );
};

export default Services;