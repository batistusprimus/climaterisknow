import type { LeadSubmissionRecord } from './leads-storage';

export type NormalizedLead = {
  type: 'lead.submitted';
  sessionId: string;
  tunnelId: string;
  completedAt: string;
  contact: {
    company?: string;
    name?: string;
    email?: string;
    phone?: string;
  };
  answers: Record<string, unknown>;
  utm?: Record<string, string | null>;
  metadata?: Record<string, unknown>;
  industry?: string;
  revenue?: string;
  zipcodes?: string[];
};

function extractValue(answers: LeadSubmissionRecord['answers'], stepId: string): unknown {
  return answers.find(a => a.stepId === stepId)?.value;
}

export function normalizeLead(sub: LeadSubmissionRecord): NormalizedLead {
  const answersObj: Record<string, unknown> = {};
  for (const a of sub.answers) answersObj[a.stepId] = a.value;

  const zipSteps = ['en_zipcodes', 'pe_zipcodes', 'lo_zipcodes', 'ma_zipcodes', 'co_zipcodes'];
  const zipcodes: string[] = [];
  for (const z of zipSteps) {
    const v = extractValue(sub.answers, z);
    if (Array.isArray(v)) {
      for (const item of v) {
        const s = String(item || '').trim();
        if (s) zipcodes.push(s);
      }
    }
  }

  return {
    type: 'lead.submitted',
    sessionId: sub.sessionId,
    tunnelId: sub.tunnelId,
    completedAt: sub.completedAt,
    contact: {
      company: String(extractValue(sub.answers, 'company_name') || '') || undefined,
      name: String(extractValue(sub.answers, 'contact_name') || '') || undefined,
      email: String(extractValue(sub.answers, 'contact_email') || '') || undefined,
      phone: String(extractValue(sub.answers, 'contact_phone') || '') || undefined,
    },
    answers: answersObj,
    utm: sub.metadata?.utm,
    metadata: (sub.metadata ?? undefined) as Record<string, unknown> | undefined,
    industry: String(extractValue(sub.answers, 'primary_industry') || '') || undefined,
    revenue: String(extractValue(sub.answers, 'company_revenue') || '') || undefined,
    zipcodes: zipcodes.length ? zipcodes : undefined,
  };
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<void> {
  const delays = [0, 1000, 3000];
  for (let i = 0; i < delays.length; i++) {
    try {
      if (delays[i]) {
        console.log(`[integrations] ${label} retry ${i + 1} after ${delays[i]}ms`);
        await new Promise(r => setTimeout(r, delays[i]));
      }
      await fn();
      console.log(`[integrations] ${label} succeeded on attempt ${i + 1}`);
      return;
    } catch (err) {
      console.error(`[integrations] ${label} attempt ${i + 1} failed:`, err);
      if (i === delays.length - 1) {
        console.error(`[integrations] ${label} FINAL FAILURE after ${delays.length} attempts:`, err);
      }
    }
  }
}

async function sendToGHL(payload: NormalizedLead): Promise<void> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  
  console.log('[GHL] Starting integration for session:', payload.sessionId);
  
  if (!apiKey || !locationId) {
    console.log('[GHL] Not configured - missing credentials:', { 
      hasApiKey: !!apiKey, 
      hasLocationId: !!locationId 
    });
    return; // not configured
  }

  // Custom fields spécifiques (optionnels)
  const cfSession = process.env.GHL_CF_SESSION_ID;
  const cfIndustry = process.env.GHL_CF_INDUSTRY;
  const cfRevenue = process.env.GHL_CF_REVENUE;
  const cfZipcodes = process.env.GHL_CF_ZIPCODES;

  const customFields: Array<{ id: string; value: string }> = [];
  
  // Ajout des champs spécifiques s'ils sont configurés
  if (cfSession) customFields.push({ id: cfSession, value: payload.sessionId });
  if (cfIndustry && payload.industry) customFields.push({ id: cfIndustry, value: payload.industry });
  if (cfRevenue && payload.revenue) customFields.push({ id: cfRevenue, value: payload.revenue });
  if (cfZipcodes && payload.zipcodes?.length) customFields.push({ id: cfZipcodes, value: payload.zipcodes.join(',') });

  // TEMPORAIRE : Désactivation des custom fields pour tester la création de base
  // Les custom fields semblent être rejetés par GHL et empêchent la création
  console.log('[GHL] TEMP: Custom fields disabled for debugging - focusing on contact creation');
  
  // TODO: Réactiver une fois que nous aurons identifié le bon format des custom fields
  /*
  for (const [stepId, value] of Object.entries(payload.answers)) {
    // Code custom fields temporairement désactivé
  }
  */

  const body = {
    email: payload.contact.email,
    phone: payload.contact.phone,
    firstName: payload.contact.name,
    companyName: payload.contact.company,
    source: 'Sentinel Shield - Capture',
    tags: ['Climate Assessment', `Tunnel:${payload.tunnelId}`],
    customFields,
  };

  console.log('[GHL] Sending contact:', { 
    email: body.email, 
    name: body.firstName, 
    company: body.companyName,
    customFieldsCount: customFields.length 
  });
  
  console.log('[GHL] Custom fields being sent:', customFields.map(cf => ({ id: cf.id, value: cf.value.substring(0, 50) + '...' })));

  await fetch('https://rest.gohighlevel.com/v1/contacts/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Version': '2021-07-28',
      'Content-Type': 'application/json',
      'X-Idempotency-Key': payload.sessionId,
    },
    body: JSON.stringify(body),
  }).then(async res => {
    if (!res.ok) {
      const errorText = await res.text();
      console.error('[GHL] API Error:', res.status, errorText);
      throw new Error(`GHL ${res.status}: ${errorText}`);
    } else {
      const result = await res.json();
      console.log('[GHL] Contact created successfully:', result.contact?.id);
    }
  });
}

async function sendToPickaxe(payload: NormalizedLead): Promise<void> {
  const webhookUrl = process.env.PICKAXE_WEBHOOK_URL;
  const webhookToken = process.env.PICKAXE_WEBHOOK_TOKEN;
  const apiKey = process.env.PICKAXE_API_KEY;
  const toolId = process.env.PICKAXE_TOOL_ID;

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(webhookToken ? { 'Authorization': `Bearer ${webhookToken}` } : {}),
        'X-Idempotency-Key': payload.sessionId,
      },
      body: JSON.stringify(payload),
    }).then(res => { if (!res.ok) throw new Error(`Pickaxe webhook ${res.status}`); });
    return;
  }

  if (apiKey && toolId) {
    const inputs = {
      company: payload.contact.company,
      name: payload.contact.name,
      email: payload.contact.email,
      phone: payload.contact.phone,
      industry: payload.industry,
      revenue: payload.revenue,
      zipcodes: payload.zipcodes,
      tunnelId: payload.tunnelId,
    };
    await fetch(`https://api.pickaxeproject.com/v1/tools/${toolId}/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'X-Idempotency-Key': payload.sessionId,
      },
      body: JSON.stringify({ externalId: payload.sessionId, inputs, metadata: { utm: payload.utm } }),
    }).then(res => { if (!res.ok) throw new Error(`Pickaxe API ${res.status}`); });
  }
}

export async function triggerIntegrations(submission: LeadSubmissionRecord): Promise<void> {
  const normalized = normalizeLead(submission);
  // Run in parallel with retry; do not throw to caller
  await Promise.allSettled([
    withRetry(() => sendToGHL(normalized), 'ghl'),
    withRetry(() => sendToPickaxe(normalized), 'pickaxe'),
  ]);
}


