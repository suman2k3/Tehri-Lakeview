import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F3443] text-gray-300 font-sans border-t border-luxury-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="flex flex-col space-y-4">
            <h3 className="sub-heading !text-white">
              About Us
            </h3>
            <p className="footer-typography leading-relaxed font-light !text-gray-400">
              Tehri Lakeview Sunrise Cottages is a private boutique retreat along the Bhagirathi Zakhli Road in New Tehri. We pair luxury wooden cottages with warm hospitality, lakeside views, and unique water adventures to provide our guests a quiet, unforgettable escape.
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
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2.5 text-luxury-gold flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+917840050489" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                    +91 78400 50489
                  </a>
                  <a href="tel:+919899950373" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                    +91 98999 50373
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2.5 text-luxury-gold flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@tehrilakeview.com" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                    info@tehrilakeview.com
                  </a>
                  <a href="mailto:rnrinternational89@gmail.com" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                    rnrinternational89@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center pt-2">
                <div className="flex items-center space-x-4 pl-[26px]">
                  <a
                    href="https://www.facebook.com/profile.php?id=61589532052596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-luxury-gold transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/tehrilakeviewsunrisecottages/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-luxury-gold transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center footer-typography !text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Tehri Lakeview Sunrise Cottages. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
