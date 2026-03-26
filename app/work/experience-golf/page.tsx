import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Sitecore Ecommerce Platform for Experience Golf | Analogiq",
  description: "How Analogiq delivered an ecommerce platform on Sitecore for The Experience Golf in 6 months.",
  alternates: { canonical: "https://analogiq.io/work/experience-golf" },
  openGraph: {
    title: "Sitecore Ecommerce Platform for Experience Golf | Analogiq",
    description: "How Analogiq delivered an ecommerce platform on Sitecore for The Experience Golf in 6 months.",
    url: "https://analogiq.io/work/experience-golf",
  },
};

export default function Page() {
  return <PageClient />;
}
