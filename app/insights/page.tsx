"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";
import Eyebrow from "../components/Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const featuredArticles = [
  {
    category: "STRATEGY",
    title: "Why most AI marketing pilots never scale",
    excerpt:
      "Most organisations have run an AI pilot. Few have made it operational. The gap between an encouraging proof of concept and a capability that improves marketing performance every day is not a technology gap — it is an infrastructure, workflow and organisational gap. Here is what we have learned from closing it.",
    readTime: "8 min read",
    href: "/insights/why-ai-pilots-never-scale",
  },
  {
    category: "PLATFORMS",
    title: "The case for composable architecture in 2026",
    excerpt:
      "Monolithic CMS platforms are becoming a competitive disadvantage. The organisations moving fastest in digital marketing are those that have replaced rigid, all-in-one platforms with composable architectures that give marketing teams genuine control. Here is the case for making the transition — and what it actually involves.",
    readTime: "6 min read",
    href: "/insights/case-for-composable-architecture",
  },
  {
    category: "AI",
    title: "Closing the Digital Activation Gap",
    excerpt:
      "The gap between marketing ambition and platform capability is growing. AI, personalisation and continuous experimentation are now table stakes for competitive marketing operations — but most enterprise platforms were not designed to support them. Here is Analogiq's framework for closing the gap systematically.",
    readTime: "7 min read",
    href: "/insights/closing-the-digital-activation-gap",
  },
];

const allArticles = [
  {
    category: "AI",
    title: "Why most AI marketing pilots never scale",
    excerpt:
      "The gap between proof of concept and operational capability is not a technology problem. It is an infrastructure and organisational problem.",
    readTime: "8 min read",
    href: "/insights/why-ai-pilots-never-scale",
  },
  {
    category: "PLATFORMS",
    title: "The case for composable architecture in 2026",
    excerpt:
      "Monolithic CMS platforms are becoming a competitive disadvantage for enterprise marketing teams.",
    readTime: "6 min read",
    href: "/insights/case-for-composable-architecture",
  },
  {
    category: "AI",
    title: "Closing the Digital Activation Gap",
    excerpt:
      "Analogiq's framework for closing the gap between marketing ambition and platform capability.",
    readTime: "7 min read",
    href: "/insights/closing-the-digital-activation-gap",
  },
  {
    category: "SITECORE",
    title: "Sitecore XM Cloud — what the migration actually involves",
    excerpt:
      "The transition from Sitecore XP to XM Cloud is one of the most common platform projects we are asked about. Here is what it actually involves.",
    readTime: "9 min read",
    href: "/insights/sitecore-xm-cloud-migration",
  },
  {
    category: "PERSONALISATION",
    title: "Why personalisation pilots rarely become programmes",
    excerpt:
      "Personalisation fails to scale for predictable reasons. Platform limitations, data fragmentation and missing operational workflows — and all of them are fixable.",
    readTime: "6 min read",
    href: "/insights/personalisation-pilots",
  },
  {
    category: "DATA",
    title: "The data foundations AI actually needs",
    excerpt:
      "AI systems are only as good as the data that feeds them. Most organisations underestimate what well-structured data infrastructure actually requires.",
    readTime: "5 min read",
    href: "/insights/data-foundations-for-ai",
  },
  {
    category: "STRATEGY",
    title: "What CMOs should ask their platform teams",
    excerpt:
      "Five questions that reveal whether your digital platform is enabling your marketing ambitions or quietly constraining them.",
    readTime: "4 min read",
    href: "/insights/cmo-platform-questions",
  },
  {
    category: "UNIFORM",
    title: "Uniform in practice — what composable delivery actually looks like",
    excerpt:
      "Composable architecture is easy to describe in theory. Here is what it looks like when you actually implement it — the decisions, the trade-offs and the outcomes.",
    readTime: "7 min read",
    href: "/insights/uniform-in-practice",
  },
  {
    category: "EXPERIMENTATION",
    title: "Building an experimentation programme that actually runs",
    excerpt:
      "Most organisations want to experiment continuously. Few have the infrastructure to do it. Here is what a working experimentation programme actually requires.",
    readTime: "6 min read",
    href: "/insights/experimentation-programme",
  },
];

