import type { Locale } from '@/lib/routes'

import { HeroBlockComponent } from '@/components/cms/blocks/home/HeroBlock'
import { ValueHomeBlockComponent } from './blocks/home/ValueHomeBlock'
import { VideoWalkthroughHomeBlockComponent } from './blocks/home/VideoWalkthroughHomeBlock'
import { DeliverablesHomeBlockComponent } from './blocks/home/DeliverablesHomeBlock'
import { WhyHomeBlockComponent } from './blocks/home/WhyHomeBlock'
import { AudienceHomeBlockComponent } from './blocks/home/AudienceHomeBlock'
import { ConceptsHomeBlockComponent } from './blocks/home/ConceptsHomeBlock'
import { MethodHomeBlockComponent } from './blocks/home/MethodHomeBlock'
import { ProposalHomeBlockComponent } from './blocks/home/ProposalHomeBlock'
import { SamplePreviewHomeBlockComponent } from './blocks/home/SamplePreviewHomeBlock'
import { TrustHomeBlockComponent } from './blocks/home/TrustHomeBlock'
import { FaqHomeBlockComponent } from './blocks/home/FaqHomeBlock'
import { PricingHomeBlockComponent } from './blocks/home/PricingHomeBlock'
import { FinalCtaHomeBlockComponent } from './blocks/home/FinalCtaHomeBlock'
import { HeroSolutionsBlockComponent } from './blocks/solutions/HeroSolutionsBlock'
import { PositioningIntroSolutionsBlockComponent } from './blocks/solutions/PositioningIntroSolutionsBlock'
import { GridSolutionsBlockComponent } from './blocks/solutions/GridSolutionsBlock'
import { DetailsSolutionsBlockComponent } from './blocks/solutions/DetailsSolutionsBlock'
import { ClientArtifactsSolutionsBlockComponent } from './blocks/solutions/ClientArtifactsSolutions'
import { AudienceSolutionsBlockComponent } from './blocks/solutions/AudienceSolutions'

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
          case 'conceptsHome':
            return <ConceptsHomeBlockComponent key={key} block={block} locale={locale} />
          case 'methodHome':
            return <MethodHomeBlockComponent key={key} block={block} locale={locale} />
          case 'proposalHome':
            return <ProposalHomeBlockComponent key={key} block={block} locale={locale} />
          case 'samplePreviewHome':
            return <SamplePreviewHomeBlockComponent key={key} block={block} locale={locale} />
          case 'trustHome':
            return <TrustHomeBlockComponent key={key} block={block} locale={locale} />
          case 'faqHome':
            return <FaqHomeBlockComponent key={key} block={block} locale={locale} />
          case 'pricingHome':
            return <PricingHomeBlockComponent key={key} block={block} locale={locale} />
          case 'finalCtaHome':
            return <FinalCtaHomeBlockComponent key={key} block={block} locale={locale} />
            // solutions
          case 'heroSolutions':
            return <HeroSolutionsBlockComponent key={key} block={block} locale={locale} />
          case 'positioningIntroSolutions':
            return <PositioningIntroSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'gridSolutions':
            return <GridSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'detailsSolution':
          return <DetailsSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'clientArtifactsSolutions':
          return <ClientArtifactsSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'audienceSolutions':
          return <AudienceSolutionsBlockComponent key={key} block={block} locale={locale} />
          default:
            return null
        }
      })}
    </>
  )
}
