import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type CTAStartupsBlockData = {
  title?: string | null
  description?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: CTAStartupsBlockData
  locale: Locale
}

export function CTAStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-lg border border-border/60 bg-card p-8 text-center lg:p-12">
          <div className="mb-8 flex items-center justify-center gap-1">
            <div className="h-px w-12 bg-border" />
            {rtl ? (
              <>
                <div className="h-[2px] w-1.5 rounded-full bg-signature-brass" />
                <div className="h-[2px] w-2.5 rounded-full bg-signature-cobalt" />
              </>
            ) : (
              <>
                <div className="h-[2px] w-2.5 rounded-full bg-signature-cobalt" />
                <div className="h-[2px] w-1.5 rounded-full bg-signature-brass" />
              </>
            )}
            <div className="h-px w-12 bg-border" />
          </div>

          <h2 className="mx-auto max-w-2xl font-serif text-2xl font-light leading-snug text-foreground sm:text-3xl lg:text-[2.25rem]">
            {block.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {block.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
              className={cn(
                'inline-flex h-11 items-center justify-center rounded-md bg-foreground px-7 text-[11px] font-medium text-background transition-colors hover:bg-foreground/90',
                rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
              )}
            >
              {rtl ? (
                <>
                  <ArrowLeft className="ml-2 h-3.5 w-3.5" />
                  {block.primaryButtonLabel}
                </>
              ) : (
                <>
                  {block.primaryButtonLabel}
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </>
              )}
            </Link>

            <Link
              href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
              className={cn(
                'inline-flex h-11 items-center justify-center rounded-md border border-foreground/15 px-7 text-[11px] font-medium text-foreground transition-colors hover:bg-foreground/5',
                rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
              )}
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{block.footerNote}</p>
        </div>
      </div>
    </section>
  )
}