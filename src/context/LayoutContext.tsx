import { createContext, useContext, useState } from 'react';

interface LayoutContextType {
  pageTitle: string;
  setPageTitle: (title: string) => void;
  // Weitere gemeinsame Layout-Funktionen
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <LayoutContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error('useLayout must be used within LayoutProvider');
  return context;
}; 