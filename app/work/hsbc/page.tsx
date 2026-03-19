"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NavigationBar from "../../components/NavigationBar";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import Eyebrow from "../../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const PJB = "'Plus Jakarta Sans', system-ui, sans-serif";

const gridOverlay: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: "60px 60px",
};

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function HSBCPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D", ...gridOverlay, paddingTop: 180, paddingBottom: 80 }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[720px]">
            <motion.div variants={item}>
              <Link
                href="/work"
                className="text-[14px] font-medium hover:opacity-80 transition-opacity inline-block mb-8"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                ← Back to work
              </Link>
            </motion.div>
            <motion.div variants={item} className="mb-5">
              <span style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: 6,
                backgroundColor: "rgba(212,80,15,0.2)",
                color: "#F97316",
                border: "1px solid rgba(212,80,15,0.35)",
              }}>
                CRO / Experimentation / Personalisation
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>HSBC Commercial Banking</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{
                fontFamily: PJB,
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#ffffff",
              }}
            >
              A data-driven optimisation programme that generated a{" "}
              <span style={{ color: "#D4500F" }}>12:1 return on investment.</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 text-[18px] leading-[1.65] max-w-[580px]"
              style={{ color: "#9CA3AF" }}
            >
              Analogiq partnered with HSBC Commercial Banking across six Asian markets to commercialise their investment in marketing technology — running 24 experiments, doubling conversion rates and delivering $2.6M in client lifetime value from a $210k programme spend.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1"
          >
            {[
              { stat: "24", label: "Experiments executed across 6 markets" },
              { stat: "12:1", label: "Programme ROI over 12 months" },
              { stat: "2.5×", label: "Conversion rate improvement on best-performing experiments" },
              { stat: "$2.6M", label: "Client lifetime value generated from $210k spend" },
            ].map(({ stat, label }, i) => (
              <motion.div
                key={stat}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                className={`flex flex-col items-center text-center px-8 py-12 ${i > 0 ? "border-l border-[rgba(255,255,255,0.06)] max-sm:border-l-0 max-sm:border-t" : ""}`}
              >
                <span style={{ fontFamily: PJB, fontSize: 52, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>
                  {stat}
                </span>
                <p className="text-[14px] leading-[1.5] mt-3 max-w-[160px]" style={{ color: "#9CA3AF" }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. CLIENT OVERVIEW ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CLIENT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                About the engagement
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["Journey Orchestration", "A/B Testing", "Personalisation", "Adobe Analytics", "Adobe Target", "Sitecore", "Tealium"].map((tag) => (
                  <span key={tag} style={{
                    display: "inline-block",
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: 999,
                    backgroundColor: "#F3F3F3",
                    border: "1px solid #E5E7EB",
                    color: "#6B7280",
                  }}>
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq has worked with HSBC since 2016 across personalisation, CRO programme management, design, UX and development — one of our longest and most wide-ranging client relationships.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                This engagement focused on HSBC Commercial Banking's ambition to double their SME customer base by 2025, becoming the international SME bank of choice. The programme was deployed across India, China, Singapore, Malaysia, Indonesia and Hong Kong.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. VIDEO EMBED ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[900px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-10"
          >
            <motion.div variants={item}><Eyebrow>CASE STUDY VIDEO</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
              How HSBC took a data-driven approach to optimise the banking experience
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 16, overflow: "hidden", boxShadow: "0 5px 0 0 #191A23" }}>
              <iframe
                src="https://www.youtube.com/embed/phpN6XSns_Y?si=E15zu6YGbZn5Ghzv"
                title="How HSBC took a data-driven approach to optimise the banking experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE ─────────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Ambitious growth targets. Underutilised technology.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                HSBC Commercial Banking set an ambitious goal: to double their SME customer base by 2025. Years of investment in marketing technology — Sitecore, Adobe Analytics, Adobe Target, Tealium Audience Stream and Eloqua — held significant untapped potential. The challenge was commercialising that investment.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Journey analysis across six markets revealed a consistent set of problems: customers were confused about the account opening process, mobile experiences required an overhaul, and calls to action lacked clarity. Visitors were dropping out of the marketing funnel at multiple stages — not because the product was wrong, but because the digital experience wasn't doing enough to guide them through it.
              </motion.p>
              {/* Problem cards */}
              <motion.div variants={stagger} className="flex flex-col gap-4 mt-2">
                {[
                  { n: "01", title: "Account opening confusion", desc: "Prospects couldn't clearly identify how to begin the account opening process across market websites." },
                  { n: "02", title: "Poor mobile experience", desc: "Mobile journeys were underperforming across most markets, creating friction at the point of highest intent." },
                  { n: "03", title: "Weak calls to action", desc: "CTAs and the copy around them lacked the clarity needed to convert interested visitors into leads." },
                ].map(({ n, title, desc }) => (
                  <motion.div
                    key={n}
                    variants={item}
                    className="flex gap-4 items-start"
                    style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 16, padding: 24 }}
                  >
                    <span style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, color: "#D4500F", flexShrink: 0 }}>{n}</span>
                    <div>
                      <p className="text-[14px] font-semibold" style={{ color: "#111111" }}>{title}</p>
                      <p className="text-[13px] leading-[1.6] mt-1" style={{ color: "#6B7280" }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. THE APPROACH ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Journey Orchestration across six markets.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Our strategy was built on a single principle: use the data HSBC was already capturing to understand and systematically improve the journey of prospective customers. We called this approach Journey Orchestration — a unified framework of data-driven experimentation, customer-first personalisation and cross-market learning.
              </motion.p>
              {/* Pillar cards */}
              <motion.div variants={stagger} className="flex flex-col gap-4 mt-2">
                {[
                  {
                    n: "01",
                    title: "Data-driven experimentation",
                    desc: "For each market, we conducted an in-depth analysis of the marketing funnel and built a backlog of experience improvements to A/B test at every stage — from landing pages to account opening entry points.",
                  },
                  {
                    n: "02",
                    title: "Customer-first personalisation",
                    desc: "We tailored site experiences based on each user's interaction with paid media and their previous on-site activity, ensuring every visitor received a journey tuned to their context and intent.",
                  },
                  {
                    n: "03",
                    title: "Scaling learnings globally",
                    desc: "Successful experiments from Asia Pacific were shared with teams in Argentina, Mexico and the USA — extending the ROI of every test beyond its originating market.",
                  },
                ].map(({ n, title, desc }) => (
                  <motion.div
                    key={n}
                    variants={item}
                    style={{ backgroundColor: "#ffffff", border: "1px solid #E5E7EB", borderRadius: 16, boxShadow: "0 5px 0 0 #191A23", padding: 32 }}
                  >
                    <span style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, color: "#D4500F" }}>{n}</span>
                    <p className="mt-2 text-[16px] font-bold" style={{ fontFamily: PJB, color: "#111111" }}>{title}</p>
                    <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "#6B7280" }}>{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. HSBC SITE SCREENSHOTS ─────────────────────────────────── */}
      <section className="bg-white pb-[80px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", height: 420, borderRadius: "16px 16px 0 0", overflow: "hidden" }}>
              <Image
                src="/clients/hsbc/hero.png"
                alt="HSBC Commercial Banking — Hong Kong market website"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div style={{ position: "relative", height: 320, borderRadius: "0 0 16px 16px", overflow: "hidden", marginTop: 4 }}>
              <Image
                src="/clients/hsbc/mid.png"
                alt="HSBC Commercial Banking — site detail"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              HSBC Commercial Banking — Hong Kong market website
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 8. THE OUTCOME ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          {/* Centred heading */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-[700px] mx-auto mb-12"
          >
            <motion.div variants={item}><Eyebrow muted>THE OUTCOME</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: "#ffffff" }}>
              Results that demonstrated the power of data-driven optimisation{" "}
              <span style={{ color: "#D4500F" }}>at scale.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[17px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              24 experiments across six markets. Conversion rate improvements of up to 2.5× on individual tests. $2.6M in client lifetime value generated from a programme spend of $210k. A 15.5% increase in new banking enquiries. And a 12:1 ROI over 12 months.
            </motion.p>
          </motion.div>

          {/* Asymmetric card grid */}
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-6 max-md:grid-cols-1"
          >
            {/* Left — full-height */}
            <motion.div
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-col justify-center"
              style={{
                backgroundColor: "#161616",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 5px 0 0 #191A23",
                borderRadius: 24,
                padding: "56px 48px",
              }}
            >
              <span style={{ fontFamily: PJB, fontSize: 80, fontWeight: 800, lineHeight: 1, color: "#D4500F" }}>12:1</span>
              <h3 className="mt-4" style={{ fontFamily: PJB, fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
                Programme ROI
              </h3>
              <p className="text-[15px] leading-[1.7] mt-3" style={{ color: "#9CA3AF" }}>
                $2.6M in client lifetime value generated from a $210k programme spend — with learnings extended to markets in Argentina, Mexico and the USA.
              </p>
            </motion.div>

            {/* Right — two stacked cards */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
                style={{
                  backgroundColor: "#D4500F",
                  boxShadow: "0 5px 0 0 #191A23",
                  borderRadius: 24,
                  padding: "40px 44px",
                }}
              >
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 800, lineHeight: 1, color: "#ffffff" }}>2.5×</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, color: "#ffffff" }}>
                  Conversion rate uplift
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                  The best-performing experiments more than doubled conversion rates on key account opening journeys.
                </p>
              </motion.div>
              <motion.div
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}
                style={{
                  backgroundColor: "#161616",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 5px 0 0 #191A23",
                  borderRadius: 24,
                  padding: "40px 44px",
                }}
              >
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 800, lineHeight: 1, color: "#D4500F" }}>15.5%</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, color: "#ffffff" }}>
                  Increase in new banking enquiries
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "#9CA3AF" }}>
                  Across six Asian markets, with a 1,180% return on the lifetime value of acquired customers.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. GREATEST IMPACT CALLOUT ───────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>SINGLE GREATEST IMPACT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Reimagining how prospects find the account opening journey.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The single most pivotal outcome was the transformation of the account opening journey. Through targeted testing across six touchpoints on multiple market websites, we identified the optimal ways to prominently signpost the account opening process — turning what had been a point of confusion into a clear, guided pathway.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                It was more than optimisation. It was a reimagining of how we guide visitors to take one of the most critical actions in their banking journey. The results built a robust foundation for sustained growth in HSBC Business Banking — and demonstrated what becomes possible when marketing technology investment is properly commercialised.
              </motion.p>
              <motion.blockquote
                variants={item}
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: "4px solid #D4500F",
                  borderRadius: 20,
                  padding: 24,
                  marginTop: 8,
                }}
              >
                <p className="text-[15px] leading-[1.7] font-medium italic" style={{ color: "#7C2D0E" }}>
                  "By highlighting the pathway to opening an account, we not only met our immediate objectives but also built a robust foundation for sustained growth in HSBC Business Banking."
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 10. DISCIPLINES ──────────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-[80px] items-start max-md:grid-cols-1">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>DISCIPLINES</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                What the engagement covered
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                A long-term programme combining analytics, experimentation, personalisation and cross-market knowledge transfer — built on HSBC's existing martech stack and designed to scale.
              </motion.p>
            </motion.div>
            {/* Right — discipline tags */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-wrap gap-3 content-start mt-10 max-md:mt-0"
            >
              {[
                "Journey analysis",
                "A/B testing",
                "Personalisation",
                "Adobe Analytics",
                "Adobe Target",
                "Sitecore",
                "Tealium Audience Stream",
                "CRO strategy",
                "Mobile optimisation",
                "Cross-market learning",
              ].map((tag) => (
                <motion.span
                  key={tag}
                  variants={item}
                  style={{
                    display: "inline-block",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "10px 20px",
                    borderRadius: 999,
                    backgroundColor: "#FDF0E8",
                    color: "#D4500F",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 11. NEXT CASE STUDY ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[64px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex items-center justify-between gap-6 flex-wrap"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: "#9CA3AF" }}>
                Next case study
              </p>
              <h3 style={{ fontFamily: PJB, fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: "#111111", maxWidth: 480 }}>
                Doubling conversion rate and cutting acquisition costs in half for a luxury safari brand
              </h3>
              <p className="mt-2 text-[14px] font-medium" style={{ color: "#D4500F" }}>
                Wilderness Destinations — 2× conversion rate · 63% reduction in CPA
              </p>
            </div>
            <Button
              asChild
              className="font-medium text-[15px] border-0 hover:opacity-90 transition-opacity shrink-0"
              style={{
                fontFamily: PJB,
                fontWeight: 500,
                borderRadius: 14,
                padding: "18px 32px",
                height: "auto",
                backgroundColor: "#D4500F",
                color: "#ffffff",
                boxShadow: "0 5px 0 0 #3a1a05",
              }}
            >
              <Link href="/work/wilderness">Read next →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 12. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Running experiments without seeing the results you need?"
        subheading="We have been running CRO and personalisation programmes for enterprise organisations since 2016. If your marketing technology investment isn't delivering measurable returns, we would be glad to take a look."
      />

      {/* ── 13. FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
