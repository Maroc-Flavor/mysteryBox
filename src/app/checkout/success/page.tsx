'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function SuccessPage() {
	const router = useRouter();
	const [orderComplete, setOrderComplete] = useState(false);
	const [isBidderNumber, setIsBidderNumber] = useState(false);
	const [orderData, setOrderData] = useState<any>(null);

	useEffect(() => {
		// Prüfen, ob wir von der Checkout-Seite kommen
		const orderStatus = sessionStorage.getItem('orderComplete');
		const storedOrderData = sessionStorage.getItem('orderData');
		
		if (orderStatus === 'true' && storedOrderData) {
			try {
				const parsedData = JSON.parse(storedOrderData);
				const hasBidderNumber = parsedData.items.some((item: any) => item.id === 10);
				
				setOrderComplete(true);
				setIsBidderNumber(hasBidderNumber);
				setOrderData(parsedData);
				
				// Clear session storage
				sessionStorage.removeItem('orderComplete');
				sessionStorage.removeItem('orderData');
			} catch (error) {
				console.error('Error parsing order data:', error);
				router.push('/');
			}
		} else {
			router.push('/');
		}
	}, [router]);

	if (!orderComplete || !orderData) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">Laden...</h1>
				</div>
			</div>
		);
	}

	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4">
				{isBidderNumber ? (
					<div className="bg-white rounded-2xl shadow-xl p-8 text-center">
						<div className="w-24 h-24 mx-auto mb-6 relative">
							<Image
								src="/mysteryBox/images/products/bidder-number.webp"
								alt="Bieternummer"
								fill
								className="object-contain"
							/>
						</div>
						
						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							Herzlichen Glückwunsch!
						</h1>
						
						<div className="space-y-6 mb-8">
							<p className="text-xl text-gray-600">
								Sie haben erfolgreich Ihre persönliche Bieternummer erworben!
							</p>
							
							<div className="bg-indigo-50 rounded-xl p-6 space-y-4">
								<h2 className="text-xl font-semibold text-indigo-900">
									Wichtige Hinweise:
								</h2>
								<ul className="text-left space-y-3 text-gray-700">
									<li className="flex items-start gap-3">
										<svg className="w-6 h-6 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
										</svg>
										<span>Ihre Bieternummer ist persönlich und darf nicht geteilt werden</span>
									</li>
									<li className="flex items-start gap-3">
										<svg className="w-6 h-6 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										<span>Sie erhalten Ihre Bieternummer in Kürze per E-Mail</span>
									</li>
									<li className="flex items-start gap-3">
										<svg className="w-6 h-6 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
										</svg>
										<span>Mit dieser Nummer können Sie an allen Live-Auktionen teilnehmen</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/"
								className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-medium"
							>
								Zurück zur Startseite
							</Link>
							<Link
								href="/#live-auctions"
								className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium"
							>
								Zu den Live-Auktionen
							</Link>
						</div>
					</div>
				) : (
					<div className="bg-white rounded-2xl shadow-xl p-8 text-center">
						<div className="w-24 h-24 mx-auto mb-6 relative">
							<Image
								src="/mysteryBox/images/products/Box-Hero-Section.webp"
								alt="Mystery Box"
								fill
								className="object-contain"
							/>
						</div>
						
						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							Vielen Dank für Ihre Bestellung!
						</h1>
						
						<div className="space-y-6 mb-8">
							<p className="text-xl text-gray-600">
								Ihre Bestellung wurde erfolgreich aufgegeben und wird in Kürze versendet.
							</p>
							
							<div className="bg-indigo-50 rounded-xl p-6 space-y-4">
								<h2 className="text-xl font-semibold text-indigo-900 mb-4">
									Bestelldetails:
								</h2>
								<div className="text-left space-y-2 text-gray-700">
									<p><span className="font-medium">Bestellnummer:</span> {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
									<p><span className="font-medium">Gesamtbetrag:</span> {orderData.totalPrice.toFixed(2)} €</p>
									<p><span className="font-medium">Versandart:</span> {orderData.shippingMethod?.name}</p>
									<p><span className="font-medium">Lieferadresse:</span></p>
									<p>{orderData.customerInfo.firstName} {orderData.customerInfo.lastName}</p>
									<p>{orderData.customerInfo.address}</p>
									<p>{orderData.customerInfo.postalCode} {orderData.customerInfo.city}</p>
									<p>{orderData.customerInfo.country}</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/"
								className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-medium"
							>
								Zurück zur Startseite
							</Link>
							<Link
								href="/shop"
								className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium"
							>
								Weitere Boxen entdecken
							</Link>
						</div>
					</div>
				)}
			</div>
		</main>
	);
}