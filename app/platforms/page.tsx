"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import ProcessSteps from "../components/ProcessSteps";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
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

const platformCards = [
  {
    name: "Sitecore",
    body: "One of the leading enterprise digital experience platforms. Analogiq has over a decade of Sitecore experience across more than 40 client engagements.",
    href: "/platforms/sitecore",
    cta: "Learn more",
  },
  {
    name: "Uniform",
    body: "A modern composable platform designed for organisations that want greater flexibility in how they build and operate digital experiences.",
    href: "/platforms/uniform",
    cta: "Learn more",
  },
  {
    name: "And more",
    body: "We also work with Optimizely, Umbraco, Contentful and the broader ecosystem of composable and headless technologies.",
    href: "/contact",
    cta: "Talk to us",
  },
];

const workCards = [
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

const approachSteps = [
  {
    number: "01",
    title: "Audit",
    description: "Assess the current platform environment — technologies, integrations, architectural constraints and how effectively marketing teams can operate within it.",
    outcomes: [
      "Platform maturity mapped against modern architecture benchmarks",
      "Prioritised list of constraints and opportunities",
      "Clear picture of integration landscape and data flows",
    ],
  },
  {
    number: "02",
    title: "Roadmap",
    description: "Design an architecture that supports greater flexibility, scalability and integration — sequenced around real operational constraints.",
    outcomes: [
      "Target state architecture with phased delivery plan",
      "Platform vendor shortlist with evaluation criteria",
      "Business case and investment model",
    ],
  },
  {
    number: "03",
    title: "Pilot",
    description: "Deliver a contained platform initiative that proves the approach and builds internal confidence before committing to full-scale implementation.",
    outcomes: [
      "Live platform capability delivered within agreed timeframe",
      "Performance baseline established",
      "Team trained and able to operate independently",
    ],
  },
  {
    number: "04",
    title: "Scale",
    description: "Extend the new platform capability across channels, markets and use cases in a way that is sustainable and maintains performance.",
    outcomes: [
      "Full platform rollout across all markets and channels",
      "Governance model and operating procedures in place",
      "Internal capability built for long-term platform management",
    ],
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function PlatformsPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>DXP & PLATFORMS</Eyebrow></motion.div>
            <motion.h1
              variants={item}
              className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 72, fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}
            >
              Modern marketing needs{" "}
              <span style={{ color: "#D4500F" }}>modern platforms.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[600px]" style={{ color: "#9CA3AF" }}>
              Digital experience platforms form the foundation of how organisations manage and deliver digital experiences. Over the past decade the landscape has evolved significantly — from traditional monolithic CMS platforms to composable and headless architectures that allow organisations to build flexible digital ecosystems.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about platforms</Link>
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

      {/* ── 2. THE PLATFORM OPPORTUNITY — white, two col ─────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE OPPORTUNITY</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                The evolving role of digital experience platforms.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Digital experience platforms support the creation, management and delivery of content across websites, mobile applications and other digital channels. They also play a critical role in integrating marketing technologies, supporting personalisation and enabling experimentation. Analogiq works with organisations to evaluate, implement and optimise digital experience platforms that support modern marketing operations.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Platform selection and architecture", desc: "Aligning technology choices with marketing strategy and operational requirements" },
                  { title: "Martech and AI integration", desc: "Connecting platforms to the broader technology ecosystem" },
                  { title: "Migration and enablement", desc: "Moving from legacy systems to modern architectures without disruption" },
                  { title: "Ongoing optimisation", desc: "Ensuring platforms continue to support evolving marketing needs" },
                ]} />
              </motion.div>
            </motion.div>

            {/* Right — capability card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Platform capabilities</span>
              </div>
              {["Composable architecture", "Headless content delivery", "AI integration layer", "Experimentation support", "Personalisation engine"].map((cap, i) => (
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

      {/* ── 3. THE LEGACY CHALLENGE — surface, two col flipped ───────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left — visual (before state) */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#9CA3AF" }}>Legacy platform reality</span>
              </div>
              {[
                { label: "Content change request", value: "2–3 week cycle" },
                { label: "New integration", value: "3–6 months" },
                { label: "Personalisation capability", value: "Pilot — not live" },
                { label: "AI readiness", value: "Not supported" },
                { label: "Experimentation", value: "Manual / none" },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span className="text-[14px]" style={{ color: "#6B7280" }}>{label}</span>
                  <span className="text-[13px] font-medium" style={{ color: "#D4500F" }}>{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Right — text */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Why legacy platforms inhibit modern marketing.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Traditional monolithic content management systems were designed for content publishing, not continuous experimentation or AI-driven marketing. Development cycles that once felt acceptable now create meaningful competitive disadvantage. Marketing teams wait weeks for changes that should take hours. Data sits in disconnected systems. Personalisation remains a pilot that never reaches production.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Slow development cycles", desc: "Every change requires engineering resource and lengthy deployment processes" },
                  { title: "Rigid architectures", desc: "Platforms that resist integration with modern marketing technologies" },
                  { title: "Fragmented data", desc: "Customer data that cannot be connected or activated across the stack" },
                  { title: "Limited experimentation", desc: "No capability to test and learn continuously across digital channels" },
                ]} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. THE MODERN ALTERNATIVE — white, two col ───────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE SOLUTION</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                How composable, AI-ready architecture changes everything.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                A composable or headless digital experience platform connects content, data and AI across customer journeys. Marketing teams can launch campaigns in days not weeks. Personalisation becomes operational rather than experimental. Experimentation runs continuously. And when AI capabilities mature, the platform is already designed to receive and act on them.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Speed to market", desc: "Launch campaigns and experiences without waiting for engineering cycles" },
                  { title: "AI readiness", desc: "Platforms designed to integrate with AI systems from the ground up" },
                  { title: "Personalisation at scale", desc: "Architecture that supports real-time adaptation to individual behaviour" },
                  { title: "Continuous experimentation", desc: "Built-in capability to test, learn and improve continuously" },
                ]} />
              </motion.div>
            </motion.div>

            {/* Right — modern state card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#D4500F" }}>Composable platform reality</span>
              </div>
              {[
                { label: "Content change request", value: "Same day" },
                { label: "New integration", value: "Days to weeks" },
                { label: "Personalisation capability", value: "Live in production" },
                { label: "AI readiness", desc: "Native support" },
                { label: "Experimentation", value: "Continuous" },
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

      {/* ── 5. PLATFORMS WE WORK WITH — surface, 3 cards ─────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>OUR PLATFORMS</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Platforms we work with.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Our experience spans a range of enterprise and composable platforms, as well as the wider ecosystem of technologies that integrate with them.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {platformCards.map(({ name, body, href, cta }) => (
              <motion.div key={name} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{name}</h3>
                <p className="text-[15px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
                <div className="mt-6">
                  <Link href={href} className="text-[13px] font-medium hover:underline" style={{ color: "#D4500F" }}>{cta} →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. THE ANALOGIQ APPROACH — white, ProcessSteps ───────────── */}
      <ProcessSteps
        eyebrow="OUR APPROACH"
        heading="How we approach platform work."
        subheading="We support organisations at multiple stages of the platform lifecycle."
        steps={approachSteps}
      />

      {/* ── 7. CASE STUDIES — surface, 3 cards ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WORK</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Platform work in practice.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {workCards.map(({ client, category, title, outcome, seed }) => (
              <motion.div key={title} variants={item}
                className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff" }}>
                <div className="overflow-hidden flex-shrink-0" style={{ height: 280, borderRadius: "45px 45px 0 0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://picsum.photos/seed/${seed}/800/600`} alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-[50px]">
                  <p className="eyebrow mb-3">{client}</p>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[15px] font-medium mt-3" style={{ color: "#D4500F" }}>{outcome}</p>
                  <Link href="/work" className="inline-block mt-5 text-[14px] font-medium" style={{ color: "#6B7280" }}>View case study →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        heading="Ready to modernise your digital platform?"
        subheading="If your current platform is limiting your marketing ambitions, this is a good moment to have an honest conversation about it."
      />

      <Footer />
    </div>
  );
}
