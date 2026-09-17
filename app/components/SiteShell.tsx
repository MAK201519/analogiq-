"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = pathname.startsWith("/events/");

  return (
    <>
      {!isStandalone && <SiteHeader />}
      {children}
      {!isStandalone && <SiteFooter />}
    </>
  );
}
