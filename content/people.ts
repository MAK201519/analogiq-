export type PersonRecord = {
  slug: string;
  name: string;
  role: string;
  headshot: string;
  order: number;
  bio?: string;
};

export const people: PersonRecord[] = [
  {
    slug: 'mario-kyriacou',
    name: 'Mario Kyriacou',
    role: 'Co-founder',
    headshot: '/img/team-mario-kyriacou.jpg',
    order: 1,
    bio: 'Commercial strategy, marketing and the client relationship. In the room from the first workshop.',
  },
  {
    slug: 'steve-renshaw',
    name: 'Steve Renshaw',
    role: 'Co-founder, strategy lead',
    headshot: '/img/team-steve-renshaw.jpg',
    order: 2,
    bio: 'Fifteen years of UX and digital strategy. Runs discovery and keeps the work tied to a business outcome.',
  },
  {
    slug: 'nadjaha-wohedally',
    name: 'Nadjaha Wohedally',
    role: 'Senior Digital Project Manager',
    headshot: '/img/team-nadjaha-wohedally.jpg',
    order: 3,
    bio: 'Delivery across large, complex businesses spanning digital and IT. Translates goals into working products.',
  },
  {
    slug: 'dani-mocan',
    name: 'Dani Mocan',
    role: 'Technical Lead',
    headshot: '/img/team-dani-mocan.jpg',
    order: 4,
    bio: 'Twenty years on large, complex technical platforms. Owns the architecture and the estate.',
  },
  {
    slug: 'doug-morris',
    name: 'Doug Morris',
    role: 'Data and Insights Director',
    headshot: '/img/team-doug-morris.jpg',
    order: 5,
    bio: 'Turns scattered data into something a business can actually decide with. Owns measurement end to end.',
  },
  {
    slug: 'ruairi-bradley',
    name: 'Ruairi Bradley',
    role: 'AI Engineer',
    headshot: '/img/team-ruairi-bradley.jpg',
    order: 6,
    bio: 'Deep experience using language models to deliver bespoke solutions. Says when an agent is the wrong answer.',
  },
  {
    slug: 'dylan-pearson',
    name: 'Dylan Pearson',
    role: 'Senior Digital Project Manager',
    headshot: '/img/team-dylan-pearson.jpg',
    order: 7,
    bio: 'Keeps complex builds moving and honest. Translates what the client needs into what the team ships.',
  },
];
