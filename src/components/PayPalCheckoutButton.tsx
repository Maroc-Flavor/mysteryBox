'use client';

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from 'next/navigation';

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
	const router = useRouter();

	return (
		<PayPalButtons
			style={{ layout: "vertical" }}
			createOrder={(data, actions) => {
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
				if (actions.order) {
					const order = await actions.order.capture();
					console.log("PayPal Transaktion erfolgreich", order);
					
					// Hier würden wir normalerweise die Bestellung in der Datenbank speichern
					// und eine Bestätigungs-E-Mail versenden
					
					onSuccess();
				}
			}}
			onError={(err) => {
				console.error("PayPal Fehler:", err);
				// Hier könnte man einen Fehlerdialog anzeigen
			}}
		/>
	);
}