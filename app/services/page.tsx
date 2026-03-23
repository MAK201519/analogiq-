"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import ProcessSteps from "../components/ProcessSteps";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

/* ─── ICONS ──────────────────────────────────────────────────────────────── */

function IconPlatform() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="9" height="9" rx="2" stroke="#D4500F" strokeWidth="1.75" />
      <rect x="13" y="3" width="9" height="9" rx="2" stroke="#D4500F" strokeWidth="1.75" />
      <rect x="2" y="14" width="9" height="7" rx="2" stroke="#D4500F" strokeWidth="1.75" />
      <rect x="13" y="14" width="9" height="7" rx="2" stroke="#D4500F" strokeWidth="1.75" />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20H21" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconData() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 20V10" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M12 20V4" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M6 20v-6" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconPersonalisation() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="#D4500F" strokeWidth="1.75" />
      <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M19 3l1.5 1.5L17 8" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#D4500F" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="#D4500F" strokeWidth="1.75" />
    </svg>
  );
}

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: <IconPlatform />,
    title: "Platform Engineering",
    body: "Designing and modernising the digital architectures that support marketing operations — from composable CMS implementations to legacy platform migration and integration work.",
    href: "/services/platform-engineering",
  },
  {
    icon: <IconDesign />,
    title: "UX & Product Design",
    body: "Creating digital experiences that are clear, effective and commercially impactful — combining strategic thinking with practical design execution focused on measurable outcomes.",
    href: "/services/ux-product-design",
  },
  {
    icon: <IconData />,
    title: "Data & Insights",
    body: "Connecting data sources, building reporting infrastructure and creating the analytical foundations that allow AI and personalisation to function effectively.",
    href: "/services/data-insights",
  },
  {
    icon: <IconPersonalisation />,
    title: "Personalisation & Experimentation",
    body: "Building the infrastructure required to deliver personalised digital experiences at scale — connecting data, platform and content in ways that produce measurable commercial outcomes.",
    href: "/services/personalisation-experimentation",
  },
  {
    icon: <IconAI />,
    title: "AI Enablement",
    body: "Moving AI from experimentation to operation — identifying high-value use cases, designing the platform conditions that make activation possible and building internal capability to sustain it.",
    href: "/services/ai-enablement",
  },
];

const engagementCards = [
  {
    title: "Strategy and advisory",
    body: "If you know something needs to change but are not sure what or how — we start with an honest assessment of where you are and where you need to get to. No technology bias. No predetermined answer.",
  },
  {
    title: "Delivery and implementation",
    body: "If you know what needs to be built — we design and deliver it. Platform implementations, integrations, experimentation infrastructure, AI activation programmes. End to end or alongside your existing team.",
  },
  {
    title: "Ongoing partnership",
    body: "If you need a trusted partner for the long term — we work with organisations on a retained basis to support continuous improvement, governance and the evolution of digital capability over time.",
  },
];

const workCards = [
  {
    client: "BBC",
    category: "PLATFORM",
    title: "Composable platform transformation across 14 global markets",
    outcome: "40% faster time-to-market",
    description: "The BBC needed a digital platform capable of supporting content delivery across 14 international markets at pace. We designed and delivered a composable architecture that reduced campaign launch time from weeks to days.",
    seed: "platform",
  },
  {
    client: "Capco",
    category: "AI",
    title: "AI-powered personalisation programme delivering measurable conversion uplift",
    outcome: "2.5× conversion uplift",
    description: "Capco wanted to move personalisation from a pilot into production. We designed the data and platform infrastructure required to support real-time personalisation at scale and produced a 2.5× uplift in conversion.",
    seed: "personalisation",
  },
  {
    client: "White Moss",
    category: "EXPERIMENTATION",
    title: "Experimentation infrastructure enabling continuous optimisation",
    outcome: "60% reduction in content publishing cycle",
    description: "White Moss needed the capability to test, learn and improve continuously. We built the experimentation infrastructure that reduced their content publishing cycle by 60% and removed engineering dependency.",
    seed: "experimentation",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Audit",
    description: "We begin with an honest assessment of where you are today — platforms, data, workflows and organisational readiness. We do not skip this step.",
    outcomes: [
      "Clear picture of current state across platforms, data and capability",
      "Prioritised list of gaps and highest-value opportunities",
      "Shared understanding of what is realistic within your constraints",
    ],
  },
  {
    number: "02",
    title: "Roadmap",
    description: "We translate the audit into a prioritised programme of work — sequenced around real constraints, with defined outcomes and investment requirements.",
    outcomes: [
      "12-month delivery roadmap with phased milestones",
      "Business case and investment model for each initiative",
      "Ownership, governance and decision-making structure defined",
    ],
  },
  {
    number: "03",
    title: "Pilot",
    description: "Before committing to full-scale implementation, we design and deliver a focused initiative that proves the value and builds internal confidence.",
    outcomes: [
      "Live capability delivered within 6–8 weeks",
      "Measurable performance baseline established",
      "Team upskilled and ready to iterate independently",
    ],
  },
  {
    number: "04",
    title: "Scale",
    description: "Once the pilot has demonstrated value, we support the organisation in extending the capability — across platforms, channels and markets.",
    outcomes: [
      "Capability extended across all relevant markets and channels",
      "Internal Centre of Excellence established",
      "Ongoing optimisation cadence embedded in business-as-usual",
    ],
  },
];

