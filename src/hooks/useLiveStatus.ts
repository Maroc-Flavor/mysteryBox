import { useState, useEffect } from 'react';
import { LIVE_CONFIG } from '@/config/liveStatus';

export function useLiveStatus() {
  const [isLive, setIsLive] = useState(LIVE_CONFIG.isLive);
  const [roomId, setRoomId] = useState(LIVE_CONFIG.roomId);

  useEffect(() => {
    const checkLiveStatus = () => {
      setIsLive(LIVE_CONFIG.isLive);
      setRoomId(LIVE_CONFIG.roomId);
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return { isLive, roomId };
} 