# Components Documentation

## Live Stream Integration

### Hero Section Live Stream
Located in `src/app/page.tsx`, the live stream component includes:

```typescript
{isLive && roomId ? (
	<div className="relative w-full h-full">
		{/* Live stream container with animations */}
		<iframe src={`https://www.tiktok.com/embed/live/${roomId}`} />
		{/* Live status indicators */}
	</div>
) : (
	// Fallback content
)}
```

### Visual Effects
- Pulsing border animation
- Live status badge
- Backdrop blur effects
- Overlay information

### State Management
```typescript
const [isLive, setIsLive] = useState(false);
const [roomId, setRoomId] = useState<string | null>(null);
```

### API Integration
```typescript
useEffect(() => {
	const checkTikTokStatus = async () => {
		const response = await fetch('/api/tiktok-status');
		const data = await response.json();
		setIsLive(data.isLive);
		setRoomId(data.roomId);
	};
	// Check every minute
	const interval = setInterval(checkTikTokStatus, 60000);
	return () => clearInterval(interval);
}, []);
```

## Component Structure
```
components/
├── cart/           # Shopping cart components
├── common/         # Shared components
├── layout/         # Layout components
├── navigation/     # Navigation components
└── payment/        # Payment integration
```

## Styling Guidelines
- Use Tailwind CSS for styling
- Follow BEM-like class naming
- Maintain consistent animation timings
- Use CSS variables for theming

## Best Practices
1. Keep components focused and single-responsibility
2. Use TypeScript interfaces for props
3. Implement proper error boundaries
4. Optimize for performance
5. Follow accessibility guidelines