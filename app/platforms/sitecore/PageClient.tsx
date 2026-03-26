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

const problemCards = [
  {
    title: "Accumulated complexity",
    desc: "Years of incremental development create fragile, hard-to-change environments.",
  },
  {
    title: "High cost, limited return",
    desc: "Licensing, infrastructure and delivery costs increase without a corresponding increase in value.",
  },
  {
    title: "Slow marketing velocity",
    desc: "Marketing ambition outpaces what the platform can realistically deliver.",
  },
  {
    title: "Limited AI readiness",
    desc: "Content, data and workflows aren't structured to support modern AI use cases.",
  },
];

const optionCards = [
  {
    number: "01",
    title: "Stay on XP (sweat the asset)",
    subheading: "Optimise what you already have.",
    bullets: [
      "Improve performance and stability",
      "Reduce operational and infrastructure costs",
      "Streamline publishing and marketing workflows",
      "Extend the life of your current platform",
    ],
    bestFor: "Organisations not ready to replatform but needing better performance now",
  },
  {
    number: "02",
    title: "Move to SitecoreAI",
    subheading: "Modernise within the Sitecore ecosystem.",
    bullets: [
      "Transition to a cloud-native, AI-native architecture",
      "Adopt modern development and deployment models",
      "Leverage SitecoreAI's native intelligence capabilities",
      "Align with Sitecore's long-term roadmap",
    ],
    bestFor: "Organisations committed to Sitecore and ready to modernise their foundation",
  },
  {
    number: "03",
    title: "Prepare for AI-driven experiences",
    subheading: "Make your platform ready for what comes next.",
    bullets: [
      "Structure content for AI and personalisation",
      "Connect data across systems",
      "Enable experimentation and continuous optimisation",
      "Move from static experiences to adaptive journeys",
    ],
    bestFor: "Organisations investing in AI but lacking the foundations to support it",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Audit",
    desc: "We assess your current Sitecore environment — identifying technical, operational and organisational constraints.",
  },
  {
    number: "02",
    title: "Roadmap",
    desc: "We define a clear, realistic path forward — aligned to your business goals and platform strategy.",
  },
  {
    number: "03",
    title: "Pilot",
    desc: "We deliver a focused use case to prove value quickly — from campaign acceleration to AI-enabled experiences.",
  },
  {
    number: "04",
    title: "Scale",
    desc: "We roll out improvements across teams and markets — embedding new capabilities and ways of working.",
  },
];

const experienceCards = [
  {
    title: "40+ organisations",
    body: "From complex global implementations to composable transformations and long-term platform evolution.",
  },
  {
    title: "Multiple versions and transitions",
    body: "Experience across XP, XM, XP to SitecoreAI and modern cloud-native environments.",
  },
  {
    title: "End-to-end delivery",
    body: "Strategy, architecture, implementation, optimisation and ongoing platform improvement.",
  },
];

const caseStudies = [
  {
    client: "Keith Prowse",
    category: "Sitecore · Platform Engineering",
    title: "Long-term Sitecore technical partnership since 2021",
    outcome: "Technical partner since 2021",
    image: "/clients/keith-prowse/experience-finder.webp",
    href: "/work/keith-prowse",
  },
  {
    client: "The Experience Golf",
    category: "Sitecore · Ecommerce",
    title: "Ecommerce platform delivery on Sitecore in 6 months",
    outcome: "6-month delivery",
    image: "/clients/experience-golf/course-finder.webp",
    href: "/work/experience-golf",
  },
];

const deliverables = [
  "Sitecore platform optimisation and stabilisation",
  "Migration to SitecoreAI",
  "Architecture redesign and modernisation",
  "Personalisation and experimentation programmes",
  "AI readiness and content modelling",
  "Data and platform integration",
  "Marketing workflow enablement",
];

