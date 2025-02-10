'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import Navigation from './Navigation';
import Cart from './Cart';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="w-full bg-white shadow-md relative">
				<div className="w-full max-w-7xl mx-auto px-4 py-3 md:py-6">
					<div className="flex items-center justify-between">
						<Link href="/" className="relative z-10 flex-shrink-0">
							<div className="relative w-[80px] h-[32px] md:w-[150px] md:h-[60px]">
								<Image
									src="/mysteryBox/logo.jpg"
									alt="Wundertüten.de"
									fill
									className="object-contain rounded-full transition-all duration-300 hover:opacity-90"
									priority
								/>
							</div>
						</Link>
						<div className="flex items-center">
							<Navigation />
						</div>
					</div>
				</div>
			</header>
			<main className="flex-grow">{children}</main>
			<Footer />
			<Cart />
		</div>
	);
}

