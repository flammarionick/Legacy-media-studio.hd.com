import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black text-white">
      <Navbar />
      <main className="snap-start">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;