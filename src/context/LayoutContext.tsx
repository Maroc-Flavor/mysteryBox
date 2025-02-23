"use client"

import { createContext, useContext, useState } from 'react';
import { LayoutProps } from '@/types/layout';

interface LayoutContextType {
  pageTitle: string;
  pageDescription: string;
  variant: 'default' | 'shop' | 'static';
  setPageMeta: (title: string, description?: string) => void;
  setLayoutVariant: (variant: 'default' | 'shop' | 'static') => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [pageTitle, setPageTitle] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [variant, setVariant] = useState<'default' | 'shop' | 'static'>('default');

  const setPageMeta = (title: string, description: string = '') => {
    setPageTitle(title);
    setPageDescription(description);
  };

  const setLayoutVariant = (newVariant: 'default' | 'shop' | 'static') => {
    setVariant(newVariant);
  };

  return (
    <LayoutContext.Provider value={{ 
      pageTitle, 
      pageDescription, 
      variant,
      setPageMeta, 
      setLayoutVariant 
    }}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error('useLayout must be used within LayoutProvider');
  return context;
}; 