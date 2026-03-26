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

const uxProcessItems = [
  "Research / Understand user behaviour",
  "Architecture / Structure around needs",
  "Design / Create clear interfaces",
  "Test / Validate with real users",
  "Iterate / Improve continuously",
];

const features = [
  { title: "UX research and analysis", desc: "Understanding how users actually behave rather than how we assume they do" },
  { title: "Journey and information architecture", desc: "Structuring digital platforms around user needs and commercial objectives" },
  { title: "Interface design", desc: "Creating interfaces that guide users clearly and support conversion at every stage" },
  { title: "Design systems", desc: "Building reusable component libraries that allow teams to build consistently and efficiently" },
];

const howWeWorkPoints = [
  {
    title: "Research first",
    desc: "We start by understanding how users actually behave, not how we assume they do.",
  },
  {
    title: "Design for evidence",
    desc: "Every interface decision is tested and validated against real user behaviour.",
  },
  {
    title: "Optimise continuously",
    desc: "Design is not a one-off deliverable. It's an ongoing process of improvement.",
  },
];

const capabilityCards = [
  {
    title: "Research and strategy",
    body: "User research, customer journey mapping, competitor analysis and the strategic framing that ensures design decisions are grounded in evidence rather than assumption.",
  },
  {
    title: "Experience and interface design",
    body: "Information architecture, user journey design, interface design and the creation of digital experiences that support measurable commercial outcomes.",
  },
  {
    title: "Design systems and components",
    body: "Building and maintaining the reusable component libraries and design systems that allow organisations to build digital experiences consistently and efficiently at scale.",
  },
  {
    title: "AI-informed design",
    body: "We use data, behavioural signals and AI tools to inform design decisions, surface insight and accelerate the design process without replacing creative judgement.",
  },
];

const workCards = [
  {
    client: "Wilderness Destinations",
    category: "UX Design · CRO",
    title: "Purpose-built landing pages that doubled conversion rate",
    outcome: "2x conversion rate · 63% reduction in CPA",
    image: "/clients/wilderness/banner.png",
    href: "/work/wilderness",
  },
  {
    client: "Keith Prowse",
    category: "UX Design · Platform",
    title: "Modernising the digital sales channel for the UK's leading sports hospitality brand",
    outcome: "Technical partner since 2021",
    image: "/clients/keith-prowse/experience-finder.webp",
    href: "/work/keith-prowse",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function UXProductDesignPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>UX & PRODUCT DESIGN</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
              Digital experiences that{" "}
              <span style={{ color: "#D4500F" }}>convert, not just impress.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              Digital experiences that convert, not just impress. We combine research, design and data to create digital experiences that reduce friction, improve conversion and support measurable commercial outcomes.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Even the most sophisticated technology architecture will struggle to create value if the digital experiences it delivers are confusing or poorly designed. Our design work is grounded in real user behaviour, data and evidence. We don&apos;t design based on opinion or stakeholder preference. We design for performance.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about UX and design</Link>
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

      {/* ── 2. WHAT WE DO — white, two col ───────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>WHAT WE DO</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Design that is measured in outcomes, not aesthetics.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Analogiq works with organisations to design digital experiences that are clear, effective and commercially impactful. Our design work typically begins with understanding the needs of the users interacting with the platform, researching customer behaviour, analysing existing digital journeys and identifying the points where users encounter friction or confusion.
              </motion.p>
              <motion.div variants={item}>
                <ul className="mt-8 flex flex-col gap-5">
                  {features.map(({ title, desc }) => (
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
              </motion.div>
            </motion.div>

            {/* Right — UX process card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>UX design process</span>
              </div>
              {uxProcessItems.map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < uxProcessItems.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. DATA NOT OPINION — surface, three points ──────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>HOW WE WORK</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                We don&apos;t design based on opinion.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Most digital experiences are shaped by stakeholder preference, internal assumptions and disconnected decisions. We take a different approach. Every design decision is grounded in real user behaviour, data and insight. We research before we design. We test before we ship. We iterate based on evidence.
              </motion.p>
            </motion.div>

            {/* Right — three point cards */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6">
              {howWeWorkPoints.map(({ title, desc }) => (
                <motion.div key={title} variants={item}
                  className="flex flex-col max-sm:p-6 max-sm:[border-radius:24px]"
                  style={{ backgroundColor: "#ffffff", borderRadius: 32, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 36 }}>
                  <h3 style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[15px] leading-[1.65] mt-2" style={{ color: "#6B7280" }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. CAPABILITIES — white, 4 cards ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>CAPABILITIES</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              What UX and product design covers.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {capabilityCards.map(({ title, body }) => (
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

      {/* ── 5. CASE STUDIES — surface, 3 cards ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              UX and design in practice.
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

      {/* ── 6. FINAL CTA ─────────────────────────────────────────────── */}
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
              Ready to make your digital experience work harder?
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[480px]" style={{ color: "#9CA3AF" }}>
              If your platform is not converting at the rate it should, the answer is usually in the experience design. We&apos;ll assess where the friction is and show you how to remove it.
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
