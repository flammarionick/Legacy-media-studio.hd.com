// src/components/ProcessSection.jsx
import React from 'react';

const steps = [
  { number: '01', title: 'Consultation', description: 'We discuss your vision and requirements' },
  { number: '02', title: 'Planning', description: 'We create a detailed project plan' },
  { number: '03', title: 'Production', description: 'We capture your story with our expertise' },
  { number: '04', title: 'Delivery', description: 'We deliver final polished products' },
];

const ProcessSection = () => (
  <section className="py-20 bg-black">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
            <span className="text-purple-500 text-2xl font-bold block mb-2">{step.number}</span>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;