import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/NavigationBar";

export const metadata: Metadata = {
  title: "Digital Platform & AI Marketing Consultancy | Analogiq",
  description: "We help enterprise marketing teams modernise platforms, activate AI and improve performance. Sitecore, composable DXP and marketing technology experts.",
  alternates: { canonical: "https://analogiq.io/" },
  openGraph: {
    title: "Digital Platform & AI Marketing Consultancy | Analogiq",
    description: "We help enterprise marketing teams modernise platforms, activate AI and improve performance. Sitecore, composable DXP and marketing technology experts.",
    url: "https://analogiq.io/",
  },
};
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ClientLogos from "./components/ClientLogos";
import StatsBar from "./components/StatsBar";
import IndustryShift from "./components/IndustryShift";
import ActivationGap from "./components/ActivationGap";
import ProcessSteps from "./components/ProcessSteps";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Eyebrow from "./components/Eyebrow";

const PJB = "'Plus Jakarta Sans', system-ui, sans-serif";

const approachSteps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Understand what's holding performance back. We assess current platform maturity, data readiness and activation gaps across your organisation — interviewing stakeholders, analysing your martech stack and mapping the distance between ambition and capability.",
    outcomes: [
      "Clear picture of platform maturity across all capabilities",
      "Prioritised list of activation gaps and quick wins",
      "Executive-ready findings with supporting evidence",
    ],
  },
  {
    number: "02",
    title: "Roadmap",
    description:
      "Define what will drive measurable impact. We build a pragmatic delivery plan aligned with specific business objectives and realistic timelines — defining the sequence of initiatives, estimated effort and success metrics for each workstream.",
    outcomes: [
      "12-month delivery roadmap with phased milestones",
      "Business case and ROI model for each initiative",
      "Defined ownership and governance structure",
    ],
  },
  {
    number: "03",
    title: "Pilot",
    description:
      "Prove value quickly. We deliver focused solutions with measurable outcomes within defined timeframes, embedding with your team to build, test and iterate on the highest-impact capability first.",
    outcomes: [
      "Live capability delivered within 6–8 weeks",
      "Measurable performance baseline established",
      "Team upskilled and ready to iterate independently",
    ],
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Roll out across teams and markets. We extend proven capabilities with governance in place, helping you build the operating model, tooling and skills to sustain momentum after we step back.",
    outcomes: [
      "Capability rolled out across all relevant markets and channels",
      "Internal Centre of Excellence established",
      "Ongoing optimisation cadence embedded in BAU",
    ],
  },
];

const serviceCards = [
  {
    title: "Website and Platform Modernisation",
    problem: "Your platform is too slow to change and too expensive to evolve.",
    outcome: "Launch campaigns in days, not weeks.",
  },
  {
    title: "AI Activation",
    problem: "AI is being explored but not driving real performance.",
    outcome: "Move AI from experimentation to production.",
  },
  {
    title: "Personalisation and Experimentation",
    problem: "You have the tools but they're underused or disconnected.",
    outcome: "Continuous improvement, not one-off optimisation.",
  },
  {
    title: "Data and Insights",
    problem: "Data exists but it's not driving decisions.",
    outcome: "Decisions backed by data, not assumptions.",
  },
  {
    title: "UX and Product Design",
    problem: "Experiences that don't convert at the rate they should.",
    outcome: "Design measured in outcomes, not aesthetics.",
  },
];

