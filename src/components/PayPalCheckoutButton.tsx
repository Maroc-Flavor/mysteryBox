'use client';

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PayPalCheckoutButtonProps {
	amount: number;
	orderData: {
		items: any[];
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
	};
	onSuccess: () => void;
}

export function PayPalCheckoutButton({ amount, orderData, onSuccess }: PayPalCheckoutButtonProps) {
	const [error, setError] = useState<string | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);

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
										country_code: orderData.customerInfo.country === "Deutschland" ? "DE" : 
													orderData.customerInfo.country === "Österreich" ? "AT" : "CH"
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
						setError("Fehler bei der Zahlungsverarbeitung. Bitte versuchen Sie es erneut.");
						console.error("PayPal Fehler:", err);
					} finally {
						setIsProcessing(false);
					}
				}}
				onError={(err) => {
					setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
					console.error("PayPal Fehler:", err);
					setIsProcessing(false);
				}}
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