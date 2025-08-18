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

// Cache des custom fields GHL (id par name/fieldKey normalisés)
let ghlCustomFieldsCache: {
  byNameLc: Map<string, string>;
  loadedAt: number;
} | null = null;

function normalizeFieldName(name: unknown): string {
  return String(name || '')
    .trim()
    .toLowerCase();
}

function extractContactKeyFromUniqueKey(uniqueKey: unknown): string | undefined {
  if (typeof uniqueKey !== 'string') return undefined;
  // Formats possibles: "{{ contact.ma_zipcodes }}" ou "contact.ma_zipcodes"
  const txt = uniqueKey.replace(/[{}]/g, '').trim();
  const m = /contact\.([a-zA-Z0-9_]+)/.exec(txt);
  return m?.[1];
}

async function fetchGhlCustomFields(apiKey: string, locationId: string): Promise<void> {
  if (ghlCustomFieldsCache && Date.now() - ghlCustomFieldsCache.loadedAt < 10 * 60 * 1000) return;

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    Version: '2021-07-28',
    LocationId: locationId,
  };

  const candidates: string[] = [
    // LeadConnector services
    `https://services.leadconnectorhq.com/v2/locations/${locationId}/custom-fields`,
    `https://services.leadconnectorhq.com/v1/locations/${locationId}/customFields`,
    `https://services.leadconnectorhq.com/contacts/customFields`,
    // GoHighLevel REST
    `https://rest.gohighlevel.com/v1/customFields`,
    `https://rest.gohighlevel.com/v1/locations/${locationId}/customFields`,
    // Public API (souvent exposée dans l'UI)
    `https://public-api.gohighlevel.com/v2/locations/${locationId}/custom-fields`,
    `https://public-api.gohighlevel.com/v1/locations/${locationId}/customFields`,
  ];

  type UnknownRecord = Record<string, unknown>;
  let list: Array<UnknownRecord> = [];
  for (const url of candidates) {
    try {
      const res = await fetch(url, { method: 'GET', headers });
      const ct = res.headers.get('content-type') || '';
      if (!res.ok || !ct.includes('application/json')) continue;
      const json: unknown = await res.json();
      const obj = json as UnknownRecord | UnknownRecord[];
      const arrUnknown = Array.isArray(obj)
        ? obj
        : (Array.isArray((obj as UnknownRecord)?.data as unknown[])
            ? ((obj as UnknownRecord).data as unknown[])
            : (Array.isArray((obj as UnknownRecord)?.customFields as unknown[])
                ? ((obj as UnknownRecord).customFields as unknown[])
                : []));
      if (Array.isArray(arrUnknown) && arrUnknown.length) {
        list = arrUnknown as UnknownRecord[];
        console.log('[GHL] Discovered custom fields from', url, 'count:', arrUnknown.length);
        break;
      }
    } catch {}
  }

  const byNameLc = new Map<string, string>();
  for (const f of list) {
    const idCandidateKeys = ['id','_id','value'] as const;
    const nameCandidateKeys = ['name','fieldName','key','fieldKey'] as const;

    let idStr: string | undefined;
    for (const k of idCandidateKeys) {
      const v = f[k];
      if (typeof v === 'string' && v.trim()) { idStr = v; break; }
    }

    let nameStr: string | undefined;
    for (const k of nameCandidateKeys) {
      const v = f[k];
      if (typeof v === 'string' && v.trim()) { nameStr = v; break; }
    }

    if (!idStr || !nameStr) continue;
    byNameLc.set(normalizeFieldName(nameStr), idStr);

    // Bonus: mappe aussi via uniqueKey -> contact.<key>
    const uniqueKeyCandidate = (f as UnknownRecord)['uniqueKey'] ?? (f as UnknownRecord)['unique_key'];
    const contactKey = extractContactKeyFromUniqueKey(uniqueKeyCandidate);
    if (contactKey) byNameLc.set(normalizeFieldName(contactKey), idStr);
  }

  ghlCustomFieldsCache = { byNameLc, loadedAt: Date.now() };
}

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

  // Réactivation: envoi de toutes les réponses comme custom fields GHL
  // 1) On récupère la liste réelle des champs (leurs IDs) et on mappe par nom
  await fetchGhlCustomFields(apiKey, locationId);
  const byNameLc = ghlCustomFieldsCache?.byNameLc || new Map<string, string>();

  for (const [stepId, value] of Object.entries(payload.answers as Record<string, unknown>)) {
    if (['company_name', 'contact_name', 'contact_email', 'contact_phone'].includes(stepId)) continue;

    let formatted = '';
    if (Array.isArray(value)) formatted = value.map(v => String(v)).join(', ');
    else if (value != null) formatted = String(value);
    if (!formatted.trim()) continue;

    // On teste plusieurs clés possibles pour matcher le champ GHL:
    const candidates = [
      stepId,                       // ex: ma_zipcodes
      stepId.replace(/_/g, ' '),    // ma zipcodes
      stepId.replace(/\b\w/g, c => c.toUpperCase()), // Ma_Zipcodes (camel titre)
    ].map(normalizeFieldName);

    let matchedId: string | undefined;
    for (const key of candidates) {
      const id = byNameLc.get(key);
      if (id) { matchedId = id; break; }
    }

    if (!matchedId) {
      console.log('[GHL] Custom field not found for stepId:', stepId);
      continue;
    }

    customFields.push({ id: matchedId, value: formatted });
  }

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

  try {
    console.log('[GHL] Making fetch request to GHL API...');
    console.log('[GHL] Request body:', JSON.stringify(body, null, 2));
    
    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
        'X-Idempotency-Key': payload.sessionId,
      },
      body: JSON.stringify(body),
    });

    console.log('[GHL] Response received - status:', response.status);
    console.log('[GHL] Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[GHL] API Error:', response.status, errorText);
      throw new Error(`GHL ${response.status}: ${errorText}`);
    } else {
      const result = await response.json();
      console.log('[GHL] Full response:', JSON.stringify(result, null, 2));
      console.log('[GHL] Contact created successfully:', result.contact?.id);
      console.log('[GHL] Custom fields in response:', result.contact?.customField?.length || 0);
    }
  } catch (fetchError) {
    console.error('[GHL] FETCH EXCEPTION:', fetchError);
    console.error('[GHL] Error type:', fetchError instanceof Error ? fetchError.constructor.name : typeof fetchError);
    console.error('[GHL] Error message:', fetchError instanceof Error ? fetchError.message : String(fetchError));
    throw fetchError;
  }
}

async function sendToPickaxe(payload: NormalizedLead): Promise<void> {
  const webhookUrl = process.env.PICKAXE_WEBHOOK_URL; // unused (Pickaxe désactivé)
  const webhookToken = process.env.PICKAXE_WEBHOOK_TOKEN; // unused
  const apiKey = process.env.PICKAXE_API_KEY;
  const toolId = process.env.PICKAXE_TOOL_ID;

  // Pickaxe désactivé (non requis)

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
  
  console.log('[INTEGRATIONS] Starting integrations for session:', normalized.sessionId);
  
  // Run in parallel with retry; do not throw to caller
  const results = await Promise.allSettled([
    withRetry(() => sendToGHL(normalized), 'ghl'),
    withRetry(() => sendToPickaxe(normalized), 'pickaxe'),
  ]);
  
  // Log les résultats pour debug
  results.forEach((result, index) => {
    const integration = index === 0 ? 'GHL' : 'Pickaxe';
    if (result.status === 'rejected') {
      console.error(`[INTEGRATIONS] ${integration} FAILED:`, result.reason);
    } else {
      console.log(`[INTEGRATIONS] ${integration} succeeded`);
    }
  });
}


