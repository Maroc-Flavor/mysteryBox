import { CartProvider } from '@/context/CartContext';
import { PayPalProvider } from '@/providers/PayPalProvider';
import { Inter } from "next/font/google";
import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
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
      <body className={`${inter.variable} antialiased`}>
        <CartProvider>
          <PayPalProvider>
            <MainLayout>{children}</MainLayout>
          </PayPalProvider>
        </CartProvider>
      </body>
    </html>
  );
}