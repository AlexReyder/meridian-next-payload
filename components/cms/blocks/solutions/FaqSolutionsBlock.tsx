'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FaqItem = {
  question?: string | null
  answer?: string | null
}

type FaqSolutionsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: FaqItem[] | null
}

type Props = {
  block: FaqSolutionsBlockData
  locale: Locale
}

export function FaqSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
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

          <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {block.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {block.description}
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="space-y-4">
            {block.items?.map((faq, index) => {
              if (!faq?.question || !faq?.answer) return null
              const isOpen = openIndex === index

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="overflow-hidden rounded border border-border/60 bg-card transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/30',
                      rtl && 'flex-row-reverse text-right',
                    )}
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg font-light text-foreground lg:text-[1.35rem]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={cn(
                        'h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      'grid transition-all duration-200 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={cn(
                          'border-t border-border/40 px-6 py-5 text-sm leading-relaxed text-muted-foreground lg:text-[15px]',
                          rtl && 'text-right',
                        )}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}