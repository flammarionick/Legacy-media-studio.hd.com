// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.7 }}
      className="bg-black text-white fixed top-0 w-full shadow-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-white">
          Legacy Media Studios
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/services" className="hover:text-purple-400 transition">Services</Link>
          <Link to="/portfolio" className="hover:text-purple-400 transition">Portfolio</Link>
          <Link to="/about" className="hover:text-purple-400 transition">About</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;