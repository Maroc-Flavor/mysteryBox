'use client';

import Layout from '@/components/layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Success() {
	const router = useRouter();
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		// Check if we came from a successful payment
		const hasValidOrder = sessionStorage.getItem('orderComplete');
		if (!hasValidOrder) {
			router.replace('/shop');
			return;
		}
		sessionStorage.removeItem('orderComplete');
		setIsValid(true);
	}, [router]);

	if (!isValid) {
		return null;
	}

	return (
		<Layout>
			<main className="min-h-screen bg-black py-12 md:py-24">
				<div className="max-w-3xl mx-auto px-4">
					<div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-800 text-center">
						<div className="mb-6 md:mb-8">
							<div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
								<svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>

						<h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Bestellung erfolgreich!
						</h1>

						<p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
							Vielen Dank für Ihren Einkauf. Wir haben Ihre Bestellung erhalten und werden sie schnellstmöglich bearbeiten.
						</p>

						<div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 md:p-6 rounded-xl mb-6 md:mb-8 border border-gray-700">
							<h2 className="text-lg md:text-xl font-semibold text-gray-100 mb-3">Was passiert als Nächstes?</h2>
							<ul className="text-gray-300 text-left space-y-3">
								<li className="flex items-center">
									<svg className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
									</svg>
									Sie erhalten in Kürze eine Bestätigungs-E-Mail
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
									</svg>
									Wir informieren Sie über den Versand
								</li>
							</ul>
						</div>

						<Link href="/shop" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 font-medium">
							Zurück zum Shop
						</Link>

					</div>
				</div>
			</main>
		</Layout>
	);
}