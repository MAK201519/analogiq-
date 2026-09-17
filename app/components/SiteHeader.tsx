"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const WHAT_WE_DO = ["/approach", "/services", "/how-we-build", "/digital-services"];

const MARK = (
  <svg width="34" height="32" viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="4.4" rx="2.2" fill="#17111F" />
    <rect x="4" y="20.5" width="17" height="4.4" rx="2.2" fill="#5B2BD9" />
  </svg>
);

const ARW = (
  <span className="arw">
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"
        stroke="#5B2BD9"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

function activeStyle(active: boolean): React.CSSProperties | undefined {
  return active ? { color: "var(--purple)", fontWeight: 700 } : undefined;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const isWhatWeDo = WHAT_WE_DO.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  const isWork = pathname === "/work" || pathname.startsWith("/work/");
  const isWild =
    pathname === "/ai-in-the-wild" || pathname.startsWith("/ai-in-the-wild/");
  const isAbout = pathname === "/about" || pathname.startsWith("/about/");

  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="/">
          {MARK}
          <span className="word">analogiq</span>
        </a>

        <button
          className="menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => { if (o) setSubmenuOpen(false); return !o; })}
        >
          Menu
        </button>

        <nav>
          <ul className={`mainnav${open ? " open" : ""}`}>
            {/* What we do — hover dropdown */}
            <li
              className={`hasmenu${submenuOpen ? " sub-open" : ""}`}
              {...(isWhatWeDo ? { "data-active": "1" } : {})}
            >
              <span
                className="ntop"
                onClick={() => setSubmenuOpen((o) => !o)}
              >
                What we do <i className="ncar" aria-hidden="true" />
              </span>
              <ul className="submenu">
                <li>
                  <a href="/approach">Approach</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/how-we-build">Engineering</a>
                </li>
                <li>
                  <a href="/digital-services">DXP &amp; Platforms</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/work" style={activeStyle(isWork)}>
                Our work
              </a>
            </li>
            <li>
              <a href="/ai-in-the-wild" style={activeStyle(isWild)}>
                AI in the Wild
              </a>
            </li>
            <li>
              <a href="/about" style={activeStyle(isAbout)}>
                About
              </a>
            </li>
          </ul>
        </nav>

        <a className="btn" href="/contact">
          Contact us {ARW}
        </a>
      </div>
    </header>
  );
}
