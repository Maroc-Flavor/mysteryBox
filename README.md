# Mystery Box Shop

Modern e-commerce platform for mystery box auctions and sales, built with Next.js 13+.

## Features

- 🛍️ Mystery Box Shop with PayPal Integration
- 🎥 Live TikTok Auctions in Hero Section
- 🎨 Modern UI with Tailwind CSS
- 🛒 Shopping Cart System
- 💳 Secure Payment Processing
- 📱 Fully Responsive Design

## Recent Updates

### TikTok Live Integration
- Added live stream display in Hero Section
- Real-time auction status indicators
- Animated visual effects for live streams
- See [TIKTOK-INTEGRATION.md](./docs/TIKTOK-INTEGRATION.md) for details

### UI Improvements
- Enhanced Hero Section design
- Added animated borders and badges
- Improved visual feedback for live status
- Modern backdrop blur effects

## Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup
```bash
npm install
npm run dev
```

### Testing Live Features
The TikTok integration can be tested locally using the test mode in the API.

## Project Structure

```
mysteryBox/
├── docs/               # Documentation
├── public/            # Static assets
├── src/
│   ├── app/          # Next.js 13 app directory
│   ├── components/   # React components
│   ├── context/      # React context providers
│   └── services/     # API services
```

## Known Issues
- Image path resolution needs optimization
- TikTok API response handling improvements needed
- Live stream container styling refinements pending

## Next Steps
- Resolve image path issues
- Enhance TikTok API integration
- Add viewer count display
- Implement chat overlay

