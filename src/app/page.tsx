import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FaqSection } from '@/components/sections/FaqSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      <PricingSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
    </div>
  );
}
