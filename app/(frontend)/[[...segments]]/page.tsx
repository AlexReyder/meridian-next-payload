import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageRenderer } from '@/components/cms/PageRenderer'
import { getPayloadClient } from '@/lib/payload'
import { getLocaleDirection, resolveLocaleAndPageKey } from '@/lib/routes'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ segments?: string[] }> | { segments?: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const route = resolveLocaleAndPageKey(resolvedParams.segments)

  if (!route) return {}

  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: route.pageKey,
      },
    },
    limit: 1,
    locale: route.locale,
    fallbackLocale: 'none',
    depth: 0,
  })

  const page = result.docs[0] as any
  if (!page) return {}

  return {
    title: page?.meta?.title || page?.title || 'Atelier Meridian',
    description: page?.meta?.description || '',
    openGraph: {
      title: page?.meta?.title || page?.title || 'Atelier Meridian',
      description: page?.meta?.description || '',
    },
    twitter: {
      title: page?.meta?.title || page?.title || 'Atelier Meridian',
      description: page?.meta?.description || '',
    },
  }
}

export default async function FrontendPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params)
  const route = resolveLocaleAndPageKey(resolvedParams.segments)

  if (!route) notFound()

  const payload = await getPayloadClient()

  const pageResult = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: route.pageKey,
      },
    },
    limit: 1,
    locale: route.locale,
    fallbackLocale: 'none',
    depth: 2,
  })

  const page = pageResult.docs[0]
  if (!page) notFound()

  const [header, footer] = await Promise.all([
    payload.findGlobal({ slug: 'header', locale: route.locale, fallbackLocale: 'none', depth: 1 }),
    payload.findGlobal({ slug: 'footer', locale: route.locale, fallbackLocale: 'none', depth: 1 }),
  ])

  return (
    <PageRenderer
      page={page}
      pageKey={route.pageKey}
      locale={route.locale}
      dir={getLocaleDirection(route.locale)}
      header={header}
      footer={footer}
    />
  )
}