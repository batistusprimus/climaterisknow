import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, CTA_BUTTONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Weather risk analysis insights for Texas business operations across all major sectors - Coming Soon.',
  openGraph: {
    title: 'Blog | Sentinel Shield',
    description: 'Weather risk analysis insights for Texas business operations across energy, logistics, manufacturing, agriculture, and construction.',
    url: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-bold text-white mb-6">
              Weather Risk Analysis
            </h1>
            <p className="text-body-large text-primary-100 mb-8">
              Insights and analysis for Texas multi-sector business operations - Coming Soon
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h2 className="text-h2 font-bold text-neutral-800 mb-4">
                Analysis & Insights Coming Soon
              </h2>
              
              <p className="text-body-large text-neutral-600 mb-8">
                We're preparing comprehensive weather risk analysis and insights specifically for Texas business operations across all major sectors. 
                This section will feature data-driven articles on historical weather patterns, facility risk assessment methodologies, 
                and operational impact analysis for energy, logistics, manufacturing, agriculture, and construction operations.
              </p>

              <div className="bg-background rounded-xl p-6 mb-8">
                <h3 className="text-h3 font-semibold text-neutral-800 mb-4">
                  Planned Content Topics:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Historical weather pattern analysis</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Facility risk assessment case studies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">Hurricane and freeze event impact reviews</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body-regular text-neutral-600">NOAA data analysis methodologies</span>
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