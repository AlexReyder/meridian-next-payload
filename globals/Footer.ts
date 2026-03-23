import type { GlobalConfig } from 'payload'

import { PAGE_KEY_OPTIONS } from '../lib/routes.ts'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandTitle',
      type: 'text',
      localized: true,
      defaultValue: 'Atelier Meridian',
    },
    {
      name: 'brandSubtitle',
      type: 'text',
      localized: true,
      defaultValue: 'Product Architecture & Interface Studio',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      defaultValue: 'Бутиковая студия продуктовой архитектуры. Структурируем сложные digital-продукты до начала разработки.',
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'hello@atelier-meridian.com',
    },
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'pageKey',
              type: 'select',
              required: true,
              options: PAGE_KEY_OPTIONS,
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      localized: true,
      defaultValue: '© 2026 Atelier Meridian. Все права защищены.',
    },
  ],
}
