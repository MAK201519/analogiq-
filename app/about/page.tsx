import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "About Analogiq | Digital Platform & AI Consultancy",
  description: "Analogiq helps organisations close the gap between marketing ambition and platform reality through strategy, design and delivery.",
  alternates: { canonical: "https://analogiq.io/about" },
  openGraph: {
    title: "About Analogiq | Digital Platform & AI Consultancy",
    description: "Analogiq helps organisations close the gap between marketing ambition and platform reality through strategy, design and delivery.",
    url: "https://analogiq.io/about",
  },
};

export default function Page() {
  return <PageClient />;
}
