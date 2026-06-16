"use client";

import React, { useState, useRef } from "react";
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

// ── Travel type cards ───────────────────────────────────────────────────────

const travelTypes = [
  {
    name: "Airlines",
    description: "Disruption comms and ancillary timing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4500F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    name: "Hotels",
    description: "Direct-booking recovery and reputation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4500F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21V9.5L12 3l9 6.5V21" />
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="7" y1="21" x2="7" y2="12" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="17" y1="21" x2="17" y2="12" />
      </svg>
    ),
  },
  {
    name: "Hospitality",
    description: "Feedback as a yield instrument",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4500F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    name: "Travel agents",
    description: "Predictive conversion and recovery",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4500F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    name: "Cruise companies",
    description: "The pre-trip window nobody else owns",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4500F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8H2l4 8h12l4-8z" />
        <path d="M2 16c0 2.2 4.5 4 10 4s10-1.8 10-4" />
        <path d="M12 4v4" />
      </svg>
    ),
  },
  {
    name: "Attractions & ticketing",
    description: "The booking moment and the return visit",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4500F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 5H3a1 1 0 00-1 1v4a2 2 0 010 4v4a1 1 0 001 1h12" />
        <path d="M9 5h12a1 1 0 011 1v4a2 2 0 000 4v4a1 1 0 01-1 1H9" />
        <line x1="9" y1="5" x2="9" y2="19" strokeDasharray="3 2" />
      </svg>
    ),
  },
];

// ── What to expect items ──────────────────────────────────────────────────

const whatToExpect: React.ReactNode[] = [
  "Discover which AI applications are truly valuable for your business, and which ones you can skip for now.",
  "Explore real-world examples from airlines, hotels, and OTAs, including the results they've achieved with AI.",
  "Pinpoint the two stages in the customer journey that drive the most revenue for your specific travel sector.",
  "Gain actionable AI strategies you can immediately implement in your marketing efforts.",
  <>
    Receive a complimentary copy of our 36-page report, &ldquo;<span style={{ fontWeight: 600, color: "#191A23" }}>The AI Layer</span>,&rdquo; for ongoing reference.
  </>,
];

// ── Small helpers ──────────────────────────────────────────────────────────

