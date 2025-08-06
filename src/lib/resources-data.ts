export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'guide' | 'checklist' | 'template' | 'whitepaper' | 'case-study' | 'data-sheet';
  downloadUrl?: string;
  lastUpdated: string;
  fileSize?: string;
  tags: string[];
  featured: boolean;
}

export const RESOURCES: ResourceItem[] = [
  {
    id: "hurricane-preparedness-checklist-2024",
    title: "2024 Hurricane Preparedness Checklist for Texas Energy Facilities",
    description: "Comprehensive 72-hour preparation protocol for Gulf Coast energy operations, including personnel safety measures, equipment securing procedures, and emergency response protocols based on lessons from Harvey and recent storms.",
    category: "Emergency Preparedness",
    type: "checklist",
    downloadUrl: "/resources/hurricane-preparedness-checklist-2024.pdf",
    lastUpdated: "2024-03-15",
    fileSize: "2.1 MB",
    tags: ["Hurricane Preparation", "Energy Facilities", "Emergency Planning", "Gulf Coast"],
    featured: true
  },
  {
    id: "noaa-data-analysis-guide",
    title: "NOAA Historical Weather Data Analysis Guide for Facility Risk Assessment",
    description: "Step-by-step methodology for analyzing 25+ years of NOAA weather records to determine facility-specific risk patterns. Includes data interpretation techniques, regional analysis frameworks, and practical application examples.",
    category: "Risk Assessment",
    type: "guide",
    downloadUrl: "/resources/noaa-data-analysis-guide.pdf",
    lastUpdated: "2024-02-28",
    fileSize: "4.3 MB",
    tags: ["NOAA Data", "Risk Assessment", "Weather Analysis", "Methodology"],
    featured: true
  },
  {
    id: "fema-flood-zone-mapping-reference",
    title: "FEMA Flood Zone Classifications for Texas Industrial Facilities",
    description: "Detailed reference guide covering all FEMA flood zone designations, construction requirements, insurance implications, and facility planning considerations specific to Texas geographic conditions.",
    category: "Flood Risk",
    type: "guide",
    downloadUrl: "/resources/fema-flood-zone-mapping-reference.pdf",
    lastUpdated: "2024-01-20",
    fileSize: "3.7 MB",
    tags: ["FEMA", "Flood Zones", "Industrial Planning", "Construction Requirements"],
    featured: true
  },
  {
    id: "winter-storm-preparation-template",
    title: "Winter Storm Preparation Template for Texas Operations",
    description: "Customizable preparation template based on Winter Storm Uri lessons learned. Includes equipment winterization checklists, cold weather operation procedures, and supply chain continuity planning frameworks.",
    category: "Extreme Weather",
    type: "template",
    downloadUrl: "/resources/winter-storm-preparation-template.docx",
    lastUpdated: "2024-01-10",
    fileSize: "890 KB",
    tags: ["Winter Storm", "Cold Weather", "Template", "Operations"],
    featured: false
  },
  {
    id: "heat-safety-protocols-manufacturing",
    title: "Extreme Heat Safety Protocols for Manufacturing Facilities",
    description: "OSHA-compliant heat illness prevention protocols based on 2023 Texas heat dome analysis. Includes heat index monitoring procedures, worker protection measures, and facility cooling strategies.",
    category: "Worker Safety",
    type: "guide",
    downloadUrl: "/resources/heat-safety-protocols-manufacturing.pdf",
    lastUpdated: "2023-12-15",
    fileSize: "1.8 MB",
    tags: ["Heat Safety", "OSHA Compliance", "Manufacturing", "Worker Protection"],
    featured: false
  },
  {
    id: "supply-chain-resilience-framework",
    title: "Supply Chain Resilience Framework for Weather Disruptions",
    description: "Strategic framework for building weather-resilient supply chains based on Texas extreme weather event analysis. Includes supplier diversification strategies, inventory optimization, and recovery planning templates.",
    category: "Supply Chain",
    type: "whitepaper",
    downloadUrl: "/resources/supply-chain-resilience-framework.pdf",
    lastUpdated: "2023-11-30",
    fileSize: "5.2 MB",
    tags: ["Supply Chain", "Resilience", "Risk Management", "Business Continuity"],
    featured: false
  },
  {
    id: "tornado-shelter-requirements-checklist",
    title: "Tornado Shelter Requirements Checklist for North Texas Facilities",
    description: "Engineering and safety requirements for tornado shelters in manufacturing and industrial facilities. Based on FEMA guidelines and North Texas tornado activity patterns with capacity planning worksheets.",
    category: "Severe Weather",
    type: "checklist",
    downloadUrl: "/resources/tornado-shelter-requirements-checklist.pdf",
    lastUpdated: "2023-10-25",
    fileSize: "1.4 MB",
    tags: ["Tornado Safety", "Shelter Design", "North Texas", "Manufacturing"],
    featured: false
  },
  {
    id: "weather-risk-assessment-template",
    title: "Facility Weather Risk Assessment Template",
    description: "Comprehensive risk assessment template incorporating NOAA data analysis, geographic factors, and facility-specific vulnerabilities. Includes scoring matrices and mitigation recommendation frameworks.",
    category: "Risk Assessment",
    type: "template",
    downloadUrl: "/resources/weather-risk-assessment-template.xlsx",
    lastUpdated: "2023-09-18",
    fileSize: "650 KB",
    tags: ["Risk Assessment", "Template", "Facility Planning", "Weather Analysis"],
    featured: true
  },
  {
    id: "hurricane-harvey-case-study",
    title: "Hurricane Harvey Impact Analysis: Lessons for Energy Infrastructure",
    description: "Detailed case study examining Hurricane Harvey's $125 billion impact on Texas energy operations, infrastructure vulnerabilities identified, and implemented improvements. Five-year retrospective analysis.",
    category: "Case Studies",
    type: "case-study",
    downloadUrl: "/resources/hurricane-harvey-case-study.pdf",
    lastUpdated: "2023-08-22",
    fileSize: "6.1 MB",
    tags: ["Hurricane Harvey", "Case Study", "Energy Infrastructure", "Lessons Learned"],
    featured: false
  },
  {
    id: "texas-climate-data-summary",
    title: "Texas Climate Data Summary: 25-Year Weather Pattern Analysis",
    description: "Comprehensive summary of Texas weather patterns from 1999-2024, including temperature extremes, precipitation records, severe weather frequency, and regional variation analysis based on NOAA data.",
    category: "Climate Data",
    type: "data-sheet",
    downloadUrl: "/resources/texas-climate-data-summary.pdf",
    lastUpdated: "2023-07-15",
    fileSize: "3.9 MB",
    tags: ["Climate Data", "Weather Patterns", "NOAA", "Historical Analysis"],
    featured: false
  },
  {
    id: "emergency-communication-protocols",
    title: "Emergency Communication Protocols for Weather Events",
    description: "Standardized communication templates and notification procedures for weather emergencies. Includes employee notification systems, media relations guidelines, and regulatory reporting requirements.",
    category: "Emergency Preparedness",
    type: "template",
    downloadUrl: "/resources/emergency-communication-protocols.docx",
    lastUpdated: "2023-06-30",
    fileSize: "780 KB",
    tags: ["Communication", "Emergency Protocols", "Templates", "Crisis Management"],
    featured: false
  },
  {
    id: "insurance-considerations-weather-risk",
    title: "Insurance Considerations for Weather Risk Management",
    description: "Guide to weather-related insurance coverage for Texas industrial facilities, including property insurance, business interruption, and specialized weather risk policies. Coverage gap analysis included.",
    category: "Risk Management",
    type: "guide",
    downloadUrl: "/resources/insurance-considerations-weather-risk.pdf",
    lastUpdated: "2023-05-20",
    fileSize: "2.7 MB",
    tags: ["Insurance", "Risk Management", "Coverage Analysis", "Financial Protection"],
    featured: false
  }
];

