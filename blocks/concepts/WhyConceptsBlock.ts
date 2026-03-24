import type { Block } from 'payload'

export const WhyConceptsBlock: Block = {
  slug: 'whyConcepts',
  labels: {
    singular: 'Why Concepts',
    plural: 'Why Concepts blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Почему это полезно',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Зачем смотреть концепты до старта проекта',
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
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}