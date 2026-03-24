import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const ProposalFlowProposalBlock: Block = {
  slug: 'proposalFlowProposal',
  labels: {
    singular: 'Proposal Flow Proposal',
    plural: 'Proposal Flow Proposal blocks',
  },
  fields: [
    {
      name: 'briefCardTitle',
      type: 'text',
      required: true,
      defaultValue: 'Заполнить brief проекта',
    },
    {
      name: 'briefCardDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Подходит, если вы хотите получить рекомендацию по формату работы, ориентир по срокам и стартовую стоимость.',
    },
    {
      name: 'briefButtonLabel',
      type: 'text',
      required: true,
      defaultValue: 'Перейти к brief',
    },
    {
      name: 'uploadCardTitle',
      type: 'text',
      required: true,
      defaultValue: 'Загрузить материалы проекта',
    },
    {
      name: 'uploadCardDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Подходит, если у вас уже есть notes, PRD, screenshots, ссылки или draft-описание проекта.',
    },
    {
      name: 'uploadButtonLabel',
      type: 'text',
      required: true,
      defaultValue: 'Загрузить материалы',
    },
    {
      name: 'processEyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Что происходит дальше',
    },
    {
      name: 'processTitle',
      type: 'text',
      required: true,
      defaultValue: 'Как мы разбираем ваш проект',
    },
    {
      name: 'processDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'После отправки brief или материалов мы структурируем задачу, определяем ограничения, собираем ключевые сценарии и готовим понятный следующий шаг по проекту.',
    },
    {
      name: 'processSteps',
      type: 'array',
      required: true,
      minRows: 1,
      defaultValue: [
        {
          icon: 'target',
          title: 'Цели проекта',
          description: 'Фиксируем, зачем нужен проект и какой результат для вас важен.',
        },
        {
          icon: 'users',
          title: 'Роли и сценарии',
          description: 'Определяем, кто будет работать с продуктом и какие сценарии критичны.',
        },
        {
          icon: 'layers',
          title: 'Ограничения и scope',
          description: 'Учитываем сроки, сложность, доступные материалы и объём проработки.',
        },
        {
          icon: 'arrowUpRight',
          title: 'Следующий шаг',
          description: 'Предлагаем подходящий формат работы, ориентир по срокам и стартовую стоимость.',
        },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          dbName: 'pfp_ps_icon',
          required: true,
          options: [
            { label: 'Target', value: 'target' },
            { label: 'Users', value: 'users' },
            { label: 'Layers', value: 'layers' },
            { label: 'Arrow Up Right', value: 'arrowUpRight' },
            { label: 'Arrow Up Left', value: 'arrowUpLeft' },
          ],
          defaultValue: 'target',
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
      ],
    },
    {
      name: 'uploadViewTitle',
      type: 'text',
      required: true,
      defaultValue: 'Есть материалы по проекту?',
    },
    {
      name: 'uploadViewDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Загрузите brief, заметки, screenshots, PRD, ссылки или старые экраны — этого достаточно, чтобы мы подготовили рекомендацию по следующему шагу.',
    },
    {
      name: 'uploadBackLabel',
      type: 'text',
      required: true,
      defaultValue: 'Назад к выбору',
    },
    {
      name: 'uploadFilesLabel',
      type: 'text',
      required: true,
      defaultValue: 'Загрузить файлы',
    },
    {
      name: 'uploadFilesHint',
      type: 'textarea',
      required: true,
      defaultValue: 'Перетащите файлы сюда или нажмите для выбора',
    },
    {
      name: 'uploadLinksLabel',
      type: 'text',
      required: true,
      defaultValue: 'Добавить ссылки',
    },
    {
      name: 'uploadLinksPlaceholder',
      type: 'text',
      required: true,
      defaultValue: 'Figma, Google Docs, Notion, Miro...',
    },
    {
      name: 'uploadDescriptionLabel',
      type: 'text',
      required: true,
      defaultValue: 'Краткое описание проекта',
    },
    {
      name: 'uploadDescriptionPlaceholder',
      type: 'textarea',
      required: true,
      defaultValue:
        'Расскажите, что вы планируете делать, какая главная задача, и что ожидаете получить...',
    },
    {
      name: 'uploadContactLabel',
      type: 'text',
      required: true,
      defaultValue: 'Контакт для связи',
    },
    {
      name: 'uploadNamePlaceholder',
      type: 'text',
      required: true,
      defaultValue: 'Имя',
    },
    {
      name: 'uploadEmailPlaceholder',
      type: 'text',
      required: true,
      defaultValue: 'Email',
    },
    {
      name: 'uploadCancelLabel',
      type: 'text',
      required: true,
      defaultValue: 'Отмена',
    },
    {
      name: 'uploadSubmitLabel',
      type: 'text',
      required: true,
      defaultValue: 'Отправить материалы',
    },
    {
      name: 'successTitle',
      type: 'text',
      required: true,
      defaultValue: 'Ваш brief получен',
    },
    {
      name: 'successDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'Мы готовим структурированное предложение по вашему проекту.',
    },
    {
      name: 'successStepsTitle',
      type: 'text',
      required: true,
      defaultValue: 'Что будет дальше',
    },
    {
      name: 'successSteps',
      type: 'array',
      required: true,
      minRows: 1,
      defaultValue: [
        {
          number: '01',
          title: 'Review brief',
          description: 'Изучаем материалы и требования',
        },
        {
          number: '02',
          title: 'Recommend format',
          description: 'Подбираем подходящий формат работы',
        },
        {
          number: '03',
          title: 'Share timeline & price',
          description: 'Отправляем сроки и стартовую стоимость',
        },
        {
          number: '04',
          title: 'Request details',
          description: 'Уточняем детали только при необходимости',
        },
      ],
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
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'successHomeLabel',
          type: 'text',
          required: true,
          defaultValue: 'Вернуться на главную',
        },
        {
          name: 'successHomePageKey',
          type: 'select',
          dbName: 'pfp_home_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'home',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'successPricingLabel',
          type: 'text',
          required: true,
          defaultValue: 'Посмотреть форматы работы',
        },
        {
          name: 'successPricingPageKey',
          type: 'select',
          dbName: 'pfp_price_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
      ],
    },
    {
      name: 'successUploadMoreLabel',
      type: 'text',
      required: true,
      defaultValue: 'Загрузить ещё материалы',
    },
    {
      name: 'supportNotePrefix',
      type: 'text',
      required: true,
      defaultValue: 'Есть вопросы? Напишите на',
    },
    {
      name: 'supportEmail',
      type: 'text',
      required: true,
      defaultValue: 'hello@atelier-meridian.com',
    },
  ],
}