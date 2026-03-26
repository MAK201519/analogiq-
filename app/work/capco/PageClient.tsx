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

export default function CapcoPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#191A23", minHeight: 620 }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 pt-[140px] pb-[80px] max-sm:pt-[110px] max-sm:pb-[40px]">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[680px]">
            <motion.div variants={item}>
              <Link
                href="/work"
                className="text-[14px] font-medium hover:opacity-80 transition-opacity inline-block mb-8"
                style={{ color: "rgba(255,255,255,0.6)" }}
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
                backgroundColor: "rgba(212,80,15,0.25)",
                color: "#F97316",
                border: "1px solid rgba(212,80,15,0.4)",
              }}>
                Personalisation · AI · Lead Scoring · MarTech
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>Capco</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Transforming engagement with AI personalisation and{" "}
              <span style={{ color: "#D4500F" }}>intelligent lead scoring.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-3 max-md:grid-cols-1"
          >
            {[
              { stat: "£1M+", label: "Confirmed sales generated" },
              { stat: "100+", label: "Data points captured per visitor" },
              { stat: "32%", label: "Uplift in MQL and SQL volume" },
            ].map(({ stat, label }, i) => (
              <motion.div
                key={stat}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                className={`flex flex-col items-center text-center px-10 py-14 ${i > 0 ? "border-l border-[rgba(255,255,255,0.1)] max-md:border-l-0 max-md:border-t" : ""}`}
              >
                <span style={{ fontFamily: PJB, fontSize: 52, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>
                  {stat}
                </span>
                <p className="text-[14px] mt-3" style={{ color: "#9CA3AF" }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. CLIENT OVERVIEW ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CLIENT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                About Capco
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["Personalisation", "HubSpot", "Sitecore", "Lead Scoring", "AI"].map((tag) => (
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
                Capco is a global technology and management consultancy specialising in financial services, with over 6,500 professionals across 27 cities worldwide. As a business where relationships are built through highly personalised face-to-face engagement, Capco recognised that their digital platform was failing to replicate that level of attentiveness online — delivering a generic, one-size-fits-all experience to visitors who were at very different stages of their journey.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. THE WORK ──────────────────────────────────────────────── */}
      <section className="bg-white pb-[80px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-10">
            <motion.div variants={item}><Eyebrow>THE WORK</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
              A platform that knows who it&apos;s talking to.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.75] max-w-[640px]" style={{ color: "#6B7280" }}>
              We designed a cross-channel personalisation and lead scoring system built on Capco&apos;s existing HubSpot and Sitecore investment. By capturing over 100 data points per visitor — across web, email and CRM — the platform was able to deliver dynamically personalised experiences to both known and anonymous visitors, and route high-value leads to the right sales consultant in real time.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-4 max-md:grid-cols-1"
          >
            {/* Left — full height */}
            <div style={{ position: "relative", minHeight: 500, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/capco/homepage-hero.webp"
                alt="Capco website homepage"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            {/* Right — two stacked */}
            <div className="flex flex-col gap-4">
              <div style={{ position: "relative", height: 240, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/clients/capco/intelligence.webp"
                  alt="Capco intelligence and insights content hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={60}
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div style={{ position: "relative", height: 240, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/clients/capco/services.webp"
                  alt="Capco services and capabilities"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={60}
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                The right data. Not being used.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Capco&apos;s challenges were not rooted in a lack of technology — they had enterprise HubSpot and Sitecore in place. The problems were structural: lead scoring was understood but not deployed, the cross-channel customer journey was inconsistent, and high-quality leads were not being recognised or acted upon quickly enough.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The sales team had rich data available to them in theory. In practice, they had no reliable signal for which website visitors deserved immediate attention — and anonymous visitors, who made up a significant share of web traffic, were being served the same generic experience as everyone else.
              </motion.p>
              <motion.blockquote
                variants={item}
                style={{
                  backgroundColor: "#FDF0E8",
                  borderLeft: "4px solid #D4500F",
                  borderRadius: 20,
                  padding: "20px 24px",
                  marginTop: 8,
                }}
              >
                <p className="text-[15px] leading-[1.7] italic" style={{ color: "#7C2D0E" }}>
                  &ldquo;High-quality leads were not being recognised or acted upon quickly enough — the platform needed to become intelligent.&rdquo;
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. THE APPROACH ──────────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                From data rich to intelligence led.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {[
                  { n: "01", title: "Tech discovery", desc: "Audited Capco's existing HubSpot and Sitecore stack to understand capability gaps, API integration opportunities, and the data points available across web, email and CRM channels." },
                  { n: "02", title: "Lead scoring design", desc: "Worked closely with the sales team to define a scoring model that considered a broad range of behavioural and CRM data points — identifying which signals most reliably indicated sales readiness." },
                  { n: "03", title: "Personalisation engine", desc: "Implemented dynamic content personalisation based on visitor behaviour, CRM data and sales-cycle stage. Known visitors received tailored journeys; anonymous visitors were progressively profiled to increase conversion likelihood." },
                  { n: "04", title: "Pipeline activation", desc: "Deployed real-time lead routing to ensure high-value prospects were connected immediately with the right senior partner — collapsing the time between intent signal and sales engagement." },
                ].map(({ n, title, desc }) => (
                  <motion.div
                    key={n}
                    variants={item}
                    style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 16, padding: "20px 22px" }}
                  >
                    <span style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, color: "#D4500F" }}>{n}</span>
                    <p className="text-[14px] font-semibold mt-2" style={{ color: "#111111" }}>{title}</p>
                    <p className="text-[13px] leading-[1.6] mt-1" style={{ color: "#6B7280" }}>{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. THE OUTCOME ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
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
              From generic engagement to{" "}
              <span style={{ color: "#D4500F" }}>qualified pipeline.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              The system transformed Capco&apos;s website from a one-size-fits-all portal into an intelligent, adaptive platform. Known visitors experienced deeply personalised journeys aligned to their sector and history. Anonymous visitors were progressively profiled and served increasingly relevant content — converting a previously overlooked audience into qualified prospects.
            </motion.p>
          </motion.div>

          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-6 max-md:grid-cols-1"
          >
            {/* Left — large card */}
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
              <span style={{ fontFamily: PJB, fontSize: 80, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>£1M+</span>
              <h3 className="mt-4" style={{ fontFamily: PJB, fontSize: 26, fontWeight: 700, color: "#ffffff" }}>
                Confirmed sales to date
              </h3>
              <p className="text-[15px] leading-[1.7] mt-3" style={{ color: "#9CA3AF" }}>
                The personalisation and lead scoring system directly attributed over £1 million in confirmed sales — turning digital engagement into a measurable commercial pipeline.
              </p>
            </motion.div>

            {/* Right — two stacked */}
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
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#ffffff" }}>Significant</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
                  Increase in MQL and SQL volume
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Lead quality and volume improved materially across the marketing and sales funnel.
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
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>Substantial</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
                  Growth in qualified sales pipeline
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "#9CA3AF" }}>
                  Progressive profiling of anonymous visitors created a new qualified pipeline that had previously gone unrecognised.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. DISCIPLINES ────────────────────────────────────────────── */}
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
                The Capco personalisation engagement combined deep MarTech integration work with strategic lead scoring design — bridging the gap between the data Capco held and the commercial outcomes their sales team needed.
              </motion.p>
            </motion.div>
            {/* Right — tags */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-wrap gap-3 content-start mt-10 max-md:mt-0"
            >
              {[
                "Personalisation strategy",
                "Lead scoring",
                "HubSpot",
                "Sitecore",
                "Cross-channel data",
                "Progressive profiling",
                "CRM integration",
                "Content personalisation",
                "MarTech optimisation",
              ].map((tag) => (
                <motion.span
                  key={tag}
                  variants={item}
                  style={{
                    display: "inline-block",
                    fontSize: 14,
                    fontWeight: 500,
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

      {/* ── 9. NEXT CASE STUDY ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[64px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex items-center justify-between gap-8 flex-wrap"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: "#9CA3AF" }}>
                Next case study
              </p>
              <h3 style={{ fontFamily: PJB, fontSize: 24, fontWeight: 700, lineHeight: 1.2, color: "#111111", maxWidth: 480 }}>
                Rebuilding a global digital platform from scratch in 120 days
              </h3>
              <p className="mt-2 text-[14px] font-semibold" style={{ color: "#D4500F" }}>
                Capco — Platform Engineering
              </p>
            </div>
            <Button
              asChild
              className="font-medium text-[15px] border-0 hover:opacity-90 transition-opacity shrink-0"
              style={{
                fontFamily: PJB,
                fontWeight: 500,
                borderRadius: 14,
                padding: "16px 28px",
                height: "auto",
                backgroundColor: "#D4500F",
                color: "#ffffff",
                boxShadow: "0 5px 0 0 #191A23",
              }}
            >
              <Link href="/work/capco-platform">Read next →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Ready to turn your website into a lead generation engine?"
        subheading="If your existing martech investment isn't delivering the personalisation and lead quality your sales team needs, we would be glad to assess the gap and show you what's possible."
      />

      <Footer />
    </div>
  );
}
