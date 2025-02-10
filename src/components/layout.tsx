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
						<Image src="/public/mysteryBox/logo.jpg" alt="Wundertüten.de" width={150} height={50} />
					</Link>
					<Navigation />
				</div>
			</header>
			<main>{children}</main>
			<Footer />
		</div>
	);
}

