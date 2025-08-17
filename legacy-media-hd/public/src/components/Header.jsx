// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
<header className="w-full p-6 bg-black text-white flex justify-between items-center">
<h1 className="text-xl font-bold">Legacy Media Studios</h1>
<nav className="space-x-6">
<Link to="/" className="hover:text-purple-400">Home</Link>
<Link to="/about" className="hover:text-purple-400">About</Link>
<Link to="/services" className="hover:text-purple-400">Services</Link>
<Link to="/portfolio" className="hover:text-purple-400">Portfolio</Link>
<Link to="/contact" className="hover:text-purple-400">Contact</Link>
</nav>
</header>
);


export default Header;