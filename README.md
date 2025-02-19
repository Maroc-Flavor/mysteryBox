# MysteryBox Shop

A modern e-commerce platform for Mystery Boxes built with Next.js 14, featuring a responsive design and seamless shopping experience.

## Features

- 🛍️ Modern e-commerce interface
- 🎁 Dynamic product pages for Mystery Boxes
- 🛒 Shopping cart with real-time updates
- 💳 Secure PayPal payment integration
- 🎭 Live auction support
- 💫 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Styled with Tailwind CSS
- 🔒 Type-safe with TypeScript

## Project Structure

```
src/
├── app/                # Next.js 14 app directory
│   ├── shop/          # Shop pages and product listings
│   ├── checkout/      # Checkout process
│   └── uber-uns/      # About us page
├── components/        # Reusable React components
├── context/          # React Context for state management
├── providers/        # React providers (PayPal, etc.)
├── config/          # Configuration files
├── services/        # Business logic and services
└── data/           # Static data and configurations
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/mysteryBox.git
cd mysteryBox
```

2. Set up environment variables:
Create a `.env.local` file with:
```env
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your-sandbox-client-id
NEXT_PUBLIC_PAYPAL_MODE=sandbox
NEXT_PUBLIC_BASE_URL=/mysteryBox
NEXT_PUBLIC_PAYPAL_CURRENCY=EUR
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Deployment

1. Set up production environment:
Create `.env.production` with your production PayPal credentials.

2. Build the application:
```bash
npm run build
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Configure GitHub Pages:
   - Navigate to repository "Settings" > "Pages"
   - Select "gh-pages" branch as source
   - Save changes

The site will be available at `https://[your-username].github.io/mysteryBox`

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Payment**: PayPal SDK
- **Icons**: Heroicons, Lucide React
- **Type Safety**: TypeScript
- **Deployment**: GitHub Pages

## Development Tools

- ESLint for code linting
- PostCSS for CSS processing
- TypeScript for type checking

## Security

- Environment variables for sensitive data
- PayPal sandbox/production modes
- Secure payment processing
- Type-safe implementations