/* ─── TAB SWITCHER DATA & COMPONENTS ────────────────────────────────────── */

const tabPanels = [
  {
    id: "platform-engineering",
    label: "Platform Engineering",
    title: "Platform Engineering",
    description: "Designing and modernising digital architectures that let marketing move at the speed it needs to.",
    features: ["Composable architecture", "Legacy CMS modernisation", "Integration design", "Performance optimisation"],
    href: "/services/platform-engineering",
    visualHeader: "Platform stack",
    visualItems: ["CMS / Content management", "Personalisation engine", "CDP / Customer data platform", "Analytics and attribution", "AI integration layer"],
  },
  {
    id: "ux-product-design",
    label: "UX & Product Design",
    title: "UX & Product Design",
    description: "Digital experiences that convert, not just impress — designed around user behaviour and commercial objectives.",
    features: ["UX research", "Journey architecture", "Interface design", "Design systems"],
    href: "/services/ux-product-design",
    visualHeader: "Design process",
    visualItems: ["Research / Understand user behaviour", "Architecture / Structure around needs", "Design / Create clear interfaces", "Test / Validate with real users", "Iterate / Improve continuously"],
  },
  {
    id: "data-insights",
    label: "Data & Insights",
    title: "Data & Insights",
    description: "Building the data foundations that allow AI and personalisation to function effectively.",
    features: ["Data architecture", "Analytics implementation", "Reporting frameworks", "AI data readiness"],
    href: "/services/data-insights",
    visualHeader: "Data stack",
    visualItems: ["Collection / Events and tracking", "Integration / Pipelines and connectors", "Storage / Data warehouse", "Analysis / Modelling and attribution", "Activation / AI and decisioning"],
  },
  {
    id: "personalisation-experimentation",
    label: "Personalisation & Experimentation",
    title: "Personalisation & Experimentation",
    description: "Moving personalisation from pilot to production — and building the experimentation infrastructure to improve it continuously.",
    features: ["Personalisation strategy", "Platform integration", "Experimentation programme design", "Measurement frameworks"],
    href: "/services/personalisation-experimentation",
    visualHeader: "Personalisation stack",
    visualItems: ["Audience data / CDP and behavioural signals", "Segmentation / Models and rules", "Content variants / Personalised assets", "Delivery / Real-time decisioning", "Measurement / Impact and attribution"],
  },
  {
    id: "ai-enablement",
    label: "AI Enablement",
    title: "AI Enablement",
    description: "Moving AI from experimentation to operation — identifying use cases, building infrastructure and embedding capability.",
    features: ["Use case identification", "Infrastructure design", "Workflow integration", "Governance frameworks"],
    href: "/services/ai-enablement",
    visualHeader: "AI enablement layers",
    visualItems: ["Use cases / High-value marketing workflows", "Data infrastructure / Clean, connected signals", "Platform integration / Real-time activation", "Workflow design / Operational processes", "Governance / Responsible deployment"],
  },
];

