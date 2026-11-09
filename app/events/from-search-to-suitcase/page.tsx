import type { Metadata } from "next";
import PageClient from "./PageClient";
import "./styles.css";

export const metadata: Metadata = {
  title: "From search to suitcase: AI agents in travel, now to 2030",
  description:
    "A breakfast roundtable for travel marketing leaders. Duck and Waffle, Tuesday 8 December, 8.30 to 10.30. Invitation only.",
  openGraph: {
    title: "From search to suitcase: AI agents in travel, now to 2030",
    description:
      "A breakfast roundtable for travel marketing leaders. Duck and Waffle, Tuesday 8 December, 8.30 to 10.30. Invitation only.",
    url: "https://analogiq.io/events/from-search-to-suitcase",
    siteName: "Analogiq",
    type: "website",
    images: [
      {
        url: "https://analogiq.io/events/from-search-to-suitcase/og-event-from-search-to-suitcase.png",
        width: 1200,
        height: 628,
        alt: "From search to suitcase, 8 December, Duck and Waffle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From search to suitcase: AI agents in travel, now to 2030",
    description:
      "A breakfast roundtable for travel marketing leaders. Duck and Waffle, Tuesday 8 December, 8.30 to 10.30. Invitation only.",
    images: [
      "https://analogiq.io/events/from-search-to-suitcase/og-event-from-search-to-suitcase.png",
    ],
  },
  robots: { index: false, follow: false },
};

export default function TravelBreakfastPage() {
  return <PageClient />;
}
