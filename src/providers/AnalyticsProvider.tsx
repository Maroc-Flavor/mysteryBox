import { ReactNode, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface AnalyticsProviderProps {
  children: ReactNode;
  googleAnalyticsId?: string;
  facebookPixelId?: string;
}

export function AnalyticsProvider({
  children,
  googleAnalyticsId,
  facebookPixelId,
}: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Google Analytics Initialisierung
    if (googleAnalyticsId) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId);
    }

    // Facebook Pixel Initialisierung
    if (facebookPixelId) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      if (googleAnalyticsId) {
        const script = document.querySelector(`script[src*="${googleAnalyticsId}"]`);
        script?.remove();
      }
      if (facebookPixelId) {
        const script = document.querySelector('script[src*="connect.facebook.net"]');
        script?.remove();
      }
    };
  }, [googleAnalyticsId, facebookPixelId]);

  // Page View Tracking
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    if (googleAnalyticsId) {
      window.gtag('config', googleAnalyticsId, {
        page_path: url,
      });
    }
    if (facebookPixelId) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams, googleAnalyticsId, facebookPixelId]);

  return <>{children}</>;
}

// Event Tracking Funktionen
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPurchase = (transactionId: string, value: number, currency: string = 'EUR') => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
  if (window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
    });
  }
};

// TypeScript Deklarationen
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
} 