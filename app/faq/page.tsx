import type { Metadata } from "next";
import { faq } from "@/content/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "FAQ | Analogiq",
  description:
    "What we do, who it is for, what it costs and how we work. If your question is not here, just ask.",
  alternates: { canonical: "https://analogiq.io/faq" },
  openGraph: {
    title: "FAQ | Analogiq",
    description:
      "What we do, who it is for, what it costs and how we work. If your question is not here, just ask.",
    url: "https://analogiq.io/faq",
  },
};

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" />
    <rect x="4" y="21" width="16" height="5" rx="2.5" />
  </svg>
);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
      {/* 1 · HERO */}
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>FAQ</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">Questions people ask us</p>
              <h1>The short answers.</h1>
              <p className="lede">
                What we do, who it is for, what it costs and how we work. If your question is not
                here, just ask.
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

      {/* 2 · Q&As */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="faqwrap">
            {faq.map((item, i) => (
              <details key={item.question} className="faq" {...(i === 0 ? { open: true } : {})}>
                <summary>
                  <span>{item.question}</span>
                  <i className="fx" aria-hidden="true" />
                </summary>
                <div className="fa">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <p style={{ marginTop: 32, fontSize: 16, color: "var(--muted)" }}>
            Still have a question?{" "}
            <a href="/contact" style={{ fontWeight: 600 }}>
              Ask us directly.
            </a>
          </p>
        </div>
      </section>

      {/* 3 · CTA */}
      <section className="sec cta2">
        <div className="wrap">
          <div className="ctabox">
            <div className="ctatext">
              <p className="q">Where do I start?</p>
              <h2>Tell us what is slow, expensive or manual.</h2>
              <p>
                We will tell you honestly whether AI is the answer, what form it would take, and
                what a first build looks like. If the honest answer is not yet, we will say that
                too.
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
    </>
  );
}
