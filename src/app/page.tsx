'use client';

import Image from "next/image";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { LIVE_CONFIG } from '@/config/liveStatus';

interface Product {
  id: number;
  category: string;
  name: string;
  price: number | string;
  originalPrice: number | string;
  offer: string;
  image: string;
  description: string;
  detailDescription: string;
}

interface StreamSchedule {
  day: string;
  time: string;
  platform: 'Instagram' | 'TikTok' | 'Facebook';
}

const streamSchedule: StreamSchedule[] = [
  { day: 'Montag', time: '20:00', platform: 'TikTok' },
  { day: 'Mittwoch', time: '19:30', platform: 'TikTok' },
  { day: 'Freitag', time: '21:00', platform: 'TikTok' },
  { day: 'Sonntag', time: '18:00', platform: 'TikTok' },
];

// Countdown Helper Funktionen
const getNextStream = (schedule: StreamSchedule[]) => {
  const now = new Date();
  const today = now.getDay(); // 0 = Sonntag, 1 = Montag, ...
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const dayMap: { [key: string]: number } = {
    'Montag': 1,
    'Mittwoch': 3,
    'Freitag': 5,
    'Sonntag': 0
  };

  return schedule.find(stream => {
    const streamDay = dayMap[stream.day];
    const [hours, minutes] = stream.time.split(':').map(Number);
    const streamTime = hours * 60 + minutes;

    return (
      today < streamDay || 
      (today === streamDay && currentTime < streamTime)
    );
  }) || schedule[0];
};

const getTimeUntilStream = (nextStream: StreamSchedule) => {
  const now = new Date();
  const dayMap: { [key: string]: number } = {
    'Montag': 1,
    'Mittwoch': 3,
    'Freitag': 5,
    'Sonntag': 0
  };

  const targetDay = dayMap[nextStream.day];
  const [hours, minutes] = nextStream.time.split(':').map(Number);
  
  const target = new Date();
  target.setDate(target.getDate() + ((targetDay + 7 - target.getDay()) % 7));
  target.setHours(hours, minutes, 0, 0);

  const diff = target.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours: hrs, minutes: mins };
};

