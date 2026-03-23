import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'

import { importMap } from '../importMap'

type PageParams = { segments?: string[] }
type SearchParams = { [key: string]: string | string[] | undefined }

type PageProps = {
  params: Promise<PageParams> | PageParams
  searchParams: Promise<SearchParams> | SearchParams
}

export const generateMetadata = ({ params, searchParams }: PageProps): Promise<Metadata> => {
  const paramsPromise = Promise.resolve(params || {}).then((value) => ({
    segments: value.segments ?? [],
    ...value,
  }))

  const searchParamsPromise = Promise.resolve(searchParams || {})

  return generatePageMetadata({
    config,
    params: paramsPromise,
    searchParams: searchParamsPromise,
  })
}

const Page = ({ params, searchParams }: PageProps) => {
  const paramsPromise = Promise.resolve(params || {}).then((value) => ({
    segments: value.segments ?? [],
    ...value,
  }))

  const searchParamsPromise = Promise.resolve(searchParams || {})

  return RootPage({
    config,
    params: paramsPromise,
    searchParams: searchParamsPromise,
    importMap,
  })
}

export default Page
