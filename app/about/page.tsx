import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Analogiq",
  description:
    "Practitioners in the room, not just consultants. Outcome-focused, because we started client-side and saw too many projects sold with no measurable impact.",
  alternates: { canonical: "https://analogiq.io/about" },
  openGraph: {
    title: "About | Analogiq",
    description:
      "Practitioners in the room, not just consultants. Outcome-focused, because we started client-side and saw too many projects sold with no measurable impact.",
    url: "https://analogiq.io/about",
  },
};

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" />
    <rect x="4" y="21" width="16" height="5" rx="2.5" />
  </svg>
);

const LOGOS = [
  { src: "/img/logo-hsbc.svg",                  alt: "HSBC" },
  { src: "/img/logo-capco-logo.png",             alt: "Capco" },
  { src: "/img/logo-keith-prowse-new.png",       alt: "Keith Prowse" },
  { src: "/img/logo-sunlife.webp",               alt: "SunLife" },
  { src: "/img/logo-jet2.svg",                   alt: "Jet2" },
  { src: "/img/logo-bhf.svg",                    alt: "British Heart Foundation" },
  { src: "/img/logo-cystic-fibrosis-trust.png",  alt: "Cystic Fibrosis Trust" },
  { src: "/img/logo-shoosmiths.png",             alt: "Shoosmiths" },
  { src: "/img/logo-premium-credit.png",         alt: "Premium Credit" },
  { src: "/img/logo-costcutter.png",             alt: "Costcutter" },
  { src: "/img/logo-bank-workers-charity.png",   alt: "Bank Workers Charity" },
  { src: "/img/logo-leeds-beckett.png",          alt: "Leeds Beckett" },
  { src: "/img/logo-maples.svg",                 alt: "Maples" },
  { src: "/img/logo-experience-golf.png",        alt: "Experience Golf" },
];

const TEAM = [
  { img: "/img/team-mario-kyriacou.jpg",    name: "Mario Kyriacou",    role: "Co-founder" },
  { img: "/img/team-steve-renshaw.jpg",     name: "Steve Renshaw",     role: "Co-founder, strategy lead" },
  { img: "/img/team-nadjaha-wohedally.jpg", name: "Nadjaha Wohedally", role: "Senior Digital Project Manager" },
  { img: "/img/team-dani-mocan.jpg",        name: "Dani Mocan",        role: "Technical Lead" },
  { img: "/img/team-doug-morris.jpg",       name: "Doug Morris",       role: "Data and Insights Director" },
  { img: "/img/team-ruairi-bradley.jpg",    name: "Ruairi Bradley",    role: "AI Engineer" },
  { img: "/img/team-dylan-pearson.jpg",     name: "Dylan Pearson",     role: "Senior Digital Project Manager" },
];

const TENETS = [
  {
    n: "01",
    h: "Practitioners in the room.",
    p: "Not account managers. AI experts, data engineers and developers work hand in hand with senior consultants and with you, on the actual solution.",
  },
  {
    n: "02",
    h: "Outcome-focused, because we came from your side.",
    p: "We started client-side, so we have sat where you sit and watched money get spent on projects that were sold well and delivered nothing you could point to. That is the thing we refuse to repeat. Every pound you spend with us is tied to a clear, measurable output agreed before we start, so you always know what the investment bought.",
  },
  {
    n: "03",
    h: "We sit in the gap.",
    p: "Between the mega-consultancies on one end and full-service digital agencies on the other. Fifteen years of building complex platforms, pointed at getting you past a proof of concept.",
  },
  {
    n: "04",
    h: "Boutique, with global reach.",
    p: "A small senior team across Europe, working with clients in multiple time zones. You get the people you met, not the people who replaced them after the pitch.",
  },
];

const JOBS = [
  { title: "Senior AI Engineer",     dept: "Engineering",  loc: "Remote, Europe" },
  { title: "Data Engineer",          dept: "Engineering",  loc: "Remote, Europe" },
  { title: "AI Solutions Consultant",dept: "Consulting",   loc: "London or remote" },
  { title: "Delivery Lead",          dept: "Delivery",     loc: "Remote, Europe" },
];

