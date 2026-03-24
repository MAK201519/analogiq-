"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/logos/hsbc.svg",                alt: "HSBC" },
  { src: "/logos/jet2.svg",                alt: "Jet2" },
  { src: "/logos/bhf.svg",                 alt: "British Heart Foundation" },
  { src: "/logos/keith-prowse.png",        alt: "Keith Prowse" },
  { src: "/logos/sunlife.webp",            alt: "SunLife" },
  { src: "/logos/capco.png",               alt: "Capco" },
  { src: "/logos/cystic-fibrosis-trust.png", alt: "Cystic Fibrosis Trust" },
  { src: "/logos/shoosmiths.png",          alt: "Shoosmiths" },
  { src: "/logos/hogan-lovells.svg",       alt: "Hogan Lovells" },
  { src: "/logos/adtran.svg",              alt: "Adtran" },
];

const defaultFilter = "grayscale(100%) opacity(60%)";
const hoverFilter = "grayscale(0%) opacity(100%)";

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
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 40, marginTop: 40, maxWidth: 1100 }}
        >
          {logos.map(({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={alt}
              src={src}
              alt={alt}
              style={{
                maxHeight: 32,
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                filter: defaultFilter,
                transition: 'filter 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = hoverFilter; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = defaultFilter; }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
