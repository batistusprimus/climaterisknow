#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Charger le schéma du questionnaire
const schemaPath = path.join(__dirname, 'src/lib/questionnaire/complete-schema.ts');
const schemaContent = fs.readFileSync(schemaPath, 'utf8');

// Extraire les steps du schéma (méthode simplifiée)
const stepsMatch = schemaContent.match(/steps:\s*\[([\s\S]*?)\],\s*rules:/);
if (!stepsMatch) {
  console.error('❌ Impossible de parser le schéma');
  process.exit(1);
}

// Parser basique des steps
function parseSteps(content) {
  const steps = [];
  const stepRegex = /{\s*id:\s*['"`]([^'"`]+)['"`][^}]*?kind:\s*['"`]([^'"`]+)['"`][^}]*?(?:options:\s*\[([\s\S]*?)\])?([\s\S]*?)(?={\s*id:|$)/g;
  
  let match;
  while ((match = stepRegex.exec(content)) !== null) {
    const [, id, kind, optionsStr] = match;
    const step = { id, kind, options: [] };
    
    if (optionsStr) {
      const optionRegex = /{\s*id:\s*['"`]([^'"`]+)['"`]/g;
      let optionMatch;
      while ((optionMatch = optionRegex.exec(optionsStr)) !== null) {
        step.options.push({ id: optionMatch[1] });
      }
    }
    
    steps.push(step);
  }
  
  return steps;
}

const steps = parseSteps(stepsMatch[1]);

console.log('🧪 Test du questionnaire Sentinel Shield');
console.log('=====================================\n');

// Test 1: Vérification des steps de base
console.log('📋 1. Vérification des étapes de base:');
const requiredSteps = [
  'company_name',
  'company_revenue', 
  'primary_industry'
];

let missingSteps = [];
for (const stepId of requiredSteps) {
  const step = steps.find(s => s.id === stepId);
  if (step) {
    console.log(`✅ ${stepId} - ${step.kind}`);
  } else {
    console.log(`❌ ${stepId} - MANQUANT`);
    missingSteps.push(stepId);
  }
}

// Test 2: Vérification des embranchements par industrie
console.log('\n🏭 2. Vérification des embranchements par industrie:');

const industries = {
  'energy': {
    prefix: 'en_',
    expectedSteps: [
      'en_zipcodes', 'en_asset_concentration', 'en_infrastructure_type',
      'en_capacity', 'en_grid_dependencies', 'en_temperature_sensitivity',
      'en_historical_impact', 'en_peak_vulnerability', 'en_supply_chain',
      'en_weather_monitoring', 'en_backup_systems', 'en_financial_protection',
      'en_annual_exposure'
    ]
  },
  'petrochem': {
    prefix: 'pc_',
    expectedSteps: [
      'pc_zipcodes', 'pc_coastal_proximity', 'pc_capacity', 'pc_process_types',
      'pc_storage_capacity', 'pc_safety_tier', 'pc_temperature_thresholds',
      'pc_water_vulnerabilities', 'pc_wind_limits', 'pc_turnaround_planning',
      'pc_emergency_power', 'pc_financial_approach', 'pc_loss_expectation'
    ]
  },
  'logistics': {
    prefix: 'lg_',
    expectedSteps: [
      'lg_zipcodes', 'lg_coverage', 'lg_fleet_composition', 'lg_route_dependencies',
      'lg_time_sensitive', 'lg_penalty_exposure', 'lg_disruptive_weather',
      'lg_annual_delays', 'lg_route_flexibility', 'lg_weather_intelligence',
      'lg_safety_protocols', 'lg_financial_protection', 'lg_revenue_impact'
    ]
  },
  'manufacturing': {
    prefix: 'mf_',
    expectedSteps: [
      'mf_zipcodes', 'mf_criticality', 'mf_production_type', 'mf_input_dependencies',
      'mf_product_storage', 'mf_temperature_requirements', 'mf_historical_disruptions',
      'mf_power_reliability', 'mf_supply_vulnerability', 'mf_production_flexibility',
      'mf_inventory_management', 'mf_financial_strategy', 'mf_loss_exposure'
    ]
  },
  'construction': {
    prefix: 'cs_',
    expectedSteps: [
      'cs_zipcodes', 'cs_geographic_concentration', 'cs_project_specialization',
      'cs_project_duration', 'cs_weather_sensitive_work', 'cs_critical_weather_windows',
      'cs_annual_delays', 'cs_cost_overruns', 'cs_liquidated_damages',
      'cs_weather_planning', 'cs_schedule_float', 'cs_financial_protection',
      'cs_financial_impact'
    ]
  }
};

let totalMissingByIndustry = 0;
for (const [industry, config] of Object.entries(industries)) {
  console.log(`\n  ${industry.toUpperCase()}:`);
  let missingInBranch = 0;
  
  for (const expectedStep of config.expectedSteps) {
    const step = steps.find(s => s.id === expectedStep);
    if (step) {
      console.log(`  ✅ ${expectedStep} - ${step.kind}`);
    } else {
      console.log(`  ❌ ${expectedStep} - MANQUANT`);
      missingInBranch++;
      totalMissingByIndustry++;
    }
  }
  
  console.log(`  📊 ${industry}: ${config.expectedSteps.length - missingInBranch}/${config.expectedSteps.length} présentes`);
}

// Test 3: Vérification des étapes de contact
console.log('\n👤 3. Vérification des étapes de contact:');
const contactSteps = [
  'contact_name',
  'contact_role', 
  'contact_email',
  'contact_phone',
  'contact_consent'
];

let missingContact = 0;
for (const stepId of contactSteps) {
  const step = steps.find(s => s.id === stepId);
  if (step) {
    console.log(`✅ ${stepId} - ${step.kind}`);
  } else {
    console.log(`❌ ${stepId} - MANQUANT`);
    missingContact++;
  }
}

// Test 4: Vérification de l'étape finale
console.log('\n🎉 4. Vérification de l\'étape finale:');
const thankYouStep = steps.find(s => s.id === 'thank_you');
if (thankYouStep) {
  console.log(`✅ thank_you - ${thankYouStep.kind}`);
} else {
  console.log(`❌ thank_you - MANQUANT`);
}

// Test 5: Vérification des options pour les étapes critiques
console.log('\n🎯 5. Vérification des options critiques:');

// Test industry options
const industryStep = steps.find(s => s.id === 'primary_industry');
if (industryStep) {
  const expectedIndustries = ['energy_utilities', 'petrochemical_refining', 'logistics_transportation', 'manufacturing', 'construction_infrastructure', 'other'];
  console.log(`  Industries (${industryStep.options.length} options):`);
  for (const expected of expectedIndustries) {
    const hasOption = industryStep.options.some(opt => opt.id.includes(expected.split('_')[0]));
    console.log(`  ${hasOption ? '✅' : '❌'} ${expected}`);
  }
}

// Test consent options
const consentStep = steps.find(s => s.id === 'contact_consent');
if (consentStep) {
  const expectedConsent = ['consent_educational', 'consent_email', 'consent_agg'];
  console.log(`  Consent (${consentStep.options.length} options):`);
  for (const expected of expectedConsent) {
    const hasOption = consentStep.options.some(opt => opt.id === expected);
    console.log(`  ${hasOption ? '✅' : '❌'} ${expected}`);
  }
}

// Résumé final
console.log('\n📊 RÉSUMÉ DU TEST:');
console.log('=================');

const totalExpected = requiredSteps.length + 
                     Object.values(industries).reduce((acc, ind) => acc + ind.expectedSteps.length, 0) +
                     contactSteps.length + 1; // +1 pour thank_you

const totalMissing = missingSteps.length + totalMissingByIndustry + missingContact + (thankYouStep ? 0 : 1);
const totalFound = totalExpected - totalMissing;

console.log(`📈 Steps trouvées: ${totalFound}/${totalExpected}`);
console.log(`📉 Steps manquantes: ${totalMissing}`);
console.log(`🎯 Taux de complétude: ${Math.round((totalFound/totalExpected) * 100)}%`);

if (totalMissing === 0) {
  console.log('\n🎉 SUCCÈS: Tous les embranchements sont complets!');
} else {
  console.log('\n⚠️  ATTENTION: Des étapes manquent dans le questionnaire');
}

// Test bonus: Vérification des transitions
console.log('\n🔗 6. Test des transitions (optionnel):');
console.log('Vérification que chaque step a une transition définie...');

let stepsWithoutTransition = [];
for (const step of steps) {
  if (step.id !== 'thank_you') { // thank_you est la fin
    const hasTransition = schemaContent.includes(`"${step.id}"`) && 
                         schemaContent.includes('transitions') &&
                         schemaContent.includes('fallbackNextStepId');
    if (!hasTransition) {
      stepsWithoutTransition.push(step.id);
    }
  }
}

if (stepsWithoutTransition.length === 0) {
  console.log('✅ Toutes les étapes ont des transitions définies');
} else {
  console.log(`❌ ${stepsWithoutTransition.length} étapes sans transitions:`, stepsWithoutTransition);
}

console.log('\n🏁 Test terminé!');
