import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type DetailItem = {
  label?: string | null
}

type ProcessItem = {
  number?: string | null
  title?: string | null
  description?: string | null
  details?: DetailItem[] | null
}

type ProcessStartupsBlockData = {
  sectionId?: string | null
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: ProcessItem[] | null
}

type Props = {
  block: ProcessStartupsBlockData
  locale: Locale
}

export function ProcessStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      id={block.sectionId ?? 'process'}
      dir={rtl ? 'rtl' : 'ltr'}
      className="py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-12 max-w-3xl', rtl && 'ml-auto text-right')}>
          <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
            <span className="h-px w-8 bg-accent" />
            <span
              className={cn(
                'text-[11px] text-muted-foreground',
                rtl ? 'tracking-[0.18em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
            {block.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {block.description}
          </p>
        </div>

        <div className="space-y-0">
          {block.items?.map((step, index) =>
            step?.title ? (
              <div
                key={`${step.number}-${index}`}
                className={cn(
                  'grid gap-8 border-t border-border py-8 first:border-t-0 lg:grid-cols-12 lg:gap-10',
                  rtl && 'text-right',
                )}
              >
                <div className="lg:col-span-1">
                  <span className="font-serif text-3xl text-accent/35 lg:text-4xl">
                    {step.number}
                  </span>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="font-serif text-xl font-light text-foreground lg:text-2xl">
                    {step.title}
                  </h3>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <div className={cn('flex flex-wrap gap-2', rtl && 'justify-end')}>
                    {step.details?.map((detail, detailIndex) =>
                      detail?.label ? (
                        <span
                          key={`${detail.label}-${detailIndex}`}
                          className={cn(
                            'rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground',
                            rtl ? 'tracking-[0.08em]' : 'uppercase tracking-wider',
                          )}
                        >
                          {detail.label}
                        </span>
                      ) : null,
                    )}
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}