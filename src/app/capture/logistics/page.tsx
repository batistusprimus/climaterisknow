import type { Metadata } from 'next';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import QuestionnaireBridge from '../QuestionnaireBridge';

export const metadata: Metadata = {
  title: 'Weather Risk Assessment for Logistics & Transportation Operations | Texas Climate Intelligence',
  description: 'Specialized weather risk assessment for Texas logistics and transportation operations. Protect supply chains, warehousing, and transportation networks with location-specific climate data.',
  keywords: ['Texas logistics weather risk', 'transportation climate assessment', 'supply chain weather protection', 'warehousing weather analysis', 'logistics weather vulnerability', 'transportation climate resilience'],
  openGraph: {
    title: 'Logistics & Transportation Weather Risk Assessment | Sentinel Shield',
    description: 'Protect your logistics operations with specialized weather risk analysis for Texas facilities.',
    url: `${SITE_CONFIG.url}/capture/logistics`,
  },
};

export default function LogisticsCapturePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Integrated Form */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Value Proposition */}
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-secondary/20 text-secondary-100 mb-4">
                    🚛 FREE Logistics Risk Analysis
                  </span>
                </div>
                <h1 className="text-display font-extrabold text-white mb-6 leading-tight">
                  Protect Your Supply Chain from $50M+ Weather Delays
                </h1>
                <p className="text-h3 text-primary-100 mb-6 font-light">
                  Get route-specific data that Texas logistics operators use to reduce weather-related delays by 40-60%
                </p>
                
                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-100 font-medium">Critical transportation corridor weather analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-100 font-medium">Warehouse and distribution center risk assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-100 font-medium">Delivered within 24-48 hours to your business email</span>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-primary-100 text-sm">
                    <strong>Trusted by Texas logistics leaders</strong> who maintained delivery schedules during Winter Storm Mara (2024) and avoided delays during Hurricane Beryl (2024).
                  </p>
                </div>
              </div>

              {/* Right Column - Prominent Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-white/20 overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-b border-neutral-200">
                    <h2 className="text-h2 font-bold text-neutral-800 mb-3 font-secondary">
                      Get Your FREE Logistics Risk Analysis
                    </h2>
                    <p className="text-body-regular text-neutral-600 mb-4">
                      Complete our 3-minute assessment to receive your personalized supply chain risk report.
                    </p>
                    <div className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-neutral-700">3-minute assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-neutral-700">FREE analysis</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Interactive Questionnaire */}
                  <div className="p-0">
                    <QuestionnaireBridge />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-h2 font-bold text-neutral-800 mb-6">
              Why Texas Logistics Operators Choose Our Weather Risk Intelligence
            </h2>
            <p className="text-body-large text-neutral-600 mb-12 max-w-3xl mx-auto">
              Don't let weather uncertainty disrupt your supply chains. Get the specific data you need to maintain delivery schedules and outperform competitors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Prevent Supply Chain Disruptions
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Historical data shows logistics operators with weather intelligence reduce weather-related delays by 40-60%. Maintain delivery schedules when competitors fail.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Route Optimization
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Protect critical transportation corridors with weather-specific route planning and alternative pathway identification.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Customer SLA Protection
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Avoid costly penalties and maintain customer relationships with advance weather planning and contingency protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency & Social Proof Section */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-alert/10 border border-alert/30 rounded-xl p-6 mb-8">
              <h2 className="text-h2 font-bold text-alert-800 mb-3">
                Don't Wait for the Next Transportation Crisis
              </h2>
              <p className="text-body-large text-neutral-700">
                Winter Storm Mara (2024) shut down I-35 and I-45 for days. 
                Logistics companies with weather intelligence maintained operations using alternative routes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                <div className="text-sm text-neutral-600">Winter Storm Mara logistics losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40-60%</div>
                <div className="text-sm text-neutral-600">Delay reduction with weather intelligence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24-48hrs</div>
                <div className="text-sm text-neutral-600">Report delivery time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">
              Ready to Protect Your Logistics Operations?
            </h2>
            <p className="text-body-large text-neutral-600 mb-8">
              Join the Texas logistics operators who use weather intelligence to maintain supply chain reliability and protect operations during extreme weather events.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <p className="text-body-regular text-neutral-700 mb-4">
                <strong>Educational Risk Analysis Only</strong> - We provide weather risk intelligence based on historical data. 
                We do not sell insurance, provide insurance advice, or connect you with insurance providers.
              </p>
              <div className="text-sm text-neutral-500">
                This assessment is for informational and educational purposes only to help you understand weather risks to your logistics operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics-Specific Risk Factors */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                The Weather Risks That Cost Texas Logistics Operations Millions
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                Logistics operations face unique weather vulnerabilities. Know exactly when your supply chains are most at risk and how to protect critical routes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Transportation Route Disruptions
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Critical Corridors:</strong> I-35, I-45, I-10 weather vulnerabilities</div>
                  <div><strong>Winter Weather:</strong> Ice storms shut down major highways</div>
                  <div><strong>Flooding:</strong> Low-water crossings and bridge closures</div>
                  <div><strong>Hurricane Impact:</strong> Coastal route evacuations and closures</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Warehouse & Distribution Impact
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Power Outages:</strong> Refrigerated storage, automated systems</div>
                  <div><strong>Flooding Risk:</strong> Ground-level inventory and equipment damage</div>
                  <div><strong>Worker Safety:</strong> Extreme heat/cold affects productivity</div>
                  <div><strong>Loading Operations:</strong> High winds halt dock operations</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-success">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Time-Sensitive Delivery Risks
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>JIT Deliveries:</strong> Weather delays cascade through supply chains</div>
                  <div><strong>Perishable Goods:</strong> Temperature control during delays</div>
                  <div><strong>SLA Penalties:</strong> Customer penalties for weather-related delays</div>
                  <div><strong>Alternative Routes:</strong> Longer distances increase costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                Get Your Logistics-Specific Weather Risk Analysis
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                Join Texas logistics leaders who use our specialized assessment to protect supply chains, optimize routes, and maintain delivery schedules during weather events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Assessment Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-h3 font-bold text-neutral-800 mb-6 font-secondary">
                    Logistics Assessment Includes:
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Route Vulnerability Analysis
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Assessment of weather risks along critical transportation corridors and alternative route planning.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Warehouse Protection Strategy
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Analysis of facility-specific weather risks and recommendations for inventory and equipment protection.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Supply Chain Continuity Planning
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Weather-based contingency planning for maintaining delivery schedules and customer commitments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-4 font-secondary">
                    Logistics Operations Specialist
                  </h3>
                  <p className="text-body-regular text-neutral-600 mb-4">
                    Our team understands Texas logistics operations and provides assessments tailored to supply chain and transportation environments.
                  </p>
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`} 
                      className="flex items-center text-primary hover:text-primary-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Global Questionnaire */}
              <div>
                <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
                  <div className="p-6 border-b border-neutral-200">
                    <h3 className="text-h3 font-bold text-neutral-800 mb-3 font-secondary">
                      Logistics Weather Risk Assessment
                    </h3>
                    <p className="text-body-regular text-neutral-600 mb-4">
                      Complete our comprehensive questionnaire to receive your personalized logistics risk analysis.
                    </p>
                  </div>
                  
                  <div className="p-0">
                    <QuestionnaireBridge />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
