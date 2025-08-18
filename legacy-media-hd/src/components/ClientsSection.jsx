// src/components/ClientsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Client 1', logo: '/logos/client1.png' },
  { name: 'Client 2', logo: '/logos/client2.png' },
  { name: 'Client 3', logo: '/logos/client3.png' },
  { name: 'Client 4', logo: '/logos/client4.png' },
  { name: 'Client 5', logo: '/logos/client5.png' },
];

const ClientsSection = () => (
  <section className="py-20 bg-gradient-to-r from-purple-900/10 to-black">
    <div className="container mx-auto px-4">
      <motion.h2 
        className="text-center text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Trusted By Industry Leaders
      </motion.h2>
      
      <div className="flex flex-wrap justify-center gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 flex items-center justify-center bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-h-16 max-w-32 object-contain grayscale hover:grayscale-0 transition duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;