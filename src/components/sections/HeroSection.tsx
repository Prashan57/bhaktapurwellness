import { InView } from '@/components/motion/InView';

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <InView>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                WindSurf
              </span>
            </h1>
          </InView>
          <InView delay={100}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Experience the perfect blend of luxury and adventure with our premium services.
            </p>
          </InView>
          <InView delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#services" className="btn btn-primary">
                Explore Services
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
