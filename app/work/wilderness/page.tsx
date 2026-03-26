import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Doubling Conversion Rate for Wilderness Destinations | Analogiq",
  description: "How Analogiq doubled conversion rate and reduced CPA by 63% for a luxury safari brand through CRO and landing page optimisation.",
  alternates: { canonical: "https://analogiq.io/work/wilderness" },
  openGraph: {
    title: "Doubling Conversion Rate for Wilderness Destinations | Analogiq",
    description: "How Analogiq doubled conversion rate and reduced CPA by 63% for a luxury safari brand through CRO and landing page optimisation.",
    url: "https://analogiq.io/work/wilderness",
  },
};

export default function Page() {
  return <PageClient />;
}
