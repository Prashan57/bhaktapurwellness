// Spacing rhythm: section padding, container widths, card padding.
// Import for consistency instead of ad-hoc py-/px- values.

export const SPACING = {
  sectionY: "py-20 md:py-24",
  sectionGap: "mb-12 md:mb-14",
  container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  containerNarrow: "mx-auto w-full max-w-4xl px-4 sm:px-6",
  cardPadding: "p-7 sm:p-8",
  cardPaddingLg: "p-7 sm:p-9",
  gridGap: "gap-5 md:gap-6",
  formGap: "space-y-5",
} as const;
