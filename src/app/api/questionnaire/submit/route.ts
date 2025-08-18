import { NextRequest, NextResponse } from 'next/server';
import { saveLeadSubmission, type LeadSubmissionRecord } from '@/lib/leads-storage';
import { triggerIntegrations } from '@/lib/integrations';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadSubmissionRecord;

    console.log('[SUBMIT] Received submission:', {
      sessionId: body?.sessionId,
      tunnelId: body?.tunnelId,
      answersCount: body?.answers?.length,
      hasCompanyName: body?.answers?.some(a => a.stepId === 'company_name'),
      hasContactEmail: body?.answers?.some(a => a.stepId === 'contact_email'),
    });

    if (!body?.sessionId || !body?.tunnelId || !Array.isArray(body?.answers)) {
      console.error('[SUBMIT] Invalid request:', { 
        hasSessionId: !!body?.sessionId,
        hasTunnelId: !!body?.tunnelId,
        answersIsArray: Array.isArray(body?.answers)
      });
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
    }

    // Server-side timestamp si non fourni
    if (!body.completedAt) {
      body.completedAt = new Date().toISOString();
    }

    await saveLeadSubmission(body);
    
    console.log('[SUBMIT] Triggering integrations for:', body.tunnelId);
    
    // IMPORTANT: on attend les intégrations pour éviter que la fonction se termine
    // avant la fin des appels externes (sinon GHL est interrompu).
    try {
      await triggerIntegrations(body);
    } catch (err) {
      console.error('[SUBMIT] Integrations error for', body.tunnelId, ':', err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[SUBMIT] Submit lead error', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}


