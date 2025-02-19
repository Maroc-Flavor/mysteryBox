import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
	<div className="flex-shrink-0">
		<Link href="/" className="relative flex items-center">
			<div className="relative w-[80px] h-[24px] md:w-[80px] md:h-[100px] bg-white/80 rounded-full p-8">
				<Image
					src="/mysteryBox/images/logo.webp"
					alt="Wundertüten.de"
					fill
					className="object-contain rounded-full transition-all duration-300 hover:opacity-90"
					priority
					sizes="(max-width: 768px) 60px, 100px"
					quality={85}
					style={{ objectFit: 'contain' }}
				/>
			</div>
		</Link>
	</div>
);