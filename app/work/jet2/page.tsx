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

export default function Jet2Page() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D", minHeight: 560, paddingTop: 180, paddingBottom: 80, ...gridOverlay }}>
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
                Personalisation / Sitecore / Strategy
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>Jet2</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Building a personalisation measurement strategy for the UK&apos;s{" "}
              <span style={{ color: "#D4500F" }}>largest tour operator.</span>
            </motion.h1>
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
            className="grid grid-cols-3 max-md:grid-cols-1"
          >
            {[
              { stat: "3 years", label: "Of personalisation activity without clear measurement" },
              { stat: "2", label: "Primary customer segments — families and non-families" },
              { stat: "Sitecore", label: "Core digital experience platform" },
            ].map(({ stat, label }, i) => (
              <motion.div
                key={label}
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
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CLIENT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                About Jet2
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["Personalisation", "Sitecore", "Strategy", "Customer Journey", "Analytics", "Travel & Leisure"].map((tag) => (
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
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Jet2 is the third-largest scheduled airline and the largest tour operator in the UK, operating Jet2holidays, Jet2CityBreaks, Jet2Villas and a growing range of ancillary travel products. With millions of customers booking holidays and flights online each year, the Jet2 digital estate is a high-stakes commercial environment where personalisation has the potential to drive meaningful revenue impact.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Jet2 had been implementing personalisation strategies across various touchpoints for approximately three years — primarily through the Sitecore digital experience platform. Despite this investment, the business had no clear picture of whether those personalisation scenarios were working, which customer segments they were affecting, and what the collective impact on revenue actually was.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. WEBSITE SCREENSHOT ────────────────────────────────────── */}
      <section className="bg-white pb-[80px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", height: 460, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/jet2/homepage.webp"
                alt="jet2.com homepage"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              jet2.com — the UK&apos;s largest tour operator and third-largest scheduled airline
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid gap-[80px] items-start max-md:grid-cols-1" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Three years of personalisation. No clear measure of impact.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Jet2&apos;s personalisation challenge was not a lack of activity — it was a lack of visibility. Personalisation scenarios had been running across the site for years, but there was no holistic view of their collective or individual effectiveness. The business could not answer a fundamental question: is what we are doing actually working?
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The complexity ran deeper than measurement alone. Jet2&apos;s personalisation infrastructure spanned multiple technology systems and implementation methods — some outside of Sitecore entirely, such as search result rankings. There were no clear control experiences for the two primary customer segments — families and non-families — making structured testing and learning extremely difficult.
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
                  &ldquo;Three years of personalisation activity. No clear picture of which scenarios were working, which segments were responding, or what the revenue impact actually was.&rdquo;
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
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Workshops, journey review, strategy playback.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq began with a series of strategic workshops with Jet2 stakeholders — building a deep understanding of the existing personalisation strategy, the business objectives behind it and the pain points that were preventing the team from measuring and improving their efforts. This collaborative process ensured recommendations were grounded in Jet2&apos;s specific commercial context rather than generic best practice.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Following the workshops, we conducted a thorough review of Jet2&apos;s customer journeys — identifying opportunities for further personalisation scenarios and mapping the specific needs of the two primary segments. The final output was a detailed strategy playback document providing actionable guidance on how Jet2 could A/B test personalisation scenarios effectively and begin to measure their true impact on revenue.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mt-2 max-sm:grid-cols-1">
                {[
                  { n: "01", title: "Stakeholder workshops", desc: "Engaged key Jet2 stakeholders across digital and commercial teams to map existing personalisation strategy, objectives and constraints — ensuring the work was anchored in business reality." },
                  { n: "02", title: "Customer journey review", desc: "Conducted a thorough review of Jet2's customer journeys across both primary segments — families and non-families — identifying gaps, opportunities and the scenarios most likely to drive booking and ancillary revenue." },
                  { n: "03", title: "Personalisation audit", desc: "Assessed Jet2's existing personalisation scenarios across Sitecore and other platforms — identifying which were measurable, which were not, and what structural changes were needed to enable proper testing." },
                  { n: "04", title: "Strategy playback", desc: "Produced a detailed strategy document providing actionable guidance on how to A/B test personalisation scenarios, establish control experiences and measure the revenue impact of personalisation activity going forward." },
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
            className="text-center max-w-[700px] mx-auto mb-14"
          >
            <motion.div variants={item}><Eyebrow muted>THE OUTCOME</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: "#ffffff" }}>
              A clear strategy for{" "}
              <span style={{ color: "#D4500F" }}>measurable personalisation at scale.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              Jet2 left the engagement with something they had not previously had — a structured framework for understanding and measuring the impact of their personalisation investment. The strategy playback gave the digital team a clear, actionable path to A/B testing personalisation scenarios, establishing control experiences and connecting personalisation activity to revenue outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-3 gap-6 max-md:grid-cols-1"
          >
            {[
              {
                title: "Measurement framework",
                body: "A structured approach to measuring personalisation effectiveness — giving Jet2 the tools to evaluate individual scenarios and their collective impact on revenue.",
              },
              {
                title: "Segment clarity",
                body: "Clear understanding of the two primary customer segments — families and non-families — and how personalisation strategy should differ between them to maximise booking and ancillary conversion.",
              },
              {
                title: "Actionable strategy",
                body: "A detailed strategy playback document providing a practical roadmap for A/B testing personalisation scenarios and building a culture of evidence-based optimisation across the Jet2 digital estate.",
              },
            ].map(({ title, body }) => (
              <motion.div
                key={title}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                style={{
                  backgroundColor: "#161616",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 5px 0 0 #191A23",
                  borderRadius: 24,
                  padding: 32,
                }}
              >
                <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, backgroundColor: "#D4500F" }} aria-hidden="true" />
                <h3 className="mt-4" style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, color: "#ffffff" }}>{title}</h3>
                <p className="text-[14px] leading-[1.65] mt-3" style={{ color: "#9CA3AF" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. DISCIPLINES ───────────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-[80px] items-start max-md:grid-cols-1">
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>DISCIPLINES</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                What the engagement covered
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The Jet2 engagement was a personalisation strategy and measurement consultancy — combining stakeholder workshops, customer journey analysis and technology audit to produce a clear, actionable framework for measurable personalisation at scale.
              </motion.p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-wrap gap-3 content-start mt-10 max-md:mt-0"
            >
              {[
                "Personalisation strategy",
                "Sitecore",
                "Customer journey review",
                "A/B testing framework",
                "Audience segmentation",
                "Analytics",
                "Strategy consulting",
                "Travel & leisure",
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
            className="flex items-center justify-between gap-6 flex-wrap"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: "#9CA3AF" }}>
                Next case study
              </p>
              <h3 style={{ fontFamily: PJB, fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: "#111111", maxWidth: 480 }}>
                How content personalisation drove deeper engagement for the British Heart Foundation&apos;s Sudden Devastation campaign
              </h3>
              <p className="mt-2 text-[14px] font-medium" style={{ color: "#D4500F" }}>
                British Heart Foundation — personalisation at national scale
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
              <Link href="/work/bhf">Read next →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Running personalisation without a clear measure of impact?"
        subheading="We help organisations make sense of their personalisation investment — auditing what exists, identifying what is and isn't working, and building the framework to test, measure and improve at scale. If that sounds familiar, we would be glad to talk."
      />

      {/* ── 11. FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
