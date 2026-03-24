import type { Block } from 'payload'

export const NavConceptsBlock: Block = {
  slug: 'navConcepts',
  labels: {
    singular: 'Nav Concepts',
    plural: 'Nav Concepts blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Навигация',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Выберите концепт',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Навигация формируется автоматически из concept sections, которые добавлены на страницу.',
    },
  ],
}