function OutlineCheckIcon() {
  return (
    <svg
      className="shrink-0 mt-[3px]"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="10" stroke="#D4500F" strokeWidth="1.5" />
      <path d="M7 11.5l2.5 2.5 5.5-5.5" stroke="#D4500F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  if (light) {
    return (
      <p
        className="mb-3 text-[11px] font-bold tracking-[0.12em] uppercase"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {children}
      </p>
    );
  }
  return <p className="eyebrow mb-3">{children}</p>;
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

// ── Host avatar ────────────────────────────────────────────────────────────

function HostAvatar() {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    return (
      <div
        className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-[18px]"
        style={{
          background: "#D4500F",
          outline: "3px solid #D4500F",
          outlineOffset: 3,
        }}
        aria-hidden="true"
      >
        MK
      </div>
    );
  }

  return (
    <div
      className="shrink-0 w-16 h-16 rounded-full overflow-hidden"
      style={{
        outline: "3px solid #D4500F",
        outlineOffset: 3,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/team/mario-kyriacou.jpg"
        alt="Mario Kyriacou, Co-founder of Analogiq"
        width={64}
        height={64}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
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
            Your joining link is on its way to your inbox from Zoom.
            Check spam if it hasn&apos;t arrived in a few minutes.
          </p>
          <p
            className="text-[15px] font-semibold"
            style={{ color: "#D4500F" }}
          >
            Thursday 2 July · 2pm UK · 45 minutes
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

// ── Main page ──────────────────────────────────────────────────────────────

export default function PageClient() {
  const formRef = useRef<HTMLDivElement>(null);
  const [registered, setRegistered] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const webhookUrl =
        process.env.NEXT_PUBLIC_ZAPIER_WEBINAR_WEBHOOK;
      if (!webhookUrl) throw new Error("Webhook URL not configured.");

      const res = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          company: fields.company,
          jobTitle: fields.jobTitle,
          event: "practical-ai-for-marketing",
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setRegistered(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        "Something went wrong saving your seat. Please try again, or email events@hello.analogiq.io and we\u2019ll register you directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      const input = formRef.current?.querySelector("input");
      input?.focus();
    }, 400);
  }

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      <CampaignHeader />

      {registered ? (
        <SuccessContent />
      ) : (
        <>
          <main className="pb-24 md:pb-0">

            {/* ── Hero: dark full-width band ─────────────────── */}
            <section style={{ background: "#191A23" }}>
              <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 pt-16 pb-16 max-sm:pt-12 max-sm:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                  {/* Left: headline */}
                  <div>
                    {/* Eyebrow + live tag row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <p
                        className="text-[11px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: "#D4500F" }}
                      >
                        THE AI TRAVEL EDITION · THURSDAY 2 JULY, 2PM UK · 45 MIN
                      </p>
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase"
                        style={{
                          border: "1.5px solid #D4500F",
                          color: "#D4500F",
                          whiteSpace: "nowrap",
                        }}
                      >
                        LIVE WEBINAR + RECORDING
                      </span>
                    </div>

                    <h1
                      className="font-display font-[500] text-[52px] max-lg:text-[40px] max-sm:text-[30px] leading-[1.12] mb-5"
                      style={{ color: "#FFFFFF" }}
                    >
                      Beyond the bookings: the AI travel edition
                    </h1>
                    <p
                      className="text-[17px] max-sm:text-[16px] leading-[1.7] max-w-[520px]"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                    >
                      Join our online session for travel and hospitality marketers to see how brands like{" "}
                      <span style={{ fontWeight: 600, color: "#FFFFFF" }}>Expedia</span>,{" "}
                      <span style={{ fontWeight: 600, color: "#FFFFFF" }}>KLM</span> and{" "}
                      <span style={{ fontWeight: 600, color: "#FFFFFF" }}>TUI</span>{" "}
                      have started applying AI across the customer journey.
                    </p>

                    {/* Featured brands row */}
                    <div className="mt-8">
                      <p
                        className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        Featured in the session
                      </p>
                      <div className="flex flex-wrap items-center gap-y-3">
                        {[
                          "Expedia",
                          "KLM",
                          "TUI",
                          "Booking.com",
                          "Virgin Atlantic",
                          "Hopper",
                          "Royal Caribbean",
                          "Merlin Entertainments",
                        ].map((brand, i) => (
                          <React.Fragment key={brand}>
                            {i > 0 && (
                              <span
                                className="mx-4 shrink-0"
                                style={{
                                  display: "inline-block",
                                  width: 1,
                                  height: 16,
                                  background: "rgba(255,255,255,0.18)",
                                }}
                                aria-hidden="true"
                              />
                            )}
                            <span
                              className="text-[19px] font-medium"
                              style={{ color: "rgba(255,255,255,0.78)" }}
                            >
                              {brand}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: registration form card — white on dark */}
                  <div
                    id="register"
                    ref={formRef}
                    className="bg-white rounded-2xl p-8 max-sm:p-6"
                    style={{
                      boxShadow: "0 12px 40px rgba(0,0,0,0.30)",
                    }}
                  >
                    <h2
                      className="font-display font-semibold text-[22px] leading-[1.25] mb-2"
                      style={{ color: "#191A23" }}
                    >
                      Save your seat
                    </h2>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                      <span
                        className="text-[11px] font-bold tracking-[0.1em] uppercase"
                        style={{ color: "#D4500F" }}
                      >
                        Live webinar
                      </span>
                      <span
                        className="text-[14px]"
                        style={{ color: "#4B5563" }}
                      >
                        Thursday 2 July, 2pm UK · 45 minutes
                      </span>
                    </div>
                    <p
                      className="text-[14px] leading-[1.65] mb-5"
                      style={{ color: "#4B5563" }}
                    >
                      Can&apos;t make it live? Register anyway and we&apos;ll send the recording.
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      </div>

                      {submitError && (
                        <p
                          className="text-[13px] leading-[1.55] px-1"
                          style={{ color: "#DC2626" }}
                          role="alert"
                        >
                          {submitError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 px-8 rounded-[14px] text-white text-[17px] font-semibold transition-colors mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: submitting ? "#B84309" : "#D4500F",
                        }}
                        onMouseEnter={(e) => {
                          if (!submitting)
                            e.currentTarget.style.background = "#B84309";
                        }}
                        onMouseLeave={(e) => {
                          if (!submitting)
                            e.currentTarget.style.background = "#D4500F";
                        }}
                      >
                        {submitting ? "Saving your seat..." : "Save my seat"}
                      </button>

                      <p
                        className="text-[13px] leading-[1.55] pt-1"
                        style={{ color: "#9CA3AF" }}
                      >
                        We&apos;ll only email you about this event. Your joining link comes straight from Zoom once you register.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* ── What to expect: white ─────────────────────── */}
            <section
              style={{
                background: "#FFFFFF",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-14 max-sm:py-10">
                <Eyebrow>WHAT TO EXPECT</Eyebrow>
                <ul className="space-y-5 max-w-[640px]">
                  {whatToExpect.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <OutlineCheckIcon />
                      <span
                        className="text-[16px] leading-[1.7]"
                        style={{ color: "#374151" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── Find your travel type: light grey ────────── */}
            <section style={{ background: "#F9FAFB" }}>
              <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-14 max-sm:py-10">
                <Eyebrow>FIND YOUR TRAVEL TYPE</Eyebrow>
                <p
                  className="text-[16px] leading-[1.7] mb-10 max-w-[560px]"
                  style={{ color: "#374151" }}
                >
                  Every example comes from a real brand in one of these.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {travelTypes.map((type) => (
                    <div
                      key={type.name}
                      className="bg-white rounded-2xl p-6"
                      style={{ border: "1px solid #E5E7EB" }}
                    >
                      <div className="mb-3" aria-hidden="true">{type.icon}</div>
                      <h3
                        className="font-display font-semibold text-[17px] leading-[1.3] mb-1.5"
                        style={{ color: "#191A23" }}
                      >
                        {type.name}
                      </h3>
                      <p
                        className="text-[14px] leading-[1.6]"
                        style={{ color: "#4B5563" }}
                      >
                        {type.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Host + closing CTA: white ─────────────────── */}
            <section
              style={{
                background: "#FFFFFF",
                borderTop: "1px solid #E5E7EB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <div className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-5 py-14 max-sm:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

                  {/* Host card */}
                  <div>
                    <Eyebrow>HOSTED BY</Eyebrow>
                    <div className="flex items-start gap-5">
                      <HostAvatar />
                      <div>
                        <p
                          className="font-display font-semibold text-[18px] leading-[1.3]"
                          style={{ color: "#191A23" }}
                        >
                          Mario Kyriacou
                        </p>
                        <p
                          className="text-[13px] mt-0.5 mb-3"
                          style={{ color: "#6B7280" }}
                        >
                          Co-founder, Analogiq
                        </p>
                        <p
                          className="text-[15px] leading-[1.7]"
                          style={{ color: "#374151" }}
                        >
                          Platform-agnostic, vendor-neutral. We went looking for where AI genuinely creates commercial outcomes in travel, not where the demo looks best.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dark closing panel */}
                  <div
                    className="rounded-2xl p-8 max-sm:p-6 flex flex-col justify-center"
                    style={{ background: "#191A23" }}
                  >
                    <h2
                      className="font-display font-semibold text-[26px] max-sm:text-[22px] leading-[1.25] mb-2"
                      style={{ color: "#FFFFFF" }}
                    >
                      45 minutes. Real examples. Outcomes attached.
                    </h2>
                    <p
                      className="text-[15px] leading-[1.65] mb-6"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      Plus the report to take away.
                    </p>
                    <div>
                      <button
                        onClick={scrollToForm}
                        className="inline-flex items-center px-7 py-3.5 rounded-[14px] text-white text-[16px] font-semibold transition-colors"
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
                    </div>
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
