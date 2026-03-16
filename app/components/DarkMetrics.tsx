"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const metrics = [
  {
    client: "BBC",
    number: "40%",
    description: "faster time-to-market across 14 global markets",
  },
  {
    client: "Capco",
    number: "2.5×",
    description: "conversion uplift on digital transformation programme",
  },
  {
    client: "White Moss",
    number: "60%",
    description: "reduction in content publishing cycle",
  },
];

export default function DarkMetrics() {
  return (
    <section className="bg-white py-[120px] max-sm:py-[64px]">
      <div className="max-w-[1200px] mx-auto px-12">
        {/* Section opener */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <motion.div variants={item}>
            <Eyebrow>RESULTS</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-serif-italic text-[48px] leading-[1.1] text-[var(--text)] mt-4"
          >
            Outcomes that matter.
          </motion.h2>
        </motion.div>

        {/* Positivus-style: one big rounded outlined card containing 3 results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="bg-[var(--surface)] border border-[var(--text)] rounded-[45px] shadow-[0px_5px_0px_0px_var(--text)] grid grid-cols-3 overflow-hidden max-sm:grid-cols-1">
            {metrics.map(({ client, number, description }, i) => (
              <div
                key={client}
                className={`flex flex-col items-center text-center px-10 py-12 ${
                  i > 0 ? "border-l border-[var(--border)] max-sm:border-l-0 max-sm:border-t" : ""
                }`}
              >
                <p className="eyebrow">{client}</p>
                <span className="font-serif-italic text-[64px] leading-none text-[var(--accent)] mt-4">
                  {number}
                </span>
                <p className="text-[16px] text-[var(--muted)] leading-[1.65] mt-3 max-w-[220px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
