import { useState, useEffect } from 'react';

export function useSession() {
  const [sessionId] = useState(() => crypto.randomUUID());
  
  useEffect(() => {
    const checkSession = () => {
      const lastActivity = sessionStorage.getItem('lastActivity');
      const now = Date.now();
      
      if (lastActivity && now - parseInt(lastActivity) > 30 * 60 * 1000) { // 30 Minuten
        // Session abgelaufen
        sessionStorage.clear();
        window.location.href = '/';
      }
      
      sessionStorage.setItem('lastActivity', now.toString());
    };
    
    const interval = setInterval(checkSession, 60000); // Jede Minute prüfen
    return () => clearInterval(interval);
  }, []);

  return { sessionId };
} 