import { NextResponse } from 'next/server';

// Endpoint de debug spécifique au formulaire manufacturing
// Usage: GET /api/debug/manufacturing
export async function GET() {
  try {
    // Test avec les mêmes données que le manufacturing
    const testSubmission = {
      sessionId: `debug-manufacturing-${Date.now()}`,
      tunnelId: 'manufacturer_page',
      completedAt: new Date().toISOString(),
      answers: [
        { stepId: 'company_name', value: 'Debug Manufacturing Company' },
        { stepId: 'contact_name', value: 'Debug Manufacturing User' },
        { stepId: 'contact_email', value: `debug-manufacturing-${Date.now()}@example.com` },
        { stepId: 'contact_phone', value: '+33123456789' },
        { stepId: 'primary_industry', value: 'Manufacturing' },
        { stepId: 'company_revenue', value: '1-10M€' },
        { stepId: 'ma_zipcodes', value: ['75001', '75002'] },
      ],
      metadata: {
        utm: {
          source: 'manufacturer_page',
          medium: 'debug',
          campaign: 'manufacturing-debug'
        }
      }
    };

    // Import des fonctions d'intégration
    const { normalizeLead } = await import('@/lib/integrations');
    
    console.log('[DEBUG-MANUFACTURING] Testing manufacturing lead normalization...');
    
    const normalized = normalizeLead(testSubmission);
    
    console.log('[DEBUG-MANUFACTURING] Normalized lead:', JSON.stringify(normalized, null, 2));
    
    // Test direct de l'API GHL
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;
    
    if (!apiKey || !locationId) {
      return NextResponse.json({
        error: 'GHL credentials not configured',
        hasApiKey: !!apiKey,
        hasLocationId: !!locationId,
      });
    }

    const body = {
      email: normalized.contact.email,
      phone: normalized.contact.phone,
      firstName: normalized.contact.name,
      companyName: normalized.contact.company,
      source: 'Sentinel Shield - Debug Manufacturing',
      tags: ['Climate Assessment', `Tunnel:${normalized.tunnelId}`, 'Debug:Manufacturing'],
    };

    console.log('[DEBUG-MANUFACTURING] Sending to GHL:', body);

    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
        'X-Idempotency-Key': normalized.sessionId,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('[DEBUG-MANUFACTURING] GHL Success:', result.contact?.id);
      
      return NextResponse.json({
        success: true,
        normalized,
        ghlResponse: result,
        message: 'Manufacturing debug contact created successfully',
      });
    } else {
      const errorText = await response.text();
      console.error('[DEBUG-MANUFACTURING] GHL Error:', response.status, errorText);
      
      return NextResponse.json({
        success: false,
        error: `GHL API Error: ${response.status}`,
        details: errorText,
        normalized,
      });
    }
  } catch (error) {
    console.error('[DEBUG-MANUFACTURING] Exception:', error);
    return NextResponse.json({
      error: 'Debug manufacturing endpoint failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
