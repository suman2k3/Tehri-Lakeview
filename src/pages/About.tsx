import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../config/images';
import { GoldDivider } from './Home';

export const About: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeLocaleIndex, setActiveLocaleIndex] = useState(0);

  const reviewsContainerRef = useRef<HTMLDivElement>(null);

  const reviewsData = [
    {
      id: 1,
      name: 'Sumana Bera',
      avatarLetter: 'S',
      avatarBg: 'bg-indigo-700',
      time: '4 months ago',
      rating: 5,
      comment: 'The rooms are excellent, the property is outstanding, and the stay here has been a wonderful experience. The staff members are excellent, and the place is...',
      readMore: true
    },
    {
      id: 2,
      name: 'Silky Sircar',
      avatarLetter: 'S',
      avatarBg: 'bg-green-600',
      time: '4 months ago',
      rating: 5,
      comment: 'good',
      readMore: false
    },
    {
      id: 3,
      name: 'Mahasweta Mondal',
      avatarLetter: 'M',
      avatarBg: 'bg-orange-600',
      time: '4 months ago',
      rating: 5,
      comment: 'Very very satisfied with the overall service of the hotel . The most remarkable service is from Saheli and Ronita. Very happy with the entire hotel.',
      readMore: false
    },
    {
      id: 4,
      name: 'Priyanka Agarwalla',
      avatarLetter: 'P',
      avatarBg: 'bg-teal-600',
      time: '4 months ago',
      rating: 5,
      comment: 'Superb service. The property and maintenance is brilliant. Best place to stay at New Tehri.',
      readMore: false
    },
    {
      id: 5,
      name: 'Antara Ganguly',
      avatarLetter: 'A',
      avatarBg: 'bg-purple-600',
      time: '4 months ago',
      rating: 5,
      comment: 'A nice place to dine with family. Food taste was very homely. The resort gave off proper premium cottage vibes.',
      readMore: false
    }
  ];

  const attractions = [
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
    }
  ];

  const handleReviewsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < reviewsData.length && newIndex !== activeReviewIndex) {
      setActiveReviewIndex(newIndex);
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

  // Autoplay timers
  useEffect(() => {
    const reviewsTimer = setInterval(() => {
      setActiveReviewIndex((prev) => {
        const next = (prev + 1) % reviewsData.length;
        if (reviewsContainerRef.current) {
          const container = reviewsContainerRef.current;
          const child = container.children[next] as HTMLElement;
          if (child) {
            container.scrollTo({
              left: child.offsetLeft - container.offsetLeft - 16,
              behavior: 'smooth',
            });
          }
        }
        return next;
      });
    }, 4500);

    const attractionsTimer = setInterval(() => {
      setActiveLocaleIndex((prev) => (prev + 1) % attractions.length);
    }, 5500);

    return () => {
      clearInterval(reviewsTimer);
      clearInterval(attractionsTimer);
    };
  }, [reviewsData.length, attractions.length]);

  return (
    <div className="bg-luxury-cream overflow-hidden">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.35)), url(${images.hero.subpageBg})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3">ABOUT</span>
          <h1 className="hero-heading !text-white">
            Tehri Lakeview
          </h1>
        </div>
      </section>

      {/* 2. Narrative Section: Moments Made Special */}
      <section className="luxury-section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-heading text-center lg:text-left">
              Moments Made Special
            </h2>
            <div className="lg:justify-start flex justify-center">
              <GoldDivider />
            </div>
            <div className="space-y-6 body-text mt-8">
              <p>
At Tehri Lakeview Sunrise Cottages, guests can wake up to breathtaking views of the majestic Tehri Lake and surrounding hills. The serene environment, fresh mountain air, and peaceful atmosphere make it an ideal destination for nature lovers and travelers seeking relaxation away from the hustle and bustle of city life.
Our rooms are thoughtfully designed with modern amenities to ensure a comfortable and enjoyable stay. Each room is equipped with comfortable bedding, clean interiors, attached bathrooms, and essential facilities to make your visit convenient and memorable.              </p>
              <p>
Guests can explore nearby attractions, enjoy boating activities at Tehri Lake, take scenic walks through the beautiful landscapes, or simply relax and admire the stunning views from the property. The location offers the perfect balance of adventure and tranquility for visitors of all ages.              </p>
              <p>
Whether you are visiting for leisure, a family gathering, a romantic getaway, or a business retreat, Tehri Lakeview Sunrise Cottages provides the perfect setting for creating unforgettable memories. We look forward to welcoming you and making your stay truly special.              </p>
            </div>
          </motion.div>

          {/* Staggered overlapping images with background mandala */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center h-[350px] sm:h-[450px]"
          >
            {/* Background Faint Mandala */}
            <div className="absolute inset-0 opacity-[0.03] text-luxury-gold pointer-events-none z-0">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4" className="w-full h-full">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="30" strokeDasharray="1 1" />
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  return (
                    <line key={i} x1="50" y1="50" x2={50 + 45 * Math.cos(angle)} y2={50 + 45 * Math.sin(angle)} />
                  );
                })}
              </svg>
            </div>

            {/* Left Image (lower) */}
            <div className="absolute left-4 bottom-4 w-[50%] z-10 shadow-xl border-4 border-white rounded overflow-hidden">
              <img
                src={images.cottages.interior}
                alt="Chalet Interior Room"
                className="w-full h-48 sm:h-64 object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Right Image (higher) */}
            <div className="absolute right-4 top-4 w-[50%] z-20 shadow-xl border-4 border-white rounded overflow-hidden">
              <img
                src={images.rooms.deluxe}
                alt="Lakeside Bedroom Suite"
                className="w-full h-48 sm:h-64 object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Guest Reviews on Dark Parallax-Style Background */}
      <section className="relative luxury-section-padding text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(17,21,23,0.88), rgba(17,21,23,0.85)), url(${images.cottages.exterior})`,
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-3">GUEST REVIEWS</span>
            <h2 className="section-heading !text-white">
              Tehri Lakeview Sunrise Cottages
            </h2>
            <GoldDivider />
          </div>

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

            {/* Review Slider */}
            <div
              ref={reviewsContainerRef}
              onScroll={handleReviewsScroll}
              className="flex flex-row overflow-x-auto gap-6 pt-8 pb-6 snap-x snap-mandatory scrollbar-none relative w-full"
            >
              {reviewsData.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg p-6 pt-10 border border-luxury-gold/15 shadow-sm text-center relative flex flex-col justify-between w-[85%] sm:w-[45%] md:w-[calc(33.333%-16px)] flex-shrink-0 snap-start text-luxury-slate"
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
                    <span className="btn-typography text-gray-700 block mb-1">{review.name}</span>
                    <span className="text-[10px] text-gray-400 font-light block mb-3">{review.time}</span>
                    <div className="flex justify-center space-x-0.5 mb-4 text-luxury-gold">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                      <span className="w-3.5 h-3.5 ml-1.5 bg-green-500 rounded-full flex items-center justify-center"><Check className="w-2.5 h-2.5 text-white" /></span>
                    </div>
                    <p className="body-text !text-sm italic">
                      "{review.comment}"
                    </p>
                  </div>
                  {review.readMore && (
                    <button className="text-[10px] text-gray-400 hover:text-luxury-gold transition-colors duration-200 mt-4 underline focus:outline-none block mx-auto cursor-pointer">
                      Read more
                    </button>
                  )}
                </div>
              ))}
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
                  index === activeReviewIndex ? 'bg-luxury-gold w-4' : 'bg-gray-500/40 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Locale (Nearby Attractions) Section */}
      <section className="luxury-section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-3">THE LOCALE</span>
          <h2 className="section-heading">
            Nearby Attraction in New Tehri
          </h2>
          <GoldDivider />
        </div>

        {/* Attractions Slide Layout with overlapping card in bottom-right corner */}
        <div className="max-w-5xl mx-auto relative px-4">
          <div className="relative w-full h-[320px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-md">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.title}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === activeLocaleIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                }`}
              >
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Information Card - Bottom Right Overlay */}
                {index === activeLocaleIndex && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute bottom-6 right-6 left-6 sm:left-auto bg-white p-6 max-w-sm rounded shadow-lg border-l-4 border-luxury-gold text-left z-20"
                  >
                    <h3 className="sub-heading mb-2">
                      {attraction.title}
                    </h3>
                    <p className="body-text !text-sm mb-4">
                      {attraction.description}
                    </p>
                    <span className="section-label !text-[11px]">
                      Distance from Resort: {attraction.distance}
                    </span>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Dots Indicator below */}
          <div className="flex justify-center space-x-2 mt-8">
            {attractions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLocaleIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeLocaleIndex ? 'bg-luxury-gold w-3' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
