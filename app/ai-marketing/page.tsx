"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const struggleCards = [
  {
    title: "Platform debt",
    body: "Legacy CMS, CDP and martech stacks weren't designed for AI integration. Bolting on models to inflexible architecture creates fragility, not capability.",
  },
  {
    title: "Data fragmentation",
    body: "AI requires clean, connected, real-time data. Most organisations have years of siloed, inconsistently structured data that prevents models from working as intended.",
  },
  {
    title: "Operationalisation gap",
    body: "Teams know what AI can do. They've run pilots. But moving from proof-of-concept to production-grade capability at scale requires a different kind of expertise.",
  },
];

const valueRows = [
  {
    area: "Content production",
    description:
      "Reduce content creation cycles from weeks to hours. AI-assisted briefing, drafting, translation and personalisation across every channel and market.",
    outcome: "60–80% reduction in content production time",
  },
  {
    area: "Personalisation at scale",
    description:
      "Move beyond rule-based segmentation. Predictive models that adapt content, offers and journeys in real time to individual intent and behaviour.",
    outcome: "2–4× uplift in conversion rates on personalised journeys",
  },
  {
    area: "Campaign optimisation",
    description:
      "Automated budget allocation, bid management and creative rotation driven by performance signals — without manual intervention at every touchpoint.",
    outcome: "30–50% improvement in cost-per-acquisition across paid channels",
  },
  {
    area: "Customer lifecycle intelligence",
    description:
      "Churn prediction, next-best-action modelling and lifetime value scoring embedded into your marketing workflows and CRM triggers.",
    outcome: "35% reduction in churn rate within 12 months of deployment",
  },
];

const stackTiles = [
  {
    tag: "Data layer",
    title: "CDP & data infrastructure",
    body: "Unified customer profiles, real-time event streaming and feature stores that give your models the signal quality they need.",
  },
  {
    tag: "Content",
    title: "AI-powered CMS & DAM",
    body: "Composable content platforms with AI authoring, auto-tagging, translation workflows and intelligent asset management built in.",
  },
  {
    tag: "Personalisation",
    title: "Decisioning engines",
    body: "Real-time personalisation infrastructure — from A/B experimentation to multi-armed bandits to full model-driven experience selection.",
  },
  {
    tag: "Analytics",
    title: "Attribution & intelligence",
    body: "Marketing mix modelling, incrementality testing and AI-assisted analytics that translate data into decisions your team can act on.",
  },
  {
    tag: "Execution",
    title: "Automated campaign ops",
    body: "AI-native campaign management integrations across paid, email, push and web — coordinated, optimised and self-improving.",
  },
];

const metrics = [
  { value: "73%", label: "of AI pilots never reach production" },
  { value: "4.2×", label: "ROI on operationalised AI vs experimentation" },
  { value: "8 wks", label: "average time to first live AI capability" },
  { value: "60%", label: "faster content cycles after AI integration" },
];

const practiceCards = [
  {
    client: "BBC",
    category: "Content AI",
    title: "AI content workflows across 14 global markets",
    outcome: "60% reduction in editorial cycle time",
    seed: "bbc-ai",
  },
  {
    client: "Capco",
    category: "Personalisation",
    title: "Real-time personalisation engine for digital banking",
    outcome: "2.5× uplift in product cross-sell conversion",
    seed: "capco-ai",
  },
  {
    client: "White Moss",
    category: "Campaign AI",
    title: "Automated campaign optimisation across paid channels",
    outcome: "44% reduction in cost-per-acquisition",
    seed: "whitemoss-ai",
  },
  {
    client: "Global Retail Brand",
    category: "Lifecycle AI",
    title: "Churn prediction and retention programme",
    outcome: "35% reduction in churn within 12 months",
    seed: "retail-ai",
  },
];

