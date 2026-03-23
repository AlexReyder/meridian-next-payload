import type { Block } from 'payload'

export const ChoosingGuidePricingBlock: Block = {
  slug: 'choosingGuidePricing',
  labels: {
    singular: 'Choosing Guide Pricing',
    plural: 'Choosing Guide Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Как выбрать',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Как понять, какой формат вам подходит',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'layoutVariant',
      type: 'select',
      required: true,
      defaultValue: 'detailed',
      options: [
        {
          label: 'Detailed',
          value: 'detailed',
        },
        {
          label: 'Compact',
          value: 'compact',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'bestForLabel',
          type: 'text',
          required: true,
          defaultValue: 'Подходит для',
        },
        {
          name: 'bestForValue',
          type: 'text',
          required: true,
        },
        {
          name: 'resultLabel',
          type: 'text',
          required: true,
          defaultValue: 'Результат',
        },
        {
          name: 'resultValue',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}