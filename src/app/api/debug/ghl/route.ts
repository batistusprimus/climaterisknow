import { NextRequest, NextResponse } from 'next/server';

// Endpoint de debug pour tester l'intégration GHL en production
// Usage: GET /api/debug/ghl
export async function GET() {
  try {
    // Vérification des variables d'environnement
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;
    
    const envCheck = {
      hasApiKey: !!apiKey,
      hasLocationId: !!locationId,
      hasCustomFields: {
        session: !!process.env.GHL_CF_SESSION_ID,
        industry: !!process.env.GHL_CF_INDUSTRY,
        revenue: !!process.env.GHL_CF_REVENUE,
        zipcodes: !!process.env.GHL_CF_ZIPCODES,
      }
    };

    // Test de connectivité si les credentials sont présents
    let connectivityTest = null;
    let contactCreationTest = null;

    if (apiKey && locationId) {
      try {
        // Test GET contacts
        const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Version': '2021-07-28',
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          connectivityTest = {
            success: true,
            contactsCount: data.contacts?.length || 0,
          };

          // Test création d'un contact de debug
          const debugContact = {
            email: `debug-production-${Date.now()}@example.com`,
            firstName: 'Debug Production Test',
            companyName: 'Test Company Production',
            source: 'Sentinel Shield - Production Debug',
            tags: ['Climate Assessment', 'Debug:production'],
          };

          const createResponse = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Version': '2021-07-28',
              'Content-Type': 'application/json',
              'X-Idempotency-Key': `debug-production-${Date.now()}`,
            },
            body: JSON.stringify(debugContact),
          });

          if (createResponse.ok) {
            const result = await createResponse.json();
            contactCreationTest = {
              success: true,
              contactId: result.contact?.id,
              email: result.contact?.email,
            };
          } else {
            const errorText = await createResponse.text();
            contactCreationTest = {
              success: false,
              error: `${createResponse.status}: ${errorText}`,
            };
          }
        } else {
          const errorText = await response.text();
          connectivityTest = {
            success: false,
            error: `${response.status}: ${errorText}`,
          };
        }
      } catch (error) {
        connectivityTest = {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      ghlIntegration: {
        environmentVariables: envCheck,
        connectivityTest,
        contactCreationTest,
      },
      recommendations: [
        !envCheck.hasApiKey && 'Configure GHL_API_KEY environment variable',
        !envCheck.hasLocationId && 'Configure GHL_LOCATION_ID environment variable',
        connectivityTest?.success === false && 'Check API credentials and permissions',
        contactCreationTest?.success === false && 'Check contact creation permissions',
      ].filter(Boolean),
    });
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json({
      error: 'Debug endpoint failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
