import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../config/images';
import homeVideo from '../assets/videos/home video.mp4';
import { DiningExperienceSection } from '../components/DiningExperienceSection';

// Custom Gold Loop Divider component to match the screenshot decoration
// Custom Gold Loop Divider component to match the screenshot decoration
export const GoldDivider: React.FC = () => (
  <div className="flex items-center justify-center my-6 select-none w-full">
    <img 
      src={images.logo.divider} 
      alt="Luxury Gold Divider" 
      className="h-3 md:h-4 w-auto max-w-[90%] object-contain"
      loading="lazy"
    />
  </div>
);

// Faint mandala vector overlays for the margins
const MandalaOrnaments: React.FC = () => (
  <>
    <div className="absolute left-0 top-[15%] w-80 h-80 opacity-[0.04] text-luxury-gold pointer-events-none transform -translate-x-1/2 select-none z-0 hidden lg:block">
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="41" strokeDasharray="1 1" />
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="15" />
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 50 + 15 * Math.cos(angle);
          const y1 = 50 + 15 * Math.sin(angle);
          const x2 = 50 + 45 * Math.cos(angle);
          const y2 = 50 + 45 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {[...Array(48)].map((_, i) => {
          const angle = (i * 7.5 * Math.PI) / 180;
          const cx = 50 + 38 * Math.cos(angle);
          const cy = 50 + 38 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r="1.2" fill="currentColor" stroke="none" />;
        })}
      </svg>
    </div>
    <div className="absolute right-0 top-[35%] w-80 h-80 opacity-[0.04] text-luxury-gold pointer-events-none transform translate-x-1/2 select-none z-0 hidden lg:block">
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="41" strokeDasharray="1 1" />
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="15" />
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 50 + 15 * Math.cos(angle);
          const y1 = 50 + 15 * Math.sin(angle);
          const x2 = 50 + 45 * Math.cos(angle);
          const y2 = 50 + 45 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {[...Array(48)].map((_, i) => {
          const angle = (i * 7.5 * Math.PI) / 180;
          const cx = 50 + 38 * Math.cos(angle);
          const cy = 50 + 38 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r="1.2" fill="currentColor" stroke="none" />;
        })}
      </svg>
    </div>
  </>
);

