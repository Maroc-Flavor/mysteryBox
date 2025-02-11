'use client';

import Link from 'next/link';
import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold tracking-wide">Unternehmen</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/impressum" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/agb" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                                    AGB
                                </Link>
                            </li>
                            <li>
                                <Link href="/datenschutz" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                                    Datenschutz
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold tracking-wide">Social Media</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                                        <i className="fab fa-facebook-f"></i>
                                    </span>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                                        <i className="fab fa-instagram"></i>
                                    </span>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@simo4287/" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                                        <i className="fab fa-tiktok"></i>
                                    </span>
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-white text-lg font-semibold tracking-wide">Newsletter</h3>
                        <p className="text-gray-400 text-sm">Bleibe auf dem Laufenden über unsere neuesten Produkte und Angebote.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Deine Email-Adresse"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
                            >
                                Abonnieren
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2024 Almoukramin. Alle Rechte vorbehalten.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
                            <span>&</span>
                            <Coffee className="w-4 h-4 text-amber-500" />
                            <span>by</span>
                            <a href="https://almoukramin.com" 
                               className="text-white hover:text-indigo-400 font-medium transition-colors duration-200">
                                Almoukramin.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}