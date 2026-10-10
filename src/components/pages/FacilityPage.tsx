import Image from "next/image";
import Link from "next/link";
import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { COMMON_COPY } from "@/constants/copy";
import { FACILITIES, type Facility } from "@/data/facilities";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";
import { GiLotus } from "react-icons/gi";

export function FacilityPage({ facility }: { facility: Facility }) {
  const others = FACILITIES.filter((f) => f.slug !== facility.slug);

  return (
    <div className="relative overflow-hidden bg-[#041a1b] text-white">
      {/* Hero */}
      <section aria-labelledby="facility-title" className="relative flex min-h-[82svh] items-end overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={facility.image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041a1b] via-[#0a4243]/55 to-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041a1b] to-transparent" />
        </div>

        <div className="container relative z-10 pb-14 pt-36 md:pt-40">
          <InView>
            <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-white/60 sm:text-xs">
              <Link href="/" className="rounded transition-colors hover:text-[#fdd693]">Home</Link>
              <FaChevronRight aria-hidden="true" className="h-2.5 w-2.5 text-[#fdd693]/60" />
              <Link href="/facilities" className="rounded transition-colors hover:text-[#fdd693]">Facilities</Link>
              <FaChevronRight aria-hidden="true" className="h-2.5 w-2.5 text-[#fdd693]/60" />
              <span aria-current="page" className="text-[#fdd693]">{facility.shortName}</span>
            </nav>

            <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
              {facility.tag}
            </Eyebrow>

            <h1 id="facility-title" className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
              {facility.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-bold text-[#fdd693] sm:text-2xl">
              <GradientText>{facility.tagline}</GradientText>
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {facility.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#contact" pill>
                {COMMON_COPY.bookCta}
                <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Button>
              <Button href="/facilities" variant="outline" pill>
                {COMMON_COPY.allFacilities}
              </Button>
            </div>
          </InView>
        </div>
      </section>

      {/* Overview */}
      <section aria-labelledby="experience-heading" className="relative overflow-hidden py-20 md:py-24">
        <div className="container relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <InView>
            <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
              The Experience
            </Eyebrow>
            <h2 id="experience-heading" className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              Designed Around <GradientText>{facility.shortName}</GradientText>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              {facility.longDescription}
            </p>
            <ul className="mt-8 space-y-3.5">
              {facility.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#fdd693]/25 bg-[#fdd693]/15 text-[#fdd693]">
                    <FiCheck aria-hidden="true" className="h-3 w-3" />
                  </span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </InView>

          <InView delay={120} className="lg:sticky lg:top-28">
            <aside aria-label={`${facility.name} at a glance`} className="rounded-[2rem] border border-[#fdd693]/20 bg-[#062324]/90 p-7 shadow-[inset_0_1px_0_0_rgba(253,214,147,0.12),0_30px_70px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-8">
              <div className="relative mb-7 h-52 overflow-hidden rounded-2xl border border-[#fdd693]/15">
                <Image src={facility.image} alt={`${facility.name} interior`} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-[#fdd693]/30 bg-black/40 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#fdd693] backdrop-blur-md">
                  {facility.tag}
                </span>
              </div>

              <div className="mb-7 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Opening Hours</p>
                <p className="text-right text-sm font-bold text-[#fdd693]">{facility.hours}</p>
              </div>

              {facility.pricing && (
                <div className="mb-7 rounded-2xl border border-[#fdd693]/25 bg-[#041a1b]/80 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Session Price</p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">{facility.pricing}</p>
                  {facility.pricingNote && (
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{facility.pricingNote}</p>
                  )}
                  {facility.slots && (
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                      {facility.slots.map((slot) => (
                        <li key={slot} className="flex items-center gap-2">
                          <FiCheck aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#fdd693]" />
                          <span className="tabular-nums">{slot}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <dl className="grid grid-cols-3 gap-3 sm:gap-4">
                {facility.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#fdd693]/15 bg-[#041a1b]/80 px-3 py-4 text-center">
                    <dd className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">{stat.value}</dd>
                    <dt className="mt-1 text-[0.6rem] uppercase tracking-[0.15em] text-slate-400">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </aside>
          </InView>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-heading" className="relative overflow-hidden bg-[#062324] py-20 md:py-24">
        <div className="container relative z-10">
          <InView className="mx-auto mb-12 max-w-3xl text-center">
            <Eyebrow icon={<MdWorkspacePremium aria-hidden="true" className="h-4 w-4" />}>
              What&apos;s Inside
            </Eyebrow>
            <h2 id="features-heading" className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
              Crafted for the <GradientText>{facility.shortName}</GradientText> Experience
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Arrive, and let the experience begin — every detail is already considered.
            </p>
          </InView>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4" aria-label={`${facility.name} features`}>
            {facility.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <li key={feature.title} className="h-full">
                  <InView delay={Math.min(i * 70, 280)} className="h-full">
                    <TiltCard className="h-full">
                      <div className="card card-hover h-full p-7">
                        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdd693]/40 to-transparent" />
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693]">
                          <Icon aria-hidden="true" className="h-6 w-6" />
                        </span>
                        <h3 className="mt-5 text-base font-extrabold tracking-tight text-white">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{feature.description}</p>
                      </div>
                    </TiltCard>
                  </InView>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Plans & Pricing — rendered only when this facility has its own plans */}
      {facility.plans && (
        <section aria-labelledby="plans-heading" className="relative overflow-hidden py-20 md:py-24">
          <div className="container relative z-10">
            <InView className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow icon={<MdWorkspacePremium aria-hidden="true" className="h-4 w-4" />}>
                Plans & Pricing
              </Eyebrow>
              <h2 id="plans-heading" className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
                {facility.plansTitle ?? `${facility.shortName} Plans`}
              </h2>
              {facility.plansNote && (
                <p className="mt-4 text-base text-slate-300 sm:text-lg">{facility.plansNote}</p>
              )}
            </InView>

            <ul className="grid grid-cols-1 items-stretch gap-5 pt-4 sm:grid-cols-2 lg:grid-cols-4" aria-label={`${facility.name} plans`}>
              {facility.plans.map((plan, i) => (
                <li key={plan.id} className="h-full">
                  <InView delay={Math.min(i * 70, 210)} className="h-full overflow-visible">
                    <TiltCard className="relative h-full overflow-visible">
                      {plan.featured && plan.note && (
                        <p className="absolute left-1/2 top-0 z-20 inline-flex max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 truncate whitespace-nowrap rounded-full border border-[#fdd693]/60 bg-[#fdd693] px-4 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#0a4243] shadow-lg">
                          {plan.note}
                        </p>
                      )}
                      <div
                        className={`card card-hover flex h-full flex-col p-6 ${
                          plan.featured ? "border-2 border-[#fdd693]" : "border border-[#fdd693]/15"
                        }`}
                      >
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#fdd693]/90">
                          {plan.duration}
                        </p>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-white">{plan.price}</p>
                        {plan.featured ? (
                          <p className="mt-1 text-xs font-semibold text-[#f3be6a]">1-Year Premium Plan</p>
                        ) : null}
                        <Link
                          href="/#contact"
                          aria-label={`Choose ${facility.shortName} — ${plan.duration} for ${plan.price}`}
                          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-[0.97] ${
                            plan.featured
                              ? "bg-gradient-to-r from-[#fdd693] to-[#f3be6a] text-[#0a4243] shadow-lg shadow-[#fdd693]/25 hover:shadow-[#fdd693]/40"
                              : "border-2 border-[#fdd693] text-[#fdd693] hover:bg-[#fdd693] hover:text-[#0a4243]"
                          }`}
                        >
                          Choose plan
                          <FaArrowRight aria-hidden="true" className="h-3 w-3" />
                        </Link>
                      </div>
                    </TiltCard>
                  </InView>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section aria-labelledby="facility-gallery-heading" className="relative overflow-hidden py-20 md:py-24">
        <div className="container relative z-10">
          <InView className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
                In Pictures
              </Eyebrow>
              <h2 id="facility-gallery-heading" className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                Inside the <GradientText>{facility.shortName}</GradientText>
              </h2>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-lg text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693] transition-colors hover:text-[#fff0d0]">
              {COMMON_COPY.planVisit}
              <FaArrowRight aria-hidden="true" className="h-3 w-3" />
            </Link>
          </InView>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {facility.gallery.map((image, i) => (
              <InView key={`${image}-${i}`} delay={Math.min(i * 80, 240)} className={i === 0 ? "md:row-span-1" : ""}>
                <figure className={`group relative overflow-hidden rounded-3xl border border-[#fdd693]/10 ${i === 0 ? "h-72 md:h-80" : "h-72"}`}>
                  <Image
                    src={image}
                    alt={`${facility.name} — view ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                  <figcaption className="absolute bottom-4 left-4 text-[0.65rem] uppercase tracking-[0.25em] text-[#fdd693]/90">
                    {String(i + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="facility-cta-heading" className="relative py-8">
        <div className="container">
          <InView>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fdd693] to-[#f3be6a] px-7 py-14 text-center shadow-[0_40px_90px_-30px_rgba(253,214,147,0.35)] sm:p-16">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 id="facility-cta-heading" className="text-3xl font-extrabold tracking-tight text-[#0a4243] md:text-5xl">
                  Ready to experience the {facility.shortName}?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#0a4243]/80 sm:text-base">
                  Reserve your session, book a guided tour, or add this facility to your membership.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0a4243] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#fdd693] shadow-lg shadow-black/20 transition-colors hover:bg-[#062324]"
                  >
                    {COMMON_COPY.bookCta}
                    <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a4243] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a4243] transition-colors hover:bg-[#0a4243] hover:text-[#fdd693]"
                  >
                    View Memberships
                  </Link>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* Others */}
      <section aria-labelledby="more-heading" className="relative overflow-hidden py-20 md:py-24">
        <div className="container relative z-10">
          <InView className="mx-auto mb-12 max-w-3xl text-center">
            <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
              Keep Exploring
            </Eyebrow>
            <h2 id="more-heading" className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
              More Ways to <GradientText>Rejuvenate</GradientText>
            </h2>
          </InView>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3" aria-label="Other facilities">
            {others.slice(0, 6).map((other, i) => (
              <li key={other.slug} className="h-full">
                <InView delay={Math.min(i * 60, 300)} className="h-full">
                  <TiltCard className="h-full">
                    <Link
                      href={`/facilities/${other.slug}`}
                      aria-label={`Explore ${other.name}`}
                      className="card card-hover group flex h-full flex-col"
                    >
                      <span className="relative block h-44 overflow-hidden">
                        <Image src={other.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" loading="lazy" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#062324] via-[#062324]/20 to-transparent" />
                      </span>
                      <span className="relative z-10 -mt-8 block p-7 pt-0">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693] shadow-lg shadow-black/30">
                          <other.icon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <span className="mt-4 block text-lg font-extrabold tracking-tight text-white">{other.name}</span>
                        <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fdd693]/80">{other.tag}</span>
                        <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#fdd693]">
                          {COMMON_COPY.exploreSpace}
                          <FaArrowRight aria-hidden="true" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </span>
                    </Link>
                  </TiltCard>
                </InView>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
