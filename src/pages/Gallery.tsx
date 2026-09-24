import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { images } from '../config/images';
import galleryHero from '../assets/images/gallery_hero.png';
import gallery8 from '../assets/images/gallery_8.png';
import gallery9 from '../assets/images/gallery_9.png';
import gallery10 from '../assets/images/gallery_10.png';
import gallery11 from '../assets/images/gallery_11.png';
import gallery12 from '../assets/images/gallery_12.png';

// Import newly requested video and image assets
import img1 from '../assets/videos/img1.jpeg';
import img2 from '../assets/videos/img2.jpeg';
import img3 from '../assets/videos/img3.jpeg';
import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';
import vid5 from '../assets/videos/vid5.mp4';

interface GalleryItem {
  src: string;
  category: string;
  caption: string;
  type?: 'image' | 'video';
}

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const managementPhotos: GalleryItem[] = [
    { src: gallery11, category: 'Management', caption: 'Panoramic Balcony Terrace Mountain View' },
    { src: gallery8, category: 'Management', caption: 'Resort Night Illumination & Solar Deck' },
    { src: images.rooms.deluxe, category: 'Management', caption: 'Lakeside Deluxe Bedroom' },
    { src: gallery9, category: 'Management', caption: 'Resort Main Entrance Gate & Sign' },
    { src: img1, category: 'Guest', caption: 'Morning Tea on the Terrace' },
    { src: gallery10, category: 'Management', caption: 'Luxury Cottage Room Smart TV Setup' },
    { src: gallery12, category: 'Management', caption: 'Resort Outdoor Dining & Buffet Setup' },
    { src: images.rooms.suite, category: 'Management', caption: 'Luxury Wooden Loft Bedroom' },
    { src: img2, category: 'Guest', caption: 'Cottages Hillside Walkway' },
    { src: images.food.menu1, category: 'Management', caption: 'Resort Signature Culinary Delights' },
    { src: img3, category: 'Guest', caption: 'Lake View from Cottage Window' },
    { src: images.rooms.premium, category: 'Management', caption: 'Premium Ridgeview Suite' }
  ];

  const guestPhotos: GalleryItem[] = [
    
  ];

  const videoReels: GalleryItem[] = [
    { src: vid1, category: 'Videos', caption: 'Lakeside Sunrise View', type: 'video' },
    { src: vid2, category: 'Videos', caption: 'Water Sports Adventure', type: 'video' },
    { src: vid3, category: 'Videos', caption: 'Speed Boating Experience', type: 'video' },
    { src: vid4, category: 'Videos', caption: 'Resort Bonfire Evening', type: 'video' },
    { src: vid5, category: 'Videos', caption: 'Cottages Ridge Walk', type: 'video' }
  ];

  const allPhotos = [...managementPhotos, ...guestPhotos, ...videoReels];

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
      <section className="relative h-[45vh] flex items-center justify-center text-center mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${galleryHero})`,
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
                loading="lazy"
                decoding="async"
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
                  loading="lazy"
                  decoding="async"
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

      {/* Video Reels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
        <h2 className="section-heading text-center mb-4">
          Resort Video Reels &amp; Experiences
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-16 h-[1px] bg-luxury-gold/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videoReels.map((item, index) => {
            const actualIndex = index + managementPhotos.length + guestPhotos.length;
            return (
              <motion.div
                key={`video-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="overflow-hidden rounded shadow-sm border border-luxury-gold/5 group cursor-pointer relative aspect-[4/3] bg-gray-100"
                onClick={() => openLightbox(actualIndex)}
              >
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-40 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 p-3 rounded-full text-luxury-charcoal shadow-lg hover:scale-110 transition-transform duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 pl-0.5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
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

            {/* Content display */}
            <div className="max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              {allPhotos[lightboxIndex].type === 'video' ? (
                <video
                  key={lightboxIndex}
                  src={allPhotos[lightboxIndex].src}
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="max-h-[70vh] max-w-full object-contain rounded border border-white/10 shadow-2xl"
                />
              ) : (
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={allPhotos[lightboxIndex].src}
                  alt={allPhotos[lightboxIndex].caption}
                  className="max-h-[70vh] max-w-full object-contain rounded border border-white/10 shadow-2xl"
                />
              )}
              {/* Caption Overlay */}
              <div className="text-center mt-6 text-white px-4">
                <p className="font-serif text-lg sm:text-xl font-light text-gray-200">
                  {allPhotos[lightboxIndex].caption}
                </p>
                <span className="font-sans text-xs text-luxury-gold uppercase tracking-widest block mt-2 font-medium">
                  Item {lightboxIndex + 1} of {allPhotos.length} • {allPhotos[lightboxIndex].category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
