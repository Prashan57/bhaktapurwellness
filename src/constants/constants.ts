// Centralized application constants for SEO, navigation, logos, and contact info.
// Edit values here to change site-wide settings.

export type NavItem = {
  name: string;
  href: string;
};

export type WellnessPillar = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
};

export const SITE = {
  title: "Bhaktapur Wellness",
  shortTitle: "Bhaktapur Wellness",
  description:
    "Bhaktapur Wellness — Your ultimate sanctuary combining high-performance Gym, Boxing Ring, Heated Swimming Pool, Luxury Spa, and Organic Restaurant.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // Default images inside public/
  logo: "/images/gallery/bw.jpg",
  logoCircle: "/images/gallery/bw.jpg",
  favicon: "/favicon.ico",
};

export const SEO = {
  defaultTitle: SITE.title,
  titleTemplate: "%s | Bhaktapur Wellness Complex",
  defaultDescription: SITE.description,
  openGraph: {
    image: "/images/gallery/hero.jpg",
    type: "website",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const WELLNESS_PILLARS: WellnessPillar[] = [
  {
    id: "gym",
    title: "State-of-the-Art Gym",
    subtitle: "Strength & Functional Fitness",
    icon: "🏋️‍♂️",
    tagline: "Empower Your Peak Performance",
    description:
      "Equipped with premium resistance machines, free weight zones, cardio suites, and certified personal trainers for every fitness level.",
    image: "/images/gallery/zumba.jpg",
    highlights: ["Biometric Tracking", "Custom Training Plans", "Cardio & Heavy Lift Zones"],
  },
  {
    id: "boxing",
    title: "Pro Boxing Studio",
    subtitle: "Combat Sports & High-Intensity Conditioning",
    icon: "🥊",
    tagline: "Unleash Strength, Agility & Focus",
    description:
      "Full-size sparring ring, heavy bags, speed bags, and tactical boxing programs led by seasoned martial arts coaches.",
    image: "/images/gallery/qwe.jpg",
    highlights: ["Regulation Ring", "Heavy Bag Alley", "Personal Sparring Sessions"],
  },
  {
    id: "pool",
    title: "Heated Swimming Pool",
    subtitle: "Aquatic Fitness & Hydro-Relaxation",
    icon: "🏊‍♂️",
    tagline: "Refresh & Rejuvenate in Crystal Waters",
    description:
      "Temperature-controlled lap pool featuring dedicated swim lanes, aqua-aerobics sessions, and poolside lounge comfort.",
    image: "/images/gallery/outdoor-activity.jpg",
    highlights: ["Year-Round Heated Water", "Swim Coaching", "Sun Loungers & Deck"],
  },
  {
    id: "spa",
    title: "Luxury Spa & Sauna",
    subtitle: "Holistic Healing & Restorative Rituals",
    icon: "💆‍♀️",
    tagline: "Restore Harmony to Body & Mind",
    description:
      "Traditional Himalayan herbal steam, infrared sauna, deep tissue therapy, and serene treatment suites for complete renewal.",
    image: "/images/gallery/spa-treatment.jpg",
    highlights: ["Infrared & Herbal Steam", "Therapeutic Massage", "Private Recovery Rooms"],
  },
  {
    id: "restaurant",
    title: "Organic Restaurant & Bar",
    subtitle: "Nutrient-Dense Gourmet Dining",
    icon: "🥗",
    tagline: "Fuel Your Body with Mindful Cuisine",
    description:
      "Chef-crafted farm-to-table menus, fresh cold-pressed juices, protein smoothie bar, and wholesome gourmet meals tailored to your goals.",
    image: "/images/gallery/healthy-food.jpg",
    highlights: ["Farm-to-Table Fresh", "Custom Meal Prep Options", "Cold-Pressed Juices"],
  },
];

export const LOGOS = {
  circle: SITE.logoCircle,
  wordmark: "/images/gallery/bw.jpg",
};

export const CONTACT = {
  email: "support@bhaktapurwellness.com",
  phone: "(+977) 980-0000000",
  hours: "Mon–Sun: 6:00 AM – 10:00 PM",
  address: "Bhaktapur, Nepal",
};

export const SOCIALS = [
  { name: "facebook", href: "#" },
  { name: "instagram", href: "#" },
  { name: "youtube", href: "#" },
];

export const THEME = {
  default: "light",
  options: ["light", "dark"],
};

export default {
  SITE,
  SEO,
  NAV_ITEMS,
  WELLNESS_PILLARS,
  LOGOS,
  CONTACT,
  SOCIALS,
  THEME,
};

