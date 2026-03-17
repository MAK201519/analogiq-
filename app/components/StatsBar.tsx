"use client";

import { motion } from "framer-motion";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const stats = [
  { number: "40+", label: "organisations helped to close the Digital Activation Gap" },
  { number: "10+", label: "years delivering digital platform and AI projects" },
  { number: "3×",  label: "faster campaign velocity after platform modernisation" },
  { number: "60%", label: "average reduction in content publishing cycle across engagements" },
];

export default function StatsBar() {
  return (
    <section className="bg-[var(--surface)] py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {stats.map(({ number, label }, i) => (
            <motion.div
              key={number}
              variants={item}
              className={`flex flex-col items-center text-center px-10 py-12 ${
                i > 0 ? "border-l border-[#E5E7EB] max-sm:border-l-0 max-sm:border-t" : ""
              }`}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: 64,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: '#D4500F',
                }}
              >
                {number}
              </span>
              <p
                className="text-[15px] leading-[1.5] mt-4 max-w-[160px]"
                style={{ color: '#6B7280' }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
