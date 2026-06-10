import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageClient from "./PageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== "practical-ai-for-marketing") {
    return { title: "Event Not Found" };
  }

  return {
    title:
      "Practical AI for Marketing: Real Use Cases, From Acquisition to Retention | Analogiq",
    description:
      "Acquisition, retention, conversion, search, forecasting and pricing. Real examples from real brands, every one with the outcome attached. Thursday 2 July, 2pm UK.",
    alternates: {
      canonical:
        "https://analogiq.io/events/practical-ai-for-marketing",
    },
    openGraph: {
      title:
        "Practical AI for Marketing: Real Use Cases, From Acquisition to Retention",
      description:
        "Acquisition, retention, conversion, search, forecasting and pricing. Real examples from real brands, every one with the outcome attached.",
      url: "https://analogiq.io/events/practical-ai-for-marketing",
      siteName: "Analogiq",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Practical AI for Marketing: Real Use Cases, From Acquisition to Retention",
      description:
        "Acquisition, retention, conversion, search, forecasting and pricing. Real examples from real brands. Thursday 2 July, 2pm UK.",
    },
  };
}

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Practical AI for Marketing: Real Use Cases, From Acquisition to Retention",
  description:
    "Acquisition, retention, conversion, search, forecasting and pricing. Real examples from real brands, every one with the outcome attached.",
  startDate: "2026-07-02T14:00:00+01:00",
  endDate: "2026-07-02T15:00:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode:
    "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: "https://analogiq.io/events/practical-ai-for-marketing",
  },
  organizer: {
    "@type": "Organization",
    name: "Analogiq",
    url: "https://analogiq.io",
  },
  performer: {
    "@type": "Person",
    name: "Mario Kyriacou",
    jobTitle: "Co-founder, Analogiq",
  },
  url: "https://analogiq.io/events/practical-ai-for-marketing",
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  if (slug !== "practical-ai-for-marketing") {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <PageClient />
    </>
  );
}
