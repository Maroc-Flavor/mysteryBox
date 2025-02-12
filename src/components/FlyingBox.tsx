'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FlyingBoxProps {
	onCatch: () => void;
}

export default function FlyingBox({ onCatch }: FlyingBoxProps) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isCaught, setIsCaught] = useState(false);
	const [particles, setParticles] = useState<Array<{ x: number; y: number; angle: number }>>([]);

	useEffect(() => {
		const startX = Math.random() * (window.innerWidth - 100);
		const startY = Math.random() * (window.innerHeight - 100);
		setPosition({ x: startX, y: startY });

		const moveBox = () => {
			if (!isCaught) {
				setPosition(prev => ({
					x: prev.x + (Math.random() * 4 - 2),
					y: prev.y + (Math.random() * 4 - 2)
				}));
			}
		};

		const interval = setInterval(moveBox, 50);
		return () => clearInterval(interval);
	}, [isCaught]);

	const createParticles = () => {
		const particleCount = 12; // Erhöht von 8 auf 12 für mehr Effekt
		const newParticles = [];
		for (let i = 0; i < particleCount; i++) {
			const angle = (i * 360) / particleCount;
			newParticles.push({ x: 0, y: 0, angle });
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
				const newX = Math.random() * (window.innerWidth - 100);
				const newY = Math.random() * (window.innerHeight - 100);
				setPosition({ x: newX, y: newY });
			}, 1000);
		}
	};

	return (
		<div
			className={`absolute transition-transform cursor-pointer ${isCaught ? 'scale-0' : ''}`}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
				transition: 'all 0.5s ease',
			}}
			onClick={handleClick}
		>
			<div className="relative w-16 h-16">
				<Image
					src="/mysteryBox/images/placeholder-box.jpg"
					alt="Flying Mystery Box"
					width={64}
					height={64}
					className="rounded-lg shadow-lg"
				/>
				{/* Goldene Flügel */}
				<div className="absolute -left-4 top-1/2 w-6 h-12 animate-wing-left">
					<div className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-l-full" />
				</div>
				<div className="absolute -right-4 top-1/2 w-6 h-12 animate-wing-right">
					<div className="w-full h-full bg-gradient-to-l from-yellow-400 to-yellow-600 rounded-r-full" />
				</div>

				{/* Partikel-Effekt */}
				{isCaught && particles.map((particle, index) => (
					<div
						key={index}
						className="particle absolute w-2 h-2"
						style={{
							'--angle': `${particle.angle}deg`,
							left: '50%',
							top: '50%',
						} as React.CSSProperties}
					/>
				))}

			</div>
		</div>
	);
}