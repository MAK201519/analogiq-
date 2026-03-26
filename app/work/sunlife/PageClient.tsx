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

export default function SunLifePage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="max-sm:pt-[120px] max-sm:pb-[40px]" style={{
        backgroundColor: "#0D0D0D",
        minHeight: 560,
        paddingTop: 180,
        paddingBottom: 80,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[720px]">
            <motion.div variants={item}>
              <Link
                href="/work"
                className="text-[14px] font-medium hover:opacity-80 transition-opacity inline-block mb-8"
                style={{ color: "rgba(255,255,255,0.5)" }}
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
                Data Strategy / MarTech / Customer Experience
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>SunLife</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Building the data foundations for a{" "}
              <span style={{ color: "#D4500F" }}>single customer view</span>
              {" "}at a leading UK financial services brand.
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
              { stat: "6", label: "MarTech platforms assessed" },
              { stat: "4", label: "Key deliverables produced" },
              { stat: "1", label: "Unified customer view as the end goal" },
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
          <div className="grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CLIENT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                About SunLife
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["Data Strategy", "MarTech Assessment", "Customer Behaviour", "Single Customer View", "Personalisation", "Financial Services"].map((tag) => (
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
                SunLife is a UK financial services company specialising in products for individuals aged 50 and over — including life insurance, guaranteed inheritance plans and equity release. With over 24,000 Trustpilot reviews and a Defaqto five-star rating, SunLife operates at significant scale across both digital and offline channels.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                As a business generating a large volume of customer data and insight, SunLife recognised that data volume alone was not the same as data intelligence. The missing piece was a true understanding of customer behaviour — how customers moved across the full funnel, what influenced their decisions and where the opportunities lay to improve both conversion and customer outcomes.
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
                src="/clients/sunlife/homepage.webp"
                alt="sunlife.co.uk homepage"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              sunlife.co.uk — life insurance, guaranteed inheritance plans and equity release for the over 50s
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. THE OPPORTUNITY ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE OPPORTUNITY</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Data rich. Behaviour blind.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                SunLife held a wealth of customer data — performance metrics, sentiment data, campaign results. What they lacked was the connective tissue between them: a clear picture of why customers behaved the way they did across the full journey, online and offline.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The goal was to move beyond what customers did and how they felt, to understand what influenced them — surfacing patterns like &ldquo;customers who use this calculator are more likely to convert&rdquo; or &ldquo;customers exhibiting this behaviour may be vulnerable.&rdquo; With that understanding in place, SunLife could begin to build truly personalised, real-time digital experiences.
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
                  &ldquo;The goal was not more data. It was a clearer understanding of what the data was saying about customer behaviour across the full funnel.&rdquo;
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
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE APPROACH</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Assess, map, recommend, roadmap.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq was engaged to carry out a Digital Experience Assessment — a structured consultancy engagement designed to build a comprehensive picture of SunLife&apos;s existing technology, data infrastructure and customer journeys, and to produce a clear, prioritised roadmap to close the identified gaps.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The programme began with a series of workshops involving key marketing and technical stakeholders across the business. Each workshop was focused on a specific platform or workstream — building a rigorous current-state picture before moving to architecture and recommendations.
              </motion.p>
              <motion.div variants={stagger} className="flex flex-col gap-4 mt-2">
                {[
                  { n: "01", title: "Ways of working assessment", desc: "Reviewed the teams, governance and processes involved in deploying and maintaining marketing technology at SunLife — mapping how they collaborate and what constraints exist." },
                  { n: "02", title: "MarTech platform review", desc: "Conducted deep-dive workshops across six core platforms — assessing each platform's capabilities, connections and current use cases, including Google Analytics and internal data infrastructure." },
                  { n: "03", title: "Digital journey assessment", desc: "Analysed how visitors move across the SunLife website and between channels — surfacing tactical optimisation and personalisation opportunities and mapping the end-to-end path to conversion." },
                  { n: "04", title: "MarTech architecture design", desc: "Mapped the ideal connected architecture to enable a single customer view — recommending new technology where needed, defining how the stack should connect and quantifying the benefits." },
                  { n: "05", title: "Prioritised roadmap", desc: "Synthesised all findings into a prioritised roadmap of recommendations with proposed solutions, indicative timeframes and costs — giving SunLife a clear, actionable plan for 2023 and beyond." },
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
              A clear path from data silos to a{" "}
              <span style={{ color: "#D4500F" }}>single customer view.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              The Digital Experience Assessment gave SunLife something they had not previously had — a comprehensive, joined-up picture of their data landscape, a diagnosed set of gaps, and a prioritised plan to close them. The roadmap laid the foundation for faster decision-making, greater personalisation agility and the ability to measure the incremental impact of optimisation initiatives.
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
                title: "Gap analysis",
                body: "A clear diagnosis of where SunLife's MI capabilities fell short — across both available data and the linkages between data sources.",
              },
              {
                title: "Architecture blueprint",
                body: "A recommended MarTech architecture designed to connect SunLife's platforms and enable a genuinely unified view of the customer.",
              },
              {
                title: "Actionable roadmap",
                body: "A prioritised, costed roadmap giving SunLife a practical path from their current state to a fully connected, behaviour-driven digital experience capability.",
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
                The SunLife engagement was a structured data and MarTech consultancy — combining platform assessment, digital journey analysis and architecture design to produce a clear roadmap for a single customer view.
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
                "Data strategy",
                "MarTech assessment",
                "Digital journey analysis",
                "Architecture design",
                "Personalisation strategy",
                "Single customer view",
                "Roadmap planning",
                "Financial services",
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
                Business Banking Optimisation programme across six Asian markets
              </h3>
              <p className="mt-2 text-[14px] font-medium" style={{ color: "#D4500F" }}>
                HSBC — 12:1 ROI over 12 months
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
              <Link href="/work/hsbc">Read next →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Got a data or MarTech challenge that needs a clear plan?"
        subheading="We help financial services and other complex organisations make sense of their data landscape — connecting platforms, diagnosing gaps and building the roadmap to a single customer view. If that sounds familiar, we would be glad to talk."
      />

      {/* ── 11. FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
