"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // /audit is a standalone page (Savoy business-card route, no site nav or footer).
  // Added 2026-10-06 — same seal as /events/; /audit does not share the /events/ prefix.
  const isStandalone = pathname.startsWith("/events/") || pathname === "/audit";

  return (
    <>
      {!isStandalone && <SiteHeader />}
      {children}
      {!isStandalone && <SiteFooter />}
    </>
  );
}
