"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

// ── Types ──────────────────────────────────────────────────────────────────

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

// ── Cover card data ────────────────────────────────────────────────────────

type CoverCard = {
  number: string;
  heading: string;
  promise: React.ReactNode;
  bullets: React.ReactNode[];
  signature?: boolean;
};

const coverCards: CoverCard[] = [
  {
    number: "01",
    heading: "Finding and keeping the right customers",
    promise:
      "Predict who\u2019s worth it, who\u2019s leaving, and what brings them back.",
    bullets: [
      <>
        Predictive <strong>customer value</strong> and{" "}
        <strong>churn</strong>
      </>,
      <>
        AI-led <strong>audience selection</strong> for paid media
      </>,
      <>
        The same engine whether it&apos;s a retailer&apos;s reorder,
        an <strong>insurer&apos;s renewal</strong>, or a travel
        brand&apos;s lapsing booker
      </>,
    ],
  },
  {
    number: "02",
    heading: "Getting more from the traffic you already have",
    promise:
      "Turn visitors into customers without buying more of them.",
    bullets: [
      <>
        On-site decisioning tuned to <strong>margin</strong>, not
        clicks
      </>,
      <>
        Works on a product range, a <strong>quote journey</strong>,
        or a package
      </>,
      <>
        What still converts, and what&apos;s now{" "}
        <strong>table stakes</strong>
      </>,
    ],
  },
  {
    number: "03",
    heading: "Helping people find what they came for",
    promise:
      "The most under-tuned revenue lever most brands own.",
    bullets: [
      <>
        Fixing <strong>failed searches</strong> that quietly leak
        revenue
      </>,
      <>
        Reranking results against{" "}
        <strong>commercial priority</strong>
      </>,
      <>
        Real <strong>before-and-after</strong> numbers
      </>,
    ],
  },
  {
    number: "04",
    heading: "Forecasting, pricing and capacity",
    promise: "Predict demand, then act on it.",
    bullets: [
      <>
        <strong>Sell-through</strong> and markdown in retail
      </>,
      <>
        <strong>Yield</strong> and ancillary pricing in travel
      </>,
      <>
        The <strong>regulatory lines</strong> you don&apos;t want to
        cross
      </>,
    ],
  },
  {
    number: "05",
    heading: "Turning your data into decisions",
    promise:
      "The data\u2019s already there. Nobody has time to read it.",
    bullets: [
      <>
        A <strong>weekly radar</strong> of commercial opportunities
      </>,
      <>
        Which products or policies are <strong>hidden</strong>, which
        customers are about to <strong>lapse</strong>
      </>,
      <>
        Where spend is <strong>leaking</strong>, and what to do{" "}
        <strong>first</strong>
      </>,
    ],
    signature: true,
  },
];

// ── Takeaway items ─────────────────────────────────────────────────────────

const takeawayItems = [
  "A clear map of which AI applications move revenue, conversion and retention, and which are already commoditised.",
  "The ability to tell decision AI from content AI, so your budget follows the value.",
  "A practical opportunity radar your team can start building the same week.",
  "An honest view of what to avoid: the overhyped use cases, and the pricing and agent traps that carry real reputational and regulatory risk.",
];

// ── Small helpers ──────────────────────────────────────────────────────────

