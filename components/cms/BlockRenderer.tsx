import type { Locale } from '@/lib/routes'

import { HeroBlockComponent } from '@/components/cms/blocks/HeroBlock'

type Props = {
  blocks: Array<Record<string, unknown>>
  locale: Locale
}

export function BlockRenderer({ blocks, locale }: Props) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${String(block.blockType)}-${index}`

        switch (block.blockType) {
          case 'hero':
            return <HeroBlockComponent key={key} block={block} locale={locale} />
          default:
            return null
        }
      })}
    </>
  )
}
