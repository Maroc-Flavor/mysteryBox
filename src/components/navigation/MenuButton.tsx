interface MenuButtonProps {
	isOpen: boolean;
	onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => (
	<button 
		className="group lg:hidden relative p-2.5 rounded-xl hover:bg-[#C4A484]/10 transition-all duration-300"
		onClick={onClick}
		aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
	>
		{/* Background effect */}
		<div className="absolute inset-0 rounded-xl border border-[#C4A484]/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
		
		{/* Menu icon */}
		<svg 
			className="w-5 h-5 text-gray-700 transition-colors group-hover:text-[#C4A484]" 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
		>
			<path 
				strokeLinecap="round" 
				strokeLinejoin="round" 
				strokeWidth={2} 
				d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
			/>
		</svg>
		
		{/* Hover tooltip */}
		<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm text-[#C4A484] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-[#C4A484]/20">
			{isOpen ? 'Menü schließen' : 'Menü öffnen'}
		</span>
	</button>
);