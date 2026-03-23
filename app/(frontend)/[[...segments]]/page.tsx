import { notFound } from 'next/navigation'

import { PageRenderer } from '@/components/cms/PageRenderer'
import { getPayloadClient } from '@/lib/payload'
import { getLocaleDirection, resolveLocaleAndPageKey } from '@/lib/routes'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ segments?: string[] }> | { segments?: string[] }
}

export default async function FrontendPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params)
  const route = resolveLocaleAndPageKey(resolvedParams.segments)

  if (!route) {
    notFound()
  }

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

  if (!page) {
    notFound()
  }

  const [header, footer] = await Promise.all([
    payload.findGlobal({ slug: 'header', locale: route.locale, fallbackLocale: 'none', depth: 1 }),
    payload.findGlobal({ slug: 'footer', locale: route.locale, fallbackLocale: 'none', depth: 1 }),
  ])

  return (
    <div dir={getLocaleDirection(route.locale)}>
      <PageRenderer locale={route.locale} pageKey={route.pageKey} page={page} header={header} footer={footer} />
    </div>
  )
}
