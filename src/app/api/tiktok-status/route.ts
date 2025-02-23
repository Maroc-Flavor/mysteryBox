import { NextResponse } from 'next/server';

// TikTok username constant
const TIKTOK_USERNAME = 'simo4287'; // Replace with your TikTok username

async function getTikTokLiveStatus(username: string) {
  try {
    // First, fetch the user's profile page
    const response = await fetch(`https://www.tiktok.com/@${username}/live`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch TikTok live status');
    }

    const html = await response.text();
    
    // Look for room ID in the HTML
    const roomIdMatch = html.match(/"room_id":"(\d+)"/);
    const isLiveMatch = html.match(/"isLive":(\w+)/);

    const isLive = isLiveMatch ? isLiveMatch[1] === 'true' : false;
    const roomId = roomIdMatch ? roomIdMatch[1] : null;

    return {
      isLive,
      roomId
    };
  } catch (error) {
    console.error('Error fetching TikTok live status:', error);
    return {
      isLive: false,
      roomId: null,
      error: error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten'
    };
  }
}

export async function GET() {
  try {
    const { isLive, roomId } = await getTikTokLiveStatus(TIKTOK_USERNAME);

    return new NextResponse(JSON.stringify({
      isLive,
      roomId,
      username: TIKTOK_USERNAME
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in TikTok status API:', error);
    return new NextResponse(JSON.stringify({
      isLive: false,
      roomId: null,
      error: 'Internal server error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
