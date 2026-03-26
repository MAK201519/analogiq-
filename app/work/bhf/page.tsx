import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Personalisation Programme for British Heart Foundation | Analogiq",
  description: "How Analogiq delivered content personalisation for the British Heart Foundation's Sudden Devastation campaign.",
  alternates: { canonical: "https://analogiq.io/work/bhf" },
  openGraph: {
    title: "Personalisation Programme for British Heart Foundation | Analogiq",
    description: "How Analogiq delivered content personalisation for the British Heart Foundation's Sudden Devastation campaign.",
    url: "https://analogiq.io/work/bhf",
  },
};

export default function Page() {
  return <PageClient />;
}
