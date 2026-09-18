import type { Metadata } from "next";
import PageClient from "./PageClient";
import "./styles.css";

export const metadata: Metadata = {
  title: "Why most AI marketing pilots fail | AI in the Wild | Analogiq",
  description:
    "Seven reasons AI proofs of concept stall inside marketing teams, and the six things the ones that survive have in common. A 45-minute webinar from the AI in the Wild meetup.",
  robots: { index: false },
  alternates: { canonical: "https://analogiq.io/events/why-ai-pilots-fail" },
  openGraph: {
    title: "Why most AI marketing pilots fail",
    description:
      "Seven reasons AI proofs of concept stall inside marketing teams, and the six things the ones that survive have in common. A 45-minute webinar from the AI in the Wild meetup.",
    url: "https://analogiq.io/events/why-ai-pilots-fail",
  },
};

export default function WhyAIPilotsFailPage() {
  return <PageClient />;
}
