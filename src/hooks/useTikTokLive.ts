import { useState, useEffect } from 'react';
import { TikTokLiveStatus } from '@/types/tiktok';

export function useTikTokLive() {
  const [status, setStatus] = useState<TikTokLiveStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/tiktok-status');
        const data = await response.json();
        setStatus(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch status');
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return { status, loading, error };
} 