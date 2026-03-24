import { ArrowLeft, ArrowRight, Layers } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type LabelItem = {
  label?: string | null
}

type ConceptSectionConceptBlockData = {
  anchorId?: string | null
  navLabel?: string | null
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  category?: string | null
  year?: string | null
  services?: LabelItem[] | null
  results?: LabelItem[] | null
  visualCaption?: string | null
}

type Props = {
  block: ConceptSectionConceptBlockData
  locale: Locale
  index: number
}

export function ConceptSectionConceptBlockComponent({
  block,
  locale,
  index,
}: Props) {
  const rtl = isRTL(locale)
  const isArabic = locale === 'ar'

  const sectionId = block.anchorId || `concept-${index + 1}`

  return (
    <section
      id={sectionId}
      dir={rtl ? 'rtl' : 'ltr'}
      className="border-b border-border/50 py-20 lg:py-28 scroll-mt-36"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
          <div className={cn(rtl && 'lg:order-2 text-right')}>
            <div
              className={cn(
                'mb-5 flex items-center gap-2',
                rtl && 'flex-row-reverse justify-end',
              )}
            >
              <span className="text-[10px] font-medium text-signature-cobalt">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-[1px] w-6 bg-signature-cobalt" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </div>

            <h2 className="mb-5 font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
              {block.title}
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-foreground/80 lg:text-lg">
              {block.description}
            </p>

            {(block.category || block.year) && (
              <div
                className={cn(
                  'mt-8 flex flex-wrap gap-2',
                  rtl && 'justify-end',
                )}
              >
                {block.category ? (
                  <span className="rounded-sm border border-border px-3 py-1 text-xs text-muted-foreground">
                    {block.category}
                  </span>
                ) : null}

                {block.year ? (
                  <span className="rounded-sm border border-border px-3 py-1 text-xs text-muted-foreground">
                    {block.year}
                  </span>
                ) : null}
              </div>
            )}

            {block.services?.length ? 
            (
              <div className="mt-10">
                <div
                  className={cn(
                    'mb-3 flex items-center gap-2',
                    rtl && 'flex-row-reverse justify-end',
                  )}
                >
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {locale === 'ru'
                      ? 'Services'
                      : locale === 'ar'
                        ? 'الخدمات'
                        : 'Services'}
                  </span>
                </div>

                <div
                  className={cn(
                    'flex flex-wrap gap-2',
                    rtl && 'justify-end',
                  )}
                >
                  {block.services.map((item, itemIndex) =>
                    item?.label ? (
                      <span
                        key={`${item.label}-${itemIndex}`}
                        className="rounded-sm bg-muted px-3 py-1.5 text-xs text-foreground/80"
                      >
                        {item.label}
                      </span>
                    ) : null,
                  )}
                </div>
              </div>
            ) : null}

            {block.results?.length ? (
              <div className="mt-10">
                <div
                  className={cn(
                    'mb-3 flex items-center gap-2',
                    rtl && 'flex-row-reverse justify-end',
                  )}
                >
                  {rtl ? (
                    <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {locale === 'ru'
                      ? 'Outputs'
                      : locale === 'ar'
                        ? 'المخرجات'
                        : 'Outputs'}
                  </span>
                </div>

                <div className="space-y-2">
                  {block.results.map((item, itemIndex) =>
                    item?.label ? (
                      <div
                        key={`${item.label}-${itemIndex}`}
                        className={cn(
                          'text-sm text-foreground/80',
                          rtl && 'text-right',
                        )}
                      >
                        {item.label}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ) : null}
          </div>

          <div className={cn(rtl && 'lg:order-1')}>
            <div className="relative overflow-hidden rounded-sm border border-border/60 bg-muted/40 aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {block.navLabel}
                  </div>
                  <div className="font-serif text-2xl font-light text-foreground/60">
                    Concept Preview
                  </div>
                </div>
              </div>
            </div>

            {block.visualCaption ? (
              <p
                className={cn(
                  'mt-4 text-sm leading-relaxed text-muted-foreground',
                  rtl && 'text-right',
                )}
              >
                {block.visualCaption}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}