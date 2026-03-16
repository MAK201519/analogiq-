"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const articles = [
  {
    category: "Strategy",
    readTime: "5 min read",
    title: "Why legacy platforms limit marketing velocity",
    excerpt:
      "Understanding the constraints that prevent modern marketing teams from moving at the speed of business.",
  },
  {
    category: "Technology",
    readTime: "6 min read",
    title: "Composable architecture for marketing teams",
    excerpt:
      "How modular, composable platforms enable flexibility and faster innovation in marketing operations.",
  },
  {
    category: "AI",
    readTime: "7 min read",
    title: "Operationalising AI across marketing workflows",
    excerpt:
      "Practical approaches to integrating AI into content, analytics and campaign execution at scale.",
  },
];

export default function InsightsSection() {
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
            <Eyebrow>INSIGHTS</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            className="mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: '#111111' }}
          >
            Research and thinking.
          </motion.h2>
        </motion.div>

        {/* Article cards */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
        >
          {articles.map(({ category, readTime, title, excerpt }) => (
            <motion.div
              key={title}
              variants={item}
              className="flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-[4px]"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 45,
                border: '1px solid #191A23',
                boxShadow: '0 5px 0 0 #191A23',
              }}
            >
              {/* Top image area — 240px with hover zoom */}
              <div
                className="relative flex-shrink-0 overflow-hidden"
                style={{ height: 240, borderRadius: '45px 45px 0 0' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/insight-${category.toLowerCase()}/800/600`}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-5">
                  <span
                    className="inline-block px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em]"
                    style={{ background: '#FDF0E8', color: '#D4500F' }}
                  >
                    {category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-[50px]">
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: '#111111' }}>{title}</h3>
                <p className="text-[14px] leading-[1.65] mt-3 flex-1" style={{ color: '#6B7280' }}>
                  {excerpt}
                </p>

                {/* Footer */}
                <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: '1px solid #E5E7EB' }}>
                  <span className="text-[13px]" style={{ color: '#9CA3AF' }}>{readTime}</span>
                  <Link
                    href="/insights"
                    className="text-[13px] font-medium group-hover:underline"
                    style={{ color: '#D4500F' }}
                  >
                    Read more →
                  </Link>
                </div>
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
            href="/insights"
            className="text-[15px] font-medium hover:underline"
            style={{ color: '#D4500F' }}
          >
            View all insights →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
