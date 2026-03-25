type Lang = 'ru' | 'en' | 'ar'

type ProcessStep = {
  number?: string | null
  title?: string | null
  description?: string | null
}

type Props = {
  eyebrow?: string | null
  title?: string | null
  steps?: ProcessStep[] | null
  lang?: Lang
}

export function ProcessStartups({
  eyebrow,
  title,
  steps,
  lang = 'ru',
}: Props) {
  const isRTL = lang === 'ar'

  if (!steps?.length) return null

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1

            return (
              <div key={`${step.number || index}`} className="relative">
                {!isLast && (
                  <div
                    className={`absolute top-6 hidden h-px bg-border/50 lg:block ${
                      isRTL ? 'right-full w-full' : 'left-full w-full'
                    }`}
                  />
                )}

                <div className="mb-4 text-4xl font-light text-accent/40">
                  {step.number}
                </div>

                <h3 className="mb-3 font-serif text-lg font-light text-foreground">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}