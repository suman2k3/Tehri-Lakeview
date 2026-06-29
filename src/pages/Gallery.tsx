import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { images } from '../config/images';

interface GalleryItem {
  src: string;
  category: string;
  caption: string;
}

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const managementPhotos: GalleryItem[] = [
    { src: images.rooms.deluxe, category: 'Management', caption: 'Lakeside Deluxe Bedroom' },
    { src: images.rooms.premium, category: 'Management', caption: 'Premium Ridgeview Suite' },
    { src: images.rooms.suite, category: 'Management', caption: 'Luxury A-Frame Loft Bedroom' },
    { src: images.cottages.exterior, category: 'Management', caption: 'Alpine Chalet Exterior' },
    { src: images.food.diningBg, category: 'Management', caption: 'Bhagirathi Bistro Dining Deck' },
    { src: images.food.menu1, category: 'Management', caption: 'Resort Signature Culinary Delights' },
    { src: images.food.menu2, category: 'Management', caption: 'Traditional Garhwali Thali Feast' },
    { src: images.gallery[0].src, category: 'Management', caption: 'Cottages Sunrise Panorama' },
    { src: images.gallery[1].src, category: 'Management', caption: 'Splendid Twilight View of the Resort' }
  ];

  const guestPhotos: GalleryItem[] = [
    { src: images.lake.sunrise, category: 'Guest', caption: 'Tehri Lake Aqua Blue Water View' },
    { src: images.activities.boating, category: 'Guest', caption: 'Boating Excursion on the Lake' },
    { src: images.activities.adventure, category: 'Guest', caption: 'Thrill Seekers Speed Boating' },
    { src: images.family.group, category: 'Guest', caption: 'Lakeside Evening Bonfire & Camping' },
    { src: images.gallery[2].src, category: 'Guest', caption: 'Stunning Morning Sun rays at the Deck' },
    { src: images.gallery[3].src, category: 'Guest', caption: 'Himalayan Peaks from the Balcony' },
    { src: images.rooms.deluxe, category: 'Guest', caption: 'Cosy Warm Bedding and Interiors' },
    { src: images.rooms.suite, category: 'Guest', caption: 'Wooden Loft Lounge Area' },
    { src: images.food.diningBg, category: 'Guest', caption: 'Alfresco Dinner under the Stars' }
  ];

  const allPhotos = [...managementPhotos, ...guestPhotos];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allPhotos.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allPhotos.length) % allPhotos.length);
    }
  };

  return (
    <div className="bg-luxury-cream min-h-screen pb-24 overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[35vh] flex items-center justify-center text-center mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${images.hero.subpageBg})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3">VISUAL ELEGANCE</span>
          <h1 className="hero-heading !text-white">
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Management Photos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="section-heading text-luxury-gold !text-3xl font-light tracking-wide mb-3">
            Management Photos
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {managementPhotos.map((item, index) => (
            <motion.div
              key={`mgmt-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="overflow-hidden rounded shadow-sm border border-luxury-gold/5 group cursor-pointer relative aspect-[4/3] bg-gray-100"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full text-luxury-charcoal shadow-lg hover:scale-110 transition-transform duration-200">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guest Photos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading text-luxury-gold !text-3xl font-light tracking-wide mb-3">
            Guest Photos
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {guestPhotos.map((item, index) => {
            const actualIndex = index + managementPhotos.length;
            return (
              <motion.div
                key={`guest-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="overflow-hidden rounded shadow-sm border border-luxury-gold/5 group cursor-pointer relative aspect-[4/3] bg-gray-100"
                onClick={() => openLightbox(actualIndex)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-luxury-charcoal shadow-lg hover:scale-110 transition-transform duration-200">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={allPhotos[lightboxIndex].src}
                alt={allPhotos[lightboxIndex].caption}
                className="max-h-[70vh] max-w-full object-contain rounded border border-white/10 shadow-2xl"
              />
              {/* Caption Overlay */}
              <div className="text-center mt-6 text-white px-4">
                <p className="font-serif text-lg sm:text-xl font-light text-gray-200">
                  {allPhotos[lightboxIndex].caption}
                </p>
                <span className="font-sans text-xs text-luxury-gold uppercase tracking-widest block mt-2 font-medium">
                  Image {lightboxIndex + 1} of {allPhotos.length} • {allPhotos[lightboxIndex].category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
