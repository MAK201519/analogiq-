"use client";

import { motion } from "framer-motion";

const logos = ["BBC", "Sitecore", "Uniform", "Capco", "White Moss"];

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
          TRUSTED BY TEAMS AT
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center flex-wrap gap-0 max-w-[900px]"
        >
          {logos.map((name, i) => (
            <div key={name} className="flex items-center">
              <span
                className="transition-opacity duration-200 cursor-default px-8"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#191A23',
                  opacity: 0.7,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                {name}
              </span>
              {i < logos.length - 1 && (
                <div className="shrink-0" style={{ width: 1, height: 28, background: "#E5E7EB" }} />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