const platformCards = [
  {
    logo: "/logos/platforms/sitecore.png",
    name: "Sitecore",
    body: "Unlock more value from your existing investment, or define the right path forward across XP, XM Cloud and SitecoreAI.",
    href: "/platforms/sitecore",
  },
  {
    logo: "/logos/platforms/uniform.svg",
    name: "Uniform",
    body: "Add a composable experience layer without rebuilding your stack, enabling faster builds and AI-driven experiences.",
    href: "/platforms/uniform",
  },
  {
    logo: "/logos/platforms/optimizely.svg",
    name: "Optimizely",
    body: "Turn experimentation and personalisation into a true growth engine, not a side capability.",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <div>
      <NavigationBar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Client logos + stats */}
      <ClientLogos />
      <StatsBar />

      {/* 3. The Shift */}
      <IndustryShift />

      {/* 4. Activation Gap */}
      <ActivationGap />

      {/* 5. HOW WE THINK — Differentiator (extra top padding) */}
      <section className="bg-white max-sm:py-[40px]" style={{ paddingTop: 118, paddingBottom: 70 }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="mb-12 text-center">
            <Eyebrow>HOW WE THINK</Eyebrow>
            <h2
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}
            >
              We don&apos;t design or build based on opinion.
            </h2>
            <p className="text-[17px] leading-[1.7] mt-6 max-w-[600px] mx-auto" style={{ color: '#4B5563' }}>
              Most digital experiences are shaped by stakeholder preference,
              internal assumptions and disconnected decisions. We take a
              different approach. Everything we do is grounded in real user
              behaviour, data and insight, and experimentation and validation.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 mx-auto"
            style={{ maxWidth: 800 }}
          >
            {/* Left — visually weaker */}
            <div
              style={{
                backgroundColor: '#F3F3F3',
                borderRadius: 24,
                border: '1px solid #E5E7EB',
                padding: '32px 36px',
              }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: '#C0C4CB' }}>
                Most approaches rely on
              </p>
              <ul className="flex flex-col gap-3">
                {["Stakeholder preference", "Internal assumptions", "Disconnected decisions"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[15px]" style={{ color: '#9CA3AF' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: '#C0C4CB', flexShrink: 0, display: 'inline-block' }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — full contrast */}
            <div
              style={{
                backgroundColor: '#191A23',
                borderRadius: 24,
                border: '1px solid #191A23',
                padding: '32px 36px',
              }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                We ground everything in
              </p>
              <ul className="flex flex-col gap-3">
                {["Real user behaviour", "Data and insight", "Experimentation and validation"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[16px]" style={{ color: '#ffffff' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: '#D4500F', flexShrink: 0, display: 'inline-block' }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-center" style={{ fontFamily: PJB, fontSize: 20, fontWeight: 700, color: '#191A23' }}>
            We don&apos;t design for approval. We design for performance.
          </p>
        </div>
      </section>

      {/* 6. WHAT WE DO — Services (extra top padding) */}
      <section className="bg-[#F3F3F3] max-sm:py-[40px]" style={{ paddingTop: 118, paddingBottom: 70 }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="mb-8">
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}
            >
              From platform investment to measurable growth.
            </h2>
          </div>

          <div className="mb-10">
            <p className="text-[17px] font-semibold" style={{ color: '#191A23' }}>
              Each capability solves a specific problem.
            </p>
            <p className="text-[17px] font-semibold" style={{ color: '#191A23' }}>
              Together, they transform how marketing operates.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {serviceCards.map(({ title, problem, outcome }) => (
              <div
                key={title}
                className="grid max-md:grid-cols-1"
                style={{
                  gridTemplateColumns: '1fr 1.4fr',
                  backgroundColor: '#ffffff',
                  borderRadius: 24,
                  border: '1px solid #191A23',
                  boxShadow: '0 5px 0 0 #191A23',
                  padding: '32px 40px',
                  alignItems: 'center',
                  gap: '40px',
                }}
              >
                <h3 style={{ fontFamily: PJB, fontSize: 18, fontWeight: 600, color: '#191A23', lineHeight: 1.3 }}>
                  {title}
                </h3>
                <div>
                  <p className="text-[16px] leading-[1.6]" style={{ color: '#6B7280' }}>{problem}</p>
                  <p className="text-[16px] font-bold mt-2" style={{ color: '#D4500F' }}>{outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PLATFORMS */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="mb-6">
            <Eyebrow>OUR PLATFORMS</Eyebrow>
            <h2
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}
            >
              Built for the platforms you already use.
            </h2>
          </div>

          <div className="mb-10">
            <p className="text-[17px]" style={{ color: '#4B5563' }}>
              We don&apos;t replace your platform.
            </p>
            <p className="text-[17px]" style={{ color: '#4B5563' }}>
              We make it work properly.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {platformCards.map(({ logo, name, body, href }) => (
              <Link
                key={name}
                href={href}
                className="flex flex-col group hover:-translate-y-1 transition-transform duration-200"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 32,
                  border: '1px solid #191A23',
                  boxShadow: '0 5px 0 0 #191A23',
                  padding: '40px 40px',
                  textDecoration: 'none',
                }}
              >
                <div style={{ height: 40, position: 'relative', marginBottom: 24 }}>
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                  />
                </div>
                <p className="text-[16px] leading-[1.65] flex-1" style={{ color: '#6B7280' }}>{body}</p>
                <span
                  className="mt-6 text-[15px] font-semibold inline-block transition-colors duration-200"
                  style={{ color: '#D4500F' }}
                >
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-[15px] text-center" style={{ color: '#9CA3AF' }}>
            We&apos;re platform-aware, but vendor-neutral. The focus is always outcomes.
          </p>
        </div>
      </section>

      {/* 8. Approach */}
      <ProcessSteps
        eyebrow="OUR APPROACH"
        heading="From audit to scale."
        subheading="We modernise your digital platform and embed new capabilities across the organisation."
        steps={approachSteps}
      />

      {/* Approach closing line */}
      <div className="bg-white" style={{ borderBottom: '1px solid #E5E7EB' }}>
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 py-12 text-center">
          <p className="text-[18px] font-semibold" style={{ fontFamily: PJB, color: '#6B7280' }}>
            No long transformation programmes. Just progress that compounds.
          </p>
        </div>
      </div>

      {/* 9. Work */}
      <WorkSection />

      {/* 10. Final CTA */}
      <FinalCTA
        heading="If your platform is limiting your marketing, let's fix it."
        subheading="If your platform isn't delivering the performance it should, it's rarely the technology. It's how it has been designed, connected and activated. We'll show you where the gaps are and how to close them. No pitch. Just a conversation."
      />
      <Footer />
    </div>
  );
}
