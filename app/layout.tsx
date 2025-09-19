import type { Metadata } from 'next'
import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mintpoint - AI-Powered POS Terminal | Tap. Pay. Smarter. | mintpoint.app',
  description:
    'Transform your smartphone into a powerful POS terminal with Mintpoint. Accept contactless payments, USSD, and virtual accounts. AI-powered fraud protection, 24/7 support, and zero hardware costs. Join 10,000+ merchants across Nigeria.',
  generator: 'Next.js',
  applicationName: 'Mintpoint',
  referrer: 'origin-when-cross-origin',
  keywords: [
    // Primary Keywords
    'POS terminal Nigeria',
    'mobile POS system',
    'contactless payment Nigeria',
    'tap to pay app',
    'AI POS terminal',
    'soft POS Nigeria',
    'mobile payment solution',
    'card payment app',
    'USSD payment',
    'virtual account payment',
    
    // Long-tail Keywords
    'best POS app Nigeria',
    'mobile POS for small business',
    'contactless payment app Nigeria',
    'tap to pay without hardware',
    'AI powered payment terminal',
    'mobile card reader app',
    'POS system without machine',
    'smartphone POS terminal',
    'digital payment solution Nigeria',
    'mobile payment terminal app',
    
    // Brand Keywords
    'Mintpoint app',
    'Mintpoint POS',
    'Mintpoint Nigeria',
    'mintpoint.app',
    'Mintpoint by Africard',
    
    // Industry Keywords
    'fintech Nigeria',
    'payment technology',
    'digital banking',
    'mobile commerce',
    'e-payment solution',
    'financial technology',
    'payment innovation',
    'digital wallet',
    'mobile money',
    'cashless payment'
  ],
  authors: [{ name: 'Mintpoint Team', url: 'https://mintpoint.app' }],
  creator: 'Mintpoint',
  publisher: 'Mintpoint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mintpoint.app'),
  alternates: {
    canonical: 'https://mintpoint.app',
    languages: {
      'en-US': 'https://mintpoint.app',
    },
  },
  openGraph: {
    title: 'Tap. Pay. Smarter. | Mintpoint',
    description:
      'Transform your smartphone into a powerful POS terminal with Mintpoint. Accept contactless payments, USSD, and virtual accounts. AI-powered fraud protection, 24/7 support, and zero hardware costs.',
    url: 'https://mintpoint.app',
    siteName: 'Mintpoint',
    images: [
      {
        url: 'https://mintpoint.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tap. Pay. Smarter. | Mintpoint',
      },
      {
        url: 'https://mintpoint.app/images/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Mintpoint App - Mobile POS Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Nigeria',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mintpoint - AI-Powered POS Terminal | Tap. Pay. Smarter.',
    description:
      'Tap. Pay. Smarter. This is exactly what Mintpoint does—making payments seamless, fast, and smarter for everyone.',
    images: ['/images/mintpoint.svg'],
    site: '@mintpointapp',
    creator: '@mintpointapp',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Mintpoint',
    'application-name': 'Mintpoint',
    'msapplication-TileColor': '#00C853',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#00C853',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/images/mintpoint.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#00C853" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mintpoint.app" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Mintpoint Team" />
        <meta name="copyright" content="Mintpoint" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.country" content="Nigeria" />
        <meta name="geo.placename" content="Nigeria" />
        <meta name="ICBM" content="9.0765, 7.3986" />
        
        {/* Mobile optimization */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        {/* Performance hints */}
        <link rel="preload" href="/images/mintpoint.svg" as="image" />
        <link rel="preload" href="/fonts/dm-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Mintpoint",
              "alternateName": "Mintpoint POS",
              "url": "https://mintpoint.app",
              "logo": "https://mintpoint.app/images/mintpoint.svg",
              "description": "AI-powered mobile POS terminal that transforms your smartphone into a payment terminal. Accept contactless payments, USSD, and virtual accounts with zero hardware costs.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": ["iOS", "Android"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "NGN",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "author": {
                "@type": "Organization",
                "name": "Mintpoint",
                "url": "https://mintpoint.app",
                "logo": "https://mintpoint.app/images/mintpoint.svg"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Mintpoint by Africard",
                "url": "https://mintpoint.app"
              },
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "featureList": [
                "Contactless Payment Processing",
                "USSD Payment Integration", 
                "Virtual Account Payments",
                "AI-Powered Fraud Protection",
                "24/7 Customer Support",
                "Real-time Transaction Monitoring",
                "Multi-currency Support",
                "Offline Transaction Capability"
              ]
            })
          }}
        />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
