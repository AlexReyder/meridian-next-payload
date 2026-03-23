import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const PackageCardsPricingBlock: Block = {
  slug: 'packageCardsPricing',
  labels: {
    singular: 'Package Cards Pricing',
    plural: 'Package Cards Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Пакеты',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Основные форматы работы',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'packages',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'badge',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          name: 'timeline',
          type: 'text',
          required: true,
        },
        {
          name: 'idealFor',
          type: 'textarea',
          required: true,
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'items',
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
        {
          type: 'row',
          fields: [
            {
              name: 'buttonLabel',
              type: 'text',
              required: true,
              defaultValue: 'Получить предложение',
            },
            {
              name: 'buttonPageKey',
              type: 'select',
              required: true,
              options: PAGE_KEY_OPTIONS,
              defaultValue: 'get-proposal',
            },
          ],
        },
      ],
    },
  ],
}