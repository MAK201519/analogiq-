"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const expectCards = [
  {
    title: "No pitch",
    body: "We do not arrive with a predetermined answer. Every conversation begins with understanding your situation — your platforms, your team, your constraints and what you are trying to achieve.",
  },
  {
    title: "Honest assessment",
    body: "If we think we can help, we will tell you clearly what that looks like and what it involves. If we think someone else would serve you better, we will say that too.",
  },
  {
    title: "Clear next steps",
    body: "Every conversation ends with clarity about what happens next — whether that is a follow-up call, a more detailed assessment or simply a useful exchange of perspective.",
  },
];

const enquiryTypes = [
  "Platform modernisation",
  "AI activation",
  "Sitecore",
  "Uniform",
  "Data and insights",
  "Personalisation and experimentation",
  "General enquiry",
];

/* ─── CONTACT FORM ───────────────────────────────────────────────────────── */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-start justify-center py-16 px-12 max-sm:px-6 max-sm:py-10"
        style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", backgroundColor: "#ffffff", minHeight: 480 }}
      >
        <span style={{ fontSize: 40 }}>✓</span>
        <h3 className="mt-6" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 28, fontWeight: 700, color: "#111111", lineHeight: 1.2 }}>
          Thanks for getting in touch.
        </h3>
        <p className="mt-4 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
          We&apos;ll review your message and be in touch shortly. In the meantime, feel free to explore our work.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: "none" }}>
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>

      {/* Full name */}
      <div>
        <label className="block text-[13px] font-medium mb-2" style={{ color: "#111111" }}>
          Full name <span style={{ color: "#D4500F" }}>*</span>
        </label>
        <Input
          type="text"
          name="full-name"
          required
          placeholder="Your full name"
          className="w-full"
          style={{ borderRadius: 12, border: "1px solid #E5E7EB", padding: "12px 16px", fontSize: 15, height: "auto", color: "#111111" }}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-[13px] font-medium mb-2" style={{ color: "#111111" }}>
          Email address <span style={{ color: "#D4500F" }}>*</span>
        </label>
        <Input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full"
          style={{ borderRadius: 12, border: "1px solid #E5E7EB", padding: "12px 16px", fontSize: 15, height: "auto", color: "#111111" }}
        />
      </div>

      {/* Organisation */}
      <div>
        <label className="block text-[13px] font-medium mb-2" style={{ color: "#111111" }}>
          Organisation <span style={{ color: "#D4500F" }}>*</span>
        </label>
        <Input
          type="text"
          name="organisation"
          required
          placeholder="Your organisation"
          className="w-full"
          style={{ borderRadius: 12, border: "1px solid #E5E7EB", padding: "12px 16px", fontSize: 15, height: "auto", color: "#111111" }}
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-[13px] font-medium mb-2" style={{ color: "#111111" }}>
          Your role / title
        </label>
        <Input
          type="text"
          name="role"
          placeholder="e.g. CMO, Head of Digital"
          className="w-full"
          style={{ borderRadius: 12, border: "1px solid #E5E7EB", padding: "12px 16px", fontSize: 15, height: "auto", color: "#111111" }}
        />
      </div>

      {/* Enquiry type */}
      <div>
        <label className="block text-[13px] font-medium mb-2" style={{ color: "#111111" }}>
          Enquiry type
        </label>
        <select
          name="enquiry-type"
          className="w-full text-[15px] outline-none focus:ring-2 focus:ring-[#D4500F] focus:ring-offset-0"
          style={{ borderRadius: 12, border: "1px solid #E5E7EB", padding: "12px 16px", fontSize: 15, color: "#111111", backgroundColor: "#ffffff", appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          <option value="">Select an enquiry type</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[13px] font-medium mb-2" style={{ color: "#111111" }}>
          Message <span style={{ color: "#D4500F" }}>*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your current platform situation and what you are trying to achieve."
          className="w-full outline-none focus:ring-2 focus:ring-[#D4500F] resize-none"
          style={{ borderRadius: 12, border: "1px solid #E5E7EB", padding: "12px 16px", fontSize: 15, color: "#111111", fontFamily: "inherit", lineHeight: 1.65 }}
        />
      </div>

      {/* Submit */}
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "#D4500F", color: "#ffffff", boxShadow: "0 5px 0 0 #191A23" }}
        >
          Send message
        </Button>
      </motion.div>
    </form>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <div>
      <NavigationBar />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D0D0D" }} className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-[680px]">
            <motion.div variants={item}><Eyebrow muted>CONTACT</Eyebrow></motion.div>
            <motion.h1 variants={item} className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.0, color: "#ffffff" }}>
              Let&apos;s start a{" "}
              <span style={{ color: "#D4500F" }}>conversation.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-[18px] leading-[1.65] max-w-[560px]" style={{ color: "#9CA3AF" }}>
              We work with a focused number of organisations at any given time. If you are dealing with the gap between what your marketing team wants to achieve and what your current platforms allow — we would be glad to understand the situation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CONTACT SECTION — white, two col ──────────────────────── */}
      <section className="bg-white py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">

            {/* Left — form */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={item}><Eyebrow>SEND US A MESSAGE</Eyebrow></motion.div>
              <motion.h2 variants={item} className="mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
                Tell us about your situation.
              </motion.h2>
              <motion.p variants={item} className="mt-4 text-[16px] leading-[1.65] mb-8" style={{ color: "#6B7280" }}>
                There is no standard deck and no predetermined answer. We begin every engagement by listening.
              </motion.p>
              <motion.div variants={item}>
                <ContactForm />
              </motion.div>
            </motion.div>

            {/* Right — contact details */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-8"
            >
              {/* Direct contact */}
              <motion.div variants={item}>
                <Eyebrow>GET IN TOUCH DIRECTLY</Eyebrow>
                <h3 className="mt-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>
                  Prefer to reach out directly?
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65]" style={{ color: "#6B7280" }}>
                  If you would rather send a direct message or connect on LinkedIn, you can reach us below.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="mailto:hello@analogiq.io"
                    className="text-[16px] font-medium hover:underline"
                    style={{ color: "#D4500F" }}
                  >
                    hello@analogiq.io
                  </a>
                  <a
                    href="https://linkedin.com/company/analogiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] hover:underline"
                    style={{ color: "#6B7280" }}
                  >
                    linkedin.com/company/analogiq
                  </a>
                </div>
              </motion.div>

              {/* What happens next card */}
              <motion.div
                variants={item}
                className="max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50, backgroundColor: "#ffffff" }}
              >
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 18, fontWeight: 600, color: "#111111" }}>
                  What happens next
                </h3>
                <ul className="mt-5 flex flex-col gap-4">
                  {[
                    "We will respond within one business day",
                    "We begin every conversation by listening — no pitch, no proposal until we understand your situation",
                    "If we are not the right fit, we will tell you honestly",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="shrink-0 mt-[7px]"
                        style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#D4500F", display: "inline-block" }}
                        aria-hidden="true"
                      />
                      <span className="text-[14px] leading-[1.65]" style={{ color: "#6B7280" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT TO EXPECT — surface, three cards ─────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }} className="mb-12">
            <motion.div variants={item}><Eyebrow>WHAT TO EXPECT</Eyebrow></motion.div>
            <motion.h2 variants={item} className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#111111" }}>
              How we approach new conversations.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {expectCards.map(({ title, body }) => (
              <motion.div key={title} variants={item}
                className="flex flex-col cursor-default transition-transform duration-300 hover:-translate-y-[4px] max-sm:p-6 max-sm:[border-radius:24px]"
                style={{ backgroundColor: "#ffffff", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: 50 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: "#111111" }}>{title}</h3>
                <p className="text-[15px] leading-[1.65] mt-4" style={{ color: "#6B7280" }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. FINAL CTA — dark, two ghost buttons ───────────────────── */}
      <section style={{ backgroundColor: "#F3F3F3" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div
              className="flex flex-col items-center text-center"
              style={{ backgroundColor: "#0D0D0D", borderRadius: 45, border: "1px solid #191A23", boxShadow: "0 5px 0 0 #191A23", padding: "80px 64px" }}
            >
              <motion.div
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <motion.div variants={item}><Eyebrow muted>NOT READY YET?</Eyebrow></motion.div>
                <motion.h2 variants={item} className="mt-4 max-w-[560px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, color: "#ffffff" }}>
                  Not ready to reach out yet?
                </motion.h2>
                <motion.p variants={item} className="mt-5 text-[16px] leading-[1.65] max-w-[480px]" style={{ color: "#9CA3AF" }}>
                  Read about our work, explore our services or review our thinking on digital platforms and AI activation. When the time is right, we will be here.
                </motion.p>
                <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild className="font-medium text-[16px] border-0 hover:opacity-80 transition-opacity"
                      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)", boxShadow: "0 5px 0 0 rgba(255,255,255,0.1)" }}>
                      <Link href="/work">View our work</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild className="font-medium text-[16px] border-0 hover:opacity-80 transition-opacity"
                      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500, borderRadius: 14, padding: "20px 35px", height: "auto", backgroundColor: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)", boxShadow: "0 5px 0 0 rgba(255,255,255,0.1)" }}>
                      <Link href="/services">Explore our services</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
