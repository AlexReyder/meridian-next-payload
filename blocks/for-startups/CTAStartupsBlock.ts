import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const CTAStartupsBlock: Block = {
  slug: 'ctaStartups',
  labels: {
    singular: 'CTA Startups',
    plural: 'CTA Startups blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Нужен понятный MVP, prototype или investor-ready product?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryButtonLabel',
          type: 'text',
          required: true,
          defaultValue: 'Получить предложение',
        },
        {
          name: 'primaryPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryButtonLabel',
          type: 'text',
          required: true,
          defaultValue: 'Посмотреть цены',
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
      ],
    },
    {
      name: 'footerNote',
      type: 'text',
      required: true,
    },
  ],
}