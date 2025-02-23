'use client';

import { LayoutProps } from '@/types/layout';
import Navigation from '@/components/navigation';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { useLayout } from '@/context/LayoutContext';

const Cart = dynamic(() => import('@/components/cart/Cart'), {
  ssr: false
});

const CookieConsent = dynamic(() => import('@/components/common/CookieConsent'), {
  ssr: false
});

interface MainLayoutProps extends LayoutProps {
  variant?: 'default' | 'shop' | 'static';
}

export default function MainLayout({ children, variant = 'default' }: MainLayoutProps) {
  const { pageTitle } = useLayout();

  const getContent = () => {
    switch (variant) {
      case 'shop':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {children}
            </div>
          </div>
        );
      case 'static':
        return (
          <div className="container mx-auto py-8">
            {pageTitle && <h1 className="text-2xl font-bold mb-4">{pageTitle}</h1>}
            {children}
          </div>
        );
      default:
        return children;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <main className="flex-grow">{getContent()}</main>
      </div>
      <Footer />
      <Cart />
      <CookieConsent />
    </div>
  );
} 