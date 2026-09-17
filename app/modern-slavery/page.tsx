import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Slavery Statement | Analogiq",
  description: "Analogiq Ltd's modern slavery and human trafficking statement.",
  alternates: { canonical: "https://analogiq.io/modern-slavery" },
  openGraph: {
    title: "Modern Slavery Statement | Analogiq",
    url: "https://analogiq.io/modern-slavery",
  },
};

export default function ModernSlaveryPage() {
  return (
    <main>
      <section className="phero plain">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Modern Slavery Statement</span>
          </nav>
          <p className="q">Legal</p>
          <h1>Modern Slavery Statement</h1>
          <p className="lede" style={{ marginTop: 16 }}>
            Our commitment to acting ethically and with integrity in all business dealings.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose legal">

            <h3>Introduction</h3>
            <p>
              This statement is made pursuant to section 54(1) of the Modern Slavery Act 2015 and
              constitutes Analogiq Ltd&apos;s modern slavery and human trafficking statement for the
              financial year ending 2025.
            </p>
            <p>
              Analogiq Ltd is committed to ensuring that there is no modern slavery or human
              trafficking in our supply chains or in any part of our business. We expect the same
              high standards from all our contractors, suppliers and other business partners.
            </p>

            <h3>Our Business</h3>
            <p>
              Analogiq Ltd is a digital marketing and technology consultancy based in England. We
              work with enterprise organisations to activate their digital platforms, connecting
              data, AI and workflows to drive measurable marketing performance.
            </p>
            <p>
              Our operations are primarily based in the United Kingdom. We engage a small number of
              trusted contractors and technology partners to support our delivery capability.
            </p>

            <h3>Our Supply Chains</h3>
            <p>
              Our supply chains include professional services providers, technology platform vendors
              and freelance contractors. Given the nature of our business, we consider our exposure
              to modern slavery risks to be low. However, we remain committed to identifying and
              addressing any potential risks.
            </p>

            <h3>Our Policies</h3>
            <p>
              We operate a number of internal policies to ensure we are conducting business
              ethically and transparently. These include:
            </p>
            <ul>
              <li>Recruitment and hiring policy ensuring fair and transparent processes</li>
              <li>Supplier code of conduct requiring ethical business practices</li>
              <li>
                Whistleblowing policy enabling staff to report concerns without fear of reprisal
              </li>
              <li>Equal opportunities policy</li>
            </ul>

            <h3>Due Diligence</h3>
            <p>
              As part of our initiative to identify and mitigate risk we undertake due diligence
              when onboarding new suppliers and contractors. This includes reviewing their policies
              and practices where appropriate, and requiring compliance with applicable laws
              including the Modern Slavery Act 2015.
            </p>

            <h3>Risk Assessment and Management</h3>
            <p>
              We assess the risk of modern slavery and human trafficking in our supply chains on an
              ongoing basis. We take a risk-based approach and focus our efforts where the risk is
              greatest. To date, we have not identified any instances of modern slavery or human
              trafficking in our supply chains.
            </p>

            <h3>Training</h3>
            <p>
              We ensure that relevant staff are aware of the risks of modern slavery and human
              trafficking and the steps we take to address them. We communicate our expectations to
              all employees and contractors who work with us.
            </p>

            <h3>Our Performance Indicators</h3>
            <p>We measure the effectiveness of our approach by monitoring:</p>
            <ul>
              <li>Number of modern slavery concerns raised and resolved</li>
              <li>Supplier assessments completed</li>
              <li>Staff awareness and training completion</li>
            </ul>

            <h3>Approval</h3>
            <p>
              This statement was approved by the board of directors of Analogiq Ltd and applies to
              the financial year ending 2025. It is reviewed and updated annually.
            </p>
            <p>
              For questions about this statement, please contact us at{" "}
              <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>.
            </p>

            <p className="legal-updated">
              Last updated 2025 financial year. Analogiq Ltd. Contact{" "}
              <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
