import type { Metadata } from 'next';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Sentinel Shield Cookie Policy - Learn how we use cookies to improve your browsing experience.',
  openGraph: {
    title: 'Cookie Policy | Sentinel Shield',
    description: 'Learn how Sentinel Shield uses cookies to improve your browsing experience.',
    url: `${SITE_CONFIG.url}/legal/cookies`,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-bold text-neutral-800 mb-8">
              Cookie Policy
            </h1>
            
            <div className="text-body-small text-neutral-600 mb-8">
              Last updated: January 9, 2025
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  What Are Cookies
                </h2>
                <p className="text-body-regular text-neutral-600">
                  Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  We use cookies for several reasons:
                </p>
                <ul className="list-disc pl-6 text-body-regular text-neutral-600 space-y-2">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve our website performance and user experience</li>
                  <li>To ensure the security of our services</li>
                  <li>To provide personalized content and recommendations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-6">
                    <h3 className="text-h3 font-semibold text-neutral-800 mb-3">
                      Essential Cookies
                    </h3>
                    <p className="text-body-regular text-neutral-600">
                      These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.
                    </p>
                  </div>

                  <div className="bg-background rounded-lg p-6">
                    <h3 className="text-h3 font-semibold text-neutral-800 mb-3">
                      Analytics Cookies
                    </h3>
                    <p className="text-body-regular text-neutral-600">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                    </p>
                  </div>

                  <div className="bg-background rounded-lg p-6">
                    <h3 className="text-h3 font-semibold text-neutral-800 mb-3">
                      Functional Cookies
                    </h3>
                    <p className="text-body-regular text-neutral-600">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Managing Cookies
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
                <p className="text-body-regular text-neutral-600">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-body-regular text-neutral-600">
                  Some of our pages display content from external providers (e.g., YouTube, Google Analytics). To view this third-party content, you first have to accept their specific terms and conditions, including their cookie policies, which we have no control over.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-semibold text-neutral-800 mb-4">
                  Contact Us
                </h2>
                <p className="text-body-regular text-neutral-600 mb-4">
                  If you have any questions about our use of cookies or other technologies, please contact us:
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