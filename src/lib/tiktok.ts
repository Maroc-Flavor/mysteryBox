// Extrahiere TikTok-Funktionalität aus route.ts
export const TIKTOK_USERNAME = 'simo4287';

export const TEST_MODE = {
  enabled: true,
  isLive: false,
  roomId: null
};

export async function fetchTikTokLiveStatus(username: string) {
  try {
    const response = await fetch(`https://www.tiktok.com/@${username}/live`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const roomIdMatch = html.match(/room_id["']?\s*:\s*["']?(\d+)["']?/i);
    const isLiveMatch = html.match(/isLive["']?\s*:\s*(true|false)/i);

    return {
      isLive: isLiveMatch ? isLiveMatch[1].toLowerCase() === 'true' : false,
      roomId: roomIdMatch ? roomIdMatch[1] : null,
      username
    };
  } catch (error) {
    throw error;
  }
} 