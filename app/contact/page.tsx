import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Start a Conversation | Analogiq",
  description: "Talk to us about your platform, AI or marketing technology challenge. We work with a focused number of organisations at any given time.",
  alternates: { canonical: "https://analogiq.io/contact" },
  openGraph: {
    title: "Start a Conversation | Analogiq",
    description: "Talk to us about your platform, AI or marketing technology challenge. We work with a focused number of organisations at any given time.",
    url: "https://analogiq.io/contact",
  },
};

export default function Page() {
  return <PageClient />;
}
