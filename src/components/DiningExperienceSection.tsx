import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { images } from '../config/images';

const GoldDivider: React.FC = () => (
  <div className="flex items-center justify-center my-3.5 select-none w-full">
    <img 
      src={images.logo.divider} 
      alt="Luxury Gold Divider" 
      className="h-3 md:h-4 w-auto max-w-[90%] object-contain"
      loading="lazy"
    />
  </div>
);

export const DiningExperienceSection: React.FC = () => {
  return (
    <section className="luxury-section-padding bg-[#EAF6FF] border-t border-[#C49A5A]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Collage (Order 2 on Mobile, Order 1 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-2 lg:order-1 w-full"
          >
            {/* Desktop & Tablet Asymmetrical Overlapping Collage */}
            <div className="hidden md:block relative w-full max-w-[540px] lg:max-w-[580px] h-[480px] sm:h-[520px] lg:h-[550px] mx-auto">
              
              {/* Background Decorative Gold Circle & Mandala Ring */}
              <div className="absolute w-72 h-72 lg:w-84 lg:h-84 rounded-full border-2 border-dashed border-[#C49A5A]/30 bg-[#C49A5A]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 pointer-events-none" />
              
              <div className="absolute inset-0 opacity-[0.05] text-[#C49A5A] pointer-events-none -z-0">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" />
                  <circle cx="50" cy="50" r="32" strokeDasharray="1 1" />
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + 45 * Math.cos((i * 30 * Math.PI) / 180)}
                      y2={50 + 45 * Math.sin((i * 30 * Math.PI) / 180)}
                    />
                  ))}
                </svg>
              </div>

              {/* 1. Food/Dish Image (Large Upper-Left) */}
              <div className="absolute top-0 left-0 w-[56%] h-[54%] z-20 rounded-xl border-[6px] border-white shadow-xl overflow-hidden group">
                <img
                  src={images.food.himalayanTaste2}
                  alt="Authentic Garhwali & Himalayan Cuisine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 2. Kitchen/Buffet Image (Medium Upper-Right) */}
              <div className="absolute top-4 right-0 w-[42%] h-[42%] z-10 rounded-xl border-[5px] border-white shadow-lg overflow-hidden group">
                <img
                  src={images.food.specialDish}
                  alt="Fresh Himalayan Special Dish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 3. Tea/Beverage Image (Smaller Lower-Left) */}
              <div className="absolute bottom-6 left-4 w-[40%] h-[38%] z-30 rounded-xl border-[5px] border-white shadow-2xl overflow-hidden group">
                <img
                  src={images.food.himalayanTaste1}
                  alt="Himalayan Mountain Tea & Refreshments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 4. Special Roti & Chutney Dish Image (Medium-Large Lower-Right) */}
              <div className="absolute bottom-0 right-2 w-[52%] h-[48%] z-20 rounded-xl border-[6px] border-white shadow-xl overflow-hidden group">
                <img
                  src={images.food.specialRoti}
                  alt="Fresh Himalayan Roti & Green Chutney"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>

            {/* Mobile Compact 2x2 Grid (320px - 480px / < md) */}
            <div className="grid md:hidden grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto pt-2">
              <div className="h-36 sm:h-44 rounded-lg border-4 border-white shadow-md overflow-hidden">
                <img
                  src={images.food.himalayanTaste2}
                  alt="Himalayan Food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-36 sm:h-44 rounded-lg border-4 border-white shadow-md overflow-hidden">
                <img
                  src={images.food.specialDish}
                  alt="Special Dish"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-36 sm:h-44 rounded-lg border-4 border-white shadow-md overflow-hidden">
                <img
                  src={images.food.himalayanTaste1}
                  alt="Mountain Tea"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-36 sm:h-44 rounded-lg border-4 border-white shadow-md overflow-hidden">
                <img
                  src={images.food.specialRoti}
                  alt="Himalayan Roti & Chutney"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content (Order 1 on Mobile, Order 2 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2 text-left"
          >
            <h2 className="section-heading text-center sm:whitespace-nowrap mb-2 !text-[clamp(1.5rem,2.8vw+0.5rem,48px)]">
              Taste the Flavors of the Himalayas
            </h2>
            <div className="flex justify-center mb-6">
              <GoldDivider />
            </div>

            <div className="space-y-4 body-text text-gray-700 leading-relaxed text-sm sm:text-base mb-8 text-left">
              <p>
                Savor delicious meals while overlooking the breathtaking beauty of Tehri Lake. Freshly prepared with care, our menu brings together authentic Garhwali flavors and popular Indian favorites, creating a memorable dining experience for every guest.
              </p>
              <p>
                Guests can enjoy a variety of freshly prepared dishes, perfect for family dinners, cozy couples, and special celebrations.
              </p>
            </div>

            {/* Feature Points in 2-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-8 text-left">
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#C49A5A]/15 flex items-center justify-center text-[#C49A5A] flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="body-text !text-xs sm:!text-sm font-medium text-[#243746]">
                  Fresh seasonal preparations
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#C49A5A]/15 flex items-center justify-center text-[#C49A5A] flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="body-text !text-xs sm:!text-sm font-medium text-[#243746]">
                  Popular family favorites
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#C49A5A]/15 flex items-center justify-center text-[#C49A5A] flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="body-text !text-xs sm:!text-sm font-medium text-[#243746]">
                  North Indian Food
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#C49A5A]/15 flex items-center justify-center text-[#C49A5A] flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="body-text !text-xs sm:!text-sm font-medium text-[#243746]">
                  Chinese Food
                </span>
              </div>
            </div>

            {/* Explore Menu Button */}
            <div className="flex justify-start">
              <button
                onClick={() => window.open(images.food.menuPdf, '_blank')}
                className="btn-typography bg-[#C49A5A] hover:bg-[#A9772B] text-white px-8 py-3.5 rounded shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto cursor-pointer"
              >
                <span>EXPLORE MENU</span>
                <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
