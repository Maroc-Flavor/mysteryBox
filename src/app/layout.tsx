import { CartProvider } from '@/context/CartContext';
import { PayPalProvider } from '@/providers/PayPalProvider';
import { Inter, Roboto_Mono } from "next/font/google";
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import "./globals.css";

const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
  ssr: false
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MysteryBox - Überraschungen Online Shopping",
  description: "Entdecke spannende Überraschungspakete und einzigartige Shopping-Erlebnisse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <CartProvider>
          <PayPalProvider>
            {children}
            <CookieConsent />
            </PayPalProvider>
        </CartProvider>
      </body>
    </html>
  );
}

