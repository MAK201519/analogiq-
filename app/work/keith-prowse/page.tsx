import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Long-Term Sitecore Partnership with Keith Prowse | Analogiq",
  description: "How Analogiq has been the Sitecore technical partner for Keith Prowse since 2021, modernising their digital sales channel.",
  alternates: { canonical: "https://analogiq.io/work/keith-prowse" },
  openGraph: {
    title: "Long-Term Sitecore Partnership with Keith Prowse | Analogiq",
    description: "How Analogiq has been the Sitecore technical partner for Keith Prowse since 2021, modernising their digital sales channel.",
    url: "https://analogiq.io/work/keith-prowse",
  },
};

export default function Page() {
  return <PageClient />;
}
