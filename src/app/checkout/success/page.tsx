'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function CheckoutSuccessPage() {
	const router = useRouter();
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		// Überprüfen, ob wir von einer erfolgreichen PayPal-Zahlung kommen
		const hasValidOrder = sessionStorage.getItem('orderComplete');
		if (!hasValidOrder) {
			router.replace('/shop');
			return;
		}
		// Entfernen des Flags nach der Überprüfung
		sessionStorage.removeItem('orderComplete');
		setIsValid(true);
	}, [router]);

	if (!isValid) {
		return null;
	}

	return (
		<main className="min-h-screen bg-gray-50 py-12">

				<div className="max-w-3xl mx-auto px-4">
					<div className="bg-white rounded-2xl shadow-xl p-8 text-center">
						<div className="mb-8">
							<div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
								<svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>

						<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Zahlung erfolgreich!
						</h1>

						<p className="text-lg text-gray-600 mb-8">
							Vielen Dank für Ihren Einkauf. Ihre Bestellung wurde erfolgreich abgeschlossen und wird schnellstmöglich bearbeitet.
						</p>

						<div className="bg-gray-50 p-6 rounded-xl mb-8">
							<h2 className="text-xl font-semibold text-gray-900 mb-4">Nächste Schritte</h2>
							<ul className="text-left space-y-3">
								<li className="flex items-center text-gray-600">
									<svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
									</svg>
									Sie erhalten in Kürze eine Bestätigungs-E-Mail
								</li>
								<li className="flex items-center text-gray-600">
									<svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
									</svg>
									Ihre Bestellung wird für den Versand vorbereitet
								</li>
							</ul>
						</div>

						<Link 
							href="/shop" 
							className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 font-medium"
						>
							Zurück zum Shop
						</Link>
					</div>
				</div>
			</main>

	);
}