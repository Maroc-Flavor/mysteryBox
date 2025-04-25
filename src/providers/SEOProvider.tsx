import { ReactNode } from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

interface SEOProviderProps {
  children: ReactNode;
  defaultSEO?: SEOProps;
}

const defaultSEOConfig: SEOProps = {
  title: 'MysteryBox - Ihr Shop für Mystery Boxes',
  description: 'Entdecken Sie unsere exklusiven Mystery Boxes mit überraschenden Inhalten. Qualität garantiert, Spaß garantiert!',
  keywords: 'mystery box, überraschung, geschenk, sammlung, exklusiv',
  ogType: 'website',
  twitterCard: 'summary_large_image',
};

export function SEOProvider({ children, defaultSEO = defaultSEOConfig }: SEOProviderProps) {
  return (
    <>
      <Head>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta name="keywords" content={defaultSEO.keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={defaultSEO.title} />
        <meta property="og:description" content={defaultSEO.description} />
        <meta property="og:type" content={defaultSEO.ogType} />
        {defaultSEO.ogImage && <meta property="og:image" content={defaultSEO.ogImage} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content={defaultSEO.twitterCard} />
        <meta name="twitter:title" content={defaultSEO.title} />
        <meta name="twitter:description" content={defaultSEO.description} />
        {defaultSEO.ogImage && <meta name="twitter:image" content={defaultSEO.ogImage} />}
        
        {/* Canonical URL */}
        {defaultSEO.canonicalUrl && <link rel="canonical" href={defaultSEO.canonicalUrl} />}
        
        {/* Weitere wichtige Meta-Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="de" />
        <meta name="robots" content="index, follow" />
      </Head>
      {children}
    </>
  );
}

// Hook für dynamische SEO-Updates
export function useSEO(seoProps: Partial<SEOProps>) {
  const updatedSEO = { ...defaultSEOConfig, ...seoProps };
  
  return (
    <Head>
      <title>{updatedSEO.title}</title>
      <meta name="description" content={updatedSEO.description} />
      {updatedSEO.keywords && <meta name="keywords" content={updatedSEO.keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={updatedSEO.title} />
      <meta property="og:description" content={updatedSEO.description} />
      {updatedSEO.ogType && <meta property="og:type" content={updatedSEO.ogType} />}
      {updatedSEO.ogImage && <meta property="og:image" content={updatedSEO.ogImage} />}
      
      {/* Twitter */}
      {updatedSEO.twitterCard && <meta name="twitter:card" content={updatedSEO.twitterCard} />}
      <meta name="twitter:title" content={updatedSEO.title} />
      <meta name="twitter:description" content={updatedSEO.description} />
      {updatedSEO.ogImage && <meta name="twitter:image" content={updatedSEO.ogImage} />}
      
      {/* Canonical URL */}
      {updatedSEO.canonicalUrl && <link rel="canonical" href={updatedSEO.canonicalUrl} />}
    </Head>
  );
} 