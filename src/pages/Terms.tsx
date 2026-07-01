import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle } from 'lucide-react';
import { images } from '../config/images';

export const Terms: React.FC = () => {
  const sections = [
    {
      id: 'general',
      title: '1. General Booking Conditions',
      icon: <FileText className="w-5 h-5 text-luxury-gold" />,
      items: [
        {
          heading: 'Government ID Requirements',
          content: 'As per local administration guidelines, all Indian nationals must present a valid government-issued photo ID (Aadhar Card, Driving License, Voter ID, or Passport) at check-in. PAN cards are not accepted as valid identity proof. Foreign nationals must present a valid Passport and Visa.'
        },
        {
          heading: 'Check-In & Check-Out Timings',
          content: 'Standard Check-In time is 12:00 PM (Noon), and Check-Out is 10:00 AM. Early check-in or late check-out requests are subject to cottage availability and will incur additional luxury resort charges.'
        },
        {
          heading: 'Right to Admission',
          content: 'The management reserves the absolute right to admission. We strive to maintain a premium, peaceful, and family-friendly atmosphere at the resort. Guests behaving in a disruptive or unlawful manner will be asked to leave immediately without refund.'
        }
      ]
    },
    {
      id: 'house-rules',
      title: '2. House Rules & Eco Guidelines',
      icon: <AlertCircle className="w-5 h-5 text-luxury-gold" />,
      items: [
        {
          heading: 'Strict Fire Hazard Rules (No Smoking)',
          content: 'Due to the organic, premium A-frame wooden structures of our lakeside cottages, smoking is strictly prohibited inside the cottages, lofts, or balconies. Smoking is only permitted in designated open-air resort spaces. Violators will face immediate penalty charges of INR 10,000 for cleaning and safety violations.'
        },
        {
          heading: 'Respecting Nature & Quiet Hours',
          content: 'To preserve the tranquil sanctuary of Tehri Lake and respect neighboring guests, loud music, portable speakers, and high-noise gatherings are strictly prohibited between 10:00 PM and 7:00 AM.'
        },
        {
          heading: 'Pet Policies',
          content: 'Pets are welcome only on prior written request and confirmation. Pet owners are fully responsible for the cleanup, behavior, and any property damage caused by their pets during their stay.'
        },
        {
          heading: 'Damages & Liability',
          content: 'Any breakage, staining of linens, structural damages, or loss of cottage keys/amenities will be billed directly to the guest prior to checkout based on restoration costs.'
        }
      ]
    }
  ];

  return (
    <div className="bg-luxury-cream overflow-hidden">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${images.hero.subpageBg})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3">TEHRI LAKEVIEW</span>
          <h1 className="hero-heading !text-white">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      {/* 2. Content Sections */}
      <section className="luxury-section-padding px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Terms &amp; Conditions</h2>
          <p className="sub-heading !text-gray-500 max-w-2xl mx-auto">
            Please review our booking policies and house rules before scheduling your visit to Tehri Lakeview.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-luxury-gold/10"
            >
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                {section.icon}
                <h3 className="sub-heading !text-luxury-charcoal">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-6">
                {section.items.map((item, idx) => (
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
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-16 text-center bg-white p-8 border border-luxury-gold/15 rounded-sm">
          <h4 className="sub-heading !text-luxury-charcoal mb-2">Have Questions About Our Terms?</h4>
          <p className="body-text mb-4">
            For any custom queries, group booking policies, or clarifications, please reach out to our reservations desk.
          </p>
          <a
            href="tel:+919883113966"
            className="inline-block btn-typography bg-luxury-bronze hover:bg-luxury-bronze-dark text-white px-6 py-3 rounded transition-colors duration-300 shadow-md"
          >
            Call Desk: +919883113966
          </a>
        </div>
      </section>
    </div>
  );
};
