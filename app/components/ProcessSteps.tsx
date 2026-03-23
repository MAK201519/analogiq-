"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

export interface Step {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
}

interface ProcessStepsProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  steps: Step[];
}

export default function ProcessSteps({
  eyebrow,
  heading,
  subheading,
  steps,
}: ProcessStepsProps) {
  return (
    <section id="approach">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 py-[70px] max-sm:py-[40px]">
        {/* Section opener */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.div variants={item}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#111111' }}
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p
              variants={item}
              className="text-[16px] leading-[1.65] mt-5 max-w-[560px]"
              style={{ color: '#6B7280' }}
            >
              {subheading}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Full-width step rows — alternating bg */}
      {steps.map(({ number, title, description, outcomes }, i) => (
        <motion.div
          key={number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          style={{
            borderTop: '1px solid #E5E7EB',
            backgroundColor: i % 2 === 0 ? '#ffffff' : '#F3F3F3',
          }}
        >
          <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 py-16 grid grid-cols-2 gap-16 items-start max-md:grid-cols-1 max-md:gap-8">
            {/* Left: number + title */}
            <div className="flex flex-col">
              <span
                className="font-serif-italic leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 800, lineHeight: 1, color: '#D4500F' }}
              >
                {number}
              </span>
              <h3
                className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: '#111111' }}
              >
                {title}
              </h3>
            </div>

            {/* Right: description + outcome bullets */}
            <div className="flex flex-col pt-2">
              <p className="text-[16px] leading-[1.65]" style={{ color: '#6B7280' }}>
                {description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-[9px] rounded-full"
                      style={{ width: 6, height: 6, backgroundColor: '#D4500F' }}
                      aria-hidden="true"
                    />
                    <span className="text-[15px] leading-[1.6]" style={{ color: '#191A23' }}>
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}

      <div style={{ borderTop: '1px solid #E5E7EB' }} />
    </section>
  );
}
