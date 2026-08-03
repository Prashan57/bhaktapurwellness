'use client';

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  Services: [
    { name: 'Gym & Fitness', href: '/gym' },
    { name: 'Spa & Wellness', href: '/spa' },
    { name: 'Beauty & Aesthetics', href: '/beauty' },
    { name: 'Cafe & Nutrition', href: '/cafe' },
  ],
  Company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Our Team', href: '/#team' },
    { name: 'Careers', href: '/#careers' },
    { name: 'Blog', href: '/#blog' },
  ],
  Support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/#faqs' },
    { name: 'Privacy Policy', href: '/#privacy' },
    { name: 'Terms of Service', href: '/#terms' },
  ],
};

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`relative border-t ${isDark ? 'bg-[#0a0a0a] border-white/5' : 'bg-gray-50 border-gray-200'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className={`h-12 w-12 rounded-full overflow-hidden relative ${isDark ? 'border-2 border-emerald-500/30' : 'border-2 border-emerald-700/20'}`}>
                <Image src="/images/gallery/bw.jpg" alt="Bhaktapur Wellness" fill sizes="48px" className="object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`text-[0.6rem] uppercase tracking-[0.35em] font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  Bhaktapur
                </span>
                <span className={`text-xl font-semibold tracking-[0.03em] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Wellness
                </span>
              </div>
            </Link>
            <p className={`text-sm max-w-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Elevating lives through an integrated approach to fitness, relaxation, beauty, and nutrition in the heart of Bhaktapur.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className={`text-xs uppercase tracking-[0.2em] font-medium mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href}
                        className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-500 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-700'
                        }`}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
          <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            &copy; {new Date().getFullYear()} Bhaktapur Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['facebook', 'instagram', 'twitter'].map((social) => (
              <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer"
                className={`transition-colors duration-300 ${isDark ? 'text-gray-600 hover:text-emerald-400' : 'text-gray-400 hover:text-emerald-700'}`}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  {social === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                  {social === 'instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" /></>}
                  {social === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}