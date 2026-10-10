import Image from "next/image";
import Link from "next/link";
import { FACILITIES } from "@/data/facilities";
import { CONTACT } from "@/constants/constants";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiClock,
} from "react-icons/fi";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: FiInstagram },
  { label: "Facebook", href: "#", Icon: FiFacebook },
  { label: "YouTube", href: "#", Icon: FiYoutube },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#fdd693]/15 bg-[#031718] py-14 text-white md:py-16">
      <div
        aria-hidden="true"
        className="ambient-glow left-1/2 top-full h-48 w-[min(50rem,90vw)] -translate-x-1/2 -translate-y-1/3 bg-[#fdd693]/10 blur-[100px]"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 rounded-xl" aria-label="Bhaktapur Wellness — Home">
              <span className="relative block h-11 w-11 overflow-hidden rounded-full border border-[#fdd693]/50 shadow-lg">
                <Image
                  src="/images/gallery/bw.jpg"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#fdd693]">
                  Bhaktapur
                </span>
                <span className="text-xl font-extrabold tracking-[0.06em] text-white">
                  Wellness
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              Nepal&apos;s integrated sanctuary — gym performance, pro boxing,
              heated pool, luxury spa &amp; sauna rituals, and organic dining
              under one roof.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#fdd693]" />
              Bhaktapur, Nepal · Open 7 days a week
            </p>
          </div>

          <nav aria-label="Facilities" className="lg:col-span-3">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693]">
              Core Facilities
            </h2>
            <ul className="space-y-2.5 text-sm">
              {FACILITIES.map((facility) => {
                const FacilityIcon = facility.icon;
                return (
                  <li key={facility.slug}>
                    <Link
                      href={`/facilities/${facility.slug}`}
                      className="inline-flex items-center gap-2 rounded-md text-slate-300 transition-colors hover:text-[#fdd693]"
                    >
                      <FacilityIcon aria-hidden="true" className="h-4 w-4 text-slate-400" />
                      {facility.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693]">
              Contact &amp; Hours
            </h2>
            <address className="space-y-3 text-sm not-italic text-slate-300">
              <p className="flex items-center gap-2.5">
                <FiMapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-[#fdd693]/80" />
                {CONTACT.address}
              </p>
              <p className="flex items-center gap-2.5">
                <FiPhone aria-hidden="true" className="h-4 w-4 shrink-0 text-[#fdd693]/80" />
                <a href="tel:+9779800000000" className="rounded transition-colors hover:text-[#fdd693]">
                  {CONTACT.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <FiMail aria-hidden="true" className="h-4 w-4 shrink-0 text-[#fdd693]/80" />
                <a href={`mailto:${CONTACT.email}`} className="rounded break-all transition-colors hover:text-[#fdd693]">
                  {CONTACT.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5 border-t border-white/10 pt-3 text-xs">
                <FiClock aria-hidden="true" className="h-4 w-4 shrink-0 text-[#fdd693]/80" />
                <span>
                  <span className="font-semibold text-[#fdd693]">Hours: </span>
                  {CONTACT.hours}
                </span>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Bhaktapur Wellness Complex. All rights reserved.</p>
          <ul className="flex items-center gap-2" aria-label="Social media">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={`Bhaktapur Wellness on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-[#fdd693]/40 hover:text-[#fdd693]"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
