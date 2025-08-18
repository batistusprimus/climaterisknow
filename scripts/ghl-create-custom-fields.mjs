// Node 18+ (fetch natif). Crée les Custom Fields GHL + options pour toutes les questions.
// Variables d'env requises: GHL_API_KEY, GHL_LOCATION_ID
// Exécution:
//   export GHL_API_KEY='...' && export GHL_LOCATION_ID='...' && node scripts/ghl-create-custom-fields.mjs

const API_BASE = 'https://services.leadconnectorhq.com';
const API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = process.env.GHL_LOCATION_ID;

if (!API_KEY || !LOCATION_ID) {
  console.error('Manque GHL_API_KEY ou GHL_LOCATION_ID dans les variables d\'environnement.');
  process.exit(1);
}

function headers() {
  // Authorization obligatoire. Certains tenants exigent aussi Version/LocationId.
  const h = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };
  // Fallback: ajoute les headers Next/LeadConnector si nécessaires
  h['Version'] = '2021-07-28';
  h['LocationId'] = LOCATION_ID;
  return h;
}

async function pickCustomFieldsEndpoint(method = 'GET') {
  const endpoints = [
    // v2 PI style
    `https://public-api.gohighlevel.com/v2/locations/${LOCATION_ID}/custom-fields`,
    `${API_BASE}/v2/locations/${LOCATION_ID}/custom-fields`,
    // v1 style
    `https://public-api.gohighlevel.com/v1/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/v1/locations/${LOCATION_ID}/customFields`,
    // Legacy/alt
    `${API_BASE}/contacts/customFields`,
    `${API_BASE}/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/customFields`,
    `https://rest.gohighlevel.com/v1/locations/${LOCATION_ID}/customFields`,
  ];
  for (const url of endpoints) {
    try {
      const res = await fetch(url, { method: 'GET', headers: headers() });
      const ct = res.headers.get('content-type') || '';
      if (!res.ok || !ct.includes('application/json')) continue;
      const json = await res.json().catch(() => undefined);
      if (!json) continue;
      const list = json?.customFields || json?.data || (Array.isArray(json) ? json : []);
      if (Array.isArray(list)) return url.replace(/\/custom-fields?$/, '/custom-fields').replace(/\/customFields$/, '/customFields');
    } catch {}
  }
  throw new Error('Impossible de détecter un endpoint custom fields en LIST. Vérifier scopes/token.');
}

async function getExistingFields() {
  const urls = [
    `https://public-api.gohighlevel.com/v2/locations/${LOCATION_ID}/custom-fields`,
    `${API_BASE}/v2/locations/${LOCATION_ID}/custom-fields`,
    `https://public-api.gohighlevel.com/v1/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/v1/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/contacts/customFields`,
    `${API_BASE}/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/customFields`,
    `https://rest.gohighlevel.com/v1/locations/${LOCATION_ID}/customFields`,
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: headers() });
      if (!res.ok) continue;
      const json = await res.json().catch(() => ({}));
      const list = json?.customFields || json?.data || (Array.isArray(json) ? json : []);
      if (Array.isArray(list)) return list;
    } catch {}
  }
  return [];
}

async function createCustomField(fieldDef, endpoint) {
  const body = {
    name: fieldDef.name,
    type: fieldDef.type,
    object: 'contact',
    ...(fieldDef.options ? { options: fieldDef.options } : {}),
    ...(fieldDef.placeholder ? { placeholder: fieldDef.placeholder } : {}),
    ...(fieldDef.description ? { description: fieldDef.description } : {}),
  };

  const urls = endpoint ? [endpoint] : [
    `https://public-api.gohighlevel.com/v2/locations/${LOCATION_ID}/custom-fields`,
    `${API_BASE}/v2/locations/${LOCATION_ID}/custom-fields`,
    `https://public-api.gohighlevel.com/v1/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/v1/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/contacts/customFields`,
    `${API_BASE}/locations/${LOCATION_ID}/customFields`,
    `${API_BASE}/customFields`,
    `https://rest.gohighlevel.com/v1/locations/${LOCATION_ID}/customFields`,
  ];

  for (const url of urls) {
    const res = await fetch(url, { method: 'POST', headers: headers(), body: JSON.stringify(body) });
    const ct = res.headers.get('content-type') || '';
    if (res.ok && ct.includes('application/json')) {
      const json = await res.json().catch(() => undefined);
      if (json && (json.id || json.name || json.key || json.customField || json.data)) {
        return { ok: true, endpoint: url, json };
      }
    }
    if (res.status === 409) {
      return { ok: true, endpoint: url, message: 'Already exists (409)' };
    }
    if (res.status >= 500) {
      const txt = await res.text().catch(() => '');
      throw new Error(`API ${res.status} ${url}: ${txt}`);
    }
  }

  throw new Error('Aucun endpoint customFields accepté par votre compte. Vérifiez permissions/API.');
}

