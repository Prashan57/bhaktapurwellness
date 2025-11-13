// Centralized application constants for SEO, navigation, logos, and contact info.
// Edit values here to change site-wide settings.

export type NavItem = {
  name: string;
  href: string;
};

export const SITE = {
  title: "Bhaktapur Wellness",
  shortTitle: "WindSurf",
  description:
    "Bhaktapur Wellness — experience tranquility, rejuvenation and mindful living.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // Default images inside public/
  logo: "/images/gallery/wellness-retreat.jpg",
  logoCircle: "/images/gallery/wellness-retreat.jpg",
  favicon: "/favicon.ico",
  // favicon: "/images/gallery/bwc.png",
};

export const SEO = {
  defaultTitle: SITE.title,
  titleTemplate: "%s | Bhaktapur Wellness",
  defaultDescription: SITE.description,
  openGraph: {
    image: "/images/gallery/hero.jpg",
    type: "website",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const LOGOS = {
  circle: SITE.logoCircle,
  wordmark: "/images/logo.png",
};

export const CONTACT = {
  email: "support@bhaktapurwellness.com",
  phone: "(+977) 9XXXXXXXXX",
  hours: "Mon–Fri: 9:00–18:00",
  address: "Bhaktapur, Nepal",
};

export const SOCIALS = [
  { name: "facebook", href: "#" },
  { name: "twitter", href: "#" },
  { name: "instagram", href: "#" },
];

export const THEME = {
  default: "light",
  options: ["light", "dark"],
};

export default {
  SITE,
  SEO,
  NAV_ITEMS,
  LOGOS,
  CONTACT,
  SOCIALS,
  THEME,
};
