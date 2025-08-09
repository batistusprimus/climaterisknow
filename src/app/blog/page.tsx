import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, CTA_BUTTONS } from '@/lib/constants';
import { BLOG_POSTS, FEATURED_POSTS, BLOG_CATEGORIES } from '@/lib/blog-data';
import type { Article as OutrankArticle } from '@/lib/storage-upstash';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Weather risk analysis insights and case studies for Texas business operations across energy, logistics, manufacturing, agriculture, and construction sectors.',
  openGraph: {
    title: 'Blog | Sentinel Shield',
    description: 'Weather risk analysis insights and case studies for Texas business operations across energy, logistics, manufacturing, agriculture, and construction.',
    url: `${SITE_CONFIG.url}/blog`,
  },
};

export default async function BlogPage() {
  // Récupération des articles dynamiques (publiés)
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url;
  let outrankItems: OutrankArticle[] = [];
  try {
    const res = await fetch(`${base}/api/blog/articles?source=outrank&status=published&limit=24`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      outrankItems = (data?.items || []) as OutrankArticle[];
    }
  } catch {
    // ignore en cas d'erreur réseau
  }

  // Fusionne les articles dynamiques et éditoriaux pour un listing fluide
  const latestUnified = [
    ...outrankItems.map((p) => ({
      id: p.slug,
      title: p.title,
      excerpt: p.meta_description || p.excerpt || '',
      date: new Date(p.created_at).toISOString(),
      href: `/blog/${p.slug}`,
      tag: p.tags?.[0] || 'Insight',
      imageUrl: p.image_url || undefined,
      source: 'dynamic' as const,
    })),
    ...BLOG_POSTS.map((p) => ({
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
      date: new Date(p.publishedAt).toISOString(),
      href: `/blog/${p.id}`,
      tag: p.category,
      imageUrl: p.featuredImage,
      source: 'editorial' as const,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 18);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-bold text-white mb-6">
              Weather Risk Analysis & Insights
            </h1>
            <p className="text-body-large text-primary-100 mb-8">
              In-depth analysis and case studies for Texas business operations across energy, manufacturing, logistics, and other critical sectors
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding">
          <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">Featured Articles</h2>
            <p className="text-body-large text-neutral-600 mb-12">
              Latest insights on weather risk patterns and operational impacts across Texas
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FEATURED_POSTS.map((post) => (
                <article key={post.id} className="card hover:shadow-card-hover transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-body-small font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-body-small text-neutral-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-body-regular text-neutral-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-body-small text-neutral-500">
                        {post.readTime} min read
                      </span>
                      <span className="text-body-small text-neutral-500">
                        By {post.author}
                      </span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-primary font-medium hover:text-primary-700 transition-colors text-body-small"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Latest Articles (fusion dynamique + éditorial) */}
          {latestUnified.length > 0 && (
            <div className="mb-16">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">Latest Articles</h2>
              <p className="text-body-large text-neutral-600 mb-10">
                Fresh analyses and reports across hurricanes, flooding, heat and supply chain resilience
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestUnified.map((post) => (
                  <article key={post.id} className="card group h-full flex flex-col overflow-hidden">
                    {post.imageUrl && (
                      <Link href={post.href} className="block -mx-6 -mt-6 mb-4">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={800}
                          height={320}
                          unoptimized
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="w-full h-44 object-cover md:h-48 lg:h-40"
                        />
                      </Link>
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                        {post.tag}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-body-large font-semibold text-neutral-800 mb-2 leading-tight">
                      <Link href={post.href} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-body-small text-neutral-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs text-neutral-500">
                        {post.source === 'editorial' ? 'Editorial' : 'Report'}
                      </span>
                      <Link href={post.href} className="text-primary font-medium group-hover:text-primary-700 transition-colors text-xs">
                        Read →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Categories section supprimée (non fonctionnelle) */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-white mb-4">
              Need Weather Risk Assessment for Your Facility?
            </h2>
            <p className="text-body-large text-primary-100 mb-8">
              Get facility-specific weather risk analysis based on historical data and geographic factors.
            </p>
            <Button
              href={CTA_BUTTONS.primary.href}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100"
            >
              {CTA_BUTTONS.primary.text}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 