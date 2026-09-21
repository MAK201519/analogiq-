import type { Metadata } from "next";
import PageClient from "./PageClient";
import "./styles.css";

export const metadata: Metadata = {
  title: "Why most AI marketing pilots fail | AI in the Wild | Analogiq",
  description:
    "8 common reasons why AI pilots fail to take off, explored in a 45-minute webinar from the AI in the Wild meetup.",
  alternates: { canonical: "https://analogiq.io/events/why-ai-pilots-fail" },
  openGraph: {
    title: "Why most AI marketing pilots fail",
    description:
      "8 common reasons why AI pilots fail to take off, explored in a 45-minute webinar from the AI in the Wild meetup.",
    url: "https://analogiq.io/events/why-ai-pilots-fail",
  },
};

export default function WhyAIPilotsFailPage() {
  return <PageClient />;
}
