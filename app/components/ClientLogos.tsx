"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos: { src: string; alt: string; height: number; svg?: boolean }[] = [
  { src: "/logos/hsbc.svg",                alt: "HSBC",                  height: 22,  svg: true },
  { src: "/logos/jet2.svg",                alt: "Jet2",                  height: 36,  svg: true },
  { src: "/logos/bhf.svg",                 alt: "British Heart Foundation", height: 40, svg: true },
  { src: "/logos/keith-prowse.png",        alt: "Keith Prowse",          height: 36 },
  { src: "/logos/sunlife.webp",            alt: "SunLife",               height: 32 },
  { src: "/logos/capco.png",               alt: "Capco",                 height: 28 },
  { src: "/logos/cystic-fibrosis-trust.png", alt: "Cystic Fibrosis Trust", height: 44 },
  { src: "/logos/shoosmiths.png",          alt: "Shoosmiths",            height: 28 },
  { src: "/logos/hogan-lovells.svg",       alt: "Hogan Lovells",         height: 32,  svg: true },
  { src: "/logos/adtran.svg",              alt: "Adtran",                height: 28,  svg: true },
];

const logoStyle = (hovered: boolean): React.CSSProperties => ({
  filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
  opacity: hovered ? 1 : 0.6,
  transition: "filter 300ms ease, opacity 300ms ease",
  objectFit: "contain",
  display: "block",
});

function LogoItem({ src, alt, height, svg }: { src: string; alt: string; height: number; svg?: boolean }) {
  const [hovered, setHovered] = useState(false);

  if (svg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        height={height}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ ...logoStyle(hovered), height, width: "auto" }}
      />
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height, display: "flex", alignItems: "center" }}
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={160}
        style={{ ...logoStyle(hovered), height, width: "auto" }}
      />
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section style={{ background: "#ffffff" }} className="py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="eyebrow text-center"
        >
          ORGANISATIONS WE&apos;VE SUPPORTED
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center flex-wrap max-w-[1100px] mx-auto"
          style={{ gap: "32px 40px" }}
        >
          {logos.map(({ src, alt, height, svg }) => (
            <LogoItem key={alt} src={src} alt={alt} height={height} svg={svg} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
