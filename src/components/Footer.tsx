import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1D21] text-gray-300 font-sans border-t border-luxury-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="flex flex-col space-y-4">
            <h3 className="sub-heading !text-white">
              About Us
            </h3>
            <p className="footer-typography leading-relaxed font-light !text-gray-400">
              Tehri Lakeview Sunrise Cottages is a private boutique retreat along the Bhagirathi Zakhli Road in New Tehri. We pair luxury A-frame wooden cottages with warm hospitality, lakeside views, and unique water adventures to provide our guests a quiet, unforgettable escape.
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col space-y-4">
            <h3 className="sub-heading !text-white">
              Menu
            </h3>
            <ul className="space-y-2 footer-typography">
              <li>
                <Link to="/" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="flex flex-col space-y-4">
            <h3 className="sub-heading !text-white">
              Policies
            </h3>
            <ul className="space-y-2 footer-typography">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/cancellation" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with us */}
          <div className="flex flex-col space-y-4">
            <h3 className="sub-heading !text-white">
              Connect with us
            </h3>
            <ul className="space-y-3 footer-typography">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 font-light leading-relaxed">
                  Kutta Zakh Road, Tehri, Uttarakhand 249001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2.5 text-luxury-gold flex-shrink-0" />
                <a href="tel:+919883113966" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  +919883113966
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-luxury-gold flex-shrink-0" />
                <a href="mailto:info@tehrilakeview.com" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                  info@tehrilakeview.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center footer-typography !text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Tehri Lakeview Sunrise Cottages. All Rights Reserved. Powered by Himalayan Hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
};
