"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const cards = [
  {
    bg: "#FDF0E8",
    iconColor: "#D4500F",
    title: "Efficiency",
    body: "Automate repetitive tasks and optimise workflows across your marketing operations.",
    outcome: "Reduce manual effort by 60%",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    bg: "#F0F4FF",
    iconColor: "#3B5BDB",
    title: "Personalisation",
    body: "Deliver unique, contextual experiences to every customer at the moment that matters.",
    outcome: "Increase engagement through relevance",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    bg: "#F0FDF4",
    iconColor: "#16A34A",
    title: "Insights",
    body: "Uncover patterns hidden in customer data and make decisions backed by evidence.",
    outcome: "Act on intelligence, not instinct",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 4-6" />
      </svg>
    ),
  },
];

export default function ValueCards() {
  return (
    <section className="bg-white py-[120px] max-sm:py-[64px]">
      <div className="max-w-[1200px] mx-auto px-12">
        {/* Section opener */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <motion.div variants={item}>
            <Eyebrow>VALUE</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-serif-italic text-[48px] leading-[1.1] text-[var(--text)] mt-4"
          >
            Where AI creates value.
          </motion.h2>
          <motion.p
            variants={item}
            className="text-[18px] text-[var(--muted)] leading-[1.7] mt-5 max-w-[480px]"
          >
            Three areas where AI transforms marketing execution.
          </motion.p>
        </motion.div>

        {/* Three tinted cards */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 gap-6 max-md:grid-cols-1"
        >
          {cards.map(({ bg, iconColor, title, body, outcome, icon }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="rounded-[24px] flex flex-col gap-6 border border-[var(--border)]"
              style={{ backgroundColor: bg, padding: 40 }}
            >
              {/* Icon block — 48×48px, tint slightly darker than card bg */}
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0"
                style={{ background: `${iconColor}22`, color: iconColor }}
              >
                {icon}
              </div>

              {/* Title + body */}
              <div>
                <h3 className="text-[22px] text-[var(--text)]" style={{ fontWeight: 700 }}>
                  {title}
                </h3>
                <p className="text-[15px] text-[var(--muted)] leading-[1.65] mt-2">
                  {body}
                </p>
              </div>

              {/* Outcome pill */}
              <div className="mt-auto">
                <span
                  className="inline-block text-[12px] font-semibold rounded-full px-4 py-1.5"
                  style={{
                    background: `${iconColor}18`,
                    color: iconColor,
                  }}
                >
                  {outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
