import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiry: number;
}

interface CacheContextType {
  get: <T>(key: string) => T | null;
  set: <T>(key: string, data: T, expiryMinutes?: number) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const CacheContext = createContext<CacheContextType | undefined>(undefined);

const DEFAULT_EXPIRY = 30; // 30 Minuten

export function CacheProvider({ children }: { children: ReactNode }) {
  const [cache, setCache] = useState<Record<string, CacheItem<any>>>({});

  useEffect(() => {
    // Lade Cache aus localStorage beim Start
    const savedCache = localStorage.getItem('appCache');
    if (savedCache) {
      try {
        const parsedCache = JSON.parse(savedCache);
        // Entferne abgelaufene Einträge
        const now = Date.now();
        const validCache = Object.entries(parsedCache).reduce((acc, [key, value]) => {
          const cacheItem = value as CacheItem<any>;
          if (cacheItem && typeof cacheItem === 'object' && 'expiry' in cacheItem && cacheItem.expiry > now) {
            acc[key] = cacheItem;
          }
          return acc;
        }, {} as Record<string, CacheItem<any>>);
        setCache(validCache);
      } catch (error) {
        console.error('Fehler beim Laden des Caches:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Speichere Cache in localStorage bei Änderungen
    localStorage.setItem('appCache', JSON.stringify(cache));
  }, [cache]);

  const get = <T,>(key: string): T | null => {
    const item = cache[key];
    if (!item) return null;

    const now = Date.now();
    if (now > item.expiry) {
      remove(key);
      return null;
    }

    return item.data as T;
  };

  const set = <T,>(key: string, data: T, expiryMinutes: number = DEFAULT_EXPIRY) => {
    const now = Date.now();
    const expiry = now + expiryMinutes * 60 * 1000;

    setCache(prev => ({
      ...prev,
      [key]: {
        data,
        timestamp: now,
        expiry,
      },
    }));
  };

  const remove = (key: string) => {
    setCache(prev => {
      const newCache = { ...prev };
      delete newCache[key];
      return newCache;
    });
  };

  const clear = () => {
    setCache({});
  };

  return (
    <CacheContext.Provider value={{ get, set, remove, clear }}>
      {children}
    </CacheContext.Provider>
  );
}

export function useCache() {
  const context = useContext(CacheContext);
  if (context === undefined) {
    throw new Error('useCache must be used within a CacheProvider');
  }
  return context;
}

// Hilfsfunktion für API-Caching
export async function fetchWithCache<T>(
  url: string,
  options?: RequestInit,
  expiryMinutes?: number
): Promise<T> {
  const cache = useCache();
  const cacheKey = `api:${url}:${JSON.stringify(options)}`;

  // Versuche aus dem Cache zu laden
  const cachedData = cache.get<T>(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  // Wenn nicht im Cache, führe API-Anfrage durch
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  cache.set(cacheKey, data, expiryMinutes);
  return data;
} 