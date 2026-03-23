import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ArtifactItem = {
  title?: string | null
  subtitle?: string | null
  imageUrl?: string | null
  alt?: string | null
}

type ArtifactsStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: ArtifactItem[] | null
  bottomNote?: string | null
}

type Props = {
  block: ArtifactsStartupsBlockData
  locale: Locale
}

export function ArtifactsStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-foreground py-20 text-background lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-12 max-w-3xl', rtl && 'ml-auto text-right')}>
          <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
            <span className="h-px w-8 bg-signature-cobalt-soft/70" />
            <span
              className={cn(
                'text-[11px] text-background/50',
                rtl ? 'tracking-[0.18em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-background lg:text-4xl">
            {block.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-background/60 lg:text-lg">
            {block.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {block.items?.map((artifact, index) =>
            artifact?.title ? (
              <div
                key={`${artifact.title}-${index}`}
                className={cn(
                  'group overflow-hidden rounded border border-background/12 bg-background/[0.04] transition-colors hover:border-background/20 hover:bg-background/[0.06]',
                  rtl && 'text-right',
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={artifact.imageUrl ?? ''}
                    alt={artifact.alt ?? artifact.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-light text-background">
                    {artifact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/50">
                    {artifact.subtitle}
                  </p>
                </div>
              </div>
            ) : null,
          )}
        </div>

        <div className="mt-10 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/40">{block.bottomNote}</p>
        </div>
      </div>
    </section>
  )
}