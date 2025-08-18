import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, CTA_BUTTONS } from '@/lib/constants';
import { RESOURCES, FEATURED_RESOURCES, RESOURCE_TYPES, INDUSTRY_RESOURCES } from '@/lib/resources-data';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Comprehensive weather risk assessment resources including guides, checklists, templates, and case studies for Texas business operations across all major sectors.',
  openGraph: {
    title: 'Resources | Sentinel Shield',
    description: 'Comprehensive weather risk assessment resources including guides, checklists, templates, and case studies for Texas business operations.',
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
              Comprehensive guides, checklists, templates, and case studies for Texas business operations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-4">Featured Resources</h2>
            <p className="text-body-large text-neutral-600 mb-12">
              Essential tools and guides for weather risk assessment and emergency preparedness
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FEATURED_RESOURCES.map((resource) => (
                <div key={resource.id} className="card hover:shadow-card-hover transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">
                        {RESOURCE_TYPES.find(t => t.id === resource.type)?.icon || '📄'}
                      </span>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-body-small font-medium rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <span className="text-body-small text-neutral-500">
                      {resource.fileSize}
                    </span>
                  </div>
                  
                  <h3 className="text-h3 font-semibold text-neutral-800 mb-3 font-secondary">
                    {resource.title}
                  </h3>
                  
                  <p className="text-body-regular text-neutral-600 mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-body-small text-neutral-500">
                        Updated: {new Date(resource.lastUpdated).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="text-body-small text-neutral-500 capitalize">
                        {resource.type.replace('-', ' ')}
                      </span>
                    </div>
                    <Button
                      href={resource.downloadUrl || '#'}
                      variant="primary"
                      size="sm"
                      className="text-xs"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Types */}
          <div className="mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-12">Browse by Resource Type</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {RESOURCE_TYPES.map((type) => (
                <div key={type.id} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 hover:bg-primary/20 transition-colors cursor-pointer">
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <h3 className="text-body-regular font-semibold text-neutral-800 mb-1">
                    {type.label}
                  </h3>
                  <p className="text-body-small text-neutral-600">
                    {RESOURCES.filter(r => r.type === type.id).length} resources
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry-Specific Resources */}
          <div className="mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-12">Industry-Specific Resources</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">⚡</span>
                  </div>
                  <h3 className="text-h3 font-semibold text-neutral-800 font-secondary">
                    Energy Sector
                  </h3>
                </div>
                <p className="text-body-regular text-neutral-600 mb-4">
                  Resources specifically for refineries, petrochemical facilities, and energy infrastructure.
                </p>
                <div className="space-y-2">
                  {INDUSTRY_RESOURCES.energy.slice(0, 3).map((resource) => (
                    <div key={resource.id} className="flex justify-between items-center">
                      <span className="text-body-small text-neutral-600 truncate">{resource.title}</span>
                      <Button href={resource.downloadUrl || '#'} variant="outline" size="sm" className="text-xs ml-2">
                        Get
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-secondary font-bold text-lg">🏭</span>
                  </div>
                  <h3 className="text-h3 font-semibold text-neutral-800 font-secondary">
                    Manufacturing
                  </h3>
                </div>
                <p className="text-body-regular text-neutral-600 mb-4">
                  Safety protocols and preparedness guides for manufacturing operations.
                </p>
                <div className="space-y-2">
                  {INDUSTRY_RESOURCES.manufacturing.slice(0, 3).map((resource) => (
                    <div key={resource.id} className="flex justify-between items-center">
                      <span className="text-body-small text-neutral-600 truncate">{resource.title}</span>
                      <Button href={resource.downloadUrl || '#'} variant="outline" size="sm" className="text-xs ml-2">
                        Get
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-alert/10 rounded-lg flex items-center justify-center">
                    <span className="text-alert font-bold text-lg">🚛</span>
                  </div>
                  <h3 className="text-h3 font-semibold text-neutral-800 font-secondary">
                    Logistics
                  </h3>
                </div>
                <p className="text-body-regular text-neutral-600 mb-4">
                  Supply chain resilience and continuity planning resources.
                </p>
                <div className="space-y-2">
                  {INDUSTRY_RESOURCES.logistics.slice(0, 3).map((resource) => (
                    <div key={resource.id} className="flex justify-between items-center">
                      <span className="text-body-small text-neutral-600 truncate">{resource.title}</span>
                      <Button href={resource.downloadUrl || '#'} variant="outline" size="sm" className="text-xs ml-2">
                        Get
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All Resources */}
          <div className="mb-16">
            <h2 className="text-h2 font-bold text-neutral-800 mb-12">All Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCES.map((resource) => (
                <div key={resource.id} className="card hover:shadow-card-hover transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {RESOURCE_TYPES.find(t => t.id === resource.type)?.icon || '📄'}
                      </span>
                      <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                        {resource.category}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">
                      {resource.fileSize}
                    </span>
                  </div>
                  
                  <h3 className="text-body-large font-semibold text-neutral-800 mb-2 leading-tight">
                    {resource.title}
                  </h3>
                  
                  <p className="text-body-small text-neutral-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {new Date(resource.lastUpdated).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <Button
                      href={resource.downloadUrl || '#'}
                      variant="primary"
                      size="sm"
                      className="text-xs"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sources Reference */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-h3 font-semibold text-neutral-800 mb-6 font-secondary">
              Data Sources Referenced in Our Resources
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-lg">NOAA</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">Weather Data</p>
                  <p className="text-body-small text-neutral-600">25+ years historical records</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-lg">FEMA</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">Flood Zones</p>
                  <p className="text-body-small text-neutral-600">Complete Texas coverage</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-lg">NHC</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">Hurricane Data</p>
                  <p className="text-body-small text-neutral-600">5K+ storm tracks</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-lg">EIA</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">Energy Data</p>
                  <p className="text-body-small text-neutral-600">Infrastructure database</p>
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
              Need Custom Weather Risk Assessment?
            </h2>
            <p className="text-body-large text-primary-100 mb-8">
              Get facility-specific analysis tailored to your operations and location-based risk factors.
            </p>
            <Button
              href={CTA_BUTTONS.primary.href}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100"
            >
              {CTA_BUTTONS.primary.text}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 