'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface FlyingBoxProps {
	onCatch: () => void;
}

export default function FlyingBox({ onCatch }: FlyingBoxProps) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [velocity, setVelocity] = useState({ x: 0, y: 0 });
	const [isCaught, setIsCaught] = useState(false);
	const [particles, setParticles] = useState<Array<{ x: number; y: number; angle: number; scale: number }>>([]);
	const [rotation, setRotation] = useState(0);

	const updatePosition = useCallback(() => {
		if (!isCaught) {
			// Smooth sinusoidal movement
			const time = Date.now() / 1000;
			const dx = Math.sin(time) * 2;
			const dy = Math.cos(time * 1.5) * 2;

			setVelocity(prev => ({
				x: prev.x * 0.95 + dx * 0.05,
				y: prev.y * 0.95 + dy * 0.05
			}));

			setPosition(prev => ({
				x: (prev.x + velocity.x + window.innerWidth) % window.innerWidth,
				y: (prev.y + velocity.y + window.innerHeight) % window.innerHeight
			}));

			setRotation(prev => (prev + 0.5) % 360);
		}
	}, [isCaught, velocity]);

	useEffect(() => {
		const startX = Math.random() * window.innerWidth;
		const startY = Math.random() * window.innerHeight;
		setPosition({ x: startX, y: startY });

		const animationFrame = requestAnimationFrame(function animate() {
			updatePosition();
			if (!isCaught) requestAnimationFrame(animate);
		});

		return () => cancelAnimationFrame(animationFrame);
	}, [isCaught, updatePosition]);

	const createParticles = () => {
		const particleCount = 16;
		const newParticles = [];
		for (let i = 0; i < particleCount; i++) {
			const angle = (i * 360) / particleCount;
			const scale = 0.5 + Math.random() * 0.5;
			newParticles.push({ x: 0, y: 0, angle, scale });
		}
		setParticles(newParticles);
	};

	const handleClick = () => {
		if (!isCaught) {
			setIsCaught(true);
			createParticles();
			onCatch();
			setTimeout(() => {
				setIsCaught(false);
				setParticles([]);
				const newX = Math.random() * window.innerWidth;
				const newY = Math.random() * window.innerHeight;
				setPosition({ x: newX, y: newY });
			}, 1000);
		}
	};

	return (
		<div
			className={`absolute transition-all duration-500 cursor-pointer ${isCaught ? 'scale-0' : 'hover:scale-110'}`}
			style={{
				transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
				transition: 'transform 0.1s ease-out',
			}}
			onClick={handleClick}
		>
			<div className="relative w-20 h-20 group">
				{/* Box mit Glanz-Effekt */}
				<div className="relative w-full h-full transform transition-transform duration-300">
					<Image
						src="/mysteryBox/images/placeholder-box.jpg"
						alt="Flying Mystery Box"
						width={80}
						height={80}
						className="rounded-lg shadow-lg"
					/>
					<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
				</div>

				{/* Verbesserte Flügel mit Glitzer */}
				<div className="absolute -left-6 top-1/2 w-8 h-16 animate-wing-left">
					<div className="relative w-full h-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-500 rounded-l-full shadow-lg">
						<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)] animate-pulse" />
						{/* Glitzer-Punkte */}
						<div className="wing-sparkle absolute top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
						<div className="wing-sparkle absolute top-3/4 left-1/2" style={{ animationDelay: '0.5s' }} />
						<div className="wing-sparkle absolute top-1/2 left-3/4" style={{ animationDelay: '1s' }} />
					</div>
				</div>
				<div className="absolute -right-6 top-1/2 w-8 h-16 animate-wing-right">
					<div className="relative w-full h-full bg-gradient-to-l from-yellow-300 via-yellow-500 to-amber-500 rounded-r-full shadow-lg">
						<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)] animate-pulse" />
						{/* Glitzer-Punkte */}
						<div className="wing-sparkle absolute top-1/4 right-1/4" style={{ animationDelay: '0.3s' }} />
						<div className="wing-sparkle absolute top-3/4 right-1/2" style={{ animationDelay: '0.8s' }} />
						<div className="wing-sparkle absolute top-1/2 right-3/4" style={{ animationDelay: '1.3s' }} />
					</div>
				</div>

				{/* Verbesserte Partikel */}
				{isCaught && particles.map((particle, index) => (
					<div
						key={index}
						className="particle absolute w-3 h-3"
						style={{
							'--angle': `${particle.angle}deg`,
							'--scale': particle.scale,
							left: '50%',
							top: '50%',
							transform: `scale(var(--scale))`,
						} as React.CSSProperties}
					/>
				))}

				{/* Schweif-Effekt */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute w-full h-full bg-gradient-to-r from-yellow-400/20 via-amber-300/10 to-transparent blur-lg transform -translate-x-full animate-trail" />
				</div>
			</div>
		</div>
	);
}