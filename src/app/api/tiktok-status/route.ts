import { NextResponse } from 'next/server';
import { fetchTikTokLiveStatus, TIKTOK_USERNAME, TEST_MODE } from '@/lib/tiktok';
import type { TikTokLiveStatus } from '@/types/tiktok';

export async function GET() {
	if (TEST_MODE.enabled) {
		return NextResponse.json({
			isLive: TEST_MODE.isLive,
			roomId: TEST_MODE.roomId,
			username: TIKTOK_USERNAME
		} as TikTokLiveStatus);
	}

	try {
		const status = await fetchTikTokLiveStatus(TIKTOK_USERNAME);
		return NextResponse.json(status);
	} catch (error) {
		return NextResponse.json({
			isLive: false,
			roomId: null,
			username: TIKTOK_USERNAME,
			error: error instanceof Error ? error.message : 'Failed to fetch TikTok status'
		} as TikTokLiveStatus, { status: 500 });
	}
}
