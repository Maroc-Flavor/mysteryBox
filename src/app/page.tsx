import Image from "next/image";
import Layout from '../components/layout';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout>
      <main className="flex-grow">
        {/* Hero Section with Founder */}
        <section className="min-h-screen relative flex items-center">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <div className="absolute inset-0 opacity-10 bg-[url('/file.svg')]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="text-white space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Die Zukunft des<br />
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Shopping-Erlebnisses
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Revolutionäre Überraschungspakete, kuratiert für moderne Entdecker.
                  Jedes Paket erzählt eine einzigartige Geschichte.
                </p>
                <div className="flex gap-4">
                    <Link href="/shop" className="bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Jetzt entdecken
                  </Link>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300">
                    Mehr erfahren
                  </button>
                </div>
              </div>

              {/* Right side - Founder image */}
              <div className="relative">
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                    <Image
                    src="/mysteryBox/founder-image.jpg"
                    alt="Gründer"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transform hover:scale-105 transition-transform duration-500"
                    priority
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                {/* Floating info card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20">
                  <h3 className="text-white text-2xl font-bold mb-2">Don Simo</h3>
                  <p className="text-gray-300">Gründer & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Founder Section */}
        <div className="hidden lg:block fixed right-6 bottom-6 z-50">
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 shadow-xl">
            <Image
                src="/mysteryBox/founder-floating.jpg"
              alt="Gründer"
              width={60}
              height={60}
              className="rounded-full hover:scale-105 transition-transform cursor-pointer"
              priority
            />
          </div>
        </div>

        {/* About Me Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-indigo-900/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                    src="/mysteryBox/founder-portrait.jpg"
                  alt="Gründer Portrait"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Unsere Vision
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Als Pioniere im E-Commerce revolutionieren wir das Online-Shopping-Erlebnis.
                  Unsere Mission ist es, jeden Einkauf zu einem spannenden Abenteuer zu machen.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">1000+</h3>
                    <p className="text-gray-600">Zufriedene Kunden</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-2">5000+</h3>
                    <p className="text-gray-600">Versandte Pakete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Offers Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Exklusive Angebote
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-72">
                    <Image
                    src="/mysteryBox/mysterybox-premium1.jpg"
                    alt="10 KG Überraschungsbox"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">XXL Premium Mystery Box </h3>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-indigo-600">99,99 €</span>
                    <span className="text-lg text-gray-400 line-through">279,99 €</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:opacity-90 transition-opacity font-medium">
                    Jetzt sichern
                  </button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-72">
                    <Image
                    src="/mysteryBox/starterbox.jpg"
                    alt="3 KG Überraschungskarton"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Starter Mystery Box</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-indigo-600">39,99 €</span>
                    <span className="text-lg text-gray-400 line-through">120,00 €</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:opacity-90 transition-opacity font-medium">
                    Jetzt sichern
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Actions Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Live Auction Card */}
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  LIVE-AUKTION
                </h2>
                <div className="text-center">
                  <p className="text-xl">
                    Benutzername: <span className="font-semibold">[Benutzername]</span>
                  </p>
                </div>
              </div>

              {/* Contest Card */}
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  GEWINNSPIEL
                </h2>
                <div className="text-center">
                  <p className="text-xl mb-8">
                    Herzlichen Glückwunsch! Der Gewinn geht auf uns, die Versandkosten auf dich.
                  </p>
                  <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-10 py-4 rounded-xl hover:opacity-90 transition-opacity font-medium">
                    VERSAND BEZAHLEN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Information Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Versandinformationen
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 16">
                      {/* Schwarz */}
                      <rect width="24" height="5.33" y="0" fill="#000000" />
                      {/* Rot */}
                      <rect width="24" height="5.33" y="5.33" fill="#DD0000" />
                      {/* Gold */}
                      <rect width="24" height="5.33" y="10.66" fill="#FFCE00" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Deutschland</h3>
                  <p className="text-lg text-gray-600">5,99 €</p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 16">
                      <defs>
                        <clipPath id="flagClip">
                          <rect width="24" height="16" rx="2" />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#flagClip)">
                        <rect width="24" height="5.33" y="0" fill="#ED2939" />
                        <rect width="24" height="5.33" y="5.33" fill="#FFFFFF" />
                        <rect width="24" height="5.33" y="10.66" fill="#ED2939" />
                      </g>
                      <rect width="24" height="16" rx="2" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Österreich</h3>
                  <p className="text-lg text-gray-600">9,99 €</p>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    {/* Schweizer Flagge */}
                    <svg className="w-12 h-12 mx-auto" viewBox="0 0 16 16">
                      <defs>
                        <clipPath id="flagClipCH">
                          <rect width="16" height="16" rx="2" />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#flagClipCH)">
                        {/* Roter Hintergrund */}
                        <rect width="16" height="16" fill="#FF0000" />
                        {/* Weißes Kreuz */}
                        <rect x="6.5" y="3" width="3" height="10" fill="white" />
                        <rect x="3" y="6.5" width="10" height="3" fill="white" />
                      </g>
                      <rect width="16" height="16" rx="2" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Schweiz</h3>
                  <p className="text-lg text-gray-600">14,99 €</p>
                </div>

              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-600">
                  Premium Versand via DHL, Hermes oder DPD
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Auction Rules Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Auktionsregeln
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: "Verkauf über Live-Auktionen",
                  content: "Interessenten können während unserer Live-Streams auf spannende Überraschungspakete bieten.",
                  icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                {
                  title: "Kein Rückgaberecht",
                  content: "Bitte beachten, dass bei erfolgreichen Geboten kein Rückgaberecht besteht.",
                  icon: "M6 18L18 6M6 6l12 12"
                },
                {
                  title: "Retouren- und Rücksendungsware",
                  content: "Die angebotenen Artikel stammen aus Retouren oder Rücksendungen und sind daher vom Umtausch ausgeschlossen.",
                  icon: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3"
                },
                {
                  title: "Transparenz",
                  content: "Die Pakete können unterschiedliche Zustände der Artikel enthalten – von neu bis gebraucht.",
                  icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Mitbieten = Akzeptieren",
                  content: "Mit der Teilnahme an der Auktion und dem erfolgreichen Gebot stimmen Käufer den Bedingungen ausdrücklich zu.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              ].map((rule, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={rule.icon} />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{rule.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{rule.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}