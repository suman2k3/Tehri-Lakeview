import React from 'react';
import { Phone, MessageCircle, Calendar, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingCTA: React.FC = () => {
  return (
    <>
      {/* Mobile Floating Bar (sticky bottom bar) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-luxury-charcoal/95 backdrop-blur-md border-t border-luxury-gold/30 z-40 flex items-center justify-around py-3 px-2 shadow-2xl">
        <a
          href="tel:+917840050489"
          className="flex flex-col items-center text-[10px] uppercase font-semibold tracking-wider text-gray-300 active:text-luxury-gold transition-colors duration-200"
        >
          <Phone className="w-5 h-5 mb-1 text-luxury-gold" />
          Call Now
        </a>
        
        <a
          href="https://wa.me/917840050489"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-[10px] uppercase font-semibold tracking-wider text-gray-300 active:text-luxury-gold transition-colors duration-200"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-[#25D366]" />
          WhatsApp
        </a>

        <Link
          to="/contact"
          className="flex flex-col items-center text-[10px] uppercase font-semibold tracking-wider text-gray-300 active:text-luxury-gold transition-colors duration-200"
        >
          <Mail className="w-5 h-5 mb-1 text-luxury-gold" />
          Contact Us
        </Link>

        <a
          href="https://wa.me/917840050489"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 bg-luxury-gold text-luxury-charcoal text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </a>
      </div>

      {/* Desktop Floating Action Buttons (Sticky Side Panel) */}
      <div className="hidden md:flex flex-col fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-4">
        {/* Call CTA */}
        <div className="group relative flex items-center justify-end">
          <span className="opacity-0 group-hover:opacity-100 bg-luxury-charcoal text-luxury-gold border border-luxury-gold/25 text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded shadow-md mr-3 transition-opacity duration-300 pointer-events-none">
            Call Us
          </span>
          <a
            href="tel:+917840050489"
            className="bg-luxury-charcoal border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* WhatsApp CTA */}
        <div className="group relative flex items-center justify-end">
          <span className="opacity-0 group-hover:opacity-100 bg-luxury-charcoal text-[#25D366] border border-[#25D366]/25 text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded shadow-md mr-3 transition-opacity duration-300 pointer-events-none">
            WhatsApp
          </span>
          <a
            href="https://wa.me/917840050489"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-luxury-charcoal border border-[#25D366]/30 hover:border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Contact CTA */}
        <div className="group relative flex items-center justify-end">
          <span className="opacity-0 group-hover:opacity-100 bg-luxury-charcoal text-luxury-gold border border-luxury-gold/25 text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded shadow-md mr-3 transition-opacity duration-300 pointer-events-none">
            Write To Us
          </span>
          <Link
            to="/contact"
            className="bg-luxury-charcoal border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Contact Us"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        {/* Book Now Button */}
        <div className="group relative flex items-center justify-end">
          <span className="opacity-0 group-hover:opacity-100 bg-luxury-gold text-luxury-charcoal text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded shadow-md mr-3 transition-opacity duration-300 pointer-events-none">
            Instantly Secure Stay
          </span>
          <a
            href="https://wa.me/917840050489"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-luxury-gold text-luxury-charcoal p-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-115 flex items-center justify-center hover:bg-luxury-gold/90 border border-luxury-gold/50"
            aria-label="Book Now"
          >
            <Calendar className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};
