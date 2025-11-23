import type { APIRoute } from 'astro';
import { site } from '../data/site';

type PostMeta = { slug: string; draft?: boolean };

export const GET: APIRoute = async () => {
  const modules = import.meta.glob('../posts/*.md', { eager: true }) as Record<
    string,
    { frontmatter: PostMeta }
  >;
  const posts = Object.values(modules)
    .map((m) => m.frontmatter)
    .filter((p) => !p.draft);

  const urls = posts.map((p) => `${site.url}/posts/${p.slug}/`);
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `<url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
