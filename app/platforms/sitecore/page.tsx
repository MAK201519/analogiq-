import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Sitecore Consultancy & XM Cloud Migration | Analogiq",
  description: "Get more from Sitecore. From XP optimisation to XM Cloud and composable architectures, we help you modernise and improve performance.",
  alternates: { canonical: "https://analogiq.io/platforms/sitecore" },
  openGraph: {
    title: "Sitecore Consultancy & XM Cloud Migration | Analogiq",
    description: "Get more from Sitecore. From XP optimisation to XM Cloud and composable architectures, we help you modernise and improve performance.",
    url: "https://analogiq.io/platforms/sitecore",
  },
};

export default function Page() {
  return <PageClient />;
}