const sitecoreProducts = [
  "Content Management System",
  "Digital Asset Management",
  "Content Operations",
  "Audience and Insights",
  "Conversion Optimisation",
  "Commerce",
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
            <motion.div variants={item} className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/platforms/sitecore.png"
                alt="Sitecore"
                style={{ maxHeight: 32, width: "auto", display: "block" }}
              />
            </motion.div>
            <motion.h1
              variants={item}
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}
            >
              Getting less from Sitecore{" "}
              <span style={{ color: "#D4500F" }}>than you should?</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[600px]" style={{ color: "#9CA3AF" }}>
              We help organisations turn Sitecore into a high-performing, AI-ready platform — improving speed, reducing complexity and unlocking real marketing impact.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about Sitecore</Link>
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

      {/* ── 2. THE REALITY — white, two col ──────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Most Sitecore platforms aren&apos;t underperforming — they&apos;re under-activated.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Sitecore is one of the most powerful digital experience platforms available. But in many organisations, that potential isn&apos;t being realised. Over time, platforms become harder to manage, slower to evolve and increasingly disconnected from what marketing teams need.
              </motion.p>
              <motion.div variants={item}>
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Campaigns take too long to launch",
                    "Personalisation is underused or difficult to scale",
                    "AI initiatives stall before they reach production",
                    "Teams rely heavily on developers for everyday changes",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="shrink-0 mt-[7px]"
                        style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }}
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-[1.6]" style={{ color: "#4B5563" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                This isn&apos;t a technology problem. It&apos;s an activation problem.
              </motion.p>
            </motion.div>

            {/* Right — SitecoreAI capabilities card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>SitecoreAI capabilities</span>
              </div>
              {sitecoreProducts.map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < sitecoreProducts.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHERE THINGS BREAK — surface, 2x2 problem cards ───────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Why Sitecore environments become difficult to evolve.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Most challenges we see aren&apos;t caused by Sitecore itself — they&apos;re the result of how platforms have grown over time.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            {problemCards.map(({ title, desc }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-3" style={{ color: "#6B7280" }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. THE DECISION — white, 3 option cards ──────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>YOUR OPTIONS</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              What should you do with Sitecore next?
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              There isn&apos;t a single right answer — but there are clear paths forward. The key is choosing the one that aligns with your business goals, not just your current platform setup.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {optionCards.map(({ number, title, subheading, bullets, bestFor }) => (
              <motion.div key={number} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "#D4500F" }}>Option {number}</span>
                <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[14px] font-medium mt-2 mb-5" style={{ color: "#6B7280" }}>{subheading}</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span style={{ color: "#16A34A", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                      <span className="text-[14px] leading-[1.55]" style={{ color: "#4B5563" }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5" style={{ borderTop: "1px solid #E5E7EB" }}>
                  <span className="text-[12px] uppercase tracking-[0.08em] font-semibold mr-2" style={{ color: "#9CA3AF" }}>Best for:</span>
                  <span className="text-[13px] italic" style={{ color: "#6B7280" }}>{bestFor}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. OUR APPROACH — surface, two col ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-md:grid-cols-1">
            {/* Left — heading + deliverables card */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>OUR APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                From platform investment to measurable impact.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Choosing the right path is only part of the challenge. The real value comes from executing it effectively — and ensuring your platform actually supports how your teams want to work. That&apos;s where Analogiq comes in.
              </motion.p>

              {/* Deliverables card */}
              <motion.div variants={item} className="mt-8"
                style={{ borderRadius: 32, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
                <div className="px-6 py-4" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#ffffff" }}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#D4500F" }}>What we deliver</span>
                </div>
                {deliverables.map((d, i) => (
                  <div key={d} className="flex items-center gap-4 px-6 py-4"
                    style={{ borderBottom: i < deliverables.length - 1 ? "1px solid #E5E7EB" : "none", backgroundColor: "#ffffff" }}>
                    <span style={{ color: "#16A34A", fontSize: 14, flexShrink: 0 }}>✓</span>
                    <span className="text-[14px]" style={{ color: "#111111" }}>{d}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — 2x2 numbered step cards */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              {approachSteps.map(({ number, title, desc }) => (
                <motion.div key={number} variants={item}
                  className="flex flex-col max-sm:[border-radius:24px]"
                  style={{ backgroundColor: "#ffffff", borderRadius: 32, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 32 }}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "#D4500F" }}>{number}</span>
                  <h3 style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[14px] leading-[1.6] mt-3" style={{ color: "#6B7280" }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. EXPERIENCE — white, 3 stat cards ──────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>OUR EXPERIENCE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              A decade of Sitecore delivery — across every stage of the lifecycle.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {experienceCards.map(({ title, body }) => (
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

      {/* ── 7. CASE STUDIES — surface, 2 cards ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Sitecore in practice.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {caseStudies.map(({ client, category, title, outcome, image, href }) => (
              <motion.div key={title} variants={item}
                className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff" }}>
                <div className="overflow-hidden flex-shrink-0" style={{ height: 280, borderRadius: "45px 45px 0 0", position: "relative" }}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={60}
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
              Not sure what to do with Sitecore next?
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[480px]" style={{ color: "#9CA3AF" }}>
              Whether you&apos;re optimising your current platform, planning a move to SitecoreAI, or exploring how to unlock more value — we&apos;ll help you define the right path and make it work.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block text-[16px] font-medium"
                style={{ fontFamily: PJB, fontWeight: 500, backgroundColor: "#D4500F", color: "#ffffff", borderRadius: 999, padding: "14px 32px", transition: "background-color 0.2s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B84309"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D4500F"; }}
              >
                Start the conversation →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
