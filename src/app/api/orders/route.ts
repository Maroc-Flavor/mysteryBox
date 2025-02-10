import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const { orderDetails, customerInfo } = data;

		// Here you would typically:
		// 1. Save order to database
		// 2. Send confirmation email
		// For now, we'll just log and return success

		console.log('Order received:', { orderDetails, customerInfo });

		return NextResponse.json({ 
			success: true, 
			message: 'Order processed successfully',
			orderId: Date.now().toString()
		});
	} catch (error) {
		console.error('Order processing error:', error);
		return NextResponse.json(
			{ success: false, message: 'Failed to process order' },
			{ status: 500 }
		);
	}
}