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

interface CookieTableRow {
  name: string;
  type: string;
  purpose: string;
  duration: string;
}

function CookieTable({ rows }: { rows: CookieTableRow[] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
        <thead>
          <tr style={{ backgroundColor: "#F9FAFB" }}>
            {["Cookie name", "Type", "Purpose", "Duration"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "10px 14px",
                  fontWeight: 600,
                  color: "#111111",
                  borderBottom: "1px solid #E5E7EB",
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} style={{ borderBottom: "1px solid #F3F4F6" }}>
              <td style={{ padding: "10px 14px", color: "#191A23", fontWeight: 500 }}>{row.name}</td>
              <td style={{ padding: "10px 14px", color: "#6B7280" }}>{row.type}</td>
              <td style={{ padding: "10px 14px", color: "#6B7280" }}>{row.purpose}</td>
              <td style={{ padding: "10px 14px", color: "#6B7280", whiteSpace: "nowrap" }}>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="mt-4 text-[17px] leading-[1.65]" style={{ color: "#6B7280" }}>
              How we use cookies and similar technologies on our website.
            </p>
          </div>

          <Section heading="What Are Cookies">
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the website owner. This policy explains how Analogiq Ltd uses cookies on our website.
            </p>
          </Section>

          <Section heading="How We Use Cookies">
            <p>We use cookies for the following purposes:</p>
            <Ul items={[
              "To ensure our website functions correctly",
              "To understand how visitors use our website so we can improve it",
              "To remember your preferences",
              "To measure the effectiveness of our content",
            ]} />
          </Section>

          <Section heading="Types of Cookies We Use">
            <p>
              <strong style={{ color: "#191A23" }}>Strictly necessary cookies</strong> — These cookies are required for the operation of our website. They include, for example, cookies that enable you to use contact forms or navigate between pages. You cannot opt out of these cookies.
            </p>
            <p className="mt-4">
              <strong style={{ color: "#191A23" }}>Analytical / performance cookies</strong> — These cookies allow us to recognise and count the number of visitors and to see how visitors move around our website. This helps us improve how our website works. All information collected is aggregated and therefore anonymous.
            </p>
            <p className="mt-4">
              <strong style={{ color: "#191A23" }}>Functionality cookies</strong> — These cookies are used to recognise you when you return to our website. This enables us to personalise our content for you and remember your preferences.
            </p>
          </Section>

          <Section heading="Cookies We Use">
            <CookieTable rows={[
              { name: "__cf_bm", type: "Strictly necessary", purpose: "Cloudflare bot management", duration: "30 minutes" },
              { name: "_ga", type: "Analytical", purpose: "Google Analytics — distinguishes users", duration: "2 years" },
              { name: "_ga_*", type: "Analytical", purpose: "Google Analytics — maintains session state", duration: "2 years" },
              { name: "_gid", type: "Analytical", purpose: "Google Analytics — distinguishes users", duration: "24 hours" },
            ]} />
          </Section>

          <Section heading="Third-Party Cookies">
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website. These third parties have their own privacy policies, over which we have no control.
            </p>
          </Section>

          <Section heading="Managing Cookies">
            <p>
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
            <p className="mt-3">
              To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: "#D4500F" }}>www.aboutcookies.org</a>{" "}
              or{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: "#D4500F" }}>www.allaboutcookies.org</a>.
            </p>
          </Section>

          <Section heading="Changes to This Policy">
            <p>
              This cookie policy was last updated on 26 March 2026. We may update this policy from time to time. Any changes will be posted on this page.
            </p>
          </Section>

          <Section heading="Contact Us">
            <p>
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="mailto:hello@analogiq.io" style={{ color: "#D4500F" }}>hello@analogiq.io</a>.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
