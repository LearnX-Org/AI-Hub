export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Circle',
  description:
    "Elevate Your College Experience: Your all-in-one solution for fulfilling every college student's academic requirements. Immerse yourself in a world of beautifully curated resources designed to streamline your journey through academia. Discover a comprehensive range of tools, services, and products thoughtfully tailored to enhance your learning adventure. At our company, we're dedicated to being your partner in success, ensuring you have everything you need to excel in your studies and make the most of your college years.",
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Studyhub',
      href: '/studyhub',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
