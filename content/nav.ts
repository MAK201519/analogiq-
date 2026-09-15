export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const headerNav: NavItem[] = [
  { label: 'What we do', href: '/services', children: [
    { label: 'Approach', href: '/approach' },
    { label: 'Services', href: '/services' },
    { label: 'How we build', href: '/how-we-build' },
    { label: 'DXP & Platforms', href: '/digital-services' },
  ] },
  { label: 'Our work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'AI in the Wild', href: '/ai-in-the-wild' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: [
    { label: 'Approach', href: '/approach' },
    { label: 'Services', href: '/services' },
    { label: 'How we build', href: '/how-we-build' },
    { label: 'Digital services', href: '/digital-services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Our work', href: '/work' },
    { label: 'Contact', href: '/contact' },
    { label: 'AI in the Wild', href: '/ai-in-the-wild' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Modern Slavery Statement', href: '/modern-slavery' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
};
