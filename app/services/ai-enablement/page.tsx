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
    title: "Identify where AI actually creates value",
    body: "We focus on high-impact use cases across content, personalisation, experimentation and marketing operations, not generic AI applications.",
  },
  {
    title: "Connect AI to real data and platforms",
    body: "AI only works when it has access to structured, usable data and is integrated into platforms like CMS, CDPs and marketing tools.",
  },
  {
    title: "Embed AI into marketing workflows",
    body: "We design workflows where AI supports day-to-day activity, from content creation to campaign optimisation.",
  },
  {
    title: "Make AI scalable, repeatable and trusted",
    body: "We ensure AI outputs are reliable, governed and aligned to your organisation so teams actually use it.",
  },
];

const aiRequirements = [
  "High-value use cases tied to real marketing outcomes",
  "Clean, connected data, not fragmented signals",
  "Integration with platforms like CMS, CDPs and analytics tools",
  "Workflow design embedded into marketing teams",
  "Governance that enables scale, not slows it down",
];

const useCaseCards = [
  {
    title: "AI content production",
    body: "Automate the creation of product content, landing pages and marketing assets, reducing production time while maintaining quality and consistency.",
  },
  {
    title: "AI-driven personalisation",
    body: "Deliver dynamic experiences based on behaviour, context and customer data, increasing relevance and conversion.",
  },
  {
    title: "AI marketing copilots",
    body: "Support marketing teams with campaign planning, optimisation and insight generation, improving speed and decision-making.",
  },
  {
    title: "AI data enrichment",
    body: "Enhance customer data with behavioural and external signals, enabling better segmentation and targeting.",
  },
];

const coverCards = [
  {
    title: "Define where AI creates real impact",
    body: "We identify the marketing workflows where AI can deliver measurable value.",
  },
  {
    title: "Build the infrastructure to support it",
    body: "We connect data, platforms and tools so AI can operate effectively.",
  },
  {
    title: "Scale across teams and workflows",
    body: "We embed AI into your organisation, making it repeatable, reliable and sustainable.",
  },
];

const workCards = [
  {
    client: "HSBC Business Banking",
    category: "AI · Experimentation",
    title: "12:1 ROI across 24 experiments in 6 markets",
    outcome: "12:1 ROI",
    image: "/clients/hsbc/hero.png",
    href: "/work/hsbc",
  },
  {
    client: "Capco",
    category: "AI · Personalisation",
    title: "Transforming engagement with AI personalisation and intelligent lead scoring",
    outcome: "£1M+ confirmed sales",
    image: "/clients/capco/homepage-hero.webp",
    href: "/work/capco",
  },
];

const aiLayers = [
  "Use cases / High-value marketing workflows",
  "Data infrastructure / Clean, connected signals",
  "Platform integration / Real-time activation",
  "Workflow design / Operational processes",
  "Governance / Responsible deployment",
];

