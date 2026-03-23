"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/logos/hsbc.svg",                alt: "HSBC",                    height: 22,  invert: false },
  { src: "/logos/jet2.svg",                alt: "Jet2",                    height: 32,  invert: false },
  { src: "/logos/bhf.svg",                 alt: "British Heart Foundation", height: 38,  invert: false },
  { src: "/logos/keith-prowse.png",        alt: "Keith Prowse",            height: 32,  invert: false },
  { src: "/logos/sunlife.webp",            alt: "SunLife",                 height: 30,  invert: false },
  { src: "/logos/capco.png",              alt: "Capco",                   height: 26,  invert: true  },
  { src: "/logos/cystic-fibrosis-trust.png", alt: "Cystic Fibrosis Trust", height: 36,  invert: false },
  { src: "/logos/shoosmiths.png",          alt: "Shoosmiths",              height: 24,  invert: false },
  { src: "/logos/hogan-lovells.svg",       alt: "Hogan Lovells",           height: 28,  invert: false },
  { src: "/logos/adtran.svg",              alt: "Adtran",                  height: 26,  invert: false },
];

const defaultFilter = (invert: boolean) =>
  invert ? "grayscale(100%) opacity(0.55) invert(1)" : "grayscale(100%) opacity(0.55)";

const hoverFilter = (invert: boolean) =>
  invert ? "grayscale(0%) invert(0) opacity(1)" : "grayscale(0%) opacity(1)";

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
          className="mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-6 max-w-[1100px] mx-auto"
        >
          {logos.map(({ src, alt, height, invert }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={alt}
              src={src}
              alt={alt}
              style={{
                height,
                width: "auto",
                display: "block",
                filter: defaultFilter(invert),
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = hoverFilter(invert); }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = defaultFilter(invert); }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
