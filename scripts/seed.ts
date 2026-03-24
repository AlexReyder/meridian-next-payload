import { run } from 'node:test'
import type { Payload } from 'payload'

type Locale = 'ru' | 'en' | 'ar'

type HeaderNavItem = {
  id?: string
  label: string
  pageKey: string
}

type HeaderSeed = {
  brandName: string
  brandTagline: string
  navigation: HeaderNavItem[]
  proposalButtonLabel: string
  mobileLanguageLabel: string
  menuAriaLabel: string
}

type FooterLink = {
  id?: string
  label: string
  pageKey?: string
  href?: string
  anchor?: string
}

type FooterColumn = {
  id?: string
  type: 'links'
  title: string
  links: FooterLink[]
}

type FooterSeed = {
  variant: 'dark' | 'light'
  brandName: string
  brandTagline: string
  description: string
  brandEmail?: string
  columns: FooterColumn[]
  bottomTextTemplate: string
  bottomLinks: FooterLink[]
}

const HEADER_SEED: Record<Locale, HeaderSeed> = {
  ru: {
    brandName: 'Atelier Meridian',
    brandTagline: 'Product Architecture & Interface Studio',
    navigation: [
      { label: 'Решения', pageKey: 'solutions' },
      { label: 'Для стартапов', pageKey: 'for-startups' },
      { label: 'Для партнёров', pageKey: 'for-partners' },
      { label: 'Цены', pageKey: 'pricing' },
      { label: 'Как мы работаем', pageKey: 'method' },
    ],
    proposalButtonLabel: 'Получить предложение',
    mobileLanguageLabel: 'Язык',
    menuAriaLabel: 'Открыть меню',
  },
  en: {
    brandName: 'Atelier Meridian',
    brandTagline: 'Product Architecture & Interface Studio',
    navigation: [
      { label: 'Solutions', pageKey: 'solutions' },
      { label: 'For Startups', pageKey: 'for-startups' },
      { label: 'For Partners', pageKey: 'for-partners' },
      { label: 'Pricing', pageKey: 'pricing' },
      { label: 'How We Work', pageKey: 'method' },
    ],
    proposalButtonLabel: 'Get Proposal',
    mobileLanguageLabel: 'Language',
    menuAriaLabel: 'Open menu',
  },
  ar: {
    brandName: 'Atelier Meridian',
    brandTagline: 'استوديو هندسة المنتجات والواجهات',
    navigation: [
      { label: 'الحلول', pageKey: 'solutions' },
      { label: 'للشركات الناشئة', pageKey: 'for-startups' },
      { label: 'للشركاء', pageKey: 'for-partners' },
      { label: 'الأسعار', pageKey: 'pricing' },
      { label: 'كيف نعمل', pageKey: 'method' },
    ],
    proposalButtonLabel: 'اطلب عرضاً',
    mobileLanguageLabel: 'اللغة',
    menuAriaLabel: 'فتح القائمة',
  },
}

