export type EventRecord = {
  title: string;
  format: 'Meetup' | 'Webinar' | 'Article';
  meta: string;
  blurb: string;
  href: string;
  image: string;
  external: boolean;
};

export const events: EventRecord[] = [
  {
    title: 'AI in the Wild, in the room',
    format: 'Meetup',
    meta: 'Monthly · London · Free',
    blurb: 'Our monthly meetup for people applying AI for real. No sales from the stage.',
    href: 'https://www.meetup.com/ai-in-the-wild',
    image: '/img/event-audience1.jpg',
    external: true,
  },
  {
    title: 'Why most AI pilots fail',
    format: 'Webinar',
    meta: 'Online · 45 minutes · On demand',
    blurb: 'The practical reasons AI projects stall before production, and how to spot them early.',
    href: '/events/why-ai-pilots-fail',
    image: '/img/event-talk-ab.jpg',
    external: false,
  },
  {
    title: 'The first piece is on its way',
    format: 'Article',
    meta: 'Coming soon',
    blurb: 'Our first written piece publishes at launch. Check back, or get it by email.',
    href: '/ai-in-the-wild',
    image: '/img/event-talk-cover.jpg',
    external: false,
  },
];
