import type { Metadata } from 'next';
import { COMPANY_INFO, SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import ManufacturingQuestionnaireBridge from './ManufacturingQuestionnaireBridge';

export const metadata: Metadata = {
  title: 'Weather Risk Assessment for Manufacturing Operations | Texas Climate Intelligence',
  description: 'Specialized weather risk assessment for Texas manufacturing facilities. Protect production, reduce downtime, and optimize operations with location-specific climate data and historical analysis.',
  keywords: ['Texas manufacturing weather risk', 'production facility climate assessment', 'manufacturing weather protection', 'factory weather risk analysis', 'industrial weather vulnerability', 'manufacturing climate resilience'],
  openGraph: {
    title: 'Manufacturing Weather Risk Assessment | Sentinel Shield',
    description: 'Protect your manufacturing operations with specialized weather risk analysis for Texas facilities.',
    url: `${SITE_CONFIG.url}/capture/manufacturer`,
  },
};

export default function ManufacturerCapturePage() {
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
                    🏭 FREE Manufacturing Risk Analysis
                  </span>
                </div>
                <h1 className="text-display font-extrabold text-white mb-6 leading-tight">
                  Protect Your Manufacturing Operations from $200M+ Weather Losses
                </h1>
                <p className="text-h3 text-primary-100 mb-6 font-light">
                  Get production-specific data that Texas manufacturers use to reduce weather-related shutdowns by 40-60%
                </p>
                
                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-100 font-medium">Production continuity analysis for your manufacturing processes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-100 font-medium">Supply chain vulnerability and power grid reliability assessment</span>
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
                    <strong>Trusted by Texas manufacturing leaders</strong> who maintained production during Winter Storm Uri (2021) and prevented shutdowns during Hurricane Beryl (2024).
                  </p>
                </div>
              </div>

              {/* Right Column - Prominent Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-white/20 overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-b border-neutral-200">
                    <h2 className="text-h2 font-bold text-neutral-800 mb-3 font-secondary">
                      Get Your FREE Manufacturing Risk Analysis
                    </h2>
                    <p className="text-body-regular text-neutral-600 mb-4">
                      Complete our 3-minute assessment to receive your personalized manufacturing risk report.
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
                  
                  {/* Manufacturing-Specific Questionnaire */}
                  <div className="p-0">
                    <ManufacturingQuestionnaireBridge />
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
              Why Texas Manufacturers Choose Our Weather Risk Intelligence
            </h2>
            <p className="text-body-large text-neutral-600 mb-12 max-w-3xl mx-auto">
              Don't let weather uncertainty shut down your production. Get the specific data you need to maintain operations and outperform competitors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Prevent Production Shutdowns
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Historical data shows manufacturers with weather intelligence reduce weather-related shutdowns by 40-60%. Avoid millions in lost production when competitors halt operations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Supply Chain Protection
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Protect just-in-time operations with advance weather planning for critical transportation corridors and supplier networks.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Equipment Investment Protection
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Protect expensive manufacturing equipment and maintain optimal operating conditions with location-specific weather thresholds and protection strategies.
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
                Don't Wait for the Next Manufacturing Crisis
              </h2>
              <p className="text-body-large text-neutral-700">
                Winter Storm Uri (2021) caused $195 billion in manufacturing losses. 
                Facilities with weather intelligence maintained production and captured competitor market share.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$195B</div>
                <div className="text-sm text-neutral-600">Winter Storm Uri manufacturing losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40-60%</div>
                <div className="text-sm text-neutral-600">Shutdown reduction with weather intelligence</div>
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
              Ready to Protect Your Manufacturing Operations?
            </h2>
            <p className="text-body-large text-neutral-600 mb-8">
              Join the Texas manufacturers who use weather intelligence to maintain production schedules and protect operations during extreme weather events.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <p className="text-body-regular text-neutral-700 mb-4">
                <strong>Educational Risk Analysis Only</strong> - We provide weather risk intelligence based on historical data. 
                We do not sell insurance, provide insurance advice, or connect you with insurance providers.
              </p>
              <div className="text-sm text-neutral-500">
                This assessment is for informational and educational purposes only to help you understand weather risks to your manufacturing operations.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
