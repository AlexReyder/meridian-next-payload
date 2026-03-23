import type { Block } from 'payload'

export const FAQStartupsBlock: Block = {
  slug: 'faqStartups',
  labels: {
    singular: 'FAQ Startups',
    plural: 'FAQ Startups blocks',
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
      defaultValue: 'Частые вопросы для стартапов',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
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