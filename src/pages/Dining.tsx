import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { images } from '../config/images';
import { GoldDivider } from './Home';

export const Dining: React.FC = () => {
  return (
    <div className="bg-luxury-cream overflow-hidden">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[45vh] flex items-start justify-center pt-8 md:pt-12 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(${images.food.diningBg})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-2 block">RESTAURANT</span>
          <h1 className="hero-heading !text-white">
            Dining Experience
          </h1>
        </div>
      </section>

      {/* 2. First Section: Lakeside Deck Dining Experience */}
      <section className="luxury-section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 body-text">
              <p>
At Tehri LakeView Sunrise Cottages, our restaurant offers a delightful culinary experience with a variety of Indian, Chinese, and local Uttarakhand dishes. Prepared using fresh ingredients and traditional recipes, every meal is crafted to satisfy your taste and complement your stay amidst the scenic beauty of Tehri Lake.              </p>
              <p>
Whether you're starting your day with a hearty breakfast, enjoying a family lunch, or ending the evening with a delicious dinner, our warm hospitality and inviting ambiance ensure a memorable dining experience for every guest. We take pride in serving food that brings comfort, flavor, and happiness to your table.              </p>
            </div>
          </motion.div>

          {/* Staggered overlapping images with background mandala */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center h-[350px] sm:h-[450px]"
          >
            {/* Background Faint Mandala */}
            <div className="absolute inset-0 opacity-[0.03] text-luxury-gold pointer-events-none z-0">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4" className="w-full h-full">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="30" strokeDasharray="1 1" />
                {[...Array(12)].map((_, i) => (
                  <line key={i} x1="50" y1="50" x2={50 + 45 * Math.cos((i * 30 * Math.PI) / 180)} y2={50 + 45 * Math.sin((i * 30 * Math.PI) / 180)} />
                ))}
              </svg>
            </div>

            {/* Left Image (lower) */}
            <div className="absolute left-4 bottom-4 w-[50%] z-10 shadow-xl border-4 border-white rounded overflow-hidden">
              <img
                src={images.food.diningBg}
                alt="Bistro Interior Seating"
                className="w-full h-48 sm:h-64 object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Right Image (higher) */}
            <div className="absolute right-4 top-4 w-[50%] z-20 shadow-xl border-4 border-white rounded overflow-hidden">
              <img
                src={images.food.buffet}
                alt="Buffet Counter Setup"
                className="w-full h-48 sm:h-64 object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Second Section: Taste Delicious Moments */}
      <section className="luxury-section-padding bg-white/40 border-t border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center justify-center">
            <span className="section-label mb-3 text-center">FRESH TASTE</span>
            <h2 className="section-heading sm:whitespace-nowrap text-center">
              Taste Delicious Moments At Tehri
            </h2>
            <GoldDivider />
          </div>

          {/* Horizontal Gallery Grid / Scrollable on mobile */}
          <div className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 md:gap-8 scrollbar-none max-w-5xl mx-auto">
            <div className="w-[85%] sm:w-[45%] md:w-auto flex-shrink-0 snap-start overflow-hidden rounded-lg shadow border border-luxury-gold/10">
              <img
                src={images.food.freshTaste1}
                alt="Indoor Dining Hall Layout"
                className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-auto flex-shrink-0 snap-start overflow-hidden rounded-lg shadow border border-luxury-gold/10">
              <img
                src={images.food.freshTaste2}
                alt="Outdoor Terrace Deck View"
                className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-auto flex-shrink-0 snap-start overflow-hidden rounded-lg shadow border border-luxury-gold/10">
              <img
                src={images.food.freshTaste3}
                alt="Windowed Dining Seating View"
                className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Third Section: Bhagirathi Bistro Feast */}
      <section className="luxury-section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-luxury-gold/15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Staggered overlapping images on the left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center h-[350px] sm:h-[450px] order-2 lg:order-1"
          >
            {/* Background Faint Mandala */}
            <div className="absolute inset-0 opacity-[0.03] text-luxury-gold pointer-events-none z-0">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4" className="w-full h-full">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="30" strokeDasharray="1 1" />
                {[...Array(12)].map((_, i) => (
                  <line key={i} x1="50" y1="50" x2={50 + 45 * Math.cos((i * 30 * Math.PI) / 180)} y2={50 + 45 * Math.sin((i * 30 * Math.PI) / 180)} />
                ))}
              </svg>
            </div>

            {/* Left Image (lower) */}
            <div className="absolute left-4 bottom-4 w-[50%] z-10 shadow-xl border-4 border-white rounded overflow-hidden">
              <img
                src={images.food.himalayanTaste1}
                alt="Beverage and coffee menu"
                className="w-full h-48 sm:h-64 object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Right Image (higher) */}
            <div className="absolute right-4 top-4 w-[50%] z-20 shadow-xl border-4 border-white rounded overflow-hidden">
              <img
                src={images.food.himalayanTaste2}
                alt="Traditional Himalayan Curry & Roti"
                className="w-full h-48 sm:h-64 object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Side: Narration & Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="section-heading mb-4">
              Taste the Flavors of the Himalayas
            </h2>
            <GoldDivider />
            <div className="space-y-6 body-text mt-8">
              <p>
Savor delicious meals while overlooking the breathtaking beauty of Tehri Lake. Freshly prepared with care, our menu brings together authentic Garhwali flavors and popular Indian favorites, creating a memorable dining experience for every guest.              </p>
              <p>
                Guests can enjoy a variety of freshly prepared dishes, perfect for family dinners, cozy couples, and special celebrations.
              </p>
            </div>

            {/* Bullet List Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="body-text !text-sm">Fresh seasonal preparations</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="body-text !text-sm">Popular family favorites</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="body-text !text-sm">North Indian Food</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="body-text !text-sm">Chinese Food</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8">
              <button 
                onClick={() => window.open(images.food.menuPdf, '_blank')}
                className="btn-typography bg-luxury-gold text-white px-8 py-3.5 rounded hover:bg-luxury-charcoal transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Explore Menu
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
