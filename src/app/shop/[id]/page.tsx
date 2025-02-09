import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import { Metadata } from 'next';

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const products = [
  {
    id: 1,
    category: 'Tech',
    name: 'Mystery Tech Box',
    image: 'mysterybox-tech.jpg',
    price: 'Surprise!',
    description: 'What tech treasures await? Only one kind of person will find out: YOU!',
    detailDescription: 'Ein spannendes Technik-Paket voller Überraschungen! Von Gadgets bis zu Smart-Home-Produkten.',
  },

  {
    id: 2,
    category: 'Fashion',
    name: 'Mystery Fashion Box',
    image: '/mysterybox-fashion.jpg',
    price: 'Surprise!',
    description: 'Unleash your inner fashion icon! Prepare for a stylish surprise.',
    detailDescription: 'Stylische Überraschungen für deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker.',
  },
  {
    id: 3,
    category: 'Food',
    name: 'Mystery Food Box',
    image: '/placeholder-box1.jpg',
    price: 'Surprise!',
    description: 'A culinary adventure awaits! Taste the unexpected.',
    detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
  },
  {
    id: 4,
    category: 'Deluxe',
    name: 'Mystery Deluxe Box',
    image: '/mysterybox-deluxe.jpeg',
    price: 'Surprise!',
    description: 'Ein Hauch von Luxus und Überraschung.',
    detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
  },
  {
    id: 5,
    category: 'Mega',
    name: 'Mystery Mega Box',
    image: '/mysterybox-mega.jpg',
    price: 'Surprise!',
    description: 'Große Überraschungen für große Freude.',
    detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
  },
  {
    id: 6,
    category: 'Ultimate',
    name: 'Mystery Ultimate Box',
    image: '/mysterybox-ultimate.jpg',
    price: 'Surprise!',
    description: 'Die ultimative Überraschungserfahrung.',
    detailDescription: 'Kulinarische Entdeckungsreise mit ausgewählten Spezialitäten und Überraschungen.',
  },
];

export default function Page({ params }: PageProps) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl text-gray-600">Product not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg border border-gray-100">
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative h-[500px] md:w-[500px] group">
                <Image
                  src={`/${product.image}`}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    {product.category}
                  </span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.detailDescription}</p>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Was erwartet dich?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg">Überraschungsprodukte aus dem {product.category}-Bereich</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg">Garantierte Überraschung</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg">Schneller Versand</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/shop"
                  className="mt-auto w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium text-lg"
                >
                  <span>Zurück zum Shop</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = products.find(p => p.id === parseInt(params.id));
  return {
    title: product ? `${product.name} - MysteryBox` : 'Product Not Found',
    description: product?.description || 'Product not found',
  };
}