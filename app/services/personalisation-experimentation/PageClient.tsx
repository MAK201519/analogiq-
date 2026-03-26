"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import Eyebrow from "../../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const PJB = "'Plus Jakarta Sans', system-ui, sans-serif";

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const capabilityCards = [
  {
    title: "Deliver personalisation that runs continuously",
    body: "We move beyond one-off use cases, enabling dynamic experiences that adapt based on behaviour, context and customer data.",
  },
  {
    title: "Connect data, platforms and decisioning",
    body: "We unify customer data, content and delivery systems so personalisation can happen in real time across channels.",
  },
  {
    title: "Embed experimentation into everyday workflows",
    body: "We design testing frameworks that allow teams to continuously learn and improve without relying on heavy development cycles.",
  },
  {
    title: "Use AI to enhance decisioning and optimisation",
    body: "AI enables faster, more intelligent personalisation, from automated targeting to real-time experience optimisation.",
  },
  {
    title: "Measure, learn and scale what works",
    body: "We ensure every experiment and experience contributes to ongoing improvement and measurable performance.",
  },
];

const systemComponents = [
  "Customer data (behavioural signals, CDPs, CRM)",
  "Segmentation models and decisioning logic",
  "Content and experience variants",
  "Real-time delivery across channels",
  "Measurement, attribution and feedback loops",
];

const coverCards = [
  {
    title: "Design where personalisation creates value",
    body: "We identify key journeys, segments and opportunities where personalisation will drive measurable impact.",
  },
  {
    title: "Connect platforms and data",
    body: "We integrate CMS, experimentation tools and data layers to enable real-time decisioning.",
  },
  {
    title: "Run continuous experimentation",
    body: "We embed testing into marketing workflows, enabling ongoing optimisation rather than isolated tests.",
  },
  {
    title: "Scale what works",
    body: "We turn successful experiments into repeatable, scalable experiences across channels and markets.",
  },
];

const workCards = [
  {
    client: "HSBC Business Banking",
    category: "Experimentation · AI",
    title: "12:1 ROI across 24 experiments in 6 markets",
    outcome: "12:1 ROI",
    image: "/clients/hsbc/hero.png",
    href: "/work/hsbc",
  },
  {
    client: "Wilderness Destinations",
    category: "CRO · Experimentation",
    title: "Doubling conversion rate and cutting acquisition costs in half",
    outcome: "2x conversion rate · 63% reduction in CPA",
    image: "/clients/wilderness/banner.png",
    href: "/work/wilderness",
  },
  {
    client: "Cystic Fibrosis Trust",
    category: "CRO · Personalisation",
    title: "29% increase in donation page visits through content personalisation",
    outcome: "29% increase in donation page visits",
    image: "/clients/cystic-fibrosis-trust/homepage.webp",
    href: "/work/cystic-fibrosis-trust",
  },
];

