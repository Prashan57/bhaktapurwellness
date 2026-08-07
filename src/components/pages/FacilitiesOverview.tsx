import Image from "next/image";
import Link from "next/link";
import { InView } from "@/components/motion/InView";
import { TiltCard } from "@/components/ui/TiltCard";
import { FACILITIES } from "@/data/facilities";
import { FaArrowRight } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

export function FacilitiesOverview() {
  return (
    <div className="relative overflow-hidden bg-[#041a1b] text-white">
      {/* ================= HERO BANNER ================= */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/wellness-retreat.jpg"
            alt="Bhaktapur Wellness sanctuary"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-90 contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041a1b] via-[#0a4243]/55 to-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041a1b] to-transparent" />
        </div>

        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#fdd693]/10 rounded-full blur-[140px] pointer-events-none animate-float-soft" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#0a4243]/60 rounded-full blur-[130px] pointer-events-none animate-float-soft [animation-delay:-3s]" />

        <div className="container relative z-10 pt-40 md:pt-44 pb-16">
          <InView>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-white/60"
            >
              <Link href="/" className="transition-colors hover:text-[#fdd693]">
                Home
              </Link>
              <span className="flex items-center gap-2">
                <span className="h-px w-3 bg-[#fdd693]/60" />
                <span className="text-[#fdd693]">Facilities</span>
              </span>
            </nav>

            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20">
              <GiLotus className="h-4 w-4" />
              {FACILITIES.length} Facilities &amp; Experiences
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.02] drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)]">
              Every Space,{" "}
              <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
                Crafted to Restore.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85 drop-shadow-md">
              From the high-performance gym floor to the quiet warmth of the
              Himalayan sauna, each of our {FACILITIES.length} facilities has
              been designed as its own ritual — explore them all below.
            </p>
          </InView>
        </div>
      </section>

      {/* ================= FACILITY GRID ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0a4243]/50 rounded-full blur-[150px] pointer-events-none animate-float-soft" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#fdd693]/8 rounded-full blur-[150px] pointer-events-none animate-float-soft [animation-delay:-3s]" />

        <div className="container relative z-10">
          <InView className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Pick Your{" "}
              <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
                Ritual.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Tap any facility to step inside and discover its story, features,
              and opening hours.
            </p>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, i) => (
              <InView key={facility.slug} delay={i * 90} className="h-full">
                <TiltCard>
                  <Link
                    href={`/facilities/${facility.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#fdd693]/15 bg-[#062324]/90 backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-[#fdd693]/40 shadow-[inset_0_1px_0_0_rgba(253,214,147,0.08),0_18px_40px_-18px_rgba(0,0,0,0.7)]"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#062324] via-[#062324]/15 to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full border border-[#fdd693]/30 bg-black/40 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#fdd693] backdrop-blur-md">
                        {facility.tag}
                      </span>
                    </div>

                    <div className="relative z-10 -mt-10 flex-1 p-7 pt-0">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693] shadow-lg shadow-black/30 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        <facility.icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-4 text-xl font-extrabold tracking-tight text-white">
                        {facility.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                        {facility.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] font-bold text-[#fdd693] group-hover:text-[#fff0d0] transition-colors duration-300">
                        Explore this space
                        <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </InView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
