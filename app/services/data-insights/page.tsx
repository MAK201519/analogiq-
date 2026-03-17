import ServicePage from "../../components/ServicePage";

export default function DataInsightsPage() {
  return (
    <ServicePage
      hero={{
        eyebrow: "DATA & INSIGHTS",
        h1Before: "Data that",
        h1Highlight: "informs decisions,",
        h1After: "not just dashboards.",
        sub: "Most organisations collect more data than they use. The problem is rarely a shortage of information — it is the absence of the infrastructure and processes required to turn that information into decisions that improve marketing performance.",
        primaryCTA: "Talk to us about data and insights",
        primaryHref: "/contact",
      }}
      challenge={{
        h2: "When data exists but cannot be used.",
        body: "Marketing teams often find themselves data-rich and insight-poor. Analytics platforms generate reports. CRM systems hold customer records. Campaign tools track engagement. But without the infrastructure to connect these sources and the processes to act on what they reveal, data becomes a reporting exercise rather than a decision-making asset.",
        features: [
          { title: "Fragmented data sources", desc: "Customer data sitting across multiple disconnected platforms without integration" },
          { title: "Reporting without insight", desc: "Dashboards that describe what happened rather than informing what to do next" },
          { title: "No foundation for AI", desc: "AI systems that cannot function effectively without well-structured, connected data" },
          { title: "Slow decision cycles", desc: "Insight that arrives too late to influence the campaigns and decisions it should be informing" },
        ],
        visualHeader: "Common data environment problems",
        visualItems: [
          "CRM disconnected from web analytics",
          "Campaign data siloed by channel",
          "No unified customer identifier across systems",
          "Reporting delivered weekly, decisions needed daily",
          "AI tools without data integration path",
        ],
      }}
      whatWeDo={{
        h2: "Building the data foundations modern marketing requires.",
        body: "Analogiq helps organisations design data environments that support informed decision-making and enable marketing teams to operate more effectively. This work often begins by reviewing how data is currently collected, structured and used across the organisation — assessing analytics implementations, data pipelines, reporting environments and the broader marketing technology ecosystem.",
        features: [
          { title: "Data architecture", desc: "Designing the structures that connect data sources and make information accessible across the organisation" },
          { title: "Analytics implementation", desc: "Building and improving the measurement frameworks that capture what matters and ignore what does not" },
          { title: "Reporting and visualisation", desc: "Creating the reporting environments that surface insight at the speed decisions need to be made" },
          { title: "AI data readiness", desc: "Preparing data environments for the AI systems that depend on them to function effectively" },
        ],
        visualHeader: "Data stack",
        visualItems: [
          "Collection / Events and tracking",
          "Integration / Pipelines and connectors",
          "Storage / Data warehouse and lakes",
          "Analysis / Modelling and attribution",
          "Activation / Marketing decisions",
        ],
      }}
      capabilities={{
        h2: "What data and insights covers.",
        cards: [
          {
            title: "Data strategy and architecture",
            body: "Designing the data environments that connect sources, support integration and create the foundations for AI, personalisation and effective decision-making.",
          },
          {
            title: "Analytics and measurement",
            body: "Building and improving the analytics implementations that capture meaningful data and translate it into insight that informs marketing decisions.",
          },
          {
            title: "Reporting and activation",
            body: "Creating the reporting frameworks and data activation processes that allow marketing teams to act on insight at the speed the business requires.",
          },
        ],
      }}
      approach={{
        h2: "How we approach data and insights work.",
        sub: "A structured process from audit to continuous data activation.",
        steps: [
          {
            number: "01",
            title: "Audit",
            description: "Assess the current data environment — sources, pipelines, reporting structures and the gaps that are limiting insight and preventing AI activation.",
            outcomes: [
              "Complete map of data sources, flows and quality issues",
              "Gap analysis against insight and activation requirements",
              "Prioritised list of data infrastructure improvements",
            ],
          },
          {
            number: "02",
            title: "Roadmap",
            description: "Design the data architecture — defining which sources connect, how data flows and what the reporting and activation infrastructure needs to look like.",
            outcomes: [
              "Target state data architecture",
              "Phased integration and build plan",
              "Tooling and platform recommendations",
            ],
          },
          {
            number: "03",
            title: "Pilot",
            description: "Implement a focused data initiative — connecting key sources, building initial reporting and demonstrating the value of a unified data environment.",
            outcomes: [
              "Core data sources connected and flowing",
              "Initial reporting environment live and in use",
              "AI readiness assessment completed",
            ],
          },
          {
            number: "04",
            title: "Scale",
            description: "Extend the data infrastructure across the organisation — adding sources, improving quality and building the capability to activate data continuously.",
            outcomes: [
              "Full data environment live across all key systems",
              "Reporting embedded in marketing workflows",
              "Data governance model operational",
            ],
          },
        ],
      }}
      cta={{
        heading: "Ready to make your data work for marketing?",
        subheading: "If your organisation is collecting data but not using it effectively, the problem is usually in the infrastructure rather than the data itself.",
      }}
    />
  );
}
