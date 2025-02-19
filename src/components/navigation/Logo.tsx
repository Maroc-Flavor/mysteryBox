import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
	<div className="flex-shrink-0">
		<Link href="/" className="group relative flex items-center">
			{/* Animated background effect */}
			<div className="absolute -inset-2 bg-gradient-to-r from-[#C4A484]/20 via-[#C4A484]/10 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
			
			{/* Logo container */}
			<div className="relative p-2">
				<div className="relative h-12 w-36 overflow-hidden">
					<Image
						src="/mysteryBox/images/logo.webp"
						alt="Mystery Box Shop"
						fill
						className="object-contain transition-all duration-300 group-hover:scale-105"
						priority
						sizes="(max-width: 768px) 120px, 144px"
						quality={90}
						style={{ objectFit: 'contain' }}
					/>
				</div>
				
				{/* Decorative elements */}
				<div className="absolute -top-1 -right-1 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
					✨
				</div>
				<div className="absolute -bottom-1 -left-1 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 animate-bounce">
					🎁
				</div>
			</div>
			
			{/* Hover text */}
			<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-[#C4A484] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-[#C4A484]/20">
				Zur Startseite
			</div>
		</Link>
	</div>
);