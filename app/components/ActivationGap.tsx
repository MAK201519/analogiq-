"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const leftItems = [
  "Content management systems",
  "Marketing automation platforms",
  "Customer data platforms",
  "Analytics and reporting tools",
];

const rightItems = [
  "Slow campaign velocity",
  "Generic customer experiences",
  "Siloed experimentation",
  "Unmeasurable marketing impact",
];

export default function ActivationGap() {
  return (
    <section className="bg-[var(--surface)] py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        {/* Section opener */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <motion.div variants={item}>
            <Eyebrow>THE PROBLEM</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: '#111111' }}
          >
            The Digital Activation Gap.
          </motion.h2>
          <motion.p
            variants={item}
            className="text-[16px] leading-[1.65] mt-5 max-w-[480px] mx-auto"
            style={{ color: '#6B7280' }}
          >
            The distance between marketing ambition and platform capability.
          </motion.p>
        </motion.div>

        {/* Positivus card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 45,
              border: '1px solid #191A23',
              boxShadow: '0 5px 0 0 #191A23',
              padding: 50,
            }}
          >
            {/* Column headers */}
            <div className="grid mb-6" style={{ gridTemplateColumns: "1fr 100px 1fr" }}>
              <p className="text-[11px] uppercase tracking-[0.1em] text-center font-semibold" style={{ color: '#6B7280' }}>
                WHERE INVESTMENT GOES
              </p>
              <div />
              <p className="text-[11px] uppercase tracking-[0.1em] text-center font-semibold" style={{ color: '#6B7280' }}>
                WHERE VALUE IS LOST
              </p>
            </div>

            {/* 3-column grid */}
            <div className="grid relative" style={{ gridTemplateColumns: "1fr 100px 1fr" }}>
              {/* Left items */}
              <div className="flex flex-col gap-3">
                {leftItems.map((text) => (
                  <div
                    key={text}
                    className="px-4 py-3 text-[15px]"
                    style={{
                      backgroundColor: '#F3F3F3',
                      border: '1px solid #E5E7EB',
                      borderRadius: 12,
                      color: '#191A23',
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>

              {/* Centre: dashed line + pill */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex justify-center" aria-hidden="true">
                  <div className="w-0 h-full" style={{ borderLeft: '3px dashed #D4500F' }} />
                </div>
                <div
                  className="relative z-10 text-white text-[14px] font-bold uppercase tracking-[0.05em] whitespace-nowrap"
                  style={{
                    backgroundColor: '#D4500F',
                    borderRadius: 999,
                    padding: '12px 20px',
                  }}
                >
                  The Gap
                </div>
              </div>

              {/* Right items */}
              <div className="flex flex-col gap-3">
                {rightItems.map((text) => (
                  <div
                    key={text}
                    className="px-4 py-3 rounded-[12px] text-[15px]"
                    style={{
                      background: "#FDF0E8",
                      border: "1px solid #FDB58A",
                      color: "#7C3A1A",
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
