import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

type RevalidateBody = {
  paths?: string[]
}

export async function POST(req: NextRequest) {
  const secret =
    req.headers.get('x-revalidate-secret') ??
    req.nextUrl.searchParams.get('secret')

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401 },
    )
  }

  let body: RevalidateBody

  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body' },
      { status: 400 },
    )
  }

  const paths = Array.isArray(body.paths)
    ? body.paths.filter(
        (path): path is string => typeof path === 'string' && path.length > 0,
      )
    : []

  if (!paths.length) {
    return NextResponse.json(
      { ok: false, error: 'No paths provided' },
      { status: 400 },
    )
  }

  for (const path of paths) {
    revalidatePath(path, 'page')
  }

  return NextResponse.json({
    ok: true,
    revalidated: paths,
  })
}