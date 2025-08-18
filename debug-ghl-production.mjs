// Script de debug pour tester l'intégration GHL en production
// Usage: node debug-ghl-production.mjs

console.log('🔍 Debug GHL Integration - Production Test');
console.log('==========================================\n');

// 1. Test des variables d'environnement
console.log('1. Variables d\'environnement:');
console.log('   GHL_API_KEY:', process.env.GHL_API_KEY ? '✅ Configurée' : '❌ Manquante');
console.log('   GHL_LOCATION_ID:', process.env.GHL_LOCATION_ID ? '✅ Configurée' : '❌ Manquante');
console.log('   GHL_CF_SESSION_ID:', process.env.GHL_CF_SESSION_ID ? '✅ Configurée' : '⚠️ Optionnelle non configurée');
console.log('   GHL_CF_INDUSTRY:', process.env.GHL_CF_INDUSTRY ? '✅ Configurée' : '⚠️ Optionnelle non configurée');
console.log('   GHL_CF_REVENUE:', process.env.GHL_CF_REVENUE ? '✅ Configurée' : '⚠️ Optionnelle non configurée');
console.log('   GHL_CF_ZIPCODES:', process.env.GHL_CF_ZIPCODES ? '✅ Configurée' : '⚠️ Optionnelle non configurée');

console.log('\n2. Test de connectivité API:');

if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
  console.log('❌ Impossible de tester - Variables manquantes');
  process.exit(1);
}

// 2. Test de connectivité basique
async function testConnectivity() {
  try {
    console.log('   Testing GET /contacts...');
    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('   ✅ Connectivité OK - Contacts trouvés:', data.contacts?.length || 0);
      return true;
    } else {
      const errorText = await response.text();
      console.log('   ❌ Erreur de connectivité:', response.status, errorText);
      return false;
    }
  } catch (error) {
    console.log('   ❌ Erreur réseau:', error.message);
    return false;
  }
}

// 3. Test de création d'un contact
async function testContactCreation() {
  console.log('\n3. Test de création de contact:');
  
  const testContact = {
    email: `debug-test-${Date.now()}@example.com`,
    firstName: 'Debug Test',
    companyName: 'Test Company Debug',
    source: 'Sentinel Shield - Debug Test',
    tags: ['Climate Assessment', 'Debug:test'],
  };

  try {
    console.log('   Création du contact de test...');
    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
        'X-Idempotency-Key': `debug-${Date.now()}`,
      },
      body: JSON.stringify(testContact),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('   ✅ Contact créé avec succès!');
      console.log('   📋 ID:', result.contact?.id);
      console.log('   📧 Email:', result.contact?.email);
      return true;
    } else {
      const errorText = await response.text();
      console.log('   ❌ Erreur de création:', response.status);
      console.log('   📄 Détails:', errorText);
      return false;
    }
  } catch (error) {
    console.log('   ❌ Erreur lors de la création:', error.message);
    return false;
  }
}

// 4. Test de l'API de soumission
async function testSubmissionAPI() {
  console.log('\n4. Test de l\'API de soumission:');
  
  const testSubmission = {
    sessionId: `debug-session-${Date.now()}`,
    tunnelId: 'debug-tunnel',
    completedAt: new Date().toISOString(),
    answers: [
      { stepId: 'company_name', value: 'Debug Test Company' },
      { stepId: 'contact_name', value: 'Debug Tester' },
      { stepId: 'contact_email', value: `debug-api-${Date.now()}@example.com` },
      { stepId: 'contact_phone', value: '+33123456789' },
      { stepId: 'primary_industry', value: 'Manufacturing' },
      { stepId: 'company_revenue', value: '1-10M€' },
    ],
    metadata: {
      utm: {
        source: 'debug',
        medium: 'test',
        campaign: 'integration-debug'
      }
    }
  };

  try {
    console.log('   Test de l\'endpoint /api/questionnaire/submit...');
    
    // Note: En production, il faudrait utiliser l'URL complète de votre site
    // Pour ce test local, on simule juste la logique
    console.log('   📝 Payload simulé:', JSON.stringify(testSubmission, null, 2));
    console.log('   ⚠️ Pour tester réellement, utilisez votre URL de production');
    
    return true;
  } catch (error) {
    console.log('   ❌ Erreur lors du test API:', error.message);
    return false;
  }
}

// Exécution des tests
async function runAllTests() {
  const connectivityOK = await testConnectivity();
  
  if (connectivityOK) {
    await testContactCreation();
  }
  
  await testSubmissionAPI();
  
  console.log('\n==========================================');
  console.log('🏁 Tests terminés');
  console.log('\n💡 Points à vérifier:');
  console.log('   1. Variables d\'environnement sur votre plateforme de déploiement');
  console.log('   2. Logs de votre application en production');
  console.log('   3. Test d\'un vrai formulaire sur votre site');
  console.log('   4. Vérification dans l\'interface GHL');
}

runAllTests().catch(console.error);
