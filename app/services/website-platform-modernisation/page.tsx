import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Website & Platform Modernisation Services | Analogiq",
  description: "Modernise your digital platform to improve speed, flexibility and performance. Launch faster without full replatforming.",
  alternates: { canonical: "https://analogiq.io/services/website-platform-modernisation" },
  openGraph: {
    title: "Website & Platform Modernisation Services | Analogiq",
    description: "Modernise your digital platform to improve speed, flexibility and performance. Launch faster without full replatforming.",
    url: "https://analogiq.io/services/website-platform-modernisation",
  },
};

export default function Page() {
  return <PageClient />;
}
