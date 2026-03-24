"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import ProcessSteps from "../components/ProcessSteps";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const PJB = "'Plus Jakarta Sans', system-ui, sans-serif";

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const serviceCards = [
  {
    title: "Website and Platform Modernisation",
    problem: "Your website is too slow to change, too complex to scale, or too expensive to evolve.",
    bullets: [
      "Modernise legacy platforms without full rebuilds",
      "Implement composable architectures using Uniform, Sitecore and Optimizely",
      "Decouple front-end and unlock faster releases",
      "Improve editor experience and reduce developer dependency",
    ],
    outcome: "Launch campaigns in days, not weeks.",
    href: "/services/platform-engineering",
  },
  {
    title: "AI Activation",
    problem: "AI is being explored, but not driving real performance.",
    bullets: [
      "Identify high-impact AI use cases across marketing and sales",
      "Implement AI content workflows and copilots",
      "Enable AI-driven personalisation and decisioning",
      "Connect AI to real data, not isolated tools",
    ],
    outcome: "Move AI from experimentation to production.",
    href: "/services/ai-enablement",
  },
  {
    title: "Personalisation and Experimentation",
    problem: "You have the tools, but they're underused or disconnected.",
    bullets: [
      "Design and implement experimentation programmes",
      "Activate personalisation across web and campaigns",
      "Use behavioural and customer data effectively",
      "Embed testing into day-to-day marketing workflows",
    ],
    outcome: "Continuous improvement, not one-off optimisation.",
    href: "/services/personalisation-experimentation",
  },
  {
    title: "Data and Insights",
    problem: "Data exists, but it's not driving decisions.",
    bullets: [
      "Connect platforms, analytics and CRM systems",
      "Build actionable reporting and insight layers",
      "Enable real-time decision-making",
      "Create foundations for AI and personalisation",
    ],
    outcome: "Decisions backed by data, not assumptions.",
    href: "/services/data-insights",
  },
  {
    title: "Delivery and Engineering",
    problem: "Execution is slow, fragmented or overly dependent on agencies.",
    bullets: [
      "Provide embedded specialists across engineering, UX and data",
      "Deliver front-end builds, integrations and platform enhancements",
      "Support continuous delivery and iteration",
      "Work alongside your internal teams",
    ],
    outcome: "Faster execution without scaling internal headcount.",
    href: "/services/platform-engineering",
  },
];

const platformCards = [
  {
    name: "Uniform",
    logo: "/logos/platforms/uniform.svg",
    body: "Composable DXP that sits on top of your stack, enabling faster builds, AI-driven experiences and modern front-end architecture.",
    href: "/platforms/uniform",
  },
  {
    name: "Sitecore",
    logo: "/logos/platforms/sitecore.png",
    body: "Unlock more value from your existing investment, or define the right path forward across XP, XM Cloud and SitecoreAI.",
    href: "/platforms/sitecore",
  },
  {
    name: "Optimizely",
    logo: "/logos/platforms/optimizely.svg",
    body: "Turn experimentation and personalisation into a core growth engine, not a side capability.",
    href: "/contact",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Audit and Opportunity Identification",
    description: "We assess your platform, data, workflows and capabilities. You leave with clear gaps and opportunities, prioritised use cases and a realistic view of what's possible.",
    outcomes: [
      "Clear gaps and opportunities identified",
      "Prioritised use cases defined",
      "Realistic view of what is possible within your constraints",
    ],
  },
  {
    number: "02",
    title: "Roadmap",
    description: "We turn insight into a practical plan.",
    outcomes: [
      "Prioritised initiatives with defined outcomes",
      "ROI model for each workstream",
      "Delivery plan aligned to your organisation",
    ],
  },
  {
    number: "03",
    title: "Pilot",
    description: "We prove value quickly.",
    outcomes: [
      "Focused use cases delivered fast",
      "Real experiences launched and measured",
      "Impact validated before scaling",
    ],
  },
  {
    number: "04",
    title: "Scale",
    description: "We expand what works.",
    outcomes: [
      "Rolled out across teams and channels",
      "Ways of working embedded in the organisation",
      "Ongoing optimisation supported",
    ],
  },
];

const differentiators = [
  {
    title: "Activation over theory",
    desc: "Most consultancies stop at strategy. We take responsibility for delivery.",
  },
  {
    title: "Platform-native",
    desc: "We work inside platforms like Sitecore, Optimizely and Uniform, not around them.",
  },
  {
    title: "One team, end-to-end",
    desc: "Strategy, engineering, data and UX working as one.",
  },
  {
    title: "Built for marketing teams",
    desc: "Everything we do is designed to help marketing move faster.",
  },
  {
    title: "Commercial focus",
    desc: "We prioritise impact, not outputs.",
  },
];

