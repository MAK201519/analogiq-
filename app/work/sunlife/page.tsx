import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Data Strategy & MarTech Assessment for SunLife | Analogiq",
  description: "How Analogiq built the data foundations and MarTech strategy for a major financial services brand.",
  alternates: { canonical: "https://analogiq.io/work/sunlife" },
  openGraph: {
    title: "Data Strategy & MarTech Assessment for SunLife | Analogiq",
    description: "How Analogiq built the data foundations and MarTech strategy for a major financial services brand.",
    url: "https://analogiq.io/work/sunlife",
  },
};

export default function Page() {
  return <PageClient />;
}
