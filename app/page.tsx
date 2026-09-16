import type { Metadata } from "next";
import "@/app/home.css";
import ChallengeTabs from "@/app/components/home/ChallengeTabs";
import { cases } from "@/content/cases";

export const metadata: Metadata = {
  title: "Analogiq | What should AI actually do in your business?",
  description: "An AI consultancy for businesses with real data and no AI team of their own. Strategy, engineering and measurement from one team.",
  alternates: { canonical: "https://analogiq.io/" },
  openGraph: {
    title: "Analogiq | What should AI actually do in your business?",
    description: "An AI consultancy for businesses with real data and no AI team of their own.",
    url: "https://analogiq.io",
  },
};

export default function HomePage() {
  return (
    <main>

      {/* SVG defs for dot patterns */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <pattern id="tetp" width="72" height="64" patternUnits="userSpaceOnUse">
            <circle cx="36" cy="12" r="2.6" fill="#fff" opacity=".13" />
            <circle cx="26" cy="28" r="2.6" fill="#fff" opacity=".13" /><circle cx="46" cy="28" r="2.6" fill="#fff" opacity=".13" />
            <circle cx="16" cy="44" r="2.6" fill="#fff" opacity=".13" /><circle cx="36" cy="44" r="2.6" fill="#fff" opacity=".13" /><circle cx="56" cy="44" r="2.6" fill="#fff" opacity=".13" />
          </pattern>
          <pattern id="tetl" width="72" height="64" patternUnits="userSpaceOnUse">
            <circle cx="36" cy="12" r="2.6" fill="#5B2BD9" opacity=".3" />
            <circle cx="26" cy="28" r="2.6" fill="#5B2BD9" opacity=".3" /><circle cx="46" cy="28" r="2.6" fill="#5B2BD9" opacity=".3" />
            <circle cx="16" cy="44" r="2.6" fill="#5B2BD9" opacity=".3" /><circle cx="36" cy="44" r="2.6" fill="#5B2BD9" opacity=".3" /><circle cx="56" cy="44" r="2.6" fill="#5B2BD9" opacity=".3" />
          </pattern>
        </defs>
      </svg>

      {/* 1 · HERO */}
      <section className="hero"><div className="wrap">
        <div className="heroGrid">
          <div>
            <p className="q">Data and AI consultancy</p>
            <h1>AI that fits your business, <em>not the other way around.</em></h1>
            <p className="lede">Your business is unlike any other. We build AI solutions tailored to your proprietary data and ways of working, giving you an advantage your competitors cannot replicate.</p>
            <div className="acts">
              <a className="btn btn-a" href="/contact">Contact us <span className="arw"><svg viewBox="0 0 12 12"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span></a>
              <a className="btn-o btn" href="/work">See our work</a>
            </div>
          </div>
          <div className="mosaic" aria-hidden="true">
            <div className="m1"><img src="/img/office-huddle.jpg" alt="" /></div>
            <div className="m2"></div>
            <div className="m3"></div>
            <div className="m4 pat"><svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#tetl)" /></svg></div>
            <div className="m5"><img src="/img/office-desks.jpg" alt="" /></div>
          </div>
        </div>
      </div></section>

      {/* 2 · CLIENTS */}
      <div className="clients" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="wrap vwrap" style={{ position: 'relative', zIndex: 2 }}>
          <p className="lbl">The platforms we work on</p>
          <div className="vrows">
            <ul className="vendorlogos">
              <li><img src="/img/logo-microsoft.svg" alt="Microsoft" /></li>
              <li><img src="/img/logo-azure.svg" alt="Azure" /></li>
              <li><img src="/img/logo-aws.svg" alt="AWS" /></li>
              <li><img src="/img/logo-google.svg" alt="Google" /></li>
              <li><img src="/img/logo-openai.svg" alt="OpenAI" /></li>
              <li><img src="/img/logo-meta.svg" alt="Meta" /></li>
            </ul>
            <ul className="vendorlogos">
              <li><img src="/img/logo-sitecore.svg" alt="Sitecore" /></li>
              <li><img src="/img/logo-optimizely.svg" alt="Optimizely" /></li>
              <li><img src="/img/logo-uniform.svg" alt="Uniform" /></li>
              <li><img src="/img/logo-contentful.svg" alt="Contentful" /></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3 · WHO IS THIS FOR */}
      <section className="sec"><div className="wrap">
        <p className="q">Who is this built for?</p>
        <h2 className="big">Businesses with real data, and no AI team of their own.</h2>
        <div className="forPanel">
          <ul className="forList">
            <li>You know AI could change something in your business, and you cannot say what, or where to start.</li>
            <li>You have years of data across systems that were never designed to talk to each other.</li>
            <li>You have seen demos. You have not seen anything reach production.</li>
          </ul>
          <img src="/img/office-laugh.jpg" alt="" />
        </div>
      </div></section>

      {/* 4 · CHALLENGES */}
      <section className="sec" id="solve"><div className="wrap">
        <p className="q">What are we built to solve?</p>
        <h2 className="big">The impact we deliver.</h2>
        <p className="lede" style={{ marginTop: '18px' }}>Artificial intelligence offers endless possibilities. The real challenge is moving from believing AI could add value, to understanding exactly where it will, what form it should take, and how to get there.</p>
        <p className="fam">Problems we can solve</p>
        <ChallengeTabs />
      </div></section>

      {/* 5 · WORK */}
      <section className="sec work" id="work"><div className="wrap">
        <p className="q">What have we built?</p>
        <h2 className="big">Systems in production, not pilots.</h2>
        <p className="lede" style={{ marginTop: '18px' }}>Each started as a thin line inside the client&apos;s real constraints and grew. Each carries two figures: what changed, and where a person stayed in the loop.</p>
        <div className="wgrid">
          {cases.filter(c => ['capco-platform','hsbc','wilderness'].includes(c.slug)).map(c => (
            <a key={c.slug} href={`/work/${c.slug}`}>
              <img src={`/img/case-${c.slug}.jpg`} alt="" />
              <p className="m"><span className={c.ai ? "pill" : "pill est"}>{c.ai ? "AI" : "Digital"}</span> {c.client} &middot; {c.sector}</p>
              <h3>{c.title}</h3>
              <div className="ws">{c.stats.slice(0, 2).map((s, i) => (
                <div key={i}><b>{s.value}</b><span>{s.label}</span></div>
              ))}</div>
            </a>
          ))}
        </div>
        <p style={{ marginTop: '30px' }}><a href="/work" style={{ fontWeight: 600 }}>All our work</a></p>
      </div></section>

      {/* 6 · APPROACH POINTER */}
      <section className="sec fail" style={{ paddingTop: 'clamp(48px,5vw,72px)', paddingBottom: 'clamp(48px,5vw,72px)' }}><div className="wrap">
        <div className="ptr">
          <div>
            <p className="q">Why does most of this not work?</p>
            <h2 className="big" style={{ maxWidth: '24ch' }}>Most AI work never reaches production. The model is almost never the reason.</h2>
          </div>
          <div>
            <p className="lede">There are six ways these projects die, and we have watched all of them. The way we work is built to avoid each one.</p>
            <div className="acts" style={{ marginTop: '26px' }}><a className="btn" href="/approach">Our approach</a></div>
          </div>
        </div>
      </div></section>

      {/* 7 · WHAT WE SELL */}
      <section className="sec" id="sell" style={{ background: 'var(--lilac2)' }}><div className="wrap">
        <p className="q">What do we actually sell?</p>
        <h2 className="big">Three outcomes. Five ways in.</h2>
        <p className="lede" style={{ marginTop: '18px' }}>Every engagement starts with a commercial outcome, agreed and measured before anything is built.</p>

        <div className="cards3">
          <div className="card"><span className="n">Outcome 01</span><h3>Revenue and growth</h3><p>Who is likely to buy, what they want next, and when to reach out. And when they arrive, making sure they can find it. Your team makes the final call.</p><span className="lk">Revenue and growth</span></div>
          <div className="card"><span className="n">Outcome 02</span><h3>Efficiency and cost to serve</h3><p>Reading the same documents, answering the same questions, rebuilding the same report. Automated without removing the judgement, so your team gets the cases that need them.</p><span className="lk">Efficiency and scale</span></div>
          <div className="card"><span className="n">Outcome 03</span><h3>Capability and control</h3><p>The hard part is not the first project, it is the second and third. Data sorted, governance your team will use, people trained to spot the next thing. You should need us less over time, not more.</p><span className="lk">Capability and governance</span></div>
        </div>

        <p className="q" style={{ marginTop: '64px' }}>And how do we start?</p>
        <div className="eng">
          <div className="engRow"><h3 className="engH">Opportunity assessment</h3><p>Time with your people and your data. A clear picture of where AI will make a difference, what it is worth, and where to start.</p><span className="meta">Weeks</span></div>
          <div className="engRow"><h3 className="engH">The first thin line</h3><p>The simplest path from A to B that works inside today&apos;s constraints. One use case, end to end, in production. Value in weeks rather than months.</p><span className="meta">Weeks</span></div>
          <div className="engRow"><h3 className="engH">Build capability</h3><p>More sources, more features, more capability, each added on top of something already running.</p><span className="meta">Ongoing</span></div>
          <div className="engRow"><h3 className="engH">Enablement programme</h3><p>The tools and training to run it in-house, with us alongside deciding what to improve next.</p><span className="meta">Programme</span></div>
          <div className="engRow"><h3 className="engH">Retained partnership</h3><p>Analysis, strategy and delivery against a shared roadmap.</p><span className="meta">Ongoing</span></div>
        </div>
      </div></section>

      {/* 8 · INSIGHTS */}
      <section className="sec" id="insights" style={{ background: 'var(--lilac2)' }}><div className="wrap">
        <p className="q">What are we thinking about?</p>
        <h2 className="big">Practical, not theoretical.</h2>
        <p className="lede" style={{ marginTop: '18px' }}>Everything we publish has to be usable on Monday. Not another conversation about the art of the possible.</p>
        <div className="ins">
          <a href="/ai-in-the-wild"><img src="https://picsum.photos/seed/anlg-ins1/620/400" alt="" /><p className="m">Field note</p><h3>Start with a thin line, not a strategy</h3><p>Why the narrowest working path beats an eighteen-month data programme, and how to scope one.</p></a>
          <a href="/ai-in-the-wild"><img src="https://picsum.photos/seed/anlg-ins2/620/400" alt="" /><p className="m">Report</p><h3>The AI Layer</h3><p>How AI is actually being used across travel and hospitality, and which claims stand up to scrutiny.</p></a>
          <a href="/ai-in-the-wild"><img src="https://picsum.photos/seed/anlg-ins3/620/400" alt="" /><p className="m">Podcast</p><h3>Why 95% of pilots fail</h3><p>F&#123;AIL&#125;s, with Mario and Steve. Most AI failures turn out to be human failures.</p></a>
        </div>
        <p style={{ marginTop: '30px' }}><a href="/ai-in-the-wild" style={{ fontWeight: 600 }}>All insights and events</a></p>
      </div></section>

      {/* 9 · CTA */}
      <section className="sec cta2" id="start"><div className="wrap"><div className="ctabox">
        <div className="ctatext">
          <p className="q">Where do I start?</p>
          <h2>Tell us what is slow, expensive or manual.</h2>
          <p>We will tell you honestly whether AI is the answer, what form it would take, and what a first build looks like. If the honest answer is not yet, we will say that too.</p>
          <div className="acts">
            <a className="btn btn-a" href="/contact">Contact us <span className="arw"><svg viewBox="0 0 12 12"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#17111F" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span></a>
            <a className="btn btn-o" href="/work">See our work</a>
          </div>
        </div>
        <div className="hmos" aria-hidden="true">
          <div className="m-ph tall"><img src="/img/office-corridor.jpg" alt="" /></div>
          <div className="m-ph wide"><img src="/img/office-tablet.jpg" alt="" /></div>
          <div className="m-amber"></div>
          <div className="m-purple"><svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg></div>
        </div>
      </div></div></section>

    </main>
  );
}
