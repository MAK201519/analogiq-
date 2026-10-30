import type { Metadata } from "next";
import PageClient from "./PageClient";
import "./styles.css";

export const metadata: Metadata = {
  title: "From search to suitcase",
  robots: { index: false, follow: false },
};

export default function TravelBreakfastPage() {
  return <PageClient />;
}
