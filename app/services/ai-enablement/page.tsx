import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AI Activation & Enablement Services | Analogiq",
  description: "Move AI from pilot to production. We embed AI into marketing workflows, platforms and data infrastructure to deliver measurable results.",
  alternates: { canonical: "https://analogiq.io/services/ai-enablement" },
  openGraph: {
    title: "AI Activation & Enablement Services | Analogiq",
    description: "Move AI from pilot to production. We embed AI into marketing workflows, platforms and data infrastructure to deliver measurable results.",
    url: "https://analogiq.io/services/ai-enablement",
  },
};

export default function Page() {
  return <PageClient />;
}
