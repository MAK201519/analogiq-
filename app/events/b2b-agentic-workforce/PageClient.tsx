"use client";

import { useState, useEffect, useRef } from "react";
import NavigationBar from "../../components/NavigationBar";

// ── Venue constants ───────────────────────────────────────────────────────────
// All venue-specific strings live here. Nothing venue-related is typed inline.
const VENUE_PILL         = "The Mandeville, Marylebone";
const VENUE_MARQUEE_AREA = "Marylebone";
const VENUE_HEADLINE     = "The Mandeville Hotel, Marylebone.";
const VENUE_INTRO        = "Mandeville Place, W1U 2BE. A few minutes from Bond Street, just off Marylebone High Street.";
const VENUE_ADDRESS      = "The Mandeville Hotel, Mandeville Place, W1U 2BE";
const VENUE_STATIONS     = "Bond Street 4 min · Baker Street 10 min · Oxford Circus 12 min";
const VENUE_MAP_EMBED    = "https://www.google.com/maps?q=The+Mandeville+Hotel,+Mandeville+Pl,+London+W1U+2BE&output=embed";
const VENUE_MAP_LINK     = "https://maps.app.goo.gl/eN1dyx25v6kBsiyd9";
const POLAROIDS: { caption: string; img: string }[] = [
  { caption: "The room",       img: "/events/b2b-agentic-workforce/room.jpg"     },
  { caption: "The front door", img: "/events/b2b-agentic-workforce/entrance.jpg" },
  { caption: "The building",   img: "/events/b2b-agentic-workforce/building.jpg" },
];
// ─────────────────────────────────────────────────────────────────────────────

// ── Problems content ──────────────────────────────────────────────────────────
const BOARD_PROBLEMS = [
  "A six-month sale, and a board that measures marketing by the quarter.",
  "Nobody can say what marketing contributed to the last ten deals closed.",
  "A board asking what you're doing with AI, and no answer you'd defend.",
  "Leads you pass to sales and never hear about again.",
  "Account-based marketing you can do for twenty accounts but not three hundred.",
  "A CRM everyone uses and nobody trusts.",
  "A team at capacity and a headcount freeze.",
];

const TEAM_PROBLEMS = [
  "The weekly report takes a day to build and nobody reads past page one.",
  "Inbound sits in a shared inbox until Monday.",
  "Leads that wait in a queue because nobody has decided who owns them.",
  "Event follow-up goes out three weeks late, if at all.",
  "Every campaign starts with a data export and a clean-up.",
  "Lead scoring that everyone ignores because nobody can explain it.",
  "A CRM where fixing one record means finding its three duplicates.",
];
// ─────────────────────────────────────────────────────────────────────────────

// Marquee text segment: doubled in JSX for the translateX(-50%) loop.
// \u2726 = ✦, \u00a0 = non-breaking space.
const MARQUEE_SEG =
  `THREE HOURS \u00a0\u2726\u00a0 ONE AGENT BUILT \u00a0\u2726\u00a0 TWENTY SEATS \u00a0\u2726\u00a0 ${VENUE_MARQUEE_AREA.toUpperCase()} \u00a0\u2726\u00a0 `;

const MARK = (
  <div className="b2b-mark" aria-hidden="true">
    <div className="b2b-mark-bar" />
    <div className="b2b-mark-bar b2b-mark-bar-bot" />
  </div>
);