function PanelStackCard({ header, items }: { header: string; items: string[] }) {
  return (
    <div style={{ borderRadius: 32, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
      <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>{header}</span>
      </div>
      {items.map((cap, i) => (
        <div key={cap} className="flex items-center gap-4 px-8 py-[14px]"
          style={{ borderBottom: i < items.length - 1 ? "1px solid #E5E7EB" : "none", backgroundColor: "#ffffff" }}>
          <span style={{ width: 7, height: 7, borderRadius: 2, backgroundColor: "#D4500F", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
          <span className="text-[14px] font-medium" style={{ color: "#111111" }}>{cap}</span>
        </div>
      ))}
    </div>
  );
}

function ServiceTabSwitcher() {
  const [active, setActive] = useState(0);
  const panel = tabPanels[active];

  return (
    <div>
      {/* Tab button row */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tabPanels.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActive(i)}
            style={{
              fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 500,
              fontSize: 15,
              padding: "12px 24px",
              borderRadius: 999,
              border: `1px solid ${active === i ? "#D4500F" : "#E5E7EB"}`,
              backgroundColor: active === i ? "#D4500F" : "#F9F7F4",
              color: active === i ? "#ffffff" : "#6B7280",
              boxShadow: active === i ? "0 5px 0 0 #B84309" : "none",
              cursor: "pointer",
              transition: "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="grid grid-cols-2 gap-12 items-start max-md:grid-cols-1 max-sm:p-6"
        style={{ backgroundColor: "#ffffff", borderRadius: 32, border: "1px solid #E5E7EB", padding: 48 }}
      >
        {/* Left — text */}
        <div>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 32, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
            {panel.title}
          </h3>
          <p className="mt-4 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>{panel.description}</p>
          <ul className="mt-7 flex flex-col gap-4">
            {panel.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-[8px]"
                  style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }}
                  aria-hidden="true"
                />
                <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{feat}</span>
              </li>
            ))}
          </ul>
          <Link
            href={panel.href}
            className="inline-block mt-8 text-[14px] font-medium hover:underline"
            style={{ color: "#D4500F" }}
          >
            Learn more →
          </Link>
        </div>

        {/* Right — visual */}
        <PanelStackCard header={panel.visualHeader} items={panel.visualItems} />
      </motion.div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>WHAT WE DO</Eyebrow></motion.div>
            <motion.h1
              variants={item}
              className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              The capabilities that{" "}
              <span style={{ color: "#D4500F" }}>close the gap.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              Modern marketing organisations rely on a complex ecosystem of digital platforms, marketing technologies and data infrastructure. Analogiq helps organisations design, build and operate the digital environments that allow marketing teams to move faster, experiment more effectively and deliver better customer experiences.
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

      {/* ── 2. SERVICES INTRODUCTION — white, centred ────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center max-w-[680px] mx-auto"
          >
            <motion.div variants={item}><Eyebrow>OUR SERVICES</Eyebrow></motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}
            >
              Five capabilities. One outcome.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
              Our services focus on the capabilities required to support modern digital marketing operations. Each plays a distinct role in helping organisations close the Digital Activation Gap and unlock the full value of their marketing technology ecosystems. They can be engaged individually or as part of a structured transformation programme.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. SERVICE TAB SWITCHER + SECONDARY CARDS — surface ─────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <ServiceTabSwitcher />
          </motion.div>

          {/* Secondary service cards grid */}
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-10">
            <motion.div variants={item}><Eyebrow>ALL SERVICES</Eyebrow></motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}
            >
              How we help.
            </motion.h2>
          </motion.div>

          {/* Row 1 — 3 cards */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
          >
            {services.slice(0, 3).map(({ icon, title, body, href }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}
              >
                <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#FDF0E8", flexShrink: 0 }}>
                  {icon}
                </div>
                <h3 className="mt-5" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
                <div className="mt-6">
                  <Link href={href} className="text-[13px] font-medium hover:underline" style={{ color: "#D4500F" }}>Learn more →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 — 2 cards */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 mt-8 max-md:grid-cols-1"
          >
            {services.slice(3).map(({ icon, title, body, href }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}
              >
                <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#FDF0E8", flexShrink: 0 }}>
                  {icon}
                </div>
                <h3 className="mt-5" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
                <div className="mt-6">
                  <Link href={href} className="text-[13px] font-medium hover:underline" style={{ color: "#D4500F" }}>Learn more →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 4. HOW WE ENGAGE — white, three column cards ─────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>HOW WE WORK</Eyebrow></motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}
            >
              Built around how you actually buy.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We have structured our engagement model to meet organisations at whatever stage they are at.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
          >
            {engagementCards.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}
              >
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>
                  {title}
                </h3>
                <p className="text-[15px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. THE ANALOGIQ DIFFERENCE — surface, two column ─────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>WHY ANALOGIQ</Eyebrow></motion.div>
              <motion.h2
                variants={item}
                className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}
              >
                What makes us different.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Most digital consultancies will tell you they are vendor-neutral. We actually are. We have no commercial relationship with any platform provider or technology vendor. Our only interest is in helping clients close the Digital Activation Gap as effectively as possible.
              </motion.p>
              <motion.ul variants={item} className="mt-8 flex flex-col gap-5">
                {[
                  { title: "Vendor-neutral advice", desc: "We recommend what works for you — not what generates the best referral fee" },
                  { title: "Depth over breadth", desc: "We work with a focused number of clients at any given time — which means you get senior attention, not junior delivery" },
                  { title: "Outcomes not outputs", desc: "We measure success by what changes in your marketing operation — not by deliverables produced" },
                  { title: "Honest assessment", desc: "We tell you what we think, including when the answer is not what you were hoping to hear" },
                ].map(({ title, desc }) => (
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
              </motion.ul>
            </motion.div>

            {/* Right — engagement model card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}
            >
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Engagement model</span>
              </div>
              {[
                { label: "Strategy", desc: "Audit, assessment, roadmap and advisory" },
                { label: "Delivery", desc: "Platform build, integration and implementation" },
                { label: "Partnership", desc: "Ongoing governance, optimisation and capability" },
              ].map(({ label, desc }, i) => (
                <div key={label} className="flex flex-col px-8 py-6"
                  style={{ borderBottom: i < 2 ? "1px solid #E5E7EB" : "none" }}>
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2"
                    style={{ color: "#D4500F" }}
                  >
                    {label}
                  </span>
                  <span className="text-[14px] leading-[1.6]" style={{ color: "#6B7280" }}>{desc}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. THE ACTIVATION METHOD — white, 4 steps ────────────────── */}
      <ProcessSteps
        eyebrow="OUR APPROACH"
        heading="One method. Applied to every engagement."
        subheading="Regardless of which service you engage, our approach follows the same four stages."
        steps={approachSteps}
      />

      {/* ── 7. CASE STUDIES — surface, three cards ───────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WORK</Eyebrow></motion.div>
            <motion.h2
              variants={item}
              className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}
            >
              Services in practice.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
          >
            {workCards.map(({ client, category, title, outcome, description, seed }) => (
              <motion.div
                key={title}
                variants={item}
                className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff" }}
              >
                <div className="overflow-hidden flex-shrink-0" style={{ height: 280, borderRadius: "45px 45px 0 0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/${seed}/800/600`}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-[50px]">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="eyebrow">{client}</p>
                    <span
                      className="inline-block px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em]"
                      style={{ background: "#FDF0E8", color: "#D4500F" }}
                    >
                      {category}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[15px] font-medium mt-3" style={{ color: "#D4500F" }}>{outcome}</p>
                  <p className="text-[14px] leading-[1.65] mt-3 flex-1" style={{ color: "#6B7280" }}>{description}</p>
                  <Link href="/work" className="inline-block mt-5 text-[14px] font-medium" style={{ color: "#6B7280" }}>
                    View case study →
                  </Link>
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
            <Link href="/work" className="text-[15px] font-medium hover:underline" style={{ color: "#D4500F" }}>
              View all work →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        heading="Not sure which service you need?"
        subheading="Most engagements start with a conversation rather than a brief. Tell us where you are and what you are trying to achieve — we will tell you honestly where we can help and where we cannot."
      />

      <Footer />
    </div>
  );
}
