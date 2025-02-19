import Link from 'next/link';
import { MobileMenuProps } from '@/types/navigation';

export const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => (
	<div className={`lg:hidden absolute w-full transition-all duration-300 ${
		isOpen 
			? 'opacity-100 translate-y-0' 
			: 'opacity-0 -translate-y-2 pointer-events-none'
	}`}>
		<div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg border-t border-gray-200">
			{links.map(({ href, label }) => (
				<Link 
					key={href}
					href={href} 
					className="block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors"
					onClick={onClose}
				>
					{label}
				</Link>
			))}
		</div>
	</div>
);