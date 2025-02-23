import { NextResponse } from 'next/server';

const TIKTOK_USERNAME = 'simo4287';

// Für GitHub Pages statischen Test-Modus
const TEST_MODE = {
	enabled: true,
	isLive: false, // Ändern Sie dies manuell je nach Bedarf
	roomId: null // Fügen Sie hier Ihre Room-ID ein, wenn Sie live sind
};

async function getTikTokLiveStatus(username: string) {
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
		console.log('TikTok response HTML:', html.substring(0, 200)); // Log first 200 chars for debugging
		
		const roomIdMatch = html.match(/room_id["']?\s*:\s*["']?(\d+)["']?/i);
		const isLiveMatch = html.match(/isLive["']?\s*:\s*(true|false)/i);

		return NextResponse.json({
			isLive: isLiveMatch ? isLiveMatch[1].toLowerCase() === 'true' : false,
			roomId: roomIdMatch ? roomIdMatch[1] : null,
			username: TIKTOK_USERNAME
		});

	} catch (error) {
		console.error('Error fetching TikTok status:', error);
		return NextResponse.json({
			isLive: false,
			roomId: null,
			error: error instanceof Error ? error.message : 'Failed to fetch TikTok status'
		}, { status: 500 });
	}
}

export async function GET() {
	if (TEST_MODE.enabled) {
		return NextResponse.json({
			isLive: TEST_MODE.isLive,
			roomId: TEST_MODE.roomId,
			username: 'simo4287'
		});
	}
	return getTikTokLiveStatus(TIKTOK_USERNAME);
}
