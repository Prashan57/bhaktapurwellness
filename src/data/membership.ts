// Single source of truth for all class, locker, sauna & package pricing.
// Prices are displayed exactly as provided by the business (NRs.).

export const BUSINESS_DESCRIPTION =
  "Bhaktapur Wellness, located in Kausaltar, Bhaktapur, is a peaceful place to relax, refresh, and take care of yourself. Our goal is to bring all your essential wellness services under one roof, making it easy and convenient for you to look after your health and well-being.";

export type DurationPlan = {
  id: string;
  duration: string;
  price: string;
  note?: string;
  featured?: boolean;
};

export const DANCE_PLANS: DurationPlan[] = [
  { id: "dance-1m", duration: "1 Month", price: "NRs. 3,000" },
  { id: "dance-3m", duration: "3 Months", price: "NRs. 8,000" },
  { id: "dance-6m", duration: "6 Months", price: "NRs. 15,000" },
  { id: "dance-12m", duration: "1 Year", price: "NRs. 28,000", note: "Premium Plan", featured: true },
];

export const KICKBOXING_PLANS: DurationPlan[] = [
  { id: "kick-1m", duration: "1 Month", price: "NRs. 6,000" },
  { id: "kick-3m", duration: "3 Months", price: "NRs. 15,000" },
  { id: "kick-6m", duration: "6 Months", price: "NRs. 27,000" },
  { id: "kick-12m", duration: "1 Year", price: "NRs. 50,000", note: "Premium Plan", featured: true },
];

export const LOCKER_PLANS: DurationPlan[] = [
  { id: "locker-1m", duration: "1 Month", price: "NRs. 600" },
  { id: "locker-3m", duration: "3 Months", price: "NRs. 1,400" },
  { id: "locker-6m", duration: "6 Months", price: "NRs. 2,600" },
  { id: "locker-12m", duration: "1 Year", price: "NRs. 3,800", note: "Premium Plan", featured: true },
];

export const SAUNA_STEAM_POOL = {
  price: "NRs. 1,000",
  unit: "per session",
  slots: [
    { id: "morning", label: "Morning", time: "7:00 AM – 11:00 AM" },
    { id: "afternoon", label: "Afternoon", time: "1:00 PM – 4:00 PM" },
    { id: "evening", label: "Evening", time: "5:00 PM – 9:00 PM" },
  ],
} as const;

export const COMBINED_INCLUSIONS = [
  "Gym",
  "Sauna",
  "Steam",
  "Cardio",
  "Locker",
  "Spa access twice a month",
] as const;

export type CombinedPackage = {
  id: string;
  duration: string;
  price: string;
  badge?: string;
  featured?: boolean;
  inclusions: readonly string[];
};

export const COMBINED_PACKAGES: CombinedPackage[] = [
  {
    id: "combo-3m",
    duration: "3-Month Package",
    price: "NRs. 40,000",
    inclusions: COMBINED_INCLUSIONS,
  },
  {
    id: "combo-6m",
    duration: "6-Month Package",
    price: "NRs. 60,000",
    badge: "Most Popular",
    featured: true,
    inclusions: COMBINED_INCLUSIONS,
  },
  {
    id: "combo-12m",
    duration: "Yearly Package",
    price: "NRs. 100,000",
    badge: "Best Value",
    inclusions: COMBINED_INCLUSIONS,
  },
];

export const VIP_COPY = "Exclusive wellness packages and special offers for our VIP members.";