const FOOTER_SEED: Record<Locale, FooterSeed> = {
  ru: {
    variant: 'dark',
    brandName: 'Atelier Meridian',
    brandTagline: 'Product Architecture & Interface Studio',
    description:
      'Бутиковая студия продуктовой архитектуры. Структурируем сложные digital-продукты до начала разработки.',
    brandEmail: 'hello@atelier-meridian.com',
    columns: [
      {
        type: 'links',
        title: 'Решения',
        links: [
          { label: 'Все решения', pageKey: 'solutions' },
          { label: 'Для стартапов', pageKey: 'for-startups' },
          { label: 'Для партнёров', pageKey: 'for-partners' },
          { label: 'Концепты студии', pageKey: 'concepts' },
        ],
      },
      {
        type: 'links',
        title: 'Форматы',
        links: [
          { label: 'Product Framing Sprint', pageKey: 'pricing', anchor: '#framing' },
          { label: 'Build-Ready Prototype', pageKey: 'pricing', anchor: '#prototype' },
          { label: 'Partner Desk', pageKey: 'pricing', anchor: '#partner' },
        ],
      },
      {
        type: 'links',
        title: 'Студия',
        links: [
          { label: 'Как мы работаем', pageKey: 'method' },
          { label: 'Цены', pageKey: 'pricing' },
          { label: 'Получить предложение', pageKey: 'get-proposal' },
        ],
      },
      {
        type: 'links',
        title: 'Язык',
        links: [
          { label: 'Русский', href: '/' },
          { label: 'English', href: '/en' },
          { label: 'العربية', href: '/ar' },
        ],
      },
    ],
    bottomTextTemplate: '© 2026 Atelier Meridian. Все права защищены.',
    bottomLinks: [
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Условия использования', href: '#' },
    ],
  },

  en: {
    variant: 'light',
    brandName: 'Atelier Meridian',
    brandTagline: 'Product Architecture & Interface Studio',
    description:
      'Boutique product architecture studio. We structure complex digital products before development begins.',
    brandEmail: 'hello@atelier-meridian.com',
    columns: [
      {
        type: 'links',
        title: 'Solutions',
        links: [
          { label: 'All Solutions', pageKey: 'solutions' },
          { label: 'For Startups', pageKey: 'for-startups' },
          { label: 'For Partners', pageKey: 'for-partners' },
          { label: 'Studio Concepts', pageKey: 'concepts' },
        ],
      },
      {
        type: 'links',
        title: 'Formats',
        links: [
          { label: 'Product Framing Sprint', pageKey: 'pricing', anchor: '#framing' },
          { label: 'Build-Ready Prototype', pageKey: 'pricing', anchor: '#prototype' },
          { label: 'Partner Desk', pageKey: 'pricing', anchor: '#partner' },
        ],
      },
      {
        type: 'links',
        title: 'Studio',
        links: [
          { label: 'How We Work', pageKey: 'method' },
          { label: 'Pricing', pageKey: 'pricing' },
          { label: 'Get Proposal', pageKey: 'get-proposal' },
        ],
      },
      {
        type: 'links',
        title: 'Language',
        links: [
          { label: 'Русский', href: '/' },
          { label: 'English', href: '/en' },
          { label: 'العربية', href: '/ar' },
        ],
      },
    ],
    bottomTextTemplate: '© 2026 Atelier Meridian. All rights reserved.',
    bottomLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
    ],
  },

  ar: {
    variant: 'light',
    brandName: 'Atelier Meridian',
    brandTagline: 'استوديو هندسة المنتجات والواجهات',
    description:
      'استوديو متخصص في هندسة المنتجات. نُهيكل المنتجات الرقمية المعقدة قبل بدء التطوير.',
    brandEmail: 'hello@atelier-meridian.com',
    columns: [
      {
        type: 'links',
        title: 'الحلول',
        links: [
          { label: 'جميع الحلول', pageKey: 'solutions' },
          { label: 'للشركات الناشئة', pageKey: 'for-startups' },
          { label: 'للشركاء', pageKey: 'for-partners' },
          { label: 'مفاهيم الاستوديو', pageKey: 'concepts' },
        ],
      },
      {
        type: 'links',
        title: 'الصيغ',
        links: [
          { label: 'Product Framing Sprint', pageKey: 'pricing', anchor: '#framing' },
          { label: 'Build-Ready Prototype', pageKey: 'pricing', anchor: '#prototype' },
          { label: 'Partner Desk', pageKey: 'pricing', anchor: '#partner' },
        ],
      },
      {
        type: 'links',
        title: 'الاستوديو',
        links: [
          { label: 'كيف نعمل', pageKey: 'method' },
          { label: 'الأسعار', pageKey: 'pricing' },
          { label: 'اطلب عرضاً', pageKey: 'get-proposal' },
        ],
      },
      {
        type: 'links',
        title: 'اللغة',
        links: [
          { label: 'Русский', href: '/' },
          { label: 'English', href: '/en' },
          { label: 'العربية', href: '/ar' },
        ],
      },
    ],
    bottomTextTemplate: '© 2026 Atelier Meridian. جميع الحقوق محفوظة.',
    bottomLinks: [
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'شروط الاستخدام', href: '#' },
    ],
  },
}

