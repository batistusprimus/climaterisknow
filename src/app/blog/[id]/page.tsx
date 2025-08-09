import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blog-data';
import { SITE_CONFIG } from '@/lib/constants';
import type { Article as OutrankArticle } from '@/lib/storage-upstash';

// Simplification KISS: retirer un éventuel premier H1 pour éviter le doublon avec le hero
function stripFirstH1(rawHtml: string): string {
  if (!rawHtml) return '';
  // Retire uniquement si le premier tag est un H1
  return rawHtml.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
}

export async function generateStaticParams() {
  // on prérend les articles statiques; les Outrank seront render dynamiquement
  return BLOG_POSTS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  // Cherche d'abord côté Outrank API
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url;
  try {
    const res = await fetch(`${base}/api/blog/articles?slug=${id}`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      const item = (data?.items?.[0] ?? null) as OutrankArticle | null;
      if (item) {
        return {
          title: `${item.title} | Sentinel Shield`,
          description: item.meta_description || item.excerpt || undefined,
          openGraph: {
            title: `${item.title} | Sentinel Shield`,
            description: item.meta_description || item.excerpt || undefined,
            type: 'article',
            url: `${base}/blog/${item.slug}`,
            publishedTime: new Date(item.created_at).toISOString(),
            images: item.image_url ? [{ url: item.image_url }] : undefined,
          },
        };
      }
    }
  } catch {}

  // fallback statique
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) return { title: 'Article non trouvé' };
  return {
    title: `${post.title} | Sentinel Shield`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Sentinel Shield`,
      description: post.excerpt,
      type: 'article',
      url: `${base}/blog/${post.id}`,
      authors: [post.author],
      publishedTime: new Date(post.publishedAt).toISOString(),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url;

  // 1) Essaye Outrank d'abord
  try {
    const res = await fetch(`${base}/api/blog/articles?slug=${id}`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      const item = (data?.items?.[0] ?? null) as OutrankArticle | null;
      if (item) {
        const formattedDate = new Date(item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const html = stripFirstH1(item.content_html || '');
        return (
          <div className="min-h-screen bg-background">
            <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
              <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                  <Link href="/blog" className="text-primary-100 hover:text-white text-body-small inline-flex items-center mb-6">← Retour au blog</Link>
                  <h1 className="text-h1 font-bold text-white mb-4">{item.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-primary-100">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-body-small">
                      {item.tags?.[0] || 'Report'}
                    </span>
                    <span className="text-body-small">{formattedDate}</span>
                    <span className="text-body-small">Published</span>
                  </div>
                </div>
              </div>
            </section>
            {item.image_url && (
              <div className="container-custom -mt-6 md:-mt-10 overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={1280}
                  height={640}
                  unoptimized
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full max-w-4xl mx-auto rounded-xl shadow object-cover h-56 sm:h-64 md:h-80"
                />
              </div>
            )}

            <section className="section-padding">
              <div className="container-custom">
                <article className="bg-white rounded-2xl shadow-card p-6 md:p-10">
                  <div className="prose prose-neutral lg:prose-lg max-w-none prose-headings:text-neutral-900 prose-a:text-primary hover:prose-a:text-primary-700 prose-img:rounded-xl prose-img:shadow lg:prose-h2:mt-10 lg:prose-h3:mt-8 prose-p:text-neutral-700 prose-li:text-neutral-700">
                    <div className="overflow-x-auto">
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        );
      }
    }
  } catch {}

  // 2) Fallback vers statique
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) return notFound();
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const { html, toc } = buildTocAndInjectIds(post.content || '');
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-100 hover:text-white text-body-small inline-flex items-center mb-6">← Retour au blog</Link>
            <h1 className="text-h1 font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-100">
              <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-body-small">{post.category}</span>
              <span className="text-body-small">{formattedDate}</span>
              <span className="text-body-small">{post.readTime} min de lecture</span>
              <span className="text-body-small">Par {post.author}</span>
            </div>
          </div>
        </div>
      </section>
      {/** Couverture statique si disponible */}
      {post.featuredImage && (
        <div className="container-custom -mt-6 md:-mt-10 overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={1280}
            height={640}
            unoptimized
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full max-w-4xl mx-auto rounded-xl shadow object-cover h-56 sm:h-64 md:h-80"
          />
        </div>
      )}
      <section className="section-padding">
        <div className="container-custom">
          <article className="bg-white rounded-2xl shadow-card p-6 md:p-10">
            <div className="prose prose-neutral lg:prose-lg max-w-none prose-headings:text-neutral-900 prose-a:text-primary hover:prose-a:text-primary-700 prose-img:rounded-xl prose-img:shadow lg:prose-h2:mt-10 lg:prose-h3:mt-8 prose-p:text-neutral-700 prose-li:text-neutral-700">
              <div className="overflow-x-auto">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}


