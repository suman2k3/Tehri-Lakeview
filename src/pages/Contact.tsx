import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { images } from '../config/images';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Clear success after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-luxury-cream overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(${images.food.diningBg})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3">TEHRI LAKEVIEW</span>
          <h1 className="hero-heading !text-white">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* 2. Main Section: Image + Contact Form */}
      <section className="luxury-section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Landscape Resort Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded overflow-hidden shadow-md"
          >
            <img
              src={images.cottages.exterior}
              alt="Tehri Lakeview Sunrise Cottages Property"
              className="w-full h-80 sm:h-96 md:h-[450px] object-cover hover:scale-103 transition-transform duration-700"
            />
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="section-heading mb-4">
              Get in Touch with Tehri Lakeview
            </h2>
            <p className="body-text mb-8 max-w-lg">
              We're here to assist you with bookings, inquiries, and special requests reach out anytime for a seamless stay experience.
            </p>

            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 text-green-800 rounded border border-green-200 text-xs font-sans font-light">
                Thank you! Your message has been sent successfully. We will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-sans max-w-lg">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-full px-4 py-2.5 bg-white border text-xs focus:outline-none transition-colors duration-200 ${
                    errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-luxury-gold'
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-4 py-2.5 bg-white border text-xs focus:outline-none transition-colors duration-200 ${
                    errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-luxury-gold'
                  }`}
                />
                {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className={`w-full px-4 py-2.5 bg-white border text-xs focus:outline-none resize-none transition-colors duration-200 ${
                    errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-luxury-gold'
                  }`}
                />
                {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Send Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-typography w-full bg-[#B07D4C] hover:bg-luxury-charcoal text-white py-3 transition-all duration-300 disabled:bg-gray-400 cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. Info Cards Grid (Light Cream Section) */}
      <section className="luxury-section-padding bg-[#F9F6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="bg-white rounded-sm p-8 shadow-sm border border-luxury-gold/10 flex flex-col items-center text-center justify-center min-h-[140px]">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 text-luxury-gold flex items-center justify-center mb-4">
                <Mail className="w-4 h-4 stroke-[1.5]" />
              </div>
              <a href="mailto:reservation@tehrilakeview.com" className="body-text !text-sm text-gray-700 hover:text-luxury-gold transition-colors duration-300">
                info@tehrilakeview.com
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-sm p-8 shadow-sm border border-luxury-gold/10 flex flex-col items-center text-center justify-center min-h-[140px]">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 text-luxury-gold flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4 stroke-[1.5]" />
              </div>
              <span className="body-text !text-sm text-gray-700 font-light leading-relaxed max-w-xs">
                Kutta Zakh Road, Tehri, Uttarakhand 249001
              </span>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-sm p-8 shadow-sm border border-luxury-gold/10 flex flex-col items-center text-center justify-center min-h-[140px]">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 text-luxury-gold flex items-center justify-center mb-4">
                <Phone className="w-4 h-4 stroke-[1.5]" />
              </div>
              <a href="tel:+919883113966" className="body-text !text-sm text-gray-700 hover:text-luxury-gold transition-colors duration-300">
                977-444-666-888
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Map Block */}
      <section className="h-96 w-full border-t border-luxury-gold/15 bg-gray-100">
        <iframe
          title="Tehri Lakeview Sunrise Cottages Location Map"
          src="https://maps.google.com/maps?q=Tehri%20Lake%20View%20Sunrise%20Cottages,%20New%20Tehri,%20Uttarakhand&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};
