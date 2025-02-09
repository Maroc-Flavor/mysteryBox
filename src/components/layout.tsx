import Link from 'next/link';
import Cart from './Cart';
import { useCart } from '@/context/CartContext';

export default function Layout({ children }: { children: React.ReactNode }) {
	const { totalItems } = useCart();

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
			{/* Navigation */}
			<nav className="backdrop-blur-md bg-white/70 sticky top-0 z-50 border-b border-gray-100">
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center py-6">
						<ul className="flex space-x-12">
							<li>
								<Link href="/" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link href="/uber-uns" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">
									Über uns
								</Link>
							</li>
							<li>
								<Link href="/shop" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">
									Shop
								</Link>
							</li>
							<li>
								<Link href="/kontakt" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">
									Kontakt
								</Link>
							</li>
						</ul>
						<button className="relative group">
							<div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
								<svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
								{totalItems > 0 && (
									<span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
										{totalItems}
									</span>
								)}
							</div>
						</button>
					</div>
				</div>
			</nav>

			{children}

			<Cart />

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Rechtliches</h3>
							<ul className="space-y-2">
								<li><Link href="/impressum" className="hover:text-indigo-400">Impressum</Link></li>
								<li><Link href="/agb" className="hover:text-indigo-400">AGB</Link></li>
								<li><Link href="/datenschutz" className="hover:text-indigo-400">Datenschutz</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Social Media</h3>
							<ul className="space-y-2">
								<li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
								<li><a href="#" className="hover:text-indigo-400">Instagram</a></li>
								<li><a href="#" className="hover:text-indigo-400">Twitter</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
