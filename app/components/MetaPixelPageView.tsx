// Added 2026-10-10: fires fbq('track','PageView') on App Router client-side navigation.
// Skips the very first mount because the inline pixel snippet (layout.tsx) already
// fires PageView during init — preventing a double-fire on the landing page.
// Window.fbq global is declared in lib/metaPixel.ts.
"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return; // pixel init already fired PageView — skip first mount
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
