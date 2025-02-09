'use client';

import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
			<Navigation />
			{children}
			<Footer />
		</div>
	);
}

