import Link from 'next/link';

export default function Footer() {
	return (
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
							<li><a href="https://www.tiktok.com/@simo4287/" className="hover:text-indigo-400">TikTok</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}