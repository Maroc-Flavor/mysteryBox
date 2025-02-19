import Link from 'next/link';
import { MobileMenuProps } from '@/types/navigation';

export const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => (
	<div 
		className={`lg:hidden fixed inset-x-0 top-16 transition-all duration-300 ${
			isOpen 
				? 'opacity-100 translate-y-0' 
				: 'opacity-0 -translate-y-2 pointer-events-none'
		}`}
	>
		<div className="mx-4 rounded-xl overflow-hidden bg-white/95 backdrop-blur-xl border border-[#C4A484]/20 shadow-lg">
			<div className="p-2 space-y-1">
				{links.map(({ href, label }) => (
					<Link 
						key={href}
						href={href} 
						className="group relative block px-4 py-3 rounded-lg text-gray-700 hover:text-[#C4A484] font-medium transition-all duration-300"
						onClick={onClose}
					>
						{/* Background hover effect */}
						<div className="absolute inset-0 bg-[#C4A484]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
						
						{/* Link content */}
						<div className="relative flex items-center justify-between">
							<span>{label}</span>
							<svg 
								className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</div>
						
						{/* Underline effect */}
						<span className="absolute bottom-2 left-4 right-4 h-px bg-[#C4A484] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
					</Link>
				))}
			</div>
			
			{/* Bottom decoration */}
			<div className="h-1 bg-gradient-to-r from-[#C4A484]/20 via-[#C4A484]/10 to-purple-500/20"></div>
		</div>
		
		{/* Backdrop */}
		<div 
			className={`fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-300 -z-10 ${
				isOpen ? 'opacity-100' : 'opacity-0'
			}`}
			onClick={onClose}
		/>
	</div>
);