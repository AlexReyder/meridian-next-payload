import type { GlobalConfig } from 'payload'

import { PAGE_KEY_OPTIONS } from '../lib/routes'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandTitle',
      type: 'text',
      localized: true,
      defaultValue: 'Atelier Meridian',
    },
    {
      name: 'brandSubtitle',
      type: 'text',
      localized: true,
      defaultValue: 'Product Architecture & Interface Studio',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'pageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
        },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      localized: true,
      defaultValue: 'Получить предложение',
    },
    {
      name: 'ctaPageKey',
      type: 'select',
      options: PAGE_KEY_OPTIONS,
      defaultValue: 'get-proposal',
    },
  ],
}
