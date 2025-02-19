import Link from 'next/link';
import { DesktopMenuProps } from '@/types/navigation';

export const DesktopMenu = ({ links }: DesktopMenuProps) => (
	<div className="hidden lg:flex lg:items-center lg:space-x-2">
		{links.map(({ href, label }) => (
			<Link 
				key={href}
				href={href} 
				className="relative group px-4 py-2"
			>
				{/* Background hover effect */}
				<div className="absolute inset-0 bg-[#C4A484]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
				
				{/* Text with hover effect */}
				<span className="relative text-gray-700 group-hover:text-[#C4A484] font-medium transition-colors duration-300">
					{label}
				</span>
				
				{/* Underline effect */}
				<span className="absolute bottom-1.5 left-4 right-4 h-px bg-[#C4A484] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
			</Link>
		))}
	</div>
);