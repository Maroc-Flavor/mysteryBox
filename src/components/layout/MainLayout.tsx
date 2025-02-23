import { LayoutProps } from '@/types/layout';
import Navigation from '@/components/navigation';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';

const Cart = dynamic(() => import('@/components/cart/Cart'), {
  ssr: false
});

const CookieConsent = dynamic(() => import('@/components/common/CookieConsent'), {
  ssr: false
});

interface MainLayoutProps extends LayoutProps {
  variant?: 'default' | 'shop';
}

export default function MainLayout({ children, variant = 'default' }: MainLayoutProps) {
  const content = variant === 'shop' ? (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  ) : (
    children
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <main className="flex-grow">{content}</main>
      </div>
      <Footer />
      <Cart />
      <CookieConsent />
    </div>
  );
} 