const workCards = [
  {
    client: "Wilderness Destinations",
    category: "CRO · Experimentation",
    title: "Doubling conversion rate and cutting acquisition costs in half",
    outcome: "2x conversion rate · 63% reduction in CPA",
    image: "/clients/wilderness/banner.png",
    href: "/work/wilderness",
  },
  {
    client: "HSBC Business Banking",
    category: "Experimentation · AI",
    title: "12:1 ROI across 24 experiments in 6 markets",
    outcome: "12:1 ROI",
    image: "/clients/hsbc/hero.png",
    href: "/work/hsbc",
  },
  {
    client: "Capco",
    category: "AI · Personalisation",
    title: "Transforming engagement with AI personalisation and intelligent lead scoring",
    outcome: "£1M+ confirmed sales",
    image: "/clients/capco/homepage-hero.webp",
    href: "/work/capco",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[760px]">
            <motion.div variants={item}><Eyebrow muted>WHAT WE DO</Eyebrow></motion.div>
            <motion.h1
              variants={item}
              className="mt-5"
              style={{ fontFamily: PJB, fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}
            >
              Turn your platform into{" "}
              <span style={{ color: "#D4500F" }}>a growth engine.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[620px]" style={{ color: "#9CA3AF" }}>
              We help marketing teams activate platforms like Sitecore, Optimizely and Uniform. Unlocking AI, personalisation and faster execution without rebuilding everything.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Most organisations don&apos;t have a technology problem. They have an activation problem. The platforms are there. The data exists. The ambition is clear. But delivery is slow, fragmented and dependent on development. We fix that.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #3a1a05" }}>
                  <Link href="/contact">Book a conversation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: PJB, fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Link href="#approach">Explore how we work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE PROBLEM — white, two-col comparison ───────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>THE PROBLEM</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              The activation gap is where value is lost.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              Marketing ambition has changed. Teams want faster campaign launches, AI-powered experiences, continuous experimentation and real-time personalisation. But most platforms weren&apos;t built to support that pace.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {/* Left — What teams want */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#16A34A" }}>What teams want</span>
              </div>
              {["Faster campaign launches", "AI-powered experiences", "Continuous experimentation", "Real-time personalisation"].map((pt, i) => (
                <div key={pt} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < 3 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ color: "#16A34A", fontSize: 16, flexShrink: 0 }}>✓</span>
                  <span className="text-[15px] font-medium" style={{ color: "#111111" }}>{pt}</span>
                </div>
              ))}
            </motion.div>

            {/* Right — What they get */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true, margin: "-80px" }}
              style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", overflow: "hidden" }}>
              <div className="px-8 py-5" style={{ borderBottom: "1px solid #191A23", backgroundColor: "#F3F3F3" }}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#D4500F" }}>What they get</span>
              </div>
              {["Slow release cycles", "Underused personalisation", "AI stuck in pilot mode", "Expensive platforms delivering limited return"].map((pt, i) => (
                <div key={pt} className="flex items-center gap-4 px-8 py-5"
                  style={{ borderBottom: i < 3 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ color: "#D4500F", fontSize: 16, flexShrink: 0 }}>✕</span>
                  <span className="text-[15px] font-medium" style={{ color: "#6B7280" }}>{pt}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-[18px] font-semibold"
            style={{ color: "#D4500F" }}
          >
            That&apos;s the gap we close.
          </motion.p>
        </div>
      </section>

      {/* ── 3. WHAT WE DO — surface, vertical service cards ──────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHAT WE ACTUALLY DO</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              From platform investment to measurable impact.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[520px]" style={{ color: "#6B7280" }}>
              We don&apos;t sell services in isolation. We solve the problems that stop marketing teams moving faster.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6">
            {serviceCards.map(({ title, problem, bullets, outcome, href }) => (
              <motion.div key={title} variants={item}
                className="grid grid-cols-[1fr_1.2fr] gap-12 items-start max-md:grid-cols-1 max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: "48px 50px" }}>
                {/* Left */}
                <div>
                  <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                  <p className="mt-3 text-[15px] italic leading-[1.6]" style={{ color: "#9CA3AF" }}>{problem}</p>
                </div>
                {/* Right */}
                <div>
                  <ul className="flex flex-col gap-2 mb-5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span style={{ color: "#16A34A", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span className="text-[14px] leading-[1.55]" style={{ color: "#4B5563" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[14px] font-semibold mb-3" style={{ color: "#D4500F" }}>{outcome}</p>
                  <Link href={href} className="text-[13px] font-medium hover:underline" style={{ color: "#6B7280" }}>Learn more →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. PLATFORMS — white, 3 cards ────────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>PLATFORMS</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              Built for the platforms you already use.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] max-w-[560px]" style={{ color: "#6B7280" }}>
              We work within your existing ecosystem, not against it. Whether you&apos;re modernising or scaling, we help you get more from the platforms you&apos;ve already invested in.
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

      {/* ── 5. HOW WE WORK — ProcessSteps ────────────────────────────── */}
      <div id="approach">
        <ProcessSteps
          eyebrow="HOW WE WORK"
          heading="How we work with you."
          subheading="Every engagement is built around one goal: deliver value quickly, then scale it."
          steps={approachSteps}
        />
      </div>

      {/* ── 6. WHAT MAKES US DIFFERENT — surface, 5 cards ────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHY ANALOGIQ</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              We don&apos;t just advise. We activate.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {differentiators.map(({ title, desc }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-3" style={{ color: "#6B7280" }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. CASE STUDIES — white, 3 cards ─────────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>SERVICES IN PRACTICE</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              What this looks like in reality.
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

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <FinalCTA
        eyebrow="NEXT STEP"
        heading="Not sure where to start?"
        subheading="We'll show you where the biggest opportunities are and how to act on them. Most engagements start with a conversation rather than a brief."
      />

      <Footer />
    </div>
  );
}
