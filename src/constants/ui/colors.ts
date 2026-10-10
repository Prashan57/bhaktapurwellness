// Single source of truth for brand + semantic color tokens.
// Values mirror the CSS variables in globals.css so Tailwind classes
// and raw CSS stay in sync. Import these instead of hardcoding hex.

export const COLORS = {
  brand: {
    tealDarkest: "#041a1b",
    tealDeep: "#062324",
    teal: "#0a4243",
    tealMid: "#185556",
    tealLight: "#2e7c7e",
    mint: "#4ba1a3",
    aqua: "#7fe0c8",
    gold: "#fdd693",
    goldWarm: "#f3be6a",
    goldLight: "#fff0d0",
  },
  surface: {
    page: "#041a1b",
    raised: "#062324",
    overlay: "#0a4243",
    card: "#062324",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255,255,255,0.85)",
    muted: "#cbd5e1", // slate-300 — minimum body contrast on dark teal
    faint: "#94a3b8", // slate-400 — decorative / meta only, never body copy
    accent: "#fdd693",
    accentStrong: "#fff0d0",
    onAccent: "#0a4243",
  },
  border: {
    subtle: "rgba(253,214,147,0.15)",
    default: "rgba(253,214,147,0.22)",
    strong: "rgba(253,214,147,0.4)",
    accent: "#fdd693",
  },
  state: {
    success: "#7fe0c8",
    warning: "#f3be6a",
    error: "#fda4af",
    info: "#7dd3fc",
  },
} as const;

export const CSS_VARS = {
  radiusLg: "var(--radius-lg)",
  radiusMd: "var(--radius-md)",
  shadowSoft: "var(--shadow-soft)",
  shadowStrong: "var(--shadow-strong)",
  transitionSnappy: "var(--transition-snappy)",
} as const;
