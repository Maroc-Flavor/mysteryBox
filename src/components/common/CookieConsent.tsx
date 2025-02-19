'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cookieService } from '@/services/cookieService';

type CookieConsent = {
	necessary: boolean;
	analytics: boolean;
	marketing: boolean;
};

const defaultConsent: CookieConsent = {
	necessary: true,
	analytics: false,
	marketing: false,
};

export default function CookieConsent() {
	const [showBanner, setShowBanner] = useState(false);
	const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

	useEffect(() => {
		const necessaryCookie = cookieService.getCookie('necessary_cookies');
		const analyticsCookie = cookieService.getCookie('analytics_enabled');
		const marketingCookie = cookieService.getCookie('marketing_enabled');

		if (!necessaryCookie) {
			setShowBanner(true);
			cookieService.setNecessaryCookies(); // Always set necessary cookies
		} else {
			setConsent({
				necessary: true,
				analytics: analyticsCookie === 'true',
				marketing: marketingCookie === 'true'
			});
		}
	}, []);

	const handleAcceptAll = () => {
		const fullConsent: CookieConsent = {
			necessary: true,
			analytics: true,
			marketing: true,
		};
		saveConsent(fullConsent);
	};

	const handleCustomize = (newConsent: CookieConsent) => {
		saveConsent(newConsent);
	};

	const handleDenyAll = () => {
		saveConsent(defaultConsent);
	};

	const saveConsent = (consentData: CookieConsent) => {
		cookieService.setNecessaryCookies();
		cookieService.setAnalyticsCookies(consentData.analytics);
		cookieService.setMarketingCookies(consentData.marketing);
		
		setConsent(consentData);
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-6">
			<div className="max-w-6xl mx-auto">
				<h3 className="text-xl text-gray-800 font-bold mb-4">Cookie-Einstellungen</h3>
				<p className="mb-4 text-gray-700">
					Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
					Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</Link>.
				</p>
				
				<div className="space-y-4 text-gray-600 mb-6">
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={consent.necessary}
							disabled
							className="mr-2"
						/>
						<label>Notwendige Cookies (erforderlich)</label>
					</div>
					
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={consent.analytics}
							onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
							className="mr-2"
						/>
						<label>Analyse-Cookies</label>
					</div>
					
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={consent.marketing}
							onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
							className="mr-2"
						/>
						<label>Marketing-Cookies</label>
					</div>
				</div>

				<div className="flex gap-4">
					<button
						onClick={handleAcceptAll}
						className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
					>
						Alle akzeptieren
					</button>
					<button
						onClick={() => handleCustomize(consent)}
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
					>
						Auswahl speichern
					</button>
					<button
						onClick={handleDenyAll}
						className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
					>
						Nur notwendige akzeptieren
					</button>
				</div>
			</div>
		</div>
	);
}