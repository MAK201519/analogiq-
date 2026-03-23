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
      "Deliver focused solutions with measurable outcomes within defined timeframes — proving value fast. We embed with your team to build, test and iterate on the highest-impact capability first.",
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
      <ProcessSteps
        eyebrow="OUR APPROACH"
        heading="From audit to scale."
        subheading="We modernise your digital platform and embed new capabilities across the organisation."
        steps={approachSteps}
      />
      <FinalCTA />
      <Footer />
    </div>
  );
}
