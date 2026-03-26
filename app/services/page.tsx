import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Digital Marketing & Platform Services | Analogiq",
  description: "Platform modernisation, AI activation, personalisation, data and UX services for enterprise marketing teams.",
  alternates: { canonical: "https://analogiq.io/services" },
  openGraph: {
    title: "Digital Marketing & Platform Services | Analogiq",
    description: "Platform modernisation, AI activation, personalisation, data and UX services for enterprise marketing teams.",
    url: "https://analogiq.io/services",
  },
};

export default function Page() {
  return <PageClient />;
}
