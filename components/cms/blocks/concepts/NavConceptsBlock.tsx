'use client'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

export type ConceptNavItem = {
  anchorId: string
  navLabel: string
}

type NavConceptsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
}

type Props = {
  block: NavConceptsBlockData
  locale: Locale
  items: ConceptNavItem[]
}

export function NavConceptsBlockComponent({ block, locale, items }: Props) {
  const rtl = isRTL(locale)

  const handleScroll = (anchorId: string) => {
    const target = document.getElementById(anchorId)
    if (!target) return

    const top = target.getBoundingClientRect().top + window.scrollY - 120
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="sticky top-16 z-20 border-y border-border/60 bg-background/90 py-5 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[280px,1fr] lg:items-center">
          <div className={cn(rtl && 'text-right')}>
            <div
              className={cn(
                'mb-2 flex items-center gap-2',
                rtl && 'flex-row-reverse justify-end',
              )}
            >
              <div className="h-[1px] w-6 bg-signature-cobalt" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </div>

            <h2 className="text-sm font-medium text-foreground">{block.title}</h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {block.description}
            </p>
          </div>

          <div
            className={cn(
              'flex flex-wrap gap-2',
              rtl && 'justify-end',
            )}
          >
            {items.map((item) => (
              <button
                key={item.anchorId}
                type="button"
                onClick={() => handleScroll(item.anchorId)}
                className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                {item.navLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}