"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

export default function IndustryShift() {
  return (
    <section className="bg-white py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-[760px]"
        >
          <motion.div variants={item}>
            <Eyebrow>THE SHIFT</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}
          >
            Marketing has changed. Most platforms haven&apos;t.
          </motion.h2>
          <motion.p
            variants={item}
            className="text-[17px] leading-[1.7] mt-6"
            style={{ color: '#4B5563' }}
          >
            Most organisations already have the tools. They&apos;re just not working together.
          </motion.p>
          <motion.p
            variants={item}
            className="text-[17px] leading-[1.7] mt-4"
            style={{ color: '#4B5563' }}
          >
            Marketing teams are under pressure to move faster and deliver more.
            AI is accelerating expectations. Personalisation requires real-time
            data. Experimentation needs speed and flexibility. But most digital
            environments cannot support it. Legacy platforms, disconnected
            systems and manual workflows create a gap between what&apos;s possible
            and what actually gets delivered.
          </motion.p>
          <motion.p
            variants={item}
            className="text-[20px] font-semibold mt-8"
            style={{ color: '#D4500F' }}
          >
            That gap is where performance is lost.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
