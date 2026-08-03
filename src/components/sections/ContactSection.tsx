'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import { CONTACT } from '@/constants/constants';
import { useState } from 'react';

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      title: 'Visit Us',
      description: 'Our center is conveniently located in the heart of Bhaktapur.',
      icon: '📍',
      details: [CONTACT.address, 'Open 7 days a week'],
    },
    {
      title: 'Call Us',
      description: 'Reach us for inquiries or bookings.',
      icon: '📞',
      details: [CONTACT.phone, `Weekdays: ${CONTACT.hours.weekday}`, `Weekends: ${CONTACT.hours.weekend}`],
    },
    {
      title: 'Email Us',
      description: 'Send us a message anytime.',
      icon: '✉️',
      details: [CONTACT.email],
    },
  ];

  return (
    <section id="contact" className="relative w-full py-20 sm:py-28 lg:py-36 bg-background text-foreground scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <InView animation="fade-in">
            <span className="section-eyebrow">
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
              Contact Us
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
            </span>
          </InView>
          <InView animation="fade-in" delay={100}>
            <h2 className="section-title">
              Get in <span className="gradient-text">Touch</span>
            </h2>
          </InView>
          <InView animation="fade-in" delay={150}>
            <p className="section-subtitle">
              Ready to begin your wellness journey? Our team is here to help you every step of the way.
            </p>
          </InView>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Contact Form */}
          <InView animation="fade-in">
            <div className={`rounded-3xl p-8 sm:p-10 ${isDark ? 'bg-[#1a1a1a] border border-white/8' : 'bg-gray-50 border border-gray-200'}`}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-50'}`}>
                    <svg className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Thank You!</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                          isDark ? 'bg-black/50 border border-white/10 text-white placeholder:text-gray-500' : 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400'
                        }`} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                          isDark ? 'bg-black/50 border border-white/10 text-white placeholder:text-gray-500' : 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400'
                        }`} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                          isDark ? 'bg-black/50 border border-white/10 text-white placeholder:text-gray-500' : 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400'
                        }`} placeholder="+977 9800000000" />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Service</label>
                      <select value={formData.service} onChange={(e) => setFormData(p => ({ ...p, service: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                          isDark ? 'bg-black/50 border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'
                        }`}>
                        <option value="">Select a service</option>
                        <option value="gym">Gym & Fitness</option>
                        <option value="spa">Spa & Wellness</option>
                        <option value="beauty">Beauty & Aesthetics</option>
                        <option value="cafe">Cafe & Nutrition</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none ${
                        isDark ? 'bg-black/50 border border-white/10 text-white placeholder:text-gray-500' : 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400'
                      }`} placeholder="Tell us about your goals..." />
                  </div>
                  <button type="submit" className="btn btn-primary w-full py-3.5">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </InView>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, index) => (
              <InView key={info.title} animation="fade-in" delay={index * 100}>
                <div className={`flex items-start gap-5 rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  isDark ? 'bg-[#1a1a1a] border border-white/8 hover:border-emerald-500/20' : 'bg-gray-50 border border-gray-200 hover:border-emerald-200'
                }`}>
                  <div className={`p-4 rounded-2xl flex-shrink-0 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{info.title}</h3>
                    <p className={`text-sm mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{info.description}</p>
                    <div className="space-y-1">
                      {info.details.map((detail) => (
                        <p key={detail} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}