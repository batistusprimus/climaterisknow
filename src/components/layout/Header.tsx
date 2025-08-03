'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { MAIN_NAVIGATION, CTA_BUTTONS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
            {MAIN_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-neutral-600 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
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
          <div className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md">
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