import type { CollectionConfig } from 'payload'

import { HeroBlock } from '../blocks/home/HeroBlock'
import { PAGE_KEY_OPTIONS } from '../lib/routes'
import { ValueHomeBlock } from '@/blocks/home/ValueHomeBlock'
import { VideoWalkthroughHomeBlock } from '@/blocks/home/VideoWalkThroughHome'
import { DeliverablesHomeBlock } from '@/blocks/home/DeliverablesHomeBlock'
import { WhyHomeBlock } from '@/blocks/home/WhyHomeBlock'
import { AudienceHomeBlock } from '@/blocks/home/AudienceHomeBlock'
import { ConceptsHomeBlock } from '@/blocks/home/ConceptsHomeBlock'
import { MethodHomeBlock } from '@/blocks/home/MethodHomeBlock'
import { ProposalHomeBlock } from '@/blocks/home/ProposalHomeBlock'
import { SamplePreviewHomeBlock } from '@/blocks/home/SamplePreviewHomeBlock'
import { TrustHomeBlock } from '@/blocks/home/TrustHomeBlock'
import { FaqHomeBlock } from '@/blocks/home/FaqHomeBlock'
import { PricingHomeBlock } from '@/blocks/home/PricingHomeBlock'
import { FinalCtaHomeBlock } from '@/blocks/home/FinalCtaHomeBlock'
import { HeroSolutionsBlock } from '@/blocks/solutions/HeroSolutionsBlock'
import { PositioningIntroSolutionsBlock } from '@/blocks/solutions/PositioningIntroSolutionsBlock'
import { GridSolutionsBlock } from '@/blocks/solutions/GridSolutionsBlock'
import { DetailsSolutionsBlock } from '@/blocks/solutions/DetailsSolutionsBlock'
import { ClientArtifactsSolutionsBlock } from '@/blocks/solutions/ClientArtifactsSolutions'
import { AudienceSolutionsBlock } from '@/blocks/solutions/AudienceSolutions'
import { WhySolutionsBlock } from '@/blocks/solutions/WhySolutionsBlock'
import { ConnectedCtaSolutionsBlock } from '@/blocks/solutions/ConnectedCtaSolutionsBlock'
import { FaqSolutionsBlock } from '@/blocks/solutions/FaqSolutionsBlock'
import { HeroStartupsBlock } from '@/blocks/for-startups/HeroStartupsBlock'
import { ValueStartupsBlock } from '@/blocks/for-startups/ValueStartupsBlock'
import { DeliverablesStartupsBlock } from '@/blocks/for-startups/DeliverablesStartupsBlock'
import { SituationsStartupsBlock } from '@/blocks/for-startups/SituationsStartupsBlock'
import { ArtifactsStartupsBlock } from '@/blocks/for-startups/ArtifactsStartupsBlock'
import { ProcessStartupsBlock } from '@/blocks/for-startups/ProcessStartupsBlock'
import { EfficiencyStartupsBlock } from '@/blocks/for-startups/StartupsBlock'
import { ConceptsStartupsBlock } from '@/blocks/for-startups/ConceptsStartupsBlock'
import { CTAStartupsBlock } from '@/blocks/for-startups/CTAStartupsBlock'
import { FAQStartupsBlock } from '@/blocks/for-startups/FAQStartupsBlock'
import { HeroAgenciesBlock } from '@/blocks/for-agencies/HeroAgenciesBlock'
import { PartnersClarificationAgenciesBlock } from '@/blocks/for-agencies/PartnersClarificationAgenciesBlock'
import { AudienceAgenciesBlock } from '@/blocks/for-agencies/AudienceAgenciesBlock'
import { ValueAgenciesBlock } from '@/blocks/for-agencies/ValueAgenciesBlock'
import { ProjectsAgenciesBlock } from '@/blocks/for-agencies/ProjectsAgenciesBlock'
import { ProcessAgenciesBlock } from '@/blocks/for-agencies/ProcessAgenciesBlock'
import { ArtifactsAgenciesBlock } from '@/blocks/for-agencies/ArtifactsAgenciesBlock'
import { WhyAgenciesBlock } from '@/blocks/for-agencies/WhyAgenciesBlock'
import { ConceptsAgenciesBlock } from '@/blocks/for-agencies/ConceptsAgenciesBlock'
import { CTAAgenciesBlock } from '@/blocks/for-agencies/CTAAgenciesBlock'
import { FAQAgenciesBlock } from '@/blocks/for-agencies/FAQAgenciesBlock'
import { HeroPricingBlock } from '@/blocks/pricing/HeroPricingBlock'
import { PositioningBlockPricingBlock } from '@/blocks/pricing/PositioningBlockPricingBlock'
import { PackageCardsPricingBlock } from '@/blocks/pricing/PackageCardsPricingBlock'
import { ChoosingGuidePricingBlock } from '@/blocks/pricing/ChoosingGuidePricingBlock'
import { DeliverablesPreviewPricingBlock } from '@/blocks/pricing/DeliverablesPreviewPricingBlock'
import { PriceExplanationPricingBlock } from '@/blocks/pricing/PriceExplanationPricingBlock'
import { NoCallCtaPricingBlock } from '@/blocks/pricing/NoCallCtaPricingBlock'
import { FaqPricingBlock } from '@/blocks/pricing/FaqPricingBlock'
import { FinalCtaPricingBlock } from '@/blocks/pricing/FinalCtaPricingBlock'
import { HeroMethodBlock } from '@/blocks/method/HeroMethodBlock'
import { StepsMethodBlock } from '@/blocks/method/StepsMethodBlock'
import { DeliverablesMethodBlock } from '@/blocks/method/DeliverablesMethodBlock'
import { CTAMethodBlock } from '@/blocks/method/CTAMethodBlock'
import { HeroProposalBlock } from '@/blocks/get-proposal/HeroProposalBlock'
import { TrustProposalBlock } from '@/blocks/get-proposal/TrustProposalBlock'
import { FaqProposalBlock } from '@/blocks/get-proposal/FaqProposalBlock'
import { ProposalFlowProposalBlock } from '@/blocks/get-proposal/ProposalFlowProposal'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'pageKey',
    defaultColumns: ['pageKey', 'updatedAt'],
  },
  fields: [
    {
      name: 'pageKey',
      type: 'select',
      required: true,
      unique: true,
      options: PAGE_KEY_OPTIONS,
    },
    {
      name: 'internalName',
      type: 'text',
      required: true,
      defaultValue: 'Home',
      admin: {
        description: 'Human-readable page name for editors.',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      localized: true,
      required: true,
      blocks: [
        HeroBlock,
        ValueHomeBlock,
        VideoWalkthroughHomeBlock,
        DeliverablesHomeBlock,
        WhyHomeBlock,
        AudienceHomeBlock,
        ConceptsHomeBlock,
        MethodHomeBlock,
        PricingHomeBlock,
        ProposalHomeBlock,
        SamplePreviewHomeBlock,
        TrustHomeBlock,
        FaqHomeBlock,
        FinalCtaHomeBlock,
        //solutions
        HeroSolutionsBlock,
        PositioningIntroSolutionsBlock,
        GridSolutionsBlock,
        DetailsSolutionsBlock,
        ClientArtifactsSolutionsBlock,
        AudienceSolutionsBlock,
        WhySolutionsBlock,
        ConnectedCtaSolutionsBlock,
        FaqSolutionsBlock,
        //for-startups
        HeroStartupsBlock,
        ValueStartupsBlock,
        DeliverablesStartupsBlock,
        SituationsStartupsBlock,
        ArtifactsStartupsBlock,
        ProcessStartupsBlock,
        EfficiencyStartupsBlock,
        ConceptsStartupsBlock,
        CTAStartupsBlock,
        FAQStartupsBlock,
        //for-agencies
        HeroAgenciesBlock,
        PartnersClarificationAgenciesBlock,
        AudienceAgenciesBlock,
        ValueAgenciesBlock,
        ProjectsAgenciesBlock,
        ProcessAgenciesBlock,
        ArtifactsAgenciesBlock,
        WhyAgenciesBlock,
        ConceptsAgenciesBlock,
        CTAAgenciesBlock,
        FAQAgenciesBlock,
        //pricing
        HeroPricingBlock,
        PositioningBlockPricingBlock,
        PackageCardsPricingBlock,
        ChoosingGuidePricingBlock,
        DeliverablesPreviewPricingBlock,
        PriceExplanationPricingBlock,
        NoCallCtaPricingBlock,
        FaqPricingBlock,
        FinalCtaPricingBlock,
        //method
        HeroMethodBlock,
        StepsMethodBlock,
        DeliverablesMethodBlock,
        CTAMethodBlock,
        //proposal
        HeroProposalBlock,
        TrustProposalBlock,
        FaqProposalBlock,
        ProposalFlowProposalBlock,
      ],
    },
  ],
}
