import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Legal Information',
  description:
    'Legal information for climaterisknow.com by BP Les Cannisses KFT – company, compliance, licensing, data protection, and contact details.',
  openGraph: {
    title: 'Legal Information | Sentinel Shield',
    description:
      'Legal information for climaterisknow.com by BP Les Cannisses KFT – company, compliance, licensing, data protection, and contact details.',
    url: `${SITE_CONFIG.url}/legal/legal-information`,
  },
};

export default function LegalInformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-4">Legal Information</h1>
            <div className="text-body-small text-neutral-600 mb-8">
              <strong>Last Updated:</strong> August 8, 2025
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Company Information</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Legal Entity</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>Company Name:</strong> BP Les Cannisses KFT<br />
                  <strong>Legal Form:</strong> Korlátolt Felelősségű Társaság (Limited Liability Company)<br />
                  <strong>Country of Incorporation:</strong> Hungary<br />
                  <strong>Company Registration Number:</strong> Cg.01-09-420052
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Tax Information</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>VAT Number:</strong> HU32359815<br />
                  <strong>EU VAT Number:</strong> HU32359815<br />
                  <strong>Tax Registration Number:</strong> 32359815142
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Registered Address</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A<br />
                  <strong>City:</strong> Budapest<br />
                  <strong>Postal Code:</strong> 1077<br />
                  <strong>Country:</strong> Hungary
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Management</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>Chief Executive Officer:</strong> Baptiste Piocelle<br />
                  <strong>Email:</strong> <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a>
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Website Information</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Domain</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>Website:</strong> {SITE_CONFIG.domain}<br />
                  <strong>Purpose:</strong> Educational platform for climate risk information and insurance lead generation
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Hosting Information</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>Website hosted by:</strong> [Hosting Provider Name]<br />
                  <strong>Server Location:</strong> [Server Location]
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Business Activities</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Primary Activities</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Provides information about climate risks and insurance solutions</li>
                  <li>Offers educational tools and risk assessment questionnaires</li>
                  <li>Connects users with licensed insurance providers</li>
                  <li>Generates leads for insurance companies and brokers</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Target Market</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Businesses in Texas, United States</li>
                  <li>Companies seeking climate risk insurance solutions</li>
                  <li>Organizations interested in climate risk education</li>
                  <li>Insurance professionals and brokers</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Business Model</h3>
                <p className="text-body-regular text-neutral-600">We operate as a lead generation service, connecting potential customers with licensed insurance providers. We may receive compensation from insurance providers for successful referrals.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Regulatory Compliance</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">United States Compliance</h3>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2">Federal Regulations</h4>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li><strong>Federal Trade Commission (FTC) Act:</strong> Truth in advertising and fair business practices</li>
                  <li><strong>Telephone Consumer Protection Act (TCPA):</strong> Telemarketing and text messaging regulations</li>
                  <li><strong>CAN-SPAM Act:</strong> Email marketing compliance</li>
                  <li><strong>Fair Credit Reporting Act (FCRA):</strong> Consumer reporting and data accuracy</li>
                </ul>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2 mt-4">Texas State Regulations</h4>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li><strong>Texas Data Privacy and Security Act (TDPSA):</strong> Data protection and privacy rights</li>
                  <li><strong>Texas Business and Commerce Code Chapter 304:</strong> Telemarketing regulations</li>
                  <li><strong>Texas Insurance Code:</strong> Insurance advertising and lead generation rules</li>
                  <li><strong>Texas Deceptive Trade Practices Act:</strong> Consumer protection</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">European Union Compliance</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li><strong>General Data Protection Regulation (GDPR):</strong> Data protection and privacy</li>
                  <li><strong>ePrivacy Directive:</strong> Electronic communications privacy</li>
                  <li><strong>Consumer Rights Directive:</strong> Consumer protection in distance contracts</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Industry-Specific Compliance</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li><strong>Insurance Regulations:</strong> We work only with licensed insurance providers</li>
                  <li><strong>Lead Generation Standards:</strong> Compliance with industry best practices</li>
                  <li><strong>Data Broker Regulations:</strong> Where applicable in various jurisdictions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Licensing and Authorizations</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Company Licensing</h3>
                <p className="text-body-regular text-neutral-600">BP Les Cannisses KFT is properly registered and authorized to conduct business in Hungary and internationally.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Insurance Disclaimer</h3>
                <p className="text-body-regular text-neutral-600"><strong>Important Notice:</strong> BP Les Cannisses KFT is not licensed as an insurance company, insurance broker, or insurance agent in any jurisdiction. We do not: sell insurance products; provide insurance advice; underwrite insurance policies; act as an insurance intermediary.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Partner Licensing</h3>
                <p className="text-body-regular text-neutral-600">We work exclusively with insurance providers who represent that they are properly licensed in their respective jurisdictions. However, we recommend that users independently verify the licensing status of any insurance provider before entering into agreements.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Data Protection and Privacy</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Data Controller Information</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>Data Controller:</strong> BP Les Cannisses KFT<br />
                  <strong>Contact for Data Protection:</strong> <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a><br />
                  <strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Data Protection Officer</h3>
                <p className="text-body-regular text-neutral-600">For data protection inquiries, please contact: <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a></p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Privacy Rights</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Right to access personal data</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to delete personal data</li>
                  <li>Right to opt-out of data processing</li>
                  <li>Right to data portability</li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">For detailed information, please see our Privacy Policy.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Intellectual Property</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Trademarks</h3>
                <p className="text-body-regular text-neutral-600">"ClimateRiskNow" is a trademark of BP Les Cannisses KFT. All logos and brand elements are proprietary to BP Les Cannisses KFT.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Copyrights</h3>
                <p className="text-body-regular text-neutral-600">All content on {SITE_CONFIG.domain} is protected by copyright and owned by BP Les Cannisses KFT unless otherwise indicated.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Third-Party Rights</h3>
                <p className="text-body-regular text-neutral-600">We respect the intellectual property rights of others and expect users to do the same.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Dispute Resolution</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Governing Law</h3>
                <p className="text-body-regular text-neutral-600">This website and our services are governed by the laws of Hungary.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Jurisdiction</h3>
                <p className="text-body-regular text-neutral-600">Any disputes arising from the use of our website or services shall be subject to the exclusive jurisdiction of the courts of Hungary.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Alternative Dispute Resolution</h3>
                <p className="text-body-regular text-neutral-600">We are committed to resolving disputes amicably and encourage users to contact us directly before pursuing legal action.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Professional Standards</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Ethical Business Practices</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Honest and transparent business practices</li>
                  <li>Compliance with all applicable laws and regulations</li>
                  <li>Respect for user privacy and data protection</li>
                  <li>Fair treatment of all users and partners</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Industry Associations</h3>
                <p className="text-body-regular text-neutral-600">We may be members of relevant industry associations and adhere to their codes of conduct.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Contact Information</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">General Inquiries</h3>
                <p className="text-body-regular text-neutral-600"><strong>Email:</strong> <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a><br /><strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Legal Matters</h3>
                <p className="text-body-regular text-neutral-600">For legal inquiries, compliance questions, or regulatory matters: <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a></p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Privacy and Data Protection</h3>
                <p className="text-body-regular text-neutral-600">For privacy-related inquiries or to exercise your data protection rights: <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a></p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Business Hours</h3>
                <p className="text-body-regular text-neutral-600"><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM (Central European Time)<br /><strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Regulatory Authorities</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">United States</h3>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2">Federal Level</h4>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Federal Trade Commission (FTC):</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer">https://www.ftc.gov/</a>
                  </li>
                  <li>
                    <strong>Federal Communications Commission (FCC):</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://www.fcc.gov/" target="_blank" rel="noopener noreferrer">https://www.fcc.gov/</a>
                  </li>
                </ul>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2 mt-4">Texas State Level</h4>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Texas Attorney General:</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://www.texasattorneygeneral.gov/" target="_blank" rel="noopener noreferrer">https://www.texasattorneygeneral.gov/</a>
                  </li>
                  <li>
                    <strong>Texas Department of Insurance:</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://www.tdi.texas.gov/" target="_blank" rel="noopener noreferrer">https://www.tdi.texas.gov/</a>
                  </li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">European Union</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Hungarian Data Protection Authority (NAIH):</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://www.naih.hu/" target="_blank" rel="noopener noreferrer">https://www.naih.hu/</a>
                  </li>
                  <li>
                    <strong>European Data Protection Board:</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://edpb.europa.eu/" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Updates and Changes</h2>
                <p className="text-body-regular text-neutral-600">This legal information page is updated regularly to reflect changes in our business, regulatory requirements, or legal obligations. The "Last Updated" date at the top of this page indicates when it was last revised. Users are encouraged to review this information periodically to stay informed about our legal status and compliance measures.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Verification</h2>
                <p className="text-body-regular text-neutral-600">The information provided on this page is accurate as of the last updated date. For verification of our company registration or legal status, you may contact the relevant Hungarian authorities or request official documentation from us.</p>
              </div>

              <div>
                <p className="text-body-regular text-neutral-600 italic">This legal information is provided in compliance with applicable disclosure requirements and is effective as of August 8, 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

