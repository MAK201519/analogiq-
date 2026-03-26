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

export default function CapcoPlatformPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative" style={{ minHeight: 620 }}>
        <div className="absolute inset-0">
          <Image
            src="/clients/capco/services.webp"
            alt="Capco services platform"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.65)" }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-[100px] max-sm:px-5 pt-[140px] pb-[80px] max-sm:pt-[110px] max-sm:pb-[40px]">
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
                Platform Engineering · Sitecore · CMS · Data
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
              Rebuilding a global digital platform from scratch.{" "}
              <span style={{ color: "#D4500F" }}>Delivered in 120 days.</span>
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
              { stat: "120", label: "Days to full platform delivery" },
              { stat: "14d→24hr", label: "Website update SLA reduction" },
              { stat: "26%", label: "Increase in pages per session" },
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
                {["Sitecore", "Platform Engineering", "CMS", "Data Dashboards", "Careers"].map((tag) => (
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
                Capco is a global technology and management consultancy with over 6,500 professionals across 27 cities. In 2017, following a demerger from parent company FIS Global, Capco faced a hard commercial deadline: completely migrate their website off FIS infrastructure within 120 days — or face significant daily financial penalties.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                At the same time, the business had ambitious growth plans that required a digital platform capable of supporting global marketing at scale.
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
              A new platform. A hard deadline. No margin for error.
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.75] max-w-[640px]" style={{ color: "#6B7280" }}>
              We delivered Capco&apos;s full website rebuild on Sitecore Experience Platform within the 120-day window — migrating content, rebuilding all templates and components to Sitecore best practices, and handing full CMS control to the global marketing team for the first time. Phase two then focused on three strategic priorities: a world-class careers experience, a data measurement framework, and personalisation capabilities that would allow Capco to engage different audience segments intelligently.
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
                src="/clients/capco/services.webp"
                alt="Capco services platform"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            {/* Right — two stacked */}
            <div className="flex flex-col gap-4">
              <div style={{ position: "relative", height: 240, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/clients/capco/intelligence.webp"
                  alt="Capco content and intelligence hub"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div style={{ position: "relative", height: 240, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/clients/capco/homepage-hero.webp"
                  alt="Capco homepage after rebuild"
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
          <div className="grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
            {/* Left */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                A 120-day deadline. And a platform that wasn&apos;t fit for purpose.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Before the rebuild, Capco&apos;s marketing team had no control over their own website. Every change — including simple copy edits — required a full brief to an in-house development team, with 14-day SLAs as standard. There was no access to analytics, no ability to launch campaigns independently, and no mechanism for demonstrating the commercial contribution of digital to the wider business.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The demerger created the forcing function for change. But the 120-day hard deadline left no room for a drawn-out delivery process.
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
                  &ldquo;Previously they had 14-day SLAs for making simple website changes. The marketing team were prevented from making data-driven decisions.&rdquo;
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
                Deliver fast. Build for scale.
              </motion.h2>
            </motion.div>
            {/* Right */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {[
                  { n: "01", title: "Platform migration", desc: "Rebuilt the entire Capco website on Sitecore Experience Platform within the 120-day commercial deadline, migrating all content and redeveloping all templates to Sitecore best practices." },
                  { n: "02", title: "Marketing team enablement", desc: "Delivered a complete what-you-see-is-what-you-get Experience Editor interface — giving the global marketing team full, independent control over content, campaigns and landing pages for the first time." },
                  { n: "03", title: "Careers experience redesign", desc: "Redesigned and rebuilt the Capco Careers section with GeoIP-based personalisation to surface relevant local roles, integrated with PeopleFluent ATS — creating dedicated journeys for graduates and experienced hires." },
                  { n: "04", title: "Data measurement framework", desc: "Built a bespoke data dashboard in Klipfolio drawing from Google Analytics and careers data, giving global teams real-time visibility of digital performance and bringing data into the heart of marketing decision-making." },
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
              On time, on brief, and transforming how a{" "}
              <span style={{ color: "#D4500F" }}>global business uses digital.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              The platform was delivered within the 120-day deadline, removing the financial penalty risk entirely. Beyond the delivery milestone, the results demonstrated consistent improvement across every digital metric — with the careers experience performing particularly strongly.
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
              <span style={{ fontFamily: PJB, fontSize: 80, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>120</span>
              <h3 className="mt-4" style={{ fontFamily: PJB, fontSize: 26, fontWeight: 700, color: "#ffffff" }}>
                Full platform delivered on deadline
              </h3>
              <p className="text-[15px] leading-[1.7] mt-3" style={{ color: "#9CA3AF" }}>
                Complete Sitecore rebuild, content migration and global launch — delivered within the hard 120-day commercial window.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "Website update SLA reduced from 14 days to 24 hours",
                  "Pages per session increased 26%, average session duration up 15%",
                  "31,500 visits to new graduate and experienced hire journeys within 5 months",
                  "9% more homepage visitors conducted a careers search after launch",
                  "Full CMS control handed to global marketing team",
                ].map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <span className="shrink-0 mt-[8px] rounded-full" style={{ width: 6, height: 6, backgroundColor: "#D4500F", display: "block" }} />
                    <span className="text-[14px] leading-[1.6]" style={{ color: "#9CA3AF" }}>{result}</span>
                  </li>
                ))}
              </ul>
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
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#ffffff" }}>−19%</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
                  Reduction in bounce rate post-launch
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Visitors were more engaged, exploring more content and staying longer on the rebuilt platform.
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
                <span style={{ fontFamily: PJB, fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#D4500F" }}>70%</span>
                <h3 className="mt-3" style={{ fontFamily: PJB, fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
                  Of new careers visitors searched for a role
                </h3>
                <p className="text-[14px] leading-[1.65] mt-2" style={{ color: "#9CA3AF" }}>
                  The redesigned careers experience converted browsers into active candidates at scale.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. CLIENT QUOTE ──────────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[800px] mx-auto"
          >
            <blockquote
              style={{
                backgroundColor: "#F9FAFB",
                borderLeft: "4px solid #D4500F",
                borderRadius: 20,
                padding: "40px 48px",
              }}
            >
              <p className="text-[18px] leading-[1.75] italic" style={{ color: "#191A23", fontFamily: PJB }}>
                &ldquo;Analogiq&apos;s expertise has enabled us to create a website and digital strategy that delivers value across the firm, while also unlocking the power of data to drive optimisation projects and empower our decision making. Working hand in hand with a trusted partner like Analogiq has allowed us to embed them within Capco&apos;s day-to-day activities, providing project transparency while building an incredibly strong relationship.&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-[14px] font-semibold" style={{ color: "#111111" }}>Andrew Davies</p>
                <p className="text-[13px] mt-1" style={{ color: "#6B7280" }}>Head of Digital Marketing (Global), Capco</p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── 9. DISCIPLINES ────────────────────────────────────────────── */}
      <section className="bg-white pb-[80px] max-sm:pb-[40px]">
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
                The Capco platform engagement combined high-velocity delivery against a hard deadline with a long-term capability-building programme — covering platform migration, UX, data and personalisation across the full digital estate.
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
                "Sitecore Experience Platform",
                "Platform engineering",
                "CMS architecture",
                "Careers UX",
                "GeoIP personalisation",
                "Data dashboards",
                "Analytics",
                "Klipfolio",
                "PeopleFluent integration",
                "Global rollout",
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
                Transforming engagement with AI personalisation and intelligent lead scoring
              </h3>
              <p className="mt-2 text-[14px] font-semibold" style={{ color: "#D4500F" }}>
                Capco — Personalisation & AI
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
              <Link href="/work/capco">Read next →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 11. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Got a platform that's holding your marketing team back?"
        subheading="If your CMS is slowing down campaign delivery or your team can't access the data they need, we would be glad to assess the situation and map a practical path forward."
      />

      <Footer />
    </div>
  );
}
