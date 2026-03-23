import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type PackageItem = {
  label?: string | null
}

type PackageCard = {
  badge?: string | null
  title?: string | null
  price?: string | null
  timeline?: string | null
  idealFor?: string | null
  featured?: boolean | null
  items?: PackageItem[] | null
  buttonLabel?: string | null
  buttonPageKey?: PageKey | null
}

type PackageCardsPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  packages?: PackageCard[] | null
}

type Props = {
  block: PackageCardsPricingBlockData
  locale: Locale
}

export function PackageCardsPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isArabic = locale === 'ar'

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('flex items-center gap-3 mb-6', rtl && 'flex-row-reverse')}>
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

        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground">
            {block.title}
          </h2>

          <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
            {block.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {block.packages?.map((pkg, index) =>
            pkg?.title && pkg?.price && pkg?.timeline && pkg?.idealFor ? (
              <div
                key={`${pkg.title}-${index}`}
                className={cn(
                  'relative rounded-sm border p-6 lg:p-8 transition-colors hover:border-foreground/20',
                  pkg.featured
                    ? 'bg-card border-foreground/20'
                    : 'bg-background border-border',
                )}
              >
                {(index === 0 || pkg.featured) && (
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

                <div className="min-h-[28px]">
                  {pkg.badge ? (
                    <span className="inline-flex items-center rounded-sm border border-signature-cobalt/25 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-signature-cobalt">
                      {pkg.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 font-serif text-2xl font-light text-foreground">
                  {pkg.title}
                </h3>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-3xl font-light text-foreground">{pkg.price}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {pkg.timeline}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {pkg.idealFor}
                </p>

                <div className="mt-6 space-y-3 border-t border-border/50 pt-6">
                  {pkg.items?.map((item, itemIndex) =>
                    item?.label ? (
                      <div key={`${item.label}-${itemIndex}`} className="flex items-start gap-3">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-signature-cobalt shrink-0" />
                        <span className="text-sm leading-relaxed text-foreground/75">
                          {item.label}
                        </span>
                      </div>
                    ) : null,
                  )}
                </div>

                <div className="mt-8">
                  <Link
                    href={getHrefForPageKey(pkg.buttonPageKey ?? 'get-proposal', locale)}
                    className={cn(
                      'inline-flex h-11 items-center justify-center rounded-md px-6 text-[11px] font-medium transition-colors',
                      pkg.featured
                        ? 'bg-foreground text-background hover:bg-foreground/90'
                        : 'border border-foreground/15 text-foreground hover:bg-foreground/5',
                      rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
                    )}
                  >
                    {rtl ? (
                      <>
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        {pkg.buttonLabel}
                      </>
                    ) : (
                      <>
                        {pkg.buttonLabel}
                        {!isArabic ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
                      </>
                    )}
                  </Link>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}