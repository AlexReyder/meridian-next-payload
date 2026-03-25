import {
  FileText,
  GitBranch,
  Layout,
  Package,
  Palette,
  Play,
  type LucideIcon,
} from 'lucide-react'

type Lang = 'ru' | 'en' | 'ar'

type ArtifactItem = {
  icon?: 'fileText' | 'gitBranch' | 'layout' | 'play' | 'palette' | 'package' | null
  title?: string | null
  support?: string | null
}

type Props = {
  eyebrow?: string | null
  title?: string | null
  items?: ArtifactItem[] | null
  lang?: Lang
}

const iconMap: Record<string, LucideIcon> = {
  fileText: FileText,
  gitBranch: GitBranch,
  layout: Layout,
  play: Play,
  palette: Palette,
  package: Package,
}

export function ArtifactsStartups({
  eyebrow,
  title,
  items,
  lang = 'ru',
}: Props) {
  const isRTL = lang === 'ar'

  if (!items?.length) return null

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mb-6 flex items-center gap-3 ${isRTL ? 'justify-start' : ''}`}>
          {isRTL ? (
            <>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {eyebrow}
              </span>
              <span className="h-px w-8 bg-accent" />
            </>
          ) : (
            <>
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {eyebrow}
              </span>
            </>
          )}
        </div>

        <h2 className="mb-12 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
          {title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon || 'fileText'] || FileText

            return (
              <div
                key={`${item.title || 'artifact'}-${index}`}
                className="group rounded-sm border border-border/60 bg-card p-6 transition-colors hover:border-accent/40 lg:p-8"
              >
                <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-sm bg-secondary/50">
                  <div
                    className={`absolute inset-0 ${
                      isRTL
                        ? 'bg-gradient-to-bl from-accent/5 to-transparent'
                        : 'bg-gradient-to-br from-accent/5 to-transparent'
                    }`}
                  />
                  <div className="flex h-full items-center justify-center">
                    <Icon className="h-8 w-8 text-foreground/40" />
                  </div>
                </div>

                <h3 className="mb-2 font-serif text-lg font-light text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.support}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}