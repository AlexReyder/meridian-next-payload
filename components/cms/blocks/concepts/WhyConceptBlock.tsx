import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type WhyItem = {
  title?: string | null
  description?: string | null
}

type WhyConceptsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: WhyItem[] | null
}

type Props = {
  block: WhyConceptsBlockData
  locale: Locale
}

export function WhyConceptsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="border-t border-border/50 bg-muted/20 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:gap-16">
          <div className={cn(rtl && 'text-right')}>
            <div
              className={cn(
                'mb-5 flex items-center gap-2',
                rtl && 'flex-row-reverse justify-end',
              )}
            >
              <div className="h-[1px] w-6 bg-signature-cobalt" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
              {block.title}
            </h2>
          </div>

          <div className={cn(rtl && 'text-right')}>
            <p className="text-base leading-relaxed text-foreground/80 lg:text-lg">
              {block.description}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {block.items?.map((item, index) =>
            item?.title && item?.description ? (
              <div
                key={`${item.title}-${index}`}
                className={cn(
                  'rounded-sm border border-border/60 bg-background p-6 transition-colors hover:border-foreground/20',
                  rtl && 'text-right',
                )}
              >
                <div className="mb-4 text-[10px] font-medium tracking-[0.2em] text-signature-cobalt">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="mb-3 text-sm font-medium text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}