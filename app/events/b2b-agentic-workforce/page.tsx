import type { Metadata } from "next";
import PageClient from "./PageClient";
import "./styles.css";

export const metadata: Metadata = {
  title: "AI in the Wild: Scaling B2B marketing with the agentic workforce",
  robots: { index: false, follow: false },
};

export default function B2BWorkshopPage() {
  return <PageClient />;
}
