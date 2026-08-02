// Centralized application constants for Bhaktapur Wellness

export type NavItem = {
  name: string;
  href: string;
  description?: string;
};

export const SITE = {
  title: 'Bhaktapur Wellness',
  shortTitle: 'BHK Wellness',
  description: 'Experience luxury wellness in Bhaktapur. Premium gym, spa treatments, beauty services, and gourmet cuisine for mind, body, and soul.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bhaktapurwellness.com',
  logo: '/images/gallery/bw.jpg',
  logoCircle: '/images/gallery/bw.jpg',
  favicon: '/favicon.ico',
};

export const SEO = {
  defaultTitle: SITE.title,
  titleTemplate: '%s | Bhaktapur Wellness',
  defaultDescription: SITE.description,
  openGraph: {
    image: '/images/gallery/hero.jpg',
    type: 'website',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/', description: 'Welcome to wellness' },
  { name: 'Gym', href: '/gym', description: 'Fitness & training' },
  { name: 'Spa', href: '/spa', description: 'Relaxation & renewal' },
  { name: 'Beauty', href: '/beauty', description: 'Beauty & styling' },
  { name: 'Cafe', href: '/cafe', description: 'Gourmet cuisine' },
  { name: 'Contact', href: '/contact', description: 'Get in touch' },
];

export const SERVICES = [
  {
    id: 'gym',
    title: 'Premium Gym',
    description: 'State-of-the-art fitness equipment and expert trainers to help you achieve your health goals.',
    image: '/images/gallery/outdoor-activity.jpg',
    href: '/gym',
    features: ['Personal Training', 'Group Classes', 'Modern Equipment', 'Nutrition Planning'],
  },
  {
    id: 'spa',
    title: 'Luxury Spa',
    description: 'Indulge in rejuvenating spa treatments designed to restore your body and calm your mind.',
    image: '/images/gallery/spa-treatment.jpg',
    href: '/spa',
    features: ['Massage Therapy', 'Body Treatments', 'Aromatherapy', 'Hot Stone Therapy'],
  },
  {
    id: 'beauty',
    title: 'Beauty Parlor',
    description: 'Expert beauty services from hair styling to skincare for a complete transformation.',
    image: '/images/gallery/meditation.jpg',
    href: '/beauty',
    features: ['Hair Styling', 'Facial Treatments', 'Nail Art', 'Makeup Services'],
  },
  {
    id: 'cafe',
    title: 'Gourmet Cafe',
    description: 'Savor nutritious and delicious meals crafted by our expert chefs using fresh, local ingredients.',
    image: '/images/gallery/healthy-food.jpg',
    href: '/cafe',
    features: ['Healthy Menu', 'Fresh Juices', 'Organic Ingredients', 'Chef Specials'],
  },
];

export const LOGOS = {
  circle: SITE.logoCircle,
  wordmark: '/images/logo.png',
};

export const CONTACT = {
  email: 'hello@bhaktapurwellness.com',
  phone: '+977-1-4567890',
  hours: {
    weekday: '6:00 AM - 9:00 PM',
    weekend: '7:00 AM - 8:00 PM',
  },
  address: 'Bhaktapur, Nepal',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113068.22150022577!2d85.22254214335938!3d27.6745884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b007edc1b69%3A0x68c24b9e7280695d!2sBhaktapur%20Wellness!5e0!3m2!1sen!2snp!4v1762794676817!5m2!1sen!2snp',
};

export const SOCIALS = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
];

export const THEME = {
  default: 'light',
  options: ['light', 'dark'],
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    content: 'The gym facilities are world-class. The trainers are incredibly knowledgeable and the equipment is top-notch. I have never felt more motivated.',
    avatar: '/images/gallery/bw.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Wellness Seeker',
    content: 'The spa experience was truly transformative. The therapists are skilled and the ambiance is perfectly serene. A must-visit for anyone seeking relaxation.',
    avatar: '/images/gallery/bw.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Beauty Client',
    content: 'I have tried many beauty parlors, but Bhaktapur Wellness stands out. The attention to detail and quality of service is unmatched.',
    avatar: '/images/gallery/bw.jpg',
    rating: 5,
  },
];

