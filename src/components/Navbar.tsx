'use client';

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { NAV_ITEMS } from '@/constants/constants';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('/');
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [isPointerActive, setIsPointerActive] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveId(window.location.pathname);
    };
    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      setPointerPosition({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });
      if (!isPointerActive) setIsPointerActive(true);
    },
    [isPointerActive]
  );

  const handlePointerLeave = useCallback(() => {
    setIsPointerActive(false);
  }, []);

  const isDark = theme === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] pt-3 sm:pt-4 flex justify-center px-3 sm:px-6">
      <div className="relative w-full max-w-7xl">
        {/* Background */}
        <nav className="relative w-full">
          <div
            className={`relative flex w-full items-center justify-between gap-4 lg:gap-8 rounded-2xl px-4 sm:px-6 py-3 sm:py-3.5 overflow-hidden transition-all duration-500 ${
              isDark
                ? 'bg-[#141414]/80 border border-white/8 backdrop-blur-xl shadow-luxury'
                : 'bg-white/90 border border-black/5 backdrop-blur-xl shadow-light'
            }`}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            {/* Pointer follow effect */}
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-2xl ${
                isPointerActive ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background: `radial-gradient(200px circle at ${pointerPosition.x}px ${pointerPosition.y}px, rgba(2, 115, 29, 0.12), transparent 70%)`,
              }}
            />

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 relative z-10" aria-label="Bhaktapur Wellness homepage">
              <div className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full overflow-hidden relative ${
                isDark ? 'border-2 border-emerald-500/30' : 'border-2 border-emerald-700/20'
              }`}>
                <Image
                  src="/images/gallery/bw.jpg"
                  alt="Bhaktapur Wellness logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className={`text-[0.6rem] uppercase tracking-[0.35em] font-medium ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  Bhaktapur
                </span>
                <span className={`text-lg font-semibold tracking-[0.03em] ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Wellness
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-6 relative z-10">
              <div className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeId === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                        isActive
                          ? isDark
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-emerald-700 bg-emerald-50'
                          : isDark
                            ? 'text-gray-400 hover:text-emerald-400 hover:bg-white/5'
                            : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    isDark
                      ? 'hover:bg-white/5 text-gray-400 hover:text-emerald-400'
                      : 'hover:bg-emerald-50 text-gray-500 hover:text-emerald-700'
                  }`}
                  aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                >
                  {isDark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>
                <Link
                  href="/contact"
                  className="btn btn-primary px-5 py-2.5 text-sm hidden sm:inline-flex"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden relative z-10">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'hover:bg-white/5 text-gray-400 hover:text-emerald-400'
                    : 'hover:bg-emerald-50 text-gray-500 hover:text-emerald-700'
                }`}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <Link href="/contact" className="btn btn-primary px-4 py-2 text-sm">
                Book
              </Link>
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'hover:bg-white/5 text-gray-400 hover:text-emerald-400'
                    : 'hover:bg-emerald-50 text-gray-500 hover:text-emerald-700'
                }`}
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
              >
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
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div
              className={`fixed inset-0 z-40 backdrop-blur-xl ${
                isDark ? 'bg-black/70' : 'bg-black/30'
              }`}
              onClick={closeMenu}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10" onClick={closeMenu}>
              <div
                className={`relative w-full max-w-lg overflow-hidden rounded-3xl ${
                  isDark
                    ? 'bg-[#141414]/95 border border-emerald-500/20 shadow-luxury-lg'
                    : 'bg-white/95 border border-emerald-700/10 shadow-light-lg'
                } backdrop-blur-2xl`}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative p-6 flex flex-col items-center gap-4 text-center">
                  <div className="flex w-full max-w-md flex-col items-center gap-1 px-2 mb-4">
                    <span className={`text-[0.6rem] uppercase tracking-[0.35em] ${
                      isDark ? 'text-emerald-400/60' : 'text-emerald-700/60'
                    }`}>
                      Navigation
                    </span>
                    <h3 className={`text-xl font-semibold tracking-[0.03em] ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Bhaktapur Wellness
                    </h3>
                    <div className="mt-3 flex w-full items-center gap-3">
                      <span className={`h-[1px] flex-1 ${
                        isDark ? 'bg-emerald-500/30' : 'bg-emerald-700/20'
                      }`} />
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        isDark ? 'bg-emerald-500' : 'bg-emerald-700'
                      }`} />
                      <span className={`h-[1px] flex-1 ${
                        isDark ? 'bg-emerald-500/30' : 'bg-emerald-700/20'
                      }`} />
                    </div>
                  </div>

                  {NAV_ITEMS.map((item) => {
                    const isActive = activeId === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex w-full max-w-md flex-col items-center rounded-2xl border px-5 py-4 text-center transition-all duration-300 ${
                          isActive
                            ? isDark
                              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 shadow-primary'
                              : 'bg-emerald-50 border-emerald-700/30 text-emerald-700 shadow-primary'
                            : isDark
                              ? 'border-white/10 text-gray-400 hover:text-white bg-white/5 hover:bg-white/8 hover:border-white/15'
                              : 'border-gray-200 text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-base font-semibold">{item.name}</span>
                        {item.description && (
                          <span className={`text-sm mt-0.5 ${
                            isDark ? 'text-gray-500' : 'text-gray-400'
                          }`}>
                            {item.description}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="relative flex w-full justify-center px-6 pb-6 pt-2">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="btn btn-primary w-full max-w-md text-center"
                  >
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