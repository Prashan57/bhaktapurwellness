import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { PricingSection } from '@/components/sections/PricingSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}