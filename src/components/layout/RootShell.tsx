'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from '@/components/ui/CookieBanner';

type RootShellProps = {
  children: React.ReactNode;
};

export default function RootShell({ children }: RootShellProps) {
  const pathname = usePathname();
  const isEmbed = pathname?.startsWith('/q/embed');

  if (isEmbed) {
    return <div className="min-h-0 p-0 m-0 bg-transparent">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col safe-area">
      <Header />
      <main className="flex-1 pt-20 safe-area">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}


