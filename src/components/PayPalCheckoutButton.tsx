'use client';

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PayPalOrderData } from '@/types/paypal';

interface PayPalCheckoutButtonProps {
	amount: number;
	orderData: PayPalOrderData;
	onSuccess: () => void;
}

export function PayPalCheckoutButton({ amount, orderData, onSuccess }: PayPalCheckoutButtonProps) {
	const [error, setError] = useState<string | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);

	const handleError = (err: unknown) => {
		console.error("PayPal Fehler:", err);
		setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
		setIsProcessing(false);
	};

	const getCountryCode = (country: string): string => {
		const countryMap: Record<string, string> = {
			'Deutschland': 'DE',
			'Österreich': 'AT',
			'Schweiz': 'CH'
		};
		return countryMap[country] || 'DE';
	};

	return (
		<div className="space-y-4">
			{error && (
				<div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
					{error}
				</div>
			)}
			
			<PayPalButtons
				style={{ layout: "vertical" }}
				disabled={isProcessing}
				createOrder={(data, actions) => {
					setError(null);
					setIsProcessing(true);
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								amount: {
									value: amount.toFixed(2),
									currency_code: "EUR"
								},
								shipping: {
									name: {
										full_name: `${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`
									},
									address: {
										address_line_1: orderData.customerInfo.address,
										admin_area_2: orderData.customerInfo.city,
										postal_code: orderData.customerInfo.postalCode,
										country_code: getCountryCode(orderData.customerInfo.country)
									}
								}
							}
						]
					});
				}}
				onApprove={async (data, actions) => {
					try {
						if (actions.order) {
							const order = await actions.order.capture();
							console.log("PayPal Transaktion erfolgreich", order);
							onSuccess();
						}
					} catch (err) {
						handleError(err);
					} finally {
						setIsProcessing(false);
					}
				}}
				onError={handleError}
				onCancel={() => {
					setError("Zahlung wurde abgebrochen. Bitte versuchen Sie es erneut.");
					setIsProcessing(false);
				}}
			/>
			
			{isProcessing && (
				<div className="text-center text-gray-600">
					Bitte warten, Ihre Zahlung wird verarbeitet...
				</div>
			)}
		</div>
	);
}
