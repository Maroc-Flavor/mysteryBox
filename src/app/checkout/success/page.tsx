'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function Success() {
	return (
		<Layout>
			<main className="min-h-screen bg-gray-50 py-24">
				<div className="max-w-3xl mx-auto px-4">
					<div className="bg-white rounded-2xl shadow-xl p-8 text-center">
						<div className="mb-8">
							<div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
								<svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>
						
						<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							Bestellung erfolgreich!
						</h1>
						
						<p className="text-gray-600 mb-8">
							Vielen Dank für Ihren Einkauf. Wir haben Ihre Bestellung erhalten und werden sie schnellstmöglich bearbeiten.
						</p>

						<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8">
							<h2 className="text-xl font-semibold text-gray-900 mb-2">Was passiert als Nächstes?</h2>
							<ul className="text-gray-600 text-left space-y-3">
								<li className="flex items-center">
									<svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
									</svg>
									Sie erhalten in Kürze eine Bestätigungs-E-Mail
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
									</svg>
									Updates zum Versandstatus werden per E-Mail zugestellt
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
									</svg>
									Ihr Paket wird innerhalb der nächsten 1-3 Werktage versendet
								</li>
							</ul>
						</div>

						<div className="flex gap-4 justify-center">
							<Link 
								href="/"
								className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity"
							>
								Zurück zur Startseite
							</Link>
							<Link 
								href="/shop"
								className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors"
							>
								Weiter einkaufen
							</Link>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}