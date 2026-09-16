import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases } from "@/content/cases";
import "@/app/work-case.css";

/* ── logo map ──────────────────────────────────────────────────────────── */
const LOGO: Record<string, string | null> = {
  "capco-personalisation": "/img/logo-capco-logo.png",
  hsbc: "/img/logo-hsbc.svg",
  wilderness: null, // uses .m-ink brand mark, no logo
  "keith-prowse": "/img/logo-keith-prowse-new.png",
  "capco-platform": "/img/logo-capco-logo.png",
  "experience-golf": "/img/logo-experience-golf.png",
  sunlife: "/img/logo-sunlife.webp",
  "cystic-fibrosis-trust": "/img/logo-cystic-fibrosis-trust.png",
  jet2: "/img/logo-jet2.svg",
};

/* ── thumbnail used in .mini and .wgrid cards ──────────────────────────── */
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

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" />
    <rect x="4" y="21" width="16" height="5" rx="2.5" />
  </svg>
);

/* ── static params ─────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

/* ── metadata ──────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} | Analogiq`,
    description: c.sum,
    alternates: { canonical: `https://analogiq.io/work/${c.slug}` },
    openGraph: {
      title: `${c.title} | Analogiq`,
      description: c.sum,
      url: `https://analogiq.io/work/${c.slug}`,
    },
  };
}

/* ── page ──────────────────────────────────────────────────────────────── */
export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  const logo = LOGO[c.slug];
  const others = cases.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <main>
      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span><a href="/work">Our work</a></span>
            <span>{c.client}</span>
          </nav>
          <div className="hbox hcase">
            <div className="htext">
              <p className="q">{c.client} &middot; {c.sector} &middot; {c.cat}</p>
              <h1>{c.title}</h1>
              <p className="lede">{c.sum}</p>
            </div>
            <div className="hmos casehero" aria-hidden="true">
              {logo ? (
                <div className="m-logo tall"><img src={logo} alt="" /></div>
              ) : (
                <div className="m-ink tall">{MARK}</div>
              )}
              <div className="m-lilac wide"><div className="m-dots"></div></div>
              <div className="m-amber"></div>
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · STATS */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="statbig">
            {c.stats.map((s, i) => (
              <div key={i}><b>{s.value}</b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · CASE BODY */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="q">What happened?</p>
          <h2 className="big">How it went.</h2>
          <div className="casebody">
            <div className="caseprose">
              <h3>The problem</h3>
              <p>{c.problem}</p>
              <h3>What we built</h3>
              <p>{c.built}</p>
              <h3>What came after</h3>
              <p>{c.after}</p>
            </div>
            {c.quote && (
              <div className="caseaside">
                <div className="casequote">
                  <p>&ldquo;{c.quote}&rdquo;</p>
                  {c.quoteBy && <cite>{c.quoteBy}</cite>}
                </div>
              </div>
            )}
          </div>

          {/* 4 · ROADMAP (optional) */}
          {c.roadmap && (
            <div className="roadmap">
              <p className="q">How was it built?</p>
              <h3>The same chain we use on every project, applied here.</h3>
              <ol className="chain rm">
                {c.roadmap.map((r, i) => (
                  <li key={i}><h3>{r.step}</h3><p>{r.description}</p></li>
                ))}
              </ol>
            </div>
          )}

          {/* 5 · SCREENSHOTS */}
          <div className="shots">
            {c.imgs.map((img, i) => (
              <figure className="shot" key={i}>
                <img src={`/img/${img}`} alt="" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · MORE WORK */}
      <section className="sec" style={{ background: 'var(--lilac2)' }}>
        <div className="wrap">
          <p className="q">What else have we built?</p>
          <h2 className="big">More work.</h2>
          <div className="mini">
            {others.map((o) => (
              <a key={o.slug} href={`/work/${o.slug}`}>
                <img src={THUMB[o.slug]} alt="" loading="lazy" />
                <p className="m">{o.client}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · CTA */}
      <section className="sec cta2">
        <div className="wrap">
          <div className="ctabox">
            <div className="ctatext">
              <p className="q">Where do I start?</p>
              <h2>Close to your problem?</h2>
              <p>Tell us what the equivalent would be in your business, and we will give you an honest first read.</p>
              <div className="acts">
                <a className="btn btn-a" href="/contact">Contact us <span className="arw"><svg viewBox="0 0 12 12"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span></a>
                <a className="btn btn-o" href="/work">See our work</a>
              </div>
            </div>
            <div className="hmos" aria-hidden="true">
              <div className="m-ph tall"><img src="/img/office-corridor.jpg" alt="" /></div>
              <div className="m-ph wide"><img src="/img/office-openplan.jpg" alt="" /></div>
              <div className="m-amber"></div>
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
