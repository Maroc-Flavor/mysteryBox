'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4 py-6 flex justify-between items-center">
					<Link href="/">
						<Image className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300"
						 					src="/mysteryBox/logo.jpg" alt="Wundertüten.de" width={200} height={80} />
					</Link>
					<Navigation />
				</div>
			</header>
			<main>{children}</main>
			<Footer />
		</div>
	);
}

