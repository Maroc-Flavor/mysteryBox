export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim()
    .slice(0, 500); // Maximale Länge
};

// Client-seitiges Rate Limiting
const RATE_LIMIT_STORAGE_KEY = 'rate_limit';
const RATE_LIMIT = 100; // Requests pro Stunde
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 Stunde

export const checkRateLimit = (): boolean => {
  const now = Date.now();
  const stored = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
  const data = stored ? JSON.parse(stored) : { count: 0, timestamp: now };

  if (now - data.timestamp > RATE_LIMIT_WINDOW) {
    data.count = 0;
    data.timestamp = now;
  }

  if (data.count >= RATE_LIMIT) {
    return false;
  }

  data.count++;
  localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(data));
  return true;
}; 