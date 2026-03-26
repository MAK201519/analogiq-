"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const beliefCards = [
  {
    title: "Honesty over comfort",
    body: "We tell clients what they need to hear, not what is easiest to say. The most valuable thing a consultancy can provide is an honest view of reality.",
  },
  {
    title: "Delivery over advice",
    body: "Strategy without execution creates no value. We focus on making change happen inside real organisations.",
  },
  {
    title: "Depth over scale",
    body: "We work with a limited number of clients to ensure senior attention, deep expertise and meaningful impact.",
  },
];

const metrics = [
  { number: "40+", label: "organisations helped to close the Digital Activation Gap" },
  { number: "10+", label: "years delivering digital platform and AI programmes" },
  { number: "Senior-led", label: "delivery across every engagement" },
];

const howWeWorkCards = [
  {
    title: "We start with reality",
    body: "Every engagement begins with a clear view of where you are today, covering platform maturity, data readiness and execution capability.",
  },
  {
    title: "We prove value early",
    body: "We design focused pilots that demonstrate impact quickly and build internal confidence before scaling.",
  },
  {
    title: "We build capability, not dependency",
    body: "Our goal is to leave organisations with the capability to sustain and evolve what we deliver.",
  },
];

const platformCards = [
  {
    name: "Sitecore",
    body: "Over a decade of delivery across XP, XM Cloud and modern composable architectures.",
    href: "/platforms/sitecore",
    cta: "Learn more",
  },
  {
    name: "Uniform",
    body: "Implementing composable experience layers that unlock speed without full rebuilds.",
    href: "/platforms/uniform",
    cta: "Learn more",
  },
  {
    name: "And more",
    body: "Experience across Optimizely, Umbraco, Contentful and broader martech ecosystems.",
    href: "/contact",
    cta: "Talk to us",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[780px]">
            <motion.div variants={item}><Eyebrow muted>ABOUT ANALOGIQ</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
              Built to{" "}
              <span style={{ color: "#D4500F" }}>close the gap</span>{" "}
              between marketing ambition and platform reality.
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              Modern marketing teams are expected to move faster, personalise at scale and integrate AI into how they operate. Most platforms were not designed for that. We help organisations modernise the platforms behind their marketing so they can move faster, execute better and deliver measurable results.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Start a conversation</Link>
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

      {/* ── 2. OUR STORY — white, two col ────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>OUR STORY</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Why Analogiq exists.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Marketing has changed. Teams are expected to launch campaigns continuously, personalise experiences in real time and embed AI into everyday workflows. But most digital platforms were built for a different era, one focused on publishing content, not activating it. That gap between what marketing teams want to do and what their platforms allow has become one of the biggest barriers to growth. Analogiq was founded to close that gap. We work at the intersection of marketing, technology and AI, helping organisations modernise their platforms, connect their data and build the capabilities required to operate at speed.
              </motion.p>
              <motion.ul variants={item} className="mt-8 flex flex-col gap-5">
                {[
                  { title: "Founded on delivery", desc: "Every founder and senior team member has delivered complex platform and transformation programmes, not just advised on them." },
                  { title: "Platform-aware, not vendor-led", desc: "We have deep experience across platforms including Sitecore, Uniform, Optimizely and composable architectures. Our recommendations are based on what will deliver the best outcome, not on pushing a specific platform." },
                  { title: "Outcome focused", desc: "We measure success by what changes in your marketing operation, not by documents produced or features delivered." },
                  { title: "Senior led", desc: "The people you meet at the start are the people who deliver the work. No handovers. No dilution." },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="shrink-0 mt-[7px]" style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }} aria-hidden="true" />
                    <span>
                      <span className="text-[16px] font-medium block" style={{ color: "#111111" }}>{title}</span>
                      <span className="text-[15px] leading-[1.6] mt-[2px] block" style={{ color: "#6B7280" }}>{desc}</span>
                    </span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right — focus areas card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Analogiq focus areas</span>
              </div>
              {[
                "Digital Experience Platforms",
                "AI Activation",
                "Personalisation and Experimentation",
                "Data and Insights",
              ].map((area, i) => (
                <div key={area} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < 3 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{area}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE BELIEVE — surface, three cards ────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHAT WE BELIEVE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              The principles that shape how we work.
            </motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {beliefCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[16px] leading-[1.65] mt-4" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. OUR EXPERIENCE — dark metrics strip ───────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 max-md:grid-cols-1"
          >
            {metrics.map(({ number, label }, i) => (
              <motion.div
                key={number}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                className={`flex flex-col items-center text-center px-10 py-12 ${i > 0 ? "border-l border-[rgba(255,255,255,0.1)] max-md:border-l-0 max-md:border-t" : ""}`}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 64, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>
                  {number}
                </span>
                <p className="text-[15px] leading-[1.5] mt-4 max-w-[200px]" style={{ color: "#9CA3AF" }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. WHAT WE DO — white, two col ───────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>WHAT WE DO</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                The work we deliver.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Our work combines strategic thinking, platform expertise, design and engineering capability. We work with CMOs, Heads of Digital and marketing technology leaders to design and implement digital environments that support modern marketing operations.
              </motion.p>
              <motion.ul variants={item} className="mt-8 flex flex-col gap-5">
                {[
                  "Modernising existing platforms to improve speed and flexibility",
                  "Implementing composable and enterprise DXP architectures",
                  "Connecting data and marketing technologies",
                  "Designing the infrastructure required for personalisation and AI",
                ].map((desc) => (
                  <li key={desc} className="flex items-start gap-3">
                    <span className="shrink-0 mt-[7px]" style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }} aria-hidden="true" />
                    <span className="text-[15px] leading-[1.6]" style={{ color: "#6B7280" }}>{desc}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={item} className="mt-8">
                <Link href="/services" className="text-[15px] font-medium hover:underline" style={{ color: "#D4500F" }}>
                  View all services →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — services card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Our services</span>
              </div>
              {[
                { label: "Website & Platform Modernisation", href: "/services/platform-engineering" },
                { label: "AI Activation", href: "/services/ai-enablement" },
                { label: "Personalisation & Experimentation", href: "/services/personalisation-experimentation" },
                { label: "Data & Insights", href: "/services/data-insights" },
                { label: "UX & Product Design", href: "/services/ux-product-design" },
              ].map(({ label, href }, i) => (
                <Link key={label} href={href} className="flex items-center justify-between px-8 py-5 group"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none", textDecoration: "none" }}>
                  <span className="text-[15px] font-medium group-hover:underline" style={{ color: "#111111" }}>{label}</span>
                  <span style={{ color: "#D4500F", fontSize: 16 }}>→</span>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. HOW WE WORK — surface, three cards ────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>HOW WE WORK</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              An approach built around how organisations actually change.
            </motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {howWeWorkCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[16px] leading-[1.65] mt-4" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. OUR PLATFORMS — white ─────────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>PLATFORMS WE WORK WITH</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Deep expertise across leading platforms.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[620px]" style={{ color: "#6B7280" }}>
              We work across enterprise and composable platforms including Sitecore, Uniform, Optimizely, Umbraco and Contentful. We don&apos;t start with platform decisions. We start with the outcome and design the right approach from there.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {platformCards.map(({ name, body, href, cta }) => (
              <motion.div key={name} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{name}</h3>
                <p className="text-[16px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
                <div className="mt-6">
                  <Link href={href} className="text-[13px] font-medium hover:underline" style={{ color: "#D4500F" }}>{cta} →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="GET IN TOUCH"
        heading="If this sounds like the kind of partner you are looking for."
        subheading="We work with a focused number of organisations at any given time. If you are dealing with the gap between what your marketing team wants to achieve and what your platform allows, we should talk."
      />

      <Footer />
    </div>
  );
}
