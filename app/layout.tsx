import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Analogiq — Digital Consultancy",
  description:
    "Analogiq helps enterprise organisations close the Digital Activation Gap — the distance between marketing ambition and platform capability.",
  keywords: [
    "digital consultancy",
    "digital transformation",
    "AI marketing",
    "martech",
    "composable architecture",
  ],
  authors: [{ name: "Analogiq" }],
  openGraph: {
    title: "Analogiq — Digital Consultancy",
    description:
      "Closing the Digital Activation Gap for enterprise organisations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analogiq — Digital Consultancy",
    description:
      "Closing the Digital Activation Gap for enterprise organisations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
