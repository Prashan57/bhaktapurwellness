"use client";

import { COMMON_COPY, NAV_COPY } from "@/constants/copy";
import { FACILITIES } from "@/data/facilities";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Facilities", href: "/#facilities", facilities: true },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Navbar — floating glassmorphic pill navigation with magnetic hover
 * and an animated mobile menu. Same links, dropdown, and booking CTA;
 * upgraded visuals only.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopFacilitiesOpen, setDesktopFacilitiesOpen] = useState(false);
  const facilitiesDropdownRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const reduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setFacilitiesOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes topmost layer; focus the panel when the menu opens.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDesktopFacilitiesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      menuPanelRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    }, 60);
    return () => {
      document.body.style.overflow = original;
      window.clearTimeout(t);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        facilitiesDropdownRef.current &&
        !facilitiesDropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopFacilitiesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const elevated = scrolled || menuOpen || desktopFacilitiesOpen;

  return (
    <>
      {/* Floating glass pill — centered, pointer-events pass through outside */}
      <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
        <motion.header
          initial={reduceMotion ? false : { y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto w-full max-w-[76rem] rounded-full border transition-all duration-300 ${
            elevated
              ? "glass-strong border-[#fdd693]/20 shadow-lg shadow-black/30"
              : "border-white/10 bg-black/10 backdrop-blur-md"
          }`}
        >
          {/* Gold top highlight */}
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent transition-opacity duration-300 ${
              elevated
                ? "via-[#fdd693]/50 opacity-100"
                : "via-white/20 opacity-60"
            } to-transparent`}
          />
          <div className="flex h-14 items-center justify-between px-2.5 md:h-16 md:px-4">
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Bhaktapur Wellness — Home"
              className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]"
            >
              <span className="relative block h-9 w-9 overflow-hidden rounded-full border border-[#fdd693]/60 bg-black/30 shadow-md transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10">
                <Image
                  src="/images/gallery/bw.jpg"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[#fdd693] transition-colors group-hover:text-[#fff0d0]">
                  Bhaktapur
                </span>
                <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">
                  Wellness
                </span>
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 lg:flex"
            >
              {NAV_LINKS.map((link) =>
                link.facilities ? (
                  <div
                    key={link.label}
                    className="relative"
                    ref={facilitiesDropdownRef}
                  >
                    <button
                      type="button"
                      onClick={() => setDesktopFacilitiesOpen((prev) => !prev)}
                      aria-expanded={desktopFacilitiesOpen}
                      aria-haspopup="true"
                      className="magnetic group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 hover:bg-white/5 hover:text-[#fdd693] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]"
                    >
                      {link.label}
                      <FaChevronDown
                        aria-hidden="true"
                        className={`h-3 w-3 text-[#fdd693] transition-transform duration-300 ${
                          desktopFacilitiesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full mt-3 w-max max-w-[calc(100vw-3rem)] -translate-x-1/2 origin-top rounded-3xl border border-[#fdd693]/15 bg-[#0a4243]/80 p-2 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
                        desktopFacilitiesOpen
                          ? "pointer-events-auto scale-100 opacity-100"
                          : "pointer-events-none scale-95 opacity-0"
                      }`}
                    >
                      <Link
                        href="/facilities"
                        onClick={() => setDesktopFacilitiesOpen(false)}
                        className="block rounded-2xl px-3 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition-colors hover:bg-white/5 hover:text-[#fdd693]"
                      >
                        {COMMON_COPY.allFacilities}
                      </Link>
                      <div
                        className="my-1 h-px bg-white/10"
                        aria-hidden="true"
                      />
                      {FACILITIES.map((facility) => {
                        const FacilityIcon = facility.icon;
                        return (
                          <Link
                            key={facility.slug}
                            href={`/facilities/${facility.slug}`}
                            onClick={() => setDesktopFacilitiesOpen(false)}
                            className="group/fac flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:bg-white/5 hover:text-[#fdd693]"
                          >
                            <FacilityIcon
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0 text-[#fdd693]/70 transition-transform duration-300 group-hover/fac:scale-110"
                            />
                            {facility.shortName}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="magnetic rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 hover:bg-white/5 hover:text-[#fdd693] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Link
                href="/#contact"
                className="magnetic ml-2 inline-flex items-center rounded-full border border-[#fdd693] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#fdd693] transition-all duration-300 hover:bg-[#fdd693] hover:text-[#0a4243] hover:shadow-[0_0_20px_rgba(253,214,147,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]"
              >
                {COMMON_COPY.bookPeace}
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? NAV_COPY.closeMenu : NAV_COPY.openMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#fdd693]/50 bg-black/30 text-[#fdd693] backdrop-blur-md transition-all duration-300 hover:bg-[#fdd693] hover:text-[#0a4243] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693] lg:hidden"
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
                  aria-hidden="true"
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
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile / tablet floating glass menu */}
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-40 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
        {...(menuOpen ? {} : { inert: true })}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuPanelRef}
              initial={
                reduceMotion ? false : { opacity: 0, y: -20, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -20, scale: 0.98 }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-x-3 top-20 sm:top-24 lg:hidden"
            >
              <div className="glass-strong rounded-3xl border border-[#fdd693]/15 p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#fdd693]">
                    Menu
                  </span>
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label={NAV_COPY.closeMenu}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#fdd693]/50 bg-white/5 text-[#fdd693] transition-colors hover:bg-[#fdd693] hover:text-[#0a4243] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>

                <nav
                  aria-label="Mobile"
                  className="max-h-[55vh] overflow-y-auto"
                >
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) =>
                      link.facilities ? (
                        <motion.li
                          key={link.label}
                          initial={
                            reduceMotion ? false : { opacity: 0, x: -20 }
                          }
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: reduceMotion ? 0 : index * 0.06,
                          }}
                          className="rounded-2xl"
                        >
                          <button
                            type="button"
                            onClick={() => setFacilitiesOpen((prev) => !prev)}
                            aria-expanded={facilitiesOpen}
                            className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-base font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/5 hover:text-[#fdd693]"
                          >
                            {link.label}
                            <FaChevronDown
                              aria-hidden="true"
                              className={`h-4 w-4 text-[#fdd693] transition-transform duration-300 ${facilitiesOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          <div
                            className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              facilitiesOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <ul className="ml-3 space-y-0.5 border-l border-[#fdd693]/20 py-1 pl-4">
                                <li>
                                  <Link
                                    href="/facilities"
                                    onClick={closeMenu}
                                    tabIndex={
                                      menuOpen && facilitiesOpen ? 0 : -1
                                    }
                                    className="block rounded-lg px-2 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[#fdd693]"
                                  >
                                    {COMMON_COPY.allFacilities}
                                  </Link>
                                </li>
                                {FACILITIES.map((facility) => {
                                  const FacilityIcon = facility.icon;
                                  return (
                                    <li key={facility.slug}>
                                      <Link
                                        href={`/facilities/${facility.slug}`}
                                        onClick={closeMenu}
                                        tabIndex={
                                          menuOpen && facilitiesOpen ? 0 : -1
                                        }
                                        className="flex items-center gap-3 rounded-lg px-2 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[#fdd693]"
                                      >
                                        <FacilityIcon
                                          aria-hidden="true"
                                          className="h-4 w-4 shrink-0 text-[#fdd693]/70"
                                        />
                                        {facility.shortName}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </motion.li>
                      ) : (
                        <motion.li
                          key={link.label}
                          initial={
                            reduceMotion ? false : { opacity: 0, x: -20 }
                          }
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: reduceMotion ? 0 : index * 0.06,
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            tabIndex={menuOpen ? 0 : -1}
                            className="block rounded-2xl px-3 py-3 text-base font-bold uppercase tracking-[0.14em] text-white/85 transition-colors hover:bg-white/5 hover:text-[#fdd693]"
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ),
                    )}
                  </ul>

                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className="mt-6 flex items-center justify-center rounded-full border-2 border-[#fdd693] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#fdd693] transition-colors hover:bg-[#fdd693] hover:text-[#0a4243]"
                  >
                    {COMMON_COPY.bookPeace}
                  </Link>
                  <p className="mt-6 text-center text-xs text-slate-400">
                    Open daily · 6:00 AM – 10:00 PM · Bhaktapur, Nepal
                  </p>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;