export default function PageClient() {
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState(false);
  const successHeadingRef           = useRef<HTMLHeadingElement>(null);

  // Move focus to the success heading when the card replaces the form.
  useEffect(() => {
    if (submitted) {
      successHeadingRef.current?.focus();
    }
  }, [submitted]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(false);

    const data       = Object.fromEntries(new FormData(e.currentTarget));
    const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_B2B_WEBHOOK;

    if (!webhookUrl) {
      setError(true);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="b2b">

      {submitted && <NavigationBar />}

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="b2b-hero-section" style={submitted ? { paddingTop: 104 } : undefined}>
        <div aria-hidden="true" className="b2b-orb b2b-orb-r" />
        <div aria-hidden="true" className="b2b-orb b2b-orb-l" />
        <div className="b2b-wrap">

          {/* page header: hidden once seat is requested */}
          {!submitted && (
            <div className="b2b-page-header">
              <a href="/" className="b2b-wordmark">
                {MARK}
                <span className="b2b-wordmark-text">analogiq</span>
              </a>
              <span
                className="b2b-sticker"
                style={{ background: "var(--amber)", color: "var(--ink)", transform: "rotate(3deg)" }}
              >
                IN PERSON &middot; LONDON
              </span>
            </div>
          )}

          {/* hero grid */}
          <div className="b2b-hero-grid">

            {/* left: copy + pills */}
            <div className="b2b-hero-left">
              <p className="b2b-eyebrow" style={{ color: "var(--amber)" }}>
                AI and B2B: what does that mean?
              </p>
              <h1 className="b2b-display">
                Scaling B2B marketing with the agentic workforce
              </h1>
              <p className="b2b-body" style={{ color: "rgba(255,255,255,0.92)" }}>
                A hands-on afternoon in London for B2B marketing leaders. You bring the
                tasks your team never gets round to. You leave knowing which
                ones an agent can take, and how to build the first.
              </p>
              <div className="b2b-pills">
                <div className="b2b-pill">Tue 1 Dec</div>
                <div className="b2b-pill">2.00 to 5.00</div>
                <div className="b2b-pill">{VENUE_PILL}</div>
                <div className="b2b-pill b2b-pill-amber">20 seats</div>
              </div>
            </div>

            {/* right: form card or success card */}
            {submitted ? (
              <div className="b2b-success-card">
                <div className="b2b-badge" aria-hidden="true">
                  SEAT<br />REQUESTED
                </div>
                <h2 tabIndex={-1} ref={successHeadingRef}>
                  Request received.
                </h2>
                <p>
                  Thanks. We&rsquo;ll be in touch to confirm your seat.
                  We&rsquo;ve emailed you the details.
                </p>
                <div className="b2b-success-divider" />
                <p className="b2b-success-sub">
                  Analogiq is the AI consultancy for businesses with real data.
                  We find the use cases worth building, then build them.
                </p>
                <a href="/work" className="b2b-btn">
                  See what we&rsquo;ve built
                </a>
              </div>
            ) : (
              <form className="b2b-form-card" onSubmit={handleSubmit}>
                <div className="b2b-badge" aria-hidden="true">
                  ONLY<br />20<br />SEATS
                </div>
                <h2>Request a seat</h2>
                <p className="b2b-form-detail">
                  Tuesday 1 December &middot; 2.00 to 5.00 &middot; In person at {VENUE_PILL}
                </p>
                <input type="hidden" name="event" value="b2b-workshop-2026-12-01" />
                <div className="b2b-form-grid">
                  <div>
                    <label htmlFor="b2b-fn">First name</label>
                    <input
                      id="b2b-fn"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="b2b-ln">Last name</label>
                    <input
                      id="b2b-ln"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="b2b-em">Work email</label>
                  <input
                    id="b2b-em"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="b2b-form-grid">
                  <div>
                    <label htmlFor="b2b-co">Company</label>
                    <input
                      id="b2b-co"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="b2b-ro">Role</label>
                    <input
                      id="b2b-ro"
                      name="role"
                      type="text"
                      autoComplete="organization-title"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="b2b-btn"
                  disabled={submitting}
                >
                  {submitting ? "Sending\u2026" : "Request a seat"}
                </button>
                {error && (
                  <p className="b2b-form-error" role="alert">
                    That didn&rsquo;t go through. Try again, or email{" "}
                    <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>.
                  </p>
                )}
                <p className="b2b-fine">
                  We&rsquo;ll be in touch to confirm your seat. By registering
                  you&rsquo;ll receive AI in the Wild event updates from
                  Analogiq. Unsubscribe any time.
                </p>
              </form>
            )}

          </div>
        </div>

        {/* amber marquee strap */}
        <div className="b2b-marquee" aria-hidden="true">
          <span className="b2b-marquee-track">
            {MARQUEE_SEG}{MARQUEE_SEG}
          </span>
        </div>
      </section>

      {/* ── Problems tracklist ──────────────────────────────────────────── */}
      <section
        className="b2b-sec"
        style={{ background: "var(--lilac)", position: "relative", overflow: "hidden" }}
      >
        <div
          aria-hidden="true"
          className="b2b-bg-letter"
          style={{ right: -120, top: 60 }}
        >
          A
        </div>
        <div className="b2b-wrap">
          <span
            className="b2b-sticker"
            style={{ background: "var(--ink)", color: "var(--amber)", transform: "rotate(-4deg)" }}
          >
            THE PROBLEMS
          </span>
          <p className="b2b-eyebrow" style={{ color: "var(--purple)", marginTop: 28 }}>
            AI and B2B: what does that mean?
          </p>
          <h2 className="b2b-h2">Most B2B marketing teams have the same problems.</h2>
          <div className="b2b-grid2" style={{ marginTop: 56, alignItems: "start" }}>
            <div>
              <p className="b2b-col-label">WHAT THE BOARD SEES</p>
              <div className="b2b-tracklist">
                {BOARD_PROBLEMS.map((text, i) => (
                  <p key={i} className="b2b-track">
                    <span className="b2b-track-n">{i + 1}</span>
                    <span className="b2b-track-t">{text}</span>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="b2b-col-label">WHAT THE TEAM SEES</p>
              <div className="b2b-tracklist">
                {TEAM_PROBLEMS.map((text, i) => (
                  <p key={i} className="b2b-track">
                    <span className="b2b-track-n">{i + 1}</span>
                    <span className="b2b-track-t">{text}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="b2b-body" style={{ marginTop: 48 }}>
            None of this is new. What&rsquo;s new is that it now costs you
            headcount you can&rsquo;t get and budget you have to justify.
            Validity&rsquo;s 2026 CRM report found 62% of organisations have
            lost revenue to poor CRM data alone.
          </p>
        </div>
      </section>

      {/* ── Agents ─────────────────────────────────────────────────────── */}
      <section
        className="b2b-sec"
        style={{ background: "var(--amber)", position: "relative", overflow: "hidden" }}
      >
        <div
          aria-hidden="true"
          className="b2b-bg-letter"
          style={{ left: -100, bottom: -80, opacity: 0.5 }}
        >
          B
        </div>
        <div className="b2b-wrap">
          <span
            className="b2b-sticker"
            style={{ background: "var(--ink)", color: "var(--amber)", transform: "rotate(-4deg)" }}
          >
            THE AGENTS
          </span>
          <p className="b2b-eyebrow" style={{ color: "var(--deep)", marginTop: 28 }}>
            What is an agentic workforce?
          </p>
          <h2 className="b2b-h2">
            Small agents with one job each, and a person who signs off.
          </h2>
          <p className="b2b-body">
            An agentic workforce is not one clever assistant. It is a set of
            specific agents, each with one job, one data source, a boundary it
            can&rsquo;t cross and a human who approves what matters. They work
            between the tools you already own, not instead of them, and the
            team stays the same size.
          </p>
          <div className="b2b-grid3" style={{ marginTop: 56 }}>
            <div
              className="b2b-agent b2b-agent-purple b2b-span-2"
              style={{ transform: "rotate(-1.2deg)" }}
            >
              <h3>01 Allocation agent</h3>
              <p>
                Reads a new lead, works out territory, fit and who has capacity,
                assigns it and writes one line on why, so nothing waits in a
                queue over a weekend. If it isn&rsquo;t sure, it asks a person
                rather than guessing.
              </p>
            </div>
            <div className="b2b-agent" style={{ transform: "rotate(1.4deg)" }}>
              <h3>02 Triage agent</h3>
              <p>Reads inbound enquiries and drafts the first reply for someone to send.</p>
            </div>
            <div className="b2b-agent" style={{ transform: "rotate(0.8deg)" }}>
              <h3>03 Follow-up agent</h3>
              <p>Reads an event attendee list against the CRM and proposes a note per contact.</p>
            </div>
            <div className="b2b-agent" style={{ transform: "rotate(-1deg)" }}>
              <h3>04 Hygiene agent</h3>
              <p>Flags decayed, conflicting or duplicate records every morning and proposes the fix.</p>
            </div>
            <div className="b2b-agent" style={{ transform: "rotate(1.1deg)" }}>
              <h3>05 Reporting agent</h3>
              <p>
                Reads a closed deal and drafts the &ldquo;what marketing did&rdquo; story
                for the board, for a human to edit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Honesty ────────────────────────────────────────────────────── */}
      <section
        className="b2b-sec"
        style={{ background: "var(--ink)", color: "#fff", overflow: "hidden" }}
      >
        <div className="b2b-wrap">
          <p className="b2b-eyebrow" style={{ color: "var(--amber)" }}>
            Will any of it work for us?
          </p>
          <h2 className="b2b-h2">Depends what you ask it to do.</h2>
          <div className="b2b-grid2" style={{ marginTop: 48, alignItems: "start" }}>
            <p className="b2b-body" style={{ color: "rgba(255,255,255,0.88)", margin: 0 }}>
              Some of what you&rsquo;ll be pitched as an agent is a fixed
              sequence of steps with a model somewhere in the middle. It
              doesn&rsquo;t decide anything. That is often exactly what you
              need, but it isn&rsquo;t an agent and you shouldn&rsquo;t pay
              agent prices for it. Some tasks aren&rsquo;t AI at all.
            </p>
            <div className="b2b-quote">
              <p>
                The useful question is which of your daily tasks involve a
                repeatable judgement call a model can make, and which should
                stay with a person.
              </p>
              <p className="b2b-quote-sub">
                That is the question the afternoon answers, for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Agenda ──────────────────────────────────────────────────────── */}
      <section className="b2b-sec" style={{ background: "var(--purple)", color: "#fff" }}>
        <div className="b2b-wrap">
          <span
            className="b2b-sticker"
            style={{ background: "var(--amber)", color: "var(--ink)", transform: "rotate(2deg)" }}
          >
            SET LIST
          </span>
          <p className="b2b-eyebrow" style={{ color: "var(--amber)", marginTop: 28 }}>
            What will we actually do?
          </p>
          <h2 className="b2b-h2">Three hours. One agent built.</h2>
          <div className="b2b-slots">
            <div className="b2b-slot">
              <div className="b2b-slot-time">2.00</div>
              <div>
                <h3>The B2B funnel, broken down</h3>
                <p>
                  Lead generation, nurture, allocation, handover, reporting, retention,
                  expansion. At each stage: where do people make repetitive judgement
                  calls, which of those can an agent take on, and which should stay human.
                </p>
              </div>
            </div>
            <div className="b2b-slot">
              <div className="b2b-slot-time">3.00</div>
              <div>
                <h3>Build one, live</h3>
                <p>
                  Pick a daily task: lead allocation, lead scoring, data cleansing, inbound
                  triage or post-event follow-up. We build a working agent in front of you
                  on real-looking B2B data. You watch it make its first decision, get one
                  wrong, and see the sign-off catch it.
                </p>
              </div>
            </div>
            <div className="b2b-slot">
              <div className="b2b-slot-time">4.15</div>
              <div>
                <h3>The B2B marketing cockpit</h3>
                <p>
                  How the agents sit together in one place your team runs, what a human
                  approves, and what it costs a month.
                </p>
              </div>
            </div>
            <div className="b2b-slot">
              <div className="b2b-slot-time">4.45</div>
              <div>
                <h3>Your one-page plan</h3>
                <p>Reviewed in the room.</p>
              </div>
            </div>
            <div className="b2b-slot">
              <div className="b2b-slot-time">5.00</div>
              <div>
                <h3>Close</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Venue ────────────────────────────────────────────────────────── */}
      <section className="b2b-sec" style={{ background: "var(--lilac)", overflow: "hidden" }}>
        <div className="b2b-wrap">
          <p className="b2b-eyebrow" style={{ color: "var(--purple)" }}>
            Where is it?
          </p>
          <h2 className="b2b-h2">{VENUE_HEADLINE}</h2>
          <p className="b2b-body">{VENUE_INTRO}</p>
          <div className="b2b-venue-grid">

            {/* polaroid strip: third one hidden on mobile */}
            <div className="b2b-venue-photos">
              <div className="b2b-polaroid" style={{ transform: "rotate(-3deg)" }}>
                <div className="b2b-ph">
                  {POLAROIDS[0].img
                    ? <img src={POLAROIDS[0].img} alt={POLAROIDS[0].caption} />
                    : POLAROIDS[0].caption}
                </div>
                <p>{POLAROIDS[0].caption}</p>
              </div>
              <div className="b2b-polaroid b2b-polaroid-mid" style={{ transform: "rotate(2deg)" }}>
                <div className="b2b-ph">
                  {POLAROIDS[1].img
                    ? <img src={POLAROIDS[1].img} alt={POLAROIDS[1].caption} />
                    : POLAROIDS[1].caption}
                </div>
                <p>{POLAROIDS[1].caption}</p>
              </div>
              <div className="b2b-polaroid b2b-sleeve" style={{ transform: "rotate(-1.5deg)" }}>
                <div className="b2b-ph">
                  {POLAROIDS[2].img
                    ? <img src={POLAROIDS[2].img} alt={POLAROIDS[2].caption} />
                    : POLAROIDS[2].caption}
                </div>
                <p>{POLAROIDS[2].caption}</p>
              </div>
            </div>

            {/* map card */}
            <div className="b2b-map-card">
              {VENUE_MAP_EMBED ? (
                <iframe
                  src={VENUE_MAP_EMBED}
                  title="Venue on Google Maps"
                  data-cookieconsent="ignore"
                  loading="lazy"
                />
              ) : (
                <div className="b2b-map-placeholder" aria-hidden="true">
                  <div className="b2b-map-grid" />
                  <div style={{ position: "absolute", left: 0, right: 0, top: "46%", height: 18, background: "#fff", transform: "rotate(-8deg)" }} />
                  <div style={{ position: "absolute", top: 0, bottom: 0, left: "58%", width: 14, background: "#fff", transform: "rotate(12deg)" }} />
                  <div className="b2b-map-pin" />
                </div>
              )}
              <div className="b2b-map-body">
                <p className="b2b-map-address">{VENUE_ADDRESS}</p>
                <p className="b2b-map-stations">{VENUE_STATIONS}</p>
                <a
                  href={VENUE_MAP_LINK}
                  className="b2b-map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Leave with / who for ─────────────────────────────────────────── */}
      <section className="b2b-sec" style={{ background: "#fff" }}>
        <div className="b2b-wrap">
          <div className="b2b-grid2" style={{ gap: "64px" }}>
            <div>
              <p className="b2b-eyebrow" style={{ color: "var(--purple)" }}>
                What do I leave with?
              </p>
              <h2 className="b2b-h2-sm">A plan, and a worked example.</h2>
              <p className="b2b-body-sm">
                One page that says where the agentic workforce fits in your marketing
                operation, what to automate first, what data it needs and what it costs
                to run. Plus the agent we built together on the day, as a worked example
                you can take back to your team.
              </p>
            </div>
            <div>
              <p className="b2b-eyebrow" style={{ color: "var(--purple)" }}>
                Who is it for?
              </p>
              <h2 className="b2b-h2-sm">
                B2B marketing leaders who still touch the tools.
              </h2>
              <p className="b2b-body-sm">
                Heads of marketing, marketing directors and the fractional equivalent,
                in B2B businesses with a CRM in use. Twenty seats, so the room stays
                small enough to build in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="b2b-sec" style={{ background: "var(--deep)", color: "#fff" }}>
        <div className="b2b-wrap">
          <span
            className="b2b-sticker"
            style={{ background: "var(--amber)", color: "var(--ink)", transform: "rotate(-3deg)" }}
          >
            THE BAND
          </span>
          <p className="b2b-eyebrow" style={{ color: "var(--amber)", marginTop: 28 }}>
            Who&rsquo;s running it?
          </p>
          <h2 className="b2b-h2">The people in the room.</h2>
          <p className="b2b-body" style={{ color: "rgba(255,255,255,0.88)" }}>
            Analogiq is the AI consultancy for businesses with real data. We find the
            use cases worth building, then build them.
          </p>
          <div className="b2b-team-grid">
            {[
              { name: "Mario Kyriacou", role: "Co-founder",    img: "/img/team-mario-kyriacou.jpg", tilt: "-4deg" },
              { name: "Steve Renshaw",  role: "Co-founder",    img: "/img/team-steve-renshaw.jpg",  tilt:  "3deg" },
              { name: "Ruairi Bradley", role: "AI consultant", img: "/img/team-ruairi-bradley.jpg", tilt: "-2deg" },
            ].map(({ name, role, img, tilt }) => (
              <div key={name}>
                <div className="b2b-headshot" style={{ transform: `rotate(${tilt})` }}>
                  <img src={img} alt={name} />
                </div>
                <p className="b2b-person-name">{name}</p>
                <p className="b2b-person-role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Can't make it ────────────────────────────────────────────────── */}
      <section className="b2b-sec" style={{ background: "var(--amber)", color: "var(--ink)" }}>
        <div className="b2b-wrap">
          <p className="b2b-eyebrow" style={{ color: "var(--deep)" }}>
            Can&rsquo;t make the date?
          </p>
          <h2 className="b2b-h2">Two hours with us instead.</h2>
          <p className="b2b-body">
            A free AI audit: a 30-minute call, a 90-minute session, and a one-page
            view back on where AI is worth pointing in your business. No engineer,
            no systems review, no charge.
          </p>
          <a
            href="/audit"
            className="b2b-btn b2b-btn-ink"
            style={{ marginTop: 36 }}
          >
            Book the call
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="b2b-footer">
        <div className="b2b-wrap b2b-footer-inner">
          <div>
            <div className="b2b-footer-mark">
              {MARK}
              <span className="b2b-wordmark-text">analogiq</span>
            </div>
            <p className="b2b-footer-tagline">
              Analogue intelligence.<br />
              <span>The AI consultancy for businesses with real data.</span>
            </p>
          </div>
          <div className="b2b-footer-right">
            <p className="b2b-footer-email">
              <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>
            </p>
            <p className="b2b-footer-location">
              London, with engineering across Romania, Hungary and Bulgaria
            </p>
            <p className="b2b-footer-legal">
              &copy; 2026 Analogiq Ltd &middot;{" "}
              <a href="/privacy-policy">Privacy policy</a> &middot;{" "}
              <a href="/cookie-policy">Cookie policy</a> &middot;{" "}
              <a href="/modern-slavery">Modern slavery statement</a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
