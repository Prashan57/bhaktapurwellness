'use client';

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/constants/constants';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKeyDown); window.removeEventListener('resize', onResize); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] pt-3 sm:pt-4 px-3 sm:px-6">
      <div className="relative w-full max-w-7xl mx-auto">
        <nav
          className={`relative w-full flex items-center justify-between gap-4 lg:gap-6 rounded-2xl px-4 sm:px-6 py-3 sm:py-3 transition-all duration-300 ${
            isDark
              ? 'bg-black/60 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-white/70 border border-black/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
          } ${scrolled ? (isDark ? 'bg-black/80' : 'bg-white/85') : ''}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className={`h-10 w-10 rounded-full overflow-hidden relative ring-2 ring-offset-2 transition-all duration-300 ${
              isDark ? 'ring-emerald-500/30 ring-offset-black/50' : 'ring-emerald-600/20 ring-offset-white/50'
            }`}>
              <Image src="/images/gallery/bw.jpg" alt="Bhaktapur Wellness" fill sizes="40px" className="object-cover" priority />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className={`text-[0.55rem] uppercase tracking-[0.3em] font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                Bhaktapur
              </span>
              <span className={`text-base font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Wellness
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-emerald-400 bg-emerald-500/15'
                        : 'text-emerald-700 bg-emerald-50'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                  }`}>
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-gray-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
              }`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <Link href="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-600/20">
              Book Now
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <button onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
              }`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <Link href="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200">
              Book
            </Link>
            <button onClick={() => setMenuOpen(p => !p)}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
              }`}
              aria-label="Toggle menu">
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 z-[70]">
            {/* Backdrop */}
            <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/30'} backdrop-blur-sm`} onClick={closeMenu} />

            {/* Menu panel */}
            <div className="absolute inset-x-0 top-0 pt-3 px-3 sm:px-6">
              <div className={`relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden ${
                isDark
                  ? 'bg-[#111]/95 border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.6)]'
                  : 'bg-white/95 border border-gray-200 shadow-[0_32px_64px_rgba(0,0,0,0.15)]'
              } backdrop-blur-2xl`} onClick={e => e.stopPropagation()}>

                {/* Menu header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className={`h-8 w-8 rounded-full overflow-hidden relative ring-1 ${
                      isDark ? 'ring-emerald-500/30' : 'ring-emerald-600/20'
                    }`}>
                      <Image src="/images/gallery/bw.jpg" alt="Bhaktapur Wellness" fill sizes="32px" className="object-cover" />
                    </div>
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Menu</span>
                  </div>
                  <button onClick={closeMenu}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                    }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>

                {/* Nav items */}
                <div className="p-4 flex flex-col gap-1.5">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link key={item.href} href={item.href} onClick={closeMenu}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? isDark
                              ? 'bg-emerald-500/15 text-emerald-400'
                              : 'bg-emerald-50 text-emerald-700'
                            : isDark
                              ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                              : 'text-gray-600 hover:bg-black/5 hover:text-gray-900'
                        }`}>
                        <span className="text-sm font-medium">{item.name}</span>
                        {item.description && (
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>— {item.description}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Menu footer */}
                <div className={`px-4 pb-4 pt-2 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                  <Link href="/contact" onClick={closeMenu}
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-600/20">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}