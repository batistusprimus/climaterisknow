import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { SITE_CONFIG } from '@/lib/constants';

type PageParams = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.id === params.id);
  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} | Sentinel Shield`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Sentinel Shield`,
      description: post.excerpt,
      type: 'article',
      url: `${SITE_CONFIG.url}/blog/${post.id}`,
      authors: [post.author],
      publishedTime: new Date(post.publishedAt).toISOString(),
    },
  };
}

export default function BlogPostPage({ params }: PageParams) {
  const post = BLOG_POSTS.find((p) => p.id === params.id);
  if (!post) return notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-primary-100 hover:text-white text-body-small inline-flex items-center mb-6">
              ← Retour au blog
            </Link>
            <h1 className="text-h1 font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-100">
              <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-body-small">
                {post.category}
              </span>
              <span className="text-body-small">{formattedDate}</span>
              <span className="text-body-small">{post.readTime} min de lecture</span>
              <span className="text-body-small">Par {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-6 md:p-10">
            <div
              className="prose prose-neutral max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-li:text-neutral-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>
    </div>
  );
}


