import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Rebuilding Capco's Digital Platform in 120 Days | Analogiq",
  description: "How Analogiq rebuilt Capco's global digital platform from scratch in 120 days, reducing update SLA from 14 days to 24 hours.",
  alternates: { canonical: "https://analogiq.io/work/capco-platform" },
  openGraph: {
    title: "Rebuilding Capco's Digital Platform in 120 Days | Analogiq",
    description: "How Analogiq rebuilt Capco's global digital platform from scratch in 120 days, reducing update SLA from 14 days to 24 hours.",
    url: "https://analogiq.io/work/capco-platform",
  },
};

export default function Page() {
  return <PageClient />;
}
