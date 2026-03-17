import ServicePage from "../../components/ServicePage";

export default function PlatformEngineeringPage() {
  return (
    <ServicePage
      hero={{
        eyebrow: "PLATFORM ENGINEERING",
        h1Before: "The digital foundations that",
        h1Highlight: "let marketing move.",
        sub: "Modern marketing organisations rely on digital infrastructure that was often built incrementally, over years, to solve individual problems. The result is frequently a platform environment that is difficult to maintain and even harder to evolve. Platform engineering fixes the foundations.",
        primaryCTA: "Talk to us about platform engineering",
        primaryHref: "/contact",
      }}
      challenge={{
        h2: "When the platform becomes the bottleneck.",
        body: "Marketing teams should not need to wait weeks for platform changes that should take hours. Development cycles that once felt acceptable now create meaningful competitive disadvantage. Every delay is a campaign that launched late, a personalisation that never ran, an experiment that never happened.",
        features: [
          { title: "Slow development cycles", desc: "Every change requires engineering resource and lengthy deployment processes" },
          { title: "Rigid architectures", desc: "Platforms that resist integration with modern marketing and AI technologies" },
          { title: "Fragmented systems", desc: "Data and tools that cannot connect or activate across the stack" },
          { title: "Accumulated technical debt", desc: "Years of incremental decisions creating architectural complexity" },
        ],
        visualHeader: "Common platform bottlenecks",
        visualItems: [
          "2–4 week content change cycle",
          "Engineering required for every update",
          "Integrations that break on each release",
          "Personalisation stuck in pilot",
          "AI systems with no integration path",
        ],
      }}
      whatWeDo={{
        h2: "Platform engineering that enables, not constrains.",
        body: "Analogiq works with organisations to design and implement digital architectures that support modern marketing operations. Our work often begins with a detailed assessment of the existing platform environment — reviewing current technologies, understanding integration patterns, identifying architectural constraints and evaluating how effectively marketing teams can operate within the existing environment.",
        features: [
          { title: "Composable architecture", desc: "Introducing flexible, modular approaches that give marketing teams genuine control" },
          { title: "Legacy CMS modernisation", desc: "Improving and migrating existing platform environments without starting from scratch" },
          { title: "Integration design", desc: "Connecting platforms, data systems and marketing technologies into coherent ecosystems" },
          { title: "Performance optimisation", desc: "Ensuring platforms operate at the speed and reliability modern marketing requires" },
        ],
        visualHeader: "Platform stack",
        visualItems: [
          "CMS / Content management",
          "Personalisation engine",
          "CDP / Customer data platform",
          "Analytics and attribution",
          "AI layer",
        ],
      }}
      capabilities={{
        h2: "What platform engineering covers.",
        cards: [
          {
            title: "Architecture and design",
            body: "Designing platform environments that support flexibility, scalability and integration — from initial architecture through to detailed technical specifications.",
          },
          {
            title: "Implementation and delivery",
            body: "Building and configuring digital platforms — new implementations, legacy migrations and the integration work that connects platforms to the broader technology ecosystem.",
          },
          {
            title: "Optimisation and governance",
            body: "Ensuring platforms continue to perform and evolve — addressing technical debt, improving performance and establishing the governance that keeps environments healthy over time.",
          },
        ],
      }}
      approach={{
        h2: "How we approach platform work.",
        sub: "A structured four-stage approach from assessment to scaled capability.",
        steps: [
          {
            number: "01",
            title: "Audit",
            description: "Review the current platform environment — architecture, integrations, performance and how effectively it supports marketing operations today.",
            outcomes: [
              "Platform maturity assessed against modern architecture benchmarks",
              "Integration landscape mapped with gap analysis",
              "Prioritised list of architectural constraints and opportunities",
            ],
          },
          {
            number: "02",
            title: "Roadmap",
            description: "Design the modernisation path — sequenced around real constraints with defined outcomes and investment requirements at each stage.",
            outcomes: [
              "Target state architecture with phased delivery plan",
              "Platform vendor evaluation and recommendations",
              "Business case and investment model per initiative",
            ],
          },
          {
            number: "03",
            title: "Pilot",
            description: "Deliver a contained initiative that proves the architectural approach and demonstrates value before committing to full-scale implementation.",
            outcomes: [
              "Live platform capability delivered within agreed timeframe",
              "Performance baseline established",
              "Team trained and operating independently",
            ],
          },
          {
            number: "04",
            title: "Scale",
            description: "Extend the modernised platform capability across the organisation — maintaining performance and building internal capability to operate independently.",
            outcomes: [
              "Full platform rollout across all markets and channels",
              "Governance model and operating procedures in place",
              "Internal team capable of long-term platform management",
            ],
          },
        ],
      }}
      cta={{
        heading: "Ready to fix your platform foundations?",
        subheading: "If your current platform is limiting what your marketing team can do, this is worth a conversation.",
      }}
    />
  );
}
