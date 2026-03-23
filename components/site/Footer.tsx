import Link from 'next/link'

import type { PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { getHrefForPageKey, isRTL, type Locale } from '@/lib/routes'

type FooterLink = {
  label: string
  pageKey: PageKey
}

type FooterColumn = {
  title: string
  links?: FooterLink[]
}

type FooterData = {
  brandTitle?: string
  brandSubtitle?: string
  description?: string
  email?: string
  columns?: FooterColumn[]
  copyright?: string
}

type Props = {
  data: FooterData | null
  locale: Locale
}

export function SiteFooter({ data, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="h-2 w-[3px] rounded-full bg-signature-cobalt-soft" />
                <div className="h-1.5 w-[3px] rounded-full bg-signature-brass-soft" />
              </div>
              <div>
                <div className="font-serif text-xl font-medium tracking-tight text-background">
                  {data?.brandTitle ?? 'Atelier Meridian'}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-background/50">
                  {data?.brandSubtitle ?? 'Product Architecture & Interface Studio'}
                </div>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-background/60">
              {data?.description ?? 'Boutique product architecture studio.'}
            </p>

            {data?.email ? (
              <a href={`mailto:${data.email}`} className="mt-6 inline-block text-sm text-background/80 transition-colors hover:text-background">
                {data.email}
              </a>
            ) : null}
          </div>

          <div className="lg:col-span-6 lg:col-start-6">
            <div className="grid gap-8 sm:grid-cols-3">
              {data?.columns?.map((column) => (
                <div key={column.title}>
                  <h4 className="mb-4 text-xs uppercase tracking-[0.15em] text-background/50">{column.title}</h4>
                  <ul className="space-y-3">
                    {column.links?.map((link) => (
                      <li key={`${column.title}-${link.pageKey}-${link.label}`}>
                        <Link
                          href={getHrefForPageKey(link.pageKey, locale)}
                          className="text-sm text-background/70 transition-colors hover:text-background"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative py-8">
          <div className="absolute left-0 right-0 top-0 flex items-center">
            <div className="h-px flex-1 bg-background/10" />
            <div className="mx-1 h-[2px] w-3 rounded-full bg-signature-cobalt-soft/60" />
            <div className="h-[2px] w-2 rounded-full bg-signature-brass-soft/60" />
            <div className="h-px flex-1 bg-background/10" />
          </div>

          <div className={cn('flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between', rtl && 'sm:flex-row-reverse')}>
            <p className="text-xs text-background/40">{data?.copyright ?? '© 2026 Atelier Meridian'}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