const foundationLinks = [
  { title: "Platform Engineering", href: "/services/platform-engineering", active: false },
  { title: "Data and Insights", href: "/services/data-insights", active: false },
  { title: "AI Enablement", href: null, active: true },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function AIEnablementPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>AI ENABLEMENT</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
              AI that works in your marketing operation,{" "}
              <span style={{ color: "#D4500F" }}>not just in presentations.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              We help marketing teams activate AI within platforms like Sitecore, Optimizely and Uniform, connecting data, workflows and experiences to deliver real performance.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Most organisations don&apos;t struggle to generate AI ideas. They struggle to make them work. AI sits in pilots. Use cases don&apos;t scale. Teams don&apos;t trust the output. The problem isn&apos;t the model. It&apos;s everything around it. We fix that.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about AI enablement</Link>
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
                AI isn&apos;t failing. It&apos;s just not operational.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Across most organisations, AI is still experimental.
              </motion.p>
              <motion.div variants={item} className="mt-6 grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#9CA3AF" }}>You might have:</p>
                  <ul className="flex flex-col gap-2">
                    {["Run pilots or proofs of concept", "Tested tools for content or automation", "Identified promising use cases"].map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span style={{ color: "#16A34A", fontSize: 13, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span className="text-[14px] leading-[1.55]" style={{ color: "#4B5563" }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#9CA3AF" }}>But still face:</p>
                  <ul className="flex flex-col gap-2">
                    {["Limited real-world adoption", "Disconnected tools and data", "Outputs that are not trusted", "No clear path to scale"].map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span style={{ color: "#D4500F", fontSize: 13, flexShrink: 0, marginTop: 2 }}>✕</span>
                        <span className="text-[14px] leading-[1.55]" style={{ color: "#4B5563" }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                Until AI is embedded into platforms, data and workflows, it will not deliver value.
              </motion.p>
            </motion.div>

            {/* Right — AI layers card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>AI enablement layers</span>
              </div>
              {aiLayers.map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < aiLayers.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO — surface, 4 capability cards ──────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHAT WE DO</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Turn AI into something your marketing team actually uses.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We don&apos;t build isolated AI solutions. We make AI work inside your marketing ecosystem, where it can actually drive performance.
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

      {/* ── 4. WHAT IT TAKES — white, two col ────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>WHAT IT ACTUALLY TAKES</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                What it takes to make AI work.
              </motion.h2>
              <motion.div variants={item}>
                <ul className="mt-8 flex flex-col gap-4">
                  {aiRequirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <span style={{ color: "#16A34A", fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span className="text-[15px] font-medium leading-[1.6]" style={{ color: "#111111" }}>{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[15px]" style={{ color: "#9CA3AF" }}>
                Most organisations have parts of this. Very few have all of it working together.
              </motion.p>
            </motion.div>

            {/* Right — AI maturity card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>AI maturity checklist</span>
              </div>
              {[
                { label: "Use cases defined", value: "High-value and measurable" },
                { label: "Data quality", value: "Clean and connected" },
                { label: "Platform integration", value: "CMS, CDP, analytics" },
                { label: "Workflow adoption", value: "Embedded in day-to-day" },
                { label: "Governance", value: "Responsible and scalable" },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span className="text-[14px]" style={{ color: "#6B7280" }}>{label}</span>
                  <span className="text-[13px] font-medium" style={{ color: "#16A34A" }}>{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. AI AND FOUNDATIONS — surface, 3 linked service cards ─── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>THE FOUNDATIONS</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              AI is only as good as the foundations behind it.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[600px]" style={{ color: "#6B7280" }}>
              AI depends on structured content and platforms, connected usable data, and workflows that support adoption. That&apos;s why we combine platform engineering, data and insights and AI enablement. When these come together, AI moves from idea to impact.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {foundationLinks.map(({ title, href, active }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{
                  backgroundColor: active ? "#0D0D0D" : "#ffffff",
                  borderRadius: 45,
                  border: active ? "1px solid #191A23" : "1px solid #191A23",
                  boxShadow: "0 5px 0 0 #191A23",
                  padding: 50,
                }}>
                {active && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "#D4500F" }}>Current page</span>
                )}
                <h3 style={{ fontFamily: PJB, fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: active ? "#ffffff" : "#111111" }}>{title}</h3>
                {!active && href && (
                  <div className="mt-6">
                    <Link href={href} className="text-[13px] font-medium hover:underline" style={{ color: "#D4500F" }}>Learn more →</Link>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. USE CASES — white, 4 cards ────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>REAL AI USE CASES</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Where AI delivers real value.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {useCaseCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-3 flex-1" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-[15px]"
            style={{ color: "#9CA3AF" }}
          >
            The value isn&apos;t in the model. It&apos;s in how it&apos;s applied.
          </motion.p>
        </div>
      </section>

      {/* ── 7. CAPABILITIES — surface, 3 cards ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>CAPABILITIES</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              From use case to scaled capability.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
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

      {/* ── 8. CASE STUDIES — white, 2 cards ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              AI enablement in practice.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
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

      {/* ── 9. FINAL CTA ─────────────────────────────────────────────── */}
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
              Still stuck in AI pilot mode?
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[480px]" style={{ color: "#9CA3AF" }}>
              If AI isn&apos;t delivering measurable impact, the issue isn&apos;t the idea, it&apos;s the execution. We&apos;ll show you how to move from experimentation to operation.
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
