interface MenuButtonProps {
	isOpen: boolean;
	onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => (
	<button 
		className="lg:hidden p-1.5 text-gray-700 rounded-lg hover:bg-gray-100/50 transition-colors"
		onClick={onClick}
		aria-label={isOpen ? 'Close menu' : 'Open menu'}
	>
		<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path 
				strokeLinecap="round" 
				strokeLinejoin="round" 
				strokeWidth={2} 
				d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
			/>
		</svg>
	</button>
);