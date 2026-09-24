import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { images } from '../config/images';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Dining', path: '/dining' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2 border-b border-luxury-gold/20 text-luxury-charcoal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center group py-1">
            <img
              src={images.logo.main}
              alt="Tehri Lakeview Sunrise Cottages Logo"
              className="h-16 sm:h-18 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
 
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar-typography uppercase transition-all duration-300 relative py-2 ${
                  isActive(link.path)
                    ? 'text-luxury-gold'
                    : 'text-gray-600 hover:text-luxury-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
 
          {/* Phone and Book Now Button */}
          <div className="hidden lg:flex items-center space-x-3 lg:space-x-4">
            <a
              href="tel:+917840050489"
              className="flex items-center navbar-typography text-gray-700 hover:text-luxury-gold transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-luxury-gold" />
              +91 78400 50489
            </a>
            <span className="text-luxury-gold/40 font-light">|</span>
            <a
              href="tel:+919899950373"
              className="flex items-center navbar-typography text-gray-700 hover:text-luxury-gold transition-colors duration-300"
            >
              +91 98999 50373
            </a>
            <a
              href="https://wa.me/917840050489"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-typography bg-luxury-bronze hover:bg-luxury-bronze-dark text-white px-5 py-3 rounded transition-colors duration-300 shadow-md"
            >
              Book Now
            </a>
          </div>
 
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none text-luxury-charcoal"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[75px] md:top-[83px] left-0 w-full max-h-[calc(100vh-75px)] overflow-y-auto bg-white border-t border-luxury-gold/15 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-4 pt-8 pb-12 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`navbar-typography uppercase py-2 block border-b border-transparent ${
                isActive(link.path)
                  ? 'text-luxury-gold border-luxury-gold'
                  : 'text-gray-600 hover:text-luxury-charcoal'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full pt-8 flex flex-col space-y-3 items-center">
            <a
              href="tel:+917840050489"
              className="w-2/3 flex items-center justify-center navbar-typography uppercase text-gray-700 border border-luxury-gold/40 rounded py-3 hover:bg-luxury-gold/5 transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2 text-luxury-gold" />
              +91 78400 50489
            </a>
            <a
              href="tel:+919899950373"
              className="w-2/3 flex items-center justify-center navbar-typography uppercase text-gray-700 border border-luxury-gold/40 rounded py-3 hover:bg-luxury-gold/5 transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2 text-luxury-gold" />
              +91 98999 50373
            </a>
            <a
              href="https://wa.me/917840050489"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 flex items-center justify-center btn-typography bg-luxury-bronze text-white rounded py-3 shadow-md hover:bg-luxury-bronze-dark transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
