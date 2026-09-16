import type { Metadata } from "next";
import { cases } from "@/content/cases";

export const metadata: Metadata = {
  title: "Digital services | Analogiq",
  description:
    "Platform modernisation, composable architecture and digital activation. Sitecore, Uniform and Optimizely, driven by outcomes.",
  alternates: { canonical: "https://analogiq.io/digital-services" },
  openGraph: {
    title: "Digital services | Analogiq",
    description:
      "Platform modernisation, composable architecture and digital activation.",
    url: "https://analogiq.io/digital-services",
  },
};

const DXP_SLUGS = ["capco-platform", "wilderness", "keith-prowse"];

const DXP_THUMB: Record<string, string> = {
  "capco-platform": "/img/case-capco-platform.jpg",
  wilderness: "/img/case-wilderness.jpg",
  "keith-prowse": "/img/case-keith-prowse-hero.jpg",
};

const DXP_PILL: Record<string, string> = {
  "capco-platform": "Sitecore",
  wilderness: "CRO",
  "keith-prowse": "Platform",
};

const DXP_PILL_CLASS: Record<string, string> = {
  "capco-platform": "pill est",
  wilderness: "pill",
  "keith-prowse": "pill",
};

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" />
    <rect x="4" y="21" width="16" height="5" rx="2.5" />
  </svg>
);

