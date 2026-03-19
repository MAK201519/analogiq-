import ServicePage from "../../components/ServicePage";

export default function AIEnablementPage() {
  return (
    <ServicePage
      hero={{
        eyebrow: "AI ENABLEMENT",
        h1Before: "AI that",
        h1Highlight: "works in your marketing operation,",
        h1After: "not just in presentations.",
        sub: "Most organisations have run an AI pilot. Few have made it operational. The gap between an encouraging proof of concept and a capability that improves marketing performance every day is not a technology gap — it is an infrastructure, workflow and organisational gap.",
        primaryCTA: "Talk to us about AI enablement",
        primaryHref: "/contact",
      }}
      whatWeDo={{
        h2: "Moving AI from experimentation to operation.",
        body: "Analogiq helps organisations introduce AI capabilities into marketing environments in a way that is structured, practical and grounded in measurable outcomes. Rather than focusing on abstract AI concepts, our work focuses on identifying the specific areas where AI can deliver clear value within marketing operations — and building the infrastructure required to make that value sustainable.",
        features: [
          { title: "Use case identification", desc: "Finding the specific marketing workflows where AI delivers measurable value rather than theoretical benefit" },
          { title: "Infrastructure design", desc: "Building the data pipelines, platform integrations and workflow structures that allow AI to function effectively" },
          { title: "Workflow integration", desc: "Embedding AI tools into existing marketing processes in ways that support rather than disrupt daily operations" },
          { title: "Capability building", desc: "Developing the internal expertise and governance frameworks that allow organisations to sustain AI capability independently" },
        ],
        visualHeader: "AI enablement layers",
        visualItems: [
          "Use cases / High-value marketing workflows",
          "Data infrastructure / Clean, connected signals",
          "Platform integration / Real-time activation",
          "Workflow design / Operational processes",
          "Governance / Responsible deployment",
        ],
      }}
      capabilities={{
        h2: "What AI enablement covers.",
        cards: [
          {
            title: "AI strategy and use case design",
            body: "Identifying the marketing workflows where AI creates the most durable value and designing the programme required to activate those use cases at scale.",
          },
          {
            title: "Infrastructure and integration",
            body: "Building the data pipelines, platform connections and workflow structures that allow AI tools to operate effectively within real marketing environments.",
          },
          {
            title: "Governance and capability",
            body: "Establishing the operational frameworks, review processes and internal expertise that allow organisations to deploy AI responsibly and sustain the capability over time.",
          },
        ],
      }}
      approach={{
        h2: "How we approach AI enablement.",
        sub: "A structured approach that takes AI from assessment to operational programme.",
        steps: [
          {
            number: "01",
            title: "Audit",
            description: "Assess current AI maturity — existing tools, data infrastructure, platform readiness and the organisational capability available to support AI deployment.",
            outcomes: [
              "AI maturity mapped across data, platform and team capability",
              "Existing tools and initiatives assessed for operational potential",
              "Gaps identified between current state and operational AI",
            ],
          },
          {
            number: "02",
            title: "Roadmap",
            description: "Define the AI enablement programme — prioritising use cases, designing the infrastructure requirements and sequencing delivery around real constraints.",
            outcomes: [
              "Prioritised use cases with commercial rationale",
              "Infrastructure requirements defined per use case",
              "Phased delivery plan with measurable outcomes at each stage",
            ],
          },
          {
            number: "03",
            title: "Pilot",
            description: "Activate one or two AI use cases in a contained environment — measuring impact, refining the approach and building the internal confidence required to scale.",
            outcomes: [
              "Live AI capability in production environment",
              "Commercial impact measured against defined baseline",
              "Operational workflow established and validated",
            ],
          },
          {
            number: "04",
            title: "Scale",
            description: "Extend AI capability across marketing workflows — adding use cases, improving infrastructure and embedding the governance frameworks that make AI sustainable.",
            outcomes: [
              "AI capability extended across all priority use cases",
              "Governance framework and review processes operational",
              "Internal team sustaining and evolving capability independently",
            ],
          },
        ],
      }}
      cta={{
        heading: "Ready to make AI operational in your marketing?",
        subheading: "If your organisation has run AI pilots without achieving operational scale, the infrastructure is usually the problem. We can help fix it.",
      }}
    />
  );
}
