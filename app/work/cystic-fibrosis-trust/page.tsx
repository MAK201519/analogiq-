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

export default function CysticFibrosisTrustPage() {
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
                CRO / A/B Testing / Sitecore
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>Cystic Fibrosis Trust</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Optimising the{" "}
              <span style={{ color: "#D4500F" }}>donation journey</span>
              {" "}for one of the UK&apos;s most recognised health charities.
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
              { stat: "29%", label: "Increase in donation page visits from a single experiment" },
              { stat: "2", label: "Core workstreams — optimisation and Sitecore management" },
              { stat: "Ongoing", label: "Technical and optimisation partnership" },
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
                About the Cystic Fibrosis Trust
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["CRO", "A/B Testing", "Sitecore", "Donation Journey", "Analytics", "Charity Sector"].map((tag) => (
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
                The Cystic Fibrosis Trust is the UK&apos;s leading charity dedicated to fighting cystic fibrosis — funding vital research, providing expert advice and support, and campaigning to improve the lives of those affected by the condition. Operating at national scale with a significant digital presence, the Trust relies on its website as a central channel for awareness, engagement and donation.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq was brought in across two distinct workstreams: to apply data-driven optimisation and A/B testing to help the Trust achieve its digital objectives, and to manage their Sitecore platform — handling development requests and ensuring the technical foundation remained stable and well-maintained.
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
                src="/clients/cystic-fibrosis-trust/homepage.webp"
                alt="cysticfibrosis.org.uk homepage"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              cysticfibrosis.org.uk — funding research and supporting everyone affected by cystic fibrosis
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
                Improving donation outcomes through insight and experimentation.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The Cystic Fibrosis Trust wanted to understand how data-driven insight and A/B testing could help them achieve their digital objectives — particularly around the donation funnel, where small improvements in conversion could have a meaningful impact on their ability to fund research and support.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The challenge was not simply technical. It required a genuine understanding of who donates to the Trust, what motivates them, and where the existing digital experience was falling short of meeting those needs — before a single experiment could be designed.
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
                  &ldquo;Small improvements in the donation funnel have an outsized impact for a charity of this scale — every percentage point of conversion uplift translates directly into research funding.&rdquo;
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
                Insight first. Experiment with purpose.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq began with a series of stakeholder interviews to establish the key performance indicators that experiments should be measured against. From this, the focus was determined: the donation funnel was the highest-impact area, and it would become the primary target for optimisation activity.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                A combined analytics and heuristic review was conducted to identify the biggest pain points in the donation journey. Working with relevant stakeholders, we built a picture of the needs and motivations of typical Cystic Fibrosis Trust donors — using these insights to inform a programme of experiments implemented in Google Optimize, focused on improving the copy and messaging around donation and better communicating the value the Trust provides.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mt-2 max-sm:grid-cols-1">
                {[
                  { n: "01", title: "Stakeholder interviews", desc: "Conducted interviews with internal stakeholders to align on KPIs and ensure the optimisation programme was built around objectives that mattered to the business." },
                  { n: "02", title: "Analytics and heuristic review", desc: "Deep analysis of the donation funnel to identify the points of highest drop-off and the opportunities most likely to drive meaningful improvement." },
                  { n: "03", title: "Donor insight", desc: "Developed a clear picture of the needs, motivations and behaviours of typical Cystic Fibrosis Trust donors — grounding every experiment in audience understanding rather than assumption." },
                  { n: "04", title: "Experimentation", desc: "Designed and implemented A/B tests in Google Optimize — improving donation copy, messaging and value communication to reduce friction and increase engagement with the giving journey." },
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
              A{" "}
              <span style={{ color: "#D4500F" }}>29% increase</span>
              {" "}in donation page visits from a single experiment.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              One experiment alone — improving the copy and messaging around donation — increased visitation to the donation page by 29%. The work demonstrated the tangible commercial value of structured experimentation for a charity operating at scale, and established the foundation for a continued programme of optimisation.
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
                title: "29% uplift",
                body: "A single experiment improving donation copy and messaging drove a 29% increase in visits to the donation page — a direct impact on the Trust's ability to fund research.",
              },
              {
                title: "Insight-led experimentation",
                body: "Every test was grounded in analytics, heuristic review and donor insight — ensuring the optimisation programme was focused on the changes most likely to make a difference.",
              },
              {
                title: "Platform stability",
                body: "Alongside the optimisation programme, Analogiq managed the Cystic Fibrosis Trust's Sitecore platform — handling development requests and keeping the technical foundation secure and well-maintained.",
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
                The Cystic Fibrosis Trust engagement spanned two complementary workstreams — a structured CRO and experimentation programme focused on the donation funnel, and ongoing Sitecore platform management to keep the technical estate stable and maintained.
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
                "CRO",
                "A/B testing",
                "Google Optimize",
                "Donation funnel",
                "Analytics review",
                "Heuristic analysis",
                "Sitecore management",
                "Charity sector",
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
        heading="Want to improve your donation or conversion funnel?"
        subheading="We help charities and other mission-driven organisations apply data-driven experimentation to the journeys that matter most. If you want to understand where your funnel is underperforming and what to do about it, we would be glad to talk."
      />

      {/* ── 11. FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
