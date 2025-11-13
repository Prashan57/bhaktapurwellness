import { InView } from "@/components/motion/InView";
import CardFlipSection from "./CardFlipSection";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-foreground/5 scroll-mt-28">
      <div className="container mx-auto px-4">
        <InView>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
        </InView>
        {/* Card flip subsection placed under the services heading */}
        <div>
          <CardFlipSection />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, i) => (
            <InView key={item} delay={i * 100}>
              <div className="group bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-border/20 transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Service {item}</h3>
                <p className="text-foreground/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
