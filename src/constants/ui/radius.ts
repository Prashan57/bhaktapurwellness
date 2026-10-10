export const RADIUS = {
  sm: "0.75rem", // 12px — inputs, small badges
  md: "1.25rem", // 20px — cards (var(--radius-md))
  lg: "1.75rem", // 28px — panels (var(--radius-lg))
  xl: "2rem", // 32px — hero cards, pricing
  pill: "9999px",
} as const;

export const SHADOWS = {
  soft: "0 16px 40px -15px rgba(10, 66, 67, 0.65)",
  strong: "0 25px 70px -20px rgba(10, 66, 67, 0.85)",
  cardInset:
    "inset 0 1px 0 0 rgba(253,214,147,0.08), 0 18px 40px -18px rgba(0,0,0,0.7)",
  pop: "0 24px 70px rgba(253,214,147,0.16)",
} as const;

export const Z_INDEX = {
  header: 40,
  dropdown: 45,
  overlay: 50,
  modal: 60,
  toast: 70,
  skipLink: 100,
} as const;