export default function Home() {
  const { addItem, setIsCartOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLive, setIsLive] = useState(LIVE_CONFIG.isLive);
  const [roomId, setRoomId] = useState(LIVE_CONFIG.roomId);
  const [nextStream, setNextStream] = useState(getNextStream(streamSchedule));
  const [timeUntil, setTimeUntil] = useState(getTimeUntilStream(nextStream));

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Einfache Statusprüfung
    const checkLiveStatus = () => {
      setIsLive(LIVE_CONFIG.isLive);
      setRoomId(LIVE_CONFIG.roomId);
    };

    // Initial check
    checkLiveStatus();

    // Check every 30 seconds
    const interval = setInterval(checkLiveStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntil(getTimeUntilStream(nextStream));
    }, 60000); // Update jede Minute

    return () => clearInterval(timer);
  }, [nextStream]);

  const products: Product[] = [
    {
      id: 7,
      category: 'XXL',
      name: 'XXL Premium Mystery Box',
      price: 99.99,
      originalPrice: 279.99,
      offer: '',
        image: '/mysteryBox/images/products/mysterybox-xxl.webp',
      description: '10 KG Überraschungsbox',
      detailDescription: '10 KG Überraschungsbox'
    },
    {
      id: 8,
      category: 'Starter',
      name: 'Starter Mystery Box',
      price: 39.99,
      originalPrice: 120.00,
      offer: '',
        image: '/mysteryBox/images/products/starterBox2.webp',
      description: '3 KG Überraschungskarton',
      detailDescription: '3 KG Überraschungsbox'
    },
    {
      id: 9,
      category: 'Individuell',
      name: 'Individuelle Mystery Box',
      price: '',
      originalPrice: '',
      offer: 'Flexible',
        image: '/mysteryBox/images/products/individuellBoxFrontPage.webp',
      description: 'individuell anpassbar. Sprich mit uns.',
      detailDescription: 'individuell anpassbar. Sprich mit uns.'
    }
  ];

  const handleAddToCart = (product: Product) => {
    if (product && typeof product.price === 'number') {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice || '',
        image: product.image,
        quantity: 1
      });
      setIsCartOpen(true);
    }
  };

  return (
    <main className="flex-grow bg-gradient-to-b from-gray-50 via-white to-gray-50">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 opacity-5 bg-[url('/mysteryBox/images/pattern-grid.svg')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className={`text-white space-y-6 md:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                Entdecke das
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Unerwartete
                </span>
              </h1>
              
              {/* Stream Schedule */}
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Wann sind wir online?</h3>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${LIVE_CONFIG.isLive ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${LIVE_CONFIG.isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></span>
                    {LIVE_CONFIG.isLive ? 'LIVE' : 'OFFLINE'}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {streamSchedule.map((schedule, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 flex items-center justify-between group hover:bg-white/10 transition-all duration-300">
                      <div>
                        <div className="font-medium">{schedule.day}</div>
                        <div className="text-sm text-gray-300">{schedule.time}</div>
                      </div>
                      <a
                        href="https://www.tiktok.com/@simo4287"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-lg text-sm font-medium transition-all duration-300 group-hover:scale-105"
                      >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                          Folgen
                        </span>
                        <span className="text-pink-400">♥</span>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Zusätzliche Plattform-Info */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-4 text-gray-300 text-sm">
                    <span>Demnächst auch auf:</span>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Stream Container */}
            <div className={`relative mt-8 md:mt-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
                {LIVE_CONFIG.isLive && LIVE_CONFIG.roomId ? (
                  <div className="live-container w-full h-full">
                    <iframe
                      src={`https://www.tiktok.com/embed/live/${LIVE_CONFIG.roomId}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        minHeight: '600px'
                      }}
                    />
                    <div className="absolute top-4 right-4 z-30">
                      <div className="px-4 py-2 bg-red-500 text-white rounded-lg animate-pulse">
                        LIVE
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src="/mysteryBox/images/products/Box-Hero.webp"
                      alt="Mystery Box Showcase"
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-8 bg-black/40 rounded-xl backdrop-blur-sm">
                          <h3 className="text-2xl font-bold mb-4">Nächster Live-Stream</h3>
                          <div className="flex gap-4 justify-center mb-6">
                            <div className="bg-white/10 rounded-lg p-4">
                              <span className="text-3xl font-bold">{timeUntil.days}</span>
                              <p className="text-sm">Tage</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <span className="text-3xl font-bold">{timeUntil.hours}</span>
                              <p className="text-sm">Stunden</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <span className="text-3xl font-bold">{timeUntil.minutes}</span>
                              <p className="text-sm">Minuten</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed left-6 bottom-24 z-40 items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:opacity-90 transition-all duration-500 transform ${showScrollTop
          ? 'opacity-100 translate-y-0 flex'
          : 'opacity-0 translate-y-12 hidden'
          }`}
        aria-label="Nach oben scrollen"
      >
        <svg
          className="w-4 h-4 text-white transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Mission Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 to-indigo-900/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm z-10 rounded-2xl 
          group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
              <Image
                src="/mysteryBox/images/products/Box-Hero.webp"
                alt="Mystery Box Showcase"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Die Revolution des<br />Retourenhandels
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wir transformieren zurückgesendete Waren in spannende Überraschungspakete.
                Durch Live-Auktionen und direkten Verkauf bieten wir ein transparentes und
                aufregendes Shopping-Erlebnis.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-50">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">1000+</h3>
                  <p className="text-gray-600">Erfolgreiche Auktionen</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-50">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">5000+</h3>
                  <p className="text-gray-600">Glückliche Käufer</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 mb-4">


                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-lg">
                    <span className="text-sm font-medium">Live Auktionen</span>
                  </div>
                  <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% Authentisch</span>
                </div>
                <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-lg">
                  <span className="text-sm font-medium">Ungeöffnete Boxen</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Live Unboxing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers Section */}
      <section className="py-24 px-4 relative" id="live-auctions">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 via-indigo-900/5 to-purple-900/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Aktuelle Mystery Boxes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ungeöffnete Retouren-Pakete mit garantiertem Warenwert. Jede Box ist ein spannendes Abenteuer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-500 z-10"></div>
                  <Image
                    src={product.image}
                    alt={product.description}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transform transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-2 rounded-lg text-sm font-medium bg-white/90 backdrop-blur-sm text-indigo-600 shadow-lg">
                      {product.category}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500/90 backdrop-blur-sm text-white shadow-lg">
                        Spare {((Number(product.originalPrice) - Number(product.price)) / Number(product.originalPrice) * 100).toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      {product.price !== '' ? (
                        <>
                          <p className="text-2xl font-bold text-indigo-600">{product.price} €</p>
                          {product.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">UVP: {product.originalPrice} €</p>
                          )}
                        </>
                      ) : (
                        <p className="text-xl text-indigo-600 font-medium">Individuell</p>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {product.id === 9 ? (
                        <Link href="/kontakt"
                          className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-medium">
                          Anfragen
                        </Link>
                      ) : (
                        <>
                          <Link href={`/shop/${product.id}`}
                            className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-medium">
                            Details
                          </Link>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium flex items-center gap-2"
                            disabled={product.price === ''}
                          >
                            <span>Kaufen</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Silicon Valley Section Divider */}
      <div className="relative py-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

              {/* Main Decorative Element */}
              <div className="relative flex items-center justify-center">
                {/* Left Side */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-indigo-600/30"></div>

                {/* Center Element */}
                <div className="relative mx-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-2xl border border-gray-100/50 flex items-center justify-center transform rotate-45 hover:rotate-[225deg] transition-all duration-700 group">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:scale-90 transition-transform duration-500"></div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform hover:scale-150 transition-transform duration-300"></div>
                </div>

                {/* Right Side */}
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-600/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Live Auction Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-purple-900/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Live Auction Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-50 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 rounded-lg text-sm font-medium">
                    <span className="animate-pulse">●</span> LIVE
                  </span>
                  <span className="px-4 py-2 bg-indigo-500/10 text-indigo-600 rounded-lg text-sm font-medium">
                    Jetzt mitbieten
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Live Auktionen
                </h2>

                <p className="text-xl text-gray-600 mb-8">
                  Sei live dabei wenn spannende Mystery Boxes versteigert werden.
                  Mitbieten, gewinnen und live beim Unboxing dabei sein!
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                  >
                    <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">Instagram</span>
                  </a>

                  <a
                    href="https://www.tiktok.com/@simo4287/live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900/10 to-gray-800/10 hover:from-gray-900/20 hover:to-gray-800/20 transition-all duration-300"
                  >
                    <svg className="w-8 h-8 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V11a8.55 8.55 0 006.33 2.62V10.2a4.83 4.83 0 01-3.77-4.25V5.5a4.83 4.83 0 003.77 4.25v3.38z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">TikTok</span>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300"
                  >
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">Facebook</span>
                  </a>
                </div>

                <p className="text-gray-500 text-center">
                  Folge uns auf deiner bevorzugten Plattform und verpasse keine Auktion!
                </p>
              </div>
            </div>

            {/* Contest Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-50 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-lg text-sm font-medium mb-8">
                  GEWINNSPIEL
                </span>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Glückwunsch!
                </h2>

                <p className="text-xl text-gray-600 mb-8">
                  Du hast eine Mystery Box gewonnen! Bezahle nur den Versand und erhalte eine exklusive Box mit garantiertem Warenwert.
                </p>

                <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2 group">
                  <span>Versand bezahlen</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Silicon Valley Section Divider */}
      <div className="relative py-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

              {/* Main Decorative Element */}
              <div className="relative flex items-center justify-center">
                {/* Left Side */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-indigo-600/30"></div>

                {/* Center Element */}
                <div className="relative mx-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-2xl border border-gray-100/50 flex items-center justify-center transform rotate-45 hover:rotate-[225deg] transition-all duration-700 group">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:scale-90 transition-transform duration-500"></div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform hover:scale-150 transition-transform duration-300"></div>
                </div>

                {/* Right Side */}
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-600/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Shipping Information Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Premium Versand
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schnelle und sichere Lieferung deiner Mystery Box direkt zu dir nach Hause.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { country: 'Deutschland', code: 'de', price: 5.99 },
              { country: 'Österreich', code: 'at', price: 9.99 },
              { country: 'Schweiz', code: 'ch', price: 14.99 }
            ].map((shipping) => (
              <div key={shipping.code}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-8 relative rounded overflow-hidden shadow-sm">
                    <Image
                      src={`https://flagcdn.com/${shipping.code}.svg`}
                      alt={`${shipping.country} Flagge`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{shipping.country}</h3>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-indigo-600">{shipping.price} €</span>
                      <span className="text-sm text-gray-500">inkl. MwSt.</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Express Versand</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tracking inklusive</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-full text-indigo-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Versand via DHL, Hermes oder DPD</span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-24 my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Auction Rules Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium">
              Wichtige Informationen
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              So funktioniert's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparente Regeln für ein spannendes Auktionserlebnis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Live Auktionen",
                description: "Biete in Echtzeit während unserer Live-Streams auf spannende Mystery Boxes. Jede Box ist eine neue Chance auf tolle Produkte.",
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              },
              {
                title: "Retouren & Rücksendungen",
                description: "Unsere Boxen enthalten ausschließlich Retouren und Rücksendungen von Top-Marken. Jede Box ist ein Überraschungspaket.",
                icon: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3"
              },
              {
                title: "Keine Retouren",
                description: "Aufgrund der Natur unserer Produkte sind Rückgaben ausgeschlossen. Jedes Gebot ist verbindlich.",
                icon: "M6 18L18 6M6 6l12 12"
              },
              {
                title: "Live Unboxing",
                description: "Erlebe das Auspacken deiner Box live in unseren Streams. Teile die Spannung mit der Community.",
                icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              },
              {
                title: "Transparente Preise",
                description: "Alle Auktionen starten bei 1€. Der Endpreis wird von der Community bestimmt.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Garantierte Echtheit",
                description: "Alle Produkte stammen aus autorisierten Quellen. Wir garantieren für die Authentizität.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              }
            ].map((rule, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={rule.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{rule.title}</h3>
                <p className="text-gray-600 leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Silicon Valley Section Divider - Final */}
      <div className="relative py-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

              {/* Main Decorative Element */}
              <div className="relative flex items-center justify-center">
                {/* Left Side */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-indigo-600/30"></div>

                {/* Center Element */}
                <div className="relative mx-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-2xl border border-gray-100/50 flex items-center justify-center transform rotate-45 hover:rotate-[225deg] transition-all duration-700 group">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:scale-90 transition-transform duration-500"></div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform hover:scale-150 transition-transform duration-300"></div>
                </div>

                {/* Right Side */}
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-600/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}