// Featured resources (subset of all resources marked as featured)
export const FEATURED_RESOURCES = RESOURCES.filter(resource => resource.featured);

// Resources by category
export const getResourcesByCategory = (category: string): ResourceItem[] => {
  return RESOURCES.filter(resource => resource.category === category);
};

// Resources by type
export const getResourcesByType = (type: string): ResourceItem[] => {
  return RESOURCES.filter(resource => resource.type === type);
};

// Resource categories
export const RESOURCE_CATEGORIES = [
  'Emergency Preparedness',
  'Risk Assessment',
  'Flood Risk',
  'Extreme Weather',
  'Worker Safety',
  'Supply Chain',
  'Severe Weather',
  'Case Studies',
  'Climate Data',
  'Risk Management'
];

// Resource types
export const RESOURCE_TYPES = [
  { id: 'guide', label: 'Guides', icon: '📖' },
  { id: 'checklist', label: 'Checklists', icon: '✅' },
  { id: 'template', label: 'Templates', icon: '📝' },
  { id: 'whitepaper', label: 'Whitepapers', icon: '📄' },
  { id: 'case-study', label: 'Case Studies', icon: '🔍' },
  { id: 'data-sheet', label: 'Data Sheets', icon: '📊' }
];

// Quick access resources for different industries
export const INDUSTRY_RESOURCES = {
  energy: RESOURCES.filter(r => 
    r.tags.some(tag => 
      ['Energy Facilities', 'Energy Infrastructure', 'Hurricane Harvey'].includes(tag)
    )
  ),
  manufacturing: RESOURCES.filter(r => 
    r.tags.some(tag => 
      ['Manufacturing', 'Worker Protection', 'Tornado Safety'].includes(tag)
    )
  ),
  logistics: RESOURCES.filter(r => 
    r.tags.some(tag => 
      ['Supply Chain', 'Business Continuity', 'Operations'].includes(tag)
    )
  )
};