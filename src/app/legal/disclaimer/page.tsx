import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Disclaimer for climaterisknow.com by BP Les Cannisses KFT – educational purpose and limitations.',
  openGraph: {
    title: 'Disclaimer | Sentinel Shield',
    description:
      'Disclaimer for climaterisknow.com by BP Les Cannisses KFT – educational purpose and limitations.',
    url: `${SITE_CONFIG.url}/legal/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-4">Disclaimer</h1>
            <div className="text-body-small text-neutral-600 mb-8 space-y-1">
              <div>
                <strong>Effective Date:</strong> August 8, 2025
              </div>
              <div>
                <strong>Last Updated:</strong> August 8, 2025
              </div>
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">General Disclaimer</h2>
                <p className="text-body-regular text-neutral-600">
                  The information provided on {SITE_CONFIG.domain} (the "Site") by BP Les
                  Cannisses KFT ("we," "us," "our," or "Company") is for general
                  informational and educational purposes only. All information on the Site is
                  provided in good faith, however, we make no representation or warranty of any
                  kind, express or implied, regarding the accuracy, adequacy, validity,
                  reliability, availability, or completeness of any information on the Site.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Company Information</h2>
                <p className="text-body-regular text-neutral-600">
                  <strong>Company Name:</strong> BP Les Cannisses KFT<br />
                  <strong>CEO:</strong> Baptiste Piocelle<br />
                  <strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A<br />
                  <strong>VAT Number:</strong> HU32359815<br />
                  <strong>Email:</strong> <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a>
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Educational Purpose Only</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Not Professional Advice</h3>
                <p className="text-body-regular text-neutral-600">The content on our Site is intended for educational and informational purposes only and should not be construed as:</p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Professional insurance advice</li>
                  <li>Legal advice</li>
                  <li>Financial advice</li>
                  <li>Business consulting advice</li>
                  <li>Risk management recommendations</li>
                  <li>Investment advice</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">No Professional Relationship</h3>
                <p className="text-body-regular text-neutral-600">The use of our Site does not create a professional relationship between you and BP Les Cannisses KFT. We are not your insurance advisor, legal counsel, financial advisor, or business consultant.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Seek Professional Advice</h3>
                <p className="text-body-regular text-neutral-600">You should always consult with qualified professionals before making any decisions related to insurance, legal matters, financial planning, or business operations. The information on our Site should not be used as a substitute for professional advice tailored to your specific circumstances.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Insurance-Related Disclaimers</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Not an Insurance Provider</h3>
                <p className="text-body-regular text-neutral-600"><strong>Important Notice:</strong> BP Les Cannisses KFT is not an insurance company, insurance broker, or licensed insurance agent. We do not:</p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Underwrite insurance policies</li>
                  <li>Sell insurance products</li>
                  <li>Provide insurance coverage</li>
                  <li>Act as an insurance intermediary</li>
                  <li>Offer insurance advice or recommendations</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Lead Generation Service</h3>
                <p className="text-body-regular text-neutral-600">Our Site operates as an educational platform and lead generation service. We connect users with licensed insurance providers who may offer relevant climate insurance solutions. Any insurance transactions or relationships are solely between you and the insurance provider.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">No Insurance Guarantees</h3>
                <p className="text-body-regular text-neutral-600">We make no guarantees regarding:</p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>The availability of insurance coverage</li>
                  <li>Insurance policy terms or conditions</li>
                  <li>Premium costs or pricing</li>
                  <li>Claims processing or coverage decisions</li>
                  <li>The quality of service from insurance providers</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Licensed Providers Only</h3>
                <p className="text-body-regular text-neutral-600">We work only with insurance providers who represent that they are properly licensed in their respective jurisdictions. However, we do not independently verify licensing status, and you should confirm that any insurance provider is properly licensed before entering into any agreement.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Risk Assessment Disclaimers</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Educational Tools Only</h3>
                <p className="text-body-regular text-neutral-600">Any risk assessment tools, questionnaires, or calculators on our Site are for educational purposes only and should not be considered as:</p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Professional risk assessments</li>
                  <li>Actuarial analyses</li>
                  <li>Insurance underwriting decisions</li>
                  <li>Definitive risk evaluations</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">No Guarantee of Accuracy</h3>
                <p className="text-body-regular text-neutral-600">Risk assessment results are based on general information and assumptions. Actual risk levels may vary significantly based on factors not captured in our tools. You should obtain professional risk assessments for important business decisions.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Climate Data Limitations</h3>
                <p className="text-body-regular text-neutral-600">Climate risk information is based on available data and models, which may have limitations and uncertainties. Climate patterns and risks can change over time, and past data may not predict future conditions.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Third-Party Information</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">External Sources</h3>
                <p className="text-body-regular text-neutral-600">Our Site may contain information from third-party sources, including:</p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Government agencies</li>
                  <li>Research institutions</li>
                  <li>Industry organizations</li>
                  <li>Insurance companies</li>
                  <li>Data providers</li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">We do not independently verify all third-party information and are not responsible for its accuracy or completeness.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Third-Party Services</h3>
                <p className="text-body-regular text-neutral-600">We may connect you with third-party insurance providers and other service providers. We are not responsible for: the services provided by third parties; the accuracy of third-party information; third-party business practices; third-party compliance with laws and regulations.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Limitation of Liability</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">No Warranties</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</strong>
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>WARRANTIES OF MERCHANTABILITY</li>
                  <li>WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE</li>
                  <li>WARRANTIES OF NON-INFRINGEMENT</li>
                  <li>WARRANTIES OF ACCURACY OR COMPLETENESS</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Limitation of Damages</h3>
                <p className="text-body-regular text-neutral-600">UNDER NO CIRCUMSTANCES SHALL BP LES CANNISSES KFT BE LIABLE FOR ANY: DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES; LOSS OF PROFITS, REVENUE, OR BUSINESS OPPORTUNITIES; BUSINESS INTERRUPTION OR LOSS OF DATA; PERSONAL INJURY OR PROPERTY DAMAGE; DECISIONS MADE BASED ON INFORMATION FROM OUR SITE.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Maximum Liability</h3>
                <p className="text-body-regular text-neutral-600">Our total liability for any claims related to the use of our Site shall not exceed the amount you have paid us, if any, in the twelve (12) months preceding the claim.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Compliance and Regulatory Disclaimers</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Regulatory Compliance</h3>
                <p className="text-body-regular text-neutral-600">While we strive to comply with applicable laws and regulations, including: Texas Data Privacy and Security Act (TDPSA); Federal Trade Commission (FTC) regulations; Telephone Consumer Protection Act (TCPA); State insurance regulations — we make no guarantee that our Site or services comply with all applicable laws in all jurisdictions.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Jurisdictional Limitations</h3>
                <p className="text-body-regular text-neutral-600">Our Site may not be appropriate or available for use in all jurisdictions. If you access our Site from outside the United States, you do so at your own risk and are responsible for compliance with local laws.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Regulatory Changes</h3>
                <p className="text-body-regular text-neutral-600">Laws and regulations regarding insurance, data privacy, and online marketing are subject to change. We are not responsible for ensuring that our Site remains compliant with all future regulatory changes.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Data and Technology Disclaimers</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Technical Issues</h3>
                <p className="text-body-regular text-neutral-600">We do not guarantee that our Site will be: available at all times; free from errors or interruptions; compatible with all devices or browsers; secure from unauthorized access.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Data Accuracy</h3>
                <p className="text-body-regular text-neutral-600">While we strive to maintain accurate information, we do not guarantee that all data on our Site is current, complete, or error-free. Information may become outdated or inaccurate over time.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">System Limitations</h3>
                <p className="text-body-regular text-neutral-600">Our risk assessment tools and calculators have inherent limitations and may not account for all relevant factors. Results should be considered estimates only.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Forward-Looking Statements</h2>
                <p className="text-body-regular text-neutral-600">Our Site may contain forward-looking statements about climate risks, insurance markets, and industry trends. These statements are based on current expectations and assumptions and are subject to risks and uncertainties. Actual results may differ materially from those expressed or implied in forward-looking statements.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Intellectual Property</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Respect for Rights</h3>
                <p className="text-body-regular text-neutral-600">We respect the intellectual property rights of others and expect users to do the same. If you believe that content on our Site infringes your intellectual property rights, please contact us.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">No License</h3>
                <p className="text-body-regular text-neutral-600">Nothing on our Site should be construed as granting any license or right to use any trademark, copyright, or other intellectual property without the express written permission of the owner.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Updates and Changes</h2>
                <p className="text-body-regular text-neutral-600">We reserve the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on our Site. Your continued use of the Site after any changes constitutes acceptance of the updated Disclaimer.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Severability</h2>
                <p className="text-body-regular text-neutral-600">If any provision of this Disclaimer is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Contact Information</h2>
                <p className="text-body-regular text-neutral-600">
                  <strong>BP Les Cannisses KFT</strong><br />
                  <strong>Email:</strong> <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a><br />
                  <strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A<br />
                  <strong>VAT Number:</strong> HU32359815
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Acknowledgment</h2>
                <p className="text-body-regular text-neutral-600">By using our Site, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer. If you do not agree with any part of this Disclaimer, please do not use our Site.</p>
              </div>

              <div>
                <p className="text-body-regular text-neutral-600 italic">
                  This Disclaimer is effective as of August 8, 2025 and applies to all users of
                  the {SITE_CONFIG.domain} website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

