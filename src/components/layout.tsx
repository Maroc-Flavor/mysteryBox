'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4 py-3 md:py-6 flex justify-between items-center w-full">
					<Link href="/" className="relative flex-shrink-0">
						<Image 
							className="w-[150px] md:w-[200px] h-auto rounded-full transition-all duration-300 hover:opacity-90"
							src="/mysteryBox/logo.jpg" 
							alt="Wundertüten.de" 
							width={200} 
							height={80}
							priority 
						/>
					</Link>
					<Navigation />
				</div>
			</header>
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}

