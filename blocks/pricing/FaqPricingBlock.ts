import type { Block } from 'payload'

export const FaqPricingBlock: Block = {
  slug: 'faqPricing',
  labels: {
    singular: 'FAQ Pricing',
    plural: 'FAQ Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'FAQ',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Частые вопросы по стоимости и формату работы',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}