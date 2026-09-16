import type { Metadata } from "next";
import { cases } from "@/content/cases";
import "@/app/work-case.css";

export const metadata: Metadata = {
  title: "Our work | Analogiq",
  description: "Real engagements. Measurable outcomes. Platform rebuilds, AI and personalisation, experimentation and the data foundations underneath.",
  alternates: { canonical: "https://analogiq.io/work" },
  openGraph: {
    title: "Our work | Analogiq",
    description: "Real engagements. Measurable outcomes.",
    url: "https://analogiq.io/work",
  },
};

const THUMB: Record<string, string> = {
  "capco-personalisation": "/img/case-capco-personalisation.jpg",
  hsbc: "/img/case-hsbc.jpg",
  wilderness: "/img/case-wilderness.jpg",
  "keith-prowse": "/img/case-keith-prowse.jpg",
  "capco-platform": "/img/case-capco-platform.jpg",
  "experience-golf": "/img/case-experience-golf.jpg",
  sunlife: "/img/case-sunlife.jpg",
  "cystic-fibrosis-trust": "/img/case-cystic-fibrosis-trust.jpg",
  jet2: "/img/case-jet2.jpg",
};

export default function WorkPage() {
  return (
    <main>

      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>Our work</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">What have we delivered?</p>
              <h1>Real engagements. Measurable outcomes.</h1>
              <p className="lede">Platform rebuilds, AI and personalisation, experimentation and the data foundations underneath. Every figure here is one the client has seen.</p>
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

      {/* 2 · WORK GRID */}
      <section className="sec work" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="wgrid">
            {cases.map((c) => (
              <a key={c.slug} href={`/work/${c.slug}`}>
                <img src={THUMB[c.slug]} alt="" />
                <p className="m">
                  <span className={c.ai ? "pill" : "pill est"}>{c.ai ? "AI" : "Digital"}</span>
                  {' '}{c.client} &middot; {c.sector}
                </p>
                <h3>{c.title}</h3>
                <div className="ws">
                  {c.stats.slice(0, 2).map((s, i) => (
                    <div key={i}><b>{s.value}</b><span>{s.label}</span></div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · CTA */}
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
