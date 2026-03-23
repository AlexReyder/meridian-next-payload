import type { CollectionConfig } from 'payload'

import { HeroBlock } from '../blocks/HeroBlock'
import { PAGE_KEY_OPTIONS } from '../lib/routes'

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
      blocks: [HeroBlock],
    },
  ],
}
