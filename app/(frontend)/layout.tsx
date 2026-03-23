import type { Metadata } from 'next'
import { headers } from 'next/headers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Atelier Meridian',
  description: 'Atelier Meridian on Next.js + Payload CMS',
}

export const dynamic = 'force-dynamic'

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  await headers()

  return (
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
