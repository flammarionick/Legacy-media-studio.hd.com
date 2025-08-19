import React from 'react';
import { motion } from 'framer-motion';

const Production = () => {
  const productionCategories = [
    {
      id: 'weddings',
      title: 'WEDDINGS',
      description: 'Trust Legacy Media Studios with your cherished moments...',
      cta: 'View Packages',
      videoUrl: '/videos/weddings.mp4'
    },
    {
      id: 'music-videos',
      title: 'MUSIC VIDEOS',
      description: 'Unlock your music’s potential with Legacy Media Studios...',
      cta: 'View Packages',
      videoUrl: '/videos/music-videos.mp4'
    },
    {
      id: 'commercials',
      title: 'COMMERCIALS',
      description: 'Legacy Media Studios specializes in creating captivating commercials...',
      cta: 'Receive a Quote',
      videoUrl: '/videos/commercials.mp4'
    },
    {
      id: 'movies',
      title: 'MOVIES / SHORT FILMS',
      description: 'Elevate your film with Legacy Media Studios...',
      cta: 'View Portfolio',
      externalLink: 'https://legacymediahd.com/our-portfolio/'
    }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PREMIUM PRODUCTION</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expertly Crafting Exquisite Cinematic Works for Discerning Clients
          </p>
        </motion.div>

        {productionCategories.map((category, index) => (
          <motion.section 
            key={category.id}
            id={category.id}
            className="py-16 border-b border-gray-800 last:border-b-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                {category.videoUrl ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src={category.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Preview Image</span>
                  </div>
                )}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-black/50 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-legacy-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">{category.title}</h2>
                <p className="text-gray-300 mb-8">{category.description}</p>
                
                {category.externalLink ? (
                  <a 
                    href={category.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    {category.cta}
                  </a>
                ) : (
                  <button className="btn btn-gold">{category.cta}</button>
                )}
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Production;