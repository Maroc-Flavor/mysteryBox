import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  contrast: 'normal' | 'high';
  reduceMotion: boolean;
  updateFontSize: (size: number) => void;
  updateContrast: (contrast: 'normal' | 'high') => void;
  toggleReduceMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState<'normal' | 'high'>('normal');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Lade gespeicherte Einstellungen
    const savedFontSize = localStorage.getItem('fontSize');
    const savedContrast = localStorage.getItem('contrast');
    const savedReduceMotion = localStorage.getItem('reduceMotion');

    if (savedFontSize) setFontSize(Number(savedFontSize));
    if (savedContrast) setContrast(savedContrast as 'normal' | 'high');
    if (savedReduceMotion) setReduceMotion(savedReduceMotion === 'true');

    // Wende Einstellungen an
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.setAttribute('data-contrast', contrast);
    document.documentElement.setAttribute('data-reduce-motion', reduceMotion.toString());
  }, [fontSize, contrast, reduceMotion]);

  const updateFontSize = (size: number) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size.toString());
  };

  const updateContrast = (newContrast: 'normal' | 'high') => {
    setContrast(newContrast);
    localStorage.setItem('contrast', newContrast);
  };

  const toggleReduceMotion = () => {
    const newValue = !reduceMotion;
    setReduceMotion(newValue);
    localStorage.setItem('reduceMotion', newValue.toString());
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        contrast,
        reduceMotion,
        updateFontSize,
        updateContrast,
        toggleReduceMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

// Hilfsfunktion für ARIA-Labels
export function getAriaLabel(text: string, context?: string): string {
  return context ? `${text} ${context}` : text;
}

// Hilfsfunktion für Keyboard Navigation
export function handleKeyPress(
  event: React.KeyboardEvent,
  callback: () => void,
  key: string = 'Enter'
) {
  if (event.key === key) {
    event.preventDefault();
    callback();
  }
} 