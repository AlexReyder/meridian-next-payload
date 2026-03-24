import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { DEFAULT_LOCALE, getLocaleDirection, resolveLocaleAndPageKey } from '@/lib/routes'
import { buildPageMetadata, getFrontendPageData } from '@/lib/getFrontendPageData'
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

type Props = {
  children: ReactNode
  params: Promise<{ segments?: string[] }> | { segments?: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const data = await getFrontendPageData(resolvedParams.segments)

  if (!data) {
    return {}
  }

  return buildPageMetadata({
    page: data.page,
    locale: data.route.locale,
    pageKey: data.route.pageKey,
  })
}

export default async function FrontendLayout({ children, params }: Props) {
  const resolvedParams = await Promise.resolve(params)
  const route = resolveLocaleAndPageKey(resolvedParams.segments)
  const data = await getFrontendPageData(resolvedParams.segments)

  if (!data) {
    notFound()
  }
  
  const locale = route?.locale ?? DEFAULT_LOCALE
  const dir = getLocaleDirection(locale)


  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

