import ServicePage from "../../components/ServicePage";

export default function PersonalisationPage() {
  return (
    <ServicePage
      hero={{
        eyebrow: "PERSONALISATION & EXPERIMENTATION",
        h1Before: "Personalisation and experimentation that",
        h1Highlight: "runs in production,",
        h1After: "not just pilots.",
        sub: "Most organisations have attempted personalisation. Few have made it operational. The difference between a personalisation pilot and a personalisation programme is not the ambition — it is the infrastructure, the data and the operational frameworks that allow personalisation to run continuously rather than occasionally.",
        primaryCTA: "Talk to us about personalisation",
        primaryHref: "/contact",
      }}
      whatWeDo={{
        h2: "Building personalisation infrastructure that lasts.",
        body: "Analogiq helps organisations build the technical and operational foundations for personalisation at scale. Our work frequently begins by evaluating the existing personalisation capabilities within the organisation — reviewing the platforms currently in use, understanding how audience segmentation is defined and assessing how behavioural data is collected and applied.",
        features: [
          { title: "Personalisation strategy", desc: "Defining the commercial objectives, audience models and content frameworks that make personalisation meaningful" },
          { title: "Platform integration", desc: "Connecting personalisation engines to digital experience platforms and the data systems that feed them" },
          { title: "Experimentation frameworks", desc: "Building the testing infrastructure that allows personalisation to improve continuously based on evidence" },
          { title: "Measurement and optimisation", desc: "Establishing the frameworks that allow organisations to understand and improve personalisation performance over time" },
        ],
        visualHeader: "Personalisation stack",
        visualItems: [
          "Audience data / CDP and behavioural signals",
          "Segmentation / Models and rules",
          "Content variants / Personalised assets",
          "Delivery / Real-time decisioning",
          "Measurement / Impact and attribution",
        ],
      }}
      capabilities={{
        h2: "What personalisation covers.",
        cards: [
          {
            title: "Strategy and audience design",
            body: "Defining the personalisation objectives, audience segmentation models and content frameworks that make personalisation commercially meaningful rather than cosmetically different.",
          },
          {
            title: "Platform and data integration",
            body: "Connecting the personalisation engine, digital experience platform and customer data infrastructure into a system that can receive signals and act on them in real time.",
          },
          {
            title: "Experimentation and optimisation",
            body: "Building the testing frameworks that allow personalisation strategies to evolve continuously — moving from assumption to evidence as the programme matures.",
          },
          {
            title: "Experimentation programme design",
            body: "Building the testing infrastructure and workflow that allows organisations to run high-velocity experiments continuously — without engineering dependency on every test.",
          },
        ],
      }}
      approach={{
        h2: "How we approach personalisation.",
        sub: "A structured approach that takes personalisation from pilot to production programme.",
        steps: [
          {
            number: "01",
            title: "Audit",
            description: "Evaluate existing personalisation capability — platforms, data, segmentation models and the operational workflows required to manage personalised content.",
            outcomes: [
              "Current personalisation capability assessed end to end",
              "Data availability and quality mapped against requirements",
              "Gaps identified between ambition and current infrastructure",
            ],
          },
          {
            number: "02",
            title: "Roadmap",
            description: "Design the personalisation programme — defining use cases, data requirements, platform integrations and the sequence in which capabilities are introduced.",
            outcomes: [
              "Prioritised personalisation use cases with commercial rationale",
              "Platform and data integration requirements defined",
              "Phased delivery plan with expected outcomes at each stage",
            ],
          },
          {
            number: "03",
            title: "Pilot",
            description: "Deliver a contained personalisation initiative — testing the approach on a defined audience segment and measuring commercial impact before scaling.",
            outcomes: [
              "Live personalisation on defined audience segment",
              "Commercial impact measured against control group",
              "Operational workflows established and tested",
            ],
          },
          {
            number: "04",
            title: "Scale",
            description: "Extend personalisation across the platform — adding audience segments, content variants and channels as the programme matures and evidence accumulates.",
            outcomes: [
              "Personalisation live across all key journeys and channels",
              "Continuous optimisation cadence established",
              "Internal team operating the programme independently",
            ],
          },
        ],
      }}
      cta={{
        heading: "Ready to move personalisation into production?",
        subheading: "If your organisation has attempted personalisation without achieving operational scale, the problem is usually structural. We have solved it before.",
      }}
    />
  );
}
