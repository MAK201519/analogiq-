import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AI Marketing Implementation & Activation | Analogiq",
  description: "Move AI from experimentation to production. We help marketing teams implement AI, connect data and deliver measurable results.",
  alternates: { canonical: "https://analogiq.io/ai-marketing" },
  openGraph: {
    title: "AI Marketing Implementation & Activation | Analogiq",
    description: "Move AI from experimentation to production. We help marketing teams implement AI, connect data and deliver measurable results.",
    url: "https://analogiq.io/ai-marketing",
  },
};

export default function Page() {
  return <PageClient />;
}
