import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://analogiq.io"),
  title: {
    default: "Digital Platform & AI Marketing Consultancy | Analogiq",
    template: "%s | Analogiq",
  },
  description:
    "We help enterprise marketing teams modernise platforms, activate AI and improve performance. Sitecore, composable DXP and marketing technology experts.",
  keywords: [
    "digital consultancy",
    "digital transformation",
    "AI marketing",
    "martech",
    "composable architecture",
    "Sitecore",
    "DXP",
    "platform modernisation",
  ],
  authors: [{ name: "Analogiq" }],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  alternates: {
    canonical: "https://analogiq.io",
  },
  openGraph: {
    type: "website",
    siteName: "Analogiq",
    locale: "en_GB",
    title: "Digital Platform & AI Marketing Consultancy | Analogiq",
    description:
      "We help enterprise marketing teams modernise platforms, activate AI and improve performance.",
    url: "https://analogiq.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Platform & AI Marketing Consultancy | Analogiq",
    description:
      "We help enterprise marketing teams modernise platforms, activate AI and improve performance.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Analogiq",
  "url": "https://analogiq.io",
  "email": "hello@analogiq.io",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 East Grinstead Road",
    "addressLocality": "Lingfield",
    "addressCountry": "GB",
  },
  "description": "Digital platform and AI marketing consultancy helping enterprise organisations modernise platforms and activate AI.",
  "serviceType": ["Sitecore Consultancy", "Composable DXP", "AI Marketing", "Platform Modernisation", "Personalisation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
