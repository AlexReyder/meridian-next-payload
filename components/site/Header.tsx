import Link from 'next/link'

import type { PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { getHrefForPageKey, getLanguageSwitcher, isRTL, type Locale } from '@/lib/routes'

type HeaderItem = {
  label: string
  pageKey: PageKey
}

type HeaderData = {
  brandTitle?: string
  brandSubtitle?: string
  navItems?: HeaderItem[]
  ctaLabel?: string
  ctaPageKey?: PageKey
}

type Props = {
  data: HeaderData | null
  locale: Locale
  currentPageKey: PageKey
}

export function SiteHeader({ data, locale, currentPageKey }: Props) {
  const rtl = isRTL(locale)
  const languageLinks = getLanguageSwitcher(currentPageKey)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href={getHrefForPageKey('home', locale)} className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-0.5">
              <div className="h-2 w-[3px] rounded-full bg-signature-cobalt" />
              <div className="h-1.5 w-[3px] rounded-full bg-signature-brass" />
            </div>
            <div className="min-w-0">
              <div className="font-serif text-xl font-medium tracking-tight text-foreground">{data?.brandTitle ?? 'Atelier Meridian'}</div>
              <div className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                {data?.brandSubtitle ?? 'Product Architecture & Interface Studio'}
              </div>
            </div>
          </div>
        </Link>

        <nav className={cn('hidden items-center gap-7 lg:flex', rtl && 'flex-row-reverse')}>
          {data?.navItems?.map((item) => {
            const href = getHrefForPageKey(item.pageKey, locale)
            const active = item.pageKey === currentPageKey

            return (
              <Link
                key={`${item.pageKey}-${item.label}`}
                href={href}
                className={cn(
                  'text-xs uppercase tracking-[0.14em] transition-colors',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={cn('flex items-center gap-3', rtl && 'flex-row-reverse')}>
          <div className={cn('hidden items-center gap-2 rounded-md border border-border bg-card px-2 py-1 md:flex', rtl && 'flex-row-reverse')}>
            {languageLinks.map((link) => (
              <Link
                key={link.locale}
                href={link.href}
                className={cn(
                  'rounded px-2 py-1 text-[11px] uppercase tracking-[0.12em] transition-colors',
                  link.locale === locale ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.code}
              </Link>
            ))}
          </div>

          <Link
            href={getHrefForPageKey(data?.ctaPageKey ?? 'get-proposal', locale)}
            className="inline-flex h-10 items-center justify-center rounded-[3px] bg-foreground px-5 text-[10px] font-medium uppercase tracking-[0.16em] text-background transition-colors hover:bg-foreground/90"
          >
            {data?.ctaLabel ?? 'Get proposal'}
          </Link>
        </div>
      </div>
    </header>
  )
}
