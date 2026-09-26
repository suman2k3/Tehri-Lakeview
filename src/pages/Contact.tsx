import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { images } from '../config/images';
import contactHero from '../assets/images/contact_hero.png';

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
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    const text = `Hello Tehri Lakeview Sunrise Cottages,\n\nI would like to make an inquiry:\n- *Name:* ${formData.name.trim()}\n- *Email:* ${formData.email.trim()}\n- *Message:* ${formData.message.trim()}`;
    const whatsappUrl = `https://wa.me/917840050489?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 500);
  };

  return (
    <div className="bg-luxury-cream overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(${contactHero})`,
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label !text-luxury-gold mb-3">CONTACT US</span>
          <h1 className="hero-heading !text-white">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* 2. Main Section: Image + Contact Form */}
      <section className="luxury-section-padding bg-luxury-cream border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Landscape Resort Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded overflow-hidden shadow-md w-full h-80 sm:h-96 md:h-[450px] relative"
          >
            <img
              src={images.cottages.exteriorNight}
              alt="Tehri Lakeview Sunrise Cottages Property"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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
            <h2 className="section-heading mb-4 lg:whitespace-nowrap lg:!text-[clamp(1.3rem,1.75vw,1.75rem)]">
              Get in Touch with Tehri Lakeview Sunrise Cottages
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
                  className="btn-typography w-full bg-[#284B63] hover:bg-[#1F3443] text-white py-3 transition-all duration-300 disabled:bg-gray-400 cursor-pointer shadow-md"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        </div>
      </section>

      {/* 3. Info Cards Grid (Light Cream Section) */}
      <section className="luxury-section-padding bg-white border-t border-luxury-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="bg-white rounded-sm p-8 shadow-sm border border-luxury-gold/10 flex flex-col items-center text-center justify-center min-h-[140px]">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 text-luxury-gold flex items-center justify-center mb-4">
                <Mail className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div className="flex flex-col space-y-1">
                <a href="mailto:info@tehrilakeview.com" className="body-text !text-sm text-gray-700 hover:text-luxury-gold transition-colors duration-300">
                  info@tehrilakeview.com
                </a>
                <a href="mailto:rnrinternational89@gmail.com" className="body-text !text-sm text-gray-700 hover:text-luxury-gold transition-colors duration-300">
                  rnrinternational89@gmail.com
                </a>
              </div>
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
              <div className="flex flex-col space-y-1">
                <a href="tel:+917840050489" className="body-text !text-sm text-gray-700 hover:text-luxury-gold transition-colors duration-300">
                  +91 78400 50489
                </a>
                <a href="tel:+919899950373" className="body-text !text-sm text-gray-700 hover:text-luxury-gold transition-colors duration-300">
                  +91 98999 50373
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Map Block */}
      <section className="h-96 w-full border-t border-luxury-gold/15 bg-gray-100">
        <iframe
          title="Tehri Lakeview Sunrise Cottages Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d78.4491132!3d30.4000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908e3003f77a6f5%3A0xa14372b85a91fd0c!2sTehri%20Lake%20View%20Sunrise%20Cottages%20%7C%20Best%20Cottages%20in%20Tehri%20Lake!5e0!3m2!1sen!2sin!4v1719830000000!5m2!1sen!2sin"
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
