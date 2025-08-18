import type { Metadata } from 'next';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import QuestionnaireBridge from '../QuestionnaireBridge';

export const metadata: Metadata = {
  title: 'Weather Risk Assessment for Construction & Infrastructure Operations | Texas Climate Intelligence',
  description: 'Specialized weather risk assessment for Texas construction and infrastructure projects. Protect construction sites, reduce delays, and optimize project schedules with location-specific climate data.',
  keywords: ['Texas construction weather risk', 'infrastructure climate assessment', 'construction weather protection', 'building weather analysis', 'construction weather vulnerability', 'infrastructure climate resilience'],
  openGraph: {
    title: 'Construction & Infrastructure Weather Risk Assessment | Sentinel Shield',
    description: 'Protect your construction operations with specialized weather risk analysis for Texas projects.',
    url: `${SITE_CONFIG.url}/capture/construction`,
  },
};

export default function ConstructionCapturePage() {
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
                    🏢 FREE Construction Risk Analysis
                  </span>
                </div>
                <h1 className="text-display font-extrabold text-white mb-6 leading-tight">
                  Protect Your Construction Projects from $100M+ Weather Delays
                </h1>
                <p className="text-h3 text-primary-100 mb-6 font-light">
                  Get project-specific data that Texas construction leaders use to reduce weather-related delays by 40-60%
                </p>
                
                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-100 font-medium">Weather window analysis for critical construction phases</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-100 font-medium">Project schedule optimization and delay prevention</span>
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
                    <strong>Trusted by Texas construction leaders</strong> who completed projects on schedule during Hurricane Beryl (2024) and avoided delays during Winter Storm Mara (2024).
                  </p>
                </div>
              </div>

              {/* Right Column - Prominent Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-white/20 overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-b border-neutral-200">
                    <h2 className="text-h2 font-bold text-neutral-800 mb-3 font-secondary">
                      Get Your FREE Construction Risk Analysis
                    </h2>
                    <p className="text-body-regular text-neutral-600 mb-4">
                      Complete our 3-minute assessment to receive your personalized project risk report.
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
              Why Texas Construction Leaders Choose Our Weather Risk Intelligence
            </h2>
            <p className="text-body-large text-neutral-600 mb-12 max-w-3xl mx-auto">
              Don't let weather uncertainty delay your projects. Get the specific data you need to maintain schedules and outperform competitors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Prevent Project Delays
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Historical data shows construction companies with weather intelligence reduce weather-related delays by 40-60%. Complete projects on time when competitors fall behind.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Avoid Liquidated Damages
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Protect against costly penalties with advance weather planning and optimized construction scheduling around weather windows.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Material Protection
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Protect expensive materials and equipment from weather damage with location-specific forecasting and protection recommendations.
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
                Don't Wait for the Next Construction Season Disaster
              </h2>
              <p className="text-body-large text-neutral-700">
                Hurricane Beryl (2024) caused $2+ billion in construction delays statewide. 
                Projects with weather intelligence maintained schedules and avoided liquidated damages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
                <div className="text-sm text-neutral-600">Hurricane Beryl construction delays</div>
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
              Ready to Protect Your Construction Projects?
            </h2>
            <p className="text-body-large text-neutral-600 mb-8">
              Join the Texas construction leaders who use weather intelligence to maintain project schedules and protect investments during extreme weather events.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <p className="text-body-regular text-neutral-700 mb-4">
                <strong>Educational Risk Analysis Only</strong> - We provide weather risk intelligence based on historical data. 
                We do not sell insurance, provide insurance advice, or connect you with insurance providers.
              </p>
              <div className="text-sm text-neutral-500">
                This assessment is for informational and educational purposes only to help you understand weather risks to your construction operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction-Specific Risk Factors */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                The Weather Risks That Cost Texas Construction Projects Millions
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                Construction projects face unique weather vulnerabilities. Know exactly when your operations are most at risk and how to protect critical work phases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Weather-Sensitive Work Phases
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Concrete Operations:</strong> Temperature and precipitation restrictions</div>
                  <div><strong>Roofing Work:</strong> Wind and rain limitations for safe operations</div>
                  <div><strong>Crane Operations:</strong> Wind speed restrictions for safety</div>
                  <div><strong>Excavation:</strong> Soil conditions affected by moisture</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Schedule & Cost Impacts
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Delay Costs:</strong> Labor, equipment, and overhead during standby</div>
                  <div><strong>Liquidated Damages:</strong> Penalties for weather-related delays</div>
                  <div><strong>Acceleration Costs:</strong> Premium pay to recover lost time</div>
                  <div><strong>Material Protection:</strong> Covering and securing exposed materials</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-success">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Extreme Weather Events
                </h3>
                <div className="space-y-3 text-body-regular text-neutral-600">
                  <div><strong>Hail Damage:</strong> Equipment, materials, and completed work</div>
                  <div><strong>High Winds:</strong> Structural damage to partially completed buildings</div>
                  <div><strong>Flooding:</strong> Site access, equipment, and foundation work</div>
                  <div><strong>Extreme Heat:</strong> Worker safety and concrete curing issues</div>
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
                Get Your Construction-Specific Weather Risk Analysis
              </h2>
              <p className="text-body-large text-neutral-600 max-w-4xl mx-auto">
                Join Texas construction leaders who use our specialized assessment to protect projects, reduce delays, and optimize construction schedules during weather events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Assessment Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-h3 font-bold text-neutral-800 mb-6 font-secondary">
                    Construction Assessment Includes:
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Project Schedule Risk Analysis
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Assessment of weather impacts on critical construction phases and recommendations for schedule optimization.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Weather Window Planning
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Analysis of optimal weather windows for weather-sensitive construction activities throughout the year.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        Site Protection Strategy
                      </h4>
                      <p className="text-body-regular text-neutral-600">
                        Recommendations for protecting materials, equipment, and work-in-progress from weather damage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-4 font-secondary">
                    Construction Operations Specialist
                  </h3>
                  <p className="text-body-regular text-neutral-600 mb-4">
                    Our team understands Texas construction operations and provides assessments tailored to building and infrastructure projects.
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
                      Construction Weather Risk Assessment
                    </h3>
                    <p className="text-body-regular text-neutral-600 mb-4">
                      Complete our comprehensive questionnaire to receive your personalized construction risk analysis.
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
