import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FacilityPage } from "@/components/pages/FacilityPage";
import { FACILITIES, getFacilityBySlug } from "@/data/facilities";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return FACILITIES.map((facility) => ({ slug: facility.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) return {};
  return {
    title: facility.name,
    description: facility.description,
    openGraph: {
      images: [facility.image],
      type: "website",
    },
  };
}

export default function FacilityDetailPage({ params }: Props) {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) notFound();
  return <FacilityPage facility={facility} />;
}