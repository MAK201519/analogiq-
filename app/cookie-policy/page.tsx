import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Analogiq",
  description: "How Analogiq Ltd uses cookies on its website.",
  alternates: { canonical: "https://analogiq.io/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Analogiq",
    url: "https://analogiq.io/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="phero plain">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Cookie Policy</span>
          </nav>
          <p className="q">Legal</p>
          <h1>Cookie Policy</h1>
          <p className="lede" style={{ marginTop: 16 }}>
            How we use cookies and similar technologies on our website.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose legal">

            <h3>What Are Cookies</h3>
            <p>
              Cookies are small text files that are placed on your device when you visit a website.
              They are widely used to make websites work, or work more efficiently, as well as to
              provide information to the website owner. This policy explains how Analogiq Ltd uses
              cookies on our website.
            </p>

            <h3>How We Use Cookies</h3>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>To ensure our website functions correctly</li>
              <li>To understand how visitors use our website so we can improve it</li>
              <li>To remember your preferences</li>
              <li>To measure the effectiveness of our content</li>
            </ul>

            <h3>Types of Cookies We Use</h3>
            <p>
              <strong>Strictly necessary cookies</strong> — These cookies are required for the
              operation of our website. They include, for example, cookies that enable you to use
              contact forms or navigate between pages. You cannot opt out of these cookies.
            </p>
            <p>
              <strong>Analytical / performance cookies</strong> — These cookies allow us to
              recognise and count the number of visitors and to see how visitors move around our
              website. This helps us improve how our website works. All information collected is
              aggregated and therefore anonymous.
            </p>
            <p>
              <strong>Functionality cookies</strong> — These cookies are used to recognise you when
              you return to our website. This enables us to personalise our content for you and
              remember your preferences.
            </p>

            <h3>Cookies We Use</h3>
            <table className="ctable">
              <thead>
                <tr>
                  <th>Cookie name</th>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>__cf_bm</td>
                  <td>Strictly necessary</td>
                  <td>Cloudflare bot management</td>
                  <td>30 minutes</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Analytical</td>
                  <td>Google Analytics — distinguishes users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_ga_*</td>
                  <td>Analytical</td>
                  <td>Google Analytics — maintains session state</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Analytical</td>
                  <td>Google Analytics — distinguishes users</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>

            <h3>Third-Party Cookies</h3>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report
              usage statistics of the website. These third parties have their own privacy policies,
              over which we have no control.
            </p>

            <h3>Managing Cookies</h3>
            <p>
              Most web browsers allow you to control cookies through their settings. You can set
              your browser to refuse all or some browser cookies, or to alert you when websites set
              or access cookies. If you disable or refuse cookies, please note that some parts of
              this website may become inaccessible or not function properly.
            </p>
            <p>
              To find out more about cookies, including how to see what cookies have been set and
              how to manage and delete them, visit{" "}
              <a href="https://www.aboutcookies.org">www.aboutcookies.org</a> or{" "}
              <a href="https://www.allaboutcookies.org">www.allaboutcookies.org</a>.
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              This cookie policy was last updated on 26 March 2026. We may update this policy from
              time to time. Any changes will be posted on this page.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>.
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
