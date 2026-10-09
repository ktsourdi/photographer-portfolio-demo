'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Calendar, Settings } from 'lucide-react';
import Image from 'next/image';
import { Photo, PhotoCategory } from '@/types';
import { samplePhotos } from '@/lib/data';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | 'ALL'>('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Only offer filters that have at least one photo, so no filter leads to an empty grid.
  const categories = [
    'ALL',
    ...Object.values(PhotoCategory).filter((category) =>
      samplePhotos.some((photo) => photo.category === category)
    ),
  ];

  const filteredPhotos = selectedCategory === 'ALL' 
    ? samplePhotos 
    : samplePhotos.filter(photo => photo.category === selectedCategory);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Cosmic</span> Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the wonders of the universe through carefully captured moments in time
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4">
            Demo content: sample photos from Unsplash. Capture details are illustrative.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category as PhotoCategory | 'ALL')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white'
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => openModal(photo)}
              >
                <div className="relative overflow-hidden rounded-lg glass-effect hover-glow">
                  <div className="aspect-w-16 aspect-h-12 relative h-64">
                    <Image
                      src={photo.imageUrl}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{photo.category}</p>
                    {photo.featured && (
                      <span className="inline-block px-2 py-1 bg-cosmic-purple rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full glass-effect rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  aria-label="Close photo details"
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-square">
                    <Image
                      src={selectedPhoto.imageUrl}
                      alt={selectedPhoto.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedPhoto.title}
                      </h3>
                      <p className="text-cosmic-purple font-medium">
                        {selectedPhoto.category}
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {selectedPhoto.description}
                    </p>

                    {(selectedPhoto.captureDate || selectedPhoto.camera || selectedPhoto.settings) && (
                    <div className="space-y-3 pt-4 border-t border-gray-700">
                      {selectedPhoto.captureDate && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={16} />
                          <span>Captured: {new Date(selectedPhoto.captureDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      
                      {selectedPhoto.camera && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Camera size={16} />
                          <span>{selectedPhoto.camera}</span>
                        </div>
                      )}

                      {selectedPhoto.settings && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Settings size={16} />
                          <span>
                            {selectedPhoto.settings.aperture} • {selectedPhoto.settings.shutterSpeed} • ISO {selectedPhoto.settings.iso}
                          </span>
                        </div>
                      )}
                    </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 