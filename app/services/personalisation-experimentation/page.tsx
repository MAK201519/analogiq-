import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Personalisation & Experimentation Services | Analogiq",
  description: "Move personalisation from pilot to production. Build experimentation frameworks that continuously improve performance.",
  alternates: { canonical: "https://analogiq.io/services/personalisation-experimentation" },
  openGraph: {
    title: "Personalisation & Experimentation Services | Analogiq",
    description: "Move personalisation from pilot to production. Build experimentation frameworks that continuously improve performance.",
    url: "https://analogiq.io/services/personalisation-experimentation",
  },
};

export default function Page() {
  return <PageClient />;
}
