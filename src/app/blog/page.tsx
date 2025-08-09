import type { Metadata } from 'next';
import Link from 'next/link';
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
  // Récupération des articles Outrank (publiés)
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

          {/* Outrank Articles (si disponibles) */}
          {outrankItems.length > 0 && (
            <div className="mb-16">
              <h2 className="text-h2 font-bold text-neutral-800 mb-12">Latest (Outrank)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {outrankItems.map((post) => (
                  <article key={post.slug} className="card hover:shadow-card-hover transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                        {post.tags?.[0] || 'Report'}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-body-large font-semibold text-neutral-800 mb-2 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-body-small text-neutral-600 mb-4 line-clamp-3">
                      {post.meta_description || post.excerpt || ''}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">Published</span>
                      <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:text-primary-700 transition-colors text-xs">
                        Read →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* All Articles (statiques) */}
          <div className="mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-12">All Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="card hover:shadow-card-hover transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-body-large font-semibold text-neutral-800 mb-2 leading-tight">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-body-small text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {post.readTime} min read
                    </span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-primary font-medium hover:text-primary-700 transition-colors text-xs"
                    >
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-h3 font-semibold text-neutral-800 mb-6 font-secondary">
              Browse by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {BLOG_CATEGORIES.map((category) => (
                <span
                  key={category}
                  className="inline-block px-4 py-2 bg-primary/5 text-primary text-body-small font-medium rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
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