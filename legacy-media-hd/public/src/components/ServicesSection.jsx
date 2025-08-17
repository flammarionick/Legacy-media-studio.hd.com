// src/components/ServicesSection.jsx
import React from 'react';


const ServicesSection = () => (
<section className="py-20 px-6 bg-black text-white">
<h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-gray-800 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Video Production</h3>
<p className="text-gray-300">Commercials, events, documentaries and more with cinematic quality.</p>
</div>
<div className="bg-gray-800 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Photography</h3>
<p className="text-gray-300">Weddings, fashion, and lifestyle shoots that inspire and connect.</p>
</div>
<div className="bg-gray-800 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">3D & Drone</h3>
<p className="text-gray-300">High-impact drone shots and 3D visuals that wow your audience.</p>
</div>
</div>
</section>
);


export default ServicesSection;