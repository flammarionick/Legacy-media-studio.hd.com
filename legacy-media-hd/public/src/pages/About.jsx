// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 text-white bg-black min-h-screen"
    >
      <h1 className="text-5xl font-bold mb-4">About Us</h1>
      <p className="text-lg max-w-2xl">
        Legacy Media Studios is dedicated to capturing stories that matter. With a passion for storytelling and cutting-edge technology, our team delivers creative video and photo solutions for modern brands and individuals.
      </p>
    </motion.div>
  );
};

export default About;