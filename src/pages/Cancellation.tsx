import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { images } from '../config/images';

export const Cancellation: React.FC = () => {
  const items = [
    {
      heading: 'Standard Cancellation Timeline',
      content: 'Cancellations made 15 days or more before the scheduled arrival date will receive a 90% refund (10% standard processing and handling fee). Cancellations made between 7 to 15 days prior to arrival are eligible for a 50% refund. Cancellations made less than 7 days prior to check-in are strictly non-refundable.'
    },
    {
      heading: 'Early Departure & No-Shows',
      content: 'No refunds or partial credits will be issued for guests checking out early, arriving late, or failing to check in (no-show). The full booking duration charges will be retained.'
    },
    {
      heading: 'Weather & Natural Circumstances',
      content: 'Since our boutique cottages are located in the scenic Himalayan foothills of Tehri Garhwal, bookings affected by natural disasters, landslides, road closures, or extreme weather conditions may be rescheduled to future dates at the discretion of resort management, subject to availability. No cash refunds are provided for weather-induced disruptions.'
    }
  ];

  return (
    <div className="bg-luxury-cream overflow-hidden">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${images.hero.legal})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3">TEHRI LAKEVIEW SUNRISE COTTAGES</span>
          <h1 className="hero-heading !text-white">
            Cancellation Policy
          </h1>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="luxury-section-padding px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Cancellation &amp; Refund Policy</h2>
          <p className="sub-heading !text-gray-500 max-w-2xl mx-auto">
            Please review our cancellation schedule and booking policies carefully.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-sm shadow-sm border border-luxury-gold/10"
        >
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
            <XCircle className="w-5 h-5 text-luxury-gold" />
            <h3 className="sub-heading !text-luxury-charcoal">
              Booking Cancellations &amp; Refunds
            </h3>
          </div>

          <div className="space-y-6">
            {items.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-serif text-lg text-luxury-charcoal tracking-wide">
                  {item.heading}
                </h4>
                <p className="body-text">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Note */}
        <div className="mt-16 text-center bg-white p-8 border border-luxury-gold/15 rounded-sm">
          <h4 className="sub-heading !text-luxury-charcoal mb-2">Need to Modify or Cancel Your Stay?</h4>
          <p className="body-text mb-4">
            If you need to change your reservation or inquire about refunds, please contact our support desk directly.
          </p>
          <a
            href="tel:+917840050489"
            className="inline-block btn-typography bg-luxury-bronze hover:bg-luxury-bronze-dark text-white px-6 py-3 rounded transition-colors duration-300 shadow-md"
          >
            Contact Desk: +91 78400 50489
          </a>
        </div>
      </section>
    </div>
  );
};
