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
								<a href="https://www.tiktok.com/@simo4287/"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
										</svg>
									</span>
									TikTok
								</a>
							</li>
							<li>
								<a href="#"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
										</svg>
									</span>
									Facebook
								</a>
							</li>
							<li>
								<a href="#"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
										</svg>
									</span>
									Instagram
								</a>
							</li>
							<li>
								<a href="#"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
									<span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
										</svg>
									</span>
									Twitter
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
							<span>Made with</span>
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