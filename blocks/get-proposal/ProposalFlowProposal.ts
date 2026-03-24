import type { Block, Field } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

const textOptionFields = [
  {
    name: 'value',
    type: 'text',
    required: true,
  },
  {
    name: 'label',
    type: 'text',
    required: true,
  },
] satisfies Field[]

const textOptionWithDescriptionFields = [
  {
    name: 'value',
    type: 'text',
    required: true,
  },
  {
    name: 'label',
    type: 'text',
    required: true,
  },
  {
    name: 'description',
    type: 'text',
  },
] satisfies Field[]

export const ProposalFlowProposalBlock: Block = {
  slug: 'proposalFlowProposal',
  labels: {
    singular: 'Proposal Flow Proposal',
    plural: 'Proposal Flow Proposal blocks',
  },
  fields: [
    {
      name: 'intro',
      type: 'group',
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
            'Подходит, если у вас уже есть notes, PRD, старые screens, документы, ссылки или draft-описание проекта.',
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
          minRows: 4,
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
              dbName: 'pfp_pr_icon',
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
      ],
    },

    {
      name: 'wizard',
      type: 'group',
      fields: [
        {
          name: 'stepLabels',
          type: 'array',
          required: true,
          minRows: 7,
          defaultValue: [
            { value: 'Тип проекта' },
            { value: 'Цель' },
            { value: 'Команда' },
            { value: 'Сложность' },
            { value: 'Материалы' },
            { value: 'Сроки' },
            { value: 'Контакты' },
          ],
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
          ],
        },

        {
          name: 'backToOptionsLabel',
          type: 'text',
          required: true,
          defaultValue: 'Назад к выбору',
        },
        {
          name: 'previousStepLabel',
          type: 'text',
          required: true,
          defaultValue: 'Предыдущий шаг',
        },
        {
          name: 'backLabel',
          type: 'text',
          required: true,
          defaultValue: 'Назад',
        },
        {
          name: 'cancelLabel',
          type: 'text',
          required: true,
          defaultValue: 'Отмена',
        },
        {
          name: 'stepCounterPrefix',
          type: 'text',
          required: true,
          defaultValue: 'Шаг',
        },
        {
          name: 'stepCounterConnector',
          type: 'text',
          required: true,
          defaultValue: 'из',
        },

        {
          name: 'projectTypeTitle',
          type: 'text',
          required: true,
          defaultValue: 'Что вы планируете делать?',
        },
        {
          name: 'projectTypeDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Выберите тип проекта, который лучше всего описывает вашу задачу',
        },
        {
          name: 'projectTypes',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            {
              value: 'website',
              label: 'Сайт / корпоративный сайт',
              description: 'Лендинг, corporate website, product page',
            },
            {
              value: 'website-redesign',
              label: 'Редизайн сайта',
              description: 'UX/UI-улучшение существующего сайта',
            },
            {
              value: 'b2b',
              label: 'B2B-платформа',
              description: 'SaaS, marketplace, бизнес-система',
            },
            {
              value: 'internal',
              label: 'Внутренняя система',
              description: 'CRM, ERP, операционные инструменты',
            },
            {
              value: 'portal',
              label: 'Клиентский портал',
              description: 'Личный кабинет, self-service',
            },
            {
              value: 'dashboard',
              label: 'Dashboard / analytics',
              description: 'Аналитика, мониторинг, отчётность',
            },
            {
              value: 'mobile',
              label: 'Мобильное приложение',
              description: 'iOS, Android, кроссплатформа',
            },
            {
              value: 'redesign',
              label: 'Редизайн digital-продукта',
              description: 'UX/UI-улучшение системы или приложения',
            },
            {
              value: 'presale',
              label: 'Presale / investor prototype',
              description: 'Демо для fundraising или tender',
            },
            {
              value: 'other',
              label: 'Другое',
              description: 'Расскажите подробнее на следующих шагах',
            },
          ],
          fields: textOptionWithDescriptionFields,
        },

        {
          name: 'goalTitle',
          type: 'text',
          required: true,
          defaultValue: 'Какая у проекта главная задача сейчас?',
        },
        {
          name: 'goalDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Это поможет нам предложить подходящий формат работы',
        },
        {
          name: 'projectGoals',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            { value: 'fundraising', label: 'Fundraising / investor presentation' },
            { value: 'pitch', label: 'Pitch / tender / presale' },
            { value: 'dev-handover', label: 'Подготовка к передаче в разработку' },
            { value: 'internal-launch', label: 'Внутренний запуск / цифровизация' },
            { value: 'redesign', label: 'Redesign / UX-улучшение' },
            { value: 'whitelabel', label: 'White-label для клиента' },
            { value: 'new-market', label: 'Выход в новый рынок' },
            { value: 'other', label: 'Другое' },
          ],
          fields: textOptionFields,
        },

        {
          name: 'teamTitle',
          type: 'text',
          required: true,
          defaultValue: 'Как лучше описать вашу команду?',
        },
        {
          name: 'teamDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Это поможет адаптировать формат работы под ваш контекст',
        },
        {
          name: 'teamTypes',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            { value: 'founder', label: 'Founder / startup team' },
            { value: 'product', label: 'In-house product team' },
            { value: 'b2b', label: 'B2B-компания / operations team' },
            { value: 'agency', label: 'Агентство / integrator' },
            { value: 'consultant', label: 'Консультант / партнёр' },
            { value: 'other', label: 'Другое' },
          ],
          fields: textOptionFields,
        },
        {
          name: 'companyNameLabel',
          type: 'text',
          required: true,
          defaultValue: 'Название компании',
        },
        {
          name: 'companyNamePlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'Acme Inc.',
        },
        {
          name: 'websiteLabel',
          type: 'text',
          required: true,
          defaultValue: 'Website',
        },
        {
          name: 'websitePlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'https://company.com',
        },
        {
          name: 'teamSizeLabel',
          type: 'text',
          required: true,
          defaultValue: 'Размер команды',
        },
        {
          name: 'teamSizePlaceholder',
          type: 'text',
          required: true,
          defaultValue: '5–20 человек',
        },

        {
          name: 'complexityTitle',
          type: 'text',
          required: true,
          defaultValue: 'Насколько сложный продукт или система?',
        },
        {
          name: 'complexityDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Эти параметры помогут оценить объём работы',
        },
        {
          name: 'rolesCountLabel',
          type: 'text',
          required: true,
          defaultValue: 'Количество ролей',
        },
        {
          name: 'rolesCountPlaceholder',
          type: 'text',
          required: true,
          defaultValue: '2–3 роли',
        },
        {
          name: 'screenCountLabel',
          type: 'text',
          required: true,
          defaultValue: 'Примерное число экранов / модулей',
        },
        {
          name: 'screenCountPlaceholder',
          type: 'text',
          required: true,
          defaultValue: '10–20 экранов',
        },
        {
          name: 'complexityFlags',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            { value: 'Role-based permissions' },
            { value: 'Dashboard views' },
            { value: 'Mobile views' },
            { value: 'Prototype' },
            { value: 'Базовая система компонентов' },
            { value: 'Материалы для разработки' },
            { value: 'Multilingual support' },
            { value: 'Arabic / RTL' },
            { value: 'Есть брендинг' },
          ],
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
          ],
        },

        {
          name: 'materialsTitle',
          type: 'text',
          required: true,
          defaultValue: 'Какие материалы уже есть?',
        },
        {
          name: 'materialsDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Это поможет понять, с чего начать работу',
        },
        {
          name: 'materialsOptions',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            { value: 'notes', label: 'Rough notes' },
            { value: 'brief', label: 'Product brief' },
            { value: 'prd', label: 'PRD / требования' },
            { value: 'screens', label: 'Текущие экраны' },
            { value: 'legacy', label: 'Старый продукт / legacy' },
            { value: 'brand', label: 'Brand assets' },
            { value: 'wireframes', label: 'Wireframes' },
            { value: 'nothing', label: 'Пока ничего' },
          ],
          fields: textOptionFields,
        },
        {
          name: 'wizardUploadLabel',
          type: 'text',
          required: true,
          defaultValue: 'Дополнительные файлы',
        },
        {
          name: 'wizardUploadHint',
          type: 'textarea',
          required: true,
          defaultValue: 'PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл',
        },

        {
          name: 'timelineTitle',
          type: 'text',
          required: true,
          defaultValue: 'Какие ожидания по срокам и бюджету?',
        },
        {
          name: 'timelineDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Это поможет подобрать оптимальный формат работы',
        },
        {
          name: 'timelineLabel',
          type: 'text',
          required: true,
          defaultValue: 'Ожидаемые сроки',
        },
        {
          name: 'timelineOptions',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            { value: 'asap', label: 'ASAP' },
            { value: '2weeks', label: 'До 2 недель' },
            { value: '1month', label: 'До 1 месяца' },
            { value: '6weeks', label: 'До 6 недель' },
            { value: 'flexible', label: 'Гибко' },
          ],
          fields: textOptionFields,
        },
        {
          name: 'budgetLabel',
          type: 'text',
          required: true,
          defaultValue: 'Ориентир по бюджету',
        },
        {
          name: 'budgetOptions',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            { value: '3-5k', label: '$3k–$5k' },
            { value: '5-7k', label: '$5k–$7k' },
            { value: '7-10k', label: '$7k–$10k' },
            { value: '10-15k', label: '$10k–$15k' },
            { value: '15k+', label: '$15k+' },
            { value: 'recommend', label: 'Нужна рекомендация' },
          ],
          fields: textOptionFields,
        },
        {
          name: 'notesLabel',
          type: 'text',
          required: true,
          defaultValue: 'Краткий комментарий',
        },
        {
          name: 'notesPlaceholder',
          type: 'textarea',
          required: true,
          defaultValue: 'Если есть дополнительные детали, добавьте их здесь...',
        },

        {
          name: 'contactTitle',
          type: 'text',
          required: true,
          defaultValue: 'Куда отправить предложение?',
        },
        {
          name: 'contactDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Заполните контактные данные для получения рекомендации',
        },
        {
          name: 'nameLabel',
          type: 'text',
          required: true,
          defaultValue: 'Имя *',
        },
        {
          name: 'namePlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'Александр',
        },
        {
          name: 'emailLabel',
          type: 'text',
          required: true,
          defaultValue: 'Рабочий email *',
        },
        {
          name: 'emailPlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'alex@company.com',
        },
        {
          name: 'companyLabel',
          type: 'text',
          required: true,
          defaultValue: 'Компания',
        },
        {
          name: 'companyPlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'Acme Inc.',
        },
        {
          name: 'roleLabel',
          type: 'text',
          required: true,
          defaultValue: 'Роль',
        },
        {
          name: 'rolePlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'Product Manager',
        },
        {
          name: 'regionLabel',
          type: 'text',
          required: true,
          defaultValue: 'Страна / регион',
        },
        {
          name: 'regionPlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'UAE',
        },
        {
          name: 'phoneLabel',
          type: 'text',
          required: true,
          defaultValue: 'Telegram / WhatsApp / телефон (необязательно)',
        },
        {
          name: 'phonePlaceholder',
          type: 'text',
          required: true,
          defaultValue: '+971 50 123 4567',
        },
        {
          name: 'commentLabel',
          type: 'text',
          required: true,
          defaultValue: 'Дополнительный комментарий',
        },
        {
          name: 'commentPlaceholder',
          type: 'textarea',
          required: true,
          defaultValue: 'Расскажите о проекте подробнее...',
        },
        {
          name: 'noCallLabel',
          type: 'text',
          required: true,
          defaultValue: 'Хочу получить no-call-first предложение',
        },
        {
          name: 'expertReviewLabel',
          type: 'text',
          required: true,
          defaultValue: 'Готов к expert review, если это потребуется',
        },
        {
          name: 'ndaLabel',
          type: 'text',
          required: true,
          defaultValue: 'Может понадобиться NDA до отправки чувствительных материалов',
        },

        {
          name: 'nextLabel',
          type: 'text',
          required: true,
          defaultValue: 'Далее',
        },
        {
          name: 'submitLabel',
          type: 'text',
          required: true,
          defaultValue: 'Отправить brief проекта',
        },

        {
          name: 'summaryTitle',
          type: 'text',
          required: true,
          defaultValue: 'Ваш brief',
        },
        {
          name: 'summaryProjectTypeLabel',
          type: 'text',
          required: true,
          defaultValue: 'Тип проекта',
        },
        {
          name: 'summaryGoalLabel',
          type: 'text',
          required: true,
          defaultValue: 'Цель',
        },
        {
          name: 'summaryTeamLabel',
          type: 'text',
          required: true,
          defaultValue: 'Команда',
        },
        {
          name: 'summaryTimelineLabel',
          type: 'text',
          required: true,
          defaultValue: 'Сроки',
        },
        {
          name: 'summaryResultsTitle',
          type: 'text',
          required: true,
          defaultValue: 'После отправки вы получите',
        },
        {
          name: 'summaryResults',
          type: 'array',
          required: true,
          minRows: 1,
          defaultValue: [
            { value: 'Рекомендацию по формату работы' },
            { value: 'Ориентир по срокам' },
            { value: 'Стартовую стоимость' },
            { value: 'Следующий шаг по проекту' },
          ],
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'summaryFooter',
          type: 'textarea',
          required: true,
          defaultValue:
            'Финальный объём зависит от сложности, числа ролей, модулей, языков и глубины проработки.',
        },
      ],
    },

    {
      name: 'upload',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Есть материалы по проекту?',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue:
            'Загрузите brief, заметки, screenshots, PRD, ссылки или старые экраны — этого достаточно, чтобы мы подготовили рекомендацию по следующему шагу.',
        },
        {
          name: 'backLabel',
          type: 'text',
          required: true,
          defaultValue: 'Назад к выбору',
        },
        {
          name: 'filesLabel',
          type: 'text',
          required: true,
          defaultValue: 'Загрузить файлы',
        },
        {
          name: 'filesTitle',
          type: 'text',
          required: true,
          defaultValue: 'Перетащите файлы сюда или нажмите для выбора',
        },
        {
          name: 'filesHint',
          type: 'text',
          required: true,
          defaultValue: 'PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл',
        },
        {
          name: 'linksLabel',
          type: 'text',
          required: true,
          defaultValue: 'Добавить ссылки',
        },
        {
          name: 'linksPlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'Figma, Google Docs, Notion, Miro...',
        },
        {
          name: 'descriptionLabel',
          type: 'text',
          required: true,
          defaultValue: 'Краткое описание проекта',
        },
        {
          name: 'descriptionPlaceholder',
          type: 'textarea',
          required: true,
          defaultValue:
            'Расскажите, что вы планируете делать, какая главная задача, и что ожидаете получить...',
        },
        {
          name: 'contactLabel',
          type: 'text',
          required: true,
          defaultValue: 'Контакт для связи',
        },
        {
          name: 'namePlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'Имя',
        },
        {
          name: 'emailPlaceholder',
          type: 'text',
          required: true,
          defaultValue: 'Email',
        },
        {
          name: 'cancelLabel',
          type: 'text',
          required: true,
          defaultValue: 'Отмена',
        },
        {
          name: 'submitLabel',
          type: 'text',
          required: true,
          defaultValue: 'Отправить материалы',
        },
      ],
    },

    {
      name: 'success',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Ваш brief получен',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Мы готовим структурированное предложение по вашему проекту.',
        },
        {
          name: 'stepsTitle',
          type: 'text',
          required: true,
          defaultValue: 'Что будет дальше',
        },
        {
          name: 'steps',
          type: 'array',
          required: true,
          minRows: 4,
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
          name: 'homeLabel',
          type: 'text',
          required: true,
          defaultValue: 'Вернуться на главную',
        },
        {
          name: 'homePageKey',
          type: 'select',
          dbName: 'pfp_home_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'home',
        },
        {
          name: 'pricingLabel',
          type: 'text',
          required: true,
          defaultValue: 'Посмотреть форматы работы',
        },
        {
          name: 'pricingPageKey',
          type: 'select',
          dbName: 'pfp_pricing_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
        {
          name: 'uploadMoreLabel',
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
    },
  ],
}