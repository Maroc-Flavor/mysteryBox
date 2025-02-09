import Link from 'next/link';
import Cart from './Cart';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
			{/* Navigation */}
			<nav className="backdrop-blur-md bg-white/70 sticky top-0 z-50 border-b border-gray-100">
				<div className="container mx-auto px-4">
					<ul className="flex justify-center space-x-12 py-6">
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
