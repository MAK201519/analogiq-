"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type NavChild = { href: string; label: string };
type NavItem =
  | { href: string; label: string; children?: undefined }
  | { href: string; label: string; children: NavChild[] };

const navLinks: NavItem[] = [
  { href: "/ai-marketing", label: "AI Marketing" },
  {
    href: "/platforms",
    label: "DXP & Platforms",
    children: [
      { href: "/platforms", label: "Digital Experience Platforms" },
      { href: "/platforms/sitecore", label: "Sitecore" },
      { href: "/platforms/uniform", label: "Uniform" },
    ],
  },
  {
    href: "/services",
    label: "What We Do",
    children: [
      { href: "/services/website-platform-modernisation", label: "Website & Platform Modernisation" },
      { href: "/services/ai-enablement", label: "AI Activation" },
      { href: "/services/personalisation-experimentation", label: "Personalisation & Experimentation" },
      { href: "/services/data-insights", label: "Data & Insights" },
      { href: "/services/ux-product-design", label: "UX & Product Design" },
    ],
  },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 12px)",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#ffffff",
  border: "1px solid #E5E7EB",
  borderRadius: 12,
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  minWidth: 220,
  zIndex: 200,
  overflow: "hidden",
};

function DropdownItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        padding: "10px 20px",
        fontSize: 15,
        fontWeight: 400,
        color: hovered ? "#D4500F" : "#6B7280",
        transition: "color 0.15s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </Link>
  );
}

function DesktopNavItem({
  item,
  scrolled,
}: {
  item: NavItem;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 80);
  }

  const textColor = scrolled ? "#6B7280" : "rgba(255,255,255,0.80)";

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-[15px] font-normal transition-colors duration-300"
        style={{ color: textColor }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-1">
        <Link
          href={item.href}
          className="text-[15px] font-normal transition-colors duration-300"
          style={{ color: textColor }}
        >
          {item.label}
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`Toggle ${item.label} submenu`}
          style={{ color: textColor, background: "none", border: "none", cursor: "pointer", padding: "2px 2px 2px 0", lineHeight: 0 }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transition: "transform 0.15s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              opacity: 0.6,
            }}
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dropdown panel */}
      <div
        style={{
          ...dropdownStyle,
          opacity: open ? 1 : 0,
          transform: `translateX(-50%) translateY(${open ? "0px" : "-4px"})`,
          transition: "opacity 0.15s ease, transform 0.15s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {item.children.map((child) => (
          <DropdownItem key={child.href} href={child.href} label={child.label} />
        ))}
      </div>
    </div>
  );
}

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] h-[68px] transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white border-b border-[#E5E7EB]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[100px] max-lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span
            className="font-serif-italic text-[22px] transition-colors duration-300"
            style={{ color: scrolled ? "#191A23" : "#ffffff" }}
          >
            Analogiq
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <DesktopNavItem key={item.href} item={item} scrolled={scrolled} />
          ))}
        </nav>

        {/* CTA */}
        <Button
          asChild
          className="hidden md:inline-flex text-[14px] border-0 hover:opacity-90 transition-opacity"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 500,
            borderRadius: 14,
            padding: "10px 20px",
            height: "auto",
            backgroundColor: "#D4500F",
            color: "#ffffff",
            boxShadow: "0 4px 0 0 #191A23",
          }}
        >
          <Link href="/contact">Start a conversation</Link>
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: "#D4500F" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-[#E5E7EB] shadow-lg z-[200]">
          <div className="max-w-[1440px] mx-auto px-8 py-6 flex flex-col gap-1">
            {navLinks.map((item) =>
              !item.children ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] flex items-center transition-colors"
                  style={{ color: "#6B7280", minHeight: 48 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.href}>
                  <div className="flex items-center justify-between" style={{ padding: "0", minHeight: 48 }}>
                    <Link
                      href={item.href}
                      className="text-[15px]"
                      style={{ color: "#6B7280" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      style={{ color: "#6B7280", background: "none", border: "none", cursor: "pointer", padding: "2px 4px", lineHeight: 0 }}
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.href ? null : item.href)
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          transition: "transform 0.15s ease",
                          transform: mobileExpanded === item.href ? "rotate(180deg)" : "rotate(0deg)",
                          opacity: 0.6,
                        }}
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  {mobileExpanded === item.href && (
                    <div className="flex flex-col pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-[14px] py-2 transition-colors"
                          style={{ color: "#9CA3AF" }}
                          onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <Button
              asChild
              className="text-[14px] border-0 hover:opacity-90 transition-opacity mt-4 w-full justify-center"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 500,
                borderRadius: 14,
                padding: "12px 20px",
                height: "auto",
                backgroundColor: "#D4500F",
                color: "#ffffff",
                boxShadow: "0 4px 0 0 #191A23",
              }}
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Start a conversation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
