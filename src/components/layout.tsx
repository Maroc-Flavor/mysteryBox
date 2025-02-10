'use client';

import Footer from './Footer';
import Navigation from './Navigation';
import Cart from './Cart';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<Navigation />
			{/* Add padding-top to account for fixed navigation */}
			<div className="pt-16 md:pt-20">
				<main className="flex-grow">{children}</main>
			</div>
			<Footer />
			<Cart />
		</div>
	);
}


