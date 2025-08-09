import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-data';

export const revalidate = 60; // revalidate sitemap every 60s

function absoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

async function fetchOutrankSlugs(): Promise<string[]> {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url;
    const res = await fetch(`${base}/api/blog/articles?source=outrank&status=published&limit=500`, { next: { revalidate: 60 }});
    if (!res.ok) return [];
    const data = await res.json();
    const items = (data?.items ?? []) as Array<{ slug: string }>;
    return items.map((i) => i.slug).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '/',
    '/who-we-are',
    '/why-we-do',
    '/resources',
    '/blog',
    '/capture',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
    '/legal/disclaimer',
    '/legal/legal-information',
  ].map((path) => ({ url: absoluteUrl(path), changefreq: 'weekly', priority: 0.7 as const }));

  const staticBlog = BLOG_POSTS.map((p) => ({ url: absoluteUrl(`/blog/${p.id}`), changefreq: 'weekly', priority: 0.8 as const }));
  const outrankSlugs = await fetchOutrankSlugs();
  const outrankBlog = outrankSlugs.map((slug) => ({ url: absoluteUrl(`/blog/${slug}`), changefreq: 'weekly', priority: 0.8 as const }));

  const dedup = new Map<string, { url: string; changefreq: 'weekly'; priority: number }>();
  for (const item of [...staticRoutes, ...staticBlog, ...outrankBlog]) {
    dedup.set(item.url, item);
  }

  return Array.from(dedup.values());
}


