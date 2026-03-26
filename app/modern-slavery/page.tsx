import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const PJB = "'Plus Jakarta Sans', system-ui, sans-serif";

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 style={{ fontFamily: PJB, fontSize: 18, fontWeight: 700, color: "#111111", marginBottom: 12 }}>
        {heading}
      </h2>
      <div style={{ color: "#4B5563", fontSize: 16, lineHeight: 1.75 }}>
        {children}
      </div>
    </div>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: "#D4500F", flexShrink: 0, display: "inline-block", marginTop: 10 }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ModernSlaveryPage() {
  return (
    <div>
      <NavigationBar />

      <main className="bg-white pt-[140px] pb-[100px] max-sm:pt-[100px] max-sm:pb-[60px]">
        <div className="max-w-[800px] mx-auto px-[100px] max-lg:px-10 max-sm:px-5">
          {/* Header */}
          <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: 40, marginBottom: 8 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 16 }}>
              Legal
            </p>
            <h1 style={{ fontFamily: PJB, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, color: "#111111" }}>
              Modern Slavery Statement
            </h1>
            <p className="mt-4 text-[17px] leading-[1.65]" style={{ color: "#6B7280" }}>
              Our commitment to acting ethically and with integrity in all business dealings.
            </p>
          </div>

          <Section heading="Introduction">
            <p>
              This statement is made pursuant to section 54(1) of the Modern Slavery Act 2015 and constitutes Analogiq Ltd&apos;s modern slavery and human trafficking statement for the financial year ending 2025.
            </p>
            <p className="mt-3">
              Analogiq Ltd is committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business. We expect the same high standards from all our contractors, suppliers and other business partners.
            </p>
          </Section>

          <Section heading="Our Business">
            <p>
              Analogiq Ltd is a digital marketing and technology consultancy based in England. We work with enterprise organisations to activate their digital platforms, connecting data, AI and workflows to drive measurable marketing performance.
            </p>
            <p className="mt-3">
              Our operations are primarily based in the United Kingdom. We engage a small number of trusted contractors and technology partners to support our delivery capability.
            </p>
          </Section>

          <Section heading="Our Supply Chains">
            <p>
              Our supply chains include professional services providers, technology platform vendors and freelance contractors. Given the nature of our business, we consider our exposure to modern slavery risks to be low. However, we remain committed to identifying and addressing any potential risks.
            </p>
          </Section>

          <Section heading="Our Policies">
            <p>
              We operate a number of internal policies to ensure we are conducting business ethically and transparently. These include:
            </p>
            <Ul items={[
              "Recruitment and hiring policy ensuring fair and transparent processes",
              "Supplier code of conduct requiring ethical business practices",
              "Whistleblowing policy enabling staff to report concerns without fear of reprisal",
              "Equal opportunities policy",
            ]} />
          </Section>

          <Section heading="Due Diligence">
            <p>
              As part of our initiative to identify and mitigate risk we undertake due diligence when onboarding new suppliers and contractors. This includes reviewing their policies and practices where appropriate, and requiring compliance with applicable laws including the Modern Slavery Act 2015.
            </p>
          </Section>

          <Section heading="Risk Assessment and Management">
            <p>
              We assess the risk of modern slavery and human trafficking in our supply chains on an ongoing basis. We take a risk-based approach and focus our efforts where the risk is greatest. To date, we have not identified any instances of modern slavery or human trafficking in our supply chains.
            </p>
          </Section>

          <Section heading="Training">
            <p>
              We ensure that relevant staff are aware of the risks of modern slavery and human trafficking and the steps we take to address them. We communicate our expectations to all employees and contractors who work with us.
            </p>
          </Section>

          <Section heading="Our Performance Indicators">
            <p>We measure the effectiveness of our approach by monitoring:</p>
            <Ul items={[
              "Number of modern slavery concerns raised and resolved",
              "Supplier assessments completed",
              "Staff awareness and training completion",
            ]} />
          </Section>

          <Section heading="Approval">
            <p>
              This statement was approved by the board of directors of Analogiq Ltd and applies to the financial year ending 2025. It is reviewed and updated annually.
            </p>
            <p className="mt-3">
              For questions about this statement, please contact us at{" "}
              <a href="mailto:hello@analogiq.io" style={{ color: "#D4500F" }}>hello@analogiq.io</a>.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
