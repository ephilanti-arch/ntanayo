export interface Site {
  title: string;
  author: { name: string; email: string };
  description: string;
  url: string;
  baseurl: string;
  googleAnalytics?: string;
  utterancesRepo?: string;
}

export const site: Site = {
  title: 'NTanayo',
  author: {
    name: 'Your Name',
    email: 'you@example.com',
  },
  description: 'A blog hosted on GitHub Pages (Astro + TypeScript)',
  url: 'https://ephilanti-arch.github.io/ntanayo',
  baseurl: '/ntanayo',
  googleAnalytics: 'G-XXXXXXXXXX',
  utterancesRepo: 'OWNER/REPO',
};
