// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-legacy-light/10 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-legacy-gold">LEGACY</span> MEDIA
            </h2>
            <p className="text-legacy-light/80">
              Capturing timeless moments with cinematic storytelling.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-legacy-light/80 hover:text-legacy-gold">Home</Link></li>
              <li><Link to="/about" className="text-legacy-light/80 hover:text-legacy-gold">About</Link></li>
              <li><Link to="/services" className="text-legacy-light/80 hover:text-legacy-gold">Services</Link></li>
              <li><Link to="/portfolio" className="text-legacy-light/80 hover:text-legacy-gold">Portfolio</Link></li>
              <li><Link to="/contact" className="text-legacy-light/80 hover:text-legacy-gold">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-legacy-light/80">Video Production</span></li>
              <li><span className="text-legacy-light/80">Photography</span></li>
              <li><span className="text-legacy-light/80">Drone & Aerial</span></li>
              <li><span className="text-legacy-light/80">3D Animation</span></li>
              <li><span className="text-legacy-light/80">Post-Production</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-legacy-light/80">hello@legacymediahd.com</li>
              <li className="text-legacy-light/80">+250 788 123 456</li>
              <li className="text-legacy-light/80">Kigali, Rwanda</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-legacy-light/10 text-center text-legacy-light/60 text-sm">
          <p>© {new Date().getFullYear()} Legacy Media Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;