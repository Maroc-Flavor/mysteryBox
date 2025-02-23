'use client';

import { useEffect } from 'react';
import { useLayout } from '@/context/LayoutContext';
import MainLayout from '@/components/layout/MainLayout';

export default function ShopPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setLayoutVariant } = useLayout();

  useEffect(() => {
    setLayoutVariant('shop');
  }, [setLayoutVariant]);

  return children;
} 