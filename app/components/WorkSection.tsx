"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const cases = [
  {
    client: "BBC",
    category: "PLATFORM",
    title: "Composable platform transformation across 14 global markets",
    outcome: "40% faster time-to-market",
    description: "The BBC needed a digital platform capable of supporting content delivery across 14 international markets at pace. We designed and delivered a composable architecture that reduced campaign launch time from weeks to days and gave editorial teams genuine control over their digital experience.",
    seed: "platform",
  },
  {
    client: "Capco",
    category: "AI",
    title: "AI-powered personalisation programme delivering measurable conversion uplift",
    outcome: "2.5× conversion uplift",
    description: "Capco wanted to move personalisation from a pilot into production. We designed the data and platform infrastructure required to support real-time personalisation at scale — connecting behavioural data to digital experience delivery and producing a 2.5× uplift in conversion within the first programme cycle.",
    seed: "personalisation",
  },
  {
    client: "White Moss",
    category: "EXPERIMENTATION",
    title: "Experimentation infrastructure enabling continuous optimisation",
    outcome: "60% reduction in content publishing cycle",
    description: "White Moss needed the capability to test, learn and improve continuously rather than relying on periodic campaign reviews. We built the experimentation infrastructure and workflow that reduced their content publishing cycle by 60% and gave the marketing team the tools to optimise performance without engineering dependency.",
    seed: "experimentation",
  },
];

export default function WorkSection() {
  return (
    <section className="bg-white py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        {/* Section opener */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <motion.div variants={item}>
            <Eyebrow>SELECTED WORK</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: '#111111' }}
          >
            Work that closed the gap.
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-[16px] leading-[1.65] max-w-[560px]"
            style={{ color: '#6B7280' }}
          >
            A selection of engagements where Analogiq helped organisations modernise their platforms, activate AI and move faster.
          </motion.p>
        </motion.div>

        {/* 3-col grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
        >
          {cases.map(({ client, category, title, outcome, description, seed }) => (
            <motion.div
              key={title}
              variants={item}
              className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
              style={{
                borderRadius: 45,
                border: '1px solid #191A23',
                boxShadow: '0 5px 0 0 #191A23',
                backgroundColor: '#ffffff',
              }}
            >
              {/* Full-bleed image — 400px, no padding */}
              <div className="overflow-hidden flex-shrink-0" style={{ height: 400, borderRadius: '45px 45px 0 0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${seed}/800/900`}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-[50px]">
                <div className="flex items-center gap-3 mb-3">
                  <p className="eyebrow">{client}</p>
                  <span
                    className="inline-block px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em]"
                    style={{ background: '#FDF0E8', color: '#D4500F' }}
                  >
                    {category}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: '#111111' }}>{title}</h3>
                <p className="text-[15px] font-medium mt-3" style={{ color: '#D4500F' }}>{outcome}</p>
                <p className="text-[14px] leading-[1.65] mt-3 flex-1" style={{ color: '#6B7280' }}>{description}</p>
                <Link
                  href="/work"
                  className="inline-block mt-5 text-[14px] font-medium transition-colors"
                  style={{ color: '#6B7280' }}
                >
                  View case study →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/work"
            className="text-[15px] font-medium hover:underline"
            style={{ color: '#D4500F' }}
          >
            View all work →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
