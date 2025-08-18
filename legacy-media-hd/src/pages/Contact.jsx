// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactSection';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-container min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact <span className="text-legacy-gold">Us</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6">Let's Get in Touch</h2>
            <p className="mb-8">
              Have a project in mind? We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-legacy-gold mb-2">Email Address</h3>
                <p>hello@legacymediahd.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-legacy-gold mb-2">Phone</h3>
                <p>+250 788 123 456</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-legacy-gold mb-2">Location</h3>
                <p>Kigali, Rwanda</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;