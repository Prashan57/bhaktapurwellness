'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import { CONTACT } from '@/constants/constants';
import { useState } from 'react';

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0f0f0f]' : 'bg-white'
    }`}>
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <InView animation="fade-up">
            <span className={`section-eyebrow mb-4 inline-flex items-center gap-2`}>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
              Contact Us
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
            </span>
          </InView>
          <InView animation="fade-up" delay={100}>
            <h2 className={`section-title mb-6`}>
              Get in <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
            </h2>
          </InView>
          <InView animation="fade-up" delay={200}>
            <p className={`section-subtitle ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Ready to begin your wellness journey? Contact us to schedule a consultation 
              or learn more about our services.
            </p>
          </InView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact form */}
          <InView animation="fade-up" delay={300}>
            <div className={`rounded-2xl p-8 backdrop-blur-sm ${
              isDark
                ? 'bg-[#1a1a1a]/80 border border-white/10'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg transition-all ${
                        isDark
                          ? 'bg-[#0f0f0f] border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                          : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg transition-all ${
                        isDark
                          ? 'bg-[#0f0f0f] border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                          : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg transition-all ${
                        isDark
                          ? 'bg-[#0f0f0f] border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                          : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                      placeholder="+977-XXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg transition-all ${
                        isDark
                          ? 'bg-[#0f0f0f] border border-white/10 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                          : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="gym">Premium Gym</option>
                      <option value="spa">Luxury Spa</option>
                      <option value="beauty">Beauty Parlor</option>
                      <option value="cafe">Gourmet Cafe</option>
                      <option value="membership">Membership Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg transition-all resize-none ${
                      isDark
                        ? 'bg-[#0f0f0f] border border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                        : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                    placeholder="Tell us about your wellness goals..."
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full py-4">
                  Send Message
                </button>
              </form>
            </div>
          </InView>

          {/* Contact info & Map */}
          <InView animation="fade-up" delay={400} className="space-y-6">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Location',
                  value: CONTACT.address,
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Phone',
                  value: CONTACT.phone,
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  value: CONTACT.email,
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  title: 'Hours',
                  value: `Mon-Fri: ${CONTACT.hours.weekday}`,
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl p-5 ${
                  isDark
                    ? 'bg-[#1a1a1a]/80 border border-white/10'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}>
                  <div className="text-emerald-600 dark:text-emerald-400 mb-3">{item.icon}</div>
                  <h4 className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className={`rounded-2xl overflow-hidden ${
              isDark
                ? 'bg-[#1a1a1a]/80 border border-white/10'
                : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <iframe
                src={CONTACT.mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhaktapur Wellness location on Google Maps"
                className={`w-full h-[300px] transition-all duration-500 ${
                  isDark ? 'grayscale hover:grayscale-0 brightness-75' : 'grayscale hover:grayscale-0'
                }`}
              />
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}