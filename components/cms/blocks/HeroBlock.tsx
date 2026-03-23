import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { getMediaAlt, getMediaUrl } from '@/lib/media'
import { cn } from '@/lib/utils'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

type Tag = {
  label: string
}

type HeroBlockData = {
  eyebrow?: string
  title?: string
  description?: string
  tags?: Tag[]
  primaryButtonLabel?: string
  primaryPageKey?: PageKey
  secondaryButtonLabel?: string
  secondaryPageKey?: PageKey
  desktopImage?: unknown
  mobileImage?: unknown
}

type Props = {
  block: HeroBlockData
  locale: Locale
}

export function HeroBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const desktopImageUrl = getMediaUrl(block.desktopImage)
  const mobileImageUrl = getMediaUrl(block.mobileImage)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="relative overflow-hidden px-6 pb-10 pt-20 lg:px-8 lg:pb-14 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#f5f3ef]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #9a9080 1px, transparent 1px), linear-gradient(to bottom, #9a9080 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start">
        <div className={cn('lg:pt-8 xl:pt-12', rtl && 'lg:order-2')}>
          <div className={cn('mb-5 inline-flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
              <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
              <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass rtl:mr-0.5 rtl:ml-0" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9080]">{block.eyebrow}</span>
          </div>

          <h1 className="font-serif text-[2.25rem] leading-[1.08] tracking-[-0.015em] text-[#2a2520] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem]">
            {block.title}
          </h1>

          {block.description ? (
            <p className="mt-5 max-w-[440px] text-[14px] leading-[1.7] text-[#6b6560] lg:text-[15px]">
              {block.description}
            </p>
          ) : null}

          <div className={cn('mt-7 flex flex-col gap-3 sm:flex-row', rtl && 'sm:flex-row-reverse')}>
            {block.primaryButtonLabel ? (
              <Link
                href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
                className={cn(
                  'inline-flex h-10 items-center justify-center rounded-[3px] bg-[#2a2520] px-6 text-[10px] uppercase tracking-[0.14em] text-[#faf9f6] shadow-sm transition-colors hover:bg-[#3a3530]',
                  rtl && 'flex-row-reverse',
                )}
              >
                {block.primaryButtonLabel}
                <ArrowRight className={cn('ml-2 h-3.5 w-3.5', rtl && 'mr-2 ml-0 rotate-180')} />
              </Link>
            ) : null}

            {block.secondaryButtonLabel ? (
              <Link
                href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
                className="inline-flex h-10 items-center justify-center rounded-[3px] border border-[#d4cfc5] px-6 text-[10px] uppercase tracking-[0.14em] text-[#5a554f] transition-colors hover:border-[#c4bfb5] hover:bg-[#f0eee9]"
              >
                {block.secondaryButtonLabel}
              </Link>
            ) : null}
          </div>

          {block.tags?.length ? (
            <div className="mt-8 border-t border-[#e8e5de] pt-5">
              <div className={cn('flex flex-wrap gap-2', rtl && 'justify-end')}>
                {block.tags.map((tag, index) => (
                  <span
                    key={`${tag.label}-${index}`}
                    className="inline-flex items-center rounded-[3px] border border-[#e8e5de] bg-[#faf9f6] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.06em] text-[#8a847a] transition-all duration-300 hover:border-[#d4cfc5] hover:text-[#6b6560]"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className={cn('relative min-h-[380px] lg:min-h-[520px]', rtl && 'lg:order-1')}>
          <div className="absolute inset-0 rounded-[28px] border border-white/60 bg-white/50 shadow-[0_30px_90px_rgba(42,37,32,0.08)] backdrop-blur-sm" />

          {desktopImageUrl ? (
            <div className="absolute left-[8%] top-[10%] w-[82%] overflow-hidden rounded-[20px] border border-[#e9e5dc] bg-white shadow-[0_24px_70px_rgba(42,37,32,0.12)] rtl:right-[8%] rtl:left-auto">
              <img
                src={desktopImageUrl}
                alt={getMediaAlt(block.desktopImage, 'Hero preview')}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : (
            <div className="absolute left-[8%] top-[10%] flex h-[68%] w-[82%] items-center justify-center rounded-[20px] border border-dashed border-[#d8d1c6] bg-[#f7f4ee] text-sm text-[#8a847a] rtl:right-[8%] rtl:left-auto">
              Upload desktop hero image in Payload Media
            </div>
          )}

          {mobileImageUrl ? (
            <div className="absolute bottom-[5%] right-[6%] w-[26%] overflow-hidden rounded-[24px] border border-[#e9e5dc] bg-white shadow-[0_24px_70px_rgba(42,37,32,0.18)] rtl:left-[6%] rtl:right-auto">
              <img
                src={mobileImageUrl}
                alt={getMediaAlt(block.mobileImage, 'Mobile hero preview')}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
