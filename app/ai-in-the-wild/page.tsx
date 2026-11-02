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
          <div className="evgrid evgrid-2" style={{ marginTop: 36 }}>
            {/* Brighton meetup card: added 2026-11-02 */}
            <a
              className="evcard"
              href="https://www.meetup.com/ai-in-the-wild-brighton/events/316993112/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="evpic">
                <img src="/img/event-brighton.jpg" alt="" style={{ objectPosition: "center 70%" }} />
                <span className="evtag amber">Meetup</span>
              </div>
              <div className="evbody">
                <p className="evmeta">Thu 19 Nov · 6pm to 9pm · The Walrus, Brighton</p>
                <h3>AI in the Wild Brighton</h3>
                <p>
                  Our first evening in Brighton. Short talks on how AI is actually
                  being used in marketing teams, food when you arrive, drinks after.
                </p>
                <span className="igo">Reserve a place &#8599;</span>
              </div>
            </a>

            {/* B2B workshop card: uncommented and updated 2026-11-02.
                Image changed to event-b2b-mandeville.jpg, tag to lilac, meta and body updated.
                Moved to second (date order: 1 Dec) 2026-11-02. */}
            <a
              className="evcard"
              href="/events/b2b-agentic-workforce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="evpic">
                <img src="/img/event-b2b-mandeville.jpg" alt="" />
                <span className="evtag lilac">Workshop</span>
              </div>
              <div className="evbody">
                <p className="evmeta">Tue 1 Dec · 2.00 to 5.00 · The Mandeville, Marylebone</p>
                <h3>Scaling B2B marketing with the agentic workforce</h3>
                <p>
                  A hands-on afternoon for B2B marketing leaders on which day-to-day
                  tasks an agent can take, with a human still in the loop.
                </p>
                <span className="igo">Request a seat &#8594;</span>
              </div>
            </a>

            {/* From search to suitcase card: added 2026-11-02 */}
            <a
              className="evcard"
              href="/events/from-search-to-suitcase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="evpic">
                <img src="/img/event-from-search-to-suitcase-venue-1.jpg" alt="" />
                <span className="evtag ink">Breakfast</span>
              </div>
              <div className="evbody">
                <p className="evmeta">Tue 8 Dec · 8.30 to 10.30 · Duck and Waffle, Bishopsgate</p>
                <h3>From search to suitcase</h3>
                <p>
                  AI agents in travel, now to 2030. A morning with marketing peers
                  from across the industry.
                </p>
                <span className="igo">Request a seat &#8594;</span>
              </div>
            </a>

            {/* Meetup card: moved to fourth (no date, evergreen) 2026-11-02 */}
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

            {/* Webinar card: commented out 2026-11-02, date (21 October) has passed. */}
            {/*
            <a className="evcard" href="/events/why-ai-pilots-fail">
              <div className="evpic">
                <img src="/img/event-webinar-tile.png" alt="" />
                <span className="evtag lilac">Webinar</span>
              </div>
              <div className="evbody">
                <p className="evmeta">Live online · 21 October · 2pm UK · 45 min</p>
                <h3>Why most AI pilots fail</h3>
                <p>
                  The practical reasons AI projects stall before production, and
                  how to spot them early.
                </p>
                <span className="igo">Register &#8594;</span>
              </div>
            </a>
            */}
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
