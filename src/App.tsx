import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Rooms } from './pages/Rooms';
import { Dining } from './pages/Dining';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Cancellation } from './pages/Cancellation';
import { Privacy } from './pages/Privacy';

// ScrollToTop helper component to reset scroll position on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-luxury-cream">
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Social Media Buttons */}
        <div className="fixed right-4 bottom-8 z-50 flex flex-col space-y-3">
          <a
            href="https://www.facebook.com/profile.php?id=61589532052596"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-lg"
            aria-label="Visit Facebook Page"
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
              className="w-5 h-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/tehrilakeviewsunrisecottages/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full text-white bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-lg"
            aria-label="Visit Instagram Page"
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
              className="w-5 h-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
