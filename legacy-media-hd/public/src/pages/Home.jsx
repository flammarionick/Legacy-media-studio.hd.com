// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black text-white">
        <Hero />

        <section className="relative -mt-[100vh] z-10 flex flex-col justify-center items-center text-center px-4 pt-48 md:pt-64 pb-32">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Capturing Stories with Vision</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-xl">
            Professional video production and photography services that bring your brand to life.
          </p>
          <div className="space-x-4">
            <Link to="/portfolio" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">See Our Work</Link>
            <Link to="/contact" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">Book a Project</Link>
          </div>
        </section>

        <section id="services" className="py-20 px-4 md:px-20 bg-gray-900">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our Creative Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Video Production</h3>
              <p className="text-gray-300">Commercials, documentaries, events – crafted with cinematic quality.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Photography</h3>
              <p className="text-gray-300">Weddings, corporate shoots, lifestyle & editorial visual storytelling.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Drone & 3D</h3>
              <p className="text-gray-300">Aerial drone work and 3D scenes to elevate your visual experience.</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;