# Components Architecture

This directory contains all the React components organized in a modular structure to promote maintainability and reusability.

## Directory Structure

```
components/
├── cart/                 # Cart-related components
│   ├── Cart.tsx         # Main cart component
│   ├── CartButton.tsx   # Cart toggle button
│   └── index.ts         # Barrel file for cart exports
├── common/              # Shared/common components
│   ├── CookieConsent.tsx
│   └── index.ts
├── layout/              # Layout components
│   ├── Footer.tsx
│   └── index.ts
├── navigation/          # Navigation components
│   ├── DesktopMenu.tsx
│   ├── Logo.tsx
│   ├── MenuButton.tsx
│   ├── MobileMenu.tsx
│   ├── Navigation.tsx
│   ├── ShopButton.tsx
│   └── index.ts
└── payment/            # Payment-related components
	├── PayPalCheckoutButton.tsx
	└── index.ts
```

## Usage

Each module exports its components through an index.ts barrel file, allowing for clean imports:

```typescript
// Import specific components
import { Cart, CartButton } from '@/components/cart';
import { CookieConsent } from '@/components/common';
import { Footer } from '@/components/layout';
import Navigation from '@/components/navigation';
import { PayPalCheckoutButton } from '@/components/payment';
```

## Design Principles

- **Modularity**: Each component is designed to be self-contained and reusable
- **Separation of Concerns**: Components are organized by feature/functionality
- **Clean Imports**: Barrel files provide clean, organized exports
- **Type Safety**: All components use TypeScript for type safety
- **Documentation**: Each module includes its own README with specific documentation

## Best Practices

1. Always import from the barrel file (index.ts), not directly from component files
2. Keep components focused and single-responsibility
3. Use TypeScript interfaces for component props
4. Document complex components with JSDoc comments
5. Follow the established directory structure for new components