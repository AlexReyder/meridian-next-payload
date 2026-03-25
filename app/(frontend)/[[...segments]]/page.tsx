import { notFound } from 'next/navigation'

import { PageRenderer } from '@/components/cms/PageRenderer'
import { getPayloadClient } from '@/lib/payload'
import {
  buildHrefFromSlug,
  getLocaleDirection,
  getLocaleFromSegments,
  LOCALES,
  PAGE_KEYS,
  resolveLocaleAndPageKey,
  stripLocalePrefix,
  type Locale,
  type PageKey,
} from '@/lib/routes'

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ segments?: string[] }> | { segments?: string[] }
}

function segmentsFromHref(href: string) {
  return href === '/' ? [] : href.replace(/^\//, '').split('/')
}

async function getCustomStaticParams() {
  const payload = await getPayloadClient()
  const params: Array<{ segments?: string[] }> = []
  const seen = new Set<string>()

  for (const locale of LOCALES) {
    const result = await payload.find({
      collection: 'pages',
      locale,
      fallbackLocale: 'none',
      where: {
        routeType: {
          equals: 'custom',
        },
      },
      limit: 1000,
      depth: 0,
    })

    for (const doc of result.docs) {
      const slug = typeof doc?.slug === 'string' ? doc.slug.trim() : ''
      if (!slug) continue

      const href = buildHrefFromSlug(slug, locale)
      if (seen.has(href)) continue
      seen.add(href)

      params.push({
        segments: segmentsFromHref(href),
      })
    }
  }

  return params
}

export async function generateStaticParams() {
  const params: Array<{ segments?: string[] }> = []
  const seen = new Set<string>()

  for (const pageKey of PAGE_KEYS as PageKey[]) {
    for (const locale of LOCALES) {
      const { getHrefForPageKey } = await import('@/lib/routes')
      const href = getHrefForPageKey(pageKey, locale)

      if (seen.has(href)) continue
      seen.add(href)

      params.push({
        segments: segmentsFromHref(href),
      })
    }
  }

  const customParams = await getCustomStaticParams()

  for (const item of customParams) {
    const key = (item.segments ?? []).join('/')
    if (seen.has(`/${key}`)) continue
    seen.add(`/${key}`)
    params.push(item)
  }

  return params
}

export default async function FrontendPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params)
  const payload = await getPayloadClient()

  const systemRoute = resolveLocaleAndPageKey(resolvedParams.segments)
  const locale = systemRoute?.locale ?? getLocaleFromSegments(resolvedParams.segments)

  let page: any = null

  if (systemRoute) {
    const pageResult = await payload.find({
      collection: 'pages',
      where: {
        pageKey: {
          equals: systemRoute.pageKey,
        },
      },
      limit: 1,
      locale: systemRoute.locale,
      fallbackLocale: 'none',
      depth: 2,
    })

    page = pageResult.docs[0]
  } else {
    const slug = stripLocalePrefix(resolvedParams.segments).join('/')

    if (!slug) {
      notFound()
    }

    const pageResult = await payload.find({
      collection: 'pages',
      where: {
        routeType: {
          equals: 'custom',
        },
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      locale,
      fallbackLocale: 'none',
      depth: 2,
    })

    page = pageResult.docs[0]
  }

  if (!page) {
    notFound()
  }

  const [header, footer] = await Promise.all([
    payload.findGlobal({
      slug: 'header',
      locale,
      fallbackLocale: 'none',
      depth: 1,
    }),
    payload.findGlobal({
      slug: 'footer',
      locale,
      fallbackLocale: 'none',
      depth: 1,
    }),
  ])

  return (
    <PageRenderer
      page={page}
      locale={locale}
      dir={getLocaleDirection(locale)}
      header={header}
      footer={footer}
    />
  )
}