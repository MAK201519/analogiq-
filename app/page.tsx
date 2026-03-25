import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/NavigationBar";
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
      "Assess current platform maturity, data readiness and activation gaps across your organisation. We interview stakeholders, analyse your martech stack and map the distance between ambition and capability.",
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
      "Build a pragmatic delivery plan aligned with specific business objectives and realistic timelines. We define the sequence of initiatives, estimated effort and success metrics for each workstream.",
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
      "Deliver focused solutions with measurable outcomes within defined timeframes, proving value fast. We embed with your team to build, test and iterate on the highest-impact capability first.",
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
      "Extend proven capabilities across teams, markets and the organisation with governance in place. We help you build the operating model, tooling and skills to sustain momentum after we step back.",
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
    href: "/services/platform-engineering",
  },
  {
    title: "AI Activation",
    problem: "AI is being explored but not driving real performance.",
    outcome: "Move AI from experimentation to production.",
    href: "/services/ai-enablement",
  },
  {
    title: "Personalisation and Experimentation",
    problem: "You have the tools but they're underused or disconnected.",
    outcome: "Continuous improvement, not one-off optimisation.",
    href: "/services/personalisation-experimentation",
  },
  {
    title: "Data and Insights",
    problem: "Data exists but it's not driving decisions.",
    outcome: "Decisions backed by data, not assumptions.",
    href: "/services/data-insights",
  },
  {
    title: "UX and Product Design",
    problem: "Experiences that don't convert at the rate they should.",
    outcome: "Design measured in outcomes, not aesthetics.",
    href: "/services/ux-product-design",
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
      <HeroSection />
      <WorkSection />
      <ClientLogos />
      <StatsBar />
      <IndustryShift />
      <ActivationGap />

      {/* HOW WE THINK — Differentiator */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="mb-12 max-w-[640px]">
            <Eyebrow>HOW WE THINK</Eyebrow>
            <h2
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}
            >
              We don&apos;t design or build based on opinion.
            </h2>
            <p className="text-[17px] leading-[1.7] mt-6" style={{ color: '#4B5563' }}>
              Most digital experiences are shaped by stakeholder preference,
              internal assumptions and disconnected decisions. We take a
              different approach. Everything we do is grounded in real user
              behaviour, data and insight, and experimentation and validation.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-6 max-sm:grid-cols-1"
            style={{ maxWidth: 720 }}
          >
            {/* Left */}
            <div
              style={{
                backgroundColor: '#F3F3F3',
                borderRadius: 24,
                border: '1px solid #E5E7EB',
                padding: '32px 36px',
              }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: '#9CA3AF' }}>
                Most approaches rely on
              </p>
              <ul className="flex flex-col gap-3">
                {["Stakeholder preference", "Internal assumptions", "Disconnected decisions"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[15px]" style={{ color: '#6B7280' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: '#9CA3AF', flexShrink: 0, display: 'inline-block' }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
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
                  <li key={t} className="flex items-center gap-3 text-[15px]" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: '#D4500F', flexShrink: 0, display: 'inline-block' }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-[18px] font-semibold" style={{ color: '#D4500F' }}>
            We don&apos;t design for approval. We design for performance.
          </p>
        </div>
      </section>

      {/* WHAT WE DO — Services */}
      <section className="bg-[#F3F3F3] py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="mb-12">
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}
            >
              From platform investment to measurable growth.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[520px]" style={{ color: '#6B7280' }}>
              We don&apos;t deliver isolated services. We solve the problems that
              stop marketing teams moving faster.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {serviceCards.map(({ title, problem, outcome, href }) => (
              <div
                key={title}
                className="grid max-md:grid-cols-1"
                style={{
                  gridTemplateColumns: '1fr 1.4fr auto',
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
                  <p className="text-[15px] leading-[1.6]" style={{ color: '#6B7280' }}>{problem}</p>
                  <p className="text-[15px] font-semibold mt-2" style={{ color: '#D4500F' }}>{outcome}</p>
                </div>
                <Link
                  href={href}
                  className="text-[14px] font-semibold whitespace-nowrap transition-all duration-200 max-md:self-start text-[#D4500F] bg-transparent hover:bg-[#D4500F] hover:text-white"
                  style={{ border: '2px solid #D4500F', borderRadius: 999, padding: '10px 24px' }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[14px] text-center" style={{ color: '#9CA3AF' }}>
            Each capability works on its own. Together, they transform how marketing operates.
          </p>
        </div>
      </section>

      {/* OUR PLATFORMS */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="mb-12">
            <Eyebrow>OUR PLATFORMS</Eyebrow>
            <h2
              className="mt-4"
              style={{ fontFamily: PJB, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: '#191A23' }}
            >
              Built for the platforms you already use.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-5 max-w-[500px]" style={{ color: '#6B7280' }}>
              We work within your existing ecosystem, helping you get more value
              from your current investment.
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
                <p className="text-[15px] leading-[1.65] flex-1" style={{ color: '#6B7280' }}>{body}</p>
                <span
                  className="mt-6 text-[14px] font-semibold inline-block transition-colors duration-200"
                  style={{ color: '#D4500F' }}
                >
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-[14px] text-center" style={{ color: '#9CA3AF' }}>
            We&apos;re platform-aware, but vendor-neutral. The focus is always outcomes.
          </p>
        </div>
      </section>

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

      <FinalCTA
        heading="If your platform is limiting your marketing, let's fix it."
        subheading="If your digital platform isn't delivering the performance it should, the issue is rarely the technology itself. It's how it has been designed, connected and activated. We'll show you where the gaps are and how to close them. No pitch. Just a conversation."
      />
      <Footer />
    </div>
  );
}
