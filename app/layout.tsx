import './globals.css'
import type { Metadata } from 'next'
import { ToastProvider } from '../components/ToastContainer'
import { Suspense } from 'react'
import GoogleAnalytics from '../components/GoogleAnalytics'

// Force the correct base URL
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://seo360.xyz'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'SEO360 - Boost Client Visibility & Domain Authority',
    template: '%s | SEO360'
  },
  description: 'Boost your sales and improve your visibility and domain authority, attracting more clients and delivering exceptional SEO results.',
  keywords: ['SEO tool', 'client acquisition', 'domain authority boost', 'backlink services', 'website visibility', 'Google indexing', 'SEO consultant', 'digital marketing', 'sales boost', 'SEO360'],
  authors: [{ name: 'SEO360', url: baseUrl }],
  creator: 'SEO360',
  publisher: 'SEO360',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'SEO360',
    title: 'SEO360 - Boost Client Visibility & Domain Authority',
    description: 'Boost your sales and improve your visibility and domain authority, attracting more clients and delivering exceptional SEO results.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'SEO360 - Personal Tool for Client Acquisition',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seo360xyz',
    creator: '@seo360xyz',
    title: 'SEO360 - Boost Client Visibility & Domain Authority',
    description: 'Boost your sales and improve your visibility and domain authority, attracting more clients and delivering exceptional SEO results.',
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
    },
  },
  verification: {
    google: 'JKqRPUBMXUyNMooc5zHpf5VmBA39BT4QR1PxAaTA_Us',
    yandex: process.env.YANDEX_VERIFICATION_CODE,
    yahoo: process.env.YAHOO_VERIFICATION_CODE,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION_CODE || '',
    },
  },
  category: 'technology',
  classification: 'SEO Tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="JKqRPUBMXUyNMooc5zHpf5VmBA39BT4QR1PxAaTA_Us" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className="min-h-screen bg-white antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SEO360",
              "description": "Personal tool for boosting client website visibility, Domain Authority, and backlinks. Boost your sales and improve your visibility.",
              "url": baseUrl,
              "applicationCategory": "SEO Tool",
              "operatingSystem": "Web",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "1.0.0",
              "datePublished": "2025-01-01",
              "dateModified": new Date().toISOString().split('T')[0],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1247",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "Client Acquisition Tools",
                "Domain Authority Boosting",
                "Premium Backlink Services",
                "24-Hour Google Indexing",
                "SEO Dashboard",
                "Client Visibility Enhancement",
                "Automated SEO Reporting",
                "Mobile-First Optimization"
              ],
              "provider": {
                "@type": "Organization",
                "name": "SEO360",
                "url": baseUrl,
                "logo": `${baseUrl}/favicon-32x32.png`,
                "sameAs": [
                  "https://twitter.com/seo360xyz"
                ]
              },
              "mainEntity": {
                "@type": "WebApplication",
                "name": "SEO360",
                "url": baseUrl,
                "description": "Professional SEO tool for client acquisition and visibility enhancement"
              }
            })
          }}
        />
        
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SEO360",
              "url": baseUrl,
              "logo": `${baseUrl}/favicon-32x32.png`,
              "description": "Professional SEO tool for boosting client website visibility, Domain Authority, and backlinks.",
              "foundingDate": "2025",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "erolledph+seo360@gmail.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/seo360xyz"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
