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
      ],
    },
  ],
}
