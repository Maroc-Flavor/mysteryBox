import Link from 'next/link';

export const ShopButton = () => (
	<Link
		href="/shop"
		className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
	>
		Jetzt entdecken
	</Link>
);