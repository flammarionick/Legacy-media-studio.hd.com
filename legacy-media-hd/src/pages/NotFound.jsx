// src/pages/NotFound.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 text-white bg-black h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-6 text-xl">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white">Go Home</Link>
    </motion.div>
  );
};

export default NotFound;