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

function SubSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 style={{ fontFamily: PJB, fontSize: 16, fontWeight: 600, color: "#191A23", marginBottom: 8 }}>
        {heading}
      </h3>
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-[17px] leading-[1.65]" style={{ color: "#6B7280" }}>
              We respect your privacy and are committed to protecting your personal data.
            </p>
          </div>

          <Section heading="Introduction">
            <p>
              Welcome to the Analogiq Ltd privacy policy. Analogiq Ltd respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </Section>

          <Section heading="Important Information and Who We Are">
            <SubSection heading="Purpose of this privacy policy">
              <p>
                This privacy policy aims to give you information on how Analogiq collects and processes your personal data through your use of this website, including any data you may provide through this website when you contact us.
              </p>
              <p className="mt-3">
                This website is not intended for children and we do not knowingly collect data relating to children.
              </p>
            </SubSection>

            <SubSection heading="Controller">
              <p>
                Analogiq Ltd is the controller and responsible for your personal data. We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy policy.
              </p>
            </SubSection>

            <SubSection heading="Contact details">
              <p>Full name of legal entity: Analogiq Ltd</p>
              <p>Email address: <a href="mailto:hello@analogiq.io" style={{ color: "#D4500F" }}>hello@analogiq.io</a></p>
              <p>Postal address: 3 East Grinstead Road, Lingfield, England, RH7 6NE</p>
              <p>Telephone number: 020 7118 1338</p>
              <p className="mt-3">
                You have the right to make a complaint at any time to the Information Commissioner&apos;s Office (ICO), the UK regulator for data protection issues (www.ico.org.uk).
              </p>
            </SubSection>

            <SubSection heading="Changes to the privacy policy">
              <p>
                This version was last updated on 26 March 2026. We keep our privacy policy under regular review.
              </p>
            </SubSection>
          </Section>

          <Section heading="The Data We Collect About You">
            <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
            <Ul items={[
              "Identity Data: first name, last name, job title, company name",
              "Contact Data: email address and telephone numbers",
              "Technical Data: IP address, browser type and version, time zone, browser plug-in types, operating system and platform",
              "Usage Data: information about how you use our website",
              "Marketing and Communications Data: your preferences in receiving marketing from us",
            ]} />
          </Section>

          <Section heading="How We Use Your Personal Data">
            <p>
              We will only use your personal data when the law allows us to. Most commonly we will use your personal data to respond to enquiries submitted through our contact form, to manage our relationship with you, and to administer and protect our website.
            </p>
            <p className="mt-3">
              We do not use your personal data for third-party marketing purposes and will not share your data with third parties for their own marketing.
            </p>
          </Section>

          <Section heading="Data Security">
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way. We limit access to your personal data to those who have a business need to know.
            </p>
          </Section>

          <Section heading="Data Retention">
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for. If we have engaged in a transaction, we keep basic information for six years after the engagement ends.
            </p>
          </Section>

          <Section heading="Your Legal Rights">
            <p>Under data protection laws you have the right to:</p>
            <Ul items={[
              "Request access to your personal data",
              "Request correction of your personal data",
              "Request erasure of your personal data",
              "Object to processing of your personal data",
              "Request restriction of processing your personal data",
              "Request transfer of your personal data",
              "Withdraw consent at any time",
            ]} />
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@analogiq.io" style={{ color: "#D4500F" }}>hello@analogiq.io</a>.
            </p>
          </Section>

          <Section heading="Cookies">
            <p>
              We use cookies to improve your experience on our website. Please see our{" "}
              <a href="/cookie-policy" style={{ color: "#D4500F" }}>Cookie Policy</a> for full details.
            </p>
          </Section>

          <Section heading="Third-Party Links">
            <p>
              This website may include links to third-party websites. We do not control these websites and are not responsible for their privacy statements.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
