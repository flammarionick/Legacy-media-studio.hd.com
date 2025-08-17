// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 text-white bg-gray-950 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p>Want to collaborate or have a project in mind? Reach out via email or fill our contact form.</p>
    </motion.div>
  );
};

export default Contact;