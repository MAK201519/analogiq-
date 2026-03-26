import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "UX & Product Design for Conversion | Analogiq",
  description: "We translate brand into high-performing digital experiences, grounded in data, behaviour and experimentation.",
  alternates: { canonical: "https://analogiq.io/services/ux-product-design" },
  openGraph: {
    title: "UX & Product Design for Conversion | Analogiq",
    description: "We translate brand into high-performing digital experiences, grounded in data, behaviour and experimentation.",
    url: "https://analogiq.io/services/ux-product-design",
  },
};

export default function Page() {
  return <PageClient />;
}
