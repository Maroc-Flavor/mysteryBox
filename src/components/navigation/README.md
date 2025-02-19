# Navigation Components

A collection of modular, reusable navigation components for the MysteryBox application.

## Components

### Navigation
The main navigation component that combines all sub-components into a responsive navigation bar.
- Features scroll-based background changes
- Responsive design with mobile menu
- Animated transitions
- Cart integration

### Logo
Displays the application logo with proper image optimization and hover effects.

### DesktopMenu
Horizontal menu for desktop viewports, displaying main navigation links.
- Props: `links: NavigationLink[]`

### MobileMenu
Collapsible menu for mobile viewports with smooth animations.
- Props:
	- `isOpen: boolean`
	- `onClose: () => void`
	- `links: NavigationLink[]`

### MenuButton
Hamburger menu button with animated state transitions.
- Props:
	- `isOpen: boolean`
	- `onClick: () => void`

### ShopButton
Call-to-action button for the shop with hover effects.

## Usage

```typescript
import Navigation from '@/components/navigation';

// In your layout or page component
export default function Layout() {
	return (
		<div>
			<Navigation />
			{/* rest of your content */}
		</div>
	);
}
```

## Types

```typescript
interface NavigationLink {
	href: string;
	label: string;
}
```

## Architecture

The navigation system follows these principles:
- Separation of concerns with modular components
- Type safety with TypeScript
- Responsive design with Tailwind CSS
- Performance optimization with Next.js Image component
- Accessibility considerations