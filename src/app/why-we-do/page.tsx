import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { CTA_BUTTONS, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Texas Energy Weather Risk Analysis | Hurricane Harvey & Winter Storm Uri Impact',
  description: 'Understanding weather risk for Texas energy facilities through historical events like Hurricane Harvey and Winter Storm Uri. Expert analysis of downstream operations, petrochemical facilities, and refinery weather exposure.',
  keywords: ['Hurricane Harvey energy impact', 'Winter Storm Uri analysis', 'Texas energy weather history', 'downstream operations hurricane risk', 'petrochemical weather vulnerability', 'Texas refinery freeze protection'],
  openGraph: {
    title: 'Texas Energy Weather Risk Analysis | Sentinel Shield',
    description: 'Historical weather risk analysis for Texas energy operations including Harvey and Uri impact studies.',
    url: `${SITE_CONFIG.url}/why-we-do`,
  },
};

export default function WhyWeDoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-bold text-white mb-6">
              Texas Weather Events Impact Energy Operations. 
              <span className="text-secondary block mt-2">We Provide Historical Data Analysis.</span>
            </h1>
            <p className="text-body-large text-primary-100">
              Texas energy executives need comprehensive weather risk information. We provide historical data analysis and geographic factors to assess facility-specific exposure.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                Texas Business Operations Face Unprecedented Weather Risk
              </h2>
              <p className="text-body-large text-neutral-600">
                Hurricane Harvey. Winter Storm Uri. Each event reveals how unprepared most businesses remain for natural disaster impacts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="card bg-alert/5 border-l-4 border-alert">
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                    Insurance Market Exodus
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Major insurance companies are abandoning Texas, leaving energy facilities with limited coverage options and exponentially higher premiums.
                  </p>
                </div>

                <div className="card bg-alert/5 border-l-4 border-alert">
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                    Operational Disruption Costs
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Energy facilities face average operational losses during weather events, with Gulf Coast petrochemical operations particularly vulnerable to storm surge and hurricane winds.
                  </p>
                </div>

                <div className="card bg-alert/5 border-l-4 border-alert">
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                    Preparation Challenges
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Energy facilities often lack comprehensive understanding of their location-specific weather risks, making it difficult to prepare adequately for extreme events.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in">
                <div className="bg-neutral-800 rounded-2xl p-8 text-white">
                  <h3 className="text-h3 font-semibold mb-6 font-secondary">
                    Limited Information vs. Comprehensive Analysis
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-alert mb-2">Limited Weather Information</h4>
                      <ul className="space-y-1 text-neutral-300">
                        <li>• General weather forecasts without facility context</li>
                        <li>• No historical pattern analysis</li>
                        <li>• Lack of location-specific risk understanding</li>
                        <li>• Reactive emergency response only</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-success mb-2">Comprehensive Risk Assessment</h4>
                      <ul className="space-y-1 text-neutral-300">
                        <li>• Historical weather data analysis (25+ years)</li>
                        <li>• Facility-specific geographic factors</li>
                        <li>• Documented risk evaluation methodology</li>
                        <li>• Source-referenced analysis for planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Driving Force */}
      <section className="bg-background section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                Why We Built This for Texas Energy
              </h2>
              <p className="text-body-large text-neutral-600">
                Hurricane Harvey revealed a fundamental gap: Texas energy operations needed comprehensive risk assessment, not generic weather warnings.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-primary text-2xl font-bold">H</span>
                  </div>
                  <h3 className="text-h2 font-bold text-neutral-800 mb-4">
                    Hurricane Harvey Changed Everything
                  </h3>
                  <p className="text-body-large text-neutral-600 mb-6">
                    Harvey caused $125 billion in Texas damages and took 23% of US refining capacity offline. Energy facilities with better risk understanding were able to prepare more effectively.
                  </p>
                  <p className="text-body-regular text-neutral-600">
                    We realized that comprehensive weather risk assessment should be accessible to all Texas energy operations, not just the largest corporations with internal meteorology teams.
                  </p>
                </div>
                <div className="animate-fade-in">
                  <div className="bg-white rounded-2xl p-8 shadow-card">
                    <h4 className="text-h3 font-semibold text-neutral-800 mb-4 font-secondary">
                      Harvey's Lesson for Texas Energy
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-alert pl-4">
                        <p className="text-body-regular text-neutral-600">
                          <strong>Facilities with limited preparation:</strong> Experienced extended operational disruptions and equipment damage during Hurricane Harvey
                        </p>
                      </div>
                      <div className="border-l-4 border-success pl-4">
                        <p className="text-body-regular text-neutral-600">
                          <strong>Facilities with comprehensive risk understanding:</strong> Better prepared for storm impacts through advance planning and preparation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 animate-slide-up">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-secondary text-2xl font-bold">U</span>
                  </div>
                  <h3 className="text-h2 font-bold text-neutral-800 mb-4">
                    Winter Storm Uri Validated Our Mission
                  </h3>
                  <p className="text-body-large text-neutral-600 mb-6">
                    Uri's freeze events caught most energy operations unprepared. Pipelines froze. Equipment failed. 26% of US refining capacity went offline.
                  </p>
                  <p className="text-body-regular text-neutral-600">
                    Historical weather data shows that extreme freeze events occur in Texas every 5-10 years. Understanding these patterns and facility-specific vulnerabilities can help with emergency planning.
                  </p>
                </div>
                <div className="lg:order-1 animate-fade-in">
                  <div className="bg-primary/5 rounded-2xl p-8">
                    <h4 className="text-h3 font-semibold text-neutral-800 mb-6 font-secondary">
                      Data Sources Available
                    </h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-h2 font-bold text-primary mb-2">NOAA</div>
                        <div className="text-body-small text-neutral-600">25+ Years Weather Data</div>
                      </div>
                      <div className="text-center">
                        <div className="text-h2 font-bold text-primary mb-2">FEMA</div>
                        <div className="text-body-small text-neutral-600">Flood Zone Mapping</div>
                      </div>
                      <div className="text-center">
                        <div className="text-h2 font-bold text-primary mb-2">NHC</div>
                        <div className="text-body-small text-neutral-600">Hurricane Tracking</div>
                      </div>
                      <div className="text-center">
                        <div className="text-h2 font-bold text-primary mb-2">EIA</div>
                        <div className="text-body-small text-neutral-600">Energy Facility Data</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                  <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-success text-2xl font-bold">C</span>
                  </div>
                  <h3 className="text-h2 font-bold text-neutral-800 mb-4">
                    Informed Risk Management
                  </h3>
                  <p className="text-body-large text-neutral-600 mb-6">
                    Energy facilities with comprehensive weather risk understanding can make better-informed decisions about emergency planning and operational preparation.
                  </p>
                  <p className="text-body-regular text-neutral-600">
                    Weather risk assessment provides valuable information for internal risk management processes, helping energy executives understand their facility's specific exposure to extreme weather events.
                  </p>
                </div>
                <div className="animate-fade-in">
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8">
                    <h4 className="text-h3 font-semibold text-neutral-800 mb-6 font-secondary">
                      Operational Advantages
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">P</span>
                        </div>
                        <span className="text-body-regular text-neutral-600">
                          <strong>Proactive maintenance scheduling</strong> based on weather impact forecasts
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">O</span>
                        </div>
                        <span className="text-body-regular text-neutral-600">
                          <strong>Optimized resource allocation</strong> during weather event windows
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">R</span>
                        </div>
                        <span className="text-body-regular text-neutral-600">
                          <strong>Reduced operational disruption</strong> through advance preparation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-bold text-neutral-800 mb-6">
              Our Commitment to Texas Energy Operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="animate-slide-up">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">A</span>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Data-Driven Analysis
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Our assessment is built on 25+ years of NOAA historical weather data and official government databases like FEMA flood mapping.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary text-2xl font-bold">S</span>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Facility-Specific Intelligence
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Every risk assessment is customized for your exact coordinates, operations, and equipment vulnerabilities.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-success text-2xl font-bold">T</span>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  Texas Energy Focus
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Built specifically for Texas Gulf Coast operations with deep understanding of energy infrastructure vulnerabilities.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-h3 font-semibold text-neutral-800 mb-4 font-secondary">
                Our Commitment to Texas Energy
              </h3>
              <p className="text-body-large text-neutral-600">
                Comprehensive weather risk assessment should be accessible to all Texas energy facilities. We provide detailed analysis using verified data sources and transparent methodology for informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-white mb-4">
              Request Weather Risk Assessment for Your Facility
            </h2>
            <p className="text-body-large text-primary-100 mb-8">
              Understand your facility's weather exposure through comprehensive historical data analysis and geographic risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={CTA_BUTTONS.primary.href}
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100"
              >
                {CTA_BUTTONS.primary.text}
              </Button>
              <Button
                href="/who-we-are"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn About Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 