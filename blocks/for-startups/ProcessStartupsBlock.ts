import type { Block } from 'payload'

export const ProcessStartupsBlock: Block = {
  slug: 'processStartups',
  labels: {
    singular: 'Process Startups',
    plural: 'Process Startups blocks',
  },
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      defaultValue: 'process',
    },
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Как мы работаем',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Процесс работы со стартапами',
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
      minRows: 5,
      maxRows: 5,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
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
          name: 'details',
          type: 'array',
          required: true,
          minRows: 2,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}