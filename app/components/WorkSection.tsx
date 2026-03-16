"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const cases = [
  {
    client: "BBC",
    category: "Platform",
    title: "Composable website platform transformation",
    outcome: "40% faster time-to-market across 14 global markets",
    seed: "platform",
  },
  {
    client: "Capco",
    category: "AI",
    title: "AI-powered personalisation programme",
    outcome: "2.5× conversion uplift on digital transformation programme",
    seed: "personalisation",
  },
  {
    client: "White Moss",
    category: "Experimentation",
    title: "Experimentation infrastructure implementation",
    outcome: "60% reduction in content publishing cycle",
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
            <Eyebrow>WORK</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: '#111111' }}
          >
            Selected work and outcomes.
          </motion.h2>
        </motion.div>

        {/* 3-col grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
        >
          {cases.map(({ client, category, title, outcome, seed }) => (
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
                <p className="eyebrow mb-3">{client}</p>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: '#111111' }}>{title}</h3>
                <p className="text-[15px] font-medium mt-3" style={{ color: '#D4500F' }}>{outcome}</p>
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