function s(name, options) {
  return { name, type: 'select', options };
}
function m(name, options) {
  return { name, type: 'multiSelect', options };
}
function t(name, placeholder, description) {
  return { name, type: 'text', placeholder, ...(description ? { description } : {}) };
}

// ===== Définition complète des champs =====
const FIELDS = [
  // Techniques / tracking
  t('Session ID', 'session-uuid'),
  t('Tunnel ID', 'capture-landing'),
  t('Completed At (ISO8601)', '2025-01-01T12:34:56.000Z'),
  t('ZIP Codes (CSV)', '77002, 77003, 77004'),
  t('Answers JSON', '{"stepId":"value"}', 'Dump brut des réponses'),
  t('UTM Source', 'google'),
  t('UTM Medium', 'cpc'),
  t('UTM Campaign', 'spring_campaign'),
  t('UTM Term', 'climate+risk'),
  t('UTM Content', 'ad_variant_b'),

  // Pré-qualif
  s('Industry', [
    { name: 'Energy & Utilities', value: 'ind_energy' },
    { name: 'Petrochemical & Refining', value: 'ind_petrochem' },
    { name: 'Logistics & Transportation', value: 'ind_logistics' },
    { name: 'Manufacturing', value: 'ind_manufacturing' },
    { name: 'Construction & Infrastructure', value: 'ind_construction' },
    { name: 'Other', value: 'ind_other' },
  ]),
  s('Company Revenue', [
    { name: 'Under $10M', value: 'rev_u10' },
    { name: '$10M - $50M', value: 'rev_10_50' },
    { name: '$50M - $100M', value: 'rev_50_100' },
    { name: '$100M - $500M', value: 'rev_100_500' },
    { name: '$500M - $1B', value: 'rev_500_1b' },
    { name: 'Over $1B', value: 'rev_o1b' },
  ]),

  // Contact
  s('Your Role', [
    { name: 'C-Suite Executive', value: 'role_csuite' },
    { name: 'VP/Director of Operations', value: 'role_vp_ops' },
    { name: 'Risk Management', value: 'role_risk' },
    { name: 'Finance/Treasury', value: 'role_finance' },
    { name: 'Facilities Management', value: 'role_facilities' },
    { name: 'Other', value: 'role_other' },
  ]),
  m('Consent & Disclaimer', [
    { name: 'Educational only', value: 'consent_educational' },
    { name: 'Consent email delivery', value: 'consent_email' },
    { name: 'Aggregated/anonymized research', value: 'consent_agg' },
  ]),

  // BRANCH A: ENERGY & UTILITIES
  s('EN - Asset Concentration', [
    { name: 'Highly concentrated (>75% in one location)', value: 'en_conc_high75' },
    { name: 'Concentrated (50-75% in one location)', value: 'en_conc_50_75' },
    { name: 'Moderately distributed (25-50% across 2-3 locations)', value: 'en_conc_25_50' },
    { name: 'Well distributed (<25% in any single location, 4-5 locations)', value: 'en_conc_well' },
    { name: 'Highly distributed (<15% in any location, >5 locations)', value: 'en_conc_high_dist' },
  ]),
  s('EN - Infrastructure Type', [
    { name: 'Power Generation Plants', value: 'en_gen_plants' },
    { name: 'Transmission & Distribution Networks', value: 'en_tnd_networks' },
    { name: 'Oil & Gas Production Facilities', value: 'en_oil_gas_prod' },
    { name: 'Pipeline Systems', value: 'en_pipelines' },
    { name: 'Renewable Energy Farms (Solar/Wind)', value: 'en_renewables' },
    { name: 'Energy Storage Facilities', value: 'en_storage' },
    { name: 'Mixed Portfolio', value: 'en_mixed' },
  ]),
  s('EN - Capacity', [
    { name: 'Under 100 MW / 10,000 BBL/day', value: 'en_cap_u100' },
    { name: '100-500 MW / 10,000-50,000 BBL/day', value: 'en_cap_100_500' },
    { name: '500-1,000 MW / 50,000-100,000 BBL/day', value: 'en_cap_500_1000' },
    { name: '1,000-5,000 MW / 100,000-500,000 BBL/day', value: 'en_cap_1000_5000' },
    { name: 'Over 5,000 MW / 500,000 BBL/day', value: 'en_cap_o5000' },
  ]),
  s('EN - Grid Dependencies', [
    { name: 'Standalone operations', value: 'en_dep_standalone' },
    { name: 'Regional grid critical node', value: 'en_dep_regional' },
    { name: 'Interstate/International connector', value: 'en_dep_interstate' },
    { name: 'Multiple grid interconnections', value: 'en_dep_multi' },
    { name: 'Critical infrastructure provider', value: 'en_dep_critical' },
  ]),
  m('EN - Temperature Sensitivity', [
    { name: 'Below 20°F impact', value: 'en_temp_low20' },
    { name: 'Above 95°F impact', value: 'en_temp_high95' },
    { name: 'Both extremes affect operations', value: 'en_temp_both' },
    { name: 'Minimal impact', value: 'en_temp_minimal' },
  ]),
  s('EN - Historical Weather Impact', [
    { name: 'Complete shutdown >7 days', value: 'en_hist_shutdown_7d' },
    { name: 'Partial shutdown >7 days', value: 'en_hist_partial_7d' },
    { name: 'Multiple brief outages (3-5/yr)', value: 'en_hist_multiple_brief' },
    { name: 'Minor disruptions only (1-2 days/yr)', value: 'en_hist_minor' },
    { name: 'No significant impacts', value: 'en_hist_none' },
  ]),
  s('EN - Peak Season Vulnerability', [
    { name: 'Summer peak', value: 'en_peak_summer' },
    { name: 'Winter peak', value: 'en_peak_winter' },
    { name: 'Hurricane season (Aug-Nov)', value: 'en_peak_hurricane' },
    { name: 'Year-round equal', value: 'en_peak_year_round' },
    { name: 'Minimal variation', value: 'en_peak_minimal' },
  ]),
  m('EN - Supply Chain Exposure', [
    { name: 'Fuel delivery disruption', value: 'en_sc_fuel' },
    { name: 'Transmission line vulnerability', value: 'en_sc_transmission' },
    { name: 'Water availability for cooling', value: 'en_sc_water' },
    { name: 'Renewable resource variability', value: 'en_sc_renewable_var' },
    { name: 'Multiple supply chain risks', value: 'en_sc_multiple' },
  ]),
  s('EN - Weather Monitoring', [
    { name: 'No dedicated monitoring', value: 'en_mon_none' },
    { name: 'Basic public services', value: 'en_mon_basic' },
    { name: 'Professional subscription', value: 'en_mon_prof' },
    { name: 'IOC with weather desk', value: 'en_mon_ioc' },
    { name: 'Advanced AI/ML systems', value: 'en_mon_ai' },
  ]),
  s('EN - Backup & Redundancy', [
    { name: 'No backup (0%)', value: 'en_bu_none' },
    { name: 'Minimal (<25%)', value: 'en_bu_min' },
    { name: 'Moderate (25-50%)', value: 'en_bu_mod' },
    { name: 'Substantial (50-75%)', value: 'en_bu_sub' },
    { name: 'Near-complete (>75%)', value: 'en_bu_near' },
  ]),
  s('EN - Financial Strategy', [
    { name: 'Traditional only', value: 'en_fin_trad' },
    { name: 'Exploring alternatives', value: 'en_fin_explore' },
    { name: 'Hybrid approach', value: 'en_fin_hybrid' },
    { name: 'Fully optimized', value: 'en_fin_optimized' },
    { name: 'Self-managed retention', value: 'en_fin_self' },
  ]),
  s('EN - Annual Financial Exposure', [
    { name: 'Under $1M', value: 'en_expo_u1' },
    { name: '$1M - $10M', value: 'en_expo_1_10' },
    { name: '$10M - $50M', value: 'en_expo_10_50' },
    { name: '$50M - $200M', value: 'en_expo_50_200' },
    { name: 'Over $200M', value: 'en_expo_o200' },
  ]),

  // BRANCH B: PETROCHEMICAL & REFINING
  s('PE - Coastal Proximity', [
    { name: 'Direct waterfront (<0.5 miles)', value: 'pe_coast_direct' },
    { name: 'Near coast (0.5-5 miles)', value: 'pe_coast_near' },
    { name: 'Coastal region (5-25 miles)', value: 'pe_coast_region' },
    { name: 'Inland (>25 miles)', value: 'pe_coast_inland' },
  ]),
  s('PE - Processing Capacity', [
    { name: 'Under 50,000 BBL/day', value: 'pe_cap_u50k' },
    { name: '50,000 - 150,000 BBL/day', value: 'pe_cap_50_150k' },
    { name: '150,000 - 300,000 BBL/day', value: 'pe_cap_150_300k' },
    { name: '300,000 - 500,000 BBL/day', value: 'pe_cap_300_500k' },
    { name: 'Over 500,000 BBL/day', value: 'pe_cap_o500k' },
  ]),
  m('PE - Critical Process Types', [
    { name: 'Atmospheric/Vacuum Distillation', value: 'pe_proc_distillation' },
    { name: 'Catalytic Cracking/Reforming', value: 'pe_proc_cracking' },
    { name: 'Hydrotreating/Hydrocracking', value: 'pe_proc_hydro' },
    { name: 'Alkylation/Isomerization', value: 'pe_proc_alkyl' },
    { name: 'Petrochemical Integration', value: 'pe_proc_petrochem' },
    { name: 'Specialty Chemicals', value: 'pe_proc_specialty' },
  ]),
  s('PE - Storage Capacity', [
    { name: 'Under 1M BBL', value: 'pe_stor_u1m' },
    { name: '1M - 5M BBL', value: 'pe_stor_1_5m' },
    { name: '5M - 15M BBL', value: 'pe_stor_5_15m' },
    { name: '15M - 30M BBL', value: 'pe_stor_15_30m' },
    { name: 'Over 30M BBL', value: 'pe_stor_o30m' },
  ]),
  s('PE - PSM Tier', [
    { name: 'EPA RMP Program 3', value: 'pe_psm_rmp3' },
    { name: 'EPA RMP Program 2', value: 'pe_psm_rmp2' },
    { name: 'EPA RMP Program 1', value: 'pe_psm_rmp1' },
    { name: 'OSHA PSM only', value: 'pe_psm_osha' },
    { name: 'Multiple tiers', value: 'pe_psm_multi' },
  ]),
  m('PE - Temperature Thresholds', [
    { name: 'Below 25°F', value: 'pe_temp_freeze25' },
    { name: 'Below 0°F', value: 'pe_temp_extreme0' },
    { name: 'Above 95°F', value: 'pe_temp_cooling95' },
    { name: 'Above 105°F', value: 'pe_temp_heat105' },
    { name: 'Multiple thresholds', value: 'pe_temp_multiple' },
  ]),
  m('PE - Water-Related Risks', [
    { name: 'Storm surge (coastal)', value: 'pe_water_surge' },
    { name: 'River/inland flooding', value: 'pe_water_inland' },
    { name: 'Drought/water scarcity', value: 'pe_water_drought' },
    { name: 'Wastewater discharge', value: 'pe_water_discharge' },
    { name: 'Multiple water risks', value: 'pe_water_multiple' },
  ]),
  s('PE - Wind Speed Limits', [
    { name: 'Shutdown >40 mph', value: 'pe_wind_40' },
    { name: 'Shutdown >60 mph', value: 'pe_wind_60' },
    { name: 'Shutdown >75 mph', value: 'pe_wind_75' },
    { name: 'Shutdown >100 mph', value: 'pe_wind_100' },
    { name: 'No wind-related shutdowns', value: 'pe_wind_none' },
  ]),
  s('PE - Turnaround Windows', [
    { name: 'Fixed schedule', value: 'pe_turn_fixed' },
    { name: 'Some consideration', value: 'pe_turn_some' },
    { name: 'Weather-optimized', value: 'pe_turn_optimized' },
    { name: 'Fully flexible', value: 'pe_turn_flexible' },
    { name: 'Continuous (no turnarounds)', value: 'pe_turn_continuous' },
  ]),
  s('PE - Emergency Power', [
    { name: 'No backup power', value: 'pe_power_none' },
    { name: 'Critical systems only (<24h)', value: 'pe_power_critical' },
    { name: 'Partial (24-72h)', value: 'pe_power_partial' },
    { name: 'Full operation (>72h)', value: 'pe_power_full' },
    { name: 'Redundant utility feeds', value: 'pe_power_redundant' },
  ]),
  s('PE - Financial Risk Approach', [
    { name: 'Standard only', value: 'pe_fin_standard' },
    { name: 'Enhanced weather-specific', value: 'pe_fin_enhanced' },
    { name: 'Internal retention', value: 'pe_fin_internal' },
    { name: 'Parametric solutions', value: 'pe_fin_parametric' },
    { name: 'Actively evaluating', value: 'pe_fin_evaluating' },
  ]),
  s('PE - Annual Loss Expectation', [
    { name: 'Under $5M', value: 'pe_loss_u5m' },
    { name: '$5M - $25M', value: 'pe_loss_5_25m' },
    { name: '$25M - $100M', value: 'pe_loss_25_100m' },
    { name: '$100M - $500M', value: 'pe_loss_100_500m' },
    { name: 'Over $500M', value: 'pe_loss_o500m' },
  ]),

  // BRANCH C: LOGISTICS & TRANSPORTATION
  s('LO - Network Coverage', [
    { name: 'Single region focus', value: 'lo_net_single' },
    { name: 'Multi-regional (2-3)', value: 'lo_net_multi' },
    { name: 'National coverage', value: 'lo_net_national' },
    { name: 'North American coverage', value: 'lo_net_na' },
    { name: 'Global operations', value: 'lo_net_global' },
  ]),
  m('LO - Fleet & Assets', [
    { name: 'Long-haul trucking (>500 miles)', value: 'lo_fleet_longhaul' },
    { name: 'Regional/local delivery (<500 miles)', value: 'lo_fleet_regional' },
    { name: 'Intermodal (rail/truck)', value: 'lo_fleet_intermodal' },
    { name: 'Ocean/port operations', value: 'lo_fleet_ocean' },
    { name: 'Air cargo operations', value: 'lo_fleet_air' },
    { name: 'Warehousing/distribution only', value: 'lo_fleet_warehouse' },
  ]),
  m('LO - Critical Routes', [
    { name: 'I-10 Corridor (Southern)', value: 'lo_route_i10' },
    { name: 'I-95 Corridor (Eastern)', value: 'lo_route_i95' },
    { name: 'I-5 Corridor (Western)', value: 'lo_route_i5' },
    { name: 'I-80/90 Corridor (Northern)', value: 'lo_route_i80_90' },
    { name: 'Multiple critical corridors', value: 'lo_route_multi' },
    { name: 'No specific corridor dependency', value: 'lo_route_none' },
  ]),
  s('LO - Time-Sensitive Deliveries', [
    { name: '<10% time-critical', value: 'lo_ts_lt10' },
    { name: '10-25% time-critical', value: 'lo_ts_10_25' },
    { name: '25-50% time-critical', value: 'lo_ts_25_50' },
    { name: '50-75% time-critical', value: 'lo_ts_50_75' },
    { name: '>75% time-critical', value: 'lo_ts_75' },
  ]),
  s('LO - Customer Penalties', [
    { name: 'No formal SLA penalties', value: 'lo_pen_none' },
    { name: 'Under $50K per incident', value: 'lo_pen_u50k' },
    { name: '$50K - $250K per incident', value: 'lo_pen_50_250' },
    { name: '$250K - $1M per incident', value: 'lo_pen_250_1m' },
    { name: 'Over $1M per incident', value: 'lo_pen_o1m' },
  ]),
  s('LO - Most Disruptive Weather', [
    { name: 'Winter storms (ice/snow)', value: 'lo_wp_winter' },
    { name: 'Hurricanes/tropical', value: 'lo_wp_hurricanes' },
    { name: 'Flooding/washouts', value: 'lo_wp_flood' },
    { name: 'Extreme heat (>100°F)', value: 'lo_wp_heat' },
    { name: 'Fog/visibility', value: 'lo_wp_fog' },
    { name: 'Tornado/severe t-storms', value: 'lo_wp_tornado' },
  ]),
  s('LO - Annual Weather Delays', [
    { name: 'Under 100 shipment-days', value: 'lo_delay_u100' },
    { name: '100-500 shipment-days', value: 'lo_delay_100_500' },
    { name: '500-2,000 shipment-days', value: 'lo_delay_500_2k' },
    { name: '2,000-10,000 shipment-days', value: 'lo_delay_2k_10k' },
    { name: 'Over 10,000 shipment-days', value: 'lo_delay_o10k' },
  ]),
  s('LO - Route Flexibility', [
    { name: 'No alternatives', value: 'lo_alt_none' },
    { name: 'Limited (+50%)', value: 'lo_alt_limited' },
    { name: 'Moderate (+25%)', value: 'lo_alt_moderate' },
    { name: 'Good (+10%)', value: 'lo_alt_good' },
    { name: 'Excellent redundancy', value: 'lo_alt_excellent' },
  ]),
  s('LO - Weather Intelligence', [
    { name: 'No tracking', value: 'lo_intel_none' },
    { name: 'Manual monitoring', value: 'lo_intel_manual' },
    { name: 'Basic GPS/weather', value: 'lo_intel_basic' },
    { name: 'Advanced optimization', value: 'lo_intel_advanced' },
    { name: 'AI-powered routing', value: 'lo_intel_ai' },
  ]),
  s('LO - Safety Protocols', [
    { name: 'Basic guidelines', value: 'lo_safety_basic' },
    { name: 'Formal shutdown thresholds', value: 'lo_safety_formal' },
    { name: 'Real-time decision support', value: 'lo_safety_realtime' },
    { name: 'Automated safety systems', value: 'lo_safety_automated' },
    { name: 'Industry-leading program', value: 'lo_safety_leading' },
  ]),
  s('LO - Financial Protection', [
    { name: 'None', value: 'lo_fin_none' },
    { name: 'Basic continuity funding', value: 'lo_fin_basic' },
    { name: 'Enhanced contingent', value: 'lo_fin_enhanced' },
    { name: 'Parametric triggers', value: 'lo_fin_parametric' },
    { name: 'Comprehensive approach', value: 'lo_fin_comprehensive' },
  ]),
  s('LO - Annual Revenue Impact', [
    { name: 'Under $500K', value: 'lo_rev_u500k' },
    { name: '$500K - $2M', value: 'lo_rev_500k_2m' },
    { name: '$2M - $10M', value: 'lo_rev_2_10m' },
    { name: '$10M - $50M', value: 'lo_rev_10_50m' },
    { name: 'Over $50M', value: 'lo_rev_o50m' },
  ]),

  // BRANCH D: MANUFACTURING
  s('MA - Facility Criticality', [
    { name: 'Single critical facility', value: 'ma_crit_single' },
    { name: 'One primary, multiple secondary', value: 'ma_crit_primary' },
    { name: 'Multiple equally critical', value: 'ma_crit_equal' },
    { name: 'Distributed with redundancy', value: 'ma_crit_redundant' },
    { name: 'Global network', value: 'ma_crit_global' },
  ]),
  s('MA - Production Type', [
    { name: 'Continuous (24/7)', value: 'ma_prod_continuous' },
    { name: 'Batch (flexible)', value: 'ma_prod_batch' },
    { name: 'Just-in-time', value: 'ma_prod_jit' },
    { name: 'Seasonal cycles', value: 'ma_prod_seasonal' },
    { name: 'Mixed types', value: 'ma_prod_mixed' },
  ]),
  m('MA - Critical Input Dependencies', [
    { name: 'Raw materials', value: 'ma_input_materials' },
    { name: 'Power (>10MW)', value: 'ma_input_power' },
    { name: 'Water (process/cooling)', value: 'ma_input_water' },
    { name: 'Natural gas (process heat)', value: 'ma_input_gas' },
    { name: 'Multiple inputs', value: 'ma_input_multiple' },
  ]),
  s('MA - Product Storage', [
    { name: 'Immediate shipment', value: 'ma_stor_immediate' },
    { name: '<7 days', value: 'ma_stor_7d' },
    { name: '7-30 days', value: 'ma_stor_30d' },
    { name: '30-90 days', value: 'ma_stor_90d' },
    { name: '>90 days / non-perishable', value: 'ma_stor_90plus' },
  ]),
  s('MA - Temperature Requirements', [
    { name: 'Strict (±5°F)', value: 'ma_temp_strict' },
    { name: 'Moderate (±15°F)', value: 'ma_temp_moderate' },
    { name: 'Broad (±30°F)', value: 'ma_temp_broad' },
    { name: 'Insensitive', value: 'ma_temp_insensitive' },
    { name: 'Varies by product line', value: 'ma_temp_varies' },
  ]),
  s('MA - Historical Disruptions (5y)', [
    { name: 'None', value: 'ma_hist_none' },
    { name: '1-3 partial shutdowns', value: 'ma_hist_1_3' },
    { name: '4-10 partial shutdowns', value: 'ma_hist_4_10' },
    { name: '>10 partial shutdowns', value: 'ma_hist_10plus' },
    { name: 'Major shutdown >1 week', value: 'ma_hist_major' },
  ]),
  s('MA - Power Grid Reliability', [
    { name: 'Never outages', value: 'ma_power_never' },
    { name: 'Rare (<2/yr)', value: 'ma_power_rare' },
    { name: 'Occasional (2-6/yr)', value: 'ma_power_occasional' },
    { name: 'Frequent (>6/yr)', value: 'ma_power_frequent' },
    { name: 'Critical ongoing issue', value: 'ma_power_critical' },
  ]),
  s('MA - Supply Chain Vulnerability', [
    { name: 'Single-source critical', value: 'ma_supply_single' },
    { name: 'Regional concentration', value: 'ma_supply_regional' },
    { name: 'National diversity', value: 'ma_supply_national' },
    { name: 'Global supply chain', value: 'ma_supply_global' },
    { name: 'Fully integrated/vertical', value: 'ma_supply_integrated' },
  ]),
  s('MA - Production Flexibility', [
    { name: 'No backup capability', value: 'ma_flex_none' },
    { name: 'Limited (<25%)', value: 'ma_flex_limited' },
    { name: 'Moderate (25-50%)', value: 'ma_flex_moderate' },
    { name: 'Substantial (50-75%)', value: 'ma_flex_substantial' },
    { name: 'Full redundancy', value: 'ma_flex_full' },
  ]),
  s('MA - Inventory Strategy', [
    { name: 'Pure JIT (no buffer)', value: 'ma_inv_jit' },
    { name: 'Minimal (1-3 days)', value: 'ma_inv_minimal' },
    { name: 'Standard (1-2 weeks)', value: 'ma_inv_standard' },
    { name: 'Conservative (2-4 weeks)', value: 'ma_inv_conservative' },
    { name: 'Strategic (>1 month)', value: 'ma_inv_strategic' },
  ]),
  s('MA - Financial Strategy', [
    { name: 'Traditional only', value: 'ma_fin_traditional' },
    { name: 'Enhanced weather-specific', value: 'ma_fin_enhanced' },
    { name: 'Supply chain included', value: 'ma_fin_supply_chain' },
    { name: 'Parametric employed', value: 'ma_fin_parametric' },
    { name: 'Comprehensive financing', value: 'ma_fin_comprehensive' },
  ]),
  s('MA - Annual Loss Exposure', [
    { name: 'Under $2M', value: 'ma_loss_u2m' },
    { name: '$2M - $10M', value: 'ma_loss_2_10m' },
    { name: '$10M - $50M', value: 'ma_loss_10_50m' },
    { name: '$50M - $200M', value: 'ma_loss_50_200m' },
    { name: 'Over $200M', value: 'ma_loss_o200m' },
  ]),

  // BRANCH E: CONSTRUCTION & INFRASTRUCTURE
  s('CO - Geographic Concentration', [
    { name: 'Single metro area', value: 'co_geo_metro' },
    { name: 'State-wide presence', value: 'co_geo_state' },
    { name: 'Multi-state regional', value: 'co_geo_regional' },
    { name: 'National footprint', value: 'co_geo_national' },
    { name: 'International projects', value: 'co_geo_international' },
  ]),
  m('CO - Project Specialization', [
    { name: 'Vertical construction', value: 'co_proj_vertical' },
    { name: 'Horizontal (infrastructure)', value: 'co_proj_horizontal' },
    { name: 'Marine/coastal', value: 'co_proj_marine' },
    { name: 'Industrial/energy', value: 'co_proj_industrial' },
    { name: 'Mixed/general contractor', value: 'co_proj_mixed' },
  ]),
  s('CO - Average Project Duration', [
    { name: 'Under 6 months', value: 'co_dur_u6' },
    { name: '6-12 months', value: 'co_dur_6_12' },
    { name: '12-24 months', value: 'co_dur_12_24' },
    { name: '24-48 months', value: 'co_dur_24_48' },
    { name: 'Over 48 months', value: 'co_dur_o48' },
  ]),
  s('CO - Weather-Sensitive Work %', [
    { name: '<25% weather-dependent', value: 'co_sens_lt25' },
    { name: '25-50% weather-dependent', value: 'co_sens_25_50' },
    { name: '50-75% weather-dependent', value: 'co_sens_50_75' },
    { name: '>75% weather-dependent', value: 'co_sens_75plus' },
    { name: 'Nearly all weather-exposed', value: 'co_sens_all' },
  ]),
  m('CO - Critical Weather Windows', [
    { name: 'Concrete pours/curing', value: 'co_win_concrete' },
    { name: 'Roofing/envelope', value: 'co_win_roofing' },
    { name: 'Crane operations', value: 'co_win_crane' },
    { name: 'Marine/water work', value: 'co_win_marine' },
    { name: 'Excavation/earthwork', value: 'co_win_excavation' },
    { name: 'Multiple critical phases', value: 'co_win_multiple' },
  ]),
  s('CO - Annual Weather Delay Days', [
    { name: '<10 days', value: 'co_delay_lt10' },
    { name: '10-25 days', value: 'co_delay_10_25' },
    { name: '25-50 days', value: 'co_delay_25_50' },
    { name: '50-100 days', value: 'co_delay_50_100' },
    { name: '>100 days', value: 'co_delay_100plus' },
  ]),
  s('CO - Weather-Related Cost Overruns', [
    { name: '<2% typical impact', value: 'co_cost_lt2' },
    { name: '2-5% typical impact', value: 'co_cost_2_5' },
    { name: '5-10% typical impact', value: 'co_cost_5_10' },
    { name: '10-20% typical impact', value: 'co_cost_10_20' },
    { name: '>20% typical impact', value: 'co_cost_20plus' },
  ]),
  s('CO - Liquidated Damages Exposure', [
    { name: 'No LD clauses', value: 'co_ld_none' },
    { name: '<$10K per day', value: 'co_ld_lt10k' },
    { name: '$10K-$50K per day', value: 'co_ld_10_50k' },
    { name: '$50K-$200K per day', value: 'co_ld_50_200k' },
    { name: '>$200K per day', value: 'co_ld_200k' },
  ]),
  s('CO - Weather Planning Sophistication', [
    { name: 'Basic apps only', value: 'co_plan_basic' },
    { name: 'Professional service', value: 'co_plan_prof' },
    { name: 'Project-specific forecasting', value: 'co_plan_project' },
    { name: 'Integrated scheduling', value: 'co_plan_integrated' },
    { name: 'Advanced predictive analytics', value: 'co_plan_advanced' },
  ]),
  s('CO - Schedule Float Management', [
    { name: 'No weather float', value: 'co_float_none' },
    { name: '5-10% float', value: 'co_float_5_10' },
    { name: '10-20% float', value: 'co_float_10_20' },
    { name: '20-30% float', value: 'co_float_20_30' },
    { name: '>30% float', value: 'co_float_30plus' },
  ]),
  s('CO - Financial Protection', [
    { name: 'Standard project only', value: 'co_fin_standard' },
    { name: 'Enhanced arrangements', value: 'co_fin_enhanced' },
    { name: 'Project-specific solutions', value: 'co_fin_project' },
    { name: 'Parametric products', value: 'co_fin_parametric' },
    { name: 'Portfolio-wide optimization', value: 'co_fin_portfolio' },
  ]),
  s('CO - Annual Financial Impact', [
    { name: 'Under $1M', value: 'co_impact_u1m' },
    { name: '$1M - $5M', value: 'co_impact_1_5m' },
    { name: '$5M - $25M', value: 'co_impact_5_25m' },
    { name: '$25M - $100M', value: 'co_impact_25_100m' },
    { name: 'Over $100M', value: 'co_impact_o100m' },
  ]),
];

(async () => {
  try {
    console.log('Découverte des endpoints et champs existants...');
    const endpoint = await pickCustomFieldsEndpoint('GET');
    const existing = await getExistingFields();

    const existsByName = new Map();
    if (Array.isArray(existing)) {
      for (const f of existing) {
        if (f?.name) existsByName.set(String(f.name).toLowerCase(), f);
      }
    }

    console.log(`Création de ${FIELDS.length} champs (idempotent par nom) ...`);
    for (const field of FIELDS) {
      const key = field.name.toLowerCase();
      if (existsByName.has(key)) {
        console.log(`✔ ${field.name} -> existe déjà`);
        continue;
      }
      try {
        const result = await createCustomField(field, endpoint);
        console.log(`✔ ${field.name} -> créé ${result?.message ? `(${result.message})` : ''}`);
      } catch (err) {
        console.error(`✖ ${field.name} -> ${err?.message || err}`);
      }
    }
    console.log('Terminé.');
  } catch (e) {
    console.error('Échec global:', e?.message || e);
    process.exit(1);
  }
})();


