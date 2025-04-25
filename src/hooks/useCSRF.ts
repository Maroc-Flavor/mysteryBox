import { useState, useEffect } from 'react';
import { generateCSRFToken } from '@/lib/security';

export function useCSRF() {
  const [csrfToken, setCsrfToken] = useState<string>('');

  useEffect(() => {
    // Token beim ersten Laden generieren
    const token = generateCSRFToken();
    setCsrfToken(token);
    
    // Token im SessionStorage speichern
    sessionStorage.setItem('csrfToken', token);
  }, []);

  const getHeaders = () => ({
    'Content-Type': 'application/json',
    'x-csrf-token': csrfToken,
  });

  return {
    csrfToken,
    getHeaders,
  };
} 