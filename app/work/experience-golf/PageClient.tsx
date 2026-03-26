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

export default function ExperienceGolfPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="max-sm:pt-[120px] max-sm:pb-[40px]" style={{ position: "relative", minHeight: 620, paddingTop: 180, paddingBottom: 80 }}>
        <Image
          src="/clients/experience-golf/homepage.png"
          alt="The Experience Golf homepage"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
        {/* Gradient overlay — left-heavy */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.3) 100%)",
          zIndex: 1,
        }} />
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5" style={{ position: "relative", zIndex: 2 }}>
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
                Ecommerce / UX &amp; Design / Sitecore
              </span>
            </motion.div>
            <motion.div variants={item}>
              <Eyebrow muted>The Experience Golf</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Launching a luxury ecommerce website for the UK&apos;s leading{" "}
              <span style={{ color: "#D4500F" }}>golf tour operator.</span>
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
              { stat: "6 months", label: "From brief to launch" },
              { stat: "30+", label: "Iconic golf courses bookable online" },
              { stat: "2", label: "Markets served — UK and USA" },
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
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>CLIENT</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                About The Experience Golf
              </motion.h2>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
                {["Ecommerce", "Sitecore", "UX & Design", "Multilingual", "Platform Engineering", "CRM Integration"].map((tag) => (
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
                The Experience Golf — formerly The Experience St Andrews — is a subsidiary of Keith Prowse, the UK&apos;s leading hospitality provider for major sporting events. Specialising in luxury golf tours across England, Scotland and Ireland, they offer access to some of the world&apos;s most prestigious courses, including the iconic Old Course at St Andrews, paired with luxury accommodation, transport and cultural experiences.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Keith Prowse has been an authorised provider of Tee Times on the Old Course at St Andrews for nearly three decades. With an established reputation for exceptional hospitality, the ambition was to bring that same quality online — allowing customers in the UK and USA to discover and book tailored golf experiences for the first time through a dedicated ecommerce platform.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. HOMEPAGE SCREENSHOT ───────────────────────────────────── */}
      <section className="bg-white pb-[80px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", height: 500, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/experience-golf/homepage.png"
                alt="theexperiencegolf.com homepage"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              theexperiencegolf.com — luxury golf tours across Scotland, England and Ireland
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE CHALLENGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#111111" }}>
                Zero ecommerce capability. Six months to launch.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                With all bookings previously made over the phone, The Experience Golf had no ecommerce capability whatsoever. The brief was to design and build a platform that would allow customers to discover, configure and book luxury golf experiences online for the first time — catering to audiences in both the UK and USA.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                The challenge was compounded by a tight six-month deadline, timed to coincide with the peak booking season. Launching late was not an option — the platform needed to be live, stable and fully functional before the season began.
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
                  &ldquo;All bookings were made over the phone. The brief was to change that — entirely — within six months.&rdquo;
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
                Workshops, wireframes and smart platform reuse.
              </motion.h2>
            </motion.div>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-5">
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                Analogiq began with a series of workshops and stakeholder interviews to map out the complexity of the product — multiple ancillary options, bespoke itinerary building, multilingual requirements and integration with events management and CRM systems for ticketing and billing. From this, we distilled a coherent customer journey that could be translated into UX wireframes and creative design.
              </motion.p>
              <motion.p variants={item} className="text-[16px] leading-[1.75]" style={{ color: "#6B7280" }}>
                To meet the six-month deadline without compromising quality, we made a strategic decision to reuse Sitecore components and backend functionality from the existing Keith Prowse website wherever possible — accelerating delivery while maintaining platform consistency across the Keith Prowse digital estate.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mt-2 max-sm:grid-cols-1">
                {[
                  { n: "01", title: "Discovery and UX", desc: "Stakeholder workshops and journey mapping distilled complex product requirements into a clear, bookable customer experience." },
                  { n: "02", title: "Design", desc: "Full creative design for a luxury ecommerce brand — reflecting the prestige of the courses and experiences on offer." },
                  { n: "03", title: "Multilingual capability", desc: "Built to serve customers in the UK and USA, with multilingual site capability enabling a broader international audience." },
                  { n: "04", title: "Platform and integrations", desc: "Built on Sitecore, with integrations connecting events management and CRM systems for ticketing and billing — reusing Keith Prowse components to accelerate delivery." },
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

      {/* ── 7. EXPERIENCE BUILDER SCREENSHOT ─────────────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", height: 480, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/experience-golf/experience-builder.png"
                alt="The Experience Golf experience builder"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              Build your bespoke experience — selecting golfers, dates, courses and hotels in a single journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 8. COURSE FINDER SCREENSHOT ──────────────────────────────── */}
      <section className="bg-white py-[80px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div style={{ position: "relative", height: 500, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/clients/experience-golf/course-finder.webp"
                alt="The Experience Golf course finder"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="text-center mt-4 text-[12px]" style={{ color: "#9CA3AF" }}>
              Choose your courses — filtering by country, region and course type across 30+ iconic venues
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 9. THE OUTCOME ───────────────────────────────────────────── */}
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
              Live for peak season.{" "}
              <span style={{ color: "#D4500F" }}>Bookable from day one.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#9CA3AF" }}>
              The platform launched on time and within the six-month window — ready for the peak booking season. For the first time, customers in the UK and USA could discover, configure and book a luxury golf experience entirely online, with the full complexity of courses, accommodation and ancillaries handled through a single, seamless journey.
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
                title: "On time delivery",
                body: "Launched within a six-month deadline, ready for the peak booking season without compromise on quality.",
              },
              {
                title: "First-time ecommerce",
                body: "Moved The Experience Golf from 100% phone-based bookings to a fully transactional ecommerce platform — a step change in commercial capability.",
              },
              {
                title: "Integrated platform",
                body: "Connected to events management and CRM systems for ticketing and billing, built on Sitecore with shared components from the Keith Prowse estate.",
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

      {/* ── 10. DISCIPLINES ──────────────────────────────────────────── */}
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
                The Experience Golf engagement combined discovery, UX, design and Sitecore platform engineering — delivering a complex ecommerce product under a tight deadline, integrated with the broader Keith Prowse digital estate.
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
                "Ecommerce",
                "Sitecore",
                "UX & design",
                "Creative design",
                "Multilingual",
                "CRM integration",
                "Platform engineering",
                "Stakeholder workshops",
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
                Modernising the digital sales channel for the UK&apos;s leading sports hospitality brand
              </h3>
              <p className="mt-2 text-[14px] font-medium" style={{ color: "#D4500F" }}>
                Keith Prowse — long-term technical partnership since 2021
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
              <Link href="/work/keith-prowse">Read next →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 12. FINAL CTA ────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="WORK WITH US"
        heading="Got a complex ecommerce or platform project with a hard deadline?"
        subheading="We have delivered complex digital platforms under tight timelines for some of the UK's most recognised hospitality brands. If you have an ecommerce challenge, a Sitecore platform or a deadline that cannot move — we would be glad to talk."
      />

      {/* ── 13. FOOTER ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
