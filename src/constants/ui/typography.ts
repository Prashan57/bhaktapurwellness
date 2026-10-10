// Typographic scale + weights. Sections should use these steps
// instead of inventing new sizes per file.

export const TYPOGRAPHY = {
  fontFamily: {
    sans: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
  },
  // Display / section scale
  displayXl: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  displayLg: "text-4xl sm:text-5xl md:text-6xl",
  sectionTitle: "text-3xl md:text-5xl",
  sectionSubtitle: "text-xl sm:text-2xl",
  cardTitle: "text-lg sm:text-xl",
  body: "text-sm sm:text-base",
  bodySm: "text-xs sm:text-sm",
  caption: "text-[0.65rem]",
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.25em]",
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.05,
    snug: 1.25,
    relaxed: 1.65,
  },
} as const;