const topics = [
  "AI Activation",
  "Platform Modernisation",
  "Composable Architecture",
  "Personalisation",
  "Experimentation",
  "Data Infrastructure",
];

function CategoryTag({ label }: { label: string }) {
  return (
    <span
      style={{
        backgroundColor: "#FDF0E8",
        color: "#D4500F",
        borderRadius: 999,
        padding: "4px 12px",
        fontSize: 11,
        fontWeight: 600,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        letterSpacing: "0.06em",
        textTransform: "uppercase" as const,
      }}
    >
      {label}
    </span>
  );
}

function FeaturedCard({ article }: { article: (typeof featuredArticles)[0] }) {
  return (
    <motion.div
      variants={item}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 20,
        border: "1px solid #191A23",
        boxShadow: "0 5px 0 0 #191A23",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image block */}
      <div
        style={{
          height: 220,
          backgroundColor: "#F9F7F4",
          position: "relative",
          padding: "16px 20px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <CategoryTag label={article.category} />
      </div>
      {/* Content */}
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "#0D0D0D",
            lineHeight: 1.3,
            marginBottom: 12,
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 15,
            color: "#4B5563",
            lineHeight: 1.65,
            marginBottom: 20,
            flex: 1,
          }}
        >
          {article.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 13,
              color: "#9CA3AF",
              fontWeight: 500,
            }}
          >
            {article.readTime}
          </span>
          <Link
            href={article.href}
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#D4500F",
              textDecoration: "none",
            }}
          >
            Read more →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ArticleCard({ article }: { article: (typeof allArticles)[0] }) {
  return (
    <motion.div
      variants={item}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 20,
        border: "1px solid #191A23",
        boxShadow: "0 5px 0 0 #191A23",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image block */}
      <div
        style={{
          height: 180,
          backgroundColor: "#F9F7F4",
          padding: "14px 18px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <CategoryTag label={article.category} />
      </div>
      {/* Content */}
      <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: 17,
            fontWeight: 700,
            color: "#0D0D0D",
            lineHeight: 1.3,
            marginBottom: 10,
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 14,
            color: "#4B5563",
            lineHeight: 1.6,
            marginBottom: 16,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {article.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 12,
              color: "#9CA3AF",
              fontWeight: 500,
            }}
          >
            {article.readTime}
          </span>
          <Link
            href={article.href}
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#D4500F",
              textDecoration: "none",
            }}
          >
            Read more →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section style={{ backgroundColor: "var(--surface)" }} className="py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center"
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <motion.div variants={item}>
            <Eyebrow>STAY INFORMED</Eyebrow>
          </motion.div>
          <motion.h2
            variants={item}
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: 42,
              fontWeight: 700,
              color: "#0D0D0D",
              lineHeight: 1.15,
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            New thinking, when it is worth reading.
          </motion.h2>
          <motion.p
            variants={item}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 16,
              color: "#4B5563",
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            We publish infrequently and only when we have something genuinely useful to say. If you would like to receive new articles and occasional perspective on digital platforms and AI activation, you can subscribe below.
          </motion.p>

          {submitted ? (
            <motion.div
              variants={item}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 14,
                border: "1px solid #191A23",
                boxShadow: "0 5px 0 0 #191A23",
                padding: "20px 32px",
                color: "#0D0D0D",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              You are subscribed. We will be in touch when there is something worth reading.
            </motion.div>
          ) : (
            <motion.form
              variants={item}
              onSubmit={handleSubmit}
              style={{ width: "100%", display: "flex", gap: 12 }}
              className="max-sm:flex-col"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                style={{
                  flex: 1,
                  height: 52,
                  borderRadius: 12,
                  border: "1px solid #D1D5DB",
                  padding: "0 16px",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 15,
                  color: "#0D0D0D",
                  backgroundColor: "#ffffff",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  height: 52,
                  padding: "0 28px",
                  backgroundColor: "#D4500F",
                  color: "#ffffff",
                  borderRadius: 14,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  whiteSpace: "nowrap" as const,
                  boxShadow: "0 5px 0 0 #191A23",
                }}
              >
                Subscribe
              </button>
            </motion.form>
          )}

          <motion.p
            variants={item}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 13,
              color: "#9CA3AF",
              marginTop: 16,
            }}
          >
            No weekly newsletters. No content marketing. Just useful thinking when it exists.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default function InsightsPage() {
  return (
    <main>
      <NavigationBar />

      {/* 1. Hero — dark */}
      <section
        style={{ backgroundColor: "#0D0D0D" }}
        className="pt-[160px] pb-[90px] max-sm:pt-[120px] max-sm:pb-[60px]"
      >
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-[760px]"
          >
            <motion.div variants={item}>
              <Eyebrow muted>INSIGHTS</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 64,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.08,
                marginTop: 20,
                marginBottom: 24,
              }}
              className="max-sm:text-[40px]"
            >
              Thinking on{" "}
              <span style={{ color: "#D4500F" }}>platforms, AI</span>{" "}
              and modern marketing.
            </motion.h1>
            <motion.p
              variants={item}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: 18,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 620,
              }}
            >
              The shift towards AI-enabled marketing and composable digital infrastructure is generating a significant volume of opinion. Some of it is useful. Much of it is not. The thinking we publish here is designed to be practical and grounded — written for senior marketing and digital leaders who need clarity, not commentary.
            </motion.p>
            <motion.div variants={item} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  style={{
                    backgroundColor: "#D4500F",
                    color: "#ffffff",
                    borderRadius: 14,
                    padding: "20px 32px",
                    height: "auto",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    border: "none",
                    boxShadow: "0 5px 0 0 #191A23",
                  }}
                >
                  <Link href="/contact">Start a conversation</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    borderRadius: 14,
                    padding: "20px 32px",
                    height: "auto",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Link href="/work">View our work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured articles — white */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item}>
              <Eyebrow>FEATURED</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 48,
                fontWeight: 700,
                color: "#0D0D0D",
                lineHeight: 1.15,
                marginTop: 16,
                marginBottom: 40,
              }}
            >
              Where to start.
            </motion.h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="max-sm:grid-cols-1"
            >
              {featuredArticles.map((article) => (
                <FeaturedCard key={article.href} article={article} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. All articles — surface */}
      <section style={{ backgroundColor: "var(--surface)" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item}>
              <Eyebrow>ALL INSIGHTS</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 48,
                fontWeight: 700,
                color: "#0D0D0D",
                lineHeight: 1.15,
                marginTop: 16,
                marginBottom: 40,
              }}
            >
              All thinking.
            </motion.h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="max-sm:grid-cols-1"
            >
              {allArticles.map((article) => (
                <ArticleCard key={article.href + article.title} article={article} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Topics — white, centred */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-[70px] max-sm:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={item}>
              <Eyebrow>TOPICS</Eyebrow>
            </motion.div>
            <motion.h2
              variants={item}
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 48,
                fontWeight: 700,
                color: "#0D0D0D",
                lineHeight: 1.15,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              What we write about.
            </motion.h2>
            <motion.p
              variants={item}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: 16,
                color: "#4B5563",
                lineHeight: 1.65,
                maxWidth: 600,
                margin: "0 auto 36px",
              }}
            >
              Our thinking covers the subjects that matter most to senior marketing and digital leaders dealing with platform modernisation and AI activation.
            </motion.p>
            <motion.div
              variants={item}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}
            >
              {topics.map((topic) => (
                <span
                  key={topic}
                  style={{
                    backgroundColor: "#FDF0E8",
                    color: "#D4500F",
                    borderRadius: 999,
                    padding: "10px 20px",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "default",
                  }}
                >
                  {topic}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Newsletter — surface, centred */}
      <NewsletterSection />

      {/* 6. Final CTA */}
      <FinalCTA
        eyebrow="NEXT STEP"
        heading="Want to discuss any of this thinking?"
        subheading="Most of what we write comes from real engagements with real organisations. If something resonates with a challenge you are facing, a conversation is usually the most useful next step."
      />

      <Footer />
    </main>
  );
}
