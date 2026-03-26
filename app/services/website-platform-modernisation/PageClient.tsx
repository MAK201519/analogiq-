"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import Eyebrow from "../../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const PJB = "'Plus Jakarta Sans', system-ui, sans-serif";

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const capabilityCards = [
  {
    title: "Launch faster without rebuilding everything",
    body: "We introduce composable architectures and modern front-end layers that give marketing teams control, reducing dependency on development and accelerating release cycles.",
  },
  {
    title: "Modernise legacy platforms without starting from scratch",
    body: "Whether you're on Sitecore XP, moving toward SitecoreAI, or evolving an existing stack, we help you improve what you have before replacing it.",
  },
  {
    title: "Connect fragmented systems into one usable ecosystem",
    body: "We integrate CMS, personalisation, CDPs, analytics and marketing tools into a coherent platform that actually works together.",
  },
  {
    title: "Enable AI at the platform level",
    body: "AI only works when the foundations are right. We structure content, data and workflows so AI can be applied in real use cases, not just experiments.",
  },
  {
    title: "Improve performance, stability and scalability",
    body: "We ensure your platform can support modern marketing demands, from traffic and performance to continuous iteration.",
  },
];

const platformCards = [
  {
    name: "Sitecore",
    logo: "/logos/platforms/sitecore.png",
    body: "Unlock more from your current investment, or define the right path forward across XP, XM Cloud and SitecoreAI.",
    href: "/platforms/sitecore",
  },
  {
    name: "Uniform",
    logo: "/logos/platforms/uniform.svg",
    body: "Add a composable experience layer on top of your stack, enabling faster builds, modern front-end architecture and AI-driven experiences.",
    href: "/platforms/uniform",
  },
  {
    name: "Optimizely",
    logo: "/logos/platforms/optimizely.svg",
    body: "Turn your platform into a true optimisation engine, embedding experimentation and personalisation into everyday workflows.",
    href: "/contact",
  },
];

const coverCards = [
  {
    title: "Design the right architecture",
    body: "We define scalable, flexible platform architectures aligned to your business, marketing and technology goals, from composable models to integration strategies.",
  },
  {
    title: "Build and modernise the platform",
    body: "We deliver new capabilities, evolve existing environments and implement the integrations needed to support modern marketing operations.",
  },
  {
    title: "Continuously improve and scale",
    body: "We optimise performance, introduce governance and embed ways of working that allow your platform to evolve over time.",
  },
];

