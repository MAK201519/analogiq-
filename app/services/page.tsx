import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Analogiq",
  description: "AI, data and the platforms underneath them. Strategy, data, delivery and enablement from the same team.",
  alternates: { canonical: "https://analogiq.io/services" },
  openGraph: {
    title: "Services | Analogiq",
    description: "AI, data and the platforms underneath them. Strategy, data, delivery and enablement from the same team.",
    url: "https://analogiq.io/services",
  },
};

const ARW = (
  <span className="arw">
    <svg viewBox="0 0 12 12"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#5B2BD9" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

export default function ServicesPage() {
  return (
    <main>

      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Services</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">What do you do?</p>
              <h1>AI, data and the platforms underneath them.</h1>
              <p className="lede">Strategy, data, delivery and enablement from the same team, from the first workshop to the handover.</p>
            </div>
            <div className="hmos brand" aria-hidden="true">
              <div className="m-amber tall"><svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg></div>
              <div className="m-lilac wide"><div className="m-dots"></div></div>
              <div className="m-ink"><svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg></div>
              <div className="m-purple"><svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · WHO IS THIS FOR */}
      <section className="sec" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <p className="q">Who is this built for?</p>
          <h2 className="big">Businesses with real data, and no AI team of their own.</h2>
          <div className="forbox">
            <ul className="ticks">
              <li>You know AI could change something in your business, and you cannot yet say what, or where to start.</li>
              <li>You have years of data across systems that were never designed to talk to each other.</li>
              <li>You have seen the demos. You have not seen anything reach production.</li>
            </ul>
            <div className="forpic"><img src="/img/office-huddle.jpg" alt="" /></div>
          </div>
        </div>
      </section>

      {/* 3 · FOUR DISCIPLINES */}
      <section className="sec">
        <div className="wrap">
          <p className="q">What do you hire us for?</p>
          <h2 className="big">Four disciplines. One team, start to finish.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>Most firms offer one or two of these. We cover all four, and you work with the same people from the first workshop to the handover.</p>
          <div className="cards" style={{ '--n': 4 } as React.CSSProperties}>
            <div>
              <p className="k">Strategy</p>
              <h3>What is worth building, and what is not.</h3>
              <p>Every idea scored for value, data readiness and risk, with the reasons written down.</p>
              <a className="route" href="/approach">How we decide {ARW}</a>
            </div>
            <div>
              <p className="k">Data and engineering</p>
              <h3>Enough trustworthy data, in your estate.</h3>
              <p>Readiness, the sources the outcome needs, permissions, tenancy and cost control from the first build.</p>
              <a className="route" href="/how-we-build#estate">Where it runs {ARW}</a>
            </div>
            <div>
              <p className="k">Delivery</p>
              <h3>Working systems, not pilots.</h3>
              <p>Search, extraction, prediction, analysis, assistants, automation and agents where the task fits. Evaluated before demo.</p>
              <a className="route" href="/how-we-build#techniques">The patterns we use {ARW}</a>
            </div>
            <div>
              <p className="k">Enablement</p>
              <h3>Your team owns it after we leave.</h3>
              <p>Training by role, pattern libraries, internal champions and a run-book rather than a demo video.</p>
              <a className="route" href="/how-we-build#estate">What handover looks like {ARW}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · FOUR SERVICES */}
      <section className="sec marked" style={{ background: 'var(--lilac2)' }}>
        <div className="wrap">
          <p className="q">What else can we do for you?</p>
          <h2 className="big">Four services.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>Each is a piece of work in its own right. None needs you to start from a blank page with us.</p>
          <div className="cards" style={{ '--n': 2 } as React.CSSProperties}>
            <div>
              <p className="k">AI evaluation and assurance</p>
              <h3>Independent testing of what you already have.</h3>
              <p>For businesses with an AI tool in place that nobody has proved works.</p>
              <ul className="bul">
                <li>A test set built from your real cases</li>
                <li>Performance measured by failure type</li>
                <li>Where a person still needs to be in the loop</li>
              </ul>
              <a className="route" href="/how-we-build#evaluation">How we evaluate {ARW}</a>
            </div>
            <div>
              <p className="k">Prototype to production</p>
              <h3>Hardening the proof of concept you built yourselves.</h3>
              <p>For teams with something that works on a laptop and needs to run in the business.</p>
              <ul className="bul">
                <li>Reliability, security and permissions</li>
                <li>Evaluation and monitoring</li>
                <li>The integrations it needs to do real work</li>
              </ul>
              <a className="route" href="/how-we-build#evaluation">How it reaches production {ARW}</a>
            </div>
            <div>
              <p className="k">Decision intelligence</p>
              <h3>Fragmented data, turned into evidence you can act on.</h3>
              <p>For businesses without a data team of their own.</p>
              <ul className="bul">
                <li>What changed, and what it is worth</li>
                <li>Where the opportunity is and what is unusual</li>
                <li>What is likely to happen next</li>
              </ul>
              <a className="route" href="/approach#data">Why the data comes first {ARW}</a>
            </div>
            <div>
              <p className="k">Experimentation and causal measurement</p>
              <h3>Did acting on it actually change the business?</h3>
              <p>For anyone who has been shown a before-and-after and did not believe it.</p>
              <ul className="bul">
                <li>Controlled tests, not before-and-after</li>
                <li>Whether the system caused the outcome</li>
                <li>The performance number tied to the business number</li>
              </ul>
              <a className="route" href="/work">See the results {ARW}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · THREE OUTCOMES + STATS */}
      <section className="sec marked">
        <div className="wrap">
          <p className="q">What do we actually sell?</p>
          <h2 className="big">Three outcomes. Agreed and measured before anything is built.</h2>
          <div className="cards" style={{ '--n': 3, marginTop: '36px' } as React.CSSProperties}>
            <div>
              <p className="k">Outcome 01</p>
              <h3>Revenue and growth</h3>
              <p>Who is likely to buy, what they want next, and when to reach out. Your team makes the final call.</p>
            </div>
            <div>
              <p className="k">Outcome 02</p>
              <h3>Efficiency and cost to serve</h3>
              <p>The same documents, questions and reports, automated without removing the judgement.</p>
            </div>
            <div>
              <p className="k">Outcome 03</p>
              <h3>Capability and control</h3>
              <p>The second and third project are the hard part. Data sorted, governance used, people trained. You need us less over time.</p>
            </div>
          </div>
          <div className="stat3">
            <div><b>12:1</b><span>programme ROI for a global commercial bank</span></div>
            <div><b>&pound;1M+</b><span>attributed sales from AI personalisation at Capco</span></div>
            <div><b>2x</b><span>conversion rate at Wilderness Destinations</span></div>
          </div>
          <div className="acts" style={{ marginTop: '22px' }}>
            <a className="route" href="/work">All nine case studies {ARW}</a>
          </div>
        </div>
      </section>

      {/* 6 · FIVE WAYS IN */}
      <section className="sec" id="ways" style={{ background: 'var(--lilac2)' }}>
        <div className="wrap">
          <p className="q">How do you start?</p>
          <h2 className="big">Five ways in.</h2>
          <div className="cards ways" style={{ '--n': 5, marginTop: '36px' } as React.CSSProperties}>
            <div>
              <p className="k">Weeks</p>
              <h3>Opportunity assessment</h3>
              <p>Time with your people and your data. Where AI will make a difference, what it is worth, and where to start.</p>
            </div>
            <div>
              <p className="k">Weeks</p>
              <h3>The first thin line</h3>
              <p>One use case, end to end, in production, inside today&apos;s constraints.</p>
            </div>
            <div>
              <p className="k">Ongoing</p>
              <h3>Build capability</h3>
              <p>More sources, more features, more autonomy, each on top of something already running.</p>
            </div>
            <div>
              <p className="k">Programme</p>
              <h3>Enablement programme</h3>
              <p>The tools and training to run it in-house, with us alongside on what to improve next.</p>
            </div>
            <div>
              <p className="k">Ongoing</p>
              <h3>Retained partnership</h3>
              <p>Analysis, strategy and delivery against a shared roadmap.</p>
            </div>
          </div>
          <div className="acts" style={{ marginTop: '28px' }}>
            <a className="btn btn-o" href="/how-we-build#engagement">What an engagement looks like {ARW}</a>
          </div>
        </div>
      </section>

      {/* 7 · STAKEHOLDER QUESTIONS */}
      <section className="sec">
        <div className="wrap">
          <p className="q">What will the people around you say?</p>
          <h2 className="big">Commonly asked questions.</h2>
          <div className="cards" style={{ '--n': 3, marginTop: '36px' } as React.CSSProperties}>
            <div>
              <p className="k">Your CTO</p>
              <h3>&ldquo;Is this going to live in our estate, under our controls?&rdquo;</h3>
              <p>Yes. Your identity and access controls, your cloud, a deployment pattern chosen to meet your security and residency requirements.</p>
            </div>
            <div>
              <p className="k">Your finance director</p>
              <h3>&ldquo;How will we know it worked?&rdquo;</h3>
              <p>A measurable outcome agreed before anything is built, and reported against, not asserted.</p>
            </div>
            <div>
              <p className="k">Your team</p>
              <h3>&ldquo;Is this being done to us, or with us?&rdquo;</h3>
              <p>With. Workshops are with the people doing the work, and the handover assumes your team owns it afterwards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · CTA */}
      <section className="sec cta2">
        <div className="wrap">
          <div className="ctabox">
            <div className="ctatext">
              <p className="q">Where do I start?</p>
              <h2>Tell us what is slow, expensive or manual.</h2>
              <p>We will tell you honestly whether AI is the answer, what form it would take, and what a first build looks like. If the honest answer is not yet, we will say that too.</p>
              <div className="acts">
                <a className="btn btn-a" href="/contact">Contact us <span className="arw"><svg viewBox="0 0 12 12"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span></a>
                <a className="btn btn-o" href="/work">See our work</a>
              </div>
            </div>
            <div className="hmos" aria-hidden="true">
              <div className="m-ph tall"><img src="/img/office-corridor.jpg" alt="" /></div>
              <div className="m-ph wide"><img src="/img/office-desks.jpg" alt="" /></div>
              <div className="m-amber"></div>
              <div className="m-purple"><svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
