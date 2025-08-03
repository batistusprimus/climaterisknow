import type { Metadata } from 'next';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Sentinel Shield Terms of Service - Terms and conditions for using our climate intelligence services.',
  openGraph: {
    title: 'Terms of Service | Sentinel Shield',
    description: 'Terms and conditions for using Sentinel Shield climate intelligence services.',
    url: `${SITE_CONFIG.url}/legal/terms`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-8">
              Terms of Service
            </h1>
            
            <div className="text-body-small text-neutral-600 mb-8">
              Last updated: January 9, 2025
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-body-regular text-neutral-600">
                  By accessing and using Sentinel Shield's services and website ({SITE_CONFIG.url}), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Service Description
                </h2>
                <p className="text-body-regular text-neutral-600">
                  Sentinel Shield provides climate intelligence and risk assessment services designed to help Texas enterprises understand, prepare for, and mitigate the financial impact of natural disasters and climate events.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  User Responsibilities
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  Users of our services agree to:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Provide accurate and current information</li>
                  <li>Use services only for lawful business purposes</li>
                  <li>Maintain the confidentiality of account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Service Limitations
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  While we strive for accuracy, please note:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Climate predictions are based on statistical models and historical data</li>
                  <li>No prediction system is 100% accurate</li>
                  <li>Our services provide intelligence to aid decision-making, not absolute certainty</li>
                  <li>Users should use multiple sources when making critical business decisions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-body-regular text-neutral-600">
                  All content, features, and functionality of our services are owned by Sentinel Shield and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-body-regular text-neutral-600">
                  Sentinel Shield shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Termination
                </h2>
                <p className="text-body-regular text-neutral-600">
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-background rounded-lg p-6">
                  <p className="text-body-regular text-neutral-600">
                    <strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:text-primary-700">{CONTACT_INFO.email}</a>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 