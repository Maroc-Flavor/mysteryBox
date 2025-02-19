'use client';

import { useState } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { MAIN_NAVIGATION_LINKS } from '@/constants/navigation';
import { Logo } from './Logo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { MenuButton } from './MenuButton';
import { ShopButton } from './ShopButton';
import { CartButton } from '@/components/cart';

/**
 * Main navigation component that provides both desktop and mobile navigation.
 * Features:
 * - Responsive design with mobile menu
 * - Scroll-based background changes
 * - Animated transitions
 * - Cart integration
 */
export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isScrolled = useScroll({ threshold: 10 });

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
			isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
		}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Logo />
					<DesktopMenu links={MAIN_NAVIGATION_LINKS} />
					
					<div className="flex items-center gap-4">
						<MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
						<ShopButton />
						<CartButton />
					</div>
				</div>
			</div>

			<MobileMenu 
				isOpen={isMenuOpen} 
				onClose={() => setIsMenuOpen(false)} 
				links={MAIN_NAVIGATION_LINKS}
			/>
		</nav>
	);
};

export default Navigation;
