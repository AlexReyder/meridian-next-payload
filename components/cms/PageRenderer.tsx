import { BlockRenderer } from '@/components/cms/BlockRenderer'
import { SiteFooter } from '@/components/site/Footer'
import { SiteHeader } from '@/components/site/Header'
import type { Locale, PageKey } from '@/lib/routes'

type Props = {
  locale: Locale
  pageKey: PageKey
  page: {
    layout?: Array<Record<string, unknown>>
  }
  header: Record<string, unknown> | null
  footer: Record<string, unknown> | null
}

export function PageRenderer({ locale, pageKey, page, header, footer }: Props) {
  
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader data={header} locale={locale} currentPageKey={pageKey} />
      <BlockRenderer blocks={page.layout ?? []} locale={locale} />
      <SiteFooter data={footer} locale={locale} />
    </main>
  )
}
