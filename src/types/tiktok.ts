export interface TikTokLiveStatus {
  isLive: boolean;
  roomId: string | null;
  username: string;
  error?: string;
}

export interface TikTokTestMode {
  enabled: boolean;
  isLive: boolean;
  roomId: string | null;
} 