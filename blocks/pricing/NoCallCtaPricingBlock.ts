import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const NoCallCtaPricingBlock: Block = {
  slug: 'noCallCtaPricing',
  labels: {
    singular: 'No Call CTA Pricing',
    plural: 'No Call CTA Pricing blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Не хотите начинать с созвона?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'descriptionSecondary',
      type: 'textarea',
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
          defaultValue: 'Написать вместо созвона',
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'contact',
        },
      ],
    },
    {
      name: 'footerNote',
      type: 'text',
      required: true,
    },
    {
      name: 'benefits',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}