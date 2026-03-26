import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AI Personalisation & Lead Scoring for Capco | Analogiq",
  description: "How Analogiq transformed Capco's digital engagement with AI personalisation, delivering over £1M in confirmed sales.",
  alternates: { canonical: "https://analogiq.io/work/capco" },
  openGraph: {
    title: "AI Personalisation & Lead Scoring for Capco | Analogiq",
    description: "How Analogiq transformed Capco's digital engagement with AI personalisation, delivering over £1M in confirmed sales.",
    url: "https://analogiq.io/work/capco",
  },
};

export default function Page() {
  return <PageClient />;
}
