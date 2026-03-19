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

const experienceCards = [
  {
    title: "40+ organisations",
    body: "More than forty organisations have trusted Analogiq to deliver Sitecore work — from initial implementations to complex migrations, composable transitions and long-term platform governance.",
  },
  {
    title: "Multiple versions",
    body: "Our experience spans every major Sitecore release. We have delivered projects on Sitecore 8, 9, 10, XP, XM and XM Cloud — and supported organisations through each transition.",
  },
  {
    title: "End to end",
    body: "We work across the full Sitecore lifecycle. Platform selection, architecture, implementation, integration, optimisation, migration and the ongoing governance that keeps environments healthy.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Audit",
    description: "Review the current Sitecore environment — architecture, performance, integrations and how effectively the platform supports marketing operations.",
    outcomes: [
      "Full architectural review with documented technical debt",
      "Performance and integration audit",
      "Gap analysis against marketing team requirements",
    ],
  },
  {
    number: "02",
    title: "Roadmap",
    description: "Define the modernisation path — whether that involves architectural improvements, cloud migration, composable transition or integration work.",
    outcomes: [
      "Phased modernisation roadmap with clear milestones",
      "Investment model with expected outcomes at each stage",
      "Risk register and mitigation approach",
    ],
  },
  {
    number: "03",
    title: "Pilot",
    description: "Deliver a contained initiative that demonstrates the value of the modernisation approach before committing to full-scale implementation.",
    outcomes: [
      "Live improvement delivered within agreed timeframe",
      "Before/after performance comparison",
      "Team capability and confidence built",
    ],
  },
  {
    number: "04",
    title: "Scale",
    description: "Extend the improved platform capability across the organisation — maintaining performance and building internal capability to operate independently.",
    outcomes: [
      "Full modernisation delivered across all environments",
      "Internal team trained and operating independently",
      "Governance model and optimisation cadence in place",
    ],
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function SitecorePage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>SITECORE</Eyebrow></motion.div>
            <motion.h1
              variants={item}
              className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 72, fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}
            >
              Sitecore expertise built over{" "}
              <span style={{ color: "#D4500F" }}>a decade.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[600px]" style={{ color: "#9CA3AF" }}>
              We are one of the most experienced Sitecore consultancies in the UK. Over ten years our teams have delivered more than 40 Sitecore engagements — spanning implementations, upgrades, composable transitions, AI integrations and long-term platform governance. When organisations need Sitecore to work harder, they come to us.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about Sitecore</Link>
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

      {/* ── 2. THE SITECORE OPPORTUNITY — white, two col ─────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE PLATFORM</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                What Sitecore offers enterprise organisations.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Sitecore is one of the most powerful digital experience platforms available to enterprise organisations. When it is well-implemented and properly governed, it gives marketing teams genuine control over complex digital environments — content at scale, personalisation, automation and analytics in a single connected platform. The challenge is getting there and staying there.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Content management at scale", desc: "Managing large volumes of content across multiple channels and markets" },
                  { title: "Personalisation and targeting", desc: "Adapting experiences to individual user behaviour in real time" },
                  { title: "Marketing automation", desc: "Connecting content delivery to broader campaign and nurture workflows" },
                  { title: "Analytics and optimisation", desc: "Understanding how digital experiences perform and where to improve" },
                ]} />
              </motion.div>
            </motion.div>

            {/* Right — capabilities visual */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Sitecore product suite</span>
              </div>
              {["Content Hub", "XM Cloud", "CDP + Personalize", "Send (Email & Marketing)", "OrderCloud (Commerce)"].map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. THE CHALLENGE — surface, two col flipped ──────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left — visual */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#9CA3AF" }}>Common legacy indicators</span>
              </div>
              {[
                "Years of accumulated technical debt",
                "On-premise infrastructure hard to scale",
                "Platform upgrades treated as major projects",
                "Limited API and integration capabilities",
                "Marketing team unable to publish independently",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-3 px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ color: "#D4500F", fontSize: 16, flexShrink: 0 }}>✕</span>
                  <span className="text-[14px]" style={{ color: "#6B7280" }}>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                The challenges of legacy Sitecore implementations.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Most Sitecore problems are not Sitecore&apos;s fault. They are the result of implementations that grew organically, governance that was never established, and architecture decisions that made sense at the time but compound over years. We have seen this pattern more than forty times. We know where the bodies are buried — and we know how to fix it without starting from scratch.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Technical debt", desc: "Years of incremental development creating architectural complexity" },
                  { title: "High total cost of ownership", desc: "Infrastructure and licensing costs that are difficult to justify" },
                  { title: "Slow innovation", desc: "Platform upgrades becoming large and risky projects" },
                  { title: "Limited AI readiness", desc: "Legacy implementations not designed for modern AI integration" },
                ]} />
              </motion.div>
            </motion.div>
          </div>
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
                How Analogiq modernises Sitecore.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Our teams have worked across every major version of Sitecore — from traditional XP implementations through to XM Cloud and modern composable architectures. We support both new implementations and the modernisation of existing environments. More importantly, we understand the organisational complexity that surrounds Sitecore projects — the competing priorities, the technical debt, the internal politics. We have navigated all of it.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Platform architecture", desc: "Designing Sitecore environments that are scalable and maintainable" },
                  { title: "Cloud migration", desc: "Moving from on-premise to cloud-hosted Sitecore environments" },
                  { title: "Composable modernisation", desc: "Introducing headless and composable approaches to existing implementations" },
                  { title: "AI integration", desc: "Connecting Sitecore to AI systems and modern marketing technology ecosystems" },
                ]} />
              </motion.div>
            </motion.div>

            {/* Right — services card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#D4500F" }}>What we deliver</span>
              </div>
              {[
                "New Sitecore implementations",
                "Platform upgrades and migrations",
                "XM Cloud transformation",
                "Headless / composable transition",
                "Personalisation programme delivery",
                "Integration and AI enablement",
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

      {/* ── 5. EXPERIENCE & CAPABILITIES — surface, 3 cards ─────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>OUR EXPERIENCE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              A decade of Sitecore delivery.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {experienceCards.map(({ title, body }) => (
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

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        heading="Ready to get more from your Sitecore investment?"
        subheading="Whether you are implementing Sitecore for the first time, dealing with a platform that has drifted from its original design, or planning a migration to XM Cloud — we have done it before and we can help you do it well."
      />

      <Footer />
    </div>
  );
}
