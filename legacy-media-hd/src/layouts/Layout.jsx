// src/layouts/Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import LogoViewport from '../components/LogoViewport'; // Import the logo component

const Layout = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white scroll-smooth relative">
      {/* 3D Logo in top-left corner */}
      <LogoViewport />
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-grow pt-16" // Added padding-top to account for navbar
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Layout;