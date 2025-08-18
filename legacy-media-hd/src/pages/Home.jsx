// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ClientsSection from '../components/ClientsSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <ServicesSection />
      
      <ProcessSection />
      
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gold-underline">Capturing Stories</span> with Vision
            </h2>
            <p className="text-lg mb-6">
              Professional video production and photography services that bring your brand to life. 
              We create cinematic experiences that resonate with your audience.
            </p>
            <p>
              Our team of award-winning filmmakers and photographers are dedicated to elevating your vision through exceptional storytelling and technical expertise.
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-video bg-legacy-gold/10 border border-legacy-gold/20 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-800/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-legacy-gold flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-legacy-gold border-b-8 border-b-transparent"></div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 border border-legacy-gold/20 z-[-1] rounded-lg"></div>
          </motion.div>
        </div>
      </section>
      
      <PortfolioSection />
      
      <ClientsSection />
      
      <ContactSection />
    </div>
  );
};

export default Home;