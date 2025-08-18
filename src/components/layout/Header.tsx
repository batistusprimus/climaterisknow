'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { MAIN_NAVIGATION, CTA_BUTTONS, QUESTIONNAIRE_NAVIGATION, COMPANY_NAVIGATION } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuestionnairesOpen, setIsQuestionnairesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleQuestionnaires = () => {
    setIsQuestionnairesOpen(!isQuestionnairesOpen);
    setIsCompanyOpen(false); // Fermer l'autre dropdown
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsQuestionnairesOpen(false); // Fermer l'autre dropdown
  };

  const closeAllDropdowns = () => {
    setIsQuestionnairesOpen(false);
    setIsCompanyOpen(false);
  };

  // Fermer les dropdowns quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = () => {
      closeAllDropdowns();
    };
    if (isQuestionnairesOpen || isCompanyOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isQuestionnairesOpen, isCompanyOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200" 
        : "bg-white/90 backdrop-blur-sm"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transition-transform hover:scale-105"
            onClick={closeMobileMenu}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/Logo_Sentinel_Climate_Intelligence_Transparent.png"
                alt="Sentinel Shield"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-neutral-800 group-hover:text-primary transition-colors">
                Sentinel Shield
              </span>
              <div className="text-xs text-neutral-500 font-medium">
                Weather Risk Intelligence
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Navigation principale simplifiée */}
            {MAIN_NAVIGATION.filter(item => item.label !== 'About').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-neutral-600 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Company Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={toggleCompany}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5 flex items-center space-x-1",
                  COMPANY_NAVIGATION.some(c => pathname === c.href)
                    ? "text-primary bg-primary/10"
                    : "text-neutral-600 hover:text-primary"
                )}
              >
                <span>Company</span>
                <svg 
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isCompanyOpen ? "rotate-180" : ""
                  )} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Company Dropdown Menu */}
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
                  {COMPANY_NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAllDropdowns}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium hover:bg-primary/5 transition-colors",
                        pathname === item.href 
                          ? "text-primary bg-primary/10" 
                          : "text-neutral-800 hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Risk Assessments Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={toggleQuestionnaires}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5 flex items-center space-x-1",
                  QUESTIONNAIRE_NAVIGATION.some(q => pathname === q.href)
                    ? "text-primary bg-primary/10"
                    : "text-neutral-600 hover:text-primary"
                )}
              >
                <span>Risk Assessments</span>
                <svg 
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isQuestionnairesOpen ? "rotate-180" : ""
                  )} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Risk Assessments Dropdown Menu */}
              {isQuestionnairesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
                  {QUESTIONNAIRE_NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAllDropdowns}
                      className={cn(
                        "block px-4 py-3 hover:bg-primary/5 transition-colors",
                        pathname === item.href ? "bg-primary/10" : ""
                      )}
                    >
                      <div>
                        <div className={cn(
                          "font-medium text-sm",
                          pathname === item.href ? "text-primary" : "text-neutral-800"
                        )}>
                          {item.label}
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                href={CTA_BUTTONS.primary.href}
                variant="primary"
                size="md"
                className="shadow-sm hover:shadow-md transition-shadow"
              >
                {CTA_BUTTONS.primary.text}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md w-full">
            <nav className="py-4 space-y-2">
              {MAIN_NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-neutral-600 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Company Section */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-neutral-700 mb-3 border-b border-neutral-200 pb-2">
                  Company
                </div>
                <div className="space-y-1">
                  {COMPANY_NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-lg transition-all duration-200",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-neutral-600 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      <div className="font-medium">{item.label}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Risk Assessments Section */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-neutral-700 mb-3 border-b border-neutral-200 pb-2">
                  Risk Assessments by Industry
                </div>
                <div className="space-y-1">
                  {QUESTIONNAIRE_NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-lg transition-all duration-200",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-neutral-600 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-neutral-500 mt-1">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-neutral-200">
                <Button
                  href={CTA_BUTTONS.primary.href}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  {CTA_BUTTONS.primary.text}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 