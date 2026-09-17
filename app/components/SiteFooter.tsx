const MARK = (
  <svg width="30" height="28" viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="4.4" rx="2.2" fill="#fff" />
    <rect x="4" y="20.5" width="17" height="4.4" rx="2.2" fill="#FFB627" />
  </svg>
);

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="logo" style={{ marginBottom: 16 }}>
              {MARK}
              <span className="word" style={{ color: "#fff" }}>
                analogiq
              </span>
            </div>
            <p style={{ color: "#FFB627", fontWeight: 600, fontSize: 16, marginBottom: 12 }}>
              Analogue intelligence.
            </p>
            <p style={{ maxWidth: "34ch" }}>The AI consultancy for businesses with real data.</p>
          </div>

          <div>
            <h4>What we do</h4>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/approach">Approach</a></li>
              <li><a href="/how-we-build">How we build</a></li>
              <li><a href="/digital-services">DXP &amp; Platforms</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/about#people">People</a></li>
              <li><a href="/work">Our work</a></li>
              <li><a href="/about#careers">Careers</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4>AI in the Wild</h4>
            <ul>
              <li><a href="/ai-in-the-wild">Meetup</a></li>
              <li><a href="/ai-in-the-wild">Events</a></li>
              <li><a href="/ai-in-the-wild">Articles</a></li>
            </ul>
          </div>
        </div>

        <div className="fbot">
          <span>&copy; 2026 Analogiq. All rights reserved.</span>{" "}
          <span className="ftag">The AI consultancy for businesses with real data.</span>{" "}
          <span className="flegal">
            <a href="/privacy-policy">Privacy</a> &middot;{" "}
            <a href="/cookie-policy">Cookies</a> &middot;{" "}
            <a href="/modern-slavery">Modern Slavery</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
