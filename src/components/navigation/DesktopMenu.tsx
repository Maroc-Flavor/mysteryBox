import Link from 'next/link';
import { DesktopMenuProps } from '@/types/navigation';

export const DesktopMenu = ({ links }: DesktopMenuProps) => (
	<div className="hidden lg:flex lg:items-center lg:space-x-8">
		{links.map(({ href, label }) => (
			<Link 
				key={href}
				href={href} 
				className="text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50"
			>
				{label}
			</Link>
		))}
	</div>
);