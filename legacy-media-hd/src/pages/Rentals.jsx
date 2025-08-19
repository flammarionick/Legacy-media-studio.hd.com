import React from 'react';
import { motion } from 'framer-motion';

const Rentals = () => {
  const equipmentList = [
    {
      id: 'red-raptor',
      name: 'RED V-RAPTOR FULL FRAME 8K DIGITAL CINEMA CAMERA',
      description: 'The RED V-RAPTOR Full Frame is a high-performance digital cinema camera that delivers stunning 8K resolution footage with exceptional image quality and versatility.',
      image: '/images/red-camera.jpg'
    },
    {
      id: 'sony-fx6',
      name: 'SONY FX6 CINEMA CAMERA',
      description: 'The SONY FX6 is a compact and versatile cinema camera with exceptional low-light performance and customizable shooting modes. Perfect for professionals in need of professional-grade video capabilities in a portable package.',
      image: '/images/sony-camera.jpg'
    },
    // Add more equipment items here
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">PROFESSIONAL LEVEL D.I.Y</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-legacy-gold">EQUIPMENT RENTAL</h2>
          <p className="text-xl mt-8 max-w-3xl mx-auto">
            Legacy Media Rentals proudly offers an extensive range of high-quality video production equipment for professional filmmakers and enthusiastic hobbyists.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">CINEMA CAMERAS AND ACCESSORIES</h3>
          
          <div className="space-y-20">
            {equipmentList.map((item, index) => (
              <motion.div 
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-gray-800 rounded-xl aspect-[4/3] flex items-center justify-center">
                    <span className="text-gray-500">Equipment Image</span>
                  </div>
                </div>
                
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h4 className="text-2xl font-bold mb-4">{item.name}</h4>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <div className="flex gap-4">
                    <button className="btn btn-gold">Get Quote</button>
                    <button className="btn btn-outline">View Category</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;