"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
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
            <span className="text-[16px] font-medium block" style={{ color: "#111111" }}>{title}</span>
            <span className="text-[15px] leading-[1.6] mt-[2px] block" style={{ color: "#6B7280" }}>{desc}</span>
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
    logo: "/logos/platforms/sitecore.png",
  },
  {
    name: "Uniform",
    body: "A modern composable platform designed for organisations that want greater flexibility in how they build and operate digital experiences.",
    href: "/platforms/uniform",
    cta: "Learn more",
    logo: "/logos/platforms/uniform.svg",
  },
];

const workCards = [
  {
    client: "Capco",
    category: "Platform Engineering · Sitecore",
    title: "Rebuilding a global digital platform from scratch in 120 days",
    outcome: "14 days → 24hr SLA · 120-day delivery",
    image: "/clients/capco/services.webp",
    href: "/work/capco-platform",
  },
  {
    client: "The Experience Golf",
    category: "Sitecore · Ecommerce",
    title: "Ecommerce platform delivery on Sitecore in 6 months",
    outcome: "6-month delivery",
    image: "/clients/experience-golf/course-finder.webp",
    href: "/work/experience-golf",
  },
  {
    client: "Keith Prowse",
    category: "Sitecore · Platform Engineering",
    title: "Long-term Sitecore technical partnership since 2021",
    outcome: "Technical partner since 2021",
    image: "/clients/keith-prowse/experience-finder.webp",
    href: "/work/keith-prowse",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Audit",
    description: "Assess the current platform environment: technologies, integrations, architectural constraints and how effectively marketing teams can operate within it.",
    outcomes: [
      "Platform maturity mapped against modern architecture benchmarks",
      "Prioritised list of constraints and opportunities",
      "Clear picture of integration landscape and data flows",
    ],
  },
  {
    number: "02",
    title: "Roadmap",
    description: "Design an architecture that supports greater flexibility, scalability and integration, sequenced around real operational constraints.",
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

const platformLogos = [
  { src: "/logos/platforms/sitecore.png", alt: "Sitecore" },
  { src: "/logos/platforms/uniform.svg", alt: "Uniform" },
  { src: "/logos/platforms/optimizely.svg", alt: "Optimizely" },
  { src: "/logos/platforms/contentful.svg", alt: "Contentful" },
  { src: "/logos/platforms/umbraco.png", alt: "Umbraco" },
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
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Your platform isn&apos;t broken. It&apos;s just not built for{" "}
              <span style={{ color: "#D4500F" }}>how marketing works today.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[600px]" style={{ color: "#9CA3AF" }}>
              Most organisations already have the technology they need. The problem is how it&apos;s structured, connected and operated. We help you modernise your platform without unnecessary rebuilds, unlocking speed, flexibility and AI-ready capability.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Start the conversation</Link>
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
              <motion.div variants={item}><Eyebrow>WHAT MODERN PLATFORMS NEED</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                What modern platforms actually need to enable.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Most digital platforms weren&apos;t designed for how marketing operates today. They were built for publishing content. Not for experimentation. Not for personalisation. Not for AI. That&apos;s why everything takes longer than it should.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Faster campaign execution", desc: "Aligning technology choices with marketing strategy and operational requirements" },
                  { title: "Real-time personalisation", desc: "Connecting platforms to the broader technology ecosystem" },
                  { title: "Continuous experimentation", desc: "Moving from legacy systems to modern architectures without disruption" },
                  { title: "AI integration from the ground up", desc: "Ensuring platforms continue to support evolving marketing needs" },
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
                { label: "Personalisation capability", value: "Pilot, not live" },
                { label: "AI readiness", value: "Not supported" },
                { label: "Experimentation", value: "Manual / none" },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span className="text-[15px]" style={{ color: "#6B7280" }}>{label}</span>
                  <span className="text-[15px] font-medium" style={{ color: "#D4500F" }}>{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Right — text */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Why legacy platforms inhibit modern marketing.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Traditional monolithic content management systems were designed for content publishing, not continuous experimentation or AI-driven marketing. Development cycles that once felt acceptable now create meaningful competitive disadvantage. Marketing teams wait weeks for changes that should take hours. Data sits in disconnected systems. Personalisation remains a pilot that never reaches production.
              </motion.p>
              <motion.div variants={item}>
                <FeatureList items={[
                  { title: "Your platform is too slow to change", desc: "Every change requires engineering resource and lengthy deployment processes" },
                  { title: "Your architecture resists integration", desc: "Platforms that resist integration with modern marketing technologies" },
                  { title: "Your data isn't connected", desc: "Customer data that cannot be connected or activated across the stack" },
                  { title: "Your team can't experiment", desc: "No capability to test and learn continuously across digital channels" },
                ]} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3b. THE INSIGHT ──────────────────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="max-w-[720px]">
            <motion.div variants={item}><Eyebrow>THE INSIGHT</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Most organisations assume they need to replatform. In reality, they don&apos;t.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.7]" style={{ color: "#6B7280" }}>
              They need to rethink how their platform is structured and how it supports execution. In many cases, the fastest path forward is not replacing your platform, but extending it with a composable architecture. This approach reduces risk, preserves existing investment and delivers speed to market far faster than a full rebuild.
            </motion.p>
          </motion.div>
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
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                How composable, AI-ready architecture changes everything.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                A composable platform doesn&apos;t mean replacing everything. It means structuring your digital environment so marketing teams can move at the pace the business requires. Campaigns launch in days. Personalisation runs in production. Experimentation is continuous. And when AI capabilities are ready to deploy, the platform is already designed to receive them.
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
                { label: "AI readiness", value: "Built in from day one" },
                { label: "Experimentation", value: "Continuous" },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span className="text-[15px]" style={{ color: "#6B7280" }}>{label}</span>
                  <span className="text-[15px] font-medium" style={{ color: "#16A34A" }}>{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. PARTNER LOGO STRIP — white ────────────────────────────── */}
      <section className="bg-white" style={{ padding: "48px 0" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={item} className="mb-10 flex justify-center">
              <Eyebrow>PLATFORMS WE WORK WITH</Eyebrow>
            </motion.div>
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center items-center gap-[56px] max-sm:gap-[32px]"
            >
              {platformLogos.map(({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  style={{
                    height: 36,
                    width: "auto",
                    display: "block",
                    objectFit: "contain",
                    filter: "grayscale(100%) opacity(55%)",
                    transition: "filter 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = "grayscale(0%) opacity(100%)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(100%) opacity(55%)"; }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. PLATFORMS WE WORK WITH — surface, 3 cards ─────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>OUR PLATFORMS</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Platforms we work with.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[660px]" style={{ color: "#6B7280" }}>
              We work across both enterprise and composable platforms. Sitecore for evolving existing environments. Uniform for unlocking speed without rebuilds. The right answer depends on where you are, and how they work together.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">

            {/* Sitecore */}
            {platformCards.map(({ name, body, href, cta, logo }) => (
              <motion.div key={name} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <div style={{ height: 40, display: "flex", alignItems: "center", marginBottom: 16 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo} alt={name} style={{ maxHeight: 32, width: "auto", display: "block", objectFit: "contain" }} />
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{name}</h3>
                <p className="text-[16px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
                <div className="mt-6">
                  <Link href={href} className="text-[14px] font-medium hover:underline" style={{ color: "#D4500F" }}>{cta} →</Link>
                </div>
              </motion.div>
            ))}

            {/* And more */}
            <motion.div variants={item}
              className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
              style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/platforms/contentful.svg" alt="Contentful" style={{ maxHeight: 32, width: "auto", display: "block", objectFit: "contain" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/platforms/umbraco.png" alt="Umbraco" style={{ maxHeight: 32, width: "auto", display: "block", objectFit: "contain" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/platforms/optimizely.svg" alt="Optimizely" style={{ maxHeight: 32, width: "auto", display: "block", objectFit: "contain" }} />
                </div>
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>And more</h3>
              <p className="text-[16px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>
                Optimizely, Umbraco, Contentful and others. We also work with the broader ecosystem of composable and headless technologies.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="text-[14px] font-medium hover:underline" style={{ color: "#D4500F" }}>Talk to us →</Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── 7. CASE STUDIES — surface, 3 cards ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WORK</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Platform work in practice.
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
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[14px] font-medium mt-3" style={{ color: "#D4500F" }}>{outcome}</p>
                  <Link href={href} className="inline-block mt-5 text-[14px] font-medium hover:underline" style={{ color: "#6B7280" }}>View case study →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        heading="Ready to modernise your digital platform?"
        subheading="We work with a focused number of organisations at any given time. If your platform is holding your marketing team back, we would be glad to assess the situation and map a clear path forward."
      />

      <Footer />
    </div>
  );
}
