import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../lib/routes'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'UX/UI Design Studio',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Проектируем сайты, digital-системы и mobile apps до начала разработки',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.',
    },
    {
      name: 'tags',
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
      type: 'row',
      fields: [
        {
          name: 'primaryButtonLabel',
          type: 'text',
          defaultValue: 'Получить предложение',
        },
        {
          name: 'primaryPageKey',
          type: 'select',
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
          defaultValue: 'Посмотреть цены',
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'desktopImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'mobileImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