export const Home: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeLocaleIndex, setActiveLocaleIndex] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const toggleReadMore = (id: number) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const roomsContainerRef = useRef<HTMLDivElement>(null);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);

  const reviewsData = [
    {
      id: 1,
      name: 'Suman kumar',
      avatarLetter: 'S',
      avatarBg: 'bg-indigo-700',
      
      rating: 5,
      comment: 'I had an amazing stay at Tehri Lakeview Sunrise Cottage. The rooms were clean, comfortable, and well-maintained. The biggest highlight was the breathtaking view of Tehri Lake, especially during sunrise—it was absolutely stunning. The peaceful atmosphere made the stay even more relaxing. The staff were friendly and welcoming, making sure everything was comfortable. I truly enjoyed my time here and would highly recommend this place to anyone looking for a scenic and peaceful getaway. Looking forward to visiting again!',
      readMore: true
    },
    {
      id: 2,
      name: 'Kashish Sachin',
      avatarLetter: 'K',
      avatarBg: 'bg-green-600',
      rating: 5,
      comment: 'Excellent stay at Tehri Lake View Sunrise Cottages! The rooms were clean, spacious, and comfortable with a stunning Tehri Lake view. Peaceful location, friendly staff, and beautiful sunrise. One of the best cottages in Tehri for a relaxing getaway. Highly recommended!',
      readMore: true
    },
    {
      id: 3,
      name: 'Richa Gupta Todi',
      avatarLetter: 'R',
      avatarBg: 'bg-orange-600',
      
      rating: 5,
      comment: 'Best place to stay for perfect morning sunrise along with lakeview in the lap of nature.Its brand new along with wifi and even food is tasty.You will enjoy your stay here.',
      readMore: true
    },
    {
      id: 4,
      name: 'aadi works',
      avatarLetter: 'a',
      avatarBg: 'bg-teal-600',
      rating: 5,
      comment: 'Amazing sunrise view from the cottage. Perfect place to relax with family. Highly recommended.',
      readMore: false
    }
  ];

  const handleRoomsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < 3 && newIndex !== activeRoomIndex) {
      setActiveRoomIndex(newIndex);
    }
  };

  const handleReviewsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < reviewsData.length && newIndex !== activeReviewIndex) {
      setActiveReviewIndex(newIndex);
    }
  };

  const scrollToRoom = (index: number) => {
    if (roomsContainerRef.current) {
      const container = roomsContainerRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - container.offsetLeft - 16,
          behavior: 'smooth',
        });
        setActiveRoomIndex(index);
      }
    }
  };

  const scrollToReview = (index: number) => {
    if (index >= 0 && index < reviewsData.length) {
      if (reviewsContainerRef.current) {
        const container = reviewsContainerRef.current;
        const child = container.children[index] as HTMLElement;
        if (child) {
          container.scrollTo({
            left: child.offsetLeft - container.offsetLeft - 16,
            behavior: 'smooth',
          });
          setActiveReviewIndex(index);
        }
      }
    }
  };

  const attractions = [
    {
      title: 'Tehri Lake',
      description: "Tehri Lake is a vast, emerald-blue artificial reservoir located in the Tehri Garhwal district of Uttarakhand.",
      distance: '0 km (Overlooking)',
      image: images.lake.tehriLake
    },
    {
      title: 'Thrilling Water Sports at Tehri Lake',
      description: "Experience the thrill of water sports at Tehri Lake, where adventure meets the breathtaking beauty of Uttarakhand's mountains and crystal-clear waters.",
      distance: '0 km (Tehri Lake)',
      image: images.lake.waterSports
    },
    {
      title: 'Paragliding Adventures at Tehri Lake',
      description: 'Experience the thrill of paragliding over Tehri Lake with breathtaking aerial views of the turquoise waters and majestic mountains. Soar through the skies and create unforgettable adventure memories in Uttarakhand.',
      distance: '0 km (Tehri Lake)',
      image: images.lake.paragliding
    },
    {
      title: 'Dobra Chanti Bridge',
      description: "A modern engineering marvel that showcases the grandeur and beauty of Uttarakhand's suspension link.",
      distance: '12 km',
      image: images.lake.sunrise
    },
    {
      title: 'Tehri Dam Viewpoint',
      description: 'A massive reservoir viewpoint offering breathtaking panoramic views of the entire aqua lake and surrounding green peaks.',
      distance: '6 km',
      image: images.lake.viewpoint
    },
    {
      title: 'Kodia Jungle',
      description: 'A lush pine forest reserve boasting winding nature trails, wildlife sightings, and tranquil sunrise photography spots.',
      distance: '18 km',
      image: images.lake.jungle
    },
    {
      title: 'Surkanda Devi Mandir',
      description: 'Surkanda Devi Mandir is a highly revered Hindu temple and one of the 51 sacred Shakti Peethas.',
      distance: '26 km',
      image: images.lake.surkandaDevi
    }
  ];
  // Auto-play timer for Rooms slider
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoomIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 3;
        if (roomsContainerRef.current) {
          const container = roomsContainerRef.current;
          const child = container.children[nextIndex] as HTMLElement;
          if (child) {
            container.scrollTo({
              left: child.offsetLeft - container.offsetLeft - 16,
              behavior: 'smooth',
            });
          }
        }
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Auto-play timer for Reviews slider
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % reviewsData.length;
        if (reviewsContainerRef.current) {
          const container = reviewsContainerRef.current;
          const child = container.children[nextIndex] as HTMLElement;
          if (child) {
            container.scrollTo({
              left: child.offsetLeft - container.offsetLeft - 16,
              behavior: 'smooth',
            });
          }
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [reviewsData.length]);

  const desktopHeroSlides = [images.hero.bg, images.hero.bg2, images.hero.bg4, images.hero.bg3, images.hero.bg5];
  const mobileHeroSlides = [images.hero.bg, images.hero.bg2Mobile, images.hero.bg4Mobile, images.hero.bg3Mobile, images.hero.bg5];

  // Auto-play timer for Hero slider (4 seconds per slide)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % desktopHeroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [desktopHeroSlides.length]);

  // Auto-play timer for Locale Attractions slider
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveLocaleIndex((prevIndex) => (prevIndex + 1) % attractions.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [attractions.length]);


  return (
    <div className="overflow-hidden bg-luxury-cream text-luxury-slate">
      {/* 1. Hero Banner Slider */}
      <section className="relative h-[calc(100vh-5rem)] flex items-start justify-center text-center overflow-hidden bg-luxury-charcoal pt-8 md:pt-12">
        {/* Mobile View Hero Banner Slider */}
        <div className="absolute inset-0 z-0 md:hidden">
          <motion.div
            key={`mobile-${heroSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className={`absolute inset-0 bg-cover ${heroSlide === 3 ? 'bg-[center_18%]' : 'bg-center'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${mobileHeroSlides[heroSlide]})`,
              filter: 'brightness(1.15)',
            }}
          />
        </div>

        {/* Laptop / Desktop View Hero Banner Slider */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <motion.div
            key={`desktop-${heroSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className={`absolute inset-0 bg-cover ${heroSlide === 3 ? 'bg-[center_18%]' : 'bg-center'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${desktopHeroSlides[heroSlide]})`,
              filter: 'brightness(1.15)',
            }}
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-heading font-serif !text-white !font-semibold mb-3 md:whitespace-nowrap"
          >
           Tehri Lakeview Sunrise Cottages
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="sub-heading font-cormorant !text-white tracking-wider max-w-2xl mx-auto mb-6 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            Peaceful Stay Near Tehri Lake
          </motion.p>
        </div>

        {/* Hero Slider Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
          {desktopHeroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                heroSlide === idx ? 'bg-luxury-gold w-8' : 'bg-white/60 hover:bg-white w-3'
              }`}
              aria-label={`Hero Banner Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>



      {/* 2. Welcome Section */}
      <section className="luxury-section-padding relative bg-luxury-cream">
        <MandalaOrnaments />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center relative z-10">
          <span className="section-label mb-3 text-center">ABOUT</span>
          <h2 className="section-heading text-center font-normal tracking-wide sm:whitespace-nowrap">
            Tehri Lakeview Sunrise Cottages
          </h2>
          <GoldDivider />

          <p className="sub-heading max-w-3xl mx-auto mb-6">
            Where Mountain Serenity Meets Lakeside Comfort.
          </p>

          <div className="space-y-6 body-text max-w-3xl mx-auto mb-10">
            <p>
              Nestled in the scenic hills overlooking the magnificent Tehri Lake, Tehri Lakeview Sunrise Cottages is a peaceful retreat designed for travelers seeking comfort, breathtaking views, and authentic Himalayan hospitality.
            </p>
            <p>
              Wake up to golden sunrises over the lake, unwind in thoughtfully designed private cottages, and immerse yourself in the tranquil beauty of Uttarakhand. Whether you're planning a romantic getaway, a family vacation, or a quiet escape from city life, every stay promises relaxation, comfort, and unforgettable memories.

Surrounded by majestic mountains and fresh mountain air, our cottages offer the perfect balance of modern comforts and natural charm.
            </p>
          </div>

          {/* Ribbon Badge */}
          <div className="flex justify-center mb-16">
            <div className="relative bg-luxury-bronze text-white btn-typography py-3.5 px-8 shadow-md">
              {/* Left Ribbon Tail */}
              <div className="absolute top-0 -left-3 h-full w-3 bg-luxury-bronze-dark [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
              ★ ★ Providing Premium Luxury Service ★ ★
              {/* Right Ribbon Tail */}
              <div className="absolute top-0 -right-3 h-full w-3 bg-luxury-bronze-dark [clip-path:polygon(0_0,100%_50%,0_100%)]" />
            </div>
          </div>

          {/* Video Player Container */}
          <div className="relative max-w-3xl mx-auto rounded overflow-hidden shadow-2xl border-4 border-white bg-black">
            <video
              controls
              preload="metadata"
              playsInline
              webkit-playsinline="true"
              className="w-full h-96 object-cover"
            >
              <source src={homeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* 3. Accommodations Section */}
      <section className="luxury-section-padding bg-white border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-3">ACCOMMODATIONS</span>
            <h2 className="section-heading">
              A premium stay
            </h2>
            <GoldDivider />
          </div>

          {/* 3 Columns Grid of Rooms matching reference layout - Scrollable on mobile */}
          <div
            ref={roomsContainerRef}
            onScroll={handleRoomsScroll}
            className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 md:gap-8 scrollbar-none"
          >
            {/* Room 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded overflow-hidden shadow border border-luxury-gold/15 flex flex-col group w-[85%] sm:w-[45%] md:w-auto flex-shrink-0 snap-start"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={images.rooms.deluxe}
                  alt="Luxury Stay"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t border-luxury-gold/10 text-center">
                <h3 className="sub-heading group-hover:text-luxury-gold transition-colors duration-200">
                  Luxury Stay
                </h3>
              </div>
            </motion.div>

            {/* Room 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded overflow-hidden shadow border border-luxury-gold/15 flex flex-col group w-[85%] sm:w-[45%] md:w-auto flex-shrink-0 snap-start"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={images.rooms.suiteHome}
                  alt="Ev charging facility"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-left-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t border-luxury-gold/10 text-center">
                <h3 className="sub-heading group-hover:text-luxury-gold transition-colors duration-200">
                  Ev charging facility
                </h3>
              </div>
            </motion.div>

            {/* Room 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded overflow-hidden shadow border border-luxury-gold/15 flex flex-col group w-[85%] sm:w-[45%] md:w-auto flex-shrink-0 snap-start"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={images.rooms.premium}
                  alt="High-Speed Free Wi-Fi"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t border-luxury-gold/10 text-center">
                <h3 className="sub-heading group-hover:text-luxury-gold transition-colors duration-200">
                  High-Speed Free Wi-Fi
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator */}

          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToRoom(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeRoomIndex ? 'bg-luxury-gold w-4' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to room ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dining Section */}
      <DiningExperienceSection />

      {/* 6. Guest Reviews Section */}
      <section className="luxury-section-padding bg-white border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center justify-center">
            <span className="section-label mb-3 text-center">GUEST REVIEWS</span>
            <h2 className="section-heading sm:whitespace-nowrap text-center">
              Guest Experiences at New Tehri
            </h2>
            <GoldDivider />
          </div>
          {/* Review Slider Container with Relative Positioning for Chevrons */}
          <div className="relative max-w-5xl mx-auto">
            {/* Left Chevron Button */}
            <button
              onClick={() => scrollToReview(activeReviewIndex - 1)}
              disabled={activeReviewIndex === 0}
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 shadow flex items-center justify-center text-gray-400 hover:text-luxury-gold disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 z-20 cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Review Slider - Scrollable in a single row */}
            <div
              ref={reviewsContainerRef}
              onScroll={handleReviewsScroll}
              className="flex flex-row overflow-x-auto gap-6 pt-8 pb-6 snap-x snap-mandatory scrollbar-none relative w-full"
            >
              {reviewsData.map((review) => {
                const isExpanded = !!expandedReviews[review.id];
                const isLong = review.comment.length > 95;
                const displayComment = isLong && !isExpanded
                  ? `${review.comment.slice(0, 95)}...`
                  : review.comment;

                return (
                  <div
                    key={review.id}
                    className="bg-white rounded-lg p-6 pt-10 border border-luxury-gold/15 shadow-sm text-center relative flex flex-col justify-between w-[85%] sm:w-[45%] md:w-[calc(33.333%-16px)] flex-shrink-0 snap-start transition-all duration-300 min-h-[220px]"
                  >
                    {/* User Avatar Circle with Google G badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-white flex items-center justify-center shadow">
                      <div className={`w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg ${review.avatarBg}`}>
                        {review.avatarLetter}
                      </div>
                      {/* Google G badge */}
                      <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 bg-white rounded-full flex items-center justify-center shadow border border-gray-100 z-20">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5">
                          <path
                            fill="#EA4335"
                            d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.354 0 3.373 2.682 1.39 6.573l3.876 3.192z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M16.04 15.358A7.058 7.058 0 0 1 12 17.09c-3.155 0-5.836-2.09-6.845-4.945l-3.882 3.146C3.255 19.5 7.29 22 12 22c3.09 0 5.836-1.127 7.964-3.055l-3.924-3.587z"
                          />
                          <path
                            fill="#4285F4"
                            d="M23.509 12.273c0-.818-.082-1.609-.218-2.382H12v4.545h6.482A5.568 5.568 0 0 1 16.04 18.02l3.924 3.587c2.29-2.11 3.545-5.209 3.545-9.333z"
                          />
                          <path
                            fill="#34A853"
                            d="M5.155 12.145c-.245-.736-.39-1.527-.39-2.336 0-.81.145-1.6.39-2.336L1.28 4.282A11.968 11.968 0 0 0 0 9.809c0 1.99.49 3.864 1.28 5.5l3.875-3.164z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <span className="btn-typography text-gray-700 block mb-2">{review.name}</span>
                      <div className="flex justify-center space-x-0.5 mb-4 text-luxury-gold">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                        <span className="w-3.5 h-3.5 ml-1.5 bg-green-500 rounded-full flex items-center justify-center"><Check className="w-2.5 h-2.5 text-white" /></span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm italic font-sans">
                        "{displayComment}"
                      </p>
                    </div>
                    {isLong && (
                      <button
                        onClick={() => toggleReadMore(review.id)}
                        className="text-[11px] font-medium text-luxury-gold hover:underline transition-colors duration-200 mt-4 underline focus:outline-none block mx-auto cursor-pointer"
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={() => scrollToReview(activeReviewIndex + 1)}
              disabled={activeReviewIndex >= reviewsData.length - 1}
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 shadow flex items-center justify-center text-gray-400 hover:text-luxury-gold disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 z-20 cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToReview(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeReviewIndex ? 'bg-luxury-gold w-4' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Locale Section */}
      <section className="luxury-section-padding bg-luxury-cream border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 flex flex-col items-center justify-center">
          <span className="section-label mb-3 text-center">THE LOCALE</span>
          <h2 className="section-heading text-center sm:whitespace-nowrap">
            Nearby Attraction in New Tehri
          </h2>
          <GoldDivider />
        </div>

        {/* Attractions Slide Layout */}
        <div className="max-w-5xl mx-auto relative px-2 sm:px-4">
          <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl border-2 sm:border-4 border-white bg-gray-100">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.title}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === activeLocaleIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover"
                />

                {/* Subtle gradient overlay on mobile for high legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:hidden z-10 pointer-events-none" />

                {/* Information Card - Bottom Right on Desktop, Bottom Full-width on Mobile */}
                {index === activeLocaleIndex && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:right-6 sm:left-auto bg-white/95 sm:bg-white backdrop-blur-md sm:backdrop-blur-none p-4 sm:p-6 max-w-sm rounded-lg shadow-xl border-l-4 border-luxury-gold text-left z-20"
                  >
                    <h3 className="sub-heading !text-base sm:!text-lg md:!text-xl font-medium mb-1.5 leading-snug">
                      {attraction.title}
                    </h3>
                    <p className="body-text !text-xs sm:!text-sm line-clamp-3 sm:line-clamp-none text-gray-700 leading-relaxed">
                      {attraction.description}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows for Easy Mobile & Desktop Navigation */}
          <button
            onClick={() => setActiveLocaleIndex((prev) => (prev === 0 ? attractions.length - 1 : prev - 1))}
            className="absolute left-1 sm:-left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-600 hover:text-luxury-gold transition-all duration-200 z-30 cursor-pointer"
            aria-label="Previous attraction"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveLocaleIndex((prev) => (prev + 1) % attractions.length)}
            className="absolute right-1 sm:-right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-600 hover:text-luxury-gold transition-all duration-200 z-30 cursor-pointer"
            aria-label="Next attraction"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {attractions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveLocaleIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeLocaleIndex ? 'bg-luxury-gold w-5' : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to attraction ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};
