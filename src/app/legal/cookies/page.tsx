import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Cookie Policy for climaterisknow.com by BP Les Cannisses KFT – how we use cookies and similar technologies.',
  openGraph: {
    title: 'Cookie Policy | Sentinel Shield',
    description:
      'Cookie Policy for climaterisknow.com by BP Les Cannisses KFT – how we use cookies and similar technologies.',
    url: `${SITE_CONFIG.url}/legal/cookies`,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-4">Cookie Policy</h1>
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
                  This Cookie Policy explains how BP Les Cannisses KFT ("we," "us," "our," or
                  "Company") uses cookies and similar technologies on the {SITE_CONFIG.domain}
                  website (the "Site"). This policy should be read together with our Privacy
                  Policy and Terms of Service.
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
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">What Are Cookies</h2>
                <p className="text-body-regular text-neutral-600">
                  Cookies are small text files that are placed on your device (computer,
                  smartphone, tablet) when you visit a website. They are widely used to make
                  websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-body-regular text-neutral-600 mt-4">
                  Cookies contain information that is transferred to your device's hard drive.
                  They help us recognize your device and store some information about your
                  preferences or past actions on our Site.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Types of Cookies We Use</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Essential Cookies</h3>
                <p className="text-body-regular text-neutral-600">
                  These cookies are necessary for the Site to function properly and cannot be
                  disabled in our systems. They are usually only set in response to actions
                  made by you, such as setting your privacy preferences, logging in, or
                  filling in forms.
                </p>
                <p className="text-body-regular text-neutral-600"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                  <li>Load balancing cookies</li>
                  <li>Cookie consent preferences</li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Analytics and Performance Cookies</h3>
                <p className="text-body-regular text-neutral-600">
                  These cookies help us understand how visitors interact with our Site by
                  collecting and reporting information anonymously. This helps us improve our
                  Site's performance and user experience.
                </p>
                <p className="text-body-regular text-neutral-600"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Google Analytics cookies</li>
                  <li>Page load time measurement</li>
                  <li>Error tracking cookies</li>
                  <li>User behavior analysis</li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Functional Cookies</h3>
                <p className="text-body-regular text-neutral-600">
                  These cookies enable enhanced functionality and personalization. They may be
                  set by us or by third-party providers whose services we have added to our
                  pages.
                </p>
                <p className="text-body-regular text-neutral-600"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Language preference cookies</li>
                  <li>Region selection cookies</li>
                  <li>Accessibility feature cookies</li>
                  <li>User interface customization</li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Marketing and Advertising Cookies</h3>
                <p className="text-body-regular text-neutral-600">
                  These cookies are used to deliver advertisements that are relevant to you and
                  your interests. They may also be used to limit the number of times you see an
                  advertisement and measure the effectiveness of advertising campaigns.
                </p>
                <p className="text-body-regular text-neutral-600"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Google Ads cookies</li>
                  <li>Facebook Pixel</li>
                  <li>LinkedIn Insight Tag</li>
                  <li>Retargeting cookies</li>
                </ul>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Third-Party Cookies</h3>
                <p className="text-body-regular text-neutral-600">
                  We may allow third-party companies to place cookies on your device to provide
                  services such as analytics, advertising, and social media features.
                </p>
                <p className="text-body-regular text-neutral-600"><strong>Third-party services we use may include:</strong></p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Google Analytics</li>
                  <li>Google Ads</li>
                  <li>Facebook/Meta advertising</li>
                  <li>LinkedIn advertising</li>
                  <li>Other marketing and analytics platforms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">How We Use Cookies</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Site Functionality</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Remembering your preferences and settings</li>
                  <li>Enabling site features and functionality</li>
                  <li>Providing security and fraud prevention</li>
                  <li>Managing user sessions</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Analytics and Improvement</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Understanding how visitors use our Site</li>
                  <li>Analyzing Site performance and user behavior</li>
                  <li>Identifying areas for improvement</li>
                  <li>Measuring the effectiveness of our content</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Marketing and Advertising</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Delivering relevant advertisements</li>
                  <li>Measuring advertising campaign performance</li>
                  <li>Retargeting visitors with relevant content</li>
                  <li>Tracking conversions and lead generation</li>
                </ul>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Lead Generation</h3>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Tracking user interactions with forms and questionnaires</li>
                  <li>Measuring the effectiveness of lead generation campaigns</li>
                  <li>Optimizing conversion rates</li>
                  <li>Attributing leads to marketing sources</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Cookie Duration</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Session Cookies</h3>
                <p className="text-body-regular text-neutral-600">
                  These cookies are temporary and are deleted when you close your browser.
                  They help maintain your session while you navigate through our Site.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Persistent Cookies</h3>
                    <p className="text-body-regular text-neutral-600">
                  These cookies remain on your device for a set period or until you delete
                  them. They help us recognize you when you return to our Site and remember
                  your preferences.
                </p>
                <p className="text-body-regular text-neutral-600"><strong>Typical duration periods:</strong></p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Short-term: 24 hours to 30 days</li>
                  <li>Medium-term: 30 days to 1 year</li>
                  <li>Long-term: 1 year to 2 years</li>
                </ul>
                  </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Managing Your Cookie Preferences</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Browser Settings</h3>
                    <p className="text-body-regular text-neutral-600">
                  You can control and manage cookies through your browser settings. Most
                  browsers allow you to:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>View cookies stored on your device</li>
                  <li>Delete existing cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  <strong>Please note:</strong> Disabling certain cookies may affect the
                  functionality of our Site and your user experience.
                </p>

                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Browser-Specific Instructions</h3>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2">Google Chrome</h4>
                <ol className="list-decimal pl-6 text-body-regular text-neutral-600 space-y-1">
                  <li>Click on "Settings" &gt; "Privacy and security" &gt; "Cookies and other site data"</li>
                  <li>Choose your preferred cookie settings</li>
                </ol>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2 mt-4">Mozilla Firefox</h4>
                <ol className="list-decimal pl-6 text-body-regular text-neutral-600 space-y-1">
                  <li>Click on "Options" &gt; "Privacy &amp; Security"</li>
                  <li>Under "Cookies and Site Data," choose your settings</li>
                </ol>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2 mt-4">Safari</h4>
                <ol className="list-decimal pl-6 text-body-regular text-neutral-600 space-y-1">
                  <li>Click on "Preferences" &gt; "Privacy"</li>
                  <li>Choose your cookie and tracking settings</li>
                </ol>
                <h4 className="text-h4 font-semibold text-neutral-800 mb-2 mt-4">Microsoft Edge</h4>
                <ol className="list-decimal pl-6 text-body-regular text-neutral-600 space-y-1">
                  <li>Click on "Settings" &gt; "Cookies and site permissions"</li>
                  <li>Choose your cookie settings</li>
                </ol>
                  </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Opt-Out Tools</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">Google Analytics</h3>
                    <p className="text-body-regular text-neutral-600">
                  You can opt out of Google Analytics by installing the Google Analytics
                  Opt-out Browser Add-on available at:
                  <a className="text-primary hover:text-primary-700 ml-1" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Advertising Cookies</h3>
                <p className="text-body-regular text-neutral-600">You can opt out of interest-based advertising by visiting:</p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    Digital Advertising Alliance:
                    <a className="text-primary hover:text-primary-700 ml-1" href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a>
                  </li>
                  <li>
                    Network Advertising Initiative:
                    <a className="text-primary hover:text-primary-700 ml-1" href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/choices/</a>
                  </li>
                  <li>
                    European Interactive Digital Advertising Alliance:
                    <a className="text-primary hover:text-primary-700 ml-1" href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu/</a>
                  </li>
                </ul>
                  </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Third-Party Cookie Policies</h2>
                <p className="text-body-regular text-neutral-600">Our Site may use third-party services that set their own cookies. We recommend reviewing their cookie policies:</p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>
                    <strong>Google:</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/cookies</a>
                  </li>
                  <li>
                    <strong>Facebook/Meta:</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policies/cookies/</a>
                  </li>
                  <li>
                    <strong>LinkedIn:</strong>
                    <a className="text-primary hover:text-primary-700 ml-1" href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/cookie-policy</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Mobile Devices</h2>
                <p className="text-body-regular text-neutral-600">
                  On mobile devices, you may also be able to manage cookies and similar
                  technologies through your device settings or through the settings in mobile
                  applications.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-4">iOS Devices</h3>
                <p className="text-body-regular text-neutral-600">Go to Settings &gt; Safari &gt; Privacy &amp; Security to manage cookie settings.</p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-4">Android Devices</h3>
                <p className="text-body-regular text-neutral-600">Open your browser app and look for privacy or cookie settings in the menu.</p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Do Not Track Signals</h2>
                <p className="text-body-regular text-neutral-600">
                  Some browsers include a "Do Not Track" feature that lets you tell websites
                  that you do not want to have your online activities tracked. Currently, there
                  is no standard way for websites to respond to Do Not Track signals, and we do
                  not respond to such signals at this time.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Updates to This Cookie Policy</h2>
                <p className="text-body-regular text-neutral-600">
                  We may update this Cookie Policy from time to time to reflect changes in our
                  practices, technology, or legal requirements. We will notify you of any
                  material changes by:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>Posting the updated policy on our Site</li>
                  <li>Sending email notifications (if you have provided your email address)</li>
                  <li>Displaying a notice on our Site</li>
                </ul>
                <p className="text-body-regular text-neutral-600 mt-4">
                  The "Last Updated" date at the top of this policy indicates when it was last
                  revised.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">Legal Compliance</h2>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3">GDPR Compliance</h3>
                <p className="text-body-regular text-neutral-600">
                  For users in the European Union, we comply with the General Data Protection
                  Regulation (GDPR) requirements for cookie consent and data protection.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">CCPA Compliance</h3>
                <p className="text-body-regular text-neutral-600">
                  For users in California, we comply with the California Consumer Privacy Act
                  (CCPA) requirements regarding the collection and use of personal information
                  through cookies.
                </p>
                <h3 className="text-h3 font-semibold text-neutral-800 mb-3 mt-6">Texas Data Privacy and Security Act</h3>
                  <p className="text-body-regular text-neutral-600">
                  For users in Texas, we comply with the Texas Data Privacy and Security Act
                  (TDPSA) requirements regarding data collection and processing.
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
                  For specific privacy requests or to exercise your rights regarding cookies
                  and data collection, please refer to our Privacy Policy or contact us
                  directly.
                </p>
                </div>

              <div>
                <p className="text-body-regular text-neutral-600 italic">
                  This Cookie Policy is effective as of August 8, 2025 and applies to all
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