import type { Metadata } from 'next';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Sentinel Shield Privacy Policy - Learn how we protect and handle your personal information.',
  openGraph: {
    title: 'Privacy Policy | Sentinel Shield',
    description: 'Learn how Sentinel Shield protects and handles your personal information.',
    url: `${SITE_CONFIG.url}/legal/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-8">
              Privacy Policy
            </h1>
            
            <div className="text-body-small text-neutral-600 mb-8">
              Last updated: January 9, 2025
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Introduction
                </h2>
                <p className="text-body-regular text-neutral-600">
                  Sentinel Shield ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website {SITE_CONFIG.url} or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Information We Collect
                </h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">
                  Personal Information
                </h3>
                <p className="text-body-regular text-neutral-600 mb-4">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Name and contact information (email, address)</li>
                  <li>Company information (name, industry, size)</li>
                  <li>Professional details (job title, department)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  We use your personal information to:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Provide and improve our climate intelligence services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you relevant updates about our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect the security and integrity of our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Information Sharing
                </h2>
                <p className="text-body-regular text-neutral-600">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Data Security
                </h2>
                <p className="text-body-regular text-neutral-600">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Your Rights
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Contact Us
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-background rounded-lg p-6">
                  <p className="text-body-regular text-neutral-600">
                    <strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:text-primary-700">{CONTACT_INFO.email}</a>
                  </p>

                  <p className="text-body-regular text-neutral-600">
                    <strong>Address:</strong><br />
                    {CONTACT_INFO.address.street}<br />
                    {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city}<br />
                    {CONTACT_INFO.address.country}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-body-regular text-neutral-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 