// Extracted from app/page.tsx 2026-10-06.
// Also used on app/audit/page.tsx. Pass style to adjust outer margin.
// Logos, scroll behaviour and greyscale are identical on both pages.
import type { CSSProperties } from "react";

const CLIENT_LOGOS = [
  { src: "/img/logo-hsbc.svg",                  alt: "HSBC" },
  { src: "/img/logo-capco-logo.png",             alt: "Capco" },
  { src: "/img/logo-keith-prowse-new.png",       alt: "Keith Prowse" },
  { src: "/img/logo-sunlife.webp",               alt: "SunLife" },
  { src: "/img/logo-jet2.svg",                   alt: "Jet2" },
  { src: "/img/logo-bhf.svg",                    alt: "British Heart Foundation" },
  { src: "/img/logo-cystic-fibrosis-trust.png",  alt: "Cystic Fibrosis Trust" },
  { src: "/img/logo-shoosmiths.png",             alt: "Shoosmiths" },
  { src: "/img/logo-premium-credit.png",         alt: "Premium Credit" },
  { src: "/img/logo-costcutter.png",             alt: "Costcutter" },
  { src: "/img/logo-bank-workers-charity.png",   alt: "Bank Workers Charity" },
  { src: "/img/logo-leeds-beckett.png",          alt: "Leeds Beckett" },
  { src: "/img/logo-maples.svg",                 alt: "Maples" },
  { src: "/img/logo-experience-golf.png",        alt: "Experience Golf" },
];

export default function LogoStrip({ style }: { style?: CSSProperties }) {
  return (
    <div className="logostrip" style={style}>
      <div className="logotrack">
        {CLIENT_LOGOS.map((l) => (
          <span className="lg" key={l.alt}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.src} alt={l.alt} />
          </span>
        ))}
        {CLIENT_LOGOS.map((l) => (
          <span className="lg lg-dup" key={l.alt + "-2"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.src} alt="" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
