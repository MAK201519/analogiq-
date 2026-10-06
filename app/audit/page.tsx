import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import LogoStrip from "@/app/components/LogoStrip";
import "./audit.css";

export const metadata: Metadata = {
  title: "Book a free two-hour AI audit · analogiq",
  robots: { index: false, follow: false },
};

const ArrowIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AuditPage() {
  return (
    <>
      {/* Calendly widget script — loads after page is interactive.
          The inline widget div is rendered server-side; the script
          picks it up once it fires. The button above works independently. */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* ── 1 · Header bar ──────────────────────────────────────── */}
      <header className="auditBar">
        <div className="wrap">
          <Link href="/" className="logo">
            <span className="auditMark">
              <i />
              <i />
            </span>
            <span className="auditWord">analogiq</span>
          </Link>
          <span className="auditTag">Analogue intelligence</span>
        </div>
      </header>

      {/* ── 2 · Hero ────────────────────────────────────────────── */}
      <section className="auditHero">
        <div className="wrap heroGrid">
          {/* Left column */}
          <div>
            <p className="q">Five minutes was not long. This is the rest.</p>
            <h1>Book a free two-hour AI audit.</h1>
            <p className="lede" style={{ marginTop: 24 }}>
              We are Analogiq, the AI and martech consultancy you met at the Savoy. We help marketing teams get measurable results from AI, and we are as likely to tell you what not to build as what to build.
            </p>
            <p className="lede" style={{ marginTop: 14 }}>
              The audit is two hours of your time in total, a 30-minute call and a 90-minute session, and ends with one page giving our view on where AI would be worth something in your team and which idea to look at first. If the answer is nothing yet, you will hear that.
            </p>
            <p className="lede" style={{ marginTop: 14, fontSize: 17 }}>
              It starts with a 30-minute call with Steve and Mario about what you are being asked to do and what you would want from it. That call is what the calendar books.
            </p>
            <p className="alt">
              Rather ask something first?{" "}
              <a href="#contact">Email, call or send a note</a>.
            </p>
          </div>
          {/* Right column — Calendly */}
          <div>
            <a
              className="btn btn-a"
              href="https://calendly.com/mario-analogiq/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: 16 }}
            >
              Book the 30-minute call{" "}
              <span className="arw"><ArrowIcon /></span>
            </a>
            <div className="cal">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/mario-analogiq/30min?hide_gdpr_banner=1&primary_color=5b2bd9"
                style={{ minWidth: 320, height: 700 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · What does the audit involve? ────────────────────── */}
      <section className="sec auditBand">
        <div className="wrap">
          <p className="q">What does the audit involve?</p>
          <h2 className="big">Two hours in total. One page back.</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            AI can be applied to almost anything, which is the problem. Most of what it could do in a marketing team is not worth doing. The audit is for pinpointing where it would be worth something in yours, and which idea to look at first.
          </p>

          {/* Four step cards */}
          <div className="steps">
            <div className="card">
              <p className="n">1. A 30-minute call</p>
              <h3>With Steve and Mario. This is what the calendar books.</h3>
              <p>What you are being asked to do with AI, what you would want from an audit, and who should be in the session. If we are not the right people, we say so here and that is the end of it.</p>
            </div>
            <div className="card">
              <p className="n">2. A 90-minute session</p>
              <h3>You, anyone you want with you, and one of us.</h3>
              <p>In your office or on a call. We list every candidate: the ideas you are being asked about, the ones shelved before, and the parts of the operation where the time and money go. Then we sort them by what each is worth against what it would need, and agree the one to look at first.</p>
            </div>
            <div className="card">
              <p className="n">3. A day of ours</p>
              <h3>We write it up.</h3>
              <p>What we heard, what we think, and where the value is most likely to be. Nothing technical; no systems are examined at this stage.</p>
            </div>
            <div className="card">
              <p className="n">4. One page, within a week</p>
              <h3>Yours to keep.</h3>
              <p>Sent to you and whoever you ask us to copy. No deck, no meeting required to receive it.</p>
            </div>
          </div>

          {/* Two wider cards */}
          <div className="auditTwoCol">
            <div className="card">
              <p className="n">What the page says</p>
              <h3>Our view, in four parts.</h3>
              <p>The candidates we listed and what we think of each. The one we would look at first, and why. The ones to leave alone, and why. The one thing to settle before spending money on any of it.</p>
            </div>
            <div className="card">
              <p className="n">What it does not include, and what follows</p>
              <h3>The plan is the paid work.</h3>
              <p>The audit is free and carries no obligation. It does not include a look at your data or systems, effort estimates or a roadmap; those come from an opportunity assessment, a fixed-price piece of work over about three weeks, which we only propose if the page gives you a reason to want it. If the page says nothing is worth doing yet, that is the page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · What did the room say? ───────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <p className="q">What did the room say it was struggling with?</p>
          <h2 className="big">Six problems, and the question we would ask first.</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Everyone at the Savoy gave the organisers their top three challenges beforehand. Read together, they come down to these. Each one has a different answer in every business, so here is the question we would start with rather than the answer.
          </p>
          <div className="themes">
            <div className="theme">
              <h3>{'\u201c'}AI in marketing{'\u201d'}, with nothing after it.</h3>
              <p>The most common line on the list. The useful first step is a list of what is actually being asked for. <b>What are the three things you are actually being asked to do?</b></p>
            </div>
            <div className="theme">
              <h3>Building AI on the martech you already have.</h3>
              <p>Most teams do not need a new platform to start. Whether the current one can feed a model depends on what is in it and how it is joined. <b>Which system would the first use case have to read from, and who trusts the data in it?</b></p>
            </div>
            <div className="theme">
              <h3>Data that is not ready for it.</h3>
              <p>The unglamorous problem. It is rarely all the data; it is usually two sources for one use case. <b>If you could only fix the data for one thing this year, which thing?</b></p>
            </div>
            <div className="theme">
              <h3>Quality and oversight.</h3>
              <p>Where the output reaches a customer, the question is not whether AI can do the job but where the person sits in the process. <b>What is the last thing a human checks before it goes out, and would that still be true with a model in the chain?</b></p>
            </div>
            <div className="theme">
              <h3>Personalisation without the cost scaling with it.</h3>
              <p>You can only personalise for the people you can recognise. The technology question comes after the coverage question. <b>How much of your audience arrives as a known customer, and what is the first useful message to them?</b></p>
            </div>
            <div className="theme">
              <h3>Proving it worked.</h3>
              <p>Activity that touches a lead, a booking or a sale can be measured against a control. Brand cannot be measured the same way and should not be forced to. <b>Which of your current activity has a control, and which never did?</b></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Proof ────────────────────────────────────────────── */}
      {/* LogoStrip is full-width so sits outside .wrap — same pattern as homepage. */}
      <section className="sec auditBand">
        <div className="wrap">
          <p className="q">Who we have done this for</p>
          <h2 className="big">The clients who trusted us with the hard part.</h2>
        </div>
        <LogoStrip style={{ marginTop: 28 }} />
      </section>

      {/* ── 6 · Not ready for two hours? ────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <p className="q">Not ready for two hours?</p>
          <h2 className="big">Two smaller things.</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            In the week after the Savoy we are writing up what the room said it was struggling with and what we think about it. If you would like it, email either of us and it comes to you when it is done. And if you would rather hear the AI conversation in a room with other marketers,{" "}
            <a href="https://www.meetup.com/ai-in-the-wild">AI in the Wild</a>{" "}
            is the meetup we run in London.
          </p>
        </div>
      </section>

      {/* ── 7 · Contact ─────────────────────────────────────────── */}
      <section className="sec dark" id="contact">
        <div className="wrap">
          <p className="q">Got a question first?</p>
          <h2 className="big">Email us, or book straight in.</h2>
          <div className="contactBlock">
            <div className="contactLines">
              <b>Email</b>
              <a href="mailto:hello@analogiq.io">hello@analogiq.io</a>
              <b>Steve Renshaw</b>
              <a href="mailto:steve@analogiq.io">steve@analogiq.io</a>
              <b>Mario Kyriacou</b>
              <a href="mailto:mario@analogiq.io">mario@analogiq.io</a>
            </div>
            <a
              className="btn btn-a"
              href="https://calendly.com/mario-analogiq/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 28 }}
            >
              Book the 30-minute call{" "}
              <span className="arw"><ArrowIcon /></span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 8 · Footer ──────────────────────────────────────────── */}
      <footer className="auditFoot">
        <div className="wrap">
          <span>analogiq · analogue intelligence</span>
          <span>
            <a href="https://analogiq.io">analogiq.io</a>
          </span>
        </div>
      </footer>
    </>
  );
}
