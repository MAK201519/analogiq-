import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Marketing Data & Analytics Consulting | Analogiq",
  description: "Turn data into decisions. We design data infrastructure, analytics and reporting that supports AI and marketing performance.",
  alternates: { canonical: "https://analogiq.io/services/data-insights" },
  openGraph: {
    title: "Marketing Data & Analytics Consulting | Analogiq",
    description: "Turn data into decisions. We design data infrastructure, analytics and reporting that supports AI and marketing performance.",
    url: "https://analogiq.io/services/data-insights",
  },
};

export default function Page() {
  return <PageClient />;
}
