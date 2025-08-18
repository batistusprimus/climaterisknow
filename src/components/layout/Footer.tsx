'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CookieSettings from '@/components/ui/CookieSettings';
import { 
  COMPANY_INFO, 
  FOOTER_NAVIGATION, 
  CONTACT_INFO
} from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white w-full">

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12">
                <Image 
                  src="/Logo_Sentinel_Climate_Intelligence_Transparent.png" 
                  alt="Sentinel Shield Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-h3 font-bold text-white font-secondary">
                  Sentinel Shield
                </span>
                <span className="text-xs text-neutral-400 -mt-1">
                  Climate Intelligence
                </span>
              </div>
            </Link>
            <p className="text-body-regular text-neutral-300 mb-6 max-w-md">
              {COMPANY_INFO.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-body-small text-neutral-400">Contact Information</p>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="block text-body-regular text-neutral-300 hover:text-secondary transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <address className="text-body-regular text-neutral-300 not-italic">
                {CONTACT_INFO.address.street}<br />
                {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city}<br />
                {CONTACT_INFO.address.country}
              </address>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {/* Facebook link will be added when available */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-h3 font-semibold text-white mb-6 font-secondary">
              Company
            </h3>
            <nav className="flex flex-col space-y-3">
              {FOOTER_NAVIGATION.company.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-regular text-neutral-300 hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-h3 font-semibold text-white mb-6 font-secondary">
              Resources
            </h3>
            <nav className="flex flex-col space-y-3">
              {FOOTER_NAVIGATION.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-regular text-neutral-300 hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-body-small text-neutral-400">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <nav className="flex space-x-6">
              {FOOTER_NAVIGATION.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-small text-neutral-400 hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <CookieSettings />
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 