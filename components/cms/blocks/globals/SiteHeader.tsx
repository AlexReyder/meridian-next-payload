'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'

import {
  getHrefForPageKey,
  getLanguageOptions,
  getCurrentLanguageCode,
  isRTL,
  type Locale,
  type PageKey,
} from '@/lib/routes'
import { cn } from '@/lib/utils'

type HeaderNavItem = {
  label?: string | null
  pageKey?: PageKey | null
}

type HeaderData = {
  brandTitle?: string | null
  brandSubtitle?: string | null
  navItems?: HeaderNavItem[] | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
  languageLabel?: string | null
  comingSoonLabel?: string | null
}

type Props = {
  header: HeaderData
  locale: Locale
}

export function SiteHeader({ header, locale }: Props) {
  const pathname = usePathname()
  const rtl = isRTL(locale)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => setIsLangOpen(false)

    if (isLangOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isLangOpen])

  const isActive = (pageKey?: PageKey | null) => {
    if (!mounted || !pageKey) return false
    return pathname === getHrefForPageKey(pageKey, locale)
  }

  const languages = getLanguageOptions(pathname)
  const currentLangCode = getCurrentLanguageCode(pathname)

  return (
    <header
      dir={rtl ? 'rtl' : 'ltr'}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={getHrefForPageKey('home', locale)}
              className={cn('flex items-center gap-3', rtl && 'flex-row-reverse')}
            >
              <div className="flex flex-col gap-0.5">
                <div className="h-2 w-[3px] rounded-full bg-signature-cobalt" />
                <div className="h-1.5 w-[3px] rounded-full bg-signature-brass" />
              </div>

              <div className={cn('flex flex-col', rtl && 'text-right')}>
                <span className="font-serif text-lg font-medium tracking-tight text-foreground">
                  {header.brandTitle}
                </span>
                <span
                  className={cn(
                    'text-[10px] uppercase text-muted-foreground',
                    locale === 'ar' ? 'tracking-[0.15em]' : 'tracking-[0.2em]',
                  )}
                >
                  {header.brandSubtitle}
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {header.navItems?.map((item, index) =>
              item?.label && item?.pageKey ? (
                <Link
                  key={`${item.pageKey}-${index}`}
                  href={getHrefForPageKey(item.pageKey, locale)}
                  className={cn(
                    'text-sm transition-colors duration-200',
                    isActive(item.pageKey)
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              ) : null,
            )}
          </nav>

          <div className={cn('flex items-center gap-4', rtl && 'flex-row-reverse')}>
            <div className="relative hidden md:block">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLangOpen(!isLangOpen)
                }}
                className={cn(
                  'flex items-center gap-1.5 px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground',
                  rtl && 'flex-row-reverse',
                )}
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{currentLangCode}</span>
                <ChevronDown
                  className={cn(
                    'h-3 w-3 transition-transform duration-200',
                    isLangOpen && 'rotate-180',
                  )}
                />
              </button>

              {isLangOpen && (
                <div
                  className={cn(
                    'absolute top-full z-50 mt-2 min-w-[140px] rounded-sm border border-border bg-card py-1 shadow-lg',
                    rtl ? 'left-0' : 'right-0',
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  {languages.map((lang) =>
                    lang.active ? (
                      <Link
                        key={lang.code}
                        href={lang.href}
                        onClick={() => setIsLangOpen(false)}
                        className={cn(
                          'flex items-center justify-between px-4 py-2 text-sm transition-colors',
                          lang.code === currentLangCode
                            ? 'bg-secondary/50 text-foreground'
                            : 'text-muted-foreground hover:bg-secondary/30 hover:text-foreground',
                        )}
                      >
                        <span>{lang.label}</span>
                        <span className="text-xs text-muted-foreground">{lang.code}</span>
                      </Link>
                    ) : (
                      <div
                        key={lang.code}
                        className="flex cursor-not-allowed items-center justify-between px-4 py-2 text-sm text-muted-foreground/50"
                      >
                        <span>{lang.label}</span>
                        <span className="text-[10px] uppercase tracking-wider">
                          {header.comingSoonLabel}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>

            <Link
              href={getHrefForPageKey(header.ctaPageKey ?? 'get-proposal', locale)}
              className={cn(
                'hidden h-8 items-center justify-center rounded-md px-5 text-xs font-medium uppercase tracking-wider transition-colors md:inline-flex',
                isActive(header.ctaPageKey ?? 'get-proposal')
                  ? 'border border-accent/40 bg-accent/20 text-foreground'
                  : 'bg-foreground text-background hover:bg-foreground/90',
              )}
            >
              {header.ctaLabel}
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-4 px-6 py-6">
            {header.navItems?.map((item, index) =>
              item?.label && item?.pageKey ? (
                <Link
                  key={`${item.pageKey}-${index}`}
                  href={getHrefForPageKey(item.pageKey, locale)}
                  className={cn(
                    'block text-sm transition-colors',
                    isActive(item.pageKey)
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                    rtl && 'text-right',
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : null,
            )}

            <div className="border-t border-border pt-4">
              <p className={cn('mb-3 text-xs uppercase tracking-wider text-muted-foreground', rtl && 'text-right')}>
                {header.languageLabel}
              </p>

              <div className={cn('flex gap-3', rtl && 'justify-end')}>
                {languages
                  .filter((lang) => lang.active)
                  .map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'rounded-sm border px-3 py-1.5 text-sm transition-colors',
                        lang.code === currentLangCode
                          ? 'border-foreground text-foreground'
                          : 'border-border text-muted-foreground hover:border-foreground/50',
                      )}
                    >
                      {lang.code}
                    </Link>
                  ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <Link
                href={getHrefForPageKey(header.ctaPageKey ?? 'get-proposal', locale)}
                className="flex h-10 w-full items-center justify-center rounded-md bg-foreground px-5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-foreground/90"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}