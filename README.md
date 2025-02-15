# MysteryBox Shop

A modern e-commerce platform for Mystery Boxes built with Next.js 14, featuring a responsive design and seamless shopping experience.

## Features

- 🛍️ Modern e-commerce interface
- 🎁 Dynamic product pages for Mystery Boxes
- 🛒 Shopping cart with real-time updates
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
└── data/            # Static data and configurations
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/mysteryBox.git
cd mysteryBox
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

3. Configure GitHub Pages:
   - Navigate to repository "Settings" > "Pages"
   - Select "gh-pages" branch as source
   - Save changes

The site will be available at `https://[your-username].github.io/mysteryBox`

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, Lucide React
- **Type Safety**: TypeScript
- **Deployment**: GitHub Pages

## Development Tools

- ESLint for code linting
- PostCSS for CSS processing
- TypeScript for type checking
