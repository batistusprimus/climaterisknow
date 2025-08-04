import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, CTA_BUTTONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Weather risk assessment resources for Texas business operations across all major sectors - Coming Soon.',
  openGraph: {
    title: 'Resources | Sentinel Shield',
    description: 'Weather risk assessment resources for Texas business operations across energy, logistics, manufacturing, agriculture, and construction.',
    url: `${SITE_CONFIG.url}/resources`,
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-bold text-white mb-6">
              Weather Risk Assessment Resources
            </h1>
            <p className="text-body-large text-primary-100 mb-8">
              Comprehensive resources for Texas multi-sector business risk assessment - Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-card">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                Assessment Resources Coming Soon
              </h2>
              
              <p className="text-body-large text-neutral-600 mb-8">
                We're developing comprehensive resources to help Texas business executives across all major sectors understand weather risk assessment methodologies, 
                historical impact analysis, and facility-specific evaluation criteria. All content will be based on verifiable data sources 
                and established meteorological practices for energy, logistics, manufacturing, agriculture, and construction operations.
              </p>

              <div className="bg-background rounded-xl p-6 mb-8">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-4">
                  Planned Resource Types:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Risk assessment methodology guides</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Historical weather data interpretation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">NOAA and FEMA data source explanations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Geographic risk factor documentation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Multi-sector facility vulnerability checklists</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Case study templates for analysis</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">
                  Data Sources We Reference:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-primary font-bold">NOAA</span>
                    </div>
                    <p className="text-body-small text-neutral-600">Weather Data</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-primary font-bold">FEMA</span>
                    </div>
                    <p className="text-body-small text-neutral-600">Flood Zones</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-primary font-bold">NHC</span>
                    </div>
                    <p className="text-body-small text-neutral-600">Hurricane Data</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-primary font-bold">EIA</span>
                    </div>
                    <p className="text-body-small text-neutral-600">Energy Data</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={CTA_BUTTONS.primary.href}
                  variant="primary"
                  size="lg"
                >
                  {CTA_BUTTONS.primary.text}
                </Button>
                <Button
                  href="/who-we-are"
                  variant="outline"
                  size="lg"
                >
                  Learn About Our Approach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 