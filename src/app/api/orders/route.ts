import { NextResponse } from 'next/server';

interface OrderItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

interface OrderData {
	items: OrderItem[];
	customerInfo: {
		email: string;
		firstName: string;
		lastName: string;
		address: string;
		city: string;
		postalCode: string;
		country: string;
	};
	shippingMethod: {
		id: string;
		price: number;
	};
	totalPrice: number;
}

export async function POST(request: Request) {
	try {
		const data: OrderData = await request.json();

		// Basic validation
		if (!data.items || !data.customerInfo || !data.shippingMethod) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.customerInfo.email)) {
			return NextResponse.json(
				{ error: 'Invalid email address' },
				{ status: 400 }
			);
		}

		// Here you would typically:
		// 1. Save order to database
		// 2. Send confirmation email
		// 3. Process payment
		// For now, we'll just return success

		return NextResponse.json({
			success: true,
			orderId: `ORD-${Date.now()}`,
			message: 'Order processed successfully'
		});

	} catch (error) {
		console.error('Order processing error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}