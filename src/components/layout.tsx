'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="bg-white shadow-md sticky top-0 z-50 transition-shadow duration-300">
				<div className="container mx-auto px-4 py-3 sm:py-4 md:py-5 flex items-center justify-between">
					<Link href="/" className="shrink-0">
						<Image 
							src="/mysteryBox/logo.jpg" 
							alt="Wundertüten.de" 
							width={150} 
							height={50} 
							className="w-auto max-w-full md:max-w-[150px] object-contain transition-transform duration-300 hover:scale-105"
							priority
						/>
					</Link>
					<nav className="flex items-center space-x-4">
						<Navigation />
					</nav>
				</div>

			</header>
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}

