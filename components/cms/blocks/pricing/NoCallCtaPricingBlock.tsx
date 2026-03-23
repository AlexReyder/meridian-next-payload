import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type BenefitItem = {
  label?: string | null
}

type NoCallCtaPricingBlockData = {
  title?: string | null
  description?: string | null
  descriptionSecondary?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  footerNote?: string | null
  benefits?: BenefitItem[] | null
}

type Props = {
  block: NoCallCtaPricingBlockData
  locale: Locale
}

export function NoCallCtaPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isArabic = locale === 'ar'

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            'relative overflow-hidden rounded-sm border p-8 lg:p-12',
            isArabic
              ? 'border-background/10 bg-foreground text-background'
              : 'border-border/60 bg-card text-foreground',
          )}
        >
          <div
            className={cn(
              'absolute inset-0 pointer-events-none',
              isArabic
                ? 'bg-gradient-to-bl from-background/5 via-transparent to-transparent'
                : 'bg-gradient-to-br from-secondary/30 via-transparent to-transparent',
            )}
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
            <div className={cn(rtl && 'lg:order-2')}>
              <div className="mb-8 flex items-center gap-1">
                <div className={cn('h-px w-12', isArabic ? 'bg-background/20' : 'bg-border')} />

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

                <div className={cn('h-px w-12', isArabic ? 'bg-background/20' : 'bg-border')} />
              </div>

              <h2
                className={cn(
                  'max-w-2xl font-serif text-2xl font-light leading-snug sm:text-3xl lg:text-[2.25rem]',
                  isArabic ? 'text-background' : 'text-foreground',
                )}
              >
                {block.title}
              </h2>

              <p
                className={cn(
                  'mt-4 max-w-2xl text-base leading-relaxed lg:text-lg',
                  isArabic ? 'text-background/70' : 'text-muted-foreground',
                )}
              >
                {block.description}
              </p>

              {block.descriptionSecondary ? (
                <p
                  className={cn(
                    'mt-3 max-w-2xl text-sm leading-relaxed lg:text-base',
                    isArabic ? 'text-background/60' : 'text-muted-foreground/90',
                  )}
                >
                  {block.descriptionSecondary}
                </p>
              ) : null}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="relative group">
                  <Link
                    href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
                    className={cn(
                      'inline-flex h-11 items-center justify-center rounded-md px-7 text-[11px] font-medium transition-colors',
                      isArabic
                        ? 'bg-background text-foreground hover:bg-background/90'
                        : 'bg-foreground text-background hover:bg-foreground/90',
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

                  <div
                    className={cn(
                      'absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-1/2',
                      rtl
                        ? 'bg-gradient-to-r from-signature-brass to-signature-cobalt'
                        : 'bg-gradient-to-r from-signature-cobalt to-signature-brass',
                    )}
                  />
                </div>

                <Link
                  href={getHrefForPageKey(block.secondaryPageKey ?? 'get-proposal', locale)}
                  className={cn(
                    'inline-flex h-11 items-center justify-center rounded-md border px-7 text-[11px] font-medium transition-colors',
                    isArabic
                      ? 'border-background/20 text-background hover:bg-background/10'
                      : 'border-foreground/15 text-foreground hover:bg-foreground/5',
                    rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
                  )}
                >
                  {block.secondaryButtonLabel}
                </Link>
              </div>

              <p
                className={cn(
                  'mt-6 text-sm',
                  isArabic ? 'text-background/50' : 'text-muted-foreground',
                )}
              >
                {block.footerNote}
              </p>
            </div>

            <div className={cn(rtl && 'lg:order-1')}>
              <div
                className={cn(
                  'rounded-sm border p-5 lg:p-6',
                  isArabic
                    ? 'border-background/10 bg-background/5'
                    : 'border-border/60 bg-secondary/20',
                )}
              >
                <div
                  className={cn(
                    'mb-4 text-[10px] uppercase tracking-[0.18em]',
                    isArabic ? 'text-background/40' : 'text-muted-foreground',
                  )}
                >
                  {locale === 'ru'
                    ? 'Без обязательного звонка'
                    : locale === 'ar'
                      ? 'من دون مكالمة إلزامية'
                      : 'No mandatory call'}
                </div>

                <div className="space-y-3">
                  {block.benefits?.map((benefit, index) =>
                    benefit?.label ? (
                      <div
                        key={`${benefit.label}-${index}`}
                        className={cn(
                          'flex items-start gap-3 rounded-sm border px-4 py-3',
                          isArabic
                            ? 'border-background/10 bg-background/5'
                            : 'border-border/50 bg-background/60',
                        )}
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-signature-cobalt" />
                        <span
                          className={cn(
                            'text-sm leading-relaxed',
                            isArabic ? 'text-background/80' : 'text-foreground/80',
                          )}
                        >
                          {benefit.label}
                        </span>
                      </div>
                    ) : null,
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}