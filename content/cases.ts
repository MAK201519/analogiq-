export type CaseStat = {
  value: string;
  label: string;
};

export type CaseRoadmapStep = {
  step: string;
  description: string;
};

export type CaseRecord = {
  slug: string;
  client: string;
  sector: string;
  cat: string;
  title: string;
  sum: string;
  stats: CaseStat[];
  problem: string;
  built: string;
  after: string;
  quote?: string;
  quoteBy?: string;
  video?: string;
  imgs: string[];
  roadmap?: CaseRoadmapStep[];
  rmnote?: string;
};

export const cases: CaseRecord[] = [
  {
    slug: 'capco-personalisation',
    client: 'Capco',
    sector: 'Professional services',
    cat: 'AI, personalisation and lead scoring',
    title: 'AI personalisation and intelligent lead scoring that turned visitors into pipeline',
    sum: 'Capco had enterprise HubSpot and Sitecore but was serving every visitor the same generic experience. We designed a cross-channel personalisation and lead scoring system capturing over 100 data points per visitor, directly attributing more than £1 million in confirmed sales.',
    stats: [
      { value: '£1M+', label: 'confirmed sales generated' },
      { value: '100+', label: 'data points captured per visitor' },
      { value: '32%', label: 'uplift in MQL and SQL volume' },
    ],
    problem: 'Capco is a global technology and management consultancy in financial services, with over 6,500 professionals across 27 cities. It is a business where relationships are built through highly personalised face-to-face engagement, and its digital platform was failing to replicate that online: a generic, one-size-fits-all experience served to visitors at very different stages of their journey. The problems were structural, not technical. Lead scoring was understood but not deployed, the cross-channel journey was inconsistent, and high-quality leads, including the significant share of anonymous visitors, were not being recognised or acted on quickly enough.',
    built: 'We designed a cross-channel personalisation and lead scoring system on Capco\'s existing HubSpot and Sitecore stack. We started with a tech discovery to map the capability gaps and the data available across web, email and CRM, then worked with the sales team to define a scoring model from the behavioural and CRM signals that most reliably indicated sales readiness. A personalisation engine served known visitors tailored journeys aligned to their sector and history, while anonymous visitors were progressively profiled to increase conversion likelihood. Real-time lead routing connected high-value prospects immediately with the right senior partner, collapsing the time between intent and engagement.',
    after: 'The platform went from a one-size-fits-all portal to an intelligent, adaptive one. Capturing over 100 data points per visitor, it attributed more than £1 million in confirmed sales, materially increased MQL and SQL volume, and turned progressively profiled anonymous visitors into a qualified pipeline that had previously gone unrecognised.',
    quote: 'High-quality leads were not being recognised or acted upon quickly enough. The platform needed to become intelligent.',
    quoteBy: 'Capco',
    imgs: ['case-capco-personalisation-home.jpg', 'case-capco-personalisation-intel.jpg'],
    roadmap: [
      { step: 'Business problem', description: 'Relationships at Capco are built face to face, and the website served every visitor the same generic experience. High-quality leads, including anonymous ones, were not being recognised or acted on quickly enough.' },
      { step: 'Measurable outcome', description: 'Agreed with the sales team up front: more qualified leads reaching the right partner, faster, and sales that could be attributed to the platform rather than assumed.' },
      { step: 'Data required', description: 'A tech discovery mapped what was actually available across web, email and CRM in HubSpot and Sitecore, and which behavioural and CRM signals most reliably indicated sales readiness. Only those were used to start.' },
      { step: 'Technique', description: 'A scoring model built from those signals, a personalisation engine serving known visitors journeys matched to their sector and history, and progressive profiling for anonymous visitors. Real-time routing rather than a batch report.' },
      { step: 'Evaluation', description: 'The scoring model was checked against the sales team\'s own view of readiness before it drove routing, and lead quality was reported by stage (MQL, SQL, confirmed sale) so the uplift could be seen where it happened, not just in aggregate.' },
      { step: 'Deployment', description: 'Live on the existing stack, in Capco\'s tenancy, with routing rules the sales team could change. A person still owned every conversation; the system decided who to connect them to, and when.' },
    ],
  },
  {
    slug: 'hsbc',
    client: 'HSBC Commercial Banking',
    sector: 'Financial services',
    cat: 'CRO, experimentation and personalisation',
    title: 'A data-driven optimisation programme across six Asian markets at 12:1 ROI',
    sum: 'We partnered with HSBC Commercial Banking across six Asian markets to commercialise their marketing technology investment. Twenty-four experiments doubled conversion rates on key journeys and delivered $2.6M in client lifetime value from a $210k programme spend: a 12:1 return.',
    stats: [
      { value: '12:1', label: 'programme ROI over 12 months' },
      { value: '$2.6M', label: 'client lifetime value from $210k spend' },
      { value: '24', label: 'experiments across six markets' },
    ],
    problem: 'HSBC Commercial Banking set out to double their SME customer base by 2025 and become the international SME bank of choice, across India, China, Singapore, Malaysia, Indonesia and Hong Kong. Years of investment in Sitecore, Adobe Analytics, Adobe Target, Tealium and Eloqua held significant untapped potential; the challenge was commercialising it. Journey analysis across the six markets found a consistent set of problems: prospects were confused about how to open an account, mobile experiences needed an overhaul, and calls to action lacked clarity. Visitors were dropping out of the funnel at multiple stages, not because the product was wrong, but because the digital experience was not guiding them through it.',
    built: 'We built the programme on a single principle: use the data HSBC was already capturing to understand and systematically improve the prospect journey. We called it Journey Orchestration, a unified framework of data-driven experimentation, customer-first personalisation and cross-market learning. For each market we analysed the funnel in depth and built a backlog of improvements to A/B test at every stage, from landing pages to account opening entry points. We tailored experiences to each visitor\'s paid media interaction and previous on-site activity, and shared successful experiments from Asia Pacific with teams in Argentina, Mexico and the USA, extending the return of every test beyond its originating market.',
    after: 'Twenty-four experiments ran across six markets. The best-performing tests more than doubled conversion on key account opening journeys, new banking enquiries rose 15.5%, and the programme delivered $2.6M in client lifetime value from a $210k spend: a 12:1 return over twelve months. The single most pivotal outcome was the account opening journey itself. Testing across six touchpoints identified the best ways to signpost the process, turning a point of confusion into a clear, guided pathway.',
    quote: 'By highlighting the pathway to opening an account, we not only met our immediate objectives but also built a robust foundation for sustained growth in HSBC Business Banking.',
    quoteBy: 'HSBC Commercial Banking',
    video: 'phpN6XSns_Y',
    imgs: ['case-hsbc-hk.jpg'],
  },
  {
    slug: 'wilderness',
    client: 'Wilderness Destinations',
    sector: 'Travel and leisure',
    cat: 'CRO, experimentation and paid media',
    title: 'Doubling conversion rate and cutting acquisition costs in half',
    sum: 'Wilderness\'s landing pages for paid traffic were underperforming. We mapped the customer journey, designed two purpose-built landing page variants and ran a structured A/B test, doubling enquiry conversion from 0.9% to 1.9% and cutting cost per acquisition by 63%.',
    stats: [
      { value: '2x', label: 'conversion rate: 0.9% to 1.9%' },
      { value: '63%', label: 'reduction in cost per acquisition' },
    ],
    problem: 'Wilderness offers bespoke luxury safari experiences across award-winning lodges and camps in eight African countries. Clients complete an enquiry form to begin a consultation with an expert adviser who plans their trip from scratch. Following the launch of a new website, Wilderness found their landing pages for paid traffic were underperforming: conversion rates from PPC campaigns did not reflect the quality of the product or the intent of the traffic arriving on site. The result was a higher cost per acquisition than the business could sustain at scale, and significant revenue left on the table.',
    built: 'We began with a detailed analysis of the customer journey across the website and paid channels, mapping the routes visitors took from paid ad to enquiry form and identifying where intent was lost. From that, we designed two landing page variants built from scratch for paid traffic rather than adapted from the main site, every element built around a single goal: getting high-intent visitors to complete an enquiry. A statistically rigorous A/B test measured the new pages against the existing site on conversion rate, CPA and enquiry quality.',
    after: 'The optimised pages improved every key metric. Enquiry conversion from paid traffic more than doubled, from 0.9% to 1.9%, more than doubling enquiry volume from the same spend, while cost per acquisition fell 63%. With the test validated, Wilderness extended the optimised format across all paid campaigns as the new default, building a sustainable foundation for continued CRO.',
    quote: 'Conversion rates from PPC campaigns were not reflecting the quality of the product or the intent of the traffic arriving on site.',
    quoteBy: 'Wilderness Destinations',
    imgs: ['case-wilderness-lp.jpg', 'case-wilderness-itinerary.jpg'],
  },
  {
    slug: 'keith-prowse',
    client: 'Keith Prowse',
    sector: 'Sports and events hospitality',
    cat: 'Sitecore, platform and UX',
    title: 'Modernising the digital sales channel for the UK\'s leading sports hospitality brand',
    sum: 'Keith Prowse are the official hospitality provider for Wimbledon, Twickenham and The O2. As the industry shifted from telephone bookings to digital, they needed the website to become a performing commercial asset. We have been their technical partner since 2021, delivering the Sitecore upgrade and ongoing platform, UX and integration work.',
    stats: [
      { value: '2021', label: 'partnership began' },
      { value: 'Ongoing', label: 'long-term technical partnership' },
      { value: '6', label: 'core service areas delivered' },
    ],
    problem: 'Keith Prowse are the official sports and events hospitality provider for some of the UK\'s most iconic venues, offering premium experiences across sport, music, arts and culture to clients who expect a seamless service at every touchpoint. They first approached us to upgrade their website to the latest Sitecore Experience Platform, driven by security and supportability. But with the website becoming the dominant sales channel for the business, a platform upgrade alone was not enough. They needed a partner who understood both the technical complexity of Sitecore and the commercial imperative of optimising every touchpoint for conversion.',
    built: 'We began by completing the Sitecore upgrade, making the platform secure, stable and able to take advantage of the Experience Platform\'s full capability. With the foundation in place, attention shifted to the customer experience. Using technical analysis, data and UX together, we built a roadmap for ongoing improvement: identifying friction in the purchase journey, prioritising the highest-impact changes, and implementing them iteratively. The work spans platform engineering, data and analytics, UX and design, and complex third-party integrations connecting the booking, payment and CRM systems that underpin the commercial operation.',
    after: 'What started as a platform migration has grown into a long-term technical partnership. We work as an extension of the Keith Prowse team, introducing features, managing integrations and continuously improving website performance and commercial outcomes. It is a continuous pipeline of improvement rather than a single-point engagement.',
    quote: 'With the website becoming the dominant sales channel, a platform upgrade alone was not enough.',
    quoteBy: 'Keith Prowse',
    imgs: ['case-keith-prowse-finder.jpg'],
  },
  {
    slug: 'capco-platform',
    client: 'Capco',
    sector: 'Professional services',
    cat: 'Platform engineering and Sitecore',
    title: 'Rebuilding a global digital platform from scratch, delivered in 120 days',
    sum: 'Following a demerger, Capco had to migrate their website off legacy infrastructure within 120 days or face daily penalties. We delivered a full Sitecore rebuild on deadline, cutting the update SLA from 14 days to 24 hours and handing the marketing team control for the first time.',
    stats: [
      { value: '120 days', label: 'to full platform delivery' },
      { value: '14d to 24hr', label: 'website update SLA reduction' },
      { value: '26%', label: 'increase in pages per session' },
    ],
    problem: 'In 2017, following a demerger from FIS Global, Capco had 120 days to migrate their website off FIS infrastructure or face significant daily financial penalties, all while the business had ambitious growth plans that needed a platform capable of supporting global marketing at scale. Before the rebuild, the marketing team had no control over their own website: every change, even a copy edit, meant a full brief to an in-house development team with a 14-day SLA. There was no access to analytics, no way to launch campaigns independently, and no mechanism for showing digital\'s commercial contribution to the business.',
    built: 'We rebuilt the entire Capco website on Sitecore Experience Platform within the 120-day window, migrating all content and redeveloping every template to Sitecore best practice. We delivered a complete Experience Editor interface giving the global marketing team full, independent control over content, campaigns and landing pages for the first time. Phase two focused on three priorities: a world-class careers experience with GeoIP personalisation integrated with the PeopleFluent ATS and dedicated journeys for graduates and experienced hires; a data measurement framework built as a Klipfolio dashboard drawing on Google Analytics and careers data; and personalisation to engage different audience segments intelligently.',
    after: 'Delivered within the 120-day deadline, removing the penalty risk entirely. The SLA for changes fell from 14 days to 24 hours. Pages per session rose 26% and average session duration 15%, while bounce rate dropped 19%. The new careers journeys drew 31,500 visits in five months, 70% of new careers visitors went on to search for a role, and the marketing team had full CMS control for the first time.',
    quote: 'Analogiq\'s expertise has enabled us to create a website and digital strategy that delivers value across the firm, while also unlocking the power of data to drive optimisation projects and empower our decision making. Working hand in hand with a trusted partner like Analogiq has allowed us to embed them within Capco\'s day-to-day activities, providing project transparency while building an incredibly strong relationship.',
    quoteBy: 'Andrew Davies, Head of Digital Marketing (Global), Capco',
    imgs: ['case-capco-platform-home.jpg', 'case-capco-platform-intel.jpg'],
  },
  {
    slug: 'experience-golf',
    client: 'The Experience Golf',
    sector: 'Travel and leisure',
    cat: 'Ecommerce, UX and Sitecore',
    title: 'Launching a luxury ecommerce website for the UK\'s leading golf tour operator',
    sum: 'The Experience Golf, a Keith Prowse subsidiary, had no ecommerce capability: every booking was made by phone. We designed and built a luxury ecommerce platform on Sitecore, live and bookable within a six-month deadline timed for peak season.',
    stats: [
      { value: '6 months', label: 'from brief to launch' },
      { value: '30+', label: 'iconic golf courses bookable online' },
      { value: '2', label: 'markets served, UK and USA' },
    ],
    problem: 'The Experience Golf, formerly The Experience St Andrews, is a subsidiary of Keith Prowse specialising in luxury golf tours across England, Scotland and Ireland, including the iconic Old Course at St Andrews. Keith Prowse has been an authorised provider of Tee Times on the Old Course for nearly three decades, and the ambition was to bring that quality online. But every booking was made over the phone; there was no ecommerce capability whatsoever. The brief was to let customers in the UK and USA discover, configure and book luxury golf experiences online for the first time, and to do it within six months, timed for the peak booking season. Launching late was not an option.',
    built: 'We began with workshops and stakeholder interviews to map the complexity of the product: multiple ancillary options, bespoke itinerary building, multilingual requirements, and integration with events management and CRM for ticketing and billing. From that we distilled a coherent customer journey and translated it into UX wireframes and creative design fit for a luxury brand. To hit the six-month deadline without compromising quality, we made a strategic decision to reuse Sitecore components and backend functionality from the existing Keith Prowse website wherever possible, accelerating delivery while keeping the two platforms consistent across the estate.',
    after: 'The platform launched on time and within the six-month window, ready for peak season. For the first time, customers in the UK and USA could discover, configure and book a luxury golf experience entirely online, with the full complexity of courses, accommodation and ancillaries handled through a single seamless journey. It moved the business from 100% phone-based bookings to a fully transactional ecommerce platform: a step change in commercial capability.',
    quote: 'All bookings were made over the phone. The brief was to change that, entirely, within six months.',
    quoteBy: 'The Experience Golf',
    imgs: ['case-experience-golf-builder.jpg', 'case-experience-golf-courses.jpg'],
  },
  {
    slug: 'sunlife',
    client: 'SunLife',
    sector: 'Financial services',
    cat: 'Data strategy and martech',
    title: 'Building the data foundations for a single customer view',
    sum: 'SunLife had a wealth of customer data but no true understanding of customer behaviour across the funnel. We ran a Digital Experience Assessment across six martech platforms, producing a gap analysis, an architecture blueprint and a prioritised roadmap toward a single customer view.',
    stats: [
      { value: '6', label: 'martech platforms assessed' },
      { value: '4', label: 'key deliverables produced' },
      { value: '1', label: 'unified customer view as the goal' },
    ],
    problem: 'SunLife is a UK financial services company for the over-50s, with over 24,000 Trustpilot reviews and a Defaqto five-star rating, operating at scale across digital and offline channels. As a business generating a large volume of customer data, it recognised that data volume is not the same as data intelligence. It held performance metrics, sentiment data and campaign results, but lacked the connective tissue between them: a clear picture of why customers behaved as they did across the full journey. The goal was to move beyond what customers did and how they felt, to understand what influenced them, surfacing patterns like which calculator users are more likely to convert, or which behaviours may indicate a vulnerable customer, so SunLife could build truly personalised, real-time experiences.',
    built: 'We were engaged for a Digital Experience Assessment: a structured consultancy engagement to build a comprehensive picture of SunLife\'s technology, data infrastructure and customer journeys, and to produce a prioritised roadmap to close the gaps. It began with workshops involving marketing and technical stakeholders, each focused on a specific platform or workstream, building a rigorous current-state picture before architecture and recommendations. We assessed ways of working, ran deep-dive reviews across six core platforms, analysed the digital journey across the site and between channels, designed the ideal connected architecture for a single customer view, and synthesised everything into a prioritised, costed roadmap.',
    after: 'The assessment gave SunLife something they had not had before: a joined-up picture of their data landscape, a diagnosed set of gaps, and a prioritised plan to close them. The three deliverables, a gap analysis, an architecture blueprint and an actionable roadmap, laid the foundation for faster decisions, greater personalisation agility, and the ability to measure the incremental impact of optimisation.',
    quote: 'The goal was not more data. It was a clearer understanding of what the data was saying about customer behaviour across the full funnel.',
    quoteBy: 'SunLife engagement',
    imgs: ['case-sunlife-home.jpg'],
  },
  {
    slug: 'cystic-fibrosis-trust',
    client: 'Cystic Fibrosis Trust',
    sector: 'Charity',
    cat: 'CRO, experimentation and Sitecore',
    title: 'Optimising the donation journey for one of the UK\'s most recognised health charities',
    sum: 'The Cystic Fibrosis Trust wanted to know how data-driven insight and A/B testing could improve its donation funnel. We ran an insight-led experimentation programme in which a single experiment, improving donation copy and messaging, increased donation page visits by 29%.',
    stats: [
      { value: '29%', label: 'increase in donation page visits from one experiment' },
      { value: '2', label: 'workstreams: optimisation and Sitecore management' },
      { value: 'Ongoing', label: 'technical and optimisation partnership' },
    ],
    problem: 'The Cystic Fibrosis Trust is the UK\'s leading charity dedicated to fighting cystic fibrosis, funding research, providing support and campaigning to improve lives. It operates at national scale and relies on its website as a central channel for awareness, engagement and donation. It wanted to understand how data-driven insight and A/B testing could help achieve its digital objectives, particularly around the donation funnel, where small improvements in conversion translate directly into research funding. The challenge was not simply technical: it required a genuine understanding of who donates, what motivates them, and where the digital experience was falling short, before a single experiment could be designed.',
    built: 'We were brought in across two workstreams: data-driven optimisation and A/B testing, and management of the Sitecore platform. We began with stakeholder interviews to establish the KPIs experiments should be measured against, which confirmed the donation funnel as the highest-impact target. A combined analytics and heuristic review identified the biggest pain points in the journey, and we built a picture of the needs and motivations of typical donors, grounding every test in audience understanding rather than assumption. From there we designed and implemented a programme of experiments in Google Optimize, focused on improving the copy, messaging and value communication around donation. Alongside this, we managed the Trust\'s Sitecore platform, handling development requests and keeping the technical foundation stable.',
    after: 'One experiment alone, improving the copy and messaging around donation, increased visits to the donation page by 29%: a direct impact on the Trust\'s ability to fund research. The work demonstrated the tangible value of structured experimentation for a charity operating at scale, and established the foundation for a continued programme of optimisation.',
    quote: 'Small improvements in the donation funnel have an outsized impact for a charity of this scale. Every percentage point of conversion uplift translates directly into research funding.',
    quoteBy: 'Cystic Fibrosis Trust engagement',
    imgs: ['case-cystic-fibrosis-trust-home.jpg'],
  },
  {
    slug: 'jet2',
    client: 'Jet2',
    sector: 'Travel and leisure',
    cat: 'Personalisation strategy',
    title: 'Building a personalisation measurement strategy for the UK\'s largest tour operator',
    sum: 'Jet2 had been running personalisation for three years but had no clear picture of whether it was working. We ran a strategy engagement, workshops, journey review and a personalisation audit, producing a playback that gave the digital team a framework to A/B test scenarios and measure their true revenue impact.',
    stats: [
      { value: '3 years', label: 'of personalisation without clear measurement' },
      { value: '2', label: 'primary segments: families and non-families' },
      { value: 'Sitecore', label: 'core digital experience platform' },
    ],
    problem: 'Jet2 is the UK\'s largest tour operator and third-largest scheduled airline, operating Jet2holidays, Jet2CityBreaks, Jet2Villas and a growing range of ancillary products, with millions of customers booking online each year. It had been running personalisation across various touchpoints for about three years, mostly through Sitecore, but had no clear picture of whether those scenarios were working, which segments they affected, or what the collective revenue impact was. The challenge was not a lack of activity, it was a lack of visibility. The infrastructure spanned multiple systems and methods, some outside Sitecore entirely such as search result rankings, and there were no clear control experiences for the two primary segments, families and non-families, making structured testing extremely difficult.',
    built: 'We began with strategic workshops with Jet2 stakeholders across digital and commercial teams, building a deep understanding of the existing strategy, the objectives behind it and the pain points preventing measurement, so the recommendations were grounded in Jet2\'s commercial context rather than generic best practice. We then reviewed the customer journeys across both segments, identifying opportunities for further personalisation and mapping each segment\'s specific needs, and audited the existing scenarios across Sitecore and other platforms to establish which were measurable and what structural changes proper testing would need. The final output was a detailed strategy playback giving actionable guidance on how to A/B test personalisation effectively, establish control experiences, and measure the true impact on revenue.',
    after: 'Jet2 left with something they had not previously had: a structured framework for understanding and measuring the impact of their personalisation investment. The playback gave the digital team a clear, actionable path to A/B testing scenarios, establishing control experiences, and connecting personalisation activity to revenue outcomes, along with a clear view of how strategy should differ between the family and non-family segments.',
    quote: 'Three years of personalisation activity. No clear picture of which scenarios were working, which segments were responding, or what the revenue impact actually was.',
    quoteBy: 'Jet2 engagement',
    imgs: ['case-jet2-home.jpg'],
  },
];
