"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const cases = [
  {
    client: "Wilderness Destinations",
    category: "CRO",
    title: "Doubling conversion rate and cutting acquisition costs in half for a luxury safari brand",
    outcome: "2× conversion rate · 63% reduction in CPA",
    description: "Wilderness's landing pages for paid traffic were underperforming. Analogiq mapped the customer journey, designed two purpose-built landing page variants and ran a structured A/B test — doubling conversion rate and reducing cost per acquisition by 63%.",
    image: "/clients/wilderness/banner.png",
    href: "/work/wilderness",
  },
  {
    client: "Capco",
    category: "AI",
    title: "AI-powered personalisation programme delivering measurable conversion uplift",
    outcome: "2.5× conversion uplift",
    description: "Capco wanted to move personalisation from a pilot into production. We designed the data and platform infrastructure required to support real-time personalisation at scale — connecting behavioural data to digital experience delivery and producing a 2.5× uplift in conversion within the first programme cycle.",
    image: "/clients/capco/homepage.webp",
    href: "/work/hsbc",
  },
  {
    client: "Keith Prowse",
    category: "PLATFORM",
    title: "Modernising the digital sales channel for the UK's leading sports hospitality brand",
    outcome: "Long-term technical partnership since 2021",
    description: "Keith Prowse needed a partner who understood both Sitecore's technical complexity and the commercial imperative of optimising every digital touchpoint. Analogiq has been their technical partner since 2021 — delivering platform upgrades, UX improvements and complex integrations.",
    image: "/clients/keith-prowse/homepage-new.webp",
    href: "/work/keith-prowse",
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
          {cases.map(({ client, category, title, outcome, description, image, href }) => (
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
              <div className="overflow-hidden flex-shrink-0" style={{ height: 400, borderRadius: '45px 45px 0 0', position: 'relative' }}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
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
                  href={href}
                  className="inline-block mt-5 text-[14px] font-medium transition-colors"
                  style={{ color: '#D4500F' }}
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