const workCards = [
  {
    client: "Capco",
    category: "Platform Engineering · Sitecore",
    title: "Rebuilding a global digital platform from scratch in 120 days",
    outcome: "14 days to 24hr SLA",
    image: "/clients/capco/homepage-hero.webp",
    href: "/work/capco-platform",
  },
  {
    client: "Keith Prowse",
    category: "Sitecore · Platform Engineering",
    title: "Long-term Sitecore technical partnership since 2021",
    outcome: "Technical partner since 2021",
    image: "/clients/keith-prowse/experience-finder.webp",
    href: "/work/keith-prowse",
  },
  {
    client: "The Experience Golf",
    category: "Sitecore · Ecommerce",
    title: "Ecommerce platform delivery on Sitecore in 6 months",
    outcome: "6-month delivery",
    image: "/clients/experience-golf/course-finder.webp",
    href: "/work/experience-golf",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function PlatformEngineeringPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>PLATFORM ENGINEERING</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
              The digital foundations that{" "}
              <span style={{ color: "#D4500F" }}>let marketing move faster.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              We modernise platforms like Sitecore, Optimizely and Uniform, enabling faster releases, AI-driven experiences and continuous optimisation without full rebuilds.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Most marketing teams aren&apos;t held back by ambition. They&apos;re held back by their platform. Campaigns take weeks to launch. AI is difficult to apply. Personalisation is limited by architecture. We fix the foundations so marketing can actually move.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Talk to us about platform engineering</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Link href="/work">View our work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE PROBLEM — white, two col ──────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            {/* Left — text */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={item}><Eyebrow>THE PROBLEM</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Your platform wasn&apos;t built for how marketing works today.
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                Modern marketing demands speed, flexibility and intelligence. But most digital platforms have evolved over time, shaped by legacy decisions, disconnected systems and incremental fixes.
              </motion.p>
              <motion.div variants={item}>
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Slow release cycles",
                    "Heavy reliance on development for everyday changes",
                    "Fragmented data and tooling",
                    "AI and personalisation stuck in pilot mode",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="shrink-0 mt-[7px]"
                        style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }}
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-[1.6]" style={{ color: "#4B5563" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.p variants={item} className="mt-6 text-[16px] font-semibold" style={{ color: "#D4500F" }}>
                Until the foundations change, nothing else scales.
              </motion.p>
            </motion.div>

            {/* Right — visual card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#9CA3AF" }}>Common platform constraints</span>
              </div>
              {[
                { label: "Time to launch campaign", value: "2–3 weeks" },
                { label: "New integration", value: "3–6 months" },
                { label: "Personalisation", value: "Pilot, not live" },
                { label: "AI readiness", value: "Not supported" },
                { label: "Developer dependency", value: "High" },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                  <span className="text-[14px]" style={{ color: "#6B7280" }}>{label}</span>
                  <span className="text-[13px] font-medium" style={{ color: "#D4500F" }}>{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO — surface, vertical capability cards ───────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHAT WE DO</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Platform engineering that removes constraints.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We redesign and modernise digital platforms so marketing teams can move faster, without unnecessary rebuilds.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {capabilityCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-3 flex-1" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. PLATFORMS — white, 3 cards ────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHERE WE WORK</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Built for the platforms you already use.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We work within your existing ecosystem, helping you get more value from the platforms you&apos;ve already invested in.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {platformCards.map(({ name, logo, body, href }) => (
              <motion.div key={name} variants={item}
                className="flex flex-col transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <div style={{ height: 40, display: "flex", alignItems: "center", marginBottom: 16 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo} alt={name} style={{ maxHeight: 32, width: "auto", display: "block", objectFit: "contain" }} />
                </div>
                <p className="text-[15px] leading-[1.65] flex-1" style={{ color: "#6B7280" }}>{body}</p>
                <div className="mt-6">
                  <Link href={href} className="text-[13px] font-medium hover:underline" style={{ color: "#D4500F" }}>Learn more →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-[15px]"
            style={{ color: "#9CA3AF" }}
          >
            We&apos;re platform-aware, but vendor-neutral. The focus is always outcomes.
          </motion.p>
        </div>
      </section>

      {/* ── 5. WHAT THIS COVERS — surface, 3 cards ───────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>CAPABILITIES</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              From architecture to continuous improvement.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {coverCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4 flex-1" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. CASE STUDIES — white, 3 cards ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Platform engineering in practice.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {workCards.map(({ client, category, title, outcome, image, href }) => (
              <motion.div key={title} variants={item}
                className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-200"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff" }}>
                <div className="overflow-hidden flex-shrink-0" style={{ height: 280, borderRadius: "45px 45px 0 0", position: "relative" }}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col flex-1 p-[50px]">
                  <p className="eyebrow mb-3">{client}</p>
                  <span
                    className="inline-block self-start px-[10px] py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.05em] mb-3"
                    style={{ background: "#FDF0E8", color: "#D4500F" }}
                  >
                    {category}
                  </span>
                  <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="text-[14px] font-medium mt-3" style={{ color: "#D4500F" }}>{outcome}</p>
                  <Link href={href} className="inline-block mt-5 text-[14px] font-medium hover:underline" style={{ color: "#6B7280" }}>View case study →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/work"
              className="inline-block text-[15px] font-medium"
              style={{ border: "2px solid #D4500F", borderRadius: 999, padding: "10px 24px", color: "#D4500F", backgroundColor: "transparent", transition: "background-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#D4500F"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#D4500F"; }}
            >
              View all work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#191A23" }} className="py-[80px] max-sm:py-[48px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center"
          >
            <h2
              className="max-w-[620px]"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#ffffff" }}
            >
              Still waiting weeks to launch campaigns?
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[480px]" style={{ color: "#9CA3AF" }}>
              If your platform is slowing your marketing team down, it&apos;s worth fixing. We&apos;ll show you where the biggest constraints are and how to remove them.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block text-[16px] font-medium"
                style={{ fontFamily: PJB, fontWeight: 500, backgroundColor: "#D4500F", color: "#ffffff", borderRadius: 999, padding: "14px 32px", transition: "background-color 0.2s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B84309"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D4500F"; }}
              >
                Start the conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
