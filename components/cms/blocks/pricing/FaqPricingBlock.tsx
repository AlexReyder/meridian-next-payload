'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type FAQItem = {
  question?: string | null
  answer?: string | null
}

type FaqPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: FAQItem[] | null
}

type Props = {
  block: FaqPricingBlockData
  locale: Locale
}

export function FaqPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isArabic = locale === 'ar'
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (isArabic) {
    return (
      <section dir="rtl" className="border-t border-border/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>

              <div className="flex items-center">
                <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
              {block.title}
            </h2>

            {block.description ? (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {block.description}
              </p>
            ) : null}
          </div>

          <div className="mt-14 max-w-3xl">
            {block.items?.map((item, index) =>
              item?.question && item?.answer ? (
                <div
                  key={`${item.question}-${index}`}
                  className="border-b border-border last:border-b-0"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between gap-4 py-6 text-right"
                  >
                    <span className="font-serif text-lg text-foreground">{item.question}</span>

                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                        openIndex === index && 'rotate-180',
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      'overflow-hidden transition-all',
                      openIndex === index ? 'max-h-96 pb-6' : 'max-h-0',
                    )}
                  >
                    <p className="leading-relaxed text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/40 py-20 lg:py-28">
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
                    <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                    <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                    <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {block.eyebrow}
                  </span>
                </>
              )}
            </div>

            <h2 className="font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
              {block.title}
            </h2>

            {block.description ? (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {block.description}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {block.items?.map((item, index) =>
                item?.question && item?.answer ? (
                  <AccordionItem
                    key={`${item.question}-${index}`}
                    value={`item-${index}`}
                    className="border-b border-border/40"
                  >
                    <AccordionTrigger
                      className={cn(
                        'py-5 text-base font-medium text-foreground hover:no-underline',
                        rtl ? 'text-right' : 'text-left',
                      )}
                    >
                      {item.question}
                    </AccordionTrigger>

                    <AccordionContent
                      className={cn(
                        'pb-5 text-sm leading-relaxed text-muted-foreground lg:text-[15px]',
                        rtl && 'text-right',
                      )}
                    >
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ) : null,
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}