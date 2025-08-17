import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4 text-sm mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">Legacy Media Studios</h2>
          <p>Capturing timeless moments with cinematic storytelling.</p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Contact</h3>
          <p>Email: hello@legacymediahd.com</p>
          <p>Phone: +250 xxx xxx xxx</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Legacy Media Studios. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;