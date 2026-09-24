import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Maximize2, Wifi, Car, ChevronLeft, ChevronRight } from 'lucide-react';
import roomsHero from '../assets/images/rooms_hero.png';

// Import Deluxe Room Gallery Images

import deluxe2 from '../assets/images/rooms/deluxe_gallery/deluxe_2.jpg';
import deluxe3 from '../assets/images/rooms/deluxe_gallery/deluxe_3.jpg';
import deluxe4 from '../assets/images/rooms/deluxe_gallery/deluxe_4.jpg';
import deluxe5 from '../assets/images/rooms/deluxe_gallery/deluxe_5.jpg';
import deluxe6 from '../assets/images/rooms/deluxe_gallery/deluxe_6.jpg';

const premiumImages = [deluxe2, deluxe4, deluxe6, deluxe3, deluxe5];
const familyImages = [deluxe3, deluxe5, deluxe2, deluxe6, deluxe4];

const RoomImageSlider: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-full relative group min-h-[300px] md:min-h-auto overflow-hidden">
      {/* Slide Transition Wrapper */}
      <div className="w-full h-full absolute inset-0 select-none">
        <img
          src={images[currentIndex]}
          alt={`${alt} view ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Navigation Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-md"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Navigation Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-md"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-luxury-gold w-4' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Rooms: React.FC = () => {
  const roomsData = [
    {
      id: 1,
      title: 'Premium Room',
      description: 'Experience comfort in Premium Rooms with private balcony, lush mountain views, free wifi, air conditioning, smart TV, and premium bedding. Perfect for couples seeking a tranquil and luxury retreat.',
      image: deluxe2,
      images: premiumImages,
      features: {
        guests: '2 Guests',
        size: '400 sq.ft.',
        wifi: 'Free Wifi',
        parking: 'Parking'
      }
    },
    {
      id: 2,
      title: 'Family Room',
      description: 'Spacious Family Rooms thoughtfully designed for families and groups. Features private balcony with panoramic mountain views, multiple bedding arrangements, free wifi, air conditioning, smart TV, and modern luxury amenities.',
      image: deluxe3,
      images: familyImages,
      features: {
        guests: '4 Guests',
        size: '550 sq.ft.',
        wifi: 'Free Wifi',
        parking: 'Parking'
      }
    }
  ];

  return (
    <div className="bg-luxury-cream overflow-hidden min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${roomsHero})`,
          }}
        />
        <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3 block">ROOMS</span>
          <h1 className="hero-heading !text-white sm:whitespace-nowrap !text-[6.5vw] sm:!text-[30px] md:!text-[42px] lg:!text-[52px] xl:!text-[60px]">
            Book Your Luxury Stay With Us
          </h1>
        </div>
      </section>

      {/* 2. Room Cards Section */}
      <section className="luxury-section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {roomsData.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white rounded-lg shadow-sm border border-luxury-gold/15 overflow-hidden flex flex-col justify-between group"
            >
              {/* Room Image Slider Header */}
              <div className="w-full h-64 sm:h-72 lg:h-80 relative overflow-hidden">
                {room.images && room.images.length > 0 ? (
                  <RoomImageSlider images={room.images} alt={room.title} />
                ) : (
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Room Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h2 className="sub-heading mb-3">
                    {room.title}
                  </h2>
                  <p className="body-text mb-6">
                    {room.description}
                  </p>

                  {/* Feature Icons Grid */}
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-b border-gray-100 py-4 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Users className="w-4 h-4 text-luxury-gold stroke-[1.5]" />
                      <span className="body-text !text-sm">{room.features.guests}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Maximize2 className="w-4 h-4 text-luxury-gold stroke-[1.5]" />
                      <span className="body-text !text-sm">{room.features.size}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Wifi className="w-4 h-4 text-luxury-gold stroke-[1.5]" />
                      <span className="body-text !text-sm">{room.features.wifi}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Car className="w-4 h-4 text-luxury-gold stroke-[1.5]" />
                      <span className="body-text !text-sm">{room.features.parking}</span>
                    </div>
                  </div>
                </div>

                {/* Show Details CTA */}
                <div className="pt-2">
                  <button 
                    onClick={() => window.open(`https://wa.me/917840050489?text=I%20want%20to%20book%20a%20${encodeURIComponent(room.title)}%20at%20Tehri%20Lakeview`, '_blank')}
                    className="btn-typography bg-luxury-gold hover:bg-luxury-charcoal text-white px-6 py-3 rounded transition-all duration-300 shadow-sm cursor-pointer w-full sm:w-auto"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
