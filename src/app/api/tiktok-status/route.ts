import { NextResponse } from 'next/server';

const TEST_MODE = {
	enabled: true,
	isLive: true,
	roomId: '7338682644432978714'
};

export async function GET() {
	try {
		// Always return test data in test mode
		if (TEST_MODE.enabled) {
			return new NextResponse(JSON.stringify({
				isLive: TEST_MODE.isLive,
				roomId: TEST_MODE.roomId
			}), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}

		return new NextResponse(JSON.stringify({
			isLive: false,
			roomId: null
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
