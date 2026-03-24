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

const impactCards = [
  {
    title: "Launch faster",
    body: "Go from idea to live campaign in days, not weeks — without waiting on development cycles.",
  },
  {
    title: "Activate AI properly",
    body: "Structure your content and experiences so AI can actually be deployed in production, not stuck in pilots.",
  },
  {
    title: "Give marketing more control",
    body: "Enable teams to build and optimise experiences without constant reliance on developers.",
  },
  {
    title: "Build for change",
    body: "Adapt your platform as your needs evolve, without repeated replatforming.",
  },
];

const deliverables = [
  "Composable architecture design",
  "Uniform implementation and configuration",
  "CMS, data and platform integration",
  "Personalisation and experimentation setup",
  "Front-end performance optimisation",
  "AI-ready content and experience modelling",
  "Marketing team enablement and workflows",
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
            <motion.div variants={item} className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/platforms/uniform.svg"
                alt="Uniform"
                style={{ maxHeight: 32, width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
              />
            </motion.div>
            <motion.h1
              variants={item}
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}
            >
              Your website shouldn&apos;t{" "}
              <span style={{ color: "#D4500F" }}>slow your marketing down.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[600px]" style={{ color: "#9CA3AF" }}>
              We help marketing teams unlock faster campaigns, AI-ready experiences and real website velocity with Uniform.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about Uniform</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Link href="/work">See platform work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE CHALLENGE — white, two col ────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Most enterprise websites can&apos;t keep up with marketing.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Marketing teams are being asked to do more than ever — launch faster campaigns, personalise experiences, experiment continuously and adopt AI. But the platforms they rely on weren&apos;t built for this pace.
              </motion.p>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                This is what we call the Website Velocity Gap — and it&apos;s growing.
              </motion.p>
            </motion.div>

            {/* Right — pain points card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#9CA3AF" }}>Signs of the velocity gap</span>
              </div>
              {[
                "Campaigns take weeks to launch",
                "Personalisation is limited or hard to scale",
                "AI initiatives stall due to poor content structure",
                "Marketing teams depend on developers for simple changes",
              ].map((text, i) => (
                <div key={text} className="flex items-center gap-3 px-8 py-5"
                  style={{ borderBottom: i < 3 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ color: "#D4500F", fontSize: 16, flexShrink: 0 }}>✕</span>
                  <span className="text-[14px]" style={{ color: "#6B7280" }}>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. THE SHIFT — surface, two col ──────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE SHIFT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Uniform closes the gap — on your terms.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Uniform is a composable digital experience platform designed to bring speed, flexibility and control back to marketing teams. It can be deployed as a modern DXP in its own right, or introduced as an orchestration layer across your existing stack — connecting content, personalisation and front-end delivery into a single, unified experience layer. That flexibility is what makes it powerful.
              </motion.p>
              <motion.ul variants={item} className="mt-8 flex flex-col gap-4">
                {[
                  "Build a fully composable DXP from the ground up",
                  "Or evolve your current platform without a full rebuild",
                  "Connect best-of-breed tools into a single experience layer",
                  "Structure content and journeys for AI and personalisation",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="shrink-0 mt-[7px]" style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }} aria-hidden="true" />
                    <span className="text-[15px] leading-[1.6]" style={{ color: "#111111" }}>{text}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.p variants={item} className="mt-6 text-[15px] leading-[1.65]" style={{ color: "#6B7280" }}>
                At the centre of this is Uniform&apos;s orchestration layer — enabling teams to create, manage and optimise digital experiences without being constrained by underlying systems.
              </motion.p>
            </motion.div>

            {/* Right — orchestration layer diagram */}
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

      {/* ── 4. HOW IT WORKS — white, two col ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE PLATFORM</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                A modern experience layer, built for flexibility.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Uniform brings together the key components needed to deliver modern digital experiences — whether as part of your existing architecture or as a standalone platform.
              </motion.p>
              <motion.ul variants={item} className="mt-8 flex flex-col gap-4">
                {[
                  { title: "Front-end", desc: "Modern frameworks like Next.js for speed and flexibility" },
                  { title: "Visual editing", desc: "Uniform Canvas for marketer-friendly experience creation" },
                  { title: "Content", desc: "Works with leading CMS platforms or as part of a composable setup" },
                  { title: "Personalisation", desc: "Real-time orchestration across channels and touchpoints" },
                  { title: "Integration", desc: "Connects seamlessly into your wider ecosystem" },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="shrink-0 mt-[7px]" style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }} aria-hidden="true" />
                    <span>
                      <span className="text-[15px] font-medium block" style={{ color: "#111111" }}>{title}</span>
                      <span className="text-[14px] leading-[1.6] mt-[2px] block" style={{ color: "#6B7280" }}>{desc}</span>
                    </span>
                  </li>
                ))}
              </motion.ul>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                Start where you are — and evolve at your own pace.
              </motion.p>
            </motion.div>

            {/* Right — what this unlocks (teaser) */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#D4500F" }}>What this unlocks</span>
              </div>
              {[
                "Days not weeks to launch a campaign",
                "AI deployed in production, not stuck in pilots",
                "Marketing teams working without developer bottlenecks",
                "Platform that adapts as needs evolve",
                "Content structured for personalisation from day one",
              ].map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ color: "#16A34A", fontSize: 16, flexShrink: 0 }}>✓</span>
                  <span className="text-[14px]" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. THE IMPACT — surface, 4 cards ─────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>THE IMPACT</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              What this unlocks for marketing teams.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            {impactCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. OUR APPROACH — white, two col ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>OUR APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                From platform investment to marketing impact.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Uniform is a powerful platform — but technology alone doesn&apos;t deliver outcomes. The real challenge is activation. That&apos;s where Analogiq comes in. We help organisations turn composable architecture into real marketing performance using a structured approach:
              </motion.p>
            </motion.div>

            {/* Right — numbered step cards */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              {[
                { n: "01", title: "Audit", desc: "Identify where your current platform is limiting speed, personalisation and AI adoption." },
                { n: "02", title: "Roadmap", desc: "Define how Uniform fits into your architecture — whether as a new foundation or an orchestration layer." },
                { n: "03", title: "Pilot", desc: "Launch a focused use case to prove value quickly — from campaigns to AI-driven experiences." },
                { n: "04", title: "Scale", desc: "Roll out across teams and markets — embedding new workflows and ways of working." },
              ].map(({ n, title, desc }) => (
                <motion.div key={n} variants={item}
                  style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 16, padding: "20px 22px" }}>
                  <span style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, color: "#D4500F" }}>{n}</span>
                  <p className="text-[14px] font-semibold mt-2" style={{ color: "#111111" }}>{title}</p>
                  <p className="text-[13px] leading-[1.6] mt-1" style={{ color: "#6B7280" }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. WHAT WE DELIVER — surface, two col ────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>SERVICES</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                What we actually deliver.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                From architecture design to team enablement, our engagements cover everything needed to make Uniform work in production — not just in theory.
              </motion.p>
              <motion.div variants={item} className="mt-8">
                <Link href="/contact" className="text-[15px] font-medium hover:underline" style={{ color: "#D4500F" }}>
                  Discuss a Uniform project →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — checklist card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#D4500F" }}>What we deliver</span>
              </div>
              {deliverables.map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-4"
                  style={{ borderBottom: i < deliverables.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ color: "#16A34A", fontSize: 16, flexShrink: 0 }}>✓</span>
                  <span className="text-[14px]" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. CASE STUDY — white ────────────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Platform engineering in practice.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[560px]"
          >
            <Link href="/work/capco-platform" className="group block">
              <div
                className="flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff", overflow: "hidden" }}
              >
                <div className="overflow-hidden flex-shrink-0" style={{ height: 280, borderRadius: "45px 45px 0 0", position: "relative" }}>
                  <Image
                    src="/clients/capco/services.webp"
                    alt="Capco services platform"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col flex-1 p-[50px]">
                  <p className="eyebrow mb-3">Capco</p>
                  <span
                    className="inline-block self-start px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em] mb-3"
                    style={{ background: "#FDF0E8", color: "#D4500F" }}
                  >
                    Platform Engineering · Sitecore
                  </span>
                  <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>
                    Rebuilding a global digital platform from scratch in 120 days
                  </h3>
                  <p className="text-[14px] font-medium mt-3" style={{ color: "#D4500F" }}>14 days → 24hr SLA</p>
                  <p className="inline-block mt-5 text-[14px] font-medium group-hover:underline" style={{ color: "#6B7280" }}>
                    View case study →
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 9. DARK CTA ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#191A23" }} className="py-[80px] max-sm:py-[48px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 text-center">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-[680px] mx-auto"
          >
            <motion.h2
              variants={item}
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, color: "#ffffff" }}
            >
              Still waiting weeks to launch campaigns?
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-5 text-[16px] leading-[1.65]"
              style={{ color: "#9CA3AF" }}
            >
              If your platform is slowing your marketing down, it&apos;s time to rethink how it works — not just replace it. We work with a focused number of organisations at any given time and would be glad to have an honest conversation about what&apos;s possible.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-block text-[15px] font-semibold transition-all duration-200"
                style={{ backgroundColor: "#D4500F", color: "#ffffff", borderRadius: 999, padding: "14px 32px" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B84309"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D4500F"; }}
              >
                Start the conversation →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
