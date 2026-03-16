"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/ai", label: "AI Marketing" },
  { href: "/platforms", label: "DXP & Platforms" },
  { href: "/services", label: "What We Do" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
            style={{ color: scrolled ? '#191A23' : '#ffffff' }}
          >
            Analogiq
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[15px] font-normal transition-colors duration-300"
              style={{ color: scrolled ? '#6B7280' : 'rgba(255,255,255,0.80)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button
          asChild
          className="hidden lg:inline-flex text-[14px] border-0 hover:opacity-90 transition-opacity"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 500,
            borderRadius: 14,
            padding: '10px 20px',
            height: 'auto',
            backgroundColor: '#D4500F',
            color: '#ffffff',
            boxShadow: '0 4px 0 0 #191A23',
          }}
        >
          <Link href="/contact">Start a conversation</Link>
        </Button>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 transition-colors"
          style={{ color: scrolled ? '#191A23' : '#ffffff' }}
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
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-[#E5E7EB] shadow-lg">
          <div className="max-w-[1440px] mx-auto px-8 py-6 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[15px] transition-colors"
                style={{ color: '#6B7280' }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              asChild
              className="text-[14px] border-0 hover:opacity-90 transition-opacity mt-2 w-full justify-center"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 500,
                borderRadius: 14,
                padding: '12px 20px',
                height: 'auto',
                backgroundColor: '#D4500F',
                color: '#ffffff',
                boxShadow: '0 4px 0 0 #191A23',
              }}
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Start a conversation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
