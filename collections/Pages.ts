import type { CollectionConfig } from 'payload'

import { HeroBlock } from '../blocks/HeroBlock.ts'
import { PAGE_KEY_OPTIONS } from '../lib/routes'
import { ValueHomeBlock } from '@/blocks/ValueHomeBlock'
import { VideoWalkthroughHomeBlock } from '@/blocks/VideoWalkThroughHome'
import { DeliverablesHomeBlock } from '@/blocks/DeliverablesHomeBlock'
import { WhyHomeBlock } from '@/blocks/WhyHomeBlock'
import { AudienceHomeBlock } from '@/blocks/AudienceHomeBlock'
import { ConceptsHomeBlock } from '@/blocks/ConceptsHomeBlock'
import { MethodHomeBlock } from '@/blocks/MethodHomeBlock'
import { ProposalHomeBlock } from '@/blocks/ProposalHomeBlock'
import { SamplePreviewHomeBlock } from '@/blocks/SamplePreviewHomeBlock'
import { TrustHomeBlock } from '@/blocks/TrustHomeBlock'
import { FaqHomeBlock } from '@/blocks/FaqHomeBlock'

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
        ProposalHomeBlock,
        SamplePreviewHomeBlock,
        TrustHomeBlock,
        FaqHomeBlock
      ],
    },
  ],
}
