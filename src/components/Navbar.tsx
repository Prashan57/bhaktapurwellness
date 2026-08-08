"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FACILITIES } from "@/data/facilities";
import { FaChevronDown } from "react-icons/fa";

const NAV_LINKS = [
  { label: "HOME", href: "/#home", active: true },
  { label: "FACILITIES", href: "/#facilities", facilities: true },
  { label: "SERVICES", href: "/#services" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CONTACT", href: "/#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setFacilitiesOpen(true);
  }, []);

  // Sticky nav background once user scrolls past the fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= FIXED TOP BAR: LOGO + HAMBURGER ================= */}
      <div
        className={`fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 sm:px-12 md:px-16 transition-all duration-500 ${
          scrolled
            ? "py-3.5 bg-[#041a1b]/10 backdrop-blur-md shadow-lg shadow-black/20"
            : "pt-6 md:pt-10 pb-0 bg-transparent"
        }`}
      >
        {/* Brand Logo Mark */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Bhaktapur Wellness — Home"
          className="flex items-center gap-3 group"
        >
          <div className="h-9 w-9 rounded-full overflow-hidden relative border border-[#fdd693]/60 shadow-md bg-black/30 backdrop-blur-md">
            <Image
              src="/images/gallery/bw.jpg"
              alt="Bhaktapur Wellness Logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[#fdd693] drop-shadow-md transition-colors group-hover:text-[#fff0d0]">
              Bhaktapur
            </span>
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-white drop-shadow-md">
              Wellness
            </span>
          </div>
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="hero-menu"
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#fdd693]/50 bg-black/30 backdrop-blur-md text-[#fdd693] transition-all duration-300 hover:bg-[#fdd693] hover:text-[#0a4243] hover:shadow-[0_0_24px_rgba(253,214,147,0.35)]"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ================= HAMBURGER SLIDE-OUT MENU ================= */}
      <div
        id="hero-menu"
        className={`fixed inset-0 z-50 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Panel — full-screen on mobile, ~30% slide-out from right on desktop */}
        <div
          className={`absolute top-0 right-0 h-full w-full md:w-[30%] md:min-w-[320px] bg-[#0a4243]/95 backdrop-blur-xl border-l border-[#fdd693]/15 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="absolute top-6 right-6 md:top-8 md:right-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#fdd693]/50 bg-white/5 text-[#fdd693] transition-all duration-300 hover:bg-[#fdd693] hover:text-[#0a4243]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* Menu content */}
          <div className="relative h-full flex flex-col items-center md:items-start justify-start gap-6 px-8 md:px-10 overflow-y-auto py-8">
            <div className="flex w-full flex-col items-center md:items-start gap-5 my-auto">
              <nav className="flex flex-col items-center md:items-start gap-3 sm:gap-3.5">
              {NAV_LINKS.map((link, i) =>
                link.facilities ? (
                  <div
                    key={link.label}
                    className={`relative flex flex-col items-center md:items-start transition-all duration-500 ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{
                      transitionDelay: menuOpen ? `${200 + i * 75}ms` : "0ms",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setFacilitiesOpen((prev) => !prev)}
                      aria-expanded={facilitiesOpen}
                      className="group relative flex items-center gap-3 text-lg sm:text-xl md:text-xl lg:text-2xl font-bold uppercase tracking-[0.18em] text-white/80 transition-all duration-500 hover:text-[#fdd693] focus:outline-none focus-visible:text-[#fdd693]"
                    >
                      {link.label}
                      <FaChevronDown
                        className={`h-4 w-4 text-[#fdd693] transition-transform duration-300 ${
                          facilitiesOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute left-0 -bottom-1 h-px bg-[#fdd693] transition-transform duration-300 origin-left ${
                          facilitiesOpen
                            ? "w-full scale-x-100"
                            : "w-full scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>

                    {/* Facilities submenu */}
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        menuOpen && facilitiesOpen
                          ? "mt-2.5 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="w-full min-w-[12rem] space-y-0.5 border-l border-[#fdd693]/20 pl-4 sm:pl-5">
                          <li>
                            <Link
                              href="/facilities"
                              onClick={closeMenu}
                              className="flex items-center gap-2.5 py-1 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-[#fdd693]"
                            >
                              All Facilities
                            </Link>
                          </li>
                          {FACILITIES.map((facility, fi) => {
                            const FacilityIcon = facility.icon;
                            return (
                              <li key={facility.slug}>
                                <Link
                                  href={`/facilities/${facility.slug}`}
                                  onClick={closeMenu}
                                  className="group/fac flex items-center gap-3 py-1 text-xs sm:text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors duration-300 hover:text-[#fdd693]"
                                  style={{
                                    transitionDelay: `${fi * 20}ms`,
                                  }}
                                >
                                  <FacilityIcon className="h-3.5 w-3.5 shrink-0 text-[#fdd693]/70 transition-transform duration-300 group-hover/fac:scale-110" />
                                  {facility.shortName}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className={`group relative text-lg sm:text-xl md:text-xl lg:text-2xl font-bold uppercase tracking-[0.18em] transition-all duration-500 ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    } ${
                      link.active
                        ? "text-[#fdd693]"
                        : "text-white/80 hover:text-[#fdd693]"
                    }`}
                    style={{
                      transitionDelay: menuOpen ? `${200 + i * 75}ms` : "0ms",
                    }}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-[#fdd693] transition-transform duration-300 origin-left ${
                        link.active
                          ? "w-full scale-x-100"
                          : "w-full scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                ),
              )}
            </nav>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className={`mt-3 inline-flex items-center justify-center rounded-full border-2 border-[#fdd693] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#fdd693] transition-all duration-500 hover:bg-[#fdd693] hover:text-[#0a4243] hover:shadow-[0_0_24px_rgba(253,214,147,0.35)] ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen
                  ? `${200 + NAV_LINKS.length * 75}ms`
                  : "0ms",
              }}
            >
              Book Peace Now
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
