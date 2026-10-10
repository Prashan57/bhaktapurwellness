import Image from "next/image";
import Link from "next/link";
import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { COMMON_COPY } from "@/constants/copy";
import { FACILITIES } from "@/data/facilities";
import { FaArrowRight } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

export function FacilitiesOverview() {
  return (
    <div className="relative overflow-hidden bg-[#041a1b] text-white">
      <section aria-labelledby="facilities-title" className="relative flex min-h-[68vh] items-end overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/gallery/wellness-retreat.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041a1b] via-[#0a4243]/55 to-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041a1b] to-transparent" />
        </div>

        <div className="container relative z-10 pb-14 pt-36 md:pt-40">
          <InView>
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-white/60 sm:text-xs">
              <Link href="/" className="rounded transition-colors hover:text-[#fdd693]">
                Home
              </Link>
              <span aria-hidden="true" className="h-px w-3 bg-[#fdd693]/60" />
              <span aria-current="page" className="text-[#fdd693]">Facilities</span>
            </nav>

            <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
              {FACILITIES.length} Facilities &amp; Experiences
            </Eyebrow>

            <h1 id="facilities-title" className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
              Every Space, <GradientText>Crafted to Restore.</GradientText>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              From the high-performance gym floor to the quiet warmth of the Himalayan sauna,
              each of our {FACILITIES.length} facilities is its own ritual — explore them below.
            </p>
          </InView>
        </div>
      </section>

      <section aria-labelledby="ritual-heading" className="relative overflow-hidden py-20 md:py-24">
        <div aria-hidden="true" className="ambient-glow -left-20 top-1/4 h-72 w-72 bg-[#0a4243]/50 blur-[100px]" />

        <div className="container relative z-10">
          <InView className="mx-auto mb-12 max-w-3xl text-center">
            <h2 id="ritual-heading" className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Pick Your <GradientText>Ritual.</GradientText>
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Select any facility to discover its story, features, and opening hours.
            </p>
          </InView>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3" aria-label="All facilities">
            {FACILITIES.map((facility, i) => (
              <li key={facility.slug} className="h-full">
                <InView delay={Math.min(i * 70, 350)} className="h-full">
                  <TiltCard className="h-full">
                    <Link
                      href={`/facilities/${facility.slug}`}
                      aria-label={`Explore ${facility.name}`}
                      className="card card-hover group flex h-full flex-col"
                    >
                      <span className="relative block h-52 overflow-hidden">
                        <Image
                          src={facility.image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#062324] via-[#062324]/15 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full border border-[#fdd693]/30 bg-black/40 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#fdd693] backdrop-blur-md">
                          {facility.tag}
                        </span>
                      </span>

                      <span className="block flex-1 p-6 sm:p-7">
                        <span className="block text-xl font-extrabold tracking-tight text-white">
                          {facility.name}
                        </span>
                        <span className="mt-4 block text-sm leading-relaxed text-slate-300">
                          {facility.description}
                        </span>
                        <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#fdd693]">
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
