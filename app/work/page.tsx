"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const cases = [
  {
    category: "CRO / EXPERIMENTATION / PAID MEDIA",
    client: "Wilderness Destinations",
    title: "Doubling conversion rate and cutting acquisition costs in half for a luxury safari brand",
    outcome: "2× conversion rate · 63% reduction in CPA",
    body: "Following a new website launch, Wilderness's landing pages for paid traffic were underperforming — conversion rates were not reflecting the quality of the product or the intent of the traffic. Analogiq mapped the full customer journey, designed two purpose-built landing page variants and ran a structured A/B test. The result was a conversion rate that went from 0.9% to 1.9%, a 63% reduction in CPA, and a full rollout across all paid campaigns.",
    tags: ["CRO", "A/B Testing", "Landing Page Design", "Paid Media Optimisation"],
    href: "/work/wilderness",
    image: "/clients/wilderness/banner.png",
    seed: null,
  },
  {
    category: "CRO / EXPERIMENTATION / PERSONALISATION",
    client: "HSBC Commercial Banking",
    title: "A data-driven optimisation programme across six Asian markets delivering a 12:1 ROI",
    outcome: "12:1 ROI · $2.6M client lifetime value · 24 experiments",
    body: "HSBC Commercial Banking needed to commercialise years of investment in marketing technology across India, China, Singapore, Malaysia, Indonesia and Hong Kong. Analogiq designed and ran a Journey Orchestration programme — mapping the funnel, building an experimentation backlog and personalising journeys at scale. 24 experiments. 2.5× conversion uplift on the best-performing tests. $2.6M in client lifetime value from a $210k spend.",
    tags: ["Journey Orchestration", "A/B Testing", "Personalisation", "Adobe Analytics", "Adobe Target"],
    href: "/work/hsbc",
    image: "/clients/hsbc/hero.png",
    seed: null,
  },
  {
    category: "PLATFORM / CMS / UX & DESIGN",
    client: "Keith Prowse",
    title: "Modernising the digital sales channel for the UK's leading sports hospitality brand",
    outcome: "Long-term technical partnership since 2016",
    body: "Keith Prowse are the official hospitality provider for Wimbledon, Twickenham and The O2. Analogiq has been their technical partner since 2016 — delivering a Sitecore platform upgrade, ongoing UX and design work, complex third-party integrations and continuous performance improvement across their primary sales channel.",
    tags: ["Sitecore", "Platform Engineering", "UX & Design", "CRO"],
    href: "/work/keith-prowse",
    image: "/clients/keith-prowse/homepage.webp",
    seed: null,
  },
  {
    category: "ECOMMERCE / UX & DESIGN / SITECORE",
    client: "The Experience Golf",
    title: "Launching a luxury ecommerce website for the UK's leading golf tour operator",
    outcome: "From zero ecommerce to fully live — in six months",
    body: "The Experience Golf had no ecommerce capability and all bookings were made over the phone. Analogiq designed and built a full ecommerce platform on Sitecore — with multilingual capability, a bespoke experience builder and integrations with events management and CRM systems — and delivered it within a six-month deadline ahead of peak booking season.",
    tags: ["Ecommerce", "Sitecore", "UX & Design", "Platform Engineering"],
    href: "/work/experience-golf",
    image: "/clients/experience-golf/homepage.png",
    seed: null,
  },
  {
    category: "DATA STRATEGY / MARTECH / CUSTOMER EXPERIENCE",
    client: "SunLife",
    title: "Building the data foundations for a single customer view at a leading UK financial services brand",
    outcome: "Digital Experience Assessment — gap analysis, architecture blueprint and prioritised roadmap",
    body: "SunLife held significant customer data but lacked a joined-up picture of customer behaviour across the full funnel. Analogiq conducted a structured Digital Experience Assessment — reviewing six MarTech platforms, mapping the end-to-end customer journey and producing a prioritised roadmap to close the gaps between data silos and a single, connected customer view.",
    tags: ["Data Strategy", "MarTech Assessment", "Customer Experience", "Financial Services"],
    href: "/work/sunlife",
    image: "/clients/sunlife/homepage.webp",
    seed: null,
  },
  {
    category: "PERSONALISATION / CAMPAIGN / CHARITY",
    client: "British Heart Foundation",
    title: "How content personalisation drove deeper engagement for the British Heart Foundation's Sudden Devastation campaign",
    outcome: "Three personalised journey streams — Midlands pilot built for national scale",
    body: "The British Heart Foundation's 'Sudden Devastation' campaign was driving awareness but the on-site experience wasn't converting that traffic into support. Analogiq designed a measurement framework and built three distinct personalised journey streams — Prevention and Diagnosis, Get Involved, and Community — tailored to different audience segments and built to scale nationally.",
    tags: ["Personalisation", "Campaign Optimisation", "Measurement Framework", "Charity"],
    href: "/work/bhf",
    image: "/clients/bhf/homepage.webp",
    seed: null,
  },
  {
    category: "CRO / A/B TESTING / SITECORE",
    client: "Cystic Fibrosis Trust",
    title: "Optimising the donation journey for one of the UK's most recognised health charities",
    outcome: "29% increase in donation page visits from a single experiment",
    body: "The Cystic Fibrosis Trust wanted to use data-driven insight and A/B testing to improve their donation funnel. Analogiq conducted stakeholder interviews, an analytics and heuristic review, and built a picture of typical donor motivations — before designing and implementing experiments in Google Optimize. One experiment alone increased donation page visits by 29%.",
    tags: ["CRO", "A/B Testing", "Sitecore", "Charity"],
    href: "/work/cystic-fibrosis-trust",
    image: "/clients/cystic-fibrosis-trust/homepage.webp",
    seed: null,
  },
  {
    category: "PERSONALISATION / SITECORE / STRATEGY",
    client: "Jet2",
    title: "Building a personalisation measurement strategy for the UK's largest tour operator",
    outcome: "Strategy playback delivering a clear framework for measurable personalisation",
    body: "Jet2 had been running personalisation scenarios across their Sitecore platform for three years with no clear picture of what was working. Analogiq conducted stakeholder workshops, a full customer journey review and a personalisation audit — producing a detailed strategy playback giving Jet2 an actionable framework for A/B testing, segment-level measurement and connecting personalisation activity to revenue outcomes.",
    tags: ["Personalisation", "Sitecore", "Strategy", "Travel & Leisure"],
    href: "/work/jet2",
    image: "/clients/jet2/homepage.webp",
    seed: null,
  },
];