function OrangeTick() {
  return (
    <div
      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-[3px]"
      style={{ background: "#D4500F" }}
      aria-hidden="true"
    >
      <svg
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 4.5L4.5 8L11 1"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

function OrangeCtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-8 py-4 rounded-[14px] text-white text-[17px] font-semibold transition-colors ${className}`}
      style={{ background: "#D4500F" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "#B84309")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "#D4500F")
      }
    >
      {children}
    </a>
  );
}

// ── Campaign header ────────────────────────────────────────────────────────

function CampaignHeader() {
  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 h-[72px] flex items-center">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Analogiq homepage"
        >
          <span
            className="font-serif-italic text-[22px] transition-opacity hover:opacity-75"
            style={{ color: "#191A23" }}
          >
            Analogiq
          </span>
        </Link>
      </div>
    </header>
  );
}

// ── Form field ─────────────────────────────────────────────────────────────

type FormFieldProps = {
  label: string;
  name: keyof FormFields;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
};

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
}: FormFieldProps) {
  const id = `field-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[14px] font-semibold mb-1.5"
        style={{ color: "#374151" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl px-4 py-3 text-[15px] outline-none transition-colors ${
          error
            ? "border-2 border-red-500 focus:ring-2 focus:ring-red-100"
            : "border border-[#E5E7EB] focus:border-[#D4500F] focus:ring-2 focus:ring-[#D4500F]/20"
        }`}
        style={{ background: "#FFFFFF", color: "#191A23" }}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-[13px]"
          style={{ color: "#DC2626" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ── Success state ──────────────────────────────────────────────────────────

function SuccessContent() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-20 max-sm:py-12">
        {/* Confirmation block */}
        <div className="max-w-[600px] mx-auto text-center mb-20 max-sm:mb-12">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "#D1FAE5" }}
            aria-hidden="true"
          >
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 11L10 19L26 2"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1
            className="font-display font-semibold text-[40px] max-sm:text-[28px] leading-[1.2] mb-4"
            style={{ color: "#191A23" }}
          >
            You&apos;re registered
          </h1>
          <p
            className="text-[17px] leading-[1.7] mb-4"
            style={{ color: "#374151" }}
          >
            A calendar invite and joining link are on their way to
            your inbox.
          </p>
          <p
            className="text-[15px] font-semibold"
            style={{ color: "#D4500F" }}
          >
            Thursday 2 July · 2pm UK · 60 minutes
          </p>
        </div>

        {/* While you're here */}
        <div className="mb-16 max-sm:mb-10">
          <h2
            className="font-display font-semibold text-[28px] max-sm:text-[22px] leading-[1.3] mb-8 max-sm:mb-6"
            style={{ color: "#191A23" }}
          >
            While you&apos;re here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/work/capco"
              className="block bg-white rounded-2xl p-8 max-sm:p-6 transition-all hover:shadow-md"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <p className="eyebrow mb-3">Case study</p>
              <h3
                className="font-display font-semibold text-[20px] leading-[1.35] mb-3"
                style={{ color: "#191A23" }}
              >
                Capco: AI Personalisation and Lead Scoring
              </h3>
              <p
                className="text-[15px] leading-[1.65] mb-4"
                style={{ color: "#4B5563" }}
              >
                How Analogiq built a personalisation and lead scoring
                engine for Capco, improving conversion across their
                digital channels.
              </p>
              <span
                className="text-[14px] font-semibold"
                style={{ color: "#D4500F" }}
              >
                Read case study →
              </span>
            </Link>
            <Link
              href="/work/capco-platform"
              className="block bg-white rounded-2xl p-8 max-sm:p-6 transition-all hover:shadow-md"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <p className="eyebrow mb-3">Case study</p>
              <h3
                className="font-display font-semibold text-[20px] leading-[1.35] mb-3"
                style={{ color: "#191A23" }}
              >
                Capco: Platform Rebuild
              </h3>
              <p
                className="text-[15px] leading-[1.65] mb-4"
                style={{ color: "#4B5563" }}
              >
                A full rebuild of Capco&apos;s digital platform,
                modernising the stack and improving content delivery
                at enterprise scale.
              </p>
              <span
                className="text-[14px] font-semibold"
                style={{ color: "#D4500F" }}
              >
                Read case study →
              </span>
            </Link>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 rounded-[14px] text-[16px] font-semibold transition-colors hover:bg-[#F3F3F3]"
            style={{
              border: "1px solid #191A23",
              color: "#191A23",
            }}
          >
            Explore our services
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 rounded-[14px] text-white text-[16px] font-semibold transition-colors"
            style={{ background: "#191A23" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#2a2b35")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#191A23")
            }
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

// ── Sector cards ───────────────────────────────────────────────────────────

const sectorCards = [
  {
    name: "Retail",
    description:
      "Predicting the reorder, sell-through and markdown, and which products are hidden from the customers who\u2019d buy them.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4500F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 8h20M2 8l3-5h14l3 5M2 8v13h20V8" />
        <rect x="9" y="13" width="6" height="8" rx="0.5" />
      </svg>
    ),
  },
  {
    name: "Ecommerce",
    description:
      "On-site decisioning tuned to margin, and fixing the failed searches that quietly leak revenue.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4500F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    name: "Financial services",
    description:
      "Spotting the renewal at risk, optimising the quote journey, and the regulatory lines you don\u2019t want to cross.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4500F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21V9.5L12 3l9 6.5V21" />
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="7" y1="21" x2="7" y2="12" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="17" y1="21" x2="17" y2="12" />
      </svg>
    ),
  },
  {
    name: "Travel",
    description:
      "Yield and ancillary pricing, and catching the lapsing booker before they\u2019re gone.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4500F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    name: "Ticketing",
    description:
      "Demand forecasting and risk-based pricing when capacity is fixed and the clock is running.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4500F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 5H3a1 1 0 00-1 1v4a2 2 0 010 4v4a1 1 0 001 1h12" />
        <path d="M9 5h12a1 1 0 011 1v4a2 2 0 000 4v4a1 1 0 01-1 1H9" />
        <line x1="9" y1="5" x2="9" y2="19" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    name: "B2B",
    description:
      "AI-led audience selection, predictive account value, and a weekly radar of where the pipeline is leaking.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4500F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="2" y1="13" x2="22" y2="13" />
      </svg>
    ),
  },
];

// ── Main page ──────────────────────────────────────────────────────────────

export default function PageClient() {
  const [registered, setRegistered] = useState(false);
  const [fields, setFields] = useState<FormFields>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!fields.firstName.trim())
      next.firstName = "First name is required.";
    if (!fields.lastName.trim())
      next.lastName = "Last name is required.";
    if (!fields.email.trim()) {
      next.email = "Work email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
    ) {
      next.email = "Enter a valid email address.";
    }
    if (!fields.company.trim())
      next.company = "Company is required.";
    if (!fields.jobTitle.trim())
      next.jobTitle = "Job title is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setRegistered(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      <CampaignHeader />

      {registered ? (
        <SuccessContent />
      ) : (
        <>
          <main className="pb-24 md:pb-0">

            {/* ── Hero: two-column on desktop ───────────────── */}
            <section className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 pt-14 pb-12 max-sm:pt-10 max-sm:pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* Left: headline + live-webinar indicator */}
                <div>
                  <Eyebrow>AI for marketing, with the numbers attached</Eyebrow>

                  {/* Live-webinar badge */}
                  <div
                    className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-6 px-4 py-2.5 rounded-full text-[14px] font-semibold"
                    style={{
                      background: "#D4500F",
                      color: "#FFFFFF",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                      style={{ background: "#FFFFFF", opacity: 0.9 }}
                      aria-hidden="true"
                    />
                    <span>Live webinar + recording</span>
                    <span
                      className="font-normal opacity-60"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                    <span className="font-bold">
                      Thursday 2 July, 2pm UK · 60 minutes
                    </span>
                  </div>

                  <h1
                    className="font-display font-[500] text-[56px] max-lg:text-[42px] max-sm:text-[30px] leading-[1.12] mb-5"
                    style={{ color: "#191A23" }}
                  >
                    A Practical Map of AI Across the{" "}
                    <span style={{ color: "#D4500F" }}>
                      Marketing Function
                    </span>
                  </h1>
                  <p
                    className="text-[17px] max-sm:text-[16px] leading-[1.7] max-w-[520px] mb-8"
                    style={{ color: "#374151" }}
                  >
                    Acquisition, retention, conversion, search,
                    forecasting and pricing. Real examples from real
                    brands, every one with the outcome attached, and
                    an honest line on what to skip.
                  </p>

                  {/* Mini walk-away list — balances left column height */}
                  <div
                    className="rounded-xl px-5 py-4"
                    style={{
                      background: "#F9FAFB",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <p
                      className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3"
                      style={{ color: "#9CA3AF" }}
                    >
                      What you&apos;ll walk away with
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "A clear map of which AI applications move revenue, and which are already commoditised",
                        "The difference between decision AI and content AI, so budget follows value",
                        "A practical opportunity radar your team can build the same week",
                        "An honest list of what to avoid: the overhyped use cases and the pricing traps that carry real risk",
                      ].map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[14px] leading-[1.55]"
                          style={{ color: "#374151" }}
                        >
                          <span
                            className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-[2px]"
                            style={{ background: "#D4500F" }}
                            aria-hidden="true"
                          >
                            <svg
                              width="8"
                              height="6"
                              viewBox="0 0 8 6"
                              fill="none"
                            >
                              <path
                                d="M1 3L3 5L7 1"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: registration form card */}
                <div
                  id="register"
                  className="bg-white rounded-2xl p-8 max-sm:p-6"
                  style={{
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  }}
                >
                  <h2
                    className="font-display font-semibold text-[22px] leading-[1.25] mb-2"
                    style={{ color: "#191A23" }}
                  >
                    Save your seat
                  </h2>
                  <p
                    className="text-[14px] leading-[1.65] mb-5"
                    style={{ color: "#4B5563" }}
                  >
                    60 minutes, practical throughout. Real examples,
                    outcomes attached, and an honest list of what to
                    skip. Can&apos;t make it live? Register anyway
                    and we&apos;ll send the recording.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        label="First name"
                        name="firstName"
                        value={fields.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        autoComplete="given-name"
                      />
                      <FormField
                        label="Last name"
                        name="lastName"
                        value={fields.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        autoComplete="family-name"
                      />
                    </div>
                    <FormField
                      label="Work email"
                      name="email"
                      type="email"
                      value={fields.email}
                      onChange={handleChange}
                      error={errors.email}
                      autoComplete="email"
                    />
                    <FormField
                      label="Company"
                      name="company"
                      value={fields.company}
                      onChange={handleChange}
                      error={errors.company}
                      autoComplete="organization"
                    />
                    <FormField
                      label="Job title"
                      name="jobTitle"
                      value={fields.jobTitle}
                      onChange={handleChange}
                      error={errors.jobTitle}
                      autoComplete="organization-title"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-[14px] text-white text-[17px] font-semibold transition-colors mt-1"
                      style={{ background: "#D4500F" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#B84309")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#D4500F")
                      }
                    >
                      Save my seat
                    </button>

                    <p
                      className="text-[13px] leading-[1.55] pt-1"
                      style={{ color: "#9CA3AF" }}
                    >
                      We&apos;ll only email you about this event.
                      Notifications from events@hello.analogiq.io.
                    </p>
                  </form>
                </div>
              </div>
            </section>

            {/* ── Hook ─────────────────────────────────────── */}
            <section
              className="bg-white"
              style={{
                borderTop: "1px solid #E5E7EB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-10 max-sm:py-8">
                <div className="max-w-[640px]">
                  <p
                    className="text-[17px] leading-[1.75] mb-5"
                    style={{ color: "#374151" }}
                  >
                    AI is top of every marketing agenda, and most of
                    the conversation is still about content and
                    prompts. The brands seeing real commercial results
                    are doing something different. They are using AI
                    to make decisions:{" "}
                    <strong style={{ color: "#191A23" }}>
                      what to promote, who to target, what to stock,
                      what to price, and what to do next
                    </strong>
                    .
                  </p>
                  <p
                    className="text-[17px] leading-[1.75]"
                    style={{ color: "#374151" }}
                  >
                    This masterclass maps where that is actually
                    happening across the marketing function. Real
                    examples from retail, ecommerce, financial
                    services, travel, ticketing and B2B, with the
                    outcomes attached and an honest line on what is
                    genuinely valuable versus{" "}
                    <strong style={{ color: "#191A23" }}>
                      what your platform already does for free
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* ── What we'll cover ─────────────────────────── */}
            <section className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-14 max-sm:py-10">
              <Eyebrow>What we&apos;ll cover</Eyebrow>
              <h2
                className="font-display font-semibold text-[36px] max-lg:text-[30px] max-sm:text-[24px] leading-[1.2] mb-2"
                style={{ color: "#191A23" }}
              >
                Function by function, with the examples attached
              </h2>
              <p
                className="text-[15px] leading-[1.65] mb-5 max-w-[580px]"
                style={{ color: "#4B5563" }}
              >
                We follow the customer from first touch to repeat
                revenue with real cases from retail, ecommerce,
                financial services, travel and ticketing.
              </p>

              {/* Narrative spine */}
              <div
                className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-8 px-5 py-3 rounded-xl text-[13px] font-semibold"
                style={{
                  background: "#F3F4F6",
                  border: "1px solid #E5E7EB",
                }}
              >
                <span style={{ color: "#6B7280" }}>01 Acquire</span>
                <span
                  style={{ color: "#D1D5DB" }}
                  aria-hidden="true"
                >
                  →
                </span>
                <span style={{ color: "#6B7280" }}>02 Convert</span>
                <span
                  style={{ color: "#D1D5DB" }}
                  aria-hidden="true"
                >
                  →
                </span>
                <span style={{ color: "#6B7280" }}>03 Find</span>
                <span
                  style={{ color: "#D1D5DB" }}
                  aria-hidden="true"
                >
                  →
                </span>
                <span style={{ color: "#6B7280" }}>04 Forecast</span>
                <span
                  style={{ color: "#D1D5DB" }}
                  aria-hidden="true"
                >
                  →
                </span>
                <span style={{ color: "#D4500F" }}>05 Decide</span>
              </div>

              {/* 2×2 grid — cards 01–04 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {coverCards.slice(0, 4).map((card) => (
                  <div
                    key={card.number}
                    className="bg-white rounded-2xl p-6 max-sm:p-5"
                    style={{ border: "1px solid #E5E7EB" }}
                  >
                    <p
                      className="text-[12px] font-bold tracking-[0.1em] uppercase mb-2"
                      style={{ color: "#D4500F" }}
                    >
                      {card.number}
                    </p>
                    <h3
                      className="font-display font-semibold text-[18px] leading-[1.35] mb-2"
                      style={{ color: "#191A23" }}
                    >
                      {card.heading}
                    </h3>
                    <p
                      className="text-[14px] font-semibold leading-[1.55] mb-3"
                      style={{ color: "#191A23" }}
                    >
                      {card.promise}
                    </p>
                    <ul className="space-y-1.5">
                      {card.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[14px] leading-[1.6]"
                          style={{ color: "#4B5563" }}
                        >
                          <span
                            className="shrink-0 mt-[4px] text-[12px] font-bold"
                            style={{ color: "#D4500F" }}
                            aria-hidden="true"
                          >
                            —
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Card 05: full-width signature — the climax */}
              {(() => {
                const card = coverCards[4];
                return (
                  <div
                    className="rounded-2xl p-8 max-sm:p-6"
                    style={{
                      border: "1px solid #E8D5C8",
                      borderLeft: "4px solid #D4500F",
                      background: "#FDFAF8",
                    }}
                  >
                    {/* Number + signature tag */}
                    <div className="flex items-center gap-3 mb-3">
                      <p
                        className="text-[12px] font-bold tracking-[0.1em] uppercase"
                        style={{ color: "#D4500F" }}
                      >
                        {card.number}
                      </p>
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase"
                        style={{
                          background: "#D4500F",
                          color: "#FFFFFF",
                        }}
                      >
                        The payoff
                      </span>
                    </div>
                    <h3
                      className="font-display font-semibold text-[30px] max-lg:text-[26px] max-sm:text-[22px] leading-[1.3] mb-2"
                      style={{ color: "#191A23" }}
                    >
                      {card.heading}
                    </h3>
                    <p
                      className="text-[16px] font-semibold leading-[1.55] mb-6"
                      style={{ color: "#191A23" }}
                    >
                      {card.promise}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3">
                      {card.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[15px] leading-[1.6]"
                          style={{ color: "#4B5563" }}
                        >
                          <span
                            className="shrink-0 mt-[4px] text-[12px] font-bold"
                            style={{ color: "#D4500F" }}
                            aria-hidden="true"
                          >
                            —
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </section>

            {/* ── In your sector ───────────────────────────── */}
            <section
              className="bg-white"
              style={{
                borderTop: "1px solid #E5E7EB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-14 max-sm:py-10">
                <Eyebrow>In your sector</Eyebrow>
                <h2
                  className="font-display font-semibold text-[36px] max-lg:text-[30px] max-sm:text-[24px] leading-[1.2] mb-2"
                  style={{ color: "#191A23" }}
                >
                  The same session, in your world
                </h2>
                <p
                  className="text-[15px] leading-[1.65] mb-10 max-w-[520px]"
                  style={{ color: "#4B5563" }}
                >
                  Every example in the session comes from a real brand
                  in one of these sectors. Find yours.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectorCards.map((sector) => (
                    <div
                      key={sector.name}
                      className="bg-white rounded-2xl p-6"
                      style={{ border: "1px solid #E5E7EB" }}
                    >
                      <div className="mb-3">{sector.icon}</div>
                      <h3
                        className="font-display font-semibold text-[17px] leading-[1.3] mb-2"
                        style={{ color: "#191A23" }}
                      >
                        {sector.name}
                      </h3>
                      <p
                        className="text-[14px] leading-[1.6]"
                        style={{ color: "#4B5563" }}
                      >
                        {sector.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Who it's for + Why Analogiq side by side ──── */}
            <section className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-12 max-sm:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <Eyebrow>Who it&apos;s for</Eyebrow>
                  <h2
                    className="font-display font-semibold text-[28px] max-lg:text-[24px] max-sm:text-[22px] leading-[1.25] mb-4"
                    style={{ color: "#191A23" }}
                  >
                    Built for people who run marketing on a real stack
                  </h2>
                  <p
                    className="text-[16px] leading-[1.75]"
                    style={{ color: "#374151" }}
                  >
                    Senior marketing and digital leaders, and the
                    teams who do the work, across retail, ecommerce,
                    financial services, B2B and beyond. If you run
                    marketing on a real stack and you are tired of AI
                    sessions that never reach a number, this is built
                    for you.
                  </p>
                </div>
                <div>
                  <Eyebrow>Why Analogiq</Eyebrow>
                  <h2
                    className="font-display font-semibold text-[28px] max-lg:text-[24px] max-sm:text-[22px] leading-[1.25] mb-4"
                    style={{ color: "#191A23" }}
                  >
                    Platform-agnostic. Vendor-neutral.
                  </h2>
                  <p
                    className="text-[16px] leading-[1.75]"
                    style={{ color: "#374151" }}
                  >
                    We are platform-agnostic and vendor-neutral. We
                    went looking for where AI is genuinely creating
                    commercial outcomes, not where the demo looks
                    best. The honest version of that picture is what
                    you will get in this hour.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Hosted by: horizontal strip ───────────────── */}
            <section
              className="bg-white"
              style={{
                borderTop: "1px solid #E5E7EB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-10 max-sm:py-8">
                <Eyebrow>Hosted by</Eyebrow>
                <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
                  <div
                    className="shrink-0 w-16 h-16 rounded-full overflow-hidden"
                    style={{
                      outline: "3px solid #D4500F",
                      outlineOffset: 3,
                    }}
                  >
                    <Image
                      src="/team/mario-kyriacou.jpg"
                      alt="Mario Kyriacou, Co-founder of Analogiq"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display font-semibold text-[18px] leading-[1.3]"
                      style={{ color: "#191A23" }}
                    >
                      Mario Kyriacou
                    </p>
                    <p
                      className="text-[13px] mt-0.5 mb-2"
                      style={{ color: "#6B7280" }}
                    >
                      Co-founder, Analogiq
                    </p>
                    <p
                      className="text-[15px] leading-[1.7]"
                      style={{ color: "#374151" }}
                    >
                      Mario co-founded Analogiq to help marketing
                      teams turn the technology they already own into
                      commercial results. This session is the
                      practical version of that work: what AI
                      actually does for marketing, with the numbers
                      attached.
                    </p>
                  </div>
                  <div className="shrink-0 max-sm:w-full">
                    <a
                      href="#register"
                      className="inline-flex items-center justify-center max-sm:w-full px-7 py-3.5 rounded-[14px] text-white text-[16px] font-semibold transition-colors whitespace-nowrap"
                      style={{ background: "#D4500F" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#B84309")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#D4500F")
                      }
                    >
                      Save my seat
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </main>

          {/* ── Sticky mobile CTA ─────────────────────────── */}
          <div
            className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-4 bg-white"
            style={{ borderTop: "1px solid #E5E7EB" }}
          >
            <a
              href="#register"
              className="flex items-center justify-center w-full py-4 rounded-[14px] text-white text-[16px] font-semibold transition-colors"
              style={{ background: "#D4500F" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#B84309")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#D4500F")
              }
            >
              Save my seat
            </a>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
