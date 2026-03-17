"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "./NavigationBar";
import ProcessSteps from "./ProcessSteps";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import Eyebrow from "./Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";
import type { Step } from "./ProcessSteps";

/* ─── TYPES ──────────────────────────────────────────────────────────────── */

export interface ServicePageProps {
  hero: {
    eyebrow: string;
    h1Before: string;
    h1Highlight: string;
    h1After?: string;
    sub: string;
    primaryCTA: string;
    primaryHref: string;
  };
  challenge: {
    h2: string;
    body: string;
    features: { title: string; desc: string }[];
    visualHeader: string;
    visualItems: string[];
  };
  whatWeDo: {
    h2: string;
    body: string;
    features: { title: string; desc: string }[];
    visualHeader: string;
    visualItems: string[];
  };
  capabilities: {
    h2: string;
    cards: { title: string; body: string }[];
  };
  approach: {
    h2: string;
    sub: string;
    steps: Step[];
  };
  cta: {
    heading: string;
    subheading: string;
  };
}

/* ─── SHARED SUB-COMPONENTS ──────────────────────────────────────────────── */

function FeatureList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ul className="mt-8 flex flex-col gap-5">
      {items.map(({ title, desc }) => (
        <li key={title} className="flex items-start gap-3">
          <span
            className="shrink-0 mt-[7px]"
            style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }}
            aria-hidden="true"
          />
          <span>
            <span className="text-[15px] font-medium block" style={{ color: "#111111" }}>{title}</span>
            <span className="text-[14px] leading-[1.6] mt-[2px] block" style={{ color: "#6B7280" }}>{desc}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function StackCard({ header, items }: { header: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-80px" }}
      style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}
    >
      <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>{header}</span>
      </div>
      {items.map((cap, i) => (
        <div key={cap} className="flex items-center gap-4 px-8 py-5"
          style={{ borderBottom: i < items.length - 1 ? "1px solid #E5E7EB" : "none" }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
          <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{cap}</span>
        </div>
      ))}
    </motion.div>
  );
}

const workCards = [
  { client: "BBC", category: "PLATFORM", title: "Composable platform transformation across 14 global markets", outcome: "40% faster time-to-market", description: "The BBC needed a digital platform capable of supporting content delivery across 14 international markets at pace. We designed and delivered a composable architecture that reduced campaign launch time from weeks to days.", seed: "platform" },
  { client: "Capco", category: "AI", title: "AI-powered personalisation programme delivering measurable conversion uplift", outcome: "2.5× conversion uplift", description: "Capco wanted to move personalisation from a pilot into production. We designed the data and platform infrastructure required to support real-time personalisation at scale and produced a 2.5× uplift in conversion.", seed: "personalisation" },
  { client: "White Moss", category: "EXPERIMENTATION", title: "Experimentation infrastructure enabling continuous optimisation", outcome: "60% reduction in content publishing cycle", description: "White Moss needed the capability to test, learn and improve continuously. We built the experimentation infrastructure that reduced their content publishing cycle by 60% and removed engineering dependency.", seed: "experimentation" },
];

/* ─── TEMPLATE ───────────────────────────────────────────────────────────── */

export default function ServicePage({ hero, challenge, whatWeDo, capabilities, approach, cta }: ServicePageProps) {
  return (
    <div>
      <NavigationBar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>{hero.eyebrow}</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 72, fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}>
              {hero.h1Before}{" "}
              <span style={{ color: "#D4500F" }}>{hero.h1Highlight}</span>
              {hero.h1After ? <>{" "}{hero.h1After}</> : null}
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              {hero.sub}
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href={hero.primaryHref}>{hero.primaryCTA}</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Link href="/work">View our work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CHALLENGE — surface, two col ─────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left — visual */}
            <StackCard header={challenge.visualHeader} items={challenge.visualItems} />
            {/* Right — text */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                {challenge.h2}
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                {challenge.body}
              </motion.p>
              <motion.div variants={item}><FeatureList items={challenge.features} /></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — white, two col ──────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left — text */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>WHAT WE DO</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                {whatWeDo.h2}
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                {whatWeDo.body}
              </motion.p>
              <motion.div variants={item}><FeatureList items={whatWeDo.features} /></motion.div>
            </motion.div>
            {/* Right — visual */}
            <StackCard header={whatWeDo.visualHeader} items={whatWeDo.visualItems} />
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES — surface, three cards ──────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>CAPABILITIES</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              {capabilities.h2}
            </motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {capabilities.cards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH — white, ProcessSteps ───────────────────────────── */}
      <ProcessSteps
        eyebrow="OUR APPROACH"
        heading={approach.h2}
        subheading={approach.sub}
        steps={approach.steps}
      />

      {/* ── CASE STUDIES — surface ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WORK</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              In practice.
            </motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {workCards.map(({ client, category, title, outcome, description, seed }) => (
              <motion.div key={title} variants={item}
                className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff" }}>
                <div className="overflow-hidden flex-shrink-0" style={{ height: 280, borderRadius: "45px 45px 0 0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://picsum.photos/seed/${seed}/800/600`} alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-[50px]">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="eyebrow">{client}</p>
                    <span className="inline-block px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em]"
                      style={{ background: "#FDF0E8", color: "#D4500F" }}>{category}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[15px] font-medium mt-3" style={{ color: "#D4500F" }}>{outcome}</p>
                  <p className="text-[14px] leading-[1.65] mt-3 flex-1" style={{ color: "#6B7280" }}>{description}</p>
                  <Link href="/work" className="inline-block mt-5 text-[14px] font-medium" style={{ color: "#6B7280" }}>View case study →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="mt-10 text-center">
            <Link href="/work" className="text-[15px] font-medium hover:underline" style={{ color: "#D4500F" }}>View all work →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <FinalCTA heading={cta.heading} subheading={cta.subheading} />

      <Footer />
    </div>
  );
}
