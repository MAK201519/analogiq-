import type { Metadata } from "next";
import PageClient from "./PageClient";
import "./styles.css";

export const metadata: Metadata = {
  title: "AI in the Wild: Scaling B2B marketing with the agentic workforce",
  description: "A hands-on afternoon for B2B marketing leaders on what AI agents can take off your team's plate. Tuesday 1 December, The Mandeville, Marylebone.",
  openGraph: {
    description: "A hands-on afternoon for B2B marketing leaders on what AI agents can take off your team's plate. Tuesday 1 December, The Mandeville, Marylebone.",
  },
  robots: { index: false, follow: false },
};

export default function B2BWorkshopPage() {
  return <PageClient />;
}
