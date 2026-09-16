"use client";

import { useState } from "react";

const TABS = [
  { id: "p1", label: "Knowing where to start" },
  { id: "p2", label: "Data integration" },
  { id: "p3", label: "Predictive customer insights" },
  { id: "p4", label: "Human language chat" },
  { id: "p5", label: "Customer satisfaction" },
  { id: "p6", label: "Agents in your team" },
  { id: "p7", label: "Process transformation" },
];

const PANELS = [
  {
    said: <>We know AI could help us, but with so many tools and options, <span>we do not even know where to begin.</span></>,
    who: "Usually raised by leadership, marketing or technology",
    ans: "We start with what is slow, expensive or uncertain, rank where AI would make a real difference, and tell you which ideas to leave alone. You leave with a shortlist, not a technology roadmap.",
  },
  {
    said: <>We have data everywhere, nothing talks to each other, <span>and it is a headache to get a clear picture.</span></>,
    who: "Usually raised by technology, data or operations",
    ans: "Every team has some degree of data mess. We map the platforms that matter, define the shared attributes, and make your data usable before anything is built on it.",
  },
  {
    said: <>We have years of customer data and still send the <span>same offer to everyone.</span></>,
    who: "Usually raised by marketing, CRM or commercial",
    ans: "Practical systems that put the right offer in front of the right person, on your own history. Your team sees what is working and where revenue is moving.",
  },
  {
    said: <>Our customers ask questions every day, but finding the right answer is still harder than it should be, <span>for them and for us.</span></>,
    who: "Usually raised by digital, service or marketing",
    ans: "Conversational tools for customers and for staff, grounded in your own material, so the answer arrives in seconds rather than after a search.",
  },
  {
    said: <>Our support team answers the same questions over and over, and it is eating up time we could spend helping <span>customers with real issues.</span></>,
    who: "Usually raised by service, operations or customer experience",
    ans: "Support is one of the highest costs in any business. We deflect the repeated questions, escalate the rest with context, and build a knowledge base that keeps improving.",
  },
  {
    said: <>We are buried in manual tasks every day. It feels like we never have time for the work that actually <span>moves the business forward.</span></>,
    who: "Usually raised by operations, marketing or finance",
    ans: "Teams lose up to a quarter of the day to repetitive work. We find where the time goes, then automate the routine so your people are left with the parts that need judgement.",
  },
  {
    said: <>We know we need automation, but building it on our current processes <span>just feels like speeding up the mess.</span></>,
    who: "Usually raised by operations, technology or leadership",
    ans: "Automation layered onto a bad process makes it worse, faster. We rebuild the workflow first, then automate what is left.",
  },
];

export default function ChallengeTabs() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="tabs" role="tablist">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            className={`tab${i === active ? " on" : ""}`}
            role="tab"
            aria-selected={i === active}
            data-p={t.id}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {PANELS.map((p, i) => (
        <div key={TABS[i].id} className="panel" id={TABS[i].id} hidden={i !== active}>
          <p className="said">&ldquo;{p.said}&rdquo;</p>
          <div className="ans">
            <p className="who">{p.who}</p>
            <p>{p.ans}</p>
          </div>
        </div>
      ))}
    </>
  );
}
