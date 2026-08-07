import type { Metadata } from "next";
import { FacilitiesOverview } from "@/components/pages/FacilitiesOverview";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore every space at Bhaktapur Wellness — high-performance gym, pro boxing studio, heated pool, luxury spa & sauna, jacuzzi, beauty salon, and organic restaurant.",
};

export default function FacilitiesPage() {
  return <FacilitiesOverview />;
}
