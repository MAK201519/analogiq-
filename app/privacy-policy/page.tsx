import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Analogiq",
  description: "How Analogiq Ltd collects, uses and protects your personal data.",
  alternates: { canonical: "https://analogiq.io/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Analogiq",
    url: "https://analogiq.io/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="phero plain">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Privacy Policy</span>
          </nav>
          <p className="q">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="lede" style={{ marginTop: 16 }}>
            We respect your privacy and are committed to protecting your personal data.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose legal">

            <h3>Introduction</h3>
            <p>
              Welcome to the Analogiq Ltd privacy policy. Analogiq Ltd respects your privacy and is
              committed to protecting your personal data. This privacy policy will inform you as to
              how we look after your personal data when you visit our website and tell you about your
              privacy rights and how the law protects you.
            </p>

            <h3>Important Information and Who We Are</h3>

            <h4>Purpose of this privacy policy</h4>
            <p>
              This privacy policy aims to give you information on how Analogiq collects and processes
              your personal data through your use of this website, including any data you may provide
              through this website when you contact us.
            </p>
            <p>
              This website is not intended for children and we do not knowingly collect data relating
              to children.
            </p>

            <h4>Controller</h4>
            <p>
              Analogiq Ltd is the controller and responsible for your personal data. We have appointed
              a data privacy manager who is responsible for overseeing questions in relation to this
              privacy policy.
            </p>

            <h4>Contact details</h4>
            <p>Full name of legal entity: Analogiq Ltd</p>
            <p>Email address: <a href="mailto:hello@analogiq.io">hello@analogiq.io</a></p>
            <p>Postal address: 3 East Grinstead Road, Lingfield, England, RH7 6NE</p>
            <p>Telephone number: 020 7118 1338</p>
            <p>
              You have the right to make a complaint at any time to the Information
              Commissioner&apos;s Office (ICO), the UK regulator for data protection issues
              (www.ico.org.uk).
            </p>

            <h4>Changes to the privacy policy</h4>
            <p>
              This version was last updated on 26 March 2026. We keep our privacy policy under
              regular review.
            </p>

            <h3>The Data We Collect About You</h3>
            <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul>
              <li>Identity Data: first name, last name, job title, company name</li>
              <li>Contact Data: email address and telephone numbers</li>
              <li>
                Technical Data: IP address, browser type and version, time zone, browser plug-in
                types, operating system and platform
              </li>
              <li>Usage Data: information about how you use our website</li>
              <li>
                Marketing and Communications Data: your preferences in receiving marketing from us
              </li>
            </ul>

            <h3>How We Use Your Personal Data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly we will
              use your personal data to respond to enquiries submitted through our contact form, to
              manage our relationship with you, and to administer and protect our website.
            </p>
            <p>
              We do not use your personal data for third-party marketing purposes and will not share
              your data with third parties for their own marketing.
            </p>

            <h3>Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from
              being accidentally lost, used or accessed in an unauthorised way. We limit access to
              your personal data to those who have a business need to know.
            </p>

            <h3>Data Retention</h3>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfil
              the purposes we collected it for. If we have engaged in a transaction, we keep basic
              information for six years after the engagement ends.
            </p>

            <h3>Your Legal Rights</h3>
            <p>Under data protection laws you have the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>.
            </p>

            <h3>Cookies</h3>
            <p>
              We use cookies to improve your experience on our website. Please see our{" "}
              <a href="/cookie-policy">Cookie Policy</a> for full details.
            </p>

            <h3>Third-Party Links</h3>
            <p>
              This website may include links to third-party websites. We do not control these
              websites and are not responsible for their privacy statements.
            </p>

            <p className="legal-updated">
              Last updated 26 March 2026. Analogiq Ltd. Contact{" "}
              <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
