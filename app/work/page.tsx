import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Client Work & Case Studies | Analogiq",
  description: "Real engagements. Measurable outcomes. See how we have helped organisations modernise platforms, activate AI and improve marketing performance.",
  alternates: { canonical: "https://analogiq.io/work" },
  openGraph: {
    title: "Client Work & Case Studies | Analogiq",
    description: "Real engagements. Measurable outcomes. See how we have helped organisations modernise platforms, activate AI and improve marketing performance.",
    url: "https://analogiq.io/work",
  },
};

export default function Page() {
  return <PageClient />;
}
