"use client";

import { useState, useRef } from "react";

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" fill="#17111F" />
    <rect x="4" y="21" width="17" height="5" rx="2.5" fill="#5B2BD9" />
  </svg>
);

const MARK_FOOTER = (
  <svg width="28" height="28" viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" fill="#fff" />
    <rect x="4" y="21" width="17" height="5" rx="2.5" fill="#FFB627" />
  </svg>
);

const ARW = (
  <span className="arw">
    <svg viewBox="0 0 12 12" aria-hidden="true">
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
);

const PATBAND_SVG = (
  <svg className="patband" aria-hidden="true">
    <rect width="100%" height="100%" fill="url(#wpf-tetp)" />
  </svg>
);

export default function PageClient() {
  const [registered, setRegistered] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const regRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBINAR_WEBHOOK;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        // silently swallow — show success regardless
      }
    }

    setRegistered(true);
    setSubmitting(false);
  }

  function scrollToReg() {
    regRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="wpf">
      {/* SVG defs for dot pattern */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <pattern id="wpf-tetp" width="72" height="64" patternUnits="userSpaceOnUse">
            <circle cx="36" cy="12" r="2.6" fill="#fff" opacity=".13" />
            <circle cx="26" cy="28" r="2.6" fill="#fff" opacity=".13" />
            <circle cx="46" cy="28" r="2.6" fill="#fff" opacity=".13" />
            <circle cx="16" cy="44" r="2.6" fill="#fff" opacity=".13" />
            <circle cx="36" cy="44" r="2.6" fill="#fff" opacity=".13" />
            <circle cx="56" cy="44" r="2.6" fill="#fff" opacity=".13" />
          </pattern>
        </defs>
      </svg>

      {/* Header */}
      <header>
        <div className="wrap nav">
          <a className="logo" href="/">
            <svg width="34" height="34" viewBox="0 0 36 34" aria-hidden="true">
              <rect x="4" y="12" width="28" height="5" rx="2.5" fill="#17111F" />
              <rect x="4" y="21" width="17" height="5" rx="2.5" fill="#5B2BD9" />
            </svg>
            <span className="word">analogiq</span>
          </a>
          <p className="series">
            <b>AI in the Wild</b>, online
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        {PATBAND_SVG}
        <div className="wrap heroGrid">
          <div>
            <p className="kick">
              <span className="tag">Free webinar</span>
              <span>From the AI in the Wild meetup</span>
              <span>Thursday 15 October, 2pm UK</span>
              <span>45 minutes</span>
            </p>
            <h1>Why most AI marketing pilots fail</h1>
            <p className="lede">
              We&rsquo;ll explore the 8 common reasons why pilots fail to take off
            </p>
            <p className="aud">
              For marketing and digital leads running, or about to run, an AI
              pilot.
            </p>
            <div className="who">
              <img
                src="/img/team-mario-kyriacou.jpg"
                alt=""
                onError={(e) => {
                  const el = e.currentTarget;
                  const ini = document.createElement("span");
                  ini.className = "ini";
                  ini.textContent = "MK";
                  el.replaceWith(ini);
                }}
              />
              <div>
                <b>Mario Kyriacou</b>
                Co-founder, Analogiq
              </div>
            </div>
          </div>

          {/* Registration card */}
          <div className="reg" id="register" ref={regRef}>
            {registered ? (
              <div className="reg-success">
                <div className="check">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7" stroke="#5B2BD9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Seat saved. Check your inbox.</h3>
                <p>We will send the joining link when the date is confirmed.</p>
              </div>
            ) : (
              <>
                <h2>Save your seat</h2>
                <p className="when">
                  <b>Live webinar.</b> Thursday 15 October, 2pm UK. 45 minutes.
                  <br />
                  Can&rsquo;t make it live? Register anyway and we&rsquo;ll
                  send the recording.
                </p>
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="event" value="why-ai-pilots-fail" />
                  <input
                    type="hidden"
                    name="event_title"
                    value="Why most AI marketing pilots fail"
                  />
                  <div className="row">
                    <div className="f">
                      <label htmlFor="wpf-fn">First name</label>
                      <input
                        id="wpf-fn"
                        name="first_name"
                        autoComplete="given-name"
                        required
                      />
                    </div>
                    <div className="f">
                      <label htmlFor="wpf-ln">Last name</label>
                      <input
                        id="wpf-ln"
                        name="last_name"
                        autoComplete="family-name"
                        required
                      />
                    </div>
                  </div>
                  <div className="f">
                    <label htmlFor="wpf-em">Work email</label>
                    <input
                      id="wpf-em"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <button
                    className="btn btn-a"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Saving…" : "Save my seat"} {ARW}
                  </button>
                </form>
                <p className="fine">
                  We&rsquo;ll only email you about this event. Your joining link
                  comes straight from Zoom once you register.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Strip */}
      <div className="strip">
        <div className="wrap">
          <div className="item">
            <b>45 minutes</b>Live on Zoom. The recording goes to everyone who
            registers.
          </div>
          <div className="item">
            <b>For marketing and digital leads</b>If you&rsquo;re running an AI
            pilot, or being asked to, this is what to check before it starts.
          </div>
        </div>
      </div>

      {/* Takeaways */}
      <section className="sec">
        <div className="wrap">
          <h2 className="big">What you&rsquo;ll take away</h2>
          <div className="tks">
            <div className="tk">
              <span className="n">1</span>
              <p>Why AI pilots typically fail to take off and scale</p>
            </div>
            <div className="tk">
              <span className="n">2</span>
              <p>We&rsquo;ll explore everything from vendor promises, defining AI use cases through to the typical challenges that we see</p>
            </div>
            <div className="tk">
              <span className="n">3</span>
              <p>Pilot scope and its impact on accurate budgets</p>
            </div>
            <div className="tk">
              <span className="n">4</span>
              <p>Setting expectations with what a marketing AI pilot can achieve</p>
            </div>
            <div className="tk">
              <span className="n">5</span>
              <p>Typical examples of where we see AI pilots succeeding and the common traits that they have</p>
            </div>
          </div>
        </div>
      </section>

      {/* Host */}
      <section className="sec">
        <div className="wrap">
          <div className="host">
            <img
              src="/img/team-mario-kyriacou.jpg"
              alt="Mario Kyriacou"
              onError={(e) => {
                const el = e.currentTarget;
                const ini = document.createElement("div");
                ini.className = "ini";
                ini.textContent = "MK";
                el.replaceWith(ini);
              }}
            />
            <div>
              <h3>Mario Kyriacou</h3>
              <p className="role">Co-founder, Analogiq</p>
              <p>
                Mario has spent twenty years on the commercial side of digital,
                first at Ratio and now at Analogiq. He has watched a lot of AI
                pilots get signed off, and a smaller number get switched off.
                This talk was first given at the AI in the Wild meetup in
                London.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec cta">
        {PATBAND_SVG}
        <div className="wrap inner">
          <h2>
            Decide what proved means before you build anything.
          </h2>
          <p>
            Forty-five minutes on Thursday 15 October, 2pm UK. Register now
            and we will send you the joining link.
          </p>
          <button className="btn" onClick={scrollToReg}>
            Save my seat{" "}
            <span className="arw">
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"
                  stroke="#5B2BD9"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap row">
          <div className="logo">
            {MARK_FOOTER}
            <span className="word">analogiq</span>
          </div>
          <p>
            An AI consultancy for businesses with real data and no AI team of
            their own. London.
          </p>
          <p>
            <a href="/privacy-policy">Privacy policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
