import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for climaterisknow.com by BP Les Cannisses KFT – your agreement when using our educational climate risk and insurance information platform.',
  openGraph: {
    title: 'Terms of Service | Sentinel Shield',
    description:
      'Terms of Service for climaterisknow.com by BP Les Cannisses KFT – your agreement when using our educational climate risk and insurance information platform.',
    url: `${SITE_CONFIG.url}/legal/terms`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-4">Terms of Service</h1>

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
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Agreement to Terms</h2>
                <p className="text-body-regular text-neutral-600">
                  By accessing or using the {SITE_CONFIG.domain} website (the "Site"), you
                  agree to be bound by these Terms of Service ("Terms"). If you do not agree
                  to these Terms, please do not use our Site.
                </p>
                <p className="text-body-regular text-neutral-600">
                  These Terms constitute a legally binding agreement between you and BP Les
                  Cannisses KFT ("we," "us," "our," or "Company"), a company incorporated in
                  Hungary.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Company Information</h2>
                <p className="text-body-regular text-neutral-600">
                  <strong>Company Name:</strong> BP Les Cannisses KFT<br />
                  <strong>CEO:</strong> Baptiste Piocelle<br />
                  <strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A<br />
                  <strong>VAT Number:</strong> HU32359815<br />
                  <strong>Company Registration Number:</strong> Cg.01-09-420052<br />
                  <strong>Email:</strong> <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a>
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Description of Service</h2>
                <p className="text-body-regular text-neutral-600">
                  ClimateRiskNow is an educational platform that provides information and
                  resources about climate risk assessment and insurance solutions. Our services
                  include:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Educational Content:</strong> Information about climate risks,
                    insurance options, and risk management strategies
                  </li>
                  <li>
                    <strong>Risk Assessment Tools:</strong> Interactive tools and
                    questionnaires to help evaluate climate-related risks
                  </li>
                  <li>
                    <strong>Information Sharing:</strong> Connecting users with relevant
                    insurance providers and risk management solutions
                  </li>
                  <li>
                    <strong>Research and Analysis:</strong> Providing insights and data about
                    climate risk trends and insurance markets
                  </li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  <strong>Important Notice:</strong> We are an educational and information
                  platform. We do not directly provide insurance services, underwrite policies,
                  or act as an insurance broker. We may connect you with licensed insurance
                  providers who can offer relevant services.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Eligibility and User Requirements</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Age Requirement</h3>
                <p className="text-body-regular text-neutral-600">
                  You must be at least 18 years old to use our Site. By using our Site, you
                  represent and warrant that you are at least 18 years old.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Business Use</h3>
                <p className="text-body-regular text-neutral-600">
                  Our Site is primarily intended for business and professional use. If you are
                  using our Site on behalf of a company or organization, you represent that you
                  have the authority to bind that entity to these Terms.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Compliance with Laws</h3>
                <p className="text-body-regular text-neutral-600">
                  You agree to use our Site in compliance with all applicable federal, state,
                  and local laws and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Acceptable Use</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Permitted Uses</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Accessing educational content about climate risk and insurance</li>
                  <li>Completing risk assessment tools and questionnaires</li>
                  <li>Requesting to be connected with licensed insurance providers</li>
                  <li>Communicating with our team about our educational services</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Prohibited Uses</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>Violating any international, federal, state, or local law or regulation</li>
                  <li>
                    Transmitting or procuring the sending of any advertising or promotional
                    material without our prior written consent
                  </li>
                  <li>
                    Impersonating or attempting to impersonate the Company, a Company
                    employee, another user, or any other person or entity
                  </li>
                  <li>
                    Engaging in any other conduct that restricts or inhibits anyone's use or
                    enjoyment of the Site
                  </li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Content Restrictions</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    Upload, post, or transmit any content that is illegal, harmful,
                    threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise
                    objectionable
                  </li>
                  <li>
                    Use the Site to transmit any material that contains viruses, malware, or
                    other harmful computer code
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any portion of the Site or any
                    other systems or networks connected to the Site
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Information Collection and Sharing</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Data Collection</h3>
                <p className="text-body-regular text-neutral-600">
                  By using our Site, you acknowledge and agree that we collect information as
                  described in our Privacy Policy. This may include:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Personal and business contact information</li>
                  <li>Information about your insurance needs and risk profile</li>
                  <li>Usage data and analytics information</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Information Sharing with Partners</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>Important Disclosure:</strong> We may share your information with
                  licensed insurance providers and business partners who can offer relevant
                  climate insurance solutions. By using our Site and providing your
                  information, you consent to this sharing for the purpose of receiving
                  relevant insurance information and services.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Lead Generation Services</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Your information may be shared with relevant insurance providers</li>
                  <li>These providers may contact you to discuss insurance solutions</li>
                  <li>We may receive compensation from these providers for successful referrals</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Intellectual Property Rights</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Our Content</h3>
                <p className="text-body-regular text-neutral-600">
                  The Site and its original content, features, and functionality are owned by
                  BP Les Cannisses KFT and are protected by international copyright,
                  trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">User Content</h3>
                <p className="text-body-regular text-neutral-600">
                  By submitting content to our Site, you grant us a non-exclusive,
                  royalty-free, perpetual, irrevocable, and fully sublicensable right to use,
                  reproduce, modify, adapt, publish, translate, create derivative works from,
                  distribute, and display such content throughout the world in any media.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Trademarks</h3>
                <p className="text-body-regular text-neutral-600">
                  "ClimateRiskNow" and other marks indicated on our Site are trademarks of BP
                  Les Cannisses KFT. You may not use these trademarks without our prior
                  written permission.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Third-Party Services and Links</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Insurance Providers</h3>
                <p className="text-body-regular text-neutral-600">
                  We may connect you with third-party insurance providers. These providers are
                  independent entities, and we do not control their services, policies, or
                  practices. Your interactions with these providers are governed by their own
                  terms and conditions.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">External Links</h3>
                <p className="text-body-regular text-neutral-600">
                  Our Site may contain links to third-party websites or services. We are not
                  responsible for the content, privacy policies, or practices of these
                  third-party sites.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">No Endorsement</h3>
                <p className="text-body-regular text-neutral-600">
                  The inclusion of any link does not imply endorsement by us of the site or
                  any association with its operators.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Disclaimers and Limitations</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Educational Purpose</h3>
                <p className="text-body-regular text-neutral-600">
                  The information provided on our Site is for educational and informational
                  purposes only. It should not be considered as professional advice, including
                  but not limited to insurance, legal, financial, or business advice.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">No Insurance Services</h3>
                <p className="text-body-regular text-neutral-600">
                  We do not provide insurance services, underwrite policies, or act as an
                  insurance broker. We are not licensed to sell insurance in any jurisdiction.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Accuracy of Information</h3>
                <p className="text-body-regular text-neutral-600">
                  While we strive to provide accurate and up-to-date information, we make no
                  representations or warranties about the accuracy, completeness, or
                  suitability of the information on our Site.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Third-Party Actions</h3>
                <p className="text-body-regular text-neutral-600">
                  We are not responsible for the actions, services, or policies of third-party
                  insurance providers or other partners. Any agreements you enter into with
                  these parties are solely between you and them.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Limitation of Liability</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">General Limitation</h3>
                <p className="text-body-regular text-neutral-600">
                  <strong>
                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW: IN NO EVENT SHALL BP
                    LES CANNISSES KFT, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
                    FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                    INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR
                    OTHER INTANGIBLE LOSSES.
                  </strong>
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Maximum Liability</h3>
                <p className="text-body-regular text-neutral-600">
                  OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION
                  SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID US IN THE TWELVE (12) MONTHS PRIOR
                  TO THE EVENT GIVING RISE TO LIABILITY.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">State Law Variations</h3>
                <p className="text-body-regular text-neutral-600">
                  Some jurisdictions do not allow the exclusion or limitation of incidental or
                  consequential damages, so the above limitation may not apply to you.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Indemnification</h2>
                <p className="text-body-regular text-neutral-600">
                  You agree to defend, indemnify, and hold harmless BP Les Cannisses KFT and
                  its officers, directors, employees, and agents from and against any claims,
                  liabilities, damages, judgments, awards, losses, costs, expenses, or fees
                  arising out of or relating to your violation of these Terms or your use of
                  the Site.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Termination</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Termination by Us</h3>
                <p className="text-body-regular text-neutral-600">
                  We may terminate or suspend your access to our Site immediately, without
                  prior notice or liability, for any reason whatsoever, including without
                  limitation if you breach the Terms.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Termination by You</h3>
                <p className="text-body-regular text-neutral-600">
                  You may terminate your use of our Site at any time by simply discontinuing
                  your use of the Site.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Effect of Termination</h3>
                <p className="text-body-regular text-neutral-600">
                  Upon termination, your right to use the Site will cease immediately. The
                  provisions of these Terms that by their nature should survive termination
                  shall survive termination.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Governing Law and Jurisdiction</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Governing Law</h3>
                <p className="text-body-regular text-neutral-600">
                  These Terms shall be governed by and construed in accordance with the laws
                  of Hungary, without regard to its conflict of law provisions.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Jurisdiction</h3>
                <p className="text-body-regular text-neutral-600">
                  Any legal action or proceeding arising under these Terms will be brought
                  exclusively in the courts of Hungary, and you hereby consent to personal
                  jurisdiction and venue therein.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">US Users</h3>
                <p className="text-body-regular text-neutral-600">
                  For users located in the United States, any disputes may also be subject to
                  the laws of the state where you reside, and you may have additional rights
                  under applicable state and federal laws.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Dispute Resolution</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Informal Resolution</h3>
                <p className="text-body-regular text-neutral-600">
                  Before filing a claim against us, you agree to try to resolve the dispute
                  informally by contacting us at <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a>.
                  We will try to resolve the dispute informally by contacting you via email.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Arbitration</h3>
                <p className="text-body-regular text-neutral-600">
                  If we cannot resolve the dispute informally, any dispute arising out of or
                  relating to these Terms or the Site will be resolved through binding
                  arbitration in accordance with the rules of the International Chamber of
                  Commerce.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Class Action Waiver</h3>
                <p className="text-body-regular text-neutral-600">
                  You agree that any arbitration or legal proceeding shall be limited to the
                  dispute between us and you individually. You will not participate in a class
                  action, class arbitration, or other representative action.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Compliance with Laws</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Texas Regulations</h3>
                <p className="text-body-regular text-neutral-600">
                  For users in Texas, we comply with applicable Texas laws, including the
                  Texas Data Privacy and Security Act and Texas telemarketing regulations.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Federal Compliance</h3>
                <p className="text-body-regular text-neutral-600">
                  We comply with applicable federal laws, including the Telephone Consumer
                  Protection Act (TCPA), CAN-SPAM Act, and Federal Trade Commission
                  regulations.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Insurance Regulations</h3>
                <p className="text-body-regular text-neutral-600">
                  We comply with applicable insurance regulations and work only with licensed
                  insurance providers in their respective jurisdictions.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Changes to Terms</h2>
                <p className="text-body-regular text-neutral-600">
                  We reserve the right to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days' notice prior
                  to any new terms taking effect.
                </p>
                <p className="text-body-regular text-neutral-600">
                  Material changes will be communicated through:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Email notification (if you have provided your email address)</li>
                  <li>Prominent notice on our Site</li>
                  <li>Other appropriate means of communication</li>
                </ul>
                <p className="text-body-regular text-neutral-600">
                  Your continued use of the Site after any changes constitutes acceptance of
                  the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Severability</h2>
                <p className="text-body-regular text-neutral-600">
                  If any provision of these Terms is held to be invalid or unenforceable by a
                  court, the remaining provisions of these Terms will remain in effect.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Entire Agreement</h2>
                  <p className="text-body-regular text-neutral-600">
                  These Terms, together with our Privacy Policy and any other legal notices
                  published by us on the Site, constitute the entire agreement between you and
                  us concerning the Site.
                </p>
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
                <p className="text-body-regular text-neutral-600 italic">
                  These Terms of Service are effective as of August 8, 2025 and apply to all
                  users of the {SITE_CONFIG.domain} website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 