export default function AboutPage() {
  return (
    <main>
      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>About</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">Who are we?</p>
              <h1>We built the agency we always wanted to work at.</h1>
              <p className="lede">
                Practitioners in the room, not just consultants. Outcome-focused,
                because we started client-side and saw too many projects sold with
                no measurable impact.
              </p>
            </div>
            <div className="hmos" aria-hidden="true">
              <div className="m-ph tall">
                <img src="/img/office-tablet.jpg" alt="" />
              </div>
              <div className="m-ph wide">
                <img src="/img/office-smile.jpg" alt="" />
              </div>
              <div className="m-amber"></div>
              <div className="m-purple">{MARK}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · TEAM MOSAIC + TENETS */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="teamMosaic">
            <img src="/img/event-dinner1.jpg"           alt="" loading="lazy" />
            <img src="/img/event-talk-ab.jpg"           alt="" loading="lazy" />
            <img src="/img/event-winebar.jpg"           alt="" loading="lazy" />
            <img src="/img/event-boardroom.jpg"         alt="" loading="lazy" />
            <img src="/img/event-meetup-wide.jpg"       alt="" loading="lazy" />
            <img src="/img/event-restaurant-group.jpg"  alt="" loading="lazy" />
            <img src="/img/event-breakfast.jpg"         alt="" loading="lazy" />
          </div>
          <div className="tenets">
            {TENETS.map((t) => (
              <div className="tenet" key={t.n}>
                <span className="tn">{t.n}</span>
                <div>
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · CLIENT LOGO STRIP */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="q">Who have we worked with?</p>
          <h2 className="big">Brands that trusted us with the hard part.</h2>
        </div>
        <div className="logostrip">
          <div className="logotrack">
            {/* first set */}
            {LOGOS.map((l) => (
              <span className="lg" key={l.alt}>
                <img src={l.src} alt={l.alt} />
              </span>
            ))}
            {/* duplicate for seamless loop — hidden on mobile */}
            {LOGOS.map((l) => (
              <span className="lg lg-dup" key={l.alt + "-2"}>
                <img src={l.src} alt="" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
        <div className="wrap"></div>
      </section>

      {/* 4 · PEOPLE */}
      <section className="sec" style={{ background: "var(--lilac2)" }} id="people">
        <div className="wrap">
          <p className="q">Who will I be working with?</p>
          <h2 className="big">The people who scope it are the people who build it.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            You meet your engineer in the first meeting, not after the contract is signed.
          </p>
          <div className="peoplescroll">
            <div className="peopletrack">
              {TEAM.map((p) => (
                <div className="per" key={p.name}>
                  <img src={p.img} alt="" />
                  <strong>{p.name}</strong>
                  <span>{p.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 · CAREERS */}
      <section className="sec" id="careers">
        <div className="wrap">
          <p className="q">Open positions</p>
          <h2 className="big">Come build the future of AI with us.</h2>
          <div className="vac">
            {JOBS.map((j) => (
              <a className="vrow" href="/contact" key={j.title}>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.dept}</p>
                </div>
                <span className="vloc">{j.loc}</span>
                <span className="varrow">Apply</span>
              </a>
            ))}
          </div>
          <p style={{ marginTop: 24, fontSize: "15.5px", color: "var(--muted)" }}>
            Nothing that fits?{" "}
            <a href="/contact" style={{ fontWeight: 600 }}>
              Send us a note anyway.
            </a>
          </p>
        </div>
      </section>

      {/* 6 · CTA */}
      <section className="sec cta2">
        <div className="wrap">
          <div className="ctabox">
            <div className="ctatext">
              <p className="q">Where do I start?</p>
              <h2>Tell us what is slow, expensive or manual.</h2>
              <p>
                We will tell you honestly whether AI is the answer, what form it
                would take, and what a first build looks like. If the honest answer
                is not yet, we will say that too.
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
                <img src="/img/office-desks.jpg" alt="" />
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
