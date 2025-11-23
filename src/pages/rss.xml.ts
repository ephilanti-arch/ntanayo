import type { APIRoute } from 'astro';
import { site } from '../data/site';

type PostMeta = {
  title: string;
  date: string;
  slug: string;
  draft?: boolean;
  description?: string;
};

export const GET: APIRoute = async () => {
  const modules = import.meta.glob('../posts/*.md', { eager: true }) as Record<
    string,
    { frontmatter: PostMeta }
  >;
  const posts = Object.values(modules)
    .map((m) => m.frontmatter)
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${site.url}/posts/${post.slug}/</link>
      <guid>${site.url}/posts/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.description ? `<description>${escapeXml(post.description)}</description>` : ''}
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${site.url}/</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
