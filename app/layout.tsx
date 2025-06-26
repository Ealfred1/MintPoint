import type { Metadata } from 'next'
import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mintpoint - AI-powered POS',
  description:
    'Welcome to Mintpoint, the AI-powered POS. Register today and start using your phone to receive fast card payments with a tap, USSD, and virtual accounts, all in one platform.',
  generator: 'Mintpoint',
  keywords: [
    'Mintpoint',
    'POS',
    'AI POS',
    'Card Payments',
    'USSD Payments',
    'Virtual Accounts',
    'Mobile POS',
    'Contactless Payments',
    'Payment Platform',
    'Fintech',
    'Tap to Pay',
    'Business Payments',
    'Digital Payments',
    'Nigeria POS',
    'Africa Fintech',
  ],
  authors: [{ name: 'Mintpoint', url: 'https://mintpoint.com' }],
  openGraph: {
    title: 'Mintpoint - AI-powered POS',
    description:
      'Welcome to Mintpoint, the AI-powered POS. Register today and start using your phone to receive fast card payments with a tap, USSD, and virtual accounts, all in one platform.',
    url: 'https://mintpoint.com',
    siteName: 'Mintpoint',
    images: [
      {
        url: '/images/mintpoint.svg',
        width: 1200,
        height: 630,
        alt: 'Mintpoint - AI-powered POS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mintpoint - AI-powered POS',
    description:
      'Welcome to Mintpoint, the AI-powered POS. Register today and start using your phone to receive fast card payments with a tap, USSD, and virtual accounts, all in one platform.',
    images: ['/images/mintpoint.svg'],
    site: '@mintpointapp',
    creator: '@mintpointapp',
  },
  themeColor: '#00C853',
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/mintpoint.svg" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://mintpoint.com" />
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mintpoint" />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
