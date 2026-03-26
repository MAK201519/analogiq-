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
    title: "Make your data usable across teams and platforms",
    body: "We connect analytics, CRM, CDPs and marketing platforms into a single, coherent data layer so information is accessible and consistent.",
  },
  {
    title: "Capture the right data, not just more data",
    body: "We design tracking and data collection strategies that focus on meaningful signals, aligned to business outcomes and customer behaviour.",
  },
  {
    title: "Turn reporting into real-time decision-making",
    body: "We move beyond static dashboards, enabling teams to act on data quickly rather than retrospectively.",
  },
  {
    title: "Prepare your data for AI and personalisation",
    body: "AI depends on structured, accessible data. We ensure your data is ready to power real use cases, from personalisation to predictive insights.",
  },
  {
    title: "Create a foundation for continuous optimisation",
    body: "We enable data-driven experimentation, measurement and improvement across digital experiences.",
  },
];

const ecosystemCards = [
  {
    title: "Analytics platforms",
    body: "GA4 and behavioural tracking systems that capture how users interact with your digital experiences",
  },
  {
    title: "Customer data platforms",
    body: "Unifying customer data across touchpoints to enable segmentation and activation",
  },
  {
    title: "CRM systems",
    body: "Connecting marketing and sales data to provide a complete view of the customer",
  },
  {
    title: "Data warehouses",
    body: "Centralising and structuring data using platforms like BigQuery or Snowflake",
  },
  {
    title: "Personalisation and experimentation tools",
    body: "Powering real-time experiences using connected data",
  },
  {
    title: "AI layer",
    body: "Enabling AI use cases through structured, accessible and usable data",
  },
];

const coverCards = [
  {
    title: "Design the right data architecture",
    body: "We define how data is structured, stored and accessed, aligned to your business, marketing and technology needs.",
  },
  {
    title: "Capture and connect meaningful data",
    body: "We implement tracking, pipelines and integrations that ensure your data is accurate, consistent and usable.",
  },
  {
    title: "Turn insight into action",
    body: "We build reporting, decisioning and activation layers that allow marketing teams to act quickly and confidently.",
  },
];

const workCards = [
  {
    client: "SunLife",
    category: "Data Strategy · MarTech",
    title: "Building the data foundations for a major financial services brand",
    outcome: "Data strategy and MarTech assessment",
    image: "/clients/sunlife/homepage.webp",
    href: "/work/sunlife",
  },
  {
    client: "Capco",
    category: "AI · Personalisation · Data",
    title: "Transforming engagement with AI personalisation and intelligent lead scoring",
    outcome: "£1M+ confirmed sales",
    image: "/clients/capco/homepage-hero.webp",
    href: "/work/capco",
  },
];

const dataStackItems = [
  "Collection / Events and tracking",
  "Integration / Pipelines and connectors",
  "Storage / Data warehouse and lakes",
  "Analysis / Modelling and attribution",
  "Activation / Marketing decisions",
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function DataInsightsPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>DATA & INSIGHTS</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
              Data that drives decisions,{" "}
              <span style={{ color: "#D4500F" }}>not just dashboards.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              We connect data across platforms like Sitecore, CDPs and analytics tools, enabling real-time decisioning, AI activation and measurable marketing performance.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Most organisations don&apos;t have a data problem. They have a decision problem. Data is fragmented. Insights arrive too late. Reporting explains what happened, not what to do next. We make data usable so marketing can act, not analyse.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about data and insights</Link>
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
                If your data isn&apos;t driving action, it isn&apos;t working.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Modern marketing depends on data, but most organisations struggle to use it effectively.
              </motion.p>
              <motion.div variants={item} className="mt-6 grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#9CA3AF" }}>You might have:</p>
                  <ul className="flex flex-col gap-2">
                    {["Multiple analytics platforms", "A CDP or CRM", "Reporting dashboards across teams"].map((pt) => (
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
                    {["Slow or reactive decision-making", "Inconsistent or unreliable data", "Limited personalisation and targeting", "AI initiatives that cannot scale"].map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span style={{ color: "#D4500F", fontSize: 13, flexShrink: 0, marginTop: 2 }}>✕</span>
                        <span className="text-[14px] leading-[1.55]" style={{ color: "#4B5563" }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                Until your data is connected and usable, it will not drive performance.
              </motion.p>
            </motion.div>

            {/* Right — Data Stack card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Data stack</span>
              </div>
              {dataStackItems.map((cap, i) => (
                <div key={cap} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < dataStackItems.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{cap}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO — surface, vertical capability cards ───────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHAT WE DO</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Data foundations that enable action.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We design and implement data environments that move beyond reporting, enabling real-time decisions, personalisation and AI-driven experiences.
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

      {/* ── 4. DATA ECOSYSTEM — white, 3×2 cards ─────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHERE YOUR DATA SITS</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Connected across your ecosystem.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We work across your existing data and marketing stack, ensuring everything works together.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            {ecosystemCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 40 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 17, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[14px] leading-[1.65] mt-3 flex-1" style={{ color: "#6B7280" }}>{body}</p>
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
            We don&apos;t replace your stack. We make it work properly.
          </motion.p>
        </div>
      </section>

      {/* ── 5. DATA AND AI — surface, two col ────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>DATA AND AI</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Data is what makes AI work.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                AI doesn&apos;t create value on its own. It depends on structured data, connected systems, real-time access and clear use cases. Without that, AI remains experimental.
              </motion.p>
              <motion.div variants={item}>
                <ul className="mt-6 flex flex-col gap-3">
                  {["Power personalisation", "Enable predictive models", "Support marketing decision-making", "Drive measurable outcomes"].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span style={{ color: "#16A34A", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                      <span className="text-[15px] font-medium leading-[1.6]" style={{ color: "#111111" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                Good data doesn&apos;t just inform AI. It makes it useful.
              </motion.p>
            </motion.div>

            {/* Right — card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>AI data requirements</span>
              </div>
              {[
                { label: "Data quality", value: "Clean and consistent" },
                { label: "Data connectivity", value: "Connected across systems" },
                { label: "Real-time access", value: "Available when needed" },
                { label: "Data structure", value: "Modelled for AI use cases" },
                { label: "Governance", value: "Trustworthy and compliant" },
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

      {/* ── 6. CAPABILITIES — white, 3 cards ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>CAPABILITIES</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              From data architecture to activation.
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

      {/* ── 7. CASE STUDIES — surface, 2 cards ───────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Data and insights in practice.
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
              Still making decisions after the fact?
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[480px]" style={{ color: "#9CA3AF" }}>
              If your data isn&apos;t enabling real-time action, it&apos;s holding your marketing back. We&apos;ll show you where the gaps are and how to fix them.
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
