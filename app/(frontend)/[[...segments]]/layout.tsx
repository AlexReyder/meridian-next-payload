import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Atelier Meridian',
  description: 'Atelier Meridian on Next.js + Payload CMS',
}

export const dynamic = 'force-dynamic'

export default async function FrontendLayout({ children, segments }: { children: React.ReactNode, segments?: string[]}) {
  await headers()

  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