export default function DigitalServicesPage() {
  const dxpCases = DXP_SLUGS.map((slug) => cases.find((c) => c.slug === slug)!);

  return (
    <main>
      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Digital services</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">Do you still do digital?</p>
              <h1>
                Yes. It is where we came from, and it is often where the AI has
                to start.
              </h1>
              <p className="lede">
                Analogiq grew out of fifteen years modernising enterprise digital
                platforms. We help marketing teams get more from the tools they
                already own: Sitecore, Uniform, Optimizely and the data
                underneath them.
              </p>
            </div>
            <div className="hmos brand" aria-hidden="true">
              <div className="m-amber tall">{MARK}</div>
              <div className="m-lilac wide">
                <div className="m-dots"></div>
              </div>
              <div className="m-ink">{MARK}</div>
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · DIGITAL ACTIVATION GAP */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="q">What is the problem?</p>
          <h2 className="big">Marketing has changed. Most platforms have not.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Marketing teams are under pressure to move faster and personalise
            more, and AI is raising the bar again. But most digital environments
            cannot support it. Legacy platforms, disconnected systems and manual
            workflows create a gap between what is possible and what actually
            gets delivered. We call it the Digital Activation Gap, and it is
            where performance is lost.
          </p>
          <div className="grid2" style={{ marginTop: 44 }}>
            <div>
              <p className="k">Current reality</p>
              <h3>The platform holds you back</h3>
              <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0 }}>
                <li className="neg">Campaigns take weeks to launch</li>
                <li className="neg">
                  Personalisation is limited or hard to scale
                </li>
                <li className="neg">
                  AI initiatives stall on poor content structure
                </li>
                <li className="neg">Simple changes wait on developers</li>
              </ul>
            </div>
            <div>
              <p className="k">With Analogiq</p>
              <h3>The platform does the work</h3>
              <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0 }}>
                <li className="pos">Campaigns live in days, not weeks</li>
                <li className="pos">
                  Personalisation that scales across channels
                </li>
                <li className="pos">AI in production, not stuck in pilots</li>
                <li className="pos">
                  Marketing teams building without bottlenecks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · PLATFORMS */}
      <section className="sec" style={{ background: "var(--lilac2)" }}>
        <div className="wrap">
          <p className="q">Which platforms?</p>
          <h2 className="big">Built for the platforms you already use.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            We do not replace your platform. We make it work properly.
            Platform-aware, but vendor-neutral. The focus is always outcomes.
          </p>
          <div className="grid3x">
            <div>
              <p className="k">Sitecore</p>
              <h3>More from your existing investment</h3>
              <p>
                Unlock more value from what you own, or define the right path
                forward across XP, XM Cloud and Sitecore AI. Our technical
                partnership with Keith Prowse has run since 2021.
              </p>
            </div>
            <div>
              <p className="k">Uniform</p>
              <h3>Composable, without a rebuild</h3>
              <p>
                Add a composable experience layer across your existing stack, or
                build a modern DXP from the ground up. Content, personalisation
                and front-end delivery in one experience layer, so campaigns
                launch in days and AI reaches production.
              </p>
            </div>
            <div>
              <p className="k">Optimizely</p>
              <h3>Experimentation as a growth engine</h3>
              <p>
                Turn testing and personalisation into a true growth engine rather
                than a side capability that runs when someone has time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · SERVICES DELIVERED */}
      <section className="sec">
        <div className="wrap">
          <p className="q">What do you actually deliver?</p>
          <h2 className="big">From architecture to team enablement.</h2>
          <div className="grid2" style={{ marginTop: 40 }}>
            <div>
              <h3>Website and platform modernisation</h3>
              <p>
                Your platform is too slow to change and too expensive to evolve.
                We make it fast to launch on.
              </p>
            </div>
            <div>
              <h3>Composable and headless architecture</h3>
              <p>
                Composable architecture design, Uniform implementation, and the
                integration work that connects your CMS, data and front end into
                one experience layer.
              </p>
            </div>
            <div>
              <h3>Personalisation and experimentation</h3>
              <p>
                You have the tools and they are underused or disconnected. We
                turn one-off optimisation into continuous improvement.
              </p>
            </div>
            <div>
              <h3>Data and insights</h3>
              <p>
                Data exists but it is not driving decisions. We connect it so
                decisions are backed by evidence, not assumptions.
              </p>
            </div>
            <div>
              <h3>Front-end performance</h3>
              <p>
                Modern frameworks like Next.js for speed, and the performance
                optimisation that keeps core web vitals healthy.
              </p>
            </div>
            <div>
              <h3>UX and product design</h3>
              <p>
                Experiences that do not convert at the rate they should. Design
                measured in outcomes, not aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · WORK CARDS */}
      <section className="sec" style={{ background: "var(--lilac2)" }}>
        <div className="wrap">
          <p className="q">Has it worked?</p>
          <h2 className="big">Platform engineering in practice.</h2>
          <div className="wgrid" style={{ marginTop: 40 }}>
            {dxpCases.map((c) => (
              <a key={c.slug} href={`/work/${c.slug}`}>
                <img src={DXP_THUMB[c.slug]} alt="" />
                <p className="m">
                  <span className={DXP_PILL_CLASS[c.slug]}>
                    {DXP_PILL[c.slug]}
                  </span>{" "}
                  {c.client} &middot; {c.sector}
                </p>
                <h3>{c.title}</h3>
                <div className="ws">
                  {c.stats.slice(0, 2).map((s, i) => (
                    <div key={i}>
                      <b>{s.value}</b>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · CTA */}
      <section className="sec cta2">
        <div className="wrap">
          <div className="ctabox">
            <div className="ctatext">
              <p className="q">Where do I start?</p>
              <h2>If your platform is limiting your marketing, let us fix it.</h2>
              <p>
                It is rarely the technology. It is how it has been designed,
                connected and activated. We will show you where the gaps are. No
                pitch, just a conversation.
              </p>
              <div className="acts">
                <a className="btn btn-a" href="/contact">
                  Contact us{" "}
                  <span className="arw">
                    <svg viewBox="0 0 12 12">
                      <path
                        d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"
                        stroke="#fff"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
                <a className="btn btn-o" href="/work">
                  See our work
                </a>
              </div>
            </div>
            <div className="hmos" aria-hidden="true">
              <div className="m-ph tall">
                <img src="/img/office-corridor.jpg" alt="" />
              </div>
              <div className="m-ph wide">
                <img src="/img/office-openplan.jpg" alt="" />
              </div>
              <div className="m-amber"></div>
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