function syncRowIds<T extends { id?: string }>(
  nextRows: T[] | undefined,
  savedRows: Array<{ id?: string }> | undefined,
): T[] {
  if (!nextRows?.length) return []

  return nextRows.map((row, index) => ({
    ...row,
    ...(savedRows?.[index]?.id ? { id: savedRows[index].id } : {}),
  }))
}

function syncHeaderIds(
  nextData: HeaderSeed,
  savedData: Partial<HeaderSeed> & { navigation?: Array<{ id?: string }> },
): HeaderSeed {
  return {
    ...nextData,
    navigation: syncRowIds(nextData.navigation, savedData.navigation),
  }
}

function syncFooterIds(
  nextData: FooterSeed,
  savedData: Partial<FooterSeed> & {
    columns?: Array<{ id?: string; links?: Array<{ id?: string }> }>
    bottomLinks?: Array<{ id?: string }>
  },
): FooterSeed {
  return {
    ...nextData,
    columns: nextData.columns.map((column, columnIndex) => {
      const savedColumn = savedData.columns?.[columnIndex]

      return {
        ...column,
        ...(savedColumn?.id ? { id: savedColumn.id } : {}),
        links: syncRowIds(column.links, savedColumn?.links),
      }
    }),
    bottomLinks: syncRowIds(nextData.bottomLinks, savedData.bottomLinks),
  }
}

export async function seedHeaderGlobal(payload: Payload) {
  await payload.updateGlobal({
    slug: 'header',
    locale: 'ru',
    depth: 0,
    data: HEADER_SEED.ru,
  })

  const savedRuHeader = await payload.findGlobal({
    slug: 'header',
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  await payload.updateGlobal({
    slug: 'header',
    locale: 'en',
    depth: 0,
    data: syncHeaderIds(HEADER_SEED.en, savedRuHeader as any),
  })

  const savedEnHeader = await payload.findGlobal({
    slug: 'header',
    locale: 'en',
    fallbackLocale: 'none',
    depth: 0,
  })

  await payload.updateGlobal({
    slug: 'header',
    locale: 'ar',
    depth: 0,
    data: syncHeaderIds(HEADER_SEED.ar, (savedEnHeader as any) || (savedRuHeader as any)),
  })
}

export async function seedFooterGlobal(payload: Payload) {
  await payload.updateGlobal({
    slug: 'footer',
    locale: 'ru',
    depth: 0,
    data: FOOTER_SEED.ru,
  })

  const savedRuFooter = await payload.findGlobal({
    slug: 'footer',
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  await payload.updateGlobal({
    slug: 'footer',
    locale: 'en',
    depth: 0,
    data: syncFooterIds(FOOTER_SEED.en, savedRuFooter as any),
  })

  const savedEnFooter = await payload.findGlobal({
    slug: 'footer',
    locale: 'en',
    fallbackLocale: 'none',
    depth: 0,
  })

  await payload.updateGlobal({
    slug: 'footer',
    locale: 'ar',
    depth: 0,
    data: syncFooterIds(FOOTER_SEED.ar, (savedEnFooter as any) || (savedRuFooter as any)),
  })
}

export async function seedHeaderAndFooterGlobals(payload: Payload) {
  await seedHeaderGlobal(payload)
  await seedFooterGlobal(payload)
}



async function run() {

 await seedHeaderAndFooterGlobals(payload)

  console.log('Metadata seed completed')
  process.exit(0)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
