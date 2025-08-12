import { NextRequest, NextResponse } from 'next/server';
import { saveLeadSubmission, type LeadSubmissionRecord } from '@/lib/leads-storage';
import { triggerIntegrations } from '@/lib/integrations';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadSubmissionRecord;

    if (!body?.sessionId || !body?.tunnelId || !Array.isArray(body?.answers)) {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
    }

    // Server-side timestamp si non fourni
    if (!body.completedAt) {
      body.completedAt = new Date().toISOString();
    }

    await saveLeadSubmission(body);
    // Fire-and-forget vers intégrations externes
    triggerIntegrations(body).catch((err) => {
      console.error('Integrations error', err);
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Submit lead error', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}


