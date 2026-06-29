import React from 'react';
import { motion } from 'framer-motion';
import { Users, Maximize2, Wifi, Car } from 'lucide-react';
import { images } from '../config/images';

export const Rooms: React.FC = () => {
  const roomsData = [
    {
      id: 1,
      title: 'Deluxe Room',
      description: 'Experience comfort in Deluxe Rooms with private balcony, lush garden views, air conditioning, smart TV, and premium bedding. Perfect for couples seeking a tranquil and luxury retreat.',
      image: images.rooms.deluxe,
      features: {
        guests: '2 Guests',
        size: '400 sq.ft.',
        wifi: 'Free Wifi',
        parking: 'Parking'
      }
    },
    {
      id: 2,
      title: 'Suite Room',
      description: 'Enjoy a spacious suite featuring elegant interiors, air conditioning, private mountain-view balcony, deep soaking tub, and custom local wooden detailing for ultimate Himalayan comfort.',
      image: images.cottages.interior,
      features: {
        guests: '2 Guests',
        size: '600 sq.ft.',
        wifi: 'Free Wifi',
        parking: 'Parking'
      }
    }
  ];

  return (
    <div className="bg-luxury-cream overflow-hidden min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[35vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${images.rooms.executive})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3">ROOMS</span>
          <h1 className="hero-heading !text-white">
            Book Your Luxury Stay With Us
          </h1>
        </div>
      </section>

      {/* 2. Room Cards Section */}
      <section className="luxury-section-padding max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {roomsData.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-luxury-gold/15 overflow-hidden flex flex-col md:flex-row items-stretch"
            >
              {/* Left Side: Room Image */}
              <div className="w-full md:w-[45%] relative min-h-[250px] md:min-h-auto">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* Right Side: Room Content */}
              <div className="w-full md:w-[55%] p-8 sm:p-10 flex flex-col justify-between text-left">
                <div>
                  <h2 className="sub-heading mb-4">
                    {room.title}
                  </h2>
                  <p className="body-text mb-8">
                    {room.description}
                  </p>

                  {/* Feature Icons Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-b border-gray-100 py-6 mb-8">
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
                <div>
                  <button 
                    onClick={() => window.open(`https://wa.me/919883113966?text=I%20want%20to%20book%20a%20${encodeURIComponent(room.title)}%20at%20Tehri%20Lakeview`, '_blank')}
                    className="btn-typography bg-luxury-gold hover:bg-luxury-charcoal text-white px-6 py-3 rounded transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    Show Details
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
