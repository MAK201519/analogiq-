import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "DXP & Composable Platform Consultancy | Analogiq",
  description: "Modernise your digital platform without unnecessary rebuilds. Experts in Sitecore, composable DXP and marketing platform transformation.",
  alternates: { canonical: "https://analogiq.io/platforms" },
  openGraph: {
    title: "DXP & Composable Platform Consultancy | Analogiq",
    description: "Modernise your digital platform without unnecessary rebuilds. Experts in Sitecore, composable DXP and marketing platform transformation.",
    url: "https://analogiq.io/platforms",
  },
};

export default function Page() {
  return <PageClient />;
}
