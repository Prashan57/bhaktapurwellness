"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";

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
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [isPointerActive, setIsPointerActive] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] pt-4 flex justify-center px-2 sm:px-4">
      <div className="relative w-[98%] max-w-6xl">
        <div
          className={`pointer-events-none absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? "opacity-100" : "opacity-90"
          }`}
        >
          <div className="absolute inset-0 rounded-2xl bg-white/5 shadow-elevated" />
          <div className="absolute inset-0 rounded-2xl border border-white/15 backdrop-blur-sm" />
          <div className="absolute inset-0 rounded-2xl bg-white/[0.02]" />
        </div>

        <nav className="relative w-full">
          <div
            className="relative flex w-full items-center justify-between gap-4 sm:gap-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-elevated text-white/80 px-4 sm:px-7 py-3 sm:py-4 overflow-hidden"
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                isPointerActive ? "opacity-80" : "opacity-0"
              }`}
              style={{
                background: `radial-gradient(220px circle at ${pointerPosition.x}px ${pointerPosition.y}px, hsl(var(--primary)/0.35), transparent 70%)`,
              }}
            />

            <Link href="/" className="flex items-center gap-3" aria-label="WindSurf homepage">
              <div className="h-11 w-11 rounded-full overflow-hidden relative bg-background/30 shadow-elevated">
                <Image
                  src="/images/gallery/bw.jpg"
                  alt="WindSurf logo (temporary)"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-[0.7rem] uppercase tracking-[0.45em] text-foreground/100 font-semibold">
                  Bhaktapur
                </span>
                <span className="text-xl font-semibold tracking-[0.08em] bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/70 bg-clip-text text-transparent">
                  Wellness
                </span>
              </div>
              <span className="sr-only">WindSurf</span>
            </Link>

            <div className="hidden md:flex items-center gap-9">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive = activeId === link.href.replace("#", "");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group relative text-sm font-medium transition-colors tracking-wide ${
                        isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
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
                  className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 3.25c-1.158 0-1.737 0-2.207.181a3 3 0 00-1.362 1.055c-.272.39-.41.892-.685 1.897l-.177.648c-.196.717-.294 1.076-.304 1.415a3 3 0 001.963 2.94c.315.117.687.117 1.431.117 1.318 0 1.977 0 2.538-.185a3 3 0 001.897-1.896c.185-.561.185-1.22.185-2.538 0-.744 0-1.116-.117-1.431a3 3 0 00-2.94-1.963c-.339.01-.698.108-1.415.304l-.648.177c-1.005.275-1.506.413-1.897.685a3 3 0 00-1.055 1.362c-.181.47-.181 1.049-.181 2.207 0 1.894 0 2.84.37 3.563a4.5 4.5 0 003.955 2.462c1.12 0 2.02-.392 3.82-1.177 1.8-.784 2.7-1.177 3.21-1.86a4.5 4.5 0 00.694-3.956c-.21-.803-.757-1.71-1.849-3.523C15.983 4.074 15.59 3.174 14.807 2.47a4.5 4.5 0 00-2.807-1.03z" fill="currentColor" opacity="0.85" />
                      <path
                        d="M8.5 17.75l.75-.75M6 14.5l1-.25M15.5 18.5l-.25-1M18.25 15.5l-.75-.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.55"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <circle cx="12" cy="12" r="4.25" fill="currentColor" opacity="0.2" />
                      <circle cx="12" cy="12" r="4.25" />
                      <path
                        d="M12 3.25v1.5M12 19.25v1.5M4.75 12h1.5M17.75 12h1.5M6.404 6.404l1.06 1.06M16.536 16.536l1.06 1.06M6.404 17.596l1.06-1.06M16.536 7.464l1.06-1.06"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
                <a href="#contact" className="btn btn-primary px-5 py-2 text-sm">
                  Book a Visit
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3.25c-1.158 0-1.737 0-2.207.181a3 3 0 00-1.362 1.055c-.272.39-.41.892-.685 1.897l-.177.648c-.196.717-.294 1.076-.304 1.415a3 3 0 001.963 2.94c.315.117.687.117 1.431.117 1.318 0 1.977 0 2.538-.185a3 3 0 001.897-1.896c.185-.561.185-1.22.185-2.538 0-.744 0-1.116-.117-1.431a3 3 0 00-2.94-1.963c-.339.01-.698.108-1.415.304l-.648.177c-1.005.275-1.506.413-1.897.685a3 3 0 00-1.055 1.362c-.181.47-.181 1.049-.181 2.207 0 1.894 0 2.84.37 3.563a4.5 4.5 0 003.955 2.462c1.12 0 2.02-.392 3.82-1.177 1.8-.784 2.7-1.177 3.21-1.86a4.5 4.5 0 00.694-3.956c-.21-.803-.757-1.71-1.849-3.523C15.983 4.074 15.59 3.174 14.807 2.47a4.5 4.5 0 00-2.807-1.03z" fill="currentColor" opacity="0.85" />
                    <path
                      d="M8.5 17.75l.75-.75M6 14.5l1-.25M15.5 18.5l-.25-1M18.25 15.5l-.75-.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.55"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <circle cx="12" cy="12" r="4.25" fill="currentColor" opacity="0.2" />
                    <circle cx="12" cy="12" r="4.25" />
                    <path
                      d="M12 3.25v1.5M12 19.25v1.5M4.75 12h1.5M17.75 12h1.5M6.404 6.404l1.06 1.06M16.536 16.536l1.06 1.06M6.404 17.596l1.06-1.06M16.536 7.464l1.06-1.06"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
              <a href="#contact" className="btn btn-primary px-4 py-2 text-sm">
                Book a Visit
              </a>
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground"
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
                    strokeWidth="1.6"
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
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {menuOpen ? (
          <div className="md:hidden" id="mobile-menu">
            <div
              className="fixed inset-0 z-40 bg-slate-900/45 dark:bg-slate-950/70 backdrop-blur-xl transition-opacity"
              onClick={closeMenu}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
              <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/18 dark:border-white/12 bg-white/10 dark:bg-white/5 backdrop-blur-[18px] shadow-elevated animate-menu-pop">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-[220px] bg-gradient-to-b from-white/25 via-primary/10 to-transparent blur-2xl" />
                <div className="relative p-6 flex flex-col items-center gap-5 text-center text-slate-800 dark:text-white/80">
                  <div className="flex w-full max-w-md flex-col items-center gap-1 px-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-500 dark:text-white/50">
                      Menu
                    </span>
                    <h3 className="text-lg font-semibold tracking-[0.08em] text-slate-800 dark:text-white">
                      Bhaktapur Wellness
                    </h3>
                    <div className="mt-3 flex w-full items-center gap-3">
                      <span className="h-[1.25px] flex-1 rounded-full bg-gradient-to-r from-transparent via-primary/60 to-primary/30 dark:via-primary/45 dark:to-primary/25 shadow-[0_0_18px_rgba(56,189,248,0.45)]" />
                      <span className="h-[1.25px] flex-1 rounded-full bg-gradient-to-l from-transparent via-primary/60 to-primary/30 dark:via-primary/45 dark:to-primary/25 shadow-[0_0_18px_rgba(56,189,248,0.45)]" />
                    </div>
                  </div>
                  {navLinks.map((link) => {
                    const isActive = activeId === link.href.replace("#", "");
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick(link.href)}
                        className={`flex w-full max-w-md flex-col items-center rounded-2xl border px-4 py-3 text-center transition-all backdrop-blur-sm ${
                          isActive
                            ? "bg-primary/15 border-primary/40 text-primary shadow-[0_18px_40px_-24px_rgba(56,189,248,0.55)]"
                            : "border-white/25 text-slate-700 hover:text-slate-900 bg-white/30 hover:bg-white/45 dark:border-white/12 dark:text-white/75 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/8 hover:shadow-[0_22px_45px_-28px_rgba(15,23,42,0.55)]"
                        }`}
                      >
                        <span className="text-base font-semibold">{link.name}</span>
                        <span className="text-sm text-slate-500 dark:text-white/60">
                          {link.description}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="relative flex w-full justify-center px-6 pb-6 pt-2">
                  <a
                    href="#contact"
                    onClick={handleNavClick("#contact")}
                    className="btn btn-primary w-full max-w-md text-center shadow-[0_20px_45px_-20px_rgba(56,189,248,0.65)]"
                  >
                    Reserve a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
