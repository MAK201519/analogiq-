"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const before = [
  "Slow, manual campaign execution",
  "One-size-fits-all customer experiences",
  "Disconnected data and siloed teams",
  "Long feedback loops on performance",
];

const after = [
  "AI-accelerated content at scale",
  "Real-time personalisation per segment",
  "Unified data enabling joined-up activation",
  "Continuous experimentation and optimisation",
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#16A34A" fillOpacity="0.12" />
      <path d="M5 9l3 3 5-5" stroke="#16A34A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#6B7280" fillOpacity="0.10" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="#9CA3AF" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export default function IndustryShift() {
  return (
    <section className="bg-white py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1"
        >
          {/* Left: text + before/after */}
          <motion.div variants={item} className="flex flex-col max-lg:order-1">
            <Eyebrow>THE SHIFT</Eyebrow>
            <h2 className="mt-4" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}>
              Marketing has entered the AI era.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5" style={{ color: '#4B5563' }}>
              AI is transforming how organisations create campaigns, personalise
              customer experiences and optimise marketing performance. The
              platforms underneath most marketing teams were not designed for
              this environment.
            </p>

            {/* Before / After table */}
            <div className="mt-10 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#6B7280' }}>
                  Without Analogiq
                </p>
                <ul className="flex flex-col gap-1">
                  {before.map((text) => (
                    <li key={text} className="flex items-start gap-3 px-4 py-[14px] rounded-[8px]">
                      <span className="mt-[2px] shrink-0"><CrossIcon /></span>
                      <span className="text-[14px] leading-[1.5]" style={{ color: '#6B7280' }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#6B7280' }}>
                  With Analogiq
                </p>
                <ul className="flex flex-col gap-1">
                  {after.map((text) => (
                    <li key={text} className="flex items-start gap-3 px-4 py-[14px] rounded-[8px]">
                      <span className="mt-[2px] shrink-0"><CheckIcon /></span>
                      <span className="text-[14px] leading-[1.5]" style={{ color: '#191A23' }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: photography */}
          <motion.div variants={item} className="max-lg:order-2">
            <div className="h-[480px] max-sm:h-[260px]" style={{ borderRadius: 16, overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital marketing analytics dashboard"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
