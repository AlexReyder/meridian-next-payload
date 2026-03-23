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
import { WhySolutionsBlockComponent } from './blocks/solutions/WhySolutionsBlock'
import { ConnectedCtaSolutionsBlockComponent } from './blocks/solutions/ConnectedCtaSolutionsBlock'
import { FaqSolutionsBlockComponent } from './blocks/solutions/FaqSolutionsBlock'
import { HeroStartupsBlockComponent } from './blocks/for-startups/HeroStartupsBlock'
import { ValueStartupsBlockComponent } from './blocks/for-startups/ValueStartupsBlock'
import { DeliverablesStartupsBlockComponent } from './blocks/for-startups/DeliverablesStartupsBlock'
import { SituationsStartupsBlockComponent } from './blocks/for-startups/SituationsStartupsBlock'
import { ArtifactsStartupsBlockComponent } from './blocks/for-startups/ArtifactsStartupsBlock'
import { ProcessStartupsBlockComponent } from './blocks/for-startups/ProcessStartupsBlock'
import { EfficiencyStartupsBlockComponent } from './blocks/for-startups/EfficiencyStartupsBlock'
import { ConceptsStartupsBlockComponent } from './blocks/for-startups/ConceptsStartupsBlock'
import { CTAStartupsBlockComponent } from './blocks/for-startups/CTAStartupsBlock'
import { FAQStartupsBlockComponent } from './blocks/for-startups/FAQStartupsBlock'
import { HeroAgenciesBlockComponent } from './blocks/for-agencies/HeroAgenciesBlock'
import { PartnersClarificationAgenciesBlockComponent } from './blocks/for-agencies/PartnersClarificationAgenciesBlock'
import { AudienceAgenciesBlockComponent } from './blocks/for-agencies/AudienceAgenciesBlock'
import { ValueAgenciesBlockComponent } from './blocks/for-agencies/ValueAgenciesBlock'

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
        case 'whySolutions':
          return <WhySolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'connectedCtaSolutions':
          return <ConnectedCtaSolutionsBlockComponent key={key} block={block} locale={locale} />
        case 'faqSolutions':
          return <FaqSolutionsBlockComponent key={key} block={block} locale={locale} />
          //for-startups
        case 'heroStartups':
          return <HeroStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'valueStartups':
          return <ValueStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'deliverablesStartups':
          return <DeliverablesStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'situationsStartups':
          return <SituationsStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'artifactsStartups':
          return <ArtifactsStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'processStartups':
          return <ProcessStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'efficiencyStartups':
          return <EfficiencyStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'conceptsStartups':
          return <ConceptsStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'ctaStartups':
          return <CTAStartupsBlockComponent key={key} block={block} locale={locale} />
        case 'faqStartups':
          return <FAQStartupsBlockComponent key={key} block={block} locale={locale} />
          //for-agencies
        case 'heroAgencies':
          return <HeroAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'partnersClarificationAgencies':
          return <PartnersClarificationAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'audienceAgencies':
          return <AudienceAgenciesBlockComponent key={key} block={block} locale={locale} />
        case 'valueAgencies':
          return <ValueAgenciesBlockComponent key={key} block={block} locale={locale} />
          default:
            return null
        }
      })}
    </>
  )
}
