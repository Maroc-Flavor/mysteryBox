import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
                        <ul className="space-y-2">
                            <li><Link href="/impressum" className="hover:text-indigo-400">Impressum</Link></li>
                            <li><Link href="/agb" className="hover:text-indigo-400">AGB</Link></li>
                            <li><Link href="/datenschutz" className="hover:text-indigo-400">Datenschutz</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Social Media</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Instagram</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Twitter</a></li>
                            <li><a href="https://www.tiktok.com/@simo4287/" className="hover:text-indigo-400">TikTok</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Copyright mit Icons */}
            <div className="border-t border-gray-800 mt-8 pt-8">
                <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-1">
                    Made with 
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    & 
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 21v-2h18v2H2zm2-4v-3h2v3H4zm4 0v-3h2v3H8zm4 0v-3h2v3h-2zm4 0v-3h2v3h-2zM3 12l4-8h10l4 8H3z"/>
                    </svg>
                    <span className="ml-1">
                        <a href="https://almoukramin.com" className="hover:text-indigo-400 font-medium transition-colors">
                            Almoukramin.com
                        </a>
                    </span>
                </p>
            </div>
        </footer>
    );
}