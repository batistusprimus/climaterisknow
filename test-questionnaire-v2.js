#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Test du questionnaire Sentinel Shield - Version 2');
console.log('==================================================\n');

// Charger les IDs réels depuis le fichier
const schemaPath = path.join(__dirname, 'src/lib/questionnaire/complete-schema.ts');
const schemaContent = fs.readFileSync(schemaPath, 'utf8');

// Extraire tous les IDs
const idMatches = schemaContent.match(/id: '[^']*'/g);
const allIds = idMatches ? idMatches.map(match => match.replace("id: '", '').replace("'", '')) : [];

console.log(`📊 Total d'étapes trouvées: ${allIds.length}`);

// Test 1: Vérification des étapes de base
console.log('\n📋 1. Vérification des étapes de base:');
const requiredSteps = ['company_name', 'company_revenue', 'primary_industry'];
let baseStepsOk = 0;

for (const stepId of requiredSteps) {
  if (allIds.includes(stepId)) {
    console.log(`✅ ${stepId}`);
    baseStepsOk++;
  } else {
    console.log(`❌ ${stepId} - MANQUANT`);
  }
}

// Test 2: Vérification des embranchements par industrie
console.log('\n🏭 2. Vérification des embranchements par industrie:');

const industries = {
  'Energy & Utilities': { prefix: 'en_', color: '🔋' },
  'Petrochemical': { prefix: 'pe_', color: '⚗️' },
  'Logistics': { prefix: 'lo_', color: '🚛' },
  'Manufacturing': { prefix: 'ma_', color: '🏭' },
  'Construction': { prefix: 'co_', color: '🏗️' }
};

let totalIndustrySteps = 0;
for (const [industry, config] of Object.entries(industries)) {
  const industrySteps = allIds.filter(id => id.startsWith(config.prefix));
  totalIndustrySteps += industrySteps.length;
  
  console.log(`\n  ${config.color} ${industry.toUpperCase()} (${industrySteps.length} étapes):`);
  
  // Grouper par type d'étape
  const sections = {
    'Geographic': industrySteps.filter(id => id.includes('zipcodes') || id.includes('coverage') || id.includes('concentration') || id.includes('coastal') || id.includes('geo')),
    'Operations': industrySteps.filter(id => id.includes('capacity') || id.includes('type') || id.includes('infra') || id.includes('fleet') || id.includes('production') || id.includes('process')),
    'Vulnerabilities': industrySteps.filter(id => id.includes('temp') || id.includes('weather') || id.includes('hist') || id.includes('vulnerability') || id.includes('risk') || id.includes('wind') || id.includes('water')),
    'Management': industrySteps.filter(id => id.includes('monitoring') || id.includes('backup') || id.includes('financial') || id.includes('strategy') || id.includes('planning') || id.includes('intel')),
    'Other': industrySteps.filter(id => !id.includes('zipcodes') && !id.includes('coverage') && !id.includes('concentration') && !id.includes('coastal') && !id.includes('geo') && !id.includes('capacity') && !id.includes('type') && !id.includes('infra') && !id.includes('fleet') && !id.includes('production') && !id.includes('process') && !id.includes('temp') && !id.includes('weather') && !id.includes('hist') && !id.includes('vulnerability') && !id.includes('risk') && !id.includes('wind') && !id.includes('water') && !id.includes('monitoring') && !id.includes('backup') && !id.includes('financial') && !id.includes('strategy') && !id.includes('planning') && !id.includes('intel'))
  };
  
  for (const [sectionName, steps] of Object.entries(sections)) {
    if (steps.length > 0) {
      console.log(`    📍 ${sectionName}: ${steps.length} étapes`);
      steps.forEach(step => console.log(`      ✅ ${step}`));
    }
  }
}

// Test 3: Vérification des étapes de contact
console.log('\n👤 3. Vérification des étapes de contact:');
const contactSteps = ['contact_name', 'contact_role', 'contact_email', 'contact_phone', 'contact_consent'];
let contactStepsOk = 0;

for (const stepId of contactSteps) {
  if (allIds.includes(stepId)) {
    console.log(`✅ ${stepId}`);
    contactStepsOk++;
  } else {
    console.log(`❌ ${stepId} - MANQUANT`);
  }
}

// Test 4: Vérification de l'étape finale
console.log('\n🎉 4. Vérification de l\'étape finale:');
const hasThankYou = allIds.includes('thank_you');
console.log(`${hasThankYou ? '✅' : '❌'} thank_you`);

// Test 5: Vérification des options critiques
console.log('\n🎯 5. Vérification des options des étapes principales:');

// Test industry options
console.log('  Industries:');
const industryOptions = allIds.filter(id => id.startsWith('ind_'));
console.log(`  ✅ ${industryOptions.length} options d'industrie: ${industryOptions.join(', ')}`);

// Test revenue options
console.log('  Revenus:');
const revenueOptions = allIds.filter(id => id.startsWith('rev_'));
console.log(`  ✅ ${revenueOptions.length} options de revenus: ${revenueOptions.join(', ')}`);

// Test consent options
console.log('  Consentement:');
const consentOptions = allIds.filter(id => id.startsWith('consent_'));
console.log(`  ✅ ${consentOptions.length} options de consentement: ${consentOptions.join(', ')}`);

// Test 6: Analyse des transitions et règles
console.log('\n🔗 6. Analyse des transitions:');
const transitionMatches = schemaContent.match(/transitions:\s*{[^}]*}/g) || [];
const ruleMatches = schemaContent.match(/rules:\s*\[[^\]]*\]/g) || [];

console.log(`✅ ${transitionMatches.length} définitions de transitions trouvées`);
console.log(`✅ ${ruleMatches.length} définitions de règles trouvées`);

// Test 7: Validation de la couverture par industrie
console.log('\n📈 7. Analyse de la couverture par industrie:');

const expectedSections = ['Geographic', 'Operations', 'Vulnerabilities', 'Management'];
let allIndustriesComplete = true;

for (const [industry, config] of Object.entries(industries)) {
  const industrySteps = allIds.filter(id => id.startsWith(config.prefix));
  
  if (industrySteps.length >= 10) { // Au moins 10 étapes par industrie
    console.log(`✅ ${industry}: ${industrySteps.length} étapes (complet)`);
  } else {
    console.log(`⚠️  ${industry}: ${industrySteps.length} étapes (potentiellement incomplet)`);
    allIndustriesComplete = false;
  }
}

// Test 8: Vérification de la cohérence des IDs
console.log('\n🔍 8. Vérification de la cohérence des IDs:');

const duplicateIds = [];
const idCounts = {};
allIds.forEach(id => {
  idCounts[id] = (idCounts[id] || 0) + 1;
  if (idCounts[id] > 1 && !duplicateIds.includes(id)) {
    duplicateIds.push(id);
  }
});

if (duplicateIds.length === 0) {
  console.log('✅ Aucun ID dupliqué trouvé');
} else {
  console.log(`❌ IDs dupliqués trouvés: ${duplicateIds.join(', ')}`);
}

// Résumé final
console.log('\n📊 RÉSUMÉ FINAL:');
console.log('================');

console.log(`📈 Étapes de base: ${baseStepsOk}/${requiredSteps.length}`);
console.log(`🏭 Étapes par industrie: ${totalIndustrySteps}`);
console.log(`👤 Étapes de contact: ${contactStepsOk}/${contactSteps.length}`);
console.log(`🎉 Étape finale: ${hasThankYou ? '1' : '0'}/1`);
console.log(`📊 Total général: ${allIds.length} étapes`);

const completionScore = (
  (baseStepsOk / requiredSteps.length) * 20 +
  (contactStepsOk / contactSteps.length) * 20 +
  (hasThankYou ? 1 : 0) * 10 +
  (allIndustriesComplete ? 1 : 0) * 30 +
  (duplicateIds.length === 0 ? 1 : 0) * 20
);

console.log(`🎯 Score de complétude: ${Math.round(completionScore)}%`);

if (completionScore >= 90) {
  console.log('\n🎉 EXCELLENT: Le questionnaire est complet et fonctionnel!');
} else if (completionScore >= 70) {
  console.log('\n✅ BON: Le questionnaire est largement fonctionnel avec quelques améliorations possibles');
} else {
  console.log('\n⚠️  ATTENTION: Le questionnaire nécessite des améliorations importantes');
}

// Test bonus: Vérification spécifique des flux critiques
console.log('\n🚀 BONUS - Test des flux critiques:');

// Vérifier que chaque industrie a ses propres ZIP codes
for (const [industry, config] of Object.entries(industries)) {
  const hasZipcodes = allIds.some(id => id === `${config.prefix}zipcodes`);
  console.log(`${hasZipcodes ? '✅' : '❌'} ${industry} a sa propre étape ZIP codes`);
}

// Vérifier la présence d'étapes financières
const financialSteps = allIds.filter(id => id.includes('financial') || id.includes('loss') || id.includes('exposure') || id.includes('revenue'));
console.log(`✅ ${financialSteps.length} étapes liées aux aspects financiers`);

console.log('\n🏁 Test terminé!');
