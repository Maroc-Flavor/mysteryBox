export interface NavigationLink {
	href: string;
	label: string;
}

export interface NavigationProps {
	links: NavigationLink[];
}

export interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	links: NavigationLink[];
}

export interface DesktopMenuProps {
	links: NavigationLink[];
}