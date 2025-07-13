import type { Metadata } from 'next'
import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mintpoint | Tap. Pay. Smarter.',
  description:
    'Tap. Pay. Smarter. This is exactly what Mintpoint does—making payments seamless, fast, and smarter for everyone.',
  generator: 'Mintpoint',
  keywords: [
    'Tap',
    'Pay',
    'Smarter',
    'Tap to Pay',
    'Mintpoint',
    'Smarter Payments',
    'Seamless Payments',
    'Fast Payments',
    'Contactless',
    'POS',
    'AI POS',
    'Mobile POS',
    'Payment',
    'Smart POS',
  ],
  authors: [{ name: 'Mintpoint', url: 'https://mintpoint.com' }],
  openGraph: {
    title: 'Tap. Pay. Smarter. | Mintpoint',
    description:
      'Tap. Pay. Smarter. This is exactly what Mintpoint does—making payments seamless, fast, and smarter for everyone.',
    url: 'https://mintpoint.com',
    siteName: 'Mintpoint',
    images: [
      {
        url: '/images/mintpoint.svg',
        width: 1200,
        height: 630,
        alt: 'Tap. Pay. Smarter. | Mintpoint',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tap. Pay. Smarter. | Mintpoint',
    description:
      'Tap. Pay. Smarter. This is exactly what Mintpoint does—making payments seamless, fast, and smarter for everyone.',
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
