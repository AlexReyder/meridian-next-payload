import type { Payload } from 'payload'

import {
  buildHrefFromSlug,
  getHrefForPageKey,
  LOCALES,
  PAGE_KEYS,
  type PageKey,
} from '@/lib/routes'

function unique(paths: string[]) {
  return Array.from(new Set(paths))
}

export function getSystemPagePaths(pageKey: PageKey) {
  return unique(LOCALES.map((locale) => getHrefForPageKey(pageKey, locale)))
}

export function getAllFrontendPaths() {
  const paths: string[] = []

  for (const pageKey of PAGE_KEYS as PageKey[]) {
    paths.push(...getSystemPagePaths(pageKey))
  }

  return unique(paths)
}

export async function getCustomPagePaths(
  payload: Payload,
  pageId: string | number,
) {
  const paths: string[] = []

  for (const locale of LOCALES) {
    const localizedDoc = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale,
      fallbackLocale: 'none',
      depth: 0,
    })

    const slug =
      typeof localizedDoc?.slug === 'string' ? localizedDoc.slug.trim() : ''

    if (!slug) continue
    paths.push(buildHrefFromSlug(slug, locale))
  }

  return unique(paths)
}

export async function getPathsForPageDocument(
  payload: Payload,
  doc: {
    id: string | number
    pageKey?: string | null
    routeType?: string | null
  },
) {
  if (doc?.routeType === 'system' && doc?.pageKey) {
    return getSystemPagePaths(doc.pageKey as PageKey)
  }

  if (doc?.routeType === 'custom') {
    return getCustomPagePaths(payload, doc.id)
  }

  return []
}

export async function revalidateFrontendPaths(paths: string[]) {
  const frontendURL = process.env.APP_URL || 'http://localhost:3000'
  const secret = process.env.REVALIDATE_SECRET

  if (!secret || !paths.length) return

  const response = await fetch(`${frontendURL}/api/revalidate`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-revalidate-secret': secret,
    },
    body: JSON.stringify({ paths: unique(paths) }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Revalidate failed: ${response.status} ${text}`)
  }
}