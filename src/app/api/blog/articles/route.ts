import { NextRequest, NextResponse } from 'next/server';
import { getFilteredArticles, addArticle, deleteArticle, type Article } from '@/lib/storage-upstash';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get('source') || undefined;
  const statusParam = searchParams.get('status') as 'draft' | 'published' | 'archived' | null;
  const tag = searchParams.get('tag') || undefined;
  const search = searchParams.get('search') || undefined;
  const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined;
  const slug = searchParams.get('slug') || undefined;

  const articles = await getFilteredArticles({ source: source || undefined, status: statusParam || undefined, tag, search, limit, slug });
  return NextResponse.json({ items: articles });
}

export async function POST(req: NextRequest) {
  // facultatif: ajout manuel d'articles
  const authHeader = req.headers.get('authorization');
  if (!authHeader || authHeader !== `Bearer ${process.env.OUTRANK_ACCESS_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  const article = body as Article;
  await addArticle(article);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || authHeader !== `Bearer ${process.env.OUTRANK_ACCESS_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'slug manquant' }, { status: 400 });
  await deleteArticle(slug);
  return NextResponse.json({ ok: true });
}