export const PRICING_PLANS = [
  {
    name: 'Essential',
    price: 'NPR 2,999',
    period: '/month',
    description: 'Perfect for beginners starting their wellness journey',
    features: [
      'Gym access (6AM - 8PM)',
      'Basic fitness assessment',
      'Group classes (2x/week)',
      'Locker room access',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    price: 'NPR 4,999',
    period: '/month',
    description: 'Complete wellness experience with premium benefits',
    features: [
      'Unlimited gym access',
      'Personal training sessions',
      'All group classes',
      '1 spa treatment/month',
      'Nutrition consultation',
      'Priority booking',
    ],
    highlighted: true,
    cta: 'Join Premium',
  },
  {
    name: 'Elite',
    price: 'NPR 7,999',
    period: '/month',
    description: 'The ultimate wellness package with exclusive perks',
    features: [
      'Everything in Premium',
      'Unlimited spa treatments',
      'Beauty services discount',
      'VIP cafe access',
      'Monthly wellness assessment',
      'Guest passes (2/month)',
      '24/7 gym access',
    ],
    highlighted: false,
    cta: 'Go Elite',
  },
];

export const GYM_CLASSES = [
  { name: 'Yoga', time: '6:00 AM', instructor: 'Anita', duration: '60 min' },
  { name: 'HIIT', time: '7:00 AM', instructor: 'Raj', duration: '45 min' },
  { name: 'Pilates', time: '9:00 AM', instructor: 'Sita', duration: '50 min' },
  { name: 'Zumba', time: '5:00 PM', instructor: 'Maya', duration: '60 min' },
  { name: 'Strength Training', time: '6:00 PM', instructor: 'Raj', duration: '45 min' },
  { name: 'Meditation', time: '7:00 PM', instructor: 'Anita', duration: '30 min' },
];

export const SPA_TREATMENTS = [
  { name: 'Swedish Massage', duration: '60 min', price: 'NPR 2,500', category: 'Massage' },
  { name: 'Deep Tissue Massage', duration: '90 min', price: 'NPR 3,500', category: 'Massage' },
  { name: 'Aromatherapy', duration: '60 min', price: 'NPR 2,800', category: 'Aromatherapy' },
  { name: 'Hot Stone Therapy', duration: '75 min', price: 'NPR 3,200', category: 'Specialty' },
  { name: 'Body Scrub', duration: '45 min', price: 'NPR 2,000', category: 'Body Treatment' },
  { name: 'Facial Rejuvenation', duration: '60 min', price: 'NPR 2,800', category: 'Facial' },
];

export const BEAUTY_SERVICES = [
  { name: 'Hair Cut & Style', price: 'NPR 800', category: 'Hair' },
  { name: 'Hair Color', price: 'NPR 2,500', category: 'Hair' },
  { name: 'Facial Treatment', price: 'NPR 1,500', category: 'Skincare' },
  { name: 'Manicure', price: 'NPR 600', category: 'Nails' },
  { name: 'Pedicure', price: 'NPR 800', category: 'Nails' },
  { name: 'Bridal Makeup', price: 'NPR 5,000', category: 'Makeup' },
];

export const CAFE_MENU = [
  { name: 'Green Smoothie Bowl', price: 'NPR 450', category: 'Breakfast', description: 'Spinach, banana, mango, chia seeds' },
  { name: 'Grilled Chicken Salad', price: 'NPR 650', category: 'Lunch', description: 'Mixed greens, grilled chicken, avocado' },
  { name: 'Quinoa Power Bowl', price: 'NPR 750', category: 'Lunch', description: 'Quinoa, roasted vegetables, tahini dressing' },
  { name: 'Herbal Tea Selection', price: 'NPR 250', category: 'Beverages', description: 'Green tea, chamomile, peppermint' },
  { name: 'Fresh Fruit Juice', price: 'NPR 300', category: 'Beverages', description: 'Seasonal fruits, cold-pressed' },
  { name: 'Protein Pancakes', price: 'NPR 550', category: 'Breakfast', description: 'Oat flour, protein powder, berries' },
];