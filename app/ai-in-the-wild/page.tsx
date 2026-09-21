import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI in the Wild | Analogiq",
  description:
    "Practical AI insight, and events worth your evening. Our meetup, our talks, and the research behind them. Open to anyone.",
  alternates: { canonical: "https://analogiq.io/ai-in-the-wild" },
  openGraph: {
    title: "AI in the Wild | Analogiq",
    description:
      "Practical AI insight, and events worth your evening. Our meetup, our talks, and the research behind them.",
    url: "https://analogiq.io/ai-in-the-wild",
  },
};

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" />
    <rect x="4" y="21" width="16" height="5" rx="2.5" />
  </svg>
);

export default function AIInTheWildPage() {
  return (
    <main>
      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>AI in the Wild</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">AI in the Wild</p>
              <h1>Practical AI insight, and events worth your evening.</h1>
              <p className="lede">
                What we are learning about applying AI in real businesses: our
                meetup, our talks, and the research behind them. Open to anyone.
              </p>
            </div>
            <div className="hmos" aria-hidden="true">
              <div className="m-ph tall">
                <img src="/img/event-talk-cover.jpg" alt="" />
              </div>
              <div className="m-ph wide">
                <img src="/img/event-meetup-wide.jpg" alt="" />
              </div>
              <div className="m-amber"></div>
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · EVENTS GRID */}
      <section className="sec" id="whats-on">
        <div className="wrap">
          <p className="q">What is on</p>
          <h2 className="big">Insights and events.</h2>
          <div className="evgrid evgrid-2">
            {/* Meetup card */}
            <a
              className="evcard"
              href="https://www.meetup.com/ai-in-the-wild"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="evpic">
                <img src="/img/event-audience1.jpg" alt="" />
                <span className="evtag amber">Meetup</span>
              </div>
              <div className="evbody">
                <p className="evmeta">Monthly · London · Free</p>
                <h3>AI in the Wild, in the room</h3>
                <p>Our monthly meetup for people applying AI for real.</p>
                <span className="igo">Join the group &#8599;</span>
              </div>
            </a>

            {/* Webinar card */}
            <a className="evcard" href="/events/why-ai-pilots-fail" target="_blank" rel="noopener noreferrer">
              <div className="evpic">
                <img src="/img/event-talk-ab.jpg" alt="" />
                <span className="evtag lilac">Webinar</span>
              </div>
              <div className="evbody">
                <p className="evmeta">Online · 45 minutes · On demand</p>
                <h3>Why most AI pilots fail</h3>
                <p>
                  The practical reasons AI projects stall before production, and
                  how to spot them early.
                </p>
                <span className="igo">Register &#8594;</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3 · MONTAGE */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="montage">
            <img src="/img/event-talk-ab.jpg" alt="" loading="lazy" />
            <img src="/img/event-meetup-wide.jpg" alt="" loading="lazy" />
            <img src="/img/event-cinema-full.jpg" alt="" loading="lazy" />
            <img src="/img/event-dinner1.jpg" alt="" loading="lazy" />
            <img src="/img/event-audience1.jpg" alt="" loading="lazy" />
            <img src="/img/event-breakfast.jpg" alt="" loading="lazy" />
            <img src="/img/event-talk-cover.jpg" alt="" loading="lazy" />
            <img src="/img/event-restaurant-group.jpg" alt="" loading="lazy" />
            <img src="/img/event-winebar.jpg" alt="" loading="lazy" />
            <img src="/img/event-meetup1.jpg" alt="" loading="lazy" />
            <img src="/img/event-boardroom.jpg" alt="" loading="lazy" />
            <img src="/img/event-dinner2.jpg" alt="" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 4 · EMAIL SIGN-UP */}
      <section
        className="sec"
        id="signup"
        style={{ background: "var(--ink)", color: "#D6CDEA" }}
      >
        <div className="wrap" style={{ textAlign: "center", maxWidth: 620 }}>
          <h2 className="big" style={{ color: "#fff", margin: "0 auto", textAlign: "center" }}>
            Get updates by email.
          </h2>
          <div className="acts" style={{ justifyContent: "center", marginTop: 26 }}>
            <a
              className="btn"
              href="/contact"
              style={{ background: "#fff", color: "var(--ink)" }}
            >
              Sign me up
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
