import type { Metadata } from "next";
import "@/app/contact.css";

export const metadata: Metadata = {
  title: "Contact | Analogiq",
  description: "Talk to us about your AI, data or platform challenge.",
  alternates: { canonical: "https://analogiq.io/contact" },
  openGraph: {
    title: "Contact | Analogiq",
    description: "Talk to us about your AI, data or platform challenge.",
    url: "https://analogiq.io/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="phero plain">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Contact</span>
          </nav>
          <p className="q">Contact</p>
          <h1>Contact us.</h1>
        </div>
      </section>

      <div className="wrap">
        <div className="imgband" style={{ margin: '0 0 40px' }}>
          <img src="/img/office-laugh.jpg" alt="" />
        </div>
      </div>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contactGrid" id="cwrap">
            <div id="cf">
              <form
                method="POST"
                action="/.netlify/functions/contact"
                name="contact"
              >
                {/* Honeypot */}
                <p style={{ display: 'none' }}>
                  <label>Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                </p>

                <label htmlFor="cn">Name</label>
                <input type="text" id="cn" name="full-name" required />

                <div className="row2">
                  <div>
                    <label htmlFor="ce">Email</label>
                    <input type="email" id="ce" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="cc">Company / Organisation</label>
                    <input type="text" id="cc" name="organisation" />
                  </div>
                </div>

                <label htmlFor="cm">Message</label>
                <textarea id="cm" name="message" required></textarea>

                <div className="acts" style={{ marginTop: '24px' }}>
                  <button type="submit" className="btn btn-a">
                    Send{' '}
                    <span className="arw">
                      <svg viewBox="0 0 12 12"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="contactPeople">
              <div className="cperson">
                <img src="/img/team-mario-kyriacou.jpg" alt="" />
                <div>
                  <strong>Mario Kyriacou</strong>
                  <span>Co-founder</span>
                  <a href="https://www.linkedin.com/in/mariokyriacou/" className="clink">LinkedIn</a>
                </div>
              </div>
              <div className="cperson">
                <img src="/img/team-steve-renshaw.jpg" alt="" />
                <div>
                  <strong>Steve Renshaw</strong>
                  <span>Co-founder</span>
                  <a href="https://www.linkedin.com/in/steverenshaw/" className="clink">LinkedIn</a>
                </div>
              </div>
              <p className="cmeta">
                <a href="mailto:hello@analogiq.io" style={{ color: 'inherit' }}>hello@analogiq.io</a>
              </p>
              <div className="cwhere">
                <p className="k">Where we are</p>
                <p><strong>London</strong> is where the founders sit and where most client work starts.</p>
                <p>The engineering team is spread across <strong>Romania, Hungary and Bulgaria</strong>. Small, senior and in the same working day as you, without the overheads of a big consultancy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
