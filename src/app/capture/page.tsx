import type { Metadata } from 'next';
import { COMPANY_INFO, TALLY_FORM_CONFIG, SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import QuestionnaireBridge from './QuestionnaireBridge';

export const metadata: Metadata = {
  title: 'Request Weather Risk Assessment for Texas Business Operations',
  description: 'Comprehensive weather risk assessment for Texas energy, logistics, manufacturing, agriculture, and construction operations. NOAA historical data, hurricane tracking, FEMA flood zone analysis for executives.',
  keywords: ['Texas business weather risk assessment', 'energy logistics manufacturing weather risk', 'agriculture construction weather analysis', 'Houston Dallas Austin weather risk', 'Texas supply chain weather assessment', 'business operations weather risk'],
  openGraph: {
    title: 'Request Weather Risk Assessment | Sentinel Shield',
    description: 'Weather risk assessment for Texas business operations using historical data analysis.',
    url: `${SITE_CONFIG.url}/capture`,
  },
};

export default function CapturePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-extrabold text-white mb-6">
              Stop Letting Texas Weather Control Your Business Revenue
            </h1>
            <p className="text-h3 text-primary-100 mb-4 font-light">
              Get the location-specific data you need to protect operations and justify risk mitigation investments
            </p>
            <p className="text-body-large text-primary-200 mb-8 max-w-3xl mx-auto">
              Texas executives use our historical weather analysis to reduce operational uncertainty, protect revenue streams, and make data-driven decisions about facility protection. 25+ years of NOAA data specific to your location.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Risk Factors Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                The Weather Events That Cost Texas Businesses Billions Every Year
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                Know exactly when your operations are most vulnerable. Historical data shows which weather events hit your region and when - helping you plan maintenance, staffing, and protect revenue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Hurricane & Storm Surge Impact
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Business Impact:</strong> Complete operational shutdown, weeks of lost revenue</div>
                  <div><strong>Your Risk Window:</strong> August through October (know exactly when to prepare)</div>
                  <div><strong>Historical Proof:</strong> Harvey (2017) - $125B in damages, companies that prepared fared better</div>
                  <div><strong>Frequency:</strong> Major hurricanes every 3-6 years - predictable enough to plan for</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Extreme Heat Events
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Revenue Impact:</strong> Reduced productivity, project delays, higher operating costs</div>
                  <div><strong>Planning Advantage:</strong> July-September pattern lets you budget for cooling/delays</div>
                  <div><strong>Threshold Data:</strong> 100°F+ for 7+ days - know exactly when to adjust operations</div>
                  <div><strong>Risk Mitigation:</strong> Schedule critical work outside peak heat periods</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Winter Storm & Freeze Events
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Business Continuity:</strong> Equipment winterization prevents costly failures</div>
                  <div><strong>Competitive Edge:</strong> Most businesses unprepared - you can stay operational</div>
                  <div><strong>Historical Proof:</strong> February 2021 - prepared companies maintained operations</div>
                  <div><strong>Predictable Timing:</strong> December-February - plan equipment protection now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                What Your Weather Risk Assessment Includes
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                Get the specific data you need to protect operations, justify protection investments to leadership, and outperform competitors during weather events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                      Revenue Protection Data
                    </h3>
                    <p className="text-body-regular text-neutral-600">
                      Quantify potential operational disruption costs specific to your location and industry. Historical data shows exact revenue impacts during past weather events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                      Operational Planning Calendar
                    </h3>
                    <p className="text-body-regular text-neutral-600">
                      Know exactly when to schedule maintenance, adjust staffing, and prepare equipment. Timing data helps you avoid weather-related project delays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                      Investment Justification
                    </h3>
                    <p className="text-body-regular text-neutral-600">
                      Historical cost data and risk analysis help you build compelling business cases for protection investments and insurance negotiations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                      Competitive Advantage
                    </h3>
                    <p className="text-body-regular text-neutral-600">
                      While competitors struggle with weather disruptions, you'll know when events are coming and how to protect operations and maintain service levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Business Sectors Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                How Texas Industry Leaders Use Weather Risk Data
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                See how executives in your sector use historical weather analysis to protect revenue, reduce insurance costs, and maintain operations when competitors shut down.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Energy & Petrochemical
                </h3>
                <p className="text-body-regular text-neutral-600 mb-3">
                  <strong>Protect Production Revenue:</strong> Schedule shutdowns outside hurricane season, winterize equipment before freeze events
                </p>
                <p className="text-body-small text-neutral-500">
                  <em>Houston Gulf Coast - Highest hurricane exposure + Massive financial impact</em>
                </p>
                <div className="mt-3 p-3 bg-white rounded">
                  <p className="text-xs text-neutral-500">[📸 Image placeholder: Refinery with hurricane protection]</p>
                </div>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Logistics & Warehousing
                </h3>
                <p className="text-body-regular text-neutral-600 mb-3">
                  <strong>Protect Supply Chain:</strong> Anticipate transport delays, secure critical inventory before weather events
                </p>
                <p className="text-body-small text-neutral-500">
                  <em>I-35/I-45 Corridors - Critical supply chain vulnerabilities</em>
                </p>
                <div className="mt-3 p-3 bg-white rounded">
                  <p className="text-xs text-neutral-500">[📸 Image placeholder: Distribution center during Winter Storm Uri]</p>
                </div>
              </div>

              <div className="bg-success/5 rounded-lg p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Manufacturing
                </h3>
                <p className="text-body-regular text-neutral-600 mb-3">
                  <strong>Maintain Production:</strong> Adapt schedules to storm risks, protect sensitive equipment
                </p>
                <p className="text-body-small text-neutral-500">
                  <em>Dallas-Fort Worth, Austin - Diverse weather risks + Just-in-time production</em>
                </p>
                <div className="mt-3 p-3 bg-white rounded">
                  <p className="text-xs text-neutral-500">[📸 Image placeholder: Tech manufacturing plant with hail protection]</p>
                </div>
              </div>

              <div className="bg-alert/5 rounded-lg p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Agriculture & Food Processing
                </h3>
                <p className="text-body-regular text-neutral-600 mb-3">
                  <strong>Protect Seasonal Revenue:</strong> Plan harvests around drought cycles, protect against freeze events
                </p>
                <p className="text-body-small text-neutral-500">
                  <em>Texas Rural - Drought + freeze exposure, lower digital sophistication</em>
                </p>
                <div className="mt-3 p-3 bg-white rounded">
                  <p className="text-xs text-neutral-500">[📸 Image placeholder: Agricultural operation with irrigation system]</p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Construction & Real Estate
                </h3>
                <p className="text-body-regular text-neutral-600 mb-3">
                  <strong>Avoid Costly Delays:</strong> Schedule projects outside high-risk periods, protect materials
                </p>
                <p className="text-body-small text-neutral-500">
                  <em>Statewide - Weather delays = direct revenue impact, project-based risk assessment</em>
                </p>
                <div className="mt-3 p-3 bg-white rounded">
                  <p className="text-xs text-neutral-500">[📸 Image placeholder: Construction site with weather protection]</p>
                </div>
              </div>
              

              
              <div className="bg-neutral-50 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                    Other Industries
                  </h4>
                  <p className="text-body-small text-neutral-600">
                    Custom assessments for additional business sectors
                  </p>
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
                Get Your Location-Specific Weather Risk Analysis
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                Join Texas executives who use our data to protect revenue and outperform competitors during weather events. Complete the form below to receive your location-specific analysis with 25+ years of NOAA historical data.
              </p>
              <div className="bg-primary/10 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
                <p className="text-body-regular text-primary-800 font-semibold">
                  ⚡ Priority Response: Weather assessments during active storm threats
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Assessment Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-h3 font-bold text-neutral-800 mb-6 font-secondary">
                    Assessment Components:
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Location-Specific Risk Analysis
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Historical weather pattern analysis for your facility coordinates using NOAA data, flood zone mapping, and hurricane track probability.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Operational Impact Assessment
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Analysis of weather risks specific to your operation type - energy facilities, logistics centers, manufacturing plants, agricultural operations, or construction projects.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Historical Event Correlation
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Review of past weather events that impacted similar facilities in your region, including Harvey (2017) and Winter Storm Uri (2021).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Details */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="text-h3 font-bold text-neutral-800 mb-4 font-secondary">
                    Data Sources & Methodology
                  </h3>
                  <div className="space-y-3 text-body-regular text-neutral-600">
                    <div><strong>Weather Data:</strong> NOAA Historical Weather Database (25+ years)</div>
                    <div><strong>Hurricane Tracking:</strong> National Hurricane Center historical paths</div>
                    <div><strong>Flood Risk:</strong> FEMA flood zone mapping and elevation data</div>
                    <div><strong>Industry Data:</strong> EIA facility databases and operational classifications</div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-4 font-secondary">
                    Need Immediate Risk Assessment?
                  </h3>
                  <p className="text-body-regular text-neutral-600 mb-4">
                    Our risk assessment specialists understand Texas business operations and provide comprehensive evaluations based on historical data.
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
                    <div className="text-body-small text-neutral-500 mt-3">
                      Available 24/7 during active weather events
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Interactive Questionnaire */}
              <div>
                <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
                  <div className="p-6 border-b border-neutral-200">
                    <h3 className="text-h3 font-bold text-neutral-800 mb-3 font-secondary">
                      Get Your Weather Risk Analysis
                    </h3>
                    <p className="text-body-regular text-neutral-600 mb-4">
                      Complete our interactive assessment to receive your personalized climate vulnerability analysis.
                    </p>
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                                                 <span className="text-body-small font-semibold text-neutral-700">25+ years of historical data</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body-small font-semibold text-neutral-700">Location-specific risk patterns</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body-small font-semibold text-neutral-700">Revenue protection insights</span>
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


    </div>
  );
} 