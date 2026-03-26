import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Personalisation Strategy for Jet2 | Analogiq",
  description: "How Analogiq designed and implemented a personalisation strategy for Jet2 on Sitecore.",
  alternates: { canonical: "https://analogiq.io/work/jet2" },
  openGraph: {
    title: "Personalisation Strategy for Jet2 | Analogiq",
    description: "How Analogiq designed and implemented a personalisation strategy for Jet2 on Sitecore.",
    url: "https://analogiq.io/work/jet2",
  },
};

export default function Page() {
  return <PageClient />;
}
