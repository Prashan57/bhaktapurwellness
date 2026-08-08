import type { IconType } from "react-icons";
import {
  FaAward,
  FaBolt,
  FaClock,
  FaDumbbell,
  FaHandHoldingHeart,
  FaHeart,
  FaLeaf,
  FaShieldAlt,
  FaSpa,
  FaSwimmer,
  FaUmbrellaBeach,
  FaUserTie,
  FaUsers,
  FaUtensils,
  FaWater,
} from "react-icons/fa";
import {
  GiBoxingGlove,
  GiForkKnifeSpoon,
  GiFruitBowl,
  GiHotSurface,
  GiLotus,
  GiMeditation,
  GiPunch,
  GiScissors,
  GiTreeBranch,
} from "react-icons/gi";
import { MdSpa, MdWaves } from "react-icons/md";

export type FacilityFeature = {
  icon: IconType;
  title: string;
  description: string;
};

export type FacilityStat = {
  value: string;
  label: string;
};

export type Facility = {
  slug: string;
  shortName: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: IconType;
  image: string;
  gallery: string[];
  highlights: string[];
  features: FacilityFeature[];
  stats: FacilityStat[];
  hours: string;
};

// Single source of truth for every facility. Used by the navbar dropdown,
// the facility overview page, and each dedicated facility page.
export const FACILITIES: Facility[] = [
  {
    slug: "restaurant",
    shortName: "Restaurant",
    name: "Organic Restaurant",
    tag: "Farm-to-Table",
    tagline: "Nourish, Mindfully",
    description:
      "Seasonal Nepali and international dishes crafted from local organic produce — nourishment that celebrates mindful eating.",
    longDescription:
      "Every plate tells the story of the valley. Our organic restaurant pairs the freshest local produce with skilled, mindful cooking to create seasonal Nepali and international dishes that fuel performance and feed the soul. From a post-workout juice bar to relaxed al-fresco dining beneath open skies, this is food that celebrates where it comes from — and how it makes you feel.",
    icon: FaUtensils,
    image: "/images/gallery/healthy-food.jpg",
    gallery: [
      "/images/gallery/healthy-food.jpg",
      "/images/gallery/mindful-dining.jpg",
      "/images/gallery/wellness-retreat-real.jpg",
    ],
    highlights: [
      "Seasonal farm-to-table menu",
      "Post-workout nutrition & juice bar",
      "Relaxed al-fresco dining ambience",
    ],
    features: [
      {
        icon: FaLeaf,
        title: "Farm-to-Table",
        description:
          "Local organic produce, seasonal menus, and honest cooking from farm to fork.",
      },
      {
        icon: GiFruitBowl,
        title: "Juice & Smoothie Bar",
        description:
          "Cold-pressed juices and protein smoothies made to order for daily fuel.",
      },
      {
        icon: GiForkKnifeSpoon,
        title: "Performance Plates",
        description:
          "Chef-built meals tailored to your training and recovery goals.",
      },
      {
        icon: GiTreeBranch,
        title: "Al-Fresco Dining",
        description:
          "Breathe the valley air on our serene outdoor dining terrace.",
      },
    ],
    stats: [
      { value: "100%", label: "Organic Sourcing" },
      { value: "Daily", label: "Seasonal Menus" },
      { value: "12+", label: "Juice Combos" },
    ],
    hours: "7:00 AM – 10:00 PM · Daily",
  },
  {
    slug: "gym",
    shortName: "Gym",
    name: "High-Performance Gym",
    tag: "Strength & Cardio",
    tagline: "Train Like an Athlete",
    description:
      "A fully equipped training floor where strength, endurance, and technique meet — ready for everything from heavy lifts to high-intensity circuits.",
    longDescription:
      "Our high-performance gym is built for serious progress at every level. From dedicated heavy-lifting platforms and full free-weight zones to a comprehensive cardio suite, every corner of the floor is engineered to help you move better, recover faster, and feel unstoppable. Certified personal trainers are always on hand to sharpen your form, structure your program, and keep you accountable toward your goals.",
    icon: FaDumbbell,
    image: "/images/gallery/fitness-arena.jpg",
    gallery: [
      "/images/gallery/fitness-arena.jpg",
      "/images/gallery/zumba.jpg",
      "/images/gallery/outdoor-trail.jpg",
    ],
    highlights: [
      "State-of-the-art strength & cardio equipment",
      "Certified personal trainers on the floor",
      "Dedicated functional & HIIT zone",
    ],
    features: [
      {
        icon: FaDumbbell,
        title: "Strength Zone",
        description:
          "Racks, platforms, and free weights for heavy lifting and progressive overload.",
      },
      {
        icon: FaHeart,
        title: "Cardio Suite",
        description:
          "Treadmills, bikes, and rowers with heart-rate tracking for endurance work.",
      },
      {
        icon: FaBolt,
        title: "Functional & HIIT",
        description:
          "Turf, sleds, and battle ropes in a dedicated explosive-conditioning space.",
      },
      {
        icon: FaUserTie,
        title: "Personal Training",
        description:
          "One-on-one certified coaching, program design, and progress tracking.",
      },
    ],
    stats: [
      { value: "40+", label: "Training Stations" },
      { value: "12", label: "Certified Coaches" },
      { value: "Daily", label: "Group Classes" },
    ],
    hours: "6:00 AM – 10:00 PM · Daily",
  },
  {
    slug: "boxing",
    shortName: "Boxing",
    name: "Pro Boxing Studio",
    tag: "Boxing & Martial Arts",
    tagline: "Unleash Your Fighter",
    description:
      "Train like a fighter in our dedicated boxing studio — regulation sparring ring, heavy bags, and coached sessions for every level.",
    longDescription:
      "Step into the ring and channel your intensity into craft. Our dedicated boxing studio features a regulation-size sparring ring, a heavy bag alley, and floor-to-ceiling striking stations, with programs led by seasoned martial arts coaches. Whether you are stepping in for your first class or preparing for a fight, every session builds the discipline, conditioning, and confidence that boxing is famous for.",
    icon: GiBoxingGlove,
    image: "/images/gallery/fitness-arena.jpg",
    gallery: [
      "/images/gallery/fitness-arena.jpg",
      "/images/gallery/zumba.jpg",
      "/images/gallery/himalayan-sanctuary.jpg",
    ],
    highlights: [
      "Regulation-size sparring ring",
      "Heavy bags, pads & striking stations",
      "Beginner to professional coaching",
    ],
    features: [
      {
        icon: GiBoxingGlove,
        title: "Sparring Ring",
        description:
          "Regulation canvas ring for rounds, drills, and supervised sparring.",
      },
      {
        icon: GiPunch,
        title: "Heavy Bag Alley",
        description:
          "A full row of heavy bags, speed bags, and pads for technical work.",
      },
      {
        icon: GiMeditation,
        title: "Focus & Footwork",
        description:
          "Shadow, mitt, and movement drills that sharpen timing and agility.",
      },
      {
        icon: FaShieldAlt,
        title: "Safe Environment",
        description:
          "Protective gear and coach-supervised sessions for every experience level.",
      },
    ],
    stats: [
      { value: "20 ft", label: "Regulation Ring" },
      { value: "10+", label: "Bags & Stations" },
      { value: "All", label: "Skill Levels" },
    ],
    hours: "6:00 AM – 10:00 PM · Daily",
  },
  {
    slug: "pool",
    shortName: "Heated Pool",
    name: "Heated Swimming Pool",
    tag: "Aquatics",
    tagline: "Dive Into Serenity",
    description:
      "A year-round indoor heated pool for lap swimming, aquatic recovery, and leisurely unwinding in total comfort.",
    longDescription:
      "Plunge into crystal-clear, climate-controlled water any day of the year. Our indoor heated pool is perfect for morning laps, gentle aquatic recovery, and family-friendly afternoons alike. Dedicated lanes keep lap swimmers moving freely while the shallow leisure zone welcomes beginners — all finished with premium locker rooms and organic towel service.",
    icon: FaSwimmer,
    image: "/images/gallery/poolside-calm.jpg",
    gallery: [
      "/images/gallery/poolside-calm.jpg",
      "/images/gallery/himalayan-sanctuary.jpg",
      "/images/gallery/spa-treatment.jpg",
    ],
    highlights: [
      "Climate-controlled heated water",
      "Dedicated lap lanes & leisure zone",
      "Locker room & organic towel service",
    ],
    features: [
      {
        icon: FaSwimmer,
        title: "Lap Lanes",
        description:
          "Dedicated lanes for lengths, drills, and timed swim sessions.",
      },
      {
        icon: FaWater,
        title: "Aquatic Recovery",
        description:
          "Warm-water mobility, aqua-aerobics, and post-workout cooldowns.",
      },
      {
        icon: FaUsers,
        title: "Swim Coaching",
        description:
          "Stroke refinement and technique sessions for swimmers of all ages.",
      },
      {
        icon: FaUmbrellaBeach,
        title: "Poolside Lounge",
        description:
          "Comfortable deck seating and warm-water relaxation areas.",
      },
    ],
    stats: [
      { value: "24/7", label: "Climate Control" },
      { value: "6", label: "Dedicated Lanes" },
      { value: "28°C", label: "Water Temp" },
    ],
    hours: "6:00 AM – 10:00 PM · Daily",
  },
  {
    slug: "spa",
    shortName: "Spa",
    name: "Luxury Spa & Sauna",
    tag: "Recovery & Rituals",
    tagline: "Restore Body & Mind",
    description:
      "Step into Himalayan sauna, steam, and treatment suites designed for deep restoration and everyday relaxation rituals.",
    longDescription:
      "Close your eyes and let the warmth do its work. Our luxury spa blends Himalayan salt saunas, aromatic steam rooms, and serene treatment suites into a sanctuary of stillness. Signature massages and body rituals draw on ancient Himalayan botanicals, while the recovery lounge invites you to linger long after your treatment ends. Every detail — from lighting to linen — is designed to melt tension away.",
    icon: MdSpa,
    image: "/images/gallery/spa-treatment.jpg",
    gallery: [
      "/images/gallery/spa-treatment.jpg",
      "/images/gallery/meditation-room.jpg",
      "/images/gallery/himalayan-sanctuary.jpg",
    ],
    highlights: [
      "Himalayan salt sauna & steam room",
      "Signature massage & body rituals",
      "Serene lounge & recovery corner",
    ],
    features: [
      {
        icon: GiHotSurface,
        title: "Himalayan Sauna",
        description:
          "Salt-lined warmth that eases muscles and clears the mind.",
      },
      {
        icon: FaSpa,
        title: "Steam Rituals",
        description:
          "Aromatic steam and hydrotherapy for deep cellular renewal.",
      },
      {
        icon: FaHandHoldingHeart,
        title: "Signature Massages",
        description:
          "Deep tissue, aromatherapy, and Himalayan botanical body rituals.",
      },
      {
        icon: GiLotus,
        title: "Recovery Lounge",
        description:
          "A quiet, candle-lit corner to rest and re-center after your ritual.",
      },
    ],
    stats: [
      { value: "6", label: "Treatment Suites" },
      { value: "8", label: "Signature Rituals" },
      { value: "1-1", label: "Private Bookings" },
    ],
    hours: "8:00 AM – 9:00 PM · Daily",
  },
  {
    slug: "jacuzzi",
    shortName: "Jacuzzi",
    name: "Jacuzzi & Hydrotherapy",
    tag: "Hydro Relaxation",
    tagline: "Soak Away Tension",
    description:
      "Warm bubbling waters, targeted massage jets, and a sun-drenched poolside lounge — the perfect way to melt the day away.",
    longDescription:
      "There is nothing quite like sinking into warm, gently churning water at the end of a long day. Our jacuzzi and hydrotherapy zone features heated soaking pools, targeted massage jets, and a serene poolside lounge built for unhurried unwinding. Perfect on its own or after a hard training session, it is our most popular way to finish a perfect day at the sanctuary.",
    icon: MdWaves,
    image: "/images/gallery/poolside-calm.jpg",
    gallery: [
      "/images/gallery/poolside-calm.jpg",
      "/images/gallery/spa-treatment.jpg",
      "/images/gallery/himalayan-sanctuary.jpg",
    ],
    highlights: [
      "Heated hydrotherapy soaking pools",
      "Targeted massage-jet stations",
      "Serene poolside lounge & towel service",
    ],
    features: [
      {
        icon: MdWaves,
        title: "Hydrotherapy Jets",
        description:
          "Targeted pressure jets for tired muscles and stressed minds.",
      },
      {
        icon: FaWater,
        title: "Heated Soaking Pools",
        description:
          "Comfortably warm water maintained to the perfect soak temperature.",
      },
      {
        icon: FaUmbrellaBeach,
        title: "Poolside Lounge",
        description:
          "Recliners, shade, and refreshments for lingering relaxation.",
      },
      {
        icon: FaClock,
        title: "Premium Amenities",
        description:
          "Organic towels, robes, and lockers included with every visit.",
      },
    ],
    stats: [
      { value: "38°C", label: "Soak Temp" },
      { value: "12", label: "Massage Jets" },
      { value: "Daily", label: "Open All Week" },
    ],
    hours: "6:00 AM – 10:00 PM · Daily",
  },
  {
    slug: "beauty-salon",
    shortName: "Salon",
    name: "Beauty & Salon Studio",
    tag: "Glow & Grooming",
    tagline: "Glow From Within",
    description:
      "Indulge in polished self-care with expert styling, skincare, and wellness treatments designed to leave you refreshed and radiant.",
    longDescription:
      "Our beauty & salon studio is where self-care meets ceremony. From precision haircuts, blowouts, and finishing touches to rejuvenating skincare rituals, our stylists and beauty experts tailor every session to your features and your goals. Sink into our relaxed salon chairs, sip a herbal tea, and emerge polished, radiant, and completely at ease.",
    icon: GiScissors,
    image: "/images/gallery/spa-treatment.jpg",
    gallery: [
      "/images/gallery/spa-treatment.jpg",
      "/images/gallery/meditation-room.jpg",
      "/images/gallery/yoga-session.jpg",
    ],
    highlights: [
      "Hair styling, blowouts & finishing touches",
      "Skincare & beauty treatments",
      "Relaxing salon experience with premium care",
    ],
    features: [
      {
        icon: GiScissors,
        title: "Hair Styling",
        description:
          "Cuts, color, blowouts, and occasion-ready finishing touches.",
      },
      {
        icon: MdSpa,
        title: "Skincare Rituals",
        description:
          "Facials, masks, and treatments tailored to your skin.",
      },
      {
        icon: FaAward,
        title: "Premium Products",
        description:
          "Professional-grade products selected for every hair and skin type.",
      },
      {
        icon: FaClock,
        title: "Appointments",
        description:
          "Flexible scheduling with minimal wait and attentive service.",
      },
    ],
    stats: [
      { value: "10+", label: "Beauty Services" },
      { value: "5", label: "Expert Stylists" },
      { value: "1-1", label: "Personal Care" },
    ],
    hours: "9:00 AM – 8:00 PM · Daily",
  },
];

export function getFacilityBySlug(slug: string) {
  return FACILITIES.find((facility) => facility.slug === slug);
}
