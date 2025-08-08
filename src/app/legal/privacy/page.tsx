import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'BP Les Cannisses KFT Privacy Policy for climaterisknow.com - how we collect, use, disclose, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Sentinel Shield',
    description:
      'BP Les Cannisses KFT Privacy Policy for climaterisknow.com - how we collect, use, disclose, and protect your personal information.',
    url: `${SITE_CONFIG.url}/legal/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-4">Privacy Policy</h1>
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
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Introduction</h2>
                <p className="text-body-regular text-neutral-600">
                  BP Les Cannisses KFT ("we," "us," "our," or "Company") operates the
                  website {SITE_CONFIG.domain} (the "Site") to provide educational
                  information about climate risk and insurance solutions. This Privacy
                  Policy explains how we collect, use, disclose, and protect your personal
                  information when you visit our Site or interact with our services.
                </p>
                <p className="text-body-regular text-neutral-600">
                  This Privacy Policy is designed to comply with applicable privacy laws,
                  including the Texas Data Privacy and Security Act (TDPSA), the California
                  Consumer Privacy Act (CCPA), and other relevant federal and state privacy
                  regulations.
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
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Information We Collect</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Personal Information You Provide</h3>
                <p className="text-body-regular text-neutral-600 mb-4">
                  When you interact with our Site, we may collect the following types of
                  personal information that you voluntarily provide:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Contact Information:</strong> Name, email address, phone number,
                    company name, job title
                  </li>
                  <li>
                    <strong>Demographic Information:</strong> Location, industry, company size
                  </li>
                  <li>
                    <strong>Professional Information:</strong> Business needs, insurance
                    requirements, risk assessment preferences
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Messages, inquiries, and feedback you
                    send to us
                  </li>
                  <li>
                    <strong>Survey and Quiz Responses:</strong> Information you provide when
                    completing educational assessments or questionnaires
                  </li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Information Automatically Collected</h3>
                <p className="text-body-regular text-neutral-600 mb-4">
                  When you visit our Site, we automatically collect certain information
                  through cookies and similar technologies:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Device Information:</strong> IP address, browser type, operating
                    system, device identifiers
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Pages visited, time spent on pages,
                    click-through rates, referral sources
                  </li>
                  <li>
                    <strong>Location Data:</strong> General geographic location based on IP
                    address
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Screen resolution, language preferences,
                    time zone
                  </li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Information from Third Parties</h3>
                <p className="text-body-regular text-neutral-600 mb-4">
                  We may receive information about you from third-party sources, including:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Business Partners:</strong> Information from our authorized
                    partners and affiliates
                  </li>
                  <li>
                    <strong>Public Databases:</strong> Publicly available business information
                  </li>
                  <li>
                    <strong>Social Media Platforms:</strong> Information from social media
                    platforms when you interact with our content
                  </li>
                  <li>
                    <strong>Data Providers:</strong> Information from legitimate data providers
                    for business purposes
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">How We Use Your Information</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Educational Services</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Providing climate risk education and information</li>
                  <li>Delivering personalized content and recommendations</li>
                  <li>Conducting risk assessments and educational surveys</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Business Operations</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Processing inquiries and responding to communications</li>
                  <li>Improving our Site and services</li>
                  <li>Conducting research and analytics</li>
                  <li>Ensuring security and preventing fraud</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Marketing and Communications</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Sending educational newsletters and updates</li>
                  <li>Providing information about relevant insurance solutions</li>
                  <li>Conducting market research and surveys</li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  <strong>Important Notice Regarding Lead Sharing:</strong> We may share your
                  information with our trusted insurance partners who can provide relevant
                  climate insurance solutions. When we share your information, we ensure that
                  our partners are reputable, licensed insurance providers who can offer
                  valuable services related to your expressed interests.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Legal Basis for Processing (Where Applicable)</h2>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Consent:</strong> When you provide explicit consent for specific
                    processing activities
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> For our business operations,
                    security, and improvement of services
                  </li>
                  <li>
                    <strong>Legal Obligations:</strong> To comply with applicable laws and
                    regulations
                  </li>
                  <li>
                    <strong>Contract Performance:</strong> To fulfill our obligations under any
                    agreements with you
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Information Sharing and Disclosure</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Authorized Partners</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Licensed Insurance Providers:</strong> Reputable insurance
                    companies and brokers who can provide relevant climate insurance solutions
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Trusted partners who help us provide
                    educational services
                  </li>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who assist with our
                    operations (hosting, analytics, customer service)
                  </li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Legal Requirements</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    Comply with legal processes, court orders, or government requests
                  </li>
                  <li>
                    Protect our rights, property, or safety, or that of others
                  </li>
                  <li>Investigate potential violations of our terms of service</li>
                  <li>Respond to claims of illegal activity or infringement</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Business Transfers</h3>
                <p className="text-body-regular text-neutral-600">
                  In the event of a merger, acquisition, or sale of assets, your information
                  may be transferred as part of the business transaction.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Your Privacy Rights</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Rights Under Texas Data Privacy and Security Act (TDPSA)</h3>
                <p className="text-body-regular text-neutral-600 mb-4">
                  If you are a Texas resident, you have the following rights:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Right to Know:</strong> Request information about the personal
                    data we process about you
                  </li>
                  <li>
                    <strong>Right to Correct:</strong> Request correction of inaccurate personal
                    data
                  </li>
                  <li>
                    <strong>Right to Delete:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Right to Opt-Out:</strong> Opt out of the processing of personal
                    data for:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Targeted advertising</li>
                      <li>Sale of personal data</li>
                      <li>
                        Profiling for decisions regarding financial and lending services,
                        insurance, housing, or health care services
                      </li>
                    </ul>
                  </li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Rights Under Other State Laws</h3>
                <p className="text-body-regular text-neutral-600 mb-4">
                  Depending on your location, you may have additional rights under state
                  privacy laws, including the right to:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Opt out of the sale of personal information</li>
                  <li>Non-discrimination for exercising your privacy rights</li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">How to Exercise Your Rights</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Email us at:</strong> <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a>
                  </li>
                  <li>
                    <strong>Contact us through our website contact form</strong>
                  </li>
                  <li>
                    <strong>Mail us at:</strong> 1077 Budapest, Rózsa utca 38/A
                  </li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  We will respond to your request within 45 days, with the possibility of a
                  45-day extension if necessary. We may require verification of your identity
                  before processing your request.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Opt-Out and Unsubscribe</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Email Communications</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Clicking the "unsubscribe" link in any marketing email</li>
                  <li>Contacting us directly at <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a></li>
                  <li>Updating your preferences through your account settings (if applicable)</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Text Messages</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Replying "STOP" to any text message</li>
                  <li>Contacting us directly at <a href="mailto:baptiste@bpcorp.eu">baptiste@bpcorp.eu</a></li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  We will process opt-out requests within 10 business days as required by
                  applicable law.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Cookies and Tracking</h3>
                <p className="text-body-regular text-neutral-600">
                  You can control cookies through your browser settings. Please note that
                  disabling cookies may affect the functionality of our Site.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Data Security</h2>
                <p className="text-body-regular text-neutral-600">
                  We implement appropriate technical and organizational measures to protect
                  your personal information against unauthorized access, alteration,
                  disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Encryption:</strong> Data encryption in transit and at rest
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Limited access to personal information on
                    a need-to-know basis
                  </li>
                  <li>
                    <strong>Security Monitoring:</strong> Regular monitoring for security
                    threats and vulnerabilities
                  </li>
                  <li>
                    <strong>Employee Training:</strong> Regular training on data protection and
                    security practices
                  </li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  However, no method of transmission over the internet or electronic storage
                  is 100% secure. While we strive to protect your personal information, we
                  cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Data Retention</h2>
                <p className="text-body-regular text-neutral-600">
                  We retain your personal information for as long as necessary to fulfill the
                  purposes outlined in this Privacy Policy, unless a longer retention period is
                  required or permitted by law. Factors that influence our retention periods
                  include:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>The nature of the information collected</li>
                  <li>The purposes for which the information is processed</li>
                  <li>Legal and regulatory requirements</li>
                  <li>Our legitimate business interests</li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  When we no longer need your personal information, we will securely delete or
                  anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">International Data Transfers</h2>
                <p className="text-body-regular text-neutral-600">
                  As we are based in Hungary and operate internationally, your personal
                  information may be transferred to and processed in countries outside your
                  residence. We ensure that such transfers comply with applicable data
                  protection laws and implement appropriate safeguards to protect your
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Children's Privacy</h2>
                <p className="text-body-regular text-neutral-600">
                  Our Site is not intended for children under the age of 18. We do not
                  knowingly collect personal information from children under 18. If we become
                  aware that we have collected personal information from a child under 18, we
                  will take steps to delete such information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Third-Party Links</h2>
                <p className="text-body-regular text-neutral-600">
                  Our Site may contain links to third-party websites or services. This Privacy
                  Policy does not apply to those third-party sites. We encourage you to review
                  the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-body-regular text-neutral-600">
                  We may update this Privacy Policy from time to time to reflect changes in
                  our practices, technology, legal requirements, or other factors. We will
                  notify you of material changes by:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Posting the updated Privacy Policy on our Site</li>
                  <li>Sending you an email notification (if you have provided your email address)</li>
                  <li>Providing notice through our Site or other appropriate means</li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  The "Last Updated" date at the top of this Privacy Policy indicates when it
                  was last revised.
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
                <p className="text-body-regular text-neutral-600 mt-4">
                  For residents of Texas, if you are not satisfied with our response to your
                  privacy request, you may submit a complaint to the Texas Attorney General.
                </p>
              </div>

              <div>
                <p className="text-body-regular text-neutral-600 italic">
                  This Privacy Policy is effective as of August 8, 2025 and applies to all
                  information collected by BP Les Cannisses KFT through the {SITE_CONFIG.domain}
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}