export type Discipline = {
  id: string;
  title: string;
  summary: string;
  route: string;
  href: string;
};

export type ServiceRecord = {
  id: string;
  title: string;
  summary: string;
  href: string;
  bullets: string[];
};

export type OutcomeRecord = {
  id: string;
  title: string;
  summary: string;
};

export type WaysInRecord = {
  label: string;
  title: string;
  summary: string;
};

export type ServiceFaqRecord = {
  question: string;
  answer: string;
};

export const disciplines: Discipline[] = [
  {
    id: 'strategy',
    title: 'What is worth building, and what is not.',
    summary: 'Every idea scored for value, data readiness and risk, with the reasons written down.',
    route: 'How we decide',
    href: '/approach',
  },
  {
    id: 'data-engineering',
    title: 'Enough trustworthy data, in your estate.',
    summary: 'Readiness, the sources the outcome needs, permissions, tenancy and cost control from the first build.',
    route: 'Where it runs',
    href: '/how-we-build#estate',
  },
  {
    id: 'delivery',
    title: 'Working systems, not pilots.',
    summary: 'Search, extraction, prediction, analysis, assistants, automation and agents where the task fits. Evaluated before demo.',
    route: 'The patterns we use',
    href: '/how-we-build#techniques',
  },
  {
    id: 'enablement',
    title: 'Your team owns it after we leave.',
    summary: 'Training by role, pattern libraries, internal champions and a run-book rather than a demo video.',
    route: 'What handover looks like',
    href: '/how-we-build#estate',
  },
];

export const services: ServiceRecord[] = [
  {
    id: 'ai-evaluation-assurance',
    title: 'AI evaluation and assurance',
    summary: 'Independent testing of what you already have.',
    href: '/how-we-build#evaluation',
    bullets: [
      'A test set built from your real cases',
      'Performance measured by failure type',
      'Where a person still needs to be in the loop',
    ],
  },
  {
    id: 'prototype-to-production',
    title: 'Prototype to production',
    summary: 'Hardening the proof of concept you built yourselves.',
    href: '/how-we-build#evaluation',
    bullets: [
      'Reliability, security and permissions',
      'Evaluation and monitoring',
      'The integrations it needs to do real work',
    ],
  },
  {
    id: 'decision-intelligence',
    title: 'Decision intelligence',
    summary: 'Fragmented data, turned into evidence you can act on.',
    href: '/approach#data',
    bullets: [
      'What changed, and what it is worth',
      'Where the opportunity is and what is unusual',
      'What is likely to happen next',
    ],
  },
  {
    id: 'experimentation-and-causal-measurement',
    title: 'Experimentation and causal measurement',
    summary: 'Did acting on it actually change the business?',
    href: '/work',
    bullets: [
      'Controlled tests, not before-and-after',
      'Whether the system caused the outcome',
      'The performance number tied to the business number',
    ],
  },
];

export const outcomes: OutcomeRecord[] = [
  {
    id: 'revenue-growth',
    title: 'Revenue and growth',
    summary: 'Who is likely to buy, what they want next, and when to reach out. Your team makes the final call.',
  },
  {
    id: 'efficiency-cost-to-serve',
    title: 'Efficiency and cost to serve',
    summary: 'The same documents, questions and reports, automated without removing the judgement.',
  },
  {
    id: 'capability-control',
    title: 'Capability and control',
    summary: 'The second and third project are the hard part. Data sorted, governance used, people trained. You need us less over time.',
  },
];

export const waysIn: WaysInRecord[] = [
  { label: 'Weeks', title: 'Opportunity assessment', summary: 'Time with your people and your data. Where AI will make a difference, what it is worth, and where to start.' },
  { label: 'Weeks', title: 'The first thin line', summary: 'One use case, end to end, in production, inside today\'s constraints.' },
  { label: 'Ongoing', title: 'Build capability', summary: 'More sources, more features, more autonomy, each on top of something already running.' },
  { label: 'Programme', title: 'Enablement programme', summary: 'The tools and training to run it in-house, with us alongside on what to improve next.' },
  { label: 'Ongoing', title: 'Retained partnership', summary: 'Analysis, strategy and delivery against a shared roadmap.' },
];

export const serviceFaqs: ServiceFaqRecord[] = [
  {
    question: 'Your CTO: “Is this going to live in our estate, under our controls?”',
    answer: 'Yes. Your identity and access controls, your cloud, a deployment pattern chosen to meet your security and residency requirements.',
  },
  {
    question: 'Your finance director: “How will we know it worked?”',
    answer: 'A measurable outcome agreed before anything is built, and reported against, not asserted.',
  },
  {
    question: 'Your team: “Is this being done to us, or with us?”',
    answer: 'With. Workshops are with the people doing the work, and the handover assumes your team owns it afterwards.',
  },
];
