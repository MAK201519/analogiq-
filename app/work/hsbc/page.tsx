import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "12:1 ROI Across 24 Experiments for HSBC | Analogiq",
  description: "How Analogiq delivered 12:1 ROI across 24 experiments in 6 markets for HSBC Business Banking.",
  alternates: { canonical: "https://analogiq.io/work/hsbc" },
  openGraph: {
    title: "12:1 ROI Across 24 Experiments for HSBC | Analogiq",
    description: "How Analogiq delivered 12:1 ROI across 24 experiments in 6 markets for HSBC Business Banking.",
    url: "https://analogiq.io/work/hsbc",
  },
};

export default function Page() {
  return <PageClient />;
}
