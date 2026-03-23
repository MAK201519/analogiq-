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

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function WildernessPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative" style={{ minHeight: 620 }}>
        {/* Banner image */}
        <div className="absolute inset-0">
          <Image
            src="/clients/wilderness/banner.png"
            alt="Wilderness Destinations"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        {/* Gradient overlay — left-heavy */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(13,13,13,0.82) 0%, rgba(13,13,13,0.25) 100%)" }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[100px] max-sm:px-5 pt-[140px] pb-[80px]">
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
                CRO / Experimentation / Paid Media
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>Wilderness Destinations</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: 56, fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Doubling conversion rate and cutting acquisition costs{" "}
              <span style={{ color: "#D4500F" }}>in half.</span>
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
              { stat: "2×", label: "Increase in conversion rate" },
              { stat: "0.9→1.9%", label: "Enquiry conversion from paid traffic" },
              { stat: "63%", label: "Reduction in cost per acquisition" },
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
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CLIENT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                About Wilderness Destinations
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["CRO", "A/B Testing", "Landing Page Design", "Paid Media Optimisation"].map((tag) => (
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
                Wilderness offers bespoke luxury safari experiences tailored to individual preferences. Their clients seek highly personalised trip planning — completing an enquiry form to begin a consultation with an expert adviser who will organise their safari adventure from scratch.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                With award-winning lodges and camps across eight African countries, the quality of the product is exceptional. The challenge was ensuring that the paid media investment bringing visitors to the site was converting at a rate that reflected the intent of that traffic.
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
              Landing pages built for paid traffic.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.75] max-w-[640px]" style={{ color: "#6B7280" }}>
              The two landing page variants were designed from scratch — purpose-built for paid traffic rather than adapted from the main site. Every element was built around a single goal: getting high-intent visitors to complete an enquiry.
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
                src="/clients/wilderness/landing-desktop.webp"
                alt="Wilderness landing page — desktop and mobile mockup"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Right — two stacked */}
            <div className="flex flex-col gap-4">
              <div style={{ position: "relative", height: 240, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/clients/wilderness/landing-mobile.webp"
                  alt="Wilderness landing page — mobile view"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div style={{ position: "relative", height: 240, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/clients/wilderness/landing-itinerary.webp"
                  alt="Wilderness landing page — camp itinerary and detail view"
                  fill
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
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Strong product. Underperforming paid channel.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Following the launch of a new website, Wilderness identified that their landing pages for paid traffic were underperforming. Conversion rates from PPC campaigns were not reflecting the quality of the product or the intent of the traffic arriving on site.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The result was a higher cost per acquisition than the business could sustain at scale — and a significant volume of revenue left on the table. With paid media representing a meaningful share of total acquisition budget, every percentage point of conversion rate had a material effect on commercial performance.
              </motion.p>
              {/* Pull-quote */}
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
                  "Conversion rates from PPC campaigns were not reflecting the quality of the product or the intent of the traffic arriving on site."
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. THE APPROACH ──────────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Map the journey. Design for intent.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq began with a detailed analysis of the customer journey across Wilderness's website and paid channels — mapping the routes visitors took from paid ad to enquiry form completion, and identifying the points where intent was lost.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                From this analysis, we designed two highly optimised landing pages purpose-built for paid traffic, with A/B tests structured to measure their performance against the existing website pages. The test was designed not just to validate the approach but to build the evidence base for a full rollout across all Wilderness campaigns.
              </motion.p>
              {/* Numbered step cards */}
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mt-2 max-sm:grid-cols-1">
                {[
                  { n: "01", title: "Customer journey audit", desc: "Mapped the full paid-to-enquiry funnel across all active PPC campaigns, identifying where high-intent visitors were dropping." },
                  { n: "02", title: "Landing page design", desc: "Designed two dedicated landing page variants, purpose-built for paid traffic — stripping friction from the path to enquiry." },
                  { n: "03", title: "Structured A/B test", desc: "Ran a statistically rigorous test comparing the new pages against the existing site, measuring conversion rate, CPA and enquiry quality." },
                  { n: "04", title: "Validated rollout", desc: "With results confirmed, extended the optimised format across all Wilderness paid campaigns as the new default." },
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
              Results that surpassed expectations{" "}
              <span style={{ color: "#D4500F" }}>across every metric.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              The optimised landing pages demonstrated significant improvements across every key metric. With the initial test validated, Wilderness extended the optimised landing page format across all paid campaigns — building a sustainable foundation for continued CRO improvement.
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
            {/* Left — full-height card */}
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
              <span style={{ fontFamily: PJB, fontSize: 80, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>2×</span>
              <h3 className="mt-4" style={{ fontFamily: PJB, fontSize: 26, fontWeight: 700, color: "#ffffff" }}>
                Conversion rate doubled
              </h3>
              <p className="text-[15px] leading-[1.7] mt-3" style={{ color: "#9CA3AF" }}>
                Enquiry conversion from paid traffic increased from 0.9% to 1.9% — more than doubling enquiry volume from the same spend.
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
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#ffffff" }}>63%</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
                  Reduction in cost per acquisition
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Transforming the economics of Wilderness's paid media investment at scale.
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
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>100%</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
                  Campaign rollout
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "#9CA3AF" }}>
                  Following test validation, the optimised format was extended across all Wilderness paid campaigns.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. ATMOSPHERIC IMAGE BREAK ───────────────────────────────── */}
      <section className="relative" style={{ height: 500, overflow: "hidden" }}>
        <Image
          src="/clients/wilderness/instagram-botswana.png"
          alt="Wilderness Destinations — Botswana"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Gradient overlay — top to bottom */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.6) 100%)" }}
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 pb-8">
            <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>
              Wilderness Destinations — Botswana
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. LANDING DETAIL SCREENSHOT ─────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", height: 480, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/wilderness/landing-detail.webp"
                alt="Wilderness landing page — lodge detail and experience design"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              Wilderness landing page — lodge detail and experience design
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 10. DISCIPLINES ───────────────────────────────────────────── */}
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
                The Wilderness engagement brought together customer journey analysis, conversion rate optimisation and paid media strategy — combining analytical rigour with practical landing page design to produce measurable commercial results.
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
                "Customer journey mapping",
                "CRO strategy",
                "A/B testing",
                "Landing page design",
                "Paid media optimisation",
                "Conversion analytics",
                "UX copywriting",
                "Statistical analysis",
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

      {/* ── 10. NEXT CASE STUDY ──────────────────────────────────────── */}
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
                Composable platform transformation across 14 global markets
              </h3>
              <p className="mt-2 text-[14px] font-semibold" style={{ color: "#D4500F" }}>
                BBC — 40% faster time-to-market
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
              <Link href="/work/bbc">Read next →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 11. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Got a paid media or CRO challenge?"
        subheading="If your conversion rates from paid traffic don't reflect the quality of your product or the intent of your visitors, we would be glad to take a look. We work with a focused number of organisations at any given time."
      />

      {/* ── 12. FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
