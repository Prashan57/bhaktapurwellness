import { InView } from "@/components/motion/InView";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-28 min-h-screen w-full flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/gallery/meditation.jpg"
          alt="Wellness retreat hero"
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/45" />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative text-center max-w-4xl mx-auto z-10 flex flex-col items-center justify-center">
          <InView>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Bhaktapur Wellness
              </span>
            </h1>
          </InView>
          <InView delay={100}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Experience the perfect blend of luxury and adventure with our
              premium services.
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
