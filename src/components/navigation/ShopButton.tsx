import Link from 'next/link';

export const ShopButton = () => (
	<Link
		href="/shop"
		className="group hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-xl relative overflow-hidden"
	>
		{/* Background layers */}
		<div className="absolute inset-0 bg-[#C4A484]/10 transition-all duration-300 group-hover:bg-[#C4A484]/20"></div>
		<div className="absolute inset-0 border border-[#C4A484]/20 rounded-xl group-hover:border-[#C4A484]/40 transition-all duration-300"></div>
		
		{/* Content */}
		<span className="relative flex items-center gap-2 text-[#C4A484]">
			<span>Jetzt entdecken</span>
			<svg 
				className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
				fill="none" 
				stroke="currentColor" 
				viewBox="0 0 24 24"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		</span>
		
		{/* Hover effect */}
		<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#C4A484]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
	</Link>
);