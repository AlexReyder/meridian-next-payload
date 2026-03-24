import type { Block } from 'payload'

export const ConceptSectionConceptBlock: Block = {
  slug: 'conceptSectionConcept',
  labels: {
    singular: 'Concept Section Concept',
    plural: 'Concept Section Concept blocks',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      required: true,
      localized: false,
      admin: {
        description:
          'Уникальный anchor для навигации. Например: medflow, aurora, pulse',
      },
    },
    {
      name: 'navLabel',
      type: 'text',
      required: true,
      defaultValue: 'Concept',
    },
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Concept',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
    },
    {
      name: 'year',
      type: 'text',
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'results',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'visualCaption',
      type: 'text',
    },
  ],
}