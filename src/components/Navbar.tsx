"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home", description: "Start your journey" },
  {
    name: "Services",
    href: "#services",
    description: "Signature treatments",
  },
  {
    name: "Gallery",
    href: "#gallery",
    description: "Retreat moments",
  },
  {
    name: "Contact",
    href: "#contact",
    description: "Reserve your spot",
  },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "services", "gallery", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (href: string) => () => {
      if (href.startsWith("#")) {
        closeMenu();
      }
    },
    [closeMenu]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)] border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="WindSurf homepage"
        >
          <div className="h-11 w-11 rounded-full overflow-hidden relative bg-background/30 shadow-elevated">
            <Image
              src="/images/gallery/bw.jpg"
              alt="WindSurf logo (temporary)"
              fill
              sizes="40px"
              className="object-cover"
              priority={true}
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm uppercase tracking-[0.3em] text-foreground/50">
              Bhaktapur
            </span>
            <span className="text-lg font-semibold text-foreground">
              Wellness
            </span>
          </div>
          <span className="sr-only">WindSurf</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors tracking-wide ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-4 6a1 1 0 100 2h.01a1 1 0 100-2H10zM4 11a1 1 0 100-2H3a1 1 0 000 2h1zm13-1a1 1 0 01-1-1v-.01a1 1 0 10-2 0V9a1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <a href="#contact" className="btn btn-primary px-5 py-2 text-sm">
              Book a Visit
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-4 6a1 1 0 100 2h.01a1 1 0 100-2H10zM4 11a1 1 0 100-2H3a1 1 0 000 2h1zm13-1a1 1 0 01-1-1v-.01a1 1 0 10-2 0V9a1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen ? (
        <div className="md:hidden" id="mobile-menu">
          <div className="fixed inset-0 z-40 bg-foreground/60 backdrop-blur-sm" onClick={closeMenu} />
          <div className="absolute top-full left-0 right-0 z-50 px-4 pb-6">
            <div className="rounded-3xl bg-background/95 border border-border/40 shadow-elevated-strong overflow-hidden animate-menu-pop">
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = activeId === link.href.replace("#", "");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick(link.href)}
                      className={`flex flex-col rounded-2xl border border-transparent px-4 py-3 transition-all ${
                        isActive
                          ? "bg-primary/10 border-primary/30 text-primary"
                          : "hover:bg-foreground/5 text-foreground"
                      }`}
                    >
                      <span className="text-base font-semibold">{link.name}</span>
                      <span className="text-sm text-foreground/60">
                        {link.description}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  onClick={handleNavClick("#contact")}
                  className="btn btn-primary w-full"
                >
                  Reserve a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
