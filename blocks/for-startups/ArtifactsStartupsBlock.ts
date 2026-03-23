import type { Block } from 'payload'

export const ArtifactsStartupsBlock: Block = {
  slug: 'artifactsStartups',
  labels: {
    singular: 'Artifacts Startups',
    plural: 'Artifacts Startups blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Что получает стартап',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Материалы, которые помогают двигаться дальше',
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
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
        {
          name: 'imageUrl',
          type: 'text',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'bottomNote',
      type: 'text',
      required: true,
    },
  ],
}