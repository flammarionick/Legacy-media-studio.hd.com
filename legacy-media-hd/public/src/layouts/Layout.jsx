// src/layouts/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <Header />
      <main className="snap-start">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

<AnimatePresence mode="wait">
  <main className="snap-start">
    <Outlet />
  </main>
</AnimatePresence>

export default Layout;