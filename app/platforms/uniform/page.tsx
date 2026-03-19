"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../../components/NavigationBar";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import Eyebrow from "../../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

/* ─── SHARED HELPERS ─────────────────────────────────────────────────────── */

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

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const advantageCards = [
  {
    title: "Speed to market",
    body: "Launch campaigns and experiences without waiting for platform development cycles. Marketing teams can operate at the pace modern digital marketing requires.",
  },
  {
    title: "Technology freedom",
    body: "Select the best tool for each job — content management, personalisation, commerce, experimentation — and connect them through Uniform's orchestration layer.",
  },
  {
    title: "Future proof",
    body: "As technology landscapes evolve, composable architectures allow organisations to swap components without rebuilding the entire digital environment.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Audit",
    description: "Assess the current digital architecture and identify where a composable approach would deliver the most value for marketing operations.",
    outcomes: [
      "Current state architecture mapped and documented",
      "Composable opportunity assessment with prioritisation",
      "Stakeholder alignment on target state and rationale",
    ],
  },
  {
    number: "02",
    title: "Roadmap",
    description: "Design the composable architecture — defining which technologies connect through Uniform and in what sequence the migration happens.",
    outcomes: [
      "Composable architecture blueprint",
      "Phased migration plan with technology selection",
      "Integration and data model design",
    ],
  },
  {
    number: "03",
    title: "Pilot",
    description: "Implement a contained Uniform environment that proves the composable approach and demonstrates value to marketing and technology teams.",
    outcomes: [
      "Live Uniform environment with initial integrations",
      "Marketing team trained on visual editing workflows",
      "Performance baseline and quality metrics established",
    ],
  },
  {
    number: "04",
    title: "Scale",
    description: "Extend the Uniform environment across channels, markets and use cases — migrating from legacy systems and building organisational capability.",
    outcomes: [
      "Full composable environment live across all markets",
      "Legacy platform decommissioned on agreed schedule",
      "Internal team operating independently with full capability",
    ],
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function UniformPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>UNIFORM</Eyebrow></motion.div>
            <motion.h1
              variants={item}
              className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 72, fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}
            >
              The{" "}
              <span style={{ color: "#D4500F" }}>composable platform</span>{" "}
              for modern marketing.
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[600px]" style={{ color: "#9CA3AF" }}>
              Uniform is a modern digital experience platform designed for organisations that want greater flexibility in how they build and operate digital experiences. It acts as the orchestration layer that connects specialised technologies into a unified environment.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about Uniform</Link>
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

      {/* ── 2. WHAT UNIFORM ENABLES — white, two col ─────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE PLATFORM</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                What Uniform enables for marketing teams.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Rather than being constrained by the capabilities of a single platform, organisations using Uniform can select the technologies that best support their specific needs while maintaining a unified environment for managing digital experiences. Visual editing environments allow marketers to create and modify digital experiences without relying heavily on engineering teams. At the same time, developers retain full control over how digital experiences are structured and deployed.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Marketing autonomy", desc: "Teams can create and publish experiences without engineering dependency" },
                  { title: "Composable flexibility", desc: "Combine best-of-breed technologies in a unified orchestration layer" },
                  { title: "High performance delivery", desc: "Modern front-end frameworks and composable architectures" },
                  { title: "AI readiness", desc: "Designed to integrate with AI systems and personalisation engines from the ground up" },
                ]} />
              </motion.div>
            </motion.div>

            {/* Right — architecture visual */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Uniform orchestration layer</span>
              </div>
              {[
                { layer: "Front-end", tech: "Next.js / Astro / Nuxt" },
                { layer: "Visual editing", tech: "Uniform Canvas" },
                { layer: "Content", tech: "Contentful / Sanity / Storyblok" },
                { layer: "Personalisation", tech: "Uniform Context / Ninetailed" },
                { layer: "Commerce", tech: "Shopify / Commercetools" },
              ].map(({ layer, tech }, i) => (
                <div key={layer} className="flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.05em]" style={{ color: "#D4500F" }}>{layer}</span>
                  <span className="text-[14px]" style={{ color: "#6B7280" }}>{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. THE COMPOSABLE ADVANTAGE — surface, 3 cards ───────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>THE ADVANTAGE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Why composable architecture changes the equation.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {advantageCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. HOW ANALOGIQ HELPS — white, two col ───────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>OUR APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                How Analogiq delivers Uniform.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Analogiq works with organisations to evaluate, implement and optimise Uniform environments. Our work often involves designing composable architectures, integrating Uniform with existing technology ecosystems and helping marketing teams adopt the workflows required to operate effectively within composable environments.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Architecture design", desc: "Designing composable environments that connect Uniform to the broader martech stack" },
                  { title: "Implementation", desc: "Building and configuring Uniform environments to support marketing operations" },
                  { title: "Integration", desc: "Connecting Uniform to CMS, personalisation, analytics and commerce systems" },
                  { title: "Enablement", desc: "Training marketing and development teams to operate effectively in composable environments" },
                ]} />
              </motion.div>
              <motion.div variants={item} className="mt-8">
                <Link href="/contact" className="text-[15px] font-medium hover:underline" style={{ color: "#D4500F" }}>
                  Discuss a Uniform project →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — delivery card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#D4500F" }}>What we deliver</span>
              </div>
              {[
                "Composable architecture design",
                "Uniform implementation and configuration",
                "CMS and headless content integration",
                "Personalisation engine integration",
                "Performance and edge delivery optimisation",
                "Marketing team enablement and training",
              ].map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-4"
                  style={{ borderBottom: i < 5 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ color: "#16A34A", fontSize: 16, flexShrink: 0 }}>✓</span>
                  <span className="text-[14px]" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        heading="Ready to explore composable architecture?"
        subheading="If your current platform is limiting what your marketing team can do, Uniform may be part of the answer. Let's find out."
      />

      <Footer />
    </div>
  );
}
