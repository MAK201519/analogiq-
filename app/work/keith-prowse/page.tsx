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

export default function KeithProwsePage() {
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
                Platform / CMS / UX & Design
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>Keith Prowse</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Modernising the digital sales channel for the UK&apos;s leading{" "}
              <span style={{ color: "#D4500F" }}>sports hospitality brand.</span>
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
              { stat: "2021", label: "Year Analogiq partnership began" },
              { stat: "Ongoing", label: "Long-term technical partnership" },
              { stat: "6", label: "Core service areas delivered" },
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
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CLIENT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                About Keith Prowse
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["Sitecore", "CMS Upgrade", "UX & Design", "Platform Engineering", "CRO", "Technical Partnership"].map((tag) => (
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
                Keith Prowse are the official sports and events hospitality provider for some of the UK&apos;s most iconic venues — including Wimbledon, Twickenham, and The O2. Operating across sport, music, arts and culture, they offer premium experiences to corporate and individual clients who expect a seamless, high-quality service at every touchpoint.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                As the hospitality industry navigated a significant shift from telephone bookings to digital as the primary sales acquisition channel, Keith Prowse recognised the need to ensure their website was not just a presence, but a performing commercial asset.
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
            <div style={{ position: "relative", height: 480, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/keith-prowse/homepage.webp"
                alt="keithprowse.co.uk homepage"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              keithprowse.co.uk — official hospitality provider for Wimbledon, Twickenham and The O2
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
                A CMS upgrade that couldn&apos;t stop at the platform.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Keith Prowse initially approached Analogiq with a requirement to upgrade their website to the latest version of the Sitecore Experience Platform — a critical piece of work driven by security and supportability requirements. But the real opportunity was broader than a technical migration.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                With the website becoming the dominant sales channel for the business, a platform upgrade alone was not enough. Keith Prowse needed a partner who understood both the technical complexity of Sitecore and the commercial imperative of optimising every digital touchpoint for conversion — turning a functionally upgraded site into a genuinely high-performing sales channel.
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
                  &ldquo;With the website becoming the dominant sales channel, a platform upgrade alone was not enough.&rdquo;
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
                Platform first. Performance second.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq began by completing the Sitecore upgrade — ensuring the platform was secure, stable and positioned to take advantage of the Experience Platform&apos;s full capability. With the technical foundation in place, attention shifted to the customer experience.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Using a combination of technical analysis, data and UX, we built a roadmap for ongoing improvement — identifying friction points in the purchase journey, prioritising the highest-impact changes and implementing them iteratively. This ongoing partnership gives Keith Prowse a continuous pipeline of improvements rather than a single-point engagement.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mt-2 max-sm:grid-cols-1">
                {[
                  { n: "01", title: "Sitecore platform upgrade", desc: "Migrated Keith Prowse to the latest version of the Sitecore Experience Platform, resolving security requirements and unlocking platform capability." },
                  { n: "02", title: "Data and analytics", desc: "Deep analysis of how visitors navigate the site — identifying drop-off points, high-value journeys and opportunities to improve the path to purchase." },
                  { n: "03", title: "UX and design", desc: "Ongoing UX and design work to improve the clarity, usability and visual quality of key pages and customer journeys." },
                  { n: "04", title: "Technical integrations", desc: "Complex integrations connecting the Sitecore platform with third-party systems to support the full hospitality booking experience." },
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

      {/* ── 7. SCREENSHOT FEATURE ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", height: 420, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/keith-prowse/experience-finder.webp"
                alt="Keith Prowse experience finder"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              Experience finder — helping customers navigate sport, music and culture hospitality packages
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 8. THE PARTNERSHIP ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-[700px] mx-auto mb-14"
          >
            <motion.div variants={item}><Eyebrow muted>THE PARTNERSHIP</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: "#ffffff" }}>
              A long-term technical partner,{" "}
              <span style={{ color: "#D4500F" }}>not a one-off supplier.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              Analogiq&apos;s relationship with Keith Prowse has grown from an initial platform migration into an ongoing technical partnership. We work as an extension of their team — introducing new features, managing complex integrations and continuously exploring ways to improve website performance and commercial outcomes.
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
                title: "Platform engineering",
                body: "Ongoing Sitecore development, maintenance and feature delivery — keeping the platform secure, stable and evolving.",
              },
              {
                title: "UX & design",
                body: "Continuous improvement of the user experience — from journey mapping and wireframing through to visual design and implementation.",
              },
              {
                title: "Integrations",
                body: "Complex third-party integrations connecting the booking, payment and CRM systems that underpin the Keith Prowse commercial operation.",
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

      {/* ── 9. DISCIPLINES ───────────────────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-[80px] items-start max-md:grid-cols-1">
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>DISCIPLINES</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                What the engagement covers
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The Keith Prowse engagement spans the full stack of digital capability — from platform engineering and CMS management through to UX design, data analysis and ongoing performance optimisation.
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
                "Sitecore",
                "CMS upgrade",
                "Platform engineering",
                "UX & design",
                "Data analysis",
                "Technical integrations",
                "CRO",
                "Performance optimisation",
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

      {/* ── 11. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Need a long-term technical partner for your digital platform?"
        subheading="We work with a focused number of organisations at any given time — acting as an extension of the in-house team rather than a one-off supplier. If you have a Sitecore platform, a commercial website that needs to perform harder, or both, we would be glad to have a conversation."
      />

      {/* ── 12. FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
