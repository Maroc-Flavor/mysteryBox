'use client';

import Link from 'next/link';
import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-white text-lg font-semibold tracking-wide">Unternehmen</h3>
						<ul className="space-y-3">
							<li>
								<Link href="/impressum"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
									Impressum
								</Link>
							</li>
							<li>
								<Link href="/agb"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
									AGB
								</Link>
							</li>
							<li>
								<Link href="/datenschutz"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
									Datenschutz
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Links */}
					<div className="space-y-4">
						<h3 className="text-white text-lg font-semibold tracking-wide">Social Media</h3>
						<ul className="space-y-3">
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path d="M10 2a6 6 0 00-6 6v3.582c0 .552.223 1.087.572 1.43H7.008v4h.004c.001.002.002.004.003.006a10.003 10.003 0 002.286 1.504A4 4 0 119.75 16.464c-.97 0-1.94-.201-2.757-.572V15c0-1.106.894-2 2-2h1.555v-2.004c0-1.21.79-2.201 2-2.201.607 0 1.18.185 1.646.512l.636-.636V12h-2.004c-1.106 0-2-.894-2-2v-1h2v1c0 .552.223 1.087.572 1.43H13v4h3.582c.349 0 .672-.22.894-.572v-6.764a1 1 0 00-1.447-.894z"/>
										</svg>
									</span>
									Facebook
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 8a1 1 0 012 0v2H7V8zm3 0a1 1 0 012 0v2h-2V8zm3 0a1 1 0 012 0v2h-2V8z" clipRule="evenodd" />
										</svg>
									</span>
									Instagram
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path d="M6.28 5.22a.75.75 0 011.06 0l7.72 7.72a.75.75 0 11-1.06 1.06l-7.72-7.72a.75.75 0 010-1.06z"/>
										</svg>
									</span>
									Twitter
								</a>
							</li>
							<li>
								<a href="https://www.tiktok.com/@simo4287/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v2H7V8zm7 0a1 1 0 012 0v2h-2V8z" clipRule="evenodd" />
										</svg>
									</span>
									TikTok
								</a>
							</li>
						</ul>
					</div>


					{/* Newsletter Subscription */}
					<div className="lg:col-span-2 space-y-4">
						<h3 className="text-white text-lg font-semibold tracking-wide">Newsletter</h3>
						<p className="text-gray-400 text-sm">Bleibe auf dem Laufenden über unsere neuesten Produkte und Angebote.</p>
						<form className="flex gap-2">
							<input
								type="email"
								placeholder="Deine Email-Adresse"
								className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
							/>
							<button
								type="submit"
								className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
							>
								Abonnieren
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<p className="text-gray-400 text-sm">
							© 2025 Almoukramin. Alle Rechte vorbehalten.
						</p>
						<div className="flex items-center gap-2 text-sm text-gray-400">
							<span>Made with a lot</span>
							<Heart className="w-4 h-4 text-pink-500 animate-pulse" />
							<span>&</span>
							<Coffee className="w-4 h-4 text-amber-500" />
							<span>by</span>
							<a href="https://almoukramin.com"
								className="text-white hover:text-indigo-400 font-medium transition-colors duration-200">
								almoukramin.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}