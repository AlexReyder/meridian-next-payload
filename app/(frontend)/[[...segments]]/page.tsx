import { notFound } from 'next/navigation'

import { PageRenderer } from '@/components/cms/PageRenderer'
import { getFrontendPageData } from '@/lib/getFrontendPageData'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ segments?: string[] }> | { segments?: string[] }
}

export default async function FrontendPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params)
  const data = await getFrontendPageData(resolvedParams.segments)

  if (!data) {
    notFound()
  }

  return (
    <PageRenderer
      page={data.page}
      locale={data.route.locale}
      dir={data.dir}
      header={data.header}
      footer={data.footer}
    />
  )
}