import { NavigationItem, CompanyInfo } from '@/types';

// Company information
export const COMPANY_INFO: CompanyInfo = {
  name: 'Sentinel Shield',
  tagline: 'Weather risk assessment for Texas energy operations using historical data analysis and geographic factors.',
  description: 'Sentinel Shield provides weather risk assessments for Texas energy facilities including downstream and petrochemical operations. Our analysis combines NOAA historical data, FEMA flood mapping, and facility-specific factors to evaluate location-based weather exposure.',
  mission: 'To provide fact-based weather risk assessments that help Texas energy operations understand their exposure to extreme weather events.',
  vision: 'Supporting informed risk management decisions through comprehensive weather data analysis and historical pattern recognition.',
  values: [
    'Data Accuracy',
    'Source Transparency', 
    'Methodological Rigor',
    'Historical Analysis',
    'Geographic Specificity'
  ]
};

// Navigation items
export const MAIN_NAVIGATION: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Why We Do What We Do', href: '/why-we-do' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
];

export const FOOTER_NAVIGATION = {
  company: [
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'Why We Do What We Do', href: '/why-we-do' },
    { label: 'Contact', href: '/capture' },
  ],
  resources: [
    { label: 'Resources', href: '/resources' },
    { label: 'Blog', href: '/blog' },
    { label: 'Assessment Request', href: '/capture' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
  ],
};

// Site metadata
export const SITE_CONFIG = {
  name: 'Sentinel Shield',
  domain: 'climaterisknow.com',
  url: 'https://climaterisknow.com',
  description: COMPANY_INFO.tagline,
  keywords: [
    'weather risk assessment',
    'Texas energy facility analysis',
    'historical weather data',
    'NOAA weather patterns',
    'facility weather exposure',
    'energy sector risk analysis',
    'downstream operations risk',
    'petrochemical weather risk',
    'hurricane impact assessment',
    'flood zone analysis'
  ],
  author: 'Sentinel Shield',
  language: 'en-US',
  locale: 'en_US',
};

// Contact information
export const CONTACT_INFO = {
  email: 'contact@climaterisknow.com',
  company: {
    name: 'BP Les Cannisses KFT',
    ceo: 'BAPTISTE PIOCELLE',
    vatNumber: 'HU32359815',
    registrationNumber: 'Cg.01- 09-420052',
    adossames: '32359815142'
  },
  address: {
    street: 'Rózsa utca 38/A',
    city: 'Budapest',
    zip: '1077',
    country: 'Hungary'
  },
  social: {
    facebook: 'https://facebook.com/sentinelshield',
  }
};

// CTA (Call to Action) buttons
export const CTA_BUTTONS = {
  primary: {
    text: 'Request Assessment',
    href: '/capture',
  },
  secondary: {
    text: 'Learn More',
    href: '/who-we-are',
  },
  resources: {
    text: 'View Resources',
    href: '/resources',
  },
  blog: {
    text: 'Read Articles',
    href: '/blog',
  }
};

// Tally form configuration (for the capture page)
export const TALLY_FORM_CONFIG = {
  formId: 'your-tally-form-id', // Replace with actual Tally form ID
  embedUrl: 'https://tally.so/embed/your-form-id', // Replace with actual URL
};

// Weather risk categories for Texas businesses
export const WEATHER_RISK_CATEGORIES = [
  {
    type: 'hurricane',
    name: 'Hurricane Impact Analysis',
    description: 'Comprehensive storm surge, wind, and flooding assessment for coastal and inland operations',
    icon: 'hurricane-icon',
  },
  {
    type: 'flood',
    name: 'Flood Risk Assessment', 
    description: 'Precise inundation mapping and financial exposure calculation for facility operations',
    icon: 'flood-icon',
  },
  {
    type: 'freeze',
    name: 'Freeze Event Forecasting',
    description: 'Temperature threshold monitoring and equipment protection intelligence across Texas',
    icon: 'freeze-icon',
  },
  {
    type: 'heatwave',
    name: 'Extreme Heat Monitoring',
    description: 'Equipment stress and worker safety alerts for Texas summer operations',
    icon: 'heat-icon',
  },
  {
    type: 'tornado',
    name: 'Severe Weather Tracking',
    description: 'Real-time tornado and hail threat assessment for critical infrastructure',
    icon: 'tornado-icon',
  },
];

// Assessment capabilities for energy sector
export const ASSESSMENT_CAPABILITIES = [
  {
    title: 'Historical Data Analysis',
    description: 'Analyze 25+ years of NOAA weather records to identify location-specific patterns and frequency',
    icon: 'analytics-icon',
  },
  {
    title: 'Geographic Risk Mapping',
    description: 'Combine FEMA flood zones, elevation data, and coastal proximity for location assessment',
    icon: 'map-icon',
  },
  {
    title: 'Facility-Specific Evaluation',
    description: 'Consider operational type, infrastructure, and business factors for energy operations',
    icon: 'facility-icon',
  },
  {
    title: 'Source Documentation',
    description: 'Provide references to all data sources and methodology for internal risk processes',
    icon: 'documentation-icon',
  },
  {
    title: 'Historical Impact Correlation',
    description: 'Reference past weather events like Harvey (2017) and Winter Storm Uri (2021) impacts',
    icon: 'correlation-icon',
  },
  {
    title: 'Multi-Factor Assessment',
    description: 'Synthesize weather patterns, geographic factors, and operational considerations',
    icon: 'assessment-icon',
  },
];

// Data source statistics for weather risk assessment
export const DATA_SOURCES = [
  {
    value: '40+',
    label: 'Years of NOAA Historical Data',
    description: 'Weather patterns and extreme event records for Texas analysis',
  },
  {
    value: '5K+',
    label: 'Hurricane Track Records',
    description: 'National Hurricane Center historical storm paths and intensity data',
  },
  {
    value: '100%',
    label: 'FEMA Flood Zone Coverage',
    description: 'Complete flood risk mapping for all Texas counties and regions',
  },
  {
    value: 'EIA',
    label: 'Energy Infrastructure Database',
    description: 'Official facility classifications and operational information',
  },
];

// Texas regional weather risk patterns
export const TEXAS_RISK_REGIONS = [
  {
    region: 'Gulf Coast Region',
    description: 'Energy corridor with concentrated downstream operations. Primary exposure to hurricane storm surge and coastal flooding.',
    primaryRisk: 'Hurricane Storm Surge',
    secondaryRisk: 'Coastal Flooding',
    industries: 'Energy & Petrochemical'
  },
  {
    region: 'North Texas Region', 
    description: 'Manufacturing and logistics hub with tornado alley exposure. Severe thunderstorms and hail damage risks.',
    primaryRisk: 'Severe Storms & Tornadoes',
    secondaryRisk: 'Hail Damage',
    industries: 'Manufacturing & Logistics'
  },
  {
    region: 'Central Texas Region',
    description: 'Technology and agriculture center with flash flood exposure. Rapid-onset flooding and drought cycles.',
    primaryRisk: 'Flash Flooding',
    secondaryRisk: 'Extreme Heat',
    industries: 'Agriculture & Technology'
  },
]; 