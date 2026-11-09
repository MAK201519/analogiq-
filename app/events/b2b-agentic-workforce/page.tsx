import type { Metadata } from "next";
import PageClient from "./PageClient";
import "./styles.css";

export const metadata: Metadata = {
  title: "AI in the Wild: Scaling B2B marketing with the agentic workforce",
  description:
    "A hands-on half-day workshop for B2B marketers. The Mandeville Hotel, Marylebone, Tuesday 1 December, 2.00 to 5.00. Invitation only.",
  openGraph: {
    title: "AI in the Wild: Scaling B2B marketing with the agentic workforce",
    description:
      "A hands-on half-day workshop for B2B marketers. The Mandeville Hotel, Marylebone, Tuesday 1 December, 2.00 to 5.00. Invitation only.",
    url: "https://analogiq.io/events/b2b-agentic-workforce",
    siteName: "Analogiq",
    type: "website",
    images: [
      {
        url: "https://analogiq.io/events/b2b-agentic-workforce/og-event-b2b-agentic-workforce.png",
        width: 1200,
        height: 630,
        alt: "The B2Bs: The agentic workforce tour, 1 December, The Mandeville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in the Wild: Scaling B2B marketing with the agentic workforce",
    description:
      "A hands-on half-day workshop for B2B marketers. The Mandeville Hotel, Marylebone, Tuesday 1 December, 2.00 to 5.00. Invitation only.",
    images: [
      "https://analogiq.io/events/b2b-agentic-workforce/og-event-b2b-agentic-workforce.png",
    ],
  },
  robots: { index: false, follow: false },
};

export default function B2BWorkshopPage() {
  return <PageClient />;
}
