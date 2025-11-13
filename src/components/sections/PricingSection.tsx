import { InView } from "@/components/motion/InView";

const PLANS = [
  {
    name: "Basic",
    price: "$29",
    period: "/mo",
    featured: false,
    features: [
      "Access to core features",
      "Standard support",
      "Basic analytics",
    ],
    cta: "Get Started",
  },
  {
    name: "VIP",
    price: "$59",
    period: "/mo",
    featured: true,
    features: [
      "Everything in Basic",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    cta: "Choose Pro",
  },
  {
    name: "VIP Pro",
    price: "Custom",
    period: "",
    featured: false,
    features: ["Dedicated success manager", "SLA & SSO", "Custom onboarding"],
    cta: "Contact Sales",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 scroll-mt-28">
      <div className="container mx-auto px-4">
        <InView>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Gym Pricing
          </h2>
        </InView>
        <InView delay={75}>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
            Choose the plan that fits your needs. Upgrade or cancel anytime.
          </p>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan, i) => (
            <InView key={plan.name} delay={i * 100}>
              <div
                className={[
                  "relative rounded-2xl p-6 bg-background border border-border/20 shadow-sm transition-all transform",
                  "hover:-translate-y-1 hover:shadow-md",
                  plan.featured
                    ? "ring-2 ring-primary/30 shadow-lg scale-[1.02]"
                    : "",
                ].join(" ")}
              >
                {plan.featured && (
                  <div className="absolute -top-3 right-4 text-xs font-medium px-2 py-1 rounded-full bg-primary text-white">
                    Popular
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                </div>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period ? (
                    <span className="text-foreground/60">{plan.period}</span>
                  ) : null}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 11.086l6.543-6.543a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex">
                  {plan.featured ? (
                    <a href="#contact" className="btn btn-primary w-full">
                      {plan.cta}
                    </a>
                  ) : (
                    <a href="#contact" className="btn btn-outline w-full">
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
