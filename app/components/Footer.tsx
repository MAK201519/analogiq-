"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerColumns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "AI Marketing", href: "/ai-marketing" },
      { label: "Platform Engineering", href: "/services/platform-engineering" },
      { label: "UX & Product Design", href: "/services/ux-product-design" },
      { label: "Data & Insights", href: "/services/data-insights" },
      { label: "Personalisation & Experimentation", href: "/services/personalisation-experimentation" },
      { label: "AI Enablement", href: "/services/ai-enablement" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
      { label: "Platforms", href: "/platforms" },
    ],
  },
  {
    heading: "Follow us",
    links: [
      { label: "LinkedIn", href: "/" },
      { label: "Twitter", href: "/" },
      { label: "Instagram", href: "/" },
      { label: "YouTube", href: "/" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] py-[70px] max-sm:py-[40px]" style={{ borderTop: '1px solid #E5E7EB' }}>
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        {/* Main grid: 2fr 1fr 1fr 1fr */}
        <div
          className="grid gap-12 max-md:grid-cols-2 max-sm:grid-cols-1"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
        >
          {/* Column 1: Logo, tagline, newsletter */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <span className="font-serif-italic text-[22px]" style={{ color: '#191A23' }}>
                Analogiq
              </span>
            </Link>
            <p className="text-[14px] leading-[1.65] max-w-[260px]" style={{ color: '#6B7280' }}>
              Helping enterprise organisations close the Digital Activation Gap.
            </p>

            {/* Newsletter */}
            <form className="flex flex-col gap-2 mt-1" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full h-auto focus-visible:border-[#D4500F] focus-visible:ring-[#D4500F]/20"
                style={{
                  borderRadius: 10,
                  padding: '12px 16px',
                  fontSize: 14,
                  color: '#191A23',
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                }}
              />
              <Button
                type="submit"
                className="w-full text-[14px] font-semibold border-0 hover:opacity-90 transition-opacity"
                style={{
                  borderRadius: 10,
                  padding: '12px 0',
                  height: 'auto',
                  backgroundColor: '#D4500F',
                  color: '#ffffff',
                  boxShadow: '0 4px 0 0 #191A23',
                }}
              >
                Subscribe to insights
              </Button>
            </form>

            {/* Social links */}
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((platform) => (
                <Link
                  key={platform}
                  href="/"
                  className="text-[13px] hover:underline transition-colors"
                  style={{ color: '#6B7280' }}
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div>

          {/* Columns 2–4: link groups */}
          {footerColumns.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: '#191A23' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[14px] hover:underline transition-colors"
                      style={{ color: '#6B7280' }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: '1px solid #E5E7EB' }}>
          <p className="text-[13px]" style={{ color: '#9CA3AF' }}>
            © {year} Analogiq. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <Link
                key={item}
                href="/"
                className="text-[13px] hover:underline transition-colors"
                style={{ color: '#9CA3AF' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
