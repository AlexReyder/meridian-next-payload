import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type CtaConceptsBlockData = {
  title?: string | null
  description?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: CtaConceptsBlockData
  locale: Locale
}

export function CtaConceptsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-sm border border-border/60 bg-card px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {block.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
              className="inline-flex h-11 items-center justify-center rounded-sm bg-foreground px-7 text-[11px] font-medium uppercase tracking-[0.15em] text-background transition-colors hover:bg-foreground/90"
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
              className="inline-flex h-11 items-center justify-center rounded-sm border border-foreground/15 px-7 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground/5"
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">{block.footerNote}</p>
        </div>
      </div>
    </section>
  )
}