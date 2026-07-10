import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { images } from '../config/images';

export const Privacy: React.FC = () => {
  const items = [
    {
      heading: 'Personal Data Collection',
      content: 'We collect basic personal identification parameters (name, contact numbers, email address, nationality, vehicle registration numbers, and government-issued ID copies) strictly to comply with local police registry and state tourism regulations for hotel stays.'
    },
    {
      heading: 'Data Security & Storage',
      content: 'Your registration credentials and photo identification copies are stored securely in password-protected, encrypted local databases. We do not maintain any physical copies of your personal documents at our reservation counter.'
    },
    {
      heading: 'Third-Party Sharing Restrictions',
      content: 'We strictly enforce guest privacy. Your contact details, booking histories, and identity proofs are never sold, traded, or shared with third-party marketing firms. Information is shared only with local law enforcement or government authorities when legally mandated under regional tourism registration codes.'
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
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="luxury-section-padding px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Privacy &amp; Data Policy</h2>
          <p className="sub-heading !text-gray-500 max-w-2xl mx-auto">
            Review how we collect, store, and protect your personal credentials.
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
            <ShieldCheck className="w-5 h-5 text-luxury-gold" />
            <h3 className="sub-heading !text-luxury-charcoal">
              Guest Data Protection Guidelines
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
          <h4 className="sub-heading !text-luxury-charcoal mb-2">Questions About Your Data?</h4>
          <p className="body-text mb-4">
            If you have questions regarding our data collection policies or wish to inspect your registration logs, please email our security officer.
          </p>
          <a
            href="mailto:info@tehrilakeview.com"
            className="inline-block btn-typography bg-luxury-bronze hover:bg-luxury-bronze-dark text-white px-6 py-3 rounded transition-colors duration-300 shadow-md"
          >
            Email: info@tehrilakeview.com
          </a>
        </div>
      </section>
    </div>
  );
};