const personalisationStack = [
  "Audience data / CDP and behavioural signals",
  "Segmentation / Models and rules",
  "Content variants / Personalised assets",
  "Delivery / Real-time decisioning",
  "Measurement / Impact and attribution",
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function PersonalisationPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>PERSONALISATION & EXPERIMENTATION</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
              Personalisation and experimentation that{" "}
              <span style={{ color: "#D4500F" }}>runs in production, not just pilots.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              We help teams activate personalisation and experimentation at scale, connecting data, decisioning and AI to deliver continuous optimisation.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Most organisations have tried personalisation. Very few have made it work consistently. Experiences remain static. Tests are sporadic. Results are difficult to scale. The issue isn&apos;t ambition. It&apos;s the infrastructure, data and workflows behind it. We fix that.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about personalisation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Link href="/work">View our work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE PROBLEM — white, two col ──────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE PROBLEM</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Personalisation doesn&apos;t fail in theory. It fails in execution.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Modern marketing expects experiences to adapt in real time. But in most organisations, personalisation is limited to a few use cases, experimentation is inconsistent or slow, data isn&apos;t connected across platforms, and teams rely on manual processes.
              </motion.p>
              <motion.div variants={item} className="mt-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#9CA3AF" }}>The result:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Static experiences that don't adapt",
                    "Missed opportunities for optimisation",
                    "Limited impact from existing tools",
                    "No compounding improvement over time",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span style={{ color: "#D4500F", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✕</span>
                      <span className="text-[15px] leading-[1.6]" style={{ color: "#4B5563" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                Until personalisation is operational, it will not scale.
              </motion.p>
            </motion.div>

            {/* Right — Personalisation stack card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Personalisation stack</span>
              </div>
              {personalisationStack.map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < personalisationStack.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO — surface, 5 capability cards ──────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHAT WE DO</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Personalisation that actually scales.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We build the systems that allow personalisation and experimentation to run continuously, not as isolated initiatives, but as part of how your marketing operates.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {capabilityCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-3 flex-1" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHAT POWERS IT — white, two col ───────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>WHAT POWERS PERSONALISATION</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                What powers personalisation and experimentation.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Effective personalisation isn&apos;t driven by a single tool. It&apos;s a connected system.
              </motion.p>
              <motion.div variants={item}>
                <ul className="mt-6 flex flex-col gap-4">
                  {systemComponents.map((comp) => (
                    <li key={comp} className="flex items-start gap-3">
                      <span style={{ color: "#16A34A", fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span className="text-[15px] font-medium leading-[1.6]" style={{ color: "#111111" }}>{comp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[15px]" style={{ color: "#9CA3AF" }}>
                Most organisations have parts of this. Very few have it working together.
              </motion.p>
            </motion.div>

            {/* Right — system maturity card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Common gaps we see</span>
              </div>
              {[
                { label: "Customer data", value: "Fragmented across systems" },
                { label: "Segmentation", value: "Rule-based, not dynamic" },
                { label: "Content variants", value: "Limited or manual" },
                { label: "Delivery", value: "Batch, not real-time" },
                { label: "Measurement", value: "Last-click, not attributed" },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span className="text-[14px]" style={{ color: "#6B7280" }}>{label}</span>
                  <span className="text-[13px] font-medium" style={{ color: "#D4500F" }}>{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. AI CONNECTION — surface ────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-[800px]"
          >
            <motion.div variants={item}><Eyebrow>WHERE AI DELIVERS VALUE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Where AI becomes valuable.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[18px] leading-[1.65]" style={{ color: "#6B7280" }}>
              AI creates value when it&apos;s applied to real customer experiences. That happens through personalisation, decisioning and experimentation. We connect AI, data and platforms to enable dynamic context-aware experiences, real-time decision-making and continuous optimisation.
            </motion.p>
            <motion.p variants={item} className="mt-6 text-[18px] font-semibold" style={{ color: "#D4500F" }}>
              This is where AI moves from interesting to impactful.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 6. CAPABILITIES — white, 4 cards ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>CAPABILITIES</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              From strategy to continuous optimisation.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {coverCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. CASE STUDIES — surface, 3 cards ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Personalisation and experimentation in practice.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {workCards.map(({ client, category, title, outcome, image, href }) => (
              <motion.div key={title} variants={item}
                className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff" }}>
                <div className="overflow-hidden flex-shrink-0" style={{ height: 280, borderRadius: "45px 45px 0 0", position: "relative" }}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col flex-1 p-[50px]">
                  <p className="eyebrow mb-3">{client}</p>
                  <span
                    className="inline-block self-start px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em] mb-3"
                    style={{ background: "#FDF0E8", color: "#D4500F" }}
                  >
                    {category}
                  </span>
                  <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[14px] font-medium mt-3" style={{ color: "#D4500F" }}>{outcome}</p>
                  <Link href={href} className="inline-block mt-5 text-[14px] font-medium hover:underline" style={{ color: "#6B7280" }}>View case study →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/work"
              className="inline-block text-[15px] font-medium"
              style={{ border: "2px solid #D4500F", borderRadius: 999, padding: "10px 24px", color: "#D4500F", backgroundColor: "transparent", transition: "background-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#D4500F"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#D4500F"; }}
            >
              View all work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#191A23" }} className="py-[80px] max-sm:py-[48px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center"
          >
            <h2
              className="max-w-[620px]"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#ffffff" }}
            >
              Still running personalisation as a pilot?
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[480px]" style={{ color: "#9CA3AF" }}>
              If your experimentation and personalisation aren&apos;t delivering consistent results, the problem is usually structural. We&apos;ll show you where the gaps are and how to fix them.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block text-[16px] font-medium"
                style={{ fontFamily: PJB, fontWeight: 500, backgroundColor: "#D4500F", color: "#ffffff", borderRadius: 999, padding: "14px 32px", transition: "background-color 0.2s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B84309"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D4500F"; }}
              >
                Start the conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
