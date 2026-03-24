"use client";

import Link from "next/link";

const footerColumns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "AI Marketing", href: "/ai-marketing" },
      { label: "Website & Platform Modernisation", href: "/services/platform-engineering" },
      { label: "AI Activation", href: "/services/ai-enablement" },
      { label: "Personalisation & Experimentation", href: "/services/personalisation-experimentation" },
      { label: "Data & Insights", href: "/services/data-insights" },
      { label: "Delivery & Engineering", href: "/services/platform-engineering" },
      { label: "UX & Product Design", href: "/services/ux-product-design" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
      { label: "Platforms", href: "/platforms" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] py-[70px] max-sm:py-[40px]" style={{ borderTop: '1px solid #E5E7EB' }}>
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        {/* Main grid: logo col + 2 link cols */}
        <div
          className="grid gap-12 max-md:grid-cols-2 max-sm:grid-cols-1"
          style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
        >
          {/* Column 1: Logo + tagline + LinkedIn */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <span className="font-serif-italic text-[22px]" style={{ color: '#191A23' }}>
                Analogiq
              </span>
            </Link>
            <p className="text-[14px] leading-[1.65] max-w-[260px]" style={{ color: '#6B7280' }}>
              Helping enterprise organisations close the Digital Activation Gap.
            </p>
            <Link
              href="https://www.linkedin.com/company/analogiq1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start text-[14px] font-semibold transition-all duration-200"
              style={{ backgroundColor: '#0A66C2', color: '#ffffff', borderRadius: 999, padding: '10px 20px' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0958a8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; }}
            >
              Follow us on LinkedIn →
            </Link>
          </div>

          {/* Columns 2–3: link groups */}
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
          <div className="flex items-center gap-6 flex-wrap">
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
