import { NextRequest, NextResponse } from 'next/server';
import { upsertArticles, type Article } from '@/lib/storage-upstash';

export const dynamic = 'force-dynamic';

function unauthorized(message = 'Unauthorized') {
  return NextResponse.json({ error: message }, { status: 401 });
}

export async function GET() {
  return NextResponse.json({ status: 'ok' });
}

type OutrankArticle = {
  id: string;
  title: string;
  content_markdown?: string;
  content_html?: string;
  meta_description?: string;
  created_at: string;
  updated_at?: string;
  image_url?: string;
  slug?: string;
  tags?: string[];
};

type OutrankWebhookBody = {
  event_type: 'publish_articles' | string;
  timestamp: string;
  data: { articles: OutrankArticle[] };
};

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');
  const expectedToken = process.env.OUTRANK_ACCESS_TOKEN;
  if (!expectedToken) {
    return NextResponse.json({ error: 'OUTRANK_ACCESS_TOKEN non défini côté serveur' }, { status: 500 });
  }
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return unauthorized('Authorization header manquant');
  }
  const token = authHeader.slice('Bearer '.length).trim();
  if (token !== expectedToken) {
    return unauthorized('Jeton invalide');
  }

  let payload: OutrankWebhookBody;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'JSON invalide' }, { status: 400 });
  }

  if (!payload?.data?.articles || !Array.isArray(payload.data.articles)) {
    return NextResponse.json({ error: 'Corps invalide: data.articles requis' }, { status: 400 });
  }

  const toStore: Article[] = [];
  const errors: Array<{ id?: string; error: string }> = [];

  for (const art of payload.data.articles) {
    try {
      const slug = (art.slug || art.id).toLowerCase();
      const createdAt = art.created_at || new Date().toISOString();
      const excerpt = art.meta_description || art.title;
      toStore.push({
        id: slug,
        slug,
        title: art.title,
        excerpt,
        content_html: art.content_html,
        content_markdown: art.content_markdown,
        meta_description: art.meta_description,
        image_url: art.image_url,
        created_at: createdAt,
        updated_at: art.updated_at,
        tags: art.tags || [],
        status: 'published',
        source: 'outrank',
      });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'mapping error';
      errors.push({ id: art?.id, error: message });
    }
  }

  try {
    const res = await upsertArticles(toStore);
    return NextResponse.json({ saved: res.saved, errors });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'storage error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


