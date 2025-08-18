// src/components/PortfolioSection.jsx
import React from 'react';


const PortfolioSection = () => (
<section className="py-20 px-6 bg-gray-900 text-white">
<h2 className="text-4xl font-bold text-center mb-12">Featured Portfolio</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-gray-800 p-4 rounded-lg">Project A</div>
<div className="bg-gray-800 p-4 rounded-lg">Project B</div>
<div className="bg-gray-800 p-4 rounded-lg">Project C</div>
</div>
</section>
);


export default PortfolioSection;