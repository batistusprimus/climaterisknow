import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { COMPANY_INFO, CTA_BUTTONS, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Multi-Sector Weather Risk Assessment Experts for Texas | Sentinel Shield',
  description: 'Expert weather risk assessment for Texas businesses across all sectors. NOAA historical data analysis, FEMA flood mapping, and facility-specific evaluation for energy, logistics, manufacturing, agriculture, and construction operations.',
  keywords: ['Texas business weather experts', 'multi-sector risk assessment', 'NOAA data analysis specialists', 'facility risk evaluation', 'business weather exposure', 'comprehensive meteorological assessment', 'Texas industry weather risk'],
  openGraph: {
    title: 'Multi-Sector Weather Risk Assessment Experts | Sentinel Shield',
    description: 'Expert weather risk assessment for Texas businesses across all major industry sectors using verified data sources.',
    url: `${SITE_CONFIG.url}/who-we-are`,
  },
};

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/NOGRGPWN15kMKqHW5XL0f.png"
            alt="Texas multi-sector operations including renewable energy and industrial infrastructure"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-700/80"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-bold text-white mb-6">
              Built for Texas Multi-Sector Business Operations
            </h1>
            <p className="text-body-large text-primary-100">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-slide-up">
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="text-primary text-2xl font-bold">M</span>
                </div>
                <h2 className="text-h2 font-bold text-neutral-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-body-large text-neutral-600 mb-8">
                  {COMPANY_INFO.mission}
                </p>
                <p className="text-body-regular text-neutral-600">
                  Weather patterns can be analyzed through historical data. We combine NOAA weather records, FEMA flood mapping, and facility-specific factors to assess location-based weather exposure for Texas business operations across energy, logistics, manufacturing, agriculture, and construction sectors.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="text-secondary text-2xl font-bold">V</span>
                </div>
                <h2 className="text-h2 font-bold text-neutral-800 mb-6">
                  Our Vision
                </h2>
                <p className="text-body-large text-neutral-600 mb-8">
                  {COMPANY_INFO.vision}
                </p>
                <p className="text-body-regular text-neutral-600">
                  Texas business executives across all major sectors need clear information about weather exposure at their facilities. We provide comprehensive analysis using verified data sources to support informed risk management decisions for energy, logistics, manufacturing, agriculture, and construction operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_INFO.values.map((value, index) => (
              <div 
                key={index}
                className="card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">
                    {value.charAt(0)}
                  </span>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  {value}
                </h3>
                <p className="text-body-regular text-neutral-600">
                  {getValueDescription(value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Expertise Section */}
      <section className="bg-background section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">
              Our Analytical Approach
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl mx-auto">
              We combine meteorological expertise with data analysis to provide comprehensive weather risk assessments for Texas business facilities across energy, logistics, manufacturing, agriculture, and construction sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">M</span>
              </div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                Meteorological Analysis
              </h3>
              <p className="text-body-regular text-neutral-600">
                Analysis of NOAA historical weather data, hurricane tracking records, and extreme event patterns specific to Texas regions.
              </p>
            </div>

            <div className="card text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-secondary text-2xl font-bold">G</span>
              </div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                Geographic Assessment
              </h3>
              <p className="text-body-regular text-neutral-600">
                FEMA flood zone mapping, coastal proximity analysis, and elevation data integration for location-specific risk evaluation.
              </p>
            </div>

            <div className="card text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-success text-2xl font-bold">E</span>
              </div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                Multi-Sector Focus
              </h3>
              <p className="text-body-regular text-neutral-600">
                Specialized understanding of energy, logistics, manufacturing, agriculture, and construction operations with their specific infrastructure requirements and weather vulnerabilities.
              </p>
              <div className="mt-4 relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src="/NOGRGPWN15kMKqHW5XL0f.png"
                  alt="Vue d'ensemble des opérations multi-sectorielles au Texas : énergie renouvelable, installations industrielles et agriculture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-medium text-neutral-700">
                  Multi-Sector Texas Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-white mb-4">
              Request Weather Risk Assessment for Your Business Operations
            </h2>
            <p className="text-body-large text-primary-100 mb-8">
              Understand your facility's weather exposure through comprehensive historical data analysis and geographic risk factors across all major Texas business sectors.
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
                href={CTA_BUTTONS.resources.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                {CTA_BUTTONS.resources.text}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get value descriptions
function getValueDescription(value: string): string {
  const descriptions: Record<string, string> = {
    'Data Accuracy': 'All assessments are based on verified government databases and official meteorological records.',
    'Source Transparency': 'We clearly document all data sources and methodology used in our weather risk analysis.',
    'Methodological Rigor': 'Systematic approach to historical data analysis and geographic risk factor evaluation.',
    'Historical Analysis': 'Focus on long-term weather patterns and documented impact events like Harvey and Winter Storm Uri.',
    'Geographic Specificity': 'Location-based assessment considering local flood zones, elevation, and regional weather patterns.'
  };
  return descriptions[value] || 'Core principle that guides our analytical approach.';
} 