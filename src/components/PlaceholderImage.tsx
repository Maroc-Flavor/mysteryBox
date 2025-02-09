import React from 'react';

interface PlaceholderImageProps {
	category: string;
	className?: string;
}

export default function PlaceholderImage({ category, className = '' }: PlaceholderImageProps) {
	const getBackgroundColor = () => {
		switch (category) {
			case 'Tech':
				return 'bg-blue-500';
			case 'Fashion':
				return 'bg-pink-500';
			case 'Food':
				return 'bg-green-500';
			default:
				return 'bg-gray-500';
		}
	};

	return (
		<div className={`relative w-full h-full ${getBackgroundColor()} ${className}`}>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-white text-center">
					<div className="text-4xl mb-2">📦</div>
					<div className="text-xl font-bold">{category}</div>
					<div className="text-sm">Mystery Box</div>
				</div>
			</div>
		</div>
	);
}