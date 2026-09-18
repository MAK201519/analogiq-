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
            <a
              href="https://www.linkedin.com/company/analogiqio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, color: "inherit", opacity: 0.7, textDecoration: "none" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
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
