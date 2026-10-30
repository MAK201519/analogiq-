"use client";

import { useState, useEffect, useRef } from "react";
import SiteHeader from "../../components/SiteHeader";
import LogoStrip from "../../components/LogoStrip";

const MARK = (
  <span className="trv-mark" aria-hidden="true">
    <span className="trv-mark-bar" />
    <span className="trv-mark-bar trv-mark-bar-b" />
  </span>
);

export default function PageClient() {
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState(false);
  const successHeadingRef           = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(false);

    const data       = Object.fromEntries(new FormData(e.currentTarget));
    const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_TRAVEL_BREAKFAST_WEBHOOK;

    if (!webhookUrl) {
      setError(true);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        body:   JSON.stringify(data),
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
    <div className="trv">

      {submitted && <SiteHeader />}

      {/* ── Header bar ──────────────────────────────────────────────────── */}
      {!submitted && (
        <header className="trv-top trv-wrap">
          <a href="/" className="trv-wordmark">
            {MARK}
            <span className="trv-word">analogiq</span>
          </a>
          <div className="trv-tag">In person · London · Breakfast</div>
        </header>
      )}

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="trv-hero">
        <div className="trv-wrap trv-hero-grid">

          {/* left: copy */}
          <div>
            <p className="trv-q">In an AI-driven world, who owns the customer experience?</p>
            <h1 className="trv-h1">
              From search to suitcase
              <span className="trv-sub">AI agents in travel: now to 2030</span>
            </h1>
            <p className="trv-lede">
              Join marketing peers from across the industry for a morning session exploring
              how AI and agents can streamline internal operations and create better customer
              experiences.
            </p>
            <p className="trv-lede">
              Where AI and agents are taking travel by 2030, and what to be doing about it
              in 2027.
            </p>
            <div className="trv-facts">
              <div><b>Date</b>Tuesday 8 December 2026</div>
              <div><b>Time</b>8.30 to 10.30</div>
              <div><b>Venue</b>Duck and Waffle, 110 Bishopsgate</div>
              <div><b>Format</b>Roundtable with marketing peers</div>
              <div>
                <b>For</b>Marketing and digital leads at tour operators, airlines, cruise
                lines and hotel groups
              </div>
            </div>
            <p className="trv-who">
              <b>analogiq</b> builds bespoke AI systems for travel and marketing teams,
              tailored to each business, powered by its data, and designed to fit the way
              you work.
            </p>
          </div>

          {/* right: form or success */}
          <div className="trv-form-wrap">
            {!submitted && (
              <div className="trv-badge" aria-hidden="true">Invitation only</div>
            )}
            <div className="trv-card">
              {submitted ? (
                <div className="trv-ok">
                  <h2 tabIndex={-1} ref={successHeadingRef}>
                    Thanks, we have your request.
                  </h2>
                  <p>We&rsquo;ll be in touch to confirm your seat.</p>
                  <div className="trv-when2">
                    Tuesday 8 December, 8.30<br />
                    Duck and Waffle, 110 Bishopsgate
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2>Request a seat</h2>
                  <p className="trv-when">Tuesday 8 December, 8.30 to 10.30</p>
                  <div className="trv-row">
                    <div className="trv-f">
                      <label htmlFor="trv-fn">First name</label>
                      <input id="trv-fn" name="first-name" type="text"
                        autoComplete="given-name" required />
                    </div>
                    <div className="trv-f">
                      <label htmlFor="trv-ln">Last name</label>
                      <input id="trv-ln" name="last-name" type="text"
                        autoComplete="family-name" required />
                    </div>
                  </div>
                  <div className="trv-f">
                    <label htmlFor="trv-em">Work email</label>
                    <input id="trv-em" name="email" type="email"
                      autoComplete="email" required />
                  </div>
                  <div className="trv-row">
                    <div className="trv-f">
                      <label htmlFor="trv-co">Company</label>
                      <input id="trv-co" name="company" type="text"
                        autoComplete="organization" required />
                    </div>
                    <div className="trv-f">
                      <label htmlFor="trv-ro">Role</label>
                      <input id="trv-ro" name="role" type="text"
                        autoComplete="organization-title" required />
                    </div>
                  </div>
                  <input type="hidden" name="event" value="from-search-to-suitcase" />
                  <button type="submit" className="trv-btn" disabled={submitting}>
                    {submitting ? "Sending\u2026" : "Request a seat"}
                  </button>
                  {error && (
                    <p className="trv-form-error" role="alert">
                      That didn&rsquo;t go through. Try again, or email{" "}
                      <a href="mailto:mario@analogiq.io">mario@analogiq.io</a>.
                    </p>
                  )}
                  <p className="trv-fine">
                    Invitation only. We&rsquo;ll be in touch to confirm your seat, and
                    we&rsquo;ll send you updates about the morning. Unsubscribe any time.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────────────────────────── */}
      <div className="trv-mq" aria-hidden="true">
        <div className="trv-mq-track">
          <span>Now to 2030</span>✦<span>Front stage</span>✦<span>Back stage</span>✦<span>Roundtable</span>✦<span>Breakfast included</span>✦<span>Now to 2030</span>✦<span>Front stage</span>✦<span>Back stage</span>✦<span>Roundtable</span>✦<span>Breakfast included</span>✦
        </div>
      </div>

      {/* ── Two questions ───────────────────────────────────────────────── */}
      <section className="trv-sec">
        <div className="trv-wrap">
          <p className="trv-q">What is the morning about?</p>
          <h2 className="trv-big" style={{ maxWidth: "24ch" }}>
            Two questions every travel brand is now facing.
          </h2>
          <div className="trv-stages">

            <div className="trv-stage">
              <span className="trv-k">Front stage</span>
              <h3>If a holiday is planned, compared and booked inside ChatGPT, whose customer is it?</h3>
              <p>
                Travellers are starting, and increasingly finishing, in AI assistants. Your
                products are being found, described and compared by tools you don&rsquo;t
                control. The question is how to stay visible there, keep the booking, and
                keep the relationship once it&rsquo;s made.
              </p>
              <p className="trv-cov">On the morning</p>
              <ul>
                <li><span>Where discovery is moving, and what an assistant shows and why.</span></li>
                <li><span>How travel brands keep the booking, and the customer, when the journey starts elsewhere.</span></li>
                <li><span>What this does to your website, your search budget and your data.</span></li>
              </ul>
            </div>

            <div className="trv-stage trv-stage-back">
              <span className="trv-k">Back stage</span>
              <h3>How does a marketing team do more with less, and still make it feel personal?</h3>
              <p>
                Behind the scenes, agents can take on the work that eats a team&rsquo;s
                week: joining the data, finding what&rsquo;s unsold, producing the content,
                spotting what&rsquo;s working. Done well, that isn&rsquo;t only efficiency.
                It&rsquo;s the capacity to deliver a more tailored experience at scale.
              </p>
              <p className="trv-cov">On the morning</p>
              <ul>
                <li><span>Which jobs agents take on first, and which they shouldn&rsquo;t yet.</span></li>
                <li><span>What they need from your data, and what to fix before you build.</span></li>
                <li><span>How to keep people&rsquo;s judgement in the loop as the work scales.</span></li>
              </ul>
            </div>

          </div>

          <div className="trv-road">
            <span className="trv-k">Where this goes</span>
            <h3>A possible roadmap to 2030, and what to be thinking about now.</h3>
            <p>
              Most of the morning is spent here. Not predictions, but a view of where we
              think travel is heading on both sides of the stage, and the decisions that
              fall to a marketing team in the next two years.
            </p>
            <ul>
              <li>
                <b>Assistants that book, not just search</b>
                <span>What changes when the journey starts and finishes in ChatGPT, and what a travel brand has to own to stay in the relationship.</span>
              </li>
              <li>
                <b>The brand as the data behind the assistant</b>
                <span>Why your product, pricing and availability data becomes the product, and what that does to the website.</span>
              </li>
              <li>
                <b>Marketing teams of people and agents</b>
                <span>What the team looks like when agents do the routine work and people set the rules, and how you get there without losing the judgement.</span>
              </li>
              <li>
                <b>Knowing when not to act</b>
                <span>Stale data, conflicting rules, consumer law: the agent that asks rather than guesses, and why you&rsquo;re responsible for it either way.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Next three years ────────────────────────────────────────────── */}
      <section className="trv-sec trv-leave">
        <div className="trv-wrap">
          <p className="trv-q">What do I leave with?</p>
          <h2 className="trv-big">
            A view of the next three years, and what to do about it now.
          </h2>
          <p className="trv-lede">
            After the presentations, the table opens up: a chance to hear what others in
            travel are doing with AI.
          </p>
          <div className="trv-takes">
            <div className="trv-tk">
              <b>Where travel is going</b>
              <span>The roadmap to 2030, front stage and back stage.</span>
            </div>
            <div className="trv-tk">
              <b>What it means for your business</b>
              <span>Where an agent fits, which job first, and whether your data is ready.</span>
            </div>
            <div className="trv-tk">
              <b>What to be thinking about in 2027</b>
              <span>The decisions to make early, and what it would take to get from idea to a working agent.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Running order ───────────────────────────────────────────────── */}
      <section className="trv-sec trv-run">
        <div className="trv-wrap">
          <p className="trv-q">How does the morning run?</p>
          <h2 className="trv-big">Two hours. Breakfast included.</h2>
          <div className="trv-sl">
            <div className="trv-sl-r">
              <div className="trv-sl-t">8.30</div>
              <div className="trv-sl-s">
                Breakfast and introductions
                <span>Arrive, coffee, breakfast at the table.</span>
              </div>
            </div>
            <div className="trv-sl-r">
              <div className="trv-sl-t">8.50</div>
              <div className="trv-sl-s">
                What&rsquo;s happening now
                <span>Best practice and recognisable case studies, front stage and back stage.</span>
              </div>
            </div>
            <div className="trv-sl-r">
              <div className="trv-sl-t">9.20</div>
              <div className="trv-sl-s">
                What&rsquo;s next
                <span>A possible roadmap to 2030, and what to be thinking about now.</span>
              </div>
            </div>
            <div className="trv-sl-r">
              <div className="trv-sl-t">10.00</div>
              <div className="trv-sl-s">
                Roundtable
                <span>Where to start, and what it would take. What others in travel are doing with AI.</span>
              </div>
            </div>
            <div className="trv-sl-r">
              <div className="trv-sl-t">10.30</div>
              <div className="trv-sl-s">Close</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Venue ────────────────────────────────────────────────────────── */}
      <section className="trv-sec">
        <div className="trv-wrap">
          <p className="trv-q">Where is it?</p>
          <h2 className="trv-big">Duck and Waffle, Bishopsgate.</h2>

          <div className="trv-photos">
            <div className="trv-ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/event-from-search-to-suitcase-venue-1.jpg"
                alt="View from Duck and Waffle looking over the City of London, the Gherkin prominent in the foreground and the Thames in the distance"
              />
              <span>The view</span>
            </div>
            <div className="trv-ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/event-from-search-to-suitcase-venue-2.jpg"
                alt="Duck and Waffle dining room at sunset, curved tan leather booth seating and round tables set with wine glasses, floor-to-ceiling windows with an orange sky"
              />
              <span>The room</span>
            </div>
            <div className="trv-ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/event-from-search-to-suitcase-venue-3.jpg"
                alt="Street-level entrance to Duck and Waffle, glass doors with the yellow restaurant sign above and two cylindrical heaters with red rope barriers either side"
              />
              <span>The front door</span>
            </div>
            <div className="trv-ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/event-from-search-to-suitcase-venue-4.jpg"
                alt="Heron Tower at 110 Bishopsgate photographed from street level, a tall glass and steel skyscraper against a clear blue sky"
              />
              <span>The building</span>
            </div>
          </div>

          {/* Map: iframe loads after marketing consent; link shown always as fallback */}
          <div className="trv-map">
            <div className="trv-map-slot">
              <iframe
                data-cookieblock-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.834282693254!2d-0.0837744876636933!3d51.5162562099386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb295f6ff5f%3A0xb3e4152c8e522a3c!2sDuck%20%26%20Waffle!5e0!3m2!1sen!2suk!4v1793387199380!5m2!1sen!2suk"
                data-cookieconsent="marketing"
                title="Duck and Waffle on Google Maps"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="trv-map-frame"
              />
            </div>
            <div className="trv-map-body">
              <a
                href="https://maps.google.com/?q=Duck+and+Waffle,+110+Bishopsgate,+London+EC2N+4AY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="trv-addr">
            <div><b>110 Bishopsgate</b>, London EC2N 4AY</div>
          </div>
        </div>
      </section>

      {/* ── Closing: who is it for, logos, hosts ────────────────────────── */}
      <section className="trv-sec trv-close">
        <div className="trv-wrap">
          <p className="trv-q">Who is it for?</p>
          <h2 className="trv-big" style={{ maxWidth: "28ch" }}>
            Marketing, digital and commercial leaders from tour operators, holiday
            companies, airlines, cruise lines, hotel groups and travel agents.
          </h2>
          <p className="trv-lede">One table, invitation only.</p>

          <p className="trv-q" style={{ marginTop: 40 }}>Who we&rsquo;ve worked with</p>
          <LogoStrip style={{ marginTop: 16 }} />

          <p className="trv-q" style={{ marginTop: 40 }}>Who&rsquo;s hosting?</p>
          <div className="trv-hosts">
            {[
              { name: "Mario Kyriacou", role: "Co-founder",    img: "/img/team-mario-kyriacou.jpg" },
              { name: "Steve Renshaw",  role: "Co-founder",    img: "/img/team-steve-renshaw.jpg"  },
              { name: "Ruairi Bradley", role: "AI consultant", img: "/img/team-ruairi-bradley.jpg" },
            ].map(({ name, role, img }) => (
              <div key={name} className="trv-host">
                <div className="trv-host-pic">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={name} />
                </div>
                <div className="trv-host-tx">
                  <b>{name}</b>
                  <span>{role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audit offer ──────────────────────────────────────────────────── */}
      <section className="trv-sec trv-audit">
        <div className="trv-wrap trv-audit-wrap">
          <div>
            <p className="trv-q">Can&rsquo;t make the date?</p>
            <h2 className="trv-big" style={{ maxWidth: "16ch" }}>Two hours with us instead.</h2>
            <p className="trv-lede">
              A free AI audit of your marketing: where an agent would earn its place,
              where it wouldn&rsquo;t, and what you&rsquo;d need first.
            </p>
          </div>
          <div>
            <a href="/audit" className="trv-btn trv-btn-ink">Book the call</a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="trv-foot">
        <div className="trv-wrap trv-foot-inner">
          <div>
            <span className="trv-foot-word">analogiq</span>
            <div>Analogue intelligence.</div>
            <div style={{ marginTop: 8 }}>hello@analogiq.io &middot; London</div>
          </div>
          <div className="trv-foot-links">
            <a href="/privacy-policy">Privacy</a>
            <a href="/cookie-policy">Cookies</a>
            <a href="/modern-slavery">Modern slavery</a>
            <span>&copy; Analogiq Ltd</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
