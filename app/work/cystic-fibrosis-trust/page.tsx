import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "29% Increase in Donation Page Visits for Cystic Fibrosis Trust | Analogiq",
  description: "How Analogiq increased donation page visits by 29% through CRO and content personalisation.",
  alternates: { canonical: "https://analogiq.io/work/cystic-fibrosis-trust" },
  openGraph: {
    title: "29% Increase in Donation Page Visits for Cystic Fibrosis Trust | Analogiq",
    description: "How Analogiq increased donation page visits by 29% through CRO and content personalisation.",
    url: "https://analogiq.io/work/cystic-fibrosis-trust",
  },
};

export default function Page() {
  return <PageClient />;
}
