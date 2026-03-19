import ServicePage from "../../components/ServicePage";

export default function UXProductDesignPage() {
  return (
    <ServicePage
      hero={{
        eyebrow: "UX & PRODUCT DESIGN",
        h1Before: "Digital experiences that",
        h1Highlight: "convert,",
        h1After: "not just impress.",
        sub: "Even the most sophisticated technology architecture will struggle to create value if the digital experiences it delivers are confusing, inefficient or poorly designed. User experience design ensures that digital platforms support both customer needs and business objectives.",
        primaryCTA: "Talk to us about UX and design",
        primaryHref: "/contact",
      }}
      whatWeDo={{
        h2: "Design that is measured in outcomes, not aesthetics.",
        body: "Analogiq works with organisations to design digital experiences that are clear, effective and commercially impactful. Our design work typically begins with understanding the needs of the users interacting with the platform — researching customer behaviour, analysing existing digital journeys and identifying the points where users encounter friction or confusion.",
        features: [
          { title: "UX research and analysis", desc: "Understanding how users actually behave rather than how we assume they do" },
          { title: "Journey and information architecture", desc: "Structuring digital platforms around user needs and commercial objectives" },
          { title: "Interface design", desc: "Creating interfaces that guide users clearly and support conversion at every stage" },
          { title: "Design systems", desc: "Building reusable component libraries that allow teams to build consistently and efficiently" },
        ],
        visualHeader: "UX design process",
        visualItems: [
          "Research / Understand user behaviour",
          "Architecture / Structure around needs",
          "Design / Create clear interfaces",
          "Test / Validate with real users",
          "Iterate / Improve continuously",
        ],
      }}
      capabilities={{
        h2: "What UX and product design covers.",
        cards: [
          {
            title: "Research and strategy",
            body: "User research, customer journey mapping, competitor analysis and the strategic framing that ensures design decisions are grounded in evidence rather than assumption.",
          },
          {
            title: "Experience and interface design",
            body: "Information architecture, user journey design, interface design and the creation of digital experiences that support measurable commercial outcomes.",
          },
          {
            title: "Design systems and components",
            body: "Building and maintaining the reusable component libraries and design systems that allow organisations to build digital experiences consistently and efficiently at scale.",
          },
        ],
      }}
      approach={{
        h2: "How we approach UX and design work.",
        sub: "A structured process from understanding to scaled improvement.",
        steps: [
          {
            number: "01",
            title: "Audit",
            description: "Understand the current digital experience — how users behave, where friction exists and where the greatest opportunities for improvement lie.",
            outcomes: [
              "Behavioural analysis and friction mapping",
              "Conversion funnel assessment across key journeys",
              "Prioritised list of experience improvement opportunities",
            ],
          },
          {
            number: "02",
            title: "Roadmap",
            description: "Define the design programme — prioritising the interventions most likely to improve commercial performance within real operational constraints.",
            outcomes: [
              "Prioritised design improvement roadmap",
              "Success metrics defined per initiative",
              "Resource and timeline plan aligned to platform capabilities",
            ],
          },
          {
            number: "03",
            title: "Pilot",
            description: "Design and test a focused set of experience improvements — validating assumptions with real users before committing to broader implementation.",
            outcomes: [
              "Tested designs validated with real user feedback",
              "Performance improvement measured against baseline",
              "Design system foundations established",
            ],
          },
          {
            number: "04",
            title: "Scale",
            description: "Roll out the improved experience across the platform — maintaining design consistency and building internal capability to iterate continuously.",
            outcomes: [
              "Improved experience live across all key journeys",
              "Design system adopted across the organisation",
              "Internal team equipped to iterate and maintain independently",
            ],
          },
        ],
      }}
      cta={{
        heading: "Ready to make your digital experience work harder?",
        subheading: "If your digital platform is not converting at the rate it should, the answer is usually in the experience design.",
      }}
    />
  );
}
