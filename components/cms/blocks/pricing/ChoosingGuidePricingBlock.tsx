import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ChoosingGuideItem = {
  title?: string | null
  description?: string | null
  bestForLabel?: string | null
  bestForValue?: string | null
  resultLabel?: string | null
  resultValue?: string | null
}

type ChoosingGuidePricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  layoutVariant?: 'detailed' | 'compact' | null
  items?: ChoosingGuideItem[] | null
}

type Props = {
  block: ChoosingGuidePricingBlockData
  locale: Locale
}

export function ChoosingGuidePricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const compact = block.layoutVariant === 'compact'

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={cn('lg:col-span-4', rtl && 'text-right')}>
            <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
              {rtl ? (
                <>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {block.eyebrow}
                  </span>
                  <div className="flex items-center">
                    <span className="h-[2px] w-2 bg-signature-brass rounded-full" />
                    <span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                    <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {block.eyebrow}
                  </span>
                </>
              )}
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground">
              {block.title}
            </h2>

            <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
              {block.description}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className={cn('grid gap-6', compact ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2')}>
              {block.items?.map((item, index) =>
                item?.title &&
                item?.description &&
                item?.bestForLabel &&
                item?.bestForValue &&
                item?.resultLabel &&
                item?.resultValue ? (
                  <div
                    key={`${item.title}-${index}`}
                    className="relative rounded-sm border border-border bg-card p-6 transition-colors hover:border-foreground/20"
                  >
                    {index === 0 && (
                      <div className={cn('absolute top-0', rtl ? 'right-0' : 'left-0')}>
                        <div
                          className={cn(
                            'absolute top-0 w-4 h-[2px] bg-signature-cobalt',
                            rtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
                          )}
                        />
                        <div
                          className={cn(
                            'absolute top-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full',
                            rtl ? 'right-0' : 'left-0',
                          )}
                        />
                        <div
                          className={cn(
                            'absolute top-[2px] w-2 h-[1.5px] bg-signature-brass/70 rounded-full',
                            rtl ? 'right-4' : 'left-4',
                          )}
                        />
                      </div>
                    )}

                    <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="mt-3 font-serif text-xl font-light text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-6 space-y-4 border-t border-border/50 pt-5">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
                          {item.bestForLabel}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                          {item.bestForValue}
                        </p>
                      </div>

                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
                          {item.resultLabel}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                          {item.resultValue}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}