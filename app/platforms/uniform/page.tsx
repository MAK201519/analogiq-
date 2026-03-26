import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Uniform DXP Implementation & Composable Architecture | Analogiq",
  description: "Unlock faster marketing with Uniform. Add a composable experience layer without rebuilding your platform.",
  alternates: { canonical: "https://analogiq.io/platforms/uniform" },
  openGraph: {
    title: "Uniform DXP Implementation & Composable Architecture | Analogiq",
    description: "Unlock faster marketing with Uniform. Add a composable experience layer without rebuilding your platform.",
    url: "https://analogiq.io/platforms/uniform",
  },
};

export default function Page() {
  return <PageClient />;
}
