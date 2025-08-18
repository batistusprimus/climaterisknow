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

  // ENVOI DE TOUTES les réponses du questionnaire comme custom fields individuels
  // Conversion des stepId vers les IDs GHL (avec la bonne casse)
  const stepIdToGHLId: Record<string, string> = {
    'ma_zipcodes': 'Ma_zipcodes',
    'ma_criticality': 'Ma_criticality',
    'company_revenue': 'Company_revenue',
    'ma_production_type': 'Ma_production_type',
    'ma_input_dependencies': 'Ma_input_dependencies',
    'ma_product_storage': 'Ma_product_storage',
    'ma_temp_requirements': 'Ma_temp_requirements',
    'ma_hist_disruptions': 'Ma_hist_disruptions',
    'ma_power_reliability': 'Ma_power_reliability',
    'ma_supply_vulnerability': 'Ma_supply_vulnerability',
    'ma_production_flexibility': 'Ma_production_flexibility',
    'ma_inventory_strategy': 'Ma_inventory_strategy',
    'ma_financial_strategy': 'Ma_financial_strategy',
    'ma_loss_exposure': 'Ma_loss_exposure',
    'contact_role': 'Contact_role',
    'contact_consent': 'Contact_consent',
    'thank_you': 'Thank_you',
  };

  for (const [stepId, value] of Object.entries(payload.answers)) {
    // Skip les champs déjà traités dans les champs principaux
    if (['company_name', 'contact_name', 'contact_email', 'contact_phone'].includes(stepId)) {
      continue;
    }
    
    // Conversion vers l'ID GHL correct
    const ghlFieldId = stepIdToGHLId[stepId];
    if (!ghlFieldId) {
      console.log(`[GHL] Warning: No GHL mapping for stepId: ${stepId}`);
      continue;
    }
    
    // Formatage de la valeur
    let formattedValue = '';
    if (Array.isArray(value)) {
      formattedValue = value.join(', ');
    } else if (value !== null && value !== undefined) {
      formattedValue = String(value);
    }
    
    // Ajout du custom field si la valeur n'est pas vide
    if (formattedValue.trim()) {
      customFields.push({ 
        id: ghlFieldId, // Utilise l'ID GHL correct avec la bonne casse
        value: formattedValue 
      });
    }
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


