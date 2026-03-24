export type Locale = 'ru' | 'en' | 'ar'
export type PageKey =
  | 'home'
  | 'solutions'
  | 'pricing'
  | 'get-proposal'
  | 'concepts'
  | 'for-startups'
  | 'for-partners'
  | 'method'

export const DEFAULT_LOCALE: Locale = 'ru'
export const RTL_LOCALES: Locale[] = ['ar']

export const PAGE_KEYS: PageKey[] = [
  'home',
  'solutions',
  'pricing',
  'get-proposal',
  'concepts',
  'for-startups',
  'for-partners',
  'method',
]

export const PAGE_KEY_OPTIONS = PAGE_KEYS.map((value) => ({
  label: value,
  value,
}))

const ROUTE_MAP: Record<PageKey, Record<Locale, string[]>> = {
  home: {
    ru: [],
    en: ['en'],
    ar: ['ar'],
  },
  solutions: {
    ru: ['solutions'],
    en: ['en', 'solutions'],
    ar: ['ar', 'solutions'],
  },
  pricing: {
    ru: ['pricing'],
    en: ['en', 'pricing'],
    ar: ['ar', 'pricing'],
  },
  'get-proposal': {
    ru: ['get-proposal'],
    en: ['en', 'get-proposal'],
    ar: ['ar', 'get-proposal'],
  },
  concepts: {
    ru: ['concepts'],
    en: ['en', 'concepts'],
    ar: ['ar', 'concepts'],
  },
  'for-startups': {
    ru: ['for-startups'],
    en: ['en', 'for-startups'],
    ar: ['ar', 'for-startups'],
  },
  'for-partners': {
    ru: ['for-agencies'],
    en: ['en', 'for-partners'],
    ar: ['ar', 'for-partners'],
  },
  method: {
    ru: ['method'],
    en: ['en', 'how-we-work'],
    ar: ['ar', 'how-we-work'],
  },
}

export function isRTL(locale: Locale) {
  return RTL_LOCALES.includes(locale)
}

export function getLocaleDirection(locale: Locale) {
  return isRTL(locale) ? 'rtl' : 'ltr'
}

export function getHrefForPageKey(pageKey: PageKey, locale: Locale): string {
  const segments = ROUTE_MAP[pageKey][locale]
  return segments.length ? `/${segments.join('/')}` : '/'
}

export function resolveLocaleAndPageKey(segments?: string[]): {
  locale: Locale
  pageKey: PageKey
} | null {
  const normalized = segments ?? []

  for (const [pageKey, routesByLocale] of Object.entries(ROUTE_MAP) as Array<
    [PageKey, Record<Locale, string[]>]
  >) {
    for (const locale of Object.keys(routesByLocale) as Locale[]) {
      const candidate = routesByLocale[locale]

      if (candidate.length === normalized.length && candidate.every((part, index) => part === normalized[index])) {
        return { locale, pageKey }
      }
    }
  }

  return null
}

export function getLanguageSwitcher(pageKey: PageKey) {
  return [
    {
      code: 'RU',
      label: 'Русский',
      locale: 'ru' as const,
      href: getHrefForPageKey(pageKey, 'ru'),
    },
    {
      code: 'EN',
      label: 'English',
      locale: 'en' as const,
      href: getHrefForPageKey(pageKey, 'en'),
    },
    {
      code: 'AR',
      label: 'العربية',
      locale: 'ar' as const,
      href: getHrefForPageKey(pageKey, 'ar'),
    },
  ]
}