const services = [
  {
    title: "AI Readiness Audit",
    body: "Platform, data and capability assessment that maps your current state against an AI-ready architecture and surfaces the highest-priority gaps.",
  },
  {
    title: "AI Strategy & Roadmap",
    body: "A 12-month delivery plan aligned to your business objectives — sequenced, costed and with a clear ROI model for each initiative.",
  },
  {
    title: "Personalisation Programme",
    body: "End-to-end build of a real-time personalisation capability: CDP integration, model selection, experimentation framework and go-live support.",
  },
  {
    title: "Content AI Integration",
    body: "AI authoring, briefing and workflow automation embedded into your existing CMS — reducing production time without replacing editorial teams.",
  },
  {
    title: "Campaign Intelligence",
    body: "Automated bid management, budget allocation and creative optimisation across your paid and owned channels, powered by performance models.",
  },
  {
    title: "AI Enablement & Training",
    body: "Structured capability building for marketing and technology teams — from AI literacy through to hands-on model configuration and governance.",
  },
];

const aiSteps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Assess your data readiness, platform architecture and team capability against an AI-ready benchmark. We interview stakeholders, review your martech stack and map every gap between ambition and execution.",
    outcomes: [
      "Platform and data maturity scored against AI readiness criteria",
      "Prioritised list of blockers with root-cause analysis",
      "Executive-ready findings with a clear investment case",
    ],
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Design the target state architecture — data pipelines, model infrastructure, personalisation logic and content workflows — and create a phased delivery plan to get there.",
    outcomes: [
      "Reference architecture for AI-native marketing stack",
      "12-month delivery roadmap with milestones and dependencies",
      "Vendor and platform recommendations with commercial rationale",
    ],
  },
  {
    number: "03",
    title: "Activate",
    description:
      "Deliver the first live AI capability within 6–8 weeks, embedded in your existing platform and measured against a clear performance baseline. We build, test and iterate with your team.",
    outcomes: [
      "Production-grade AI capability live in your stack",
      "Measurable performance baseline established from day one",
      "Team upskilled and able to iterate independently",
    ],
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Extend proven capabilities across channels, markets and use cases with governance, tooling and operating models that sustain momentum after we step back.",
    outcomes: [
      "AI capability rolled out across all relevant channels and markets",
      "Internal Centre of Excellence established and resourced",
      "Ongoing optimisation cadence embedded in business-as-usual",
    ],
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function AIMarketingPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#0D0D0D" }}
        className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]"
      >
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-[780px]"
          >
            <motion.div variants={item}>
              <Eyebrow muted>AI MARKETING</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.0,
                color: "#ffffff",
              }}
            >
              AI Marketing.{" "}
              <span style={{ color: "#D4500F" }}>Applied.</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 text-[18px] leading-[1.65] max-w-[560px]"
              style={{ color: "#9CA3AF" }}
            >
              We help enterprise marketing teams move from AI experimentation to
              AI capability — embedding models, automation and intelligence into
              the platforms that drive measurable growth.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 500,
                    borderRadius: 14,
                    padding: "20px 35px",
                    height: "auto",
                    backgroundColor: "#D4500F",
                    color: "#ffffff",
                    boxShadow: "0 5px 0 0 #3a1a05",
                  }}
                >
                  <Link href="/contact">Start a conversation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 500,
                    borderRadius: 14,
                    padding: "20px 35px",
                    height: "auto",
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Link href="#approach">See our approach</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Portfolio image strip */}
        <div className="mt-16 max-w-[1440px] mx-auto px-[12px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 max-md:grid-cols-1"
          >
            {["ai-dash", "ai-content", "ai-analytics"].map((seed, i) => (
              <div
                key={seed}
                className="overflow-hidden"
                style={{ borderRadius: 16, height: 280 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${seed}/800/500`}
                  alt={`AI Marketing example ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE AI OPPORTUNITY ─────────────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={item}>
                <Eyebrow>THE OPPORTUNITY</Eyebrow>
              </motion.div>
              <motion.h2
                variants={item}
                className="mt-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: 52,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#111111",
                }}
              >
                AI changes what marketing can do.
              </motion.h2>
              <motion.p
                variants={item}
                className="mt-5 text-[16px] leading-[1.65]"
                style={{ color: "#6B7280" }}
              >
                The models are ready. The tools exist. The missing piece is
                operationalisation — connecting AI to the systems, data and
                workflows where it can actually create value at scale.
              </motion.p>

              <motion.ul variants={item} className="mt-8 flex flex-col gap-5">
                {[
                  {
                    title: "Content at speed",
                    desc: "AI-assisted creation, translation and personalisation across every channel and market.",
                  },
                  {
                    title: "Predictive personalisation",
                    desc: "Models that adapt content and offers in real time to individual behaviour and intent.",
                  },
                  {
                    title: "Automated optimisation",
                    desc: "Budget allocation, bid management and creative rotation driven by live performance data.",
                  },
                  {
                    title: "Lifecycle intelligence",
                    desc: "Churn prediction, next-best-action and LTV scoring embedded in your marketing workflows.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-[7px]"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 1,
                        backgroundColor: "#D4500F",
                        display: "inline-block",
                      }}
                      aria-hidden="true"
                    />
                    <span>
                      <span
                        className="text-[15px] font-medium block"
                        style={{ color: "#111111" }}
                      >
                        {title}
                      </span>
                      <span
                        className="text-[14px] leading-[1.6] mt-[2px] block"
                        style={{ color: "#6B7280" }}
                      >
                        {desc}
                      </span>
                    </span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right — Before / After card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              style={{
                borderRadius: 45,
                border: "1px solid #191A23",
                boxShadow: "0 5px 0 0 #191A23",
                overflow: "hidden",
              }}
            >
              {/* Before header */}
              <div
                className="px-8 py-4"
                style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}
              >
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: "#9CA3AF" }}
                >
                  Without operationalised AI
                </span>
              </div>
              {["Manual content production cycles of 2–4 weeks", "Rule-based segmentation with static audiences", "Manual campaign adjustments on weekly cadence", "Reactive retention based on CRM rules"].map(
                (text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 px-8 py-4"
                    style={{ borderBottom: "1px solid #E5E7EB" }}
                  >
                    <span style={{ color: "#9CA3AF", fontSize: 16 }}>✕</span>
                    <span className="text-[14px]" style={{ color: "#6B7280" }}>
                      {text}
                    </span>
                  </div>
                )
              )}

              {/* After header */}
              <div
                className="px-8 py-4"
                style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}
              >
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: "#D4500F" }}
                >
                  With operationalised AI
                </span>
              </div>
              {["AI-assisted content drafted, reviewed and live in hours", "Real-time predictive models adapting to live behaviour", "Automated budget and creative optimisation 24/7", "Proactive churn prediction and personalised retention"].map(
                (text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 px-8 py-4"
                    style={{ borderBottom: "1px solid #E5E7EB" }}
                  >
                    <span style={{ color: "#16A34A", fontSize: 16 }}>✓</span>
                    <span className="text-[14px]" style={{ color: "#111111" }}>
                      {text}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY ORGANISATIONS STRUGGLE ────────────────────────────── */}
      <section
        style={{ backgroundColor: "#F3F3F3" }}
        className="py-[70px] max-sm:py-[40px]"
      >
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <motion.div variants={item}>
              <Eyebrow>THE CHALLENGE</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111111",
              }}
            >
              Three things holding teams back.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
          >
            {struggleCards.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col group cursor-default transition-transform duration-300 hover:-translate-y-[4px]"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 45,
                  border: "1px solid #191A23",
                  boxShadow: "0 5px 0 0 #191A23",
                  padding: 50,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#111111",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-[15px] leading-[1.65] mt-4"
                  style={{ color: "#6B7280" }}
                >
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHERE AI CREATES VALUE ─────────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <motion.div variants={item}>
              <Eyebrow>VALUE CREATION</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111111",
              }}
            >
              Where AI delivers measurable return.
            </motion.h2>
          </motion.div>

          <div className="flex flex-col" style={{ borderTop: "1px solid #E5E7EB" }}>
            {valueRows.map(({ area, description, outcome }, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-3 gap-12 py-8 max-md:grid-cols-1 max-md:gap-3"
                style={{ borderBottom: "1px solid #E5E7EB" }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#111111",
                    }}
                  >
                    {area}
                  </h3>
                </div>
                <p className="text-[15px] leading-[1.65]" style={{ color: "#6B7280" }}>
                  {description}
                </p>
                <p
                  className="text-[14px] font-medium"
                  style={{ color: "#D4500F" }}
                >
                  {outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AI ACROSS THE STACK ────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#F3F3F3" }}
        className="py-[70px] max-sm:py-[40px]"
      >
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <motion.div variants={item}>
              <Eyebrow>THE STACK</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111111",
              }}
            >
              AI across every layer.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-5 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1"
          >
            {stackTiles.map(({ tag, title, body }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col transition-transform duration-200 hover:-translate-y-[3px] cursor-default"
                style={{
                  backgroundColor: "#111111",
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: 28,
                }}
              >
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4"
                  style={{ color: "#D4500F" }}
                >
                  {tag}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#ffffff",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-[13px] leading-[1.6]"
                  style={{ color: "#9CA3AF" }}
                >
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. FROM EXPERIMENTATION TO CAPABILITY ────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={item}>
                <Eyebrow>THE PROBLEM</Eyebrow>
              </motion.div>
              <motion.h2
                variants={item}
                className="mt-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: 52,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#111111",
                }}
              >
                From experimentation to capability.
              </motion.h2>
              <motion.p
                variants={item}
                className="mt-5 text-[16px] leading-[1.65]"
                style={{ color: "#6B7280" }}
              >
                73% of AI pilots never reach production. The bottleneck isn't
                the technology — it's the architecture, data quality and
                organisational readiness to operationalise it. We've seen every
                failure mode. We know how to avoid them.
              </motion.p>
              <motion.p
                variants={item}
                className="mt-4 text-[16px] leading-[1.65]"
                style={{ color: "#6B7280" }}
              >
                Our clients don't just get a proof-of-concept. They get a
                production-grade capability, embedded in their stack, with the
                team skills and governance to sustain it.
              </motion.p>
              <motion.div variants={item} className="mt-6">
                <Link
                  href="/contact"
                  className="text-[15px] font-medium hover:underline"
                  style={{ color: "#D4500F" }}
                >
                  Talk to us about your AI roadmap →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — 2×2 metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-6"
            >
              {metrics.map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-col p-8"
                  style={{
                    borderRadius: 24,
                    border: "1px solid #191A23",
                    boxShadow: "0 5px 0 0 #191A23",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: 48,
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "#D4500F",
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[14px] leading-[1.5] mt-3"
                    style={{ color: "#6B7280" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. AI IN PRACTICE ─────────────────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <motion.div variants={item}>
              <Eyebrow>IN PRACTICE</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111111",
              }}
            >
              AI delivered, not promised.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1"
          >
            {practiceCards.map(({ client, category, title, outcome, seed }) => (
              <motion.div
                key={title}
                variants={item}
                className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{
                  borderRadius: 45,
                  border: "1px solid #191A23",
                  boxShadow: "0 5px 0 0 #191A23",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  className="overflow-hidden flex-shrink-0"
                  style={{ height: 280, borderRadius: "45px 45px 0 0" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/${seed}/800/600`}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-[50px]">
                  <p className="eyebrow mb-3">{client}</p>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: 22,
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: "#111111",
                    }}
                  >
                    {title}
                  </h3>
                  <p className="text-[15px] font-medium mt-3" style={{ color: "#D4500F" }}>
                    {outcome}
                  </p>
                  <div
                    className="mt-5 pt-5 flex items-center justify-between"
                    style={{ borderTop: "1px solid #E5E7EB" }}
                  >
                    <span
                      className="inline-block px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em]"
                      style={{ background: "#FDF0E8", color: "#D4500F" }}
                    >
                      {category}
                    </span>
                    <Link
                      href="/work"
                      className="text-[13px] font-medium group-hover:underline"
                      style={{ color: "#6B7280" }}
                    >
                      View case study →
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
              href="/work"
              className="text-[15px] font-medium hover:underline"
              style={{ color: "#D4500F" }}
            >
              View all case studies →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 9. AI SERVICES ────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#F3F3F3" }}
        className="py-[70px] max-sm:py-[40px]"
      >
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <motion.div variants={item}>
              <Eyebrow>SERVICES</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111111",
              }}
            >
              What we deliver.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
          >
            {services.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px]"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 45,
                  border: "1px solid #191A23",
                  boxShadow: "0 5px 0 0 #191A23",
                  padding: 50,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#111111",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-[15px] leading-[1.65] mt-4 flex-1"
                  style={{ color: "#6B7280" }}
                >
                  {body}
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="text-[13px] font-medium hover:underline"
                    style={{ color: "#D4500F" }}
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA />

      {/* ── 11. FOOTER ────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
