'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { 
  COMPANY_INFO, 
  CTA_BUTTONS, 
  WEATHER_RISK_CATEGORIES
} from '@/lib/constants';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-display font-extrabold text-white mb-6">
                Weather Risk Intelligence for{' '}
                <span className="text-secondary">Texas Business Operations</span>
              </h1>
              <p className="text-body-large text-primary-100 mb-8">
                Location-specific weather risk assessment for energy, logistics, manufacturing, agriculture, and construction operations. 
                Analyze your exposure to hurricanes, flooding, freeze events, and extreme heat using historical NOAA data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={CTA_BUTTONS.primary.href}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-neutral-100 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {CTA_BUTTONS.primary.text}
                </Button>
                <Button
                  onClick={openModal}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m1-10h1m-1 0a4 4 0 00-4-4H9a4 4 0 00-4 4m1 0h1" />
                  </svg>
                  View Demo
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="mb-4 relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/G07MILfgCB38Os0v97oVf.png"
                    alt="Dashboard d'analyse météorologique du Texas avec système de surveillance des risques climatiques"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                <h3 className="text-h3 font-semibold mb-6 font-secondary">
                  Risk Assessment Components
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body-regular">Historical Weather Data</span>
                    <span className="font-mono text-primary-200 font-semibold">NOAA 25+ years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body-regular">Hurricane Track Analysis</span>
                    <span className="font-mono text-primary-200 font-semibold">NHC Database</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body-regular">Flood Zone Mapping</span>
                    <span className="font-mono text-primary-200 font-semibold">FEMA Data</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body-regular">Business Classifications</span>
                    <span className="font-mono text-primary-200 font-semibold">Multi-Sector Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">
              Built on Verified Data Sources
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl mx-auto">
              Weather risk assessments based on government databases and official meteorological records spanning decades of Texas weather patterns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-display font-black text-primary mb-2">25+</div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                Years of NOAA Data
              </h3>
              <p className="text-body-regular text-neutral-600">
                Historical weather patterns and extreme event records
              </p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-display font-black text-primary mb-2">5K+</div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                Hurricane Tracks
              </h3>
              <p className="text-body-regular text-neutral-600">
                National Hurricane Center historical storm paths
              </p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-display font-black text-primary mb-2">100%</div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                FEMA Flood Zone Coverage
              </h3>
              <p className="text-body-regular text-neutral-600">
                Complete flood risk mapping for Texas counties
              </p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-display font-black text-primary mb-2">EIA</div>
                              <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                  Business Infrastructure Database
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Official classifications for energy, logistics, manufacturing, and agriculture facilities
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Regional Risk Factors */}
      <section className="bg-background section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">
              Texas Regional Weather Risk Patterns
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl mx-auto">
              Different regions of Texas face distinct weather risk profiles based on historical patterns and geographical factors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-card-hover animate-slide-up">
              <div className="mb-4 relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src="/A_aR37AW18v8XbBMIlNI-.png"
                  alt="Vue aérienne du corridor énergétique de Houston avec installations pétrolières et raffineries"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent"></div>
              </div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                Gulf Coast Region
              </h3>
              <p className="text-body-regular text-neutral-600 mb-4">
                Highest hurricane exposure with massive financial impact potential. Post-Harvey awareness drives large budgets for risk mitigation investments.
              </p>
              <div className="space-y-2 text-body-small">
                <div><strong>Primary Risk:</strong> Hurricane Storm Surge & Revenue Loss</div>
                <div><strong>Business Impact:</strong> Operational Shutdown, Throughput Loss</div>
                <div><strong>Industries:</strong> Energy & Petrochemical (Houston Corridor)</div>
              </div>
            </div>
            
            <div className="card hover:shadow-card-hover animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src="/wpKxAP_VI7C65PQLbd12J.png"
                  alt="Dégâts d'inondation affectant les opérations logistiques dans le North Texas pendant Winter Storm Uri"
                  fill
                  className="object-cover brightness-110 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-medium text-neutral-700">
                  Winter Storm Uri Impact
                </div>
              </div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                North Texas Region
              </h3>
              <p className="text-body-regular text-neutral-600 mb-4">
                Critical supply chain vulnerabilities exposed during Winter Storm Uri. High operational disruption costs for just-in-time operations and distribution centers.
              </p>
              <div className="space-y-2 text-body-small">
                <div><strong>Primary Risk:</strong> Supply Chain Disruption & Freeze Events</div>
                <div><strong>Business Impact:</strong> Production Delays, Distribution Failures</div>
                <div><strong>Industries:</strong> Manufacturing & Logistics (DFW, I-35/I-45 Corridors)</div>
              </div>
            </div>
            
            <div className="card hover:shadow-card-hover animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src="/G07MILfgCB38Os0v97oVf.png"
                  alt="Analyse des risques climatiques pour l'agriculture et la technologie en Central Texas"
                  fill
                  className="object-cover brightness-105 hue-rotate-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-medium text-neutral-700">
                  Agriculture & Tech
                </div>
              </div>
              <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                Central Texas Region
              </h3>
              <p className="text-body-regular text-neutral-600 mb-4">
                Drought and freeze exposure with seasonal urgency windows. Growing tech manufacturing sector vulnerable to flash flooding and extreme heat events.
              </p>
              <div className="space-y-2 text-body-small">
                <div><strong>Primary Risk:</strong> Drought Cycles & Flash Flooding</div>
                <div><strong>Business Impact:</strong> Crop Revenue Loss, Production Delays</div>
                <div><strong>Industries:</strong> Agriculture, Food Processing & Technology (Austin)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Risk Categories */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">
              Complete Weather Risk Intelligence
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl mx-auto">
              Monitor and quantify all natural disaster threats affecting Texas business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEATHER_RISK_CATEGORIES.slice(0, 5).map((category, index) => (
              <div 
                key={category.type} 
                className="card hover:shadow-card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">
                    {category.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                  {category.name}
                </h3>
                <p className="text-body-regular text-neutral-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Methodology */}
      <section className="bg-background section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">
              Assessment Methodology
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl mx-auto">
              Our analysis combines historical weather data with facility-specific factors to assess location-based risk exposure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-primary group-hover:text-white text-xl font-bold">H</span>
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                    Historical Pattern Analysis
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Analyze 25+ years of NOAA weather data to identify recurring patterns and frequency of extreme events by location.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-primary group-hover:text-white text-xl font-bold">G</span>
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                    Geographic Risk Mapping
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Combine FEMA flood zones, elevation data, and coastal proximity to assess location-specific exposure factors.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-primary group-hover:text-white text-xl font-bold">F</span>
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                    Business-Specific Assessment
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Consider operational type, infrastructure design, and business continuity factors across energy, logistics, manufacturing, agriculture, and construction sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-primary group-hover:text-white text-xl font-bold">I</span>
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                    Industry Impact Correlation
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Reference historical impacts on similar facilities during past weather events like Harvey and Winter Storm Uri.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-primary group-hover:text-white text-xl font-bold">R</span>
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                    Risk Factor Compilation
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Synthesize multiple data sources into a comprehensive risk profile for your specific business location and operational type.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-primary group-hover:text-white text-xl font-bold">D</span>
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                    Documentation & Reporting
                  </h3>
                  <p className="text-body-regular text-neutral-600">
                    Provide detailed analysis with source references and methodology for internal risk management processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-bold text-neutral-800 mb-6">
              Historical Weather Impact Context
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-alert/5 rounded-lg p-6">
                <div className="text-display font-black text-alert mb-2">$125B</div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                  Hurricane Harvey (2017)
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Total economic losses across Texas industries, demonstrating the scale of weather risk exposure
                </p>
                <div className="mt-4 relative h-32 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/wpKxAP_VI7C65PQLbd12J.png"
                    alt="Dégâts d'inondation dans un entrepôt après l'ouragan Harvey, montrant l'impact sur les opérations logistiques"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alert/20 to-transparent"></div>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-display font-black text-primary mb-2">26%</div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                  Winter Storm Uri (2021)
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Percentage of US refining capacity offline during extreme freeze event
                </p>
              </div>
              
              <div className="bg-success/5 rounded-lg p-6">
                <div className="text-display font-black text-success mb-2">25+</div>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-2 font-secondary">
                  Years of Data Available
                </h3>
                <p className="text-body-regular text-neutral-600">
                  Historical weather records from NOAA for pattern analysis and risk assessment
                </p>
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
              Understand your location-specific weather exposure through historical data analysis and risk factor assessment across all major Texas business sectors.
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
                href={CTA_BUTTONS.secondary.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                {CTA_BUTTONS.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Weather Risk Assessment Information"
        size="lg"
      >
        <div className="space-y-6">
          <div className="bg-background rounded-lg p-6">
            <h3 className="text-h3 font-semibold text-neutral-800 mb-4 font-secondary">
              Assessment Process Overview
            </h3>
            <p className="text-body-regular text-neutral-600 mb-6">
              Our weather risk assessment analyzes historical data patterns and geographical factors to evaluate business-specific exposure to extreme weather events across all major Texas sectors.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-neutral-800 mb-2">Data Collection</h4>
                <p className="text-body-regular text-neutral-600">
                  Gather business coordinates, operational details, industry type, and relevant geographical information
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-neutral-800 mb-2">Historical Analysis</h4>
                <p className="text-body-regular text-neutral-600">
                  Review NOAA weather data, hurricane tracks, and flood zone mapping for your location
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-neutral-800 mb-2">Risk Profile</h4>
                <p className="text-body-regular text-neutral-600">
                  Compile comprehensive assessment with source references and methodology documentation
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href={CTA_BUTTONS.primary.href}
              variant="primary"
              size="lg"
              className="flex-1"
            >
              Request Assessment
            </Button>
            <Button
              href={CTA_BUTTONS.secondary.href}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
