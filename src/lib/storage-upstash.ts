import { Redis } from '@upstash/redis';

export type StoredArticle = {
  id: string; // internal id (slug preferred)
  slug: string;
  title: string;
  excerpt?: string;
  content_html?: string;
  content_markdown?: string;
  meta_description?: string;
  image_url?: string;
  created_at: string;
  updated_at?: string;
  tags?: string[];
  status?: 'draft' | 'published' | 'archived';
  source: 'outrank';
};

let redisClient: Redis | null = null;

function getRedis(): Redis {
  if (redisClient) return redisClient;
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) {
    throw new Error('Upstash Redis non configuré. Définissez UPSTASH_REDIS_REST_URL et UPSTASH_REDIS_REST_TOKEN (ou KV_REST_API_URL/KV_REST_API_TOKEN).');
  }
  redisClient = new Redis({ url, token });
  return redisClient;
}

const ARTICLES_INDEX_KEY = 'outrank:articles:index';
const ARTICLE_KEY_PREFIX = 'outrank:article:';

function articleKey(slug: string): string {
  return `${ARTICLE_KEY_PREFIX}${slug}`;
}

export async function addArticle(article: StoredArticle): Promise<void> {
  const redis = getRedis();
  const key = articleKey(article.slug);
  await redis.set(key, article);
  await redis.sadd(ARTICLES_INDEX_KEY, article.slug);
}

export async function upsertArticles(articles: StoredArticle[]): Promise<{ saved: number }>{
  const redis = getRedis();
  const pipeline = redis.pipeline();
  for (const a of articles) {
    pipeline.set(articleKey(a.slug), a);
    pipeline.sadd(ARTICLES_INDEX_KEY, a.slug);
  }
  await pipeline.exec();
  return { saved: articles.length };
}

export async function deleteArticle(slug: string): Promise<void> {
  const redis = getRedis();
  await redis.del(articleKey(slug));
  await redis.srem(ARTICLES_INDEX_KEY, slug);
}

export async function getArticleBySlug(slug: string): Promise<StoredArticle | null> {
  const redis = getRedis();
  const data = await redis.get<StoredArticle | null>(articleKey(slug));
  return data ?? null;
}

export async function getAllArticles(): Promise<StoredArticle[]> {
  const redis = getRedis();
  const slugs = await redis.smembers<string>(ARTICLES_INDEX_KEY);
  if (!slugs || slugs.length === 0) return [];
  // Upstash Redis n'a pas MGET via pipeline typée, on simule
  const pipeline = redis.pipeline();
  for (const s of slugs) pipeline.get<StoredArticle | null>(articleKey(s));
  const results = await pipeline.exec<StoredArticle | null[]>();
  const articles: StoredArticle[] = [];
  for (const res of results) {
    const [, value] = res as unknown as [unknown, StoredArticle | null];
    if (value) articles.push(value);
  }
  // Tri par date desc
  articles.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  return articles;
}

export async function getFilteredArticles(params: {
  source?: string;
  status?: 'draft' | 'published' | 'archived';
  tag?: string;
  search?: string;
  limit?: number;
  slug?: string;
} = {}): Promise<StoredArticle[]> {
  const { source, status, tag, search, limit, slug } = params;
  if (slug) {
    const single = await getArticleBySlug(slug);
    return single ? [single] : [];
  }
  let articles = await getAllArticles();
  if (source) articles = articles.filter(a => a.source === source);
  if (status) articles = articles.filter(a => a.status === status);
  if (tag) articles = articles.filter(a => (a.tags || []).includes(tag));
  if (search) {
    const q = search.toLowerCase();
    articles = articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      (a.meta_description || '').toLowerCase().includes(q) ||
      (a.excerpt || '').toLowerCase().includes(q)
    );
  }
  if (limit && limit > 0) articles = articles.slice(0, limit);
  return articles;
}

export type { StoredArticle as Article };


