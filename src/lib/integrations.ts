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
      if (delays[i]) await new Promise(r => setTimeout(r, delays[i]));
      await fn();
      return;
    } catch (err) {
      if (i === delays.length - 1) {
        console.error(`[integrations] ${label} failed`, err);
      }
    }
  }
}

async function sendToGHL(payload: NormalizedLead): Promise<void> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) return; // not configured

  const cfSession = process.env.GHL_CF_SESSION_ID;
  const cfIndustry = process.env.GHL_CF_INDUSTRY;
  const cfRevenue = process.env.GHL_CF_REVENUE;
  const cfZipcodes = process.env.GHL_CF_ZIPCODES;

  const customFields: Array<{ id: string; value: string }> = [];
  if (cfSession) customFields.push({ id: cfSession, value: payload.sessionId });
  if (cfIndustry && payload.industry) customFields.push({ id: cfIndustry, value: payload.industry });
  if (cfRevenue && payload.revenue) customFields.push({ id: cfRevenue, value: payload.revenue });
  if (cfZipcodes && payload.zipcodes?.length) customFields.push({ id: cfZipcodes, value: payload.zipcodes.join(',') });

  const body = {
    email: payload.contact.email,
    phone: payload.contact.phone,
    firstName: payload.contact.name,
    companyName: payload.contact.company,
    source: 'Sentinel Shield - Capture',
    tags: ['Climate Assessment', `Tunnel:${payload.tunnelId}`],
    customFields,
  };

  await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Version': '2021-07-28',
      'LocationId': locationId,
      'Content-Type': 'application/json',
      'X-Idempotency-Key': payload.sessionId,
    },
    body: JSON.stringify(body),
  }).then(async res => {
    if (!res.ok) throw new Error(`GHL ${res.status}`);
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


