import type { Metadata } from "next";
import "@/app/approach.css";

export const metadata: Metadata = {
  title: "Approach | Analogiq",
  description: "Outcome first. Then the data it needs. Then the smallest build that proves it.",
  alternates: { canonical: "https://analogiq.io/approach" },
  openGraph: {
    title: "Approach | Analogiq",
    description: "Outcome first. Then the data it needs. Then the smallest build that proves it.",
    url: "https://analogiq.io/approach",
  },
};

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" />
    <rect x="4" y="21" width="16" height="5" rx="2.5" />
  </svg>
);

export default function ApproachPage() {
  return (
    <main>

      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Approach</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">How do you actually make AI work in a business like ours?</p>
              <h1>Outcome first. Then the data it needs. Then the smallest build that proves it.</h1>
              <p className="lede">We agree what success means, get the data that one job needs, and build the smallest thing that proves it.</p>
            </div>
            <div className="hmos brand" aria-hidden="true">
              <div className="m-amber tall">{MARK}</div>
              <div className="m-lilac wide"><div className="m-dots"></div></div>
              <div className="m-ink">{MARK}</div>
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · OUTCOME CHAIN */}
      <section className="sec" id="outcome">
        <div className="wrap">
          <p className="q">What comes first?</p>
          <h2 className="big">The outcome. Everything else follows from it.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>Every engagement runs this chain, in this order. The technology, if there is any, is decided fourth.</p>
          <ol className="chain">
            <li><h3>Business problem</h3><p>What is slow, expensive or manual, in the words of the people doing the work.</p></li>
            <li><h3>Measurable outcome</h3><p>What better means as a number, agreed before anything is built. Ideas ranked for value, data readiness and risk.</p></li>
            <li><h3>Data required</h3><p>The minimum data that outcome needs, and whether it can be trusted for that job.</p></li>
            <li><h3>Technique</h3><p>A model, a pipeline, a statistical analysis, or no AI at all. Chosen from the problem backwards.</p></li>
            <li><h3>Evaluation</h3><p>Tested against your real cases, on the measure agreed in step two.</p></li>
            <li><h3>Deployment</h3><p>Live in your estate, at the level of autonomy the evidence supports.</p></li>
          </ol>
        </div>
      </section>

      {/* 3 · SIX FAILURES */}
      <section className="sec fail">
        <div className="wrap">
          <p className="q">Why do most AI projects fail?</p>
          <h2 className="big">Six common reasons.</h2>
          <ol className="fails">
            <li><span className="n">01</span><div><h3>Planned for the business you wish you had</h3><span className="fix">We build for the one you have, with the data you have today.</span></div></li>
            <li><span className="n">02</span><div><h3>Automating a process that was already broken</h3><span className="fix">We map how the work really runs before we automate it.</span></div></li>
            <li><span className="n">03</span><div><h3>No agreed way to measure success</h3><span className="fix">We agree the measure before we start.</span></div></li>
            <li><span className="n">04</span><div><h3>Only one side of the business in the room</h3><span className="fix">Business, marketing and technology, together from day one.</span></div></li>
            <li><span className="n">05</span><div><h3>A demo instead of a test</h3><span className="fix">Tested on your real cases before anyone sees it.</span></div></li>
            <li><span className="n">06</span><div><h3>Handed over with nothing to hand over</h3><span className="fix">You get documentation, monitoring and a team that can run it.</span></div></li>
          </ol>
        </div>
      </section>

      {/* 4 · DATA + CAMPAIGN INTELLIGENCE */}
      <section className="sec marked" id="data" style={{ background: 'var(--lilac2)' }}>
        <div className="wrap">
          <p className="q">What about the data?</p>
          <h2 className="big">Enough trustworthy data for the job. Not perfect data for everything.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>We make the data that one job needs trustworthy, then widen. We do not clean everything first.</p>

          <p className="q" style={{ marginTop: '44px' }}>What does ready mean?</p>
          <h3 style={{ fontSize: 'clamp(22px,2.4vw,28px)', letterSpacing: '-0.03em', maxWidth: '34ch' }}>Six questions we ask about your data before we build anything.</h3>
          <div className="grid3x" style={{ marginTop: '24px' }}>
            <div><h3 style={{ fontSize: '18px', letterSpacing: '-0.02em', marginBottom: '8px' }}>Where did it come from, and who owns it?</h3><p>Data recorded for one purpose often misleads when used for another.</p></div>
            <div><h3 style={{ fontSize: '18px', letterSpacing: '-0.02em', marginBottom: '8px' }}>Is it recent enough for the decision?</h3><p>A weekly export is no use to a system that has to answer today.</p></div>
            <div><h3 style={{ fontSize: '18px', letterSpacing: '-0.02em', marginBottom: '8px' }}>Who is allowed to see it?</h3><p>Permissions have to survive the journey into the system, not get lost on the way.</p></div>
            <div><h3 style={{ fontSize: '18px', letterSpacing: '-0.02em', marginBottom: '8px' }}>Have you ever recorded the thing you want to predict?</h3><p>You cannot forecast churn if nobody has ever written down who churned.</p></div>
            <div><h3 style={{ fontSize: '18px', letterSpacing: '-0.02em', marginBottom: '8px' }}>Does it include the awkward cases, or only the easy ones?</h3><p>The difficult cases are the ones the system will be judged on.</p></div>
            <div><h3 style={{ fontSize: '18px', letterSpacing: '-0.02em', marginBottom: '8px' }}>Does it actually describe the decision you are making?</h3><p>Data about a neighbouring decision looks similar and gives the wrong answer.</p></div>
          </div>

          <div className="split" style={{ marginTop: '44px' }}>
            <div>
              <p style={{ fontSize: '12px', letterSpacing: '.11em', textTransform: 'uppercase', color: 'var(--purple)', fontWeight: 700, marginBottom: '12px' }}>Our prototype</p>
              <h3 style={{ fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.035em', marginBottom: '16px' }}>Campaign Intelligence</h3>
              <p className="lede">Campaign Intelligence is our working prototype of what the answer looks like once marketing data is joined: one model you can question in plain language, with the numbers behind the answer.</p>
              <p className="lede" style={{ marginTop: '14px' }}>It was built on synthetic data to prove the output. Joining your real systems, and hardening that for production, is the larger part of the work. It is done per client, not bought off a shelf.</p>
            </div>
            <div className="ciViz" aria-label="Six marketing sources joined into one model you can question in plain language">
              <p className="ciLbl">Six sources, never designed to talk to each other</p>
              <div className="ciSrc">
                <span>Google Ads</span><span>Meta</span><span>GA4</span><span>Klaviyo</span><span>Shopify</span><span>Affiliates</span>
              </div>
              <svg className="ciFlow" viewBox="0 0 560 56" aria-hidden="true">
                <path d="M46 2 C 46 34, 280 22, 280 54" fill="none" stroke="#8B6BE0" strokeWidth="1.5" opacity=".55"/>
                <path d="M132 2 C 132 34, 280 22, 280 54" fill="none" stroke="#8B6BE0" strokeWidth="1.5" opacity=".55"/>
                <path d="M218 2 C 218 30, 280 24, 280 54" fill="none" stroke="#8B6BE0" strokeWidth="1.5" opacity=".55"/>
                <path d="M342 2 C 342 30, 280 24, 280 54" fill="none" stroke="#8B6BE0" strokeWidth="1.5" opacity=".55"/>
                <path d="M428 2 C 428 34, 280 22, 280 54" fill="none" stroke="#8B6BE0" strokeWidth="1.5" opacity=".55"/>
                <path d="M514 2 C 514 34, 280 22, 280 54" fill="none" stroke="#8B6BE0" strokeWidth="1.5" opacity=".55"/>
              </svg>
              <div className="ciCore">One model, on your own definitions of spend and conversion</div>
              <div className="ciArrow" aria-hidden="true">
                <svg viewBox="0 0 12 26"><path d="M6 0v20M1.5 15.5L6 20l4.5-4.5" stroke="#C79A3A" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ciAsk">
                <p className="ciQ"><span className="ciCaret"></span>Why did email revenue drop last month?</p>
                <div className="ciAns">
                  <p>Sends were down 18 per cent after the Black Friday list suppression was left on. Open rate actually improved, so the drop is volume, not engagement.</p>
                  <div className="ciFigs">
                    <div><b>&minus;18%</b><span>emails sent</span></div>
                    <div><b>+4%</b><span>open rate</span></div>
                    <div><b>&minus;&#163;11.4k</b><span>attributed revenue</span></div>
                  </div>
                  <p className="ciFoot">Prototype output, shown on synthetic data. Joining your real sources is the engineering work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · THE THIN LINE */}
      <section className="sec marked" id="implementation">
        <div className="wrap">
          <p className="q">How do you build it?</p>
          <h2 className="big">The thin line.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>Define success. Build the smallest end-to-end thing that proves it, on the data you have today. Evaluate it against real cases. Iterate. Then widen: another source, another process, more autonomy, each on top of something already running. Live in weeks, not months, because the first line is narrow on purpose.</p>
          <div className="thin" style={{ marginTop: '26px' }}>
            <svg viewBox="0 0 980 250" role="img" aria-label="Diagram: candidate options narrowed to one, built as a thin line from A to B in production, then widened">
              <text x="0" y="20" fontSize="12.5" fontWeight="700" fill="#5B2BD9" letterSpacing="1.6">DECIDE</text>
              <text x="336" y="20" fontSize="12.5" fontWeight="700" fill="#5B2BD9" letterSpacing="1.6">BUILD</text>
              <text x="672" y="20" fontSize="12.5" fontWeight="700" fill="#5B2BD9" letterSpacing="1.6">RUN</text>
              <line x1="0" y1="34" x2="980" y2="34" stroke="#E4E0EE"/>
              <line x1="324" y1="34" x2="324" y2="238" stroke="#E4E0EE" strokeDasharray="3 5"/>
              <line x1="660" y1="34" x2="660" y2="238" stroke="#E4E0EE" strokeDasharray="3 5"/>

              <line x1="8" y1="86" x2="176" y2="86" stroke="#C9C2DA" strokeWidth="2" strokeDasharray="5 5"/>
              <text x="186" y="91" fontSize="13" fill="#9A93A8">not yet</text>
              <line x1="8" y1="188" x2="176" y2="188" stroke="#C9C2DA" strokeWidth="2" strokeDasharray="5 5"/>
              <text x="186" y="193" fontSize="13" fill="#9A93A8">not with AI</text>
              <line x1="8" y1="222" x2="176" y2="222" stroke="#C9C2DA" strokeWidth="2" strokeDasharray="5 5"/>
              <text x="186" y="227" fontSize="13" fill="#9A93A8">a process problem</text>
              <line x1="8" y1="137" x2="324" y2="137" stroke="#5B2BD9" strokeWidth="4"/>
              <text x="8" y="122" fontSize="13" fontWeight="700" fill="#17111F">worth building</text>

              <line x1="324" y1="137" x2="660" y2="137" stroke="#5B2BD9" strokeWidth="4"/>
              <circle cx="392" cy="137" r="18" fill="#241041"/><text x="392" y="143" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">A</text>
              <circle cx="592" cy="137" r="18" fill="#241041"/><text x="592" y="143" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">B</text>

              <text x="492" y="182" textAnchor="middle" fontSize="13.5" fill="#655D77">One process. In production.</text>
              <text x="492" y="201" textAnchor="middle" fontSize="13.5" fill="#655D77">Weeks, not eighteen months.</text>

              <line x1="660" y1="137" x2="972" y2="137" stroke="#5B2BD9" strokeWidth="4"/>
              <line x1="700" y1="118" x2="972" y2="118" stroke="#5B2BD9" strokeWidth="4" opacity=".72"/>
              <line x1="762" y1="99" x2="972" y2="99" stroke="#5B2BD9" strokeWidth="4" opacity=".48"/>
              <line x1="824" y1="80" x2="972" y2="80" stroke="#5B2BD9" strokeWidth="4" opacity=".26"/>
              <text x="820" y="182" textAnchor="middle" fontSize="13.5" fill="#655D77">Another source. Another process.</text>
              <text x="820" y="201" textAnchor="middle" fontSize="13.5" fill="#655D77">More autonomy, as the evaluation earns it.</text>
            </svg>
            <p style={{ marginTop: '20px', fontSize: '15.5px', color: 'var(--muted)', borderLeft: '3px solid var(--amber)', paddingLeft: '14px', maxWidth: '60ch' }}>The three rejected paths on the left are the analogue intelligence. Anyone can build the line. Knowing which line to build, and which three to leave alone, is the part you are paying for.</p>
          </div>
        </div>
      </section>

      {/* 6 · WHY CHOOSE US */}
      <section className="sec" id="why" style={{ background: 'var(--ink)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <p className="q" style={{ color: '#C4B5FD', textAlign: 'center' }}>Why choose us?</p>
          <h2 className="big" style={{ color: '#fff', margin: '14px auto 0', textAlign: 'center', maxWidth: '22ch' }}>Anyone can build the line.</h2>
          <p className="lede" style={{ color: '#B9AEC9', margin: '18px auto 0', textAlign: 'center' }}>Knowing which line to build, and which ones to leave alone, is what you pay us for.</p>
          <div className="acts" style={{ justifyContent: 'center', marginTop: '30px' }}>
            <a className="btn" href="/how-we-build" style={{ background: '#fff', color: 'var(--ink)' }}>See the engineering</a>
          </div>
        </div>
      </section>

      {/* 7 · CTA */}
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
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