const metrics = [
  { number: "40+", label: "organisations helped across platform modernisation and AI activation" },
  { number: "10+", label: "years of digital platform and AI delivery experience" },
  { number: "8", label: "case studies showing measurable commercial outcomes" },
];

const sectors = [
  "Financial Services",
  "Media & Publishing",
  "Retail & Commerce",
  "Professional Services",
  "Technology",
  "Higher Education",
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>OUR WORK</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}>
              Proof that the{" "}
              <span style={{ color: "#D4500F" }}>gap can be closed.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              The clearest measure of a consultancy is what it has delivered. The work below represents a selection of engagements where Analogiq has helped organisations modernise their digital platforms, activate AI across marketing workflows and build the foundations for sustained digital performance.
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
                  <Link href="/services">View our services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WORK INTRO — white, centred ───────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center max-w-[700px] mx-auto"
          >
            <motion.div variants={item}><Eyebrow>SELECTED WORK</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Different starting points. The same outcome.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
              Each engagement below reflects a different organisation, a different sector and a different set of constraints. The common thread is a structured approach to change that produces measurable outcomes — reducing platform debt, activating AI within marketing workflows and building the foundations for continuous improvement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. CASE STUDY GRID — 3-column cards ──────────────────────── */}
      <section className="bg-white pb-[70px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {cases.map(({ category, client, title, outcome, tags, href, seed, image }, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.07 }}
                viewport={{ once: true, margin: "-60px" }}
                className="group"
                style={{ borderRadius: 20, border: "1px solid #E5E7EB", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff", overflow: "hidden" }}
              >
                <Link href={href} className="flex flex-col h-full">
                  {/* Image */}
                  <div className="overflow-hidden relative" style={{ height: 220, flexShrink: 0 }}>
                    <Image
                      src={image ?? `https://picsum.photos/seed/${seed}/800/600`}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-3 p-7" style={{ flexGrow: 1 }}>
                    <span
                      className="inline-block self-start px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em]"
                      style={{ background: "#FDF0E8", color: "#D4500F" }}
                    >
                      {category}
                    </span>
                    <p className="eyebrow">{client}</p>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>
                      {title}
                    </h3>
                    <p className="text-[13px] font-semibold" style={{ color: "#D4500F" }}>{outcome}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 text-[11px] font-medium rounded-full"
                          style={{ backgroundColor: "#F3F3F3", color: "#6B7280", border: "1px solid #E5E7EB" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[13px] font-medium mt-2" style={{ color: "#D4500F" }}>
                      Read case study →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. IMPACT STATS — dark metrics strip ─────────────────────── */}
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

      {/* ── 5. SECTORS — surface, centred ────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={item}><Eyebrow>SECTORS</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4 max-w-[620px]"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Organisations we have worked with span multiple sectors.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Our experience spans financial services, media, retail, professional services and technology — giving us a breadth of context that informs how we approach each new engagement.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3 justify-center">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="inline-block text-[14px] font-semibold"
                  style={{ backgroundColor: "#FDF0E8", color: "#D4500F", borderRadius: 999, padding: "10px 20px" }}
                >
                  {sector}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. HOW WE DOCUMENT WORK — white, two col ─────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CASE STUDIES</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Real work, real outcomes.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Each case study follows a consistent structure — client background, the platform challenge, the approach we took, the technology architecture involved and the business results achieved. We document what worked, what we learned and what the organisation was able to do differently as a result.
              </motion.p>
              <motion.ul variants={item} className="mt-8 flex flex-col gap-5">
                {[
                  { title: "Client background", desc: "Understanding the organisation, its market and the context in which the challenge arose" },
                  { title: "The challenge", desc: "The specific platform or activation problem that was limiting marketing performance" },
                  { title: "The approach", desc: "How Analogiq approached the problem — audit, roadmap, pilot and scale" },
                  { title: "The outcome", desc: "Measurable results — campaign velocity, conversion uplift, cost reduction or capability gained" },
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
            </motion.div>

            {/* Right — case study anatomy card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B7280" }}>Case study anatomy</span>
              </div>
              {[
                { number: "01", label: "Client background" },
                { number: "02", label: "The challenge" },
                { number: "03", label: "The approach" },
                { number: "04", label: "The outcome" },
              ].map(({ number, label }, i) => (
                <div key={label} className="flex items-center gap-5 px-8 py-5"
                  style={{ borderBottom: i < 3 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 20, fontWeight: 700, color: "#D4500F", flexShrink: 0, minWidth: 32 }}>
                    {number}
                  </span>
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        heading="Want to see more of our work?"
        subheading="We are selective about what we publish — preferring to document fewer engagements in depth rather than many engagements superficially. If you would like to discuss work relevant to your specific sector or challenge, we would be glad to share more detail in a conversation."
      />

      <Footer />
    </div>
  );
}
