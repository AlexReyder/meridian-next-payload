import type { Locale } from '@/lib/routes'

import { HeroBlockComponent } from '@/components/cms/blocks/HeroBlock'
import { ValueHomeBlockComponent } from './blocks/ValueHomeBlock'
import { VideoWalkthroughHomeBlockComponent } from './blocks/VideoWalkthroughHomeBlock'
import { DeliverablesHomeBlockComponent } from './blocks/DeliverablesHomeBlock'
import { WhyHomeBlockComponent } from './blocks/WhyHomeBlock'
import { AudienceHomeBlockComponent } from './blocks/AudienceHomeBlock'

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
          case 'valueHome':
            return <ValueHomeBlockComponent key={key} block={block} locale={locale} />
          case 'videoWalkthroughHome':
            return <VideoWalkthroughHomeBlockComponent key={key} block={block} locale={locale} />
          case 'deliverablesHome':
            return <DeliverablesHomeBlockComponent key={key} block={block} locale={locale} />
          case 'whyHome':
            return <WhyHomeBlockComponent key={key} block={block} locale={locale} />
          case 'audienceHome':
            return <AudienceHomeBlockComponent key={key} block={block} locale={locale} />
          default:
            return null
        }
      })}
    </>
  )
}
