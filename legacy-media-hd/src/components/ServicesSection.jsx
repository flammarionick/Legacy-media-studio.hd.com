// src/components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const ServicesSection = () => (
  <section id="services" className="section-container">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our <span className="text-gradient">Creative Services</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Professional media production services tailored to your unique vision
      </motion.p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="glass-effect p-8 rounded-xl hover:border-legacy-gold/30 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
          <p className="text-legacy-light/80">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;