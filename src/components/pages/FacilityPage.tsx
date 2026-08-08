import Image from "next/image";
import Link from "next/link";
import { InView } from "@/components/motion/InView";
import { TiltCard } from "@/components/ui/TiltCard";
import { FACILITIES, type Facility } from "@/data/facilities";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";
import { GiLotus } from "react-icons/gi";

function EyebrowBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20">
      {children}
    </span>
  );
}

function GradientHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function FacilityPage({ facility }: { facility: Facility }) {
  const others = FACILITIES.filter((f) => f.slug !== facility.slug);

  return (
    <div className="relative overflow-hidden bg-[#041a1b] text-white">
      {/* ================= HERO BANNER ================= */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={facility.image}
            alt={facility.name}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-90 contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041a1b] via-[#0a4243]/55 to-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041a1b] to-transparent" />
        </div>

        {/* Ambient glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#fdd693]/10 rounded-full blur-[140px] pointer-events-none animate-float-soft" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#0a4243]/60 rounded-full blur-[130px] pointer-events-none animate-float-soft [animation-delay:-3s]" />

        <div className="container relative z-10 pt-40 md:pt-44 pb-16">
          <InView>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-white/60"
            >
              <Link href="/" className="transition-colors hover:text-[#fdd693]">
                Home
              </Link>
              <FaChevronRight className="h-2.5 w-2.5 text-[#fdd693]/60" />
              <Link
                href="/facilities"
                className="transition-colors hover:text-[#fdd693]"
              >
                Facilities
              </Link>
              <FaChevronRight className="h-2.5 w-2.5 text-[#fdd693]/60" />
              <span className="text-[#fdd693]">{facility.shortName}</span>
            </nav>

            <EyebrowBadge>
              <GiLotus className="h-4 w-4" />
              {facility.tag}
            </EyebrowBadge>

            <h1 className="mt-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.02] drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)]">
              {facility.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl sm:text-2xl font-bold text-[#fdd693] drop-shadow-md">
              <GradientHeading>{facility.tagline}</GradientHeading>
            </p>
            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85 drop-shadow-md">
              {facility.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#fdd693] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a4243] shadow-lg shadow-[#fdd693]/25 transition-all duration-300 hover:bg-[#fff0d0] hover:shadow-[#fdd693]/40"
              >
                Book This Experience
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#fdd693] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#fdd693] transition-all duration-300 hover:bg-[#fdd693] hover:text-[#0a4243]"
              >
                All Facilities
              </Link>
            </div>
          </InView>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#0a4243]/40 rounded-full blur-[150px] pointer-events-none animate-float-soft" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <InView>
            <div>
              <EyebrowBadge>
                <GiLotus className="h-4 w-4" />
                The Experience
              </EyebrowBadge>
              <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">
                Designed Around{" "}
                <GradientHeading>{facility.shortName}</GradientHeading>
              </h2>
              <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                {facility.longDescription}
              </p>

              <ul className="mt-8 space-y-3.5">
                {facility.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-slate-200"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdd693]/15 text-[#fdd693] border border-[#fdd693]/25">
                      <FiCheck className="h-3 w-3" />
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </InView>

          <InView delay={120} className="lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-[#fdd693]/20 bg-[#062324]/90 backdrop-blur-xl p-8 shadow-[inset_0_1px_0_0_rgba(253,214,147,0.12),0_30px_70px_-20px_rgba(0,0,0,0.75)]">
              <div className="relative mb-7 h-52 overflow-hidden rounded-2xl border border-[#fdd693]/15">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-[#fdd693]/30 bg-black/40 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#fdd693] backdrop-blur-md">
                  {facility.tag}
                </span>
              </div>

              <div className="mb-7 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Opening Hours
                </p>
                <p className="text-right text-sm font-bold text-[#fdd693]">
                  {facility.hours}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {facility.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#fdd693]/15 bg-[#041a1b]/80 px-3 py-4 text-center"
                  >
                    <p className="text-2xl font-extrabold tracking-tight text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.6rem] uppercase tracking-[0.15em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 bg-[#062324] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-[#fdd693]/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#fdd693]/8 rounded-full blur-[150px] pointer-events-none animate-float-soft" />

        <div className="container relative z-10">
          <InView className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
              <MdWorkspacePremium className="h-4 w-4" />
              What&apos;s Inside
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Crafted for the{" "}
              <GradientHeading>{facility.shortName}</GradientHeading>{" "}
              Experience
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Every detail of the {facility.shortName} has been considered — so
              you can simply arrive and let the experience begin.
            </p>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facility.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <InView key={feature.title} delay={i * 90} className="h-full">
                  <TiltCard>
                    <div className="group relative h-full rounded-[2rem] border border-[#fdd693]/15 bg-[#041a1b]/90 backdrop-blur-xl p-7 text-left transition-[border-color,box-shadow] duration-500 hover:border-[#fdd693]/40 shadow-[inset_0_1px_0_0_rgba(253,214,147,0.08),0_18px_40px_-18px_rgba(0,0,0,0.7)]">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdd693]/40 to-transparent" />
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 text-base font-extrabold tracking-tight text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </TiltCard>
                </InView>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0a4243]/50 rounded-full blur-[150px] pointer-events-none animate-float-soft" />

        <div className="container relative z-10">
          <InView className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
                <GiLotus className="h-4 w-4" />
                In Pictures
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Inside the <GradientHeading>{facility.shortName}</GradientHeading>
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693] transition-colors hover:text-[#fff0d0]"
            >
              Plan a Visit
              <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {facility.gallery.map((image, i) => (
              <InView key={image} delay={i * 100} className="h-full">
                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#fdd693]/15 bg-[#041a1b]">
                  <Image
                    src={image}
                    alt={`${facility.name} — view ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <span className="absolute bottom-4 left-4 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#fdd693]">
                    {String(i + 1).padStart(2, "0")} — {facility.shortName}
                  </span>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="relative py-10">
        <div className="container">
          <InView>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fdd693] to-[#f3be6a] px-7 py-14 sm:p-16 text-center shadow-[0_40px_90px_-30px_rgba(253,214,147,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0a4243]">
                  Ready to experience the {facility.shortName}?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#0a4243]/80 leading-relaxed">
                  Reserve your session, book a guided tour, or add this facility
                  to your membership — our team is here to help you plan the
                  perfect visit.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0a4243] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#fdd693] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#062324]"
                  >
                    Book Your Visit
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a4243] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a4243] transition-all duration-300 hover:bg-[#0a4243] hover:text-[#fdd693]"
                  >
                    View Memberships
                  </Link>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* ================= OTHER FACILITIES ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-[#fdd693]/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10">
          <InView className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
              <GiLotus className="h-4 w-4" />
              Keep Exploring
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              More Ways to{" "}
              <GradientHeading>Rejuvenate</GradientHeading>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              The sanctuary holds a world of experiences — step into another
              one next.
            </p>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((other, i) => {
              return (
                <InView key={other.slug} delay={i * 90} className="h-full">
                  <TiltCard>
                    <Link
                      href={`/facilities/${other.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#fdd693]/15 bg-[#062324]/90 backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-[#fdd693]/40 shadow-[inset_0_1px_0_0_rgba(253,214,147,0.08),0_18px_40px_-18px_rgba(0,0,0,0.7)]"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={other.image}
                          alt={other.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#062324] via-[#062324]/20 to-transparent" />
                      </div>
                      <div className="relative z-10 -mt-10 p-7 pt-0">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693] shadow-lg shadow-black/30">
                          <other.icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white">
                          {other.name}
                        </h3>
                        <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#fdd693]/80">
                          {other.tag}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] font-bold text-[#fdd693] group-hover:text-[#fff0d0] transition-colors duration-300">
                          Explore this space
                          <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </InView>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
