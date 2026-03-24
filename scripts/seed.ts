import 'dotenv/config'

import { getPayload } from 'payload'
import config from '../payload.config'

type Locale = 'ru' | 'en' | 'ar'

type BlockData = Record<string, unknown> & {
  blockType: string
  id?: string
}

const HERO_PROPOSAL_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'heroProposal',
    eyebrow: 'Получить предложение',
    title: 'Закажите дизайн сайта, системы или мобильного приложения',
    description:
      'Расскажите, что вы планируете — сайт, корпоративный портал, B2B-систему, dashboard или mobile app. Мы предложим формат работы, сроки и стоимость без обязательного стартового звонка.',
    reassuranceItems: [
      { icon: 'clock', text: 'Brief на 7 минут' },
      { icon: 'fileText', text: 'Без обязательного звонка' },
      { icon: 'shield', text: 'NDA-friendly' },
      { icon: 'users', text: 'Сайты, системы, приложения' },
    ],
    brandParagraph:
      'Atelier Meridian помогает founders, B2B-командам, агентствам и integrators превращать идеи, сложные процессы и product requirements в понятную структуру, prototype и материалы для передачи в разработку.',
  },

  en: {
    blockType: 'heroProposal',
    eyebrow: 'Get Proposal',
    title: 'Get proposal, scope, and next step',
    description:
      'Share your task, brief, links, or existing materials, and Atelier Meridian will recommend the right format of work, a timeline range, and a starting pricing direction.',
    reassuranceItems: [
      { icon: 'clock', text: '7-minute brief' },
      { icon: 'fileText', text: 'No call required' },
      { icon: 'shield', text: 'NDA-friendly' },
      { icon: 'users', text: 'Websites, systems, apps' },
    ],
    brandParagraph:
      'Atelier Meridian helps founders, B2B teams, agencies, and integrators turn ideas, complex processes, and product requirements into clear structure, prototype, and build-ready materials.',
  },

  ar: {
    blockType: 'heroProposal',
    eyebrow: 'اطلب عرضاً',
    title: 'اطلب عرضاً ونطاق العمل والخطوة التالية',
    description:
      'شاركنا بالمهمة أو الـ brief أو الروابط أو المواد المتوفرة لديك، وسيقترح Atelier Meridian صيغة العمل الأنسب، والنطاق الزمني المتوقع، واتجاهاً أولياً للتكلفة.',
    supportLine: 'لا حاجة إلى مكالمة إلزامية في الخطوة الأولى.',
    reassuranceItems: [
      { icon: 'clock', text: 'brief من 7 دقائق' },
      { icon: 'fileText', text: 'لا مكالمة إلزامية' },
      { icon: 'shield', text: 'NDA متاح' },
      { icon: 'users', text: 'مواقع، أنظمة، تطبيقات' },
    ],
    brandParagraph:
      'يساعد Atelier Meridian المؤسسين وفرق B2B والوكالات وشركاء التنفيذ على تحويل الأفكار والعمليات المعقدة ومتطلبات المنتجات إلى هيكل واضح ونموذج أولي ومواد جاهزة للتطوير.',
  },
}

const TRUST_PROPOSAL_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'trustProposal',
    title: 'Структурный intake для сложных digital-проектов',
    description: 'Формат работы, который подходит для серьёзных продуктовых задач',
    items: [
      {
        icon: 'layers',
        title: 'Подходит для сложных workflow',
        description: 'Структурируем многоуровневые процессы, role-based системы и enterprise-задачи',
      },
      {
        icon: 'users',
        title: 'Удобно для startup, B2B и enterprise',
        description: 'Работаем с founders, product teams, агентствами и integrators',
      },
      {
        icon: 'building2',
        title: 'Поддерживает white-label модель',
        description: 'Готовим материалы под бренд клиента для агентств и партнёров',
      },
      {
        icon: 'arrowRightLeft',
        title: 'Упрощает передачу в разработку',
        description: 'Формируем build-ready материалы и документацию для разработки',
      },
    ],
  },

  en: {
    blockType: 'trustProposal',
    title: 'A structured start for complex digital work',
    description: 'A format designed for teams that want clarity without unnecessary sales friction',
    items: [
      {
        icon: 'layers',
        title: 'Built for complex workflows',
        description: 'We structure multi-layered processes, role-based systems, and enterprise-level tasks',
      },
      {
        icon: 'users',
        title: 'Works for startups, B2B, and enterprise',
        description: 'We collaborate with founders, product teams, agencies, and integrators',
      },
      {
        icon: 'building2',
        title: 'Supports white-label model',
        description: "We prepare materials under your client's brand for agencies and partners",
      },
      {
        icon: 'arrowRightLeft',
        title: 'Simplifies dev handoff',
        description: 'We create build-ready materials and documentation for development teams',
      },
    ],
  },

  ar: {
    blockType: 'trustProposal',
    title: 'بداية منظمة للمشاريع الرقمية المعقدة',
    description: 'صُممت هذه الصفحة للفرق التي تحتاج إلى وضوح من دون احتكاك بيعي غير ضروري',
    items: [
      {
        icon: 'layers',
        title: 'مصمم للعمليات المعقدة',
        description: 'نهيكل العمليات متعددة الطبقات والأنظمة القائمة على الأدوار والمهام على مستوى المؤسسات',
      },
      {
        icon: 'users',
        title: 'يعمل للشركات الناشئة وB2B والمؤسسات',
        description: 'نتعاون مع المؤسسين وفرق المنتجات والوكالات وشركاء التكامل',
      },
      {
        icon: 'building2',
        title: 'يدعم نموذج White-label',
        description: 'نعد المواد تحت علامتك التجارية للوكالات والشركاء',
      },
      {
        icon: 'arrowRightLeft',
        title: 'يسهل تسليم التطوير',
        description: 'ننشىء مواد ووثائق جاهزة للتطوير لفرق البرمجة',
      },
    ],
    supportPoints: [
      { label: 'لا حاجة إلى مكالمة إلزامية في البداية' },
      { label: 'مناسب للمواقع والأنظمة وتطبيقات الجوال' },
      { label: 'توصية واضحة بعد المراجعة' },
    ],
  },
}

const FAQ_PROPOSAL_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'faqProposal',
    title: 'Частые вопросы',
    items: [
      {
        question: 'Что я получу после отправки brief?',
        answer: 'Вы получите структурированное предложение с рекомендацией по формату работы, ориентиром по срокам и стартовой стоимостью. Если потребуется уточнение — мы свяжемся с вами напрямую.',
      },
      {
        question: 'Можно ли работать без звонков?',
        answer: 'Да. Мы поддерживаем no-call-first формат. Большинство вопросов решается через brief, email и asynchronous коммуникацию. Звонок нужен только для сложных случаев, и только по согласованию.',
      },
      {
        question: 'Поддерживаете ли вы white-label формат?',
        answer: 'Да. Мы работаем с агентствами, integrators и консультантами, которые готовят материалы для своих клиентов. Все артефакты могут быть под ваш бренд.',
      },
      {
        question: 'Можно ли прийти с rough notes или старой системой?',
        answer: 'Да. Вы можете загрузить любые материалы — заметки, screenshots, старые экраны, PRD или просто описание. Мы поможем структурировать проект с того места, где вы находитесь.',
      },
      {
        question: 'Работаете ли вы с multilingual-продуктами и Arabic / RTL?',
        answer: 'Да. У нас есть опыт работы с многоязычными продуктами, включая арабский язык и RTL-интерфейсы. Это учитывается в оценке сложности.',
      },
      {
        question: 'Подписываете ли вы NDA?',
        answer: 'Да. Если вам нужно защитить чувствительную информацию до отправки материалов — укажите это в форме, и мы подготовим NDA.',
      },
      {
        question: 'Получу ли я сразу фиксированную цену?',
        answer: 'Вы получите стартовую стоимость и ориентир. Финальная цена зависит от глубины проработки, числа ролей, модулей и дополнительных требований. Мы не начинаем работу без согласованного scope.',
      },
      {
        question: 'Что делать, если я не уверен, какой формат мне нужен?',
        answer: 'Заполните brief или загрузите материалы — мы предложим подходящий формат на основе ваших задач, сроков и бюджета.',
      },
    ],
  },

  en: {
    blockType: 'faqProposal',
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Do I need to book a call first?',
        answer: 'No. We support a no-call-first format. You can start by submitting a brief or uploading materials. Most questions are resolved through email and asynchronous communication. A call is only needed for complex cases, and only by mutual agreement.',
      },
      {
        question: 'Can I start with rough notes or links?',
        answer: 'Absolutely. You can upload any materials you have — notes, screenshots, existing screens, PRD, or just a description. We will help structure your project from wherever you are.',
      },
      {
        question: 'What if the scope is still unclear?',
        answer: 'That is perfectly fine. Fill in the brief or upload what you have — we will help clarify the scope and recommend an appropriate format of work based on your goals and constraints.',
      },
      {
        question: 'Is this suitable for redesign projects?',
        answer: 'Yes. We work with website redesigns, digital product redesigns, and UX/UI improvements. You can share existing screens, user feedback, or analytics, and we will structure the improvement plan.',
      },
      {
        question: 'Can agencies and integrators use this page too?',
        answer: 'Yes. We work with agencies, integrators, and consultants who prepare materials for their own clients. All deliverables can be white-labeled under your brand.',
      },
      {
        question: 'What happens after I submit?',
        answer: 'We review your brief or materials, identify the right format of work, estimate a timeline range and starting price direction, and propose the most practical next step.',
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes. If you need to protect sensitive information before sharing materials, indicate this in the form and we will prepare an NDA for your review.',
      },
      {
        question: 'How quickly do you respond?',
        answer: 'Most submissions receive a response within 1–2 business days. Complex requests may take slightly longer as we prepare a thoughtful recommendation.',
      },
    ],
  },

  ar: {
    blockType: 'faqProposal',
    title: 'الأسئلة الشائعة',
    items: [
      {
        question: 'هل أحتاج إلى حجز مكالمة أولاً؟',
        answer: 'لا. ندعم صيغة بدون مكالمة أولية. يمكنك البدء بإرسال brief أو رفع مواد. معظم الأسئلة تُحل عبر البريد الإلكتروني والتواصل غير المتزامن. المكالمة تُطلب فقط للحالات المعقدة وبالاتفاق المتبادل.',
      },
      {
        question: 'هل يمكنني البدء من خلال ملاحظات أولية أو روابط فقط؟',
        answer: 'بالتأكيد. يمكنك رفع أي مواد متوفرة لديك — ملاحظات، لقطات شاشة، شاشات قائمة، PRD، أو مجرد وصف. سنساعدك على هيكلة مشروعك من أي نقطة بداية.',
      },
      {
        question: 'ماذا لو كان نطاق المشروع غير واضح بعد؟',
        answer: 'هذا طبيعي تماماً. املأ الـ brief أو ارفع ما لديك — سنساعدك على توضيح النطاق والتوصية بصيغة عمل مناسبة بناءً على أهدافك وقيودك.',
      },
      {
        question: 'هل هذه الصفحة مناسبة لمشاريع إعادة التصميم؟',
        answer: 'نعم. نعمل على إعادة تصميم المواقع والمنتجات الرقمية وتحسينات UX/UI. يمكنك مشاركة الشاشات الحالية أو ملاحظات المستخدمين أو التحليلات، وسنقوم بهيكلة خطة التحسين.',
      },
      {
        question: 'هل يمكن للوكالات وشركاء التنفيذ استخدام هذه الصفحة أيضاً؟',
        answer: 'نعم. نعمل مع الوكالات وشركات التكامل والمستشارين الذين يحضّرون مواد لعملائهم. جميع المخرجات يمكن تقديمها تحت علامتك التجارية (White-label).',
      },
      {
        question: 'ماذا يحدث بعد أن أرسل الطلب؟',
        answer: 'نراجع الـ brief أو المواد، نحدد صيغة العمل المناسبة، نقدر نطاقاً زمنياً واتجاهاً أولياً للسعر، ونقترح الخطوة التالية الأكثر عملية.',
      },
      {
        question: 'هل توقّعون NDA؟',
        answer: 'نعم. إذا كنت بحاجة إلى حماية معلومات حساسة قبل مشاركة المواد، أشر إلى ذلك في النموذج وسنعد NDA لمراجعتك.',
      },
      {
        question: 'كم تستغرقون عادة للرد؟',
        answer: 'معظم الطلبات تتلقى رداً خلال 1-2 يوم عمل. الطلبات المعقدة قد تستغرق وقتاً أطول قليلاً لأننا نعد توصية مدروسة.',
      },
    ],
  },
}

const PROPOSAL_FLOW_PROPOSAL_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'proposalFlowProposal',
    intro: {
      briefCardTitle: 'Заполнить brief проекта',
      briefCardDescription:
        'Подходит, если вы хотите получить рекомендацию по формату работы, ориентир по срокам и стартовую стоимость.',
      briefButtonLabel: 'Перейти к brief',

      uploadCardTitle: 'Загрузить материалы проекта',
      uploadCardDescription:
        'Подходит, если у вас уже есть notes, PRD, старые screens, документы, ссылки или draft-описание проекта.',
      uploadButtonLabel: 'Загрузить материалы',

      processEyebrow: 'Что происходит дальше',
      processTitle: 'Как мы разбираем ваш проект',
      processDescription:
        'После отправки brief или материалов мы структурируем задачу, определяем ограничения, собираем ключевые сценарии и готовим понятный следующий шаг по проекту.',
      processSteps: [
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
          description:
            'Предлагаем подходящий формат работы, ориентир по срокам и стартовую стоимость.',
        },
      ],
    },

    wizard: {
      stepLabels: [
        { value: 'Тип проекта' },
        { value: 'Цель' },
        { value: 'Команда' },
        { value: 'Сложность' },
        { value: 'Материалы' },
        { value: 'Сроки' },
        { value: 'Контакты' },
      ],

      backToOptionsLabel: 'Назад к выбору',
      previousStepLabel: 'Предыдущий шаг',
      backLabel: 'Назад',
      cancelLabel: 'Отмена',
      stepCounterPrefix: 'Шаг',
      stepCounterConnector: 'из',

      projectTypeTitle: 'Что вы планируете делать?',
      projectTypeDescription:
        'Выберите тип проекта, который лучше всего описывает вашу задачу',
      projectTypes: [
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

      goalTitle: 'Какая у проекта главная задача сейчас?',
      goalDescription: 'Это поможет нам предложить подходящий формат работы',
      projectGoals: [
        { value: 'fundraising', label: 'Fundraising / investor presentation' },
        { value: 'pitch', label: 'Pitch / tender / presale' },
        { value: 'dev-handover', label: 'Подготовка к передаче в разработку' },
        { value: 'internal-launch', label: 'Внутренний запуск / цифровизация' },
        { value: 'redesign', label: 'Redesign / UX-улучшение' },
        { value: 'whitelabel', label: 'White-label для клиента' },
        { value: 'new-market', label: 'Выход в новый рынок' },
        { value: 'other', label: 'Другое' },
      ],

      teamTitle: 'Как лучше описать вашу команду?',
      teamDescription: 'Это поможет адаптировать формат работы под ваш контекст',
      teamTypes: [
        { value: 'founder', label: 'Founder / startup team' },
        { value: 'product', label: 'In-house product team' },
        { value: 'b2b', label: 'B2B-компания / operations team' },
        { value: 'agency', label: 'Агентство / integrator' },
        { value: 'consultant', label: 'Консультант / партнёр' },
        { value: 'other', label: 'Другое' },
      ],
      companyNameLabel: 'Название компании',
      companyNamePlaceholder: 'Acme Inc.',
      websiteLabel: 'Website',
      websitePlaceholder: 'https://company.com',
      teamSizeLabel: 'Размер команды',
      teamSizePlaceholder: '5–20 человек',

      complexityTitle: 'Насколько сложный продукт или система?',
      complexityDescription: 'Эти параметры помогут оценить объём работы',
      rolesCountLabel: 'Количество ролей',
      rolesCountPlaceholder: '2–3 роли',
      screenCountLabel: 'Примерное число экранов / модулей',
      screenCountPlaceholder: '10–20 экранов',
      complexityFlags: [
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

      materialsTitle: 'Какие материалы уже есть?',
      materialsDescription: 'Это поможет понять, с чего начать работу',
      materialsOptions: [
        { value: 'notes', label: 'Rough notes' },
        { value: 'brief', label: 'Product brief' },
        { value: 'prd', label: 'PRD / требования' },
        { value: 'screens', label: 'Текущие экраны' },
        { value: 'legacy', label: 'Старый продукт / legacy' },
        { value: 'brand', label: 'Brand assets' },
        { value: 'wireframes', label: 'Wireframes' },
        { value: 'nothing', label: 'Пока ничего' },
      ],
      wizardUploadLabel: 'Дополнительные файлы',
      wizardUploadHint: 'PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл',

      timelineTitle: 'Какие ожидания по срокам и бюджету?',
      timelineDescription: 'Это поможет подобрать оптимальный формат работы',
      timelineLabel: 'Ожидаемые сроки',
      timelineOptions: [
        { value: 'asap', label: 'ASAP' },
        { value: '2weeks', label: 'До 2 недель' },
        { value: '1month', label: 'До 1 месяца' },
        { value: '6weeks', label: 'До 6 недель' },
        { value: 'flexible', label: 'Гибко' },
      ],
      budgetLabel: 'Ориентир по бюджету',
      budgetOptions: [
        { value: '3-5k', label: '$3k–$5k' },
        { value: '5-7k', label: '$5k–$7k' },
        { value: '7-10k', label: '$7k–$10k' },
        { value: '10-15k', label: '$10k–$15k' },
        { value: '15k+', label: '$15k+' },
        { value: 'recommend', label: 'Нужна рекомендация' },
      ],
      notesLabel: 'Краткий комментарий',
      notesPlaceholder: 'Если есть дополнительные детали, добавьте их здесь...',

      contactTitle: 'Куда отправить предложение?',
      contactDescription: 'Заполните контактные данные для получения рекомендации',
      nameLabel: 'Имя *',
      namePlaceholder: 'Александр',
      emailLabel: 'Рабочий email *',
      emailPlaceholder: 'alex@company.com',
      companyLabel: 'Компания',
      companyPlaceholder: 'Acme Inc.',
      roleLabel: 'Роль',
      rolePlaceholder: 'Product Manager',
      regionLabel: 'Страна / регион',
      regionPlaceholder: 'UAE',
      phoneLabel: 'Telegram / WhatsApp / телефон (необязательно)',
      phonePlaceholder: '+971 50 123 4567',
      commentLabel: 'Дополнительный комментарий',
      commentPlaceholder: 'Расскажите о проекте подробнее...',
      noCallLabel: 'Хочу получить no-call-first предложение',
      expertReviewLabel: 'Готов к expert review, если это потребуется',
      ndaLabel: 'Может понадобиться NDA до отправки чувствительных материалов',

      nextLabel: 'Далее',
      submitLabel: 'Отправить brief проекта',

      summaryTitle: 'Ваш brief',
      summaryProjectTypeLabel: 'Тип проекта',
      summaryGoalLabel: 'Цель',
      summaryTeamLabel: 'Команда',
      summaryTimelineLabel: 'Сроки',
      summaryResultsTitle: 'После отправки вы получите',
      summaryResults: [
        { value: 'Рекомендацию по формату работы' },
        { value: 'Ориентир по срокам' },
        { value: 'Стартовую стоимость' },
        { value: 'Следующий шаг по проекту' },
      ],
      summaryFooter:
        'Финальный объём зависит от сложности, числа ролей, модулей, языков и глубины проработки.',
    },

    upload: {
      title: 'Есть материалы по проекту?',
      description:
        'Загрузите brief, заметки, screenshots, PRD, ссылки или старые экраны — этого достаточно, чтобы мы подготовили рекомендацию по следующему шагу.',
      backLabel: 'Назад к выбору',
      filesLabel: 'Загрузить файлы',
      filesTitle: 'Перетащите файлы сюда или нажмите для выбора',
      filesHint: 'PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл',
      linksLabel: 'Добавить ссылки',
      linksPlaceholder: 'Figma, Google Docs, Notion, Miro...',
      descriptionLabel: 'Краткое описание проекта',
      descriptionPlaceholder:
        'Расскажите, что вы планируете делать, какая главная задача, и что ожидаете получить...',
      contactLabel: 'Контакт для связи',
      namePlaceholder: 'Имя',
      emailPlaceholder: 'Email',
      cancelLabel: 'Отмена',
      submitLabel: 'Отправить материалы',
    },

    success: {
      title: 'Ваш brief получен',
      description: 'Мы готовим структурированное предложение по вашему проекту.',
      stepsTitle: 'Что будет дальше',
      steps: [
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
      homeLabel: 'Вернуться на главную',
      homePageKey: 'home',
      pricingLabel: 'Посмотреть форматы работы',
      pricingPageKey: 'pricing',
      uploadMoreLabel: 'Загрузить ещё материалы',
      supportNotePrefix: 'Есть вопросы? Напишите на',
      supportEmail: 'hello@atelier-meridian.com',
    },
  },

  en: {
    blockType: 'proposalFlowProposal',
    intro: {
      briefCardTitle: 'Fill in a structured brief',
      briefCardDescription:
        'Best if you want a clear recommendation on format, timeline, and starting price.',
      briefButtonLabel: 'Open Brief',

      uploadCardTitle: 'Upload project materials',
      uploadCardDescription:
        'Best if you already have notes, PRD, screenshots, links, an old interface, or a draft project description.',
      uploadButtonLabel: 'Upload Materials',

      processEyebrow: 'What happens next',
      processTitle: 'How we process your project',
      processDescription:
        'After you submit your brief or materials, we structure the task, identify constraints, map out key scenarios, and prepare a clear next step for your project.',
      processSteps: [
        {
          icon: 'target',
          title: 'Project Goals',
          description: 'We clarify why you need this project and what outcome matters most.',
        },
        {
          icon: 'users',
          title: 'Roles & Scenarios',
          description: 'We identify who will use the product and what user journeys are critical.',
        },
        {
          icon: 'layers',
          title: 'Constraints & Scope',
          description: 'We factor in timeline, complexity, available materials, and depth of work.',
        },
        {
          icon: 'arrowUpRight',
          title: 'Next Step',
          description: 'We recommend a fitting format, timeline range, and starting price.',
        },
      ],
    },

    wizard: {
      stepLabels: [
        { value: 'Project Type' },
        { value: 'Goal' },
        { value: 'Team' },
        { value: 'Complexity' },
        { value: 'Materials' },
        { value: 'Timeline' },
        { value: 'Contact' },
      ],

      backToOptionsLabel: 'Back to options',
      previousStepLabel: 'Previous step',
      backLabel: 'Back',
      cancelLabel: 'Cancel',
      stepCounterPrefix: 'Step',
      stepCounterConnector: 'of',

      projectTypeTitle: 'What are you planning to build?',
      projectTypeDescription: 'Choose the project type that best matches your task',
      projectTypes: [
        {
          value: 'website',
          label: 'Website / Corporate Site',
          description: 'Landing page, corporate website, product page',
        },
        {
          value: 'website-redesign',
          label: 'Website Redesign',
          description: 'UX/UI improvement of existing website',
        },
        {
          value: 'b2b',
          label: 'B2B Platform',
          description: 'SaaS, marketplace, business system',
        },
        {
          value: 'internal',
          label: 'Internal System',
          description: 'CRM, ERP, operational tools',
        },
        {
          value: 'portal',
          label: 'Client Portal',
          description: 'Personal dashboard, self-service',
        },
        {
          value: 'dashboard',
          label: 'Dashboard / Analytics',
          description: 'Analytics, monitoring, reporting',
        },
        {
          value: 'mobile',
          label: 'Mobile Application',
          description: 'iOS, Android, cross-platform',
        },
        {
          value: 'redesign',
          label: 'Digital Product Redesign',
          description: 'UX/UI improvement of system or app',
        },
        {
          value: 'presale',
          label: 'Presale / Investor Prototype',
          description: 'Demo for fundraising or tender',
        },
        {
          value: 'other',
          label: 'Other',
          description: 'Tell us more in the next steps',
        },
      ],

      goalTitle: 'What is the main goal of the project right now?',
      goalDescription: 'This helps us recommend the right format of work',
      projectGoals: [
        { value: 'fundraising', label: 'Fundraising / Investor Presentation' },
        { value: 'pitch', label: 'Pitch / Tender / Presale' },
        { value: 'dev-handover', label: 'Preparation for Development Handoff' },
        { value: 'internal-launch', label: 'Internal Launch / Digitization' },
        { value: 'redesign', label: 'Redesign / UX Improvement' },
        { value: 'whitelabel', label: 'White-label for Client' },
        { value: 'new-market', label: 'New Market Entry' },
        { value: 'other', label: 'Other' },
      ],

      teamTitle: 'How would you describe your team?',
      teamDescription: 'This helps adapt the format of work to your context',
      teamTypes: [
        { value: 'founder', label: 'Founder / Startup Team' },
        { value: 'product', label: 'In-house Product Team' },
        { value: 'b2b', label: 'B2B Company / Operations Team' },
        { value: 'agency', label: 'Agency / Integrator' },
        { value: 'consultant', label: 'Consultant / Partner' },
        { value: 'other', label: 'Other' },
      ],
      companyNameLabel: 'Company name',
      companyNamePlaceholder: 'Acme Inc.',
      websiteLabel: 'Website',
      websitePlaceholder: 'https://company.com',
      teamSizeLabel: 'Team size',
      teamSizePlaceholder: '5–20 people',

      complexityTitle: 'How complex is the product or system?',
      complexityDescription: 'These details help estimate scope',
      rolesCountLabel: 'Number of roles',
      rolesCountPlaceholder: '2–3 roles',
      screenCountLabel: 'Approximate number of screens / modules',
      screenCountPlaceholder: '10–20 screens',
      complexityFlags: [
        { value: 'Role-based permissions' },
        { value: 'Dashboard views' },
        { value: 'Mobile views' },
        { value: 'Prototype' },
        { value: 'Basic component system' },
        { value: 'Materials for development' },
        { value: 'Multilingual support' },
        { value: 'Arabic / RTL' },
        { value: 'Branding exists' },
      ],

      materialsTitle: 'What materials do you already have?',
      materialsDescription: 'This helps understand where to start',
      materialsOptions: [
        { value: 'notes', label: 'Rough notes' },
        { value: 'brief', label: 'Product brief' },
        { value: 'prd', label: 'PRD / Requirements' },
        { value: 'screens', label: 'Current screens' },
        { value: 'legacy', label: 'Old product / Legacy' },
        { value: 'brand', label: 'Brand assets' },
        { value: 'wireframes', label: 'Wireframes' },
        { value: 'nothing', label: 'Nothing yet' },
      ],
      wizardUploadLabel: 'Additional files',
      wizardUploadHint: 'PDF, PNG, JPG, DOCX, ZIP — up to 50 MB per file',

      timelineTitle: 'What are your timeline and budget expectations?',
      timelineDescription: 'This helps choose the most suitable format',
      timelineLabel: 'Expected timeline',
      timelineOptions: [
        { value: 'asap', label: 'ASAP' },
        { value: '2weeks', label: 'Within 2 weeks' },
        { value: '1month', label: 'Within 1 month' },
        { value: '6weeks', label: 'Within 6 weeks' },
        { value: 'flexible', label: 'Flexible' },
      ],
      budgetLabel: 'Budget range',
      budgetOptions: [
        { value: '3-5k', label: '$3k–$5k' },
        { value: '5-7k', label: '$5k–$7k' },
        { value: '7-10k', label: '$7k–$10k' },
        { value: '10-15k', label: '$10k–$15k' },
        { value: '15k+', label: '$15k+' },
        { value: 'recommend', label: 'Need recommendation' },
      ],
      notesLabel: 'Short note',
      notesPlaceholder: 'Add any extra details here if relevant...',

      contactTitle: 'Where should we send the proposal?',
      contactDescription: 'Fill in your contact details to receive the recommendation',
      nameLabel: 'Name *',
      namePlaceholder: 'Alex',
      emailLabel: 'Work email *',
      emailPlaceholder: 'alex@company.com',
      companyLabel: 'Company',
      companyPlaceholder: 'Acme Inc.',
      roleLabel: 'Role',
      rolePlaceholder: 'Product Manager',
      regionLabel: 'Country / Region',
      regionPlaceholder: 'UAE',
      phoneLabel: 'Telegram / WhatsApp / phone (optional)',
      phonePlaceholder: '+971 50 123 4567',
      commentLabel: 'Additional comment',
      commentPlaceholder: 'Tell us more about the project...',
      noCallLabel: 'I want a no-call-first proposal',
      expertReviewLabel: 'I am open to expert review if needed',
      ndaLabel: 'NDA may be needed before sending sensitive materials',

      nextLabel: 'Next',
      submitLabel: 'Send Project Brief',

      summaryTitle: 'Your brief',
      summaryProjectTypeLabel: 'Project type',
      summaryGoalLabel: 'Goal',
      summaryTeamLabel: 'Team',
      summaryTimelineLabel: 'Timeline',
      summaryResultsTitle: 'After submitting you will receive',
      summaryResults: [
        { value: 'A recommendation on the right format of work' },
        { value: 'A timeline range' },
        { value: 'A starting price direction' },
        { value: 'The clearest next step for the project' },
      ],
      summaryFooter:
        'The final scope depends on complexity, number of roles, modules, languages, and depth of work.',
    },

    upload: {
      title: 'Have project materials ready?',
      description:
        'Upload a brief, notes, screenshots, PRD, links, or existing screens — that is enough for us to prepare a recommendation for your next step.',
      backLabel: 'Back to options',
      filesLabel: 'Upload Files',
      filesTitle: 'Drag and drop files here or click to browse',
      filesHint: 'PDF, PNG, JPG, DOCX, ZIP — up to 50 MB per file',
      linksLabel: 'Add Links',
      linksPlaceholder: 'Figma, Google Docs, Notion, Miro...',
      descriptionLabel: 'Brief Project Description',
      descriptionPlaceholder:
        'Tell us what you are building, what the main goal is, and what outcome you expect...',
      contactLabel: 'Contact Information',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Work email',
      cancelLabel: 'Cancel',
      submitLabel: 'Send Materials',
    },

    success: {
      title: 'Your brief has been received',
      description: 'We are preparing a structured proposal for your project.',
      stepsTitle: 'What happens next',
      steps: [
        {
          number: '01',
          title: 'Review brief',
          description: 'We study your materials and requirements',
        },
        {
          number: '02',
          title: 'Recommend format',
          description: 'We identify the right format of work',
        },
        {
          number: '03',
          title: 'Share timeline & price',
          description: 'We send estimated timeline and starting price',
        },
        {
          number: '04',
          title: 'Request details',
          description: 'We clarify details only if needed',
        },
      ],
      homeLabel: 'Return to Homepage',
      homePageKey: 'home',
      pricingLabel: 'View Work Formats',
      pricingPageKey: 'pricing',
      uploadMoreLabel: 'Upload More Materials',
      supportNotePrefix: 'Have questions? Reach out at',
      supportEmail: 'hello@atelier-meridian.com',
    },
  },

  ar: {
    blockType: 'proposalFlowProposal',
    intro: {
      briefCardTitle: 'املأ brief منظم',
      briefCardDescription:
        'الخيار الأنسب إذا كنت تريد توصية واضحة حول صيغة العمل، والمدة المتوقعة، واتجاه السعر.',
      briefButtonLabel: 'افتح الـ brief',

      uploadCardTitle: 'ارفع مواد المشروع',
      uploadCardDescription:
        'الخيار الأنسب إذا كانت لديك بالفعل ملاحظات أو PRD أو لقطات شاشة أو روابط أو واجهة قديمة أو وصف أولي للمشروع.',
      uploadButtonLabel: 'ارفع المواد',

      processEyebrow: 'ماذا يحدث بعد الإرسال',
      processTitle: 'كيف نعالج طلبك',
      processDescription:
        'بعد إرسال الـ brief أو المواد، نقوم بهيكلة المهمة وتحديد القيود ورسم السيناريوهات الأساسية وإعداد خطوة تالية واضحة لمشروعك.',
      processSteps: [
        {
          icon: 'target',
          title: 'نراجع المهمة أو المواد المرسلة',
          description: 'ندرس ما أرسلته ونفهم السياق والأهداف.',
        },
        {
          icon: 'users',
          title: 'نحدد صيغة العمل الأنسب',
          description: 'نختار الصيغة الأنسب بناءً على نوع المشروع ومتطلباته.',
        },
        {
          icon: 'layers',
          title: 'نقدر المدة المتوقعة ونقطة بداية السعر',
          description: 'نحدد نطاقاً زمنياً واقعياً واتجاهاً أولياً للتكلفة.',
        },
        {
          icon: 'arrowUpRight',
          title: 'نقترح الخطوة التالية الأكثر عملية',
          description: 'نقدم توصية واضحة بالإجراء التالي.',
        },
      ],
    },

    wizard: {
      stepLabels: [
        { value: 'نوع المشروع' },
        { value: 'الهدف' },
        { value: 'الفريق' },
        { value: 'التعقيد' },
        { value: 'المواد' },
        { value: 'الجدول الزمني' },
        { value: 'التواصل' },
      ],

      backToOptionsLabel: 'رجوع للخيارات',
      previousStepLabel: 'الخطوة السابقة',
      backLabel: 'رجوع',
      cancelLabel: 'إلغاء',
      stepCounterPrefix: 'الخطوة',
      stepCounterConnector: 'من',

      projectTypeTitle: 'ما الذي تخطط للعمل عليه؟',
      projectTypeDescription: 'اختر نوع المشروع الذي يصف مهمتك بشكل أفضل',
      projectTypes: [
        {
          value: 'website',
          label: 'موقع إلكتروني / موقع شركة',
          description: 'صفحة هبوط، موقع مؤسسي، صفحة منتج',
        },
        {
          value: 'website-redesign',
          label: 'إعادة تصميم موقع',
          description: 'تحسين UX/UI لموقع قائم',
        },
        {
          value: 'b2b',
          label: 'منصة B2B',
          description: 'SaaS، سوق إلكتروني، نظام أعمال',
        },
        {
          value: 'internal',
          label: 'نظام داخلي',
          description: 'CRM، ERP، أدوات تشغيلية',
        },
        {
          value: 'portal',
          label: 'بوابة عملاء',
          description: 'لوحة تحكم شخصية، خدمة ذاتية',
        },
        {
          value: 'dashboard',
          label: 'لوحة تحكم / تحليلات',
          description: 'تحليلات، مراقبة، تقارير',
        },
        {
          value: 'mobile',
          label: 'تطبيق جوال',
          description: 'iOS، Android، متعدد المنصات',
        },
        {
          value: 'redesign',
          label: 'إعادة تصميم منتج رقمي',
          description: 'تحسين UX/UI لنظام أو تطبيق',
        },
        {
          value: 'presale',
          label: 'نموذج أولي للمستثمرين',
          description: 'عرض توضيحي للتمويل أو المناقصات',
        },
        {
          value: 'other',
          label: 'آخر',
          description: 'أخبرنا المزيد في الخطوات التالية',
        },
      ],

      goalTitle: 'ما هو الهدف الرئيسي للمشروع الآن؟',
      goalDescription: 'هذا يساعدنا في اقتراح صيغة العمل الأنسب',
      projectGoals: [
        { value: 'fundraising', label: 'التمويل / عرض للمستثمرين' },
        { value: 'pitch', label: 'عرض تقديمي / مناقصة / ما قبل البيع' },
        { value: 'dev-handover', label: 'التحضير لتسليم التطوير' },
        { value: 'internal-launch', label: 'إطلاق داخلي / رقمنة' },
        { value: 'redesign', label: 'إعادة تصميم / تحسين UX' },
        { value: 'whitelabel', label: 'White-label للعميل' },
        { value: 'new-market', label: 'دخول سوق جديد' },
        { value: 'other', label: 'آخر' },
      ],

      teamTitle: 'كيف تصف فريقك بشكل أفضل؟',
      teamDescription: 'هذا يساعدنا في تكييف صيغة العمل مع سياقك',
      teamTypes: [
        { value: 'founder', label: 'مؤسس / فريق شركة ناشئة' },
        { value: 'product', label: 'فريق منتج داخلي' },
        { value: 'b2b', label: 'شركة B2B / فريق عمليات' },
        { value: 'agency', label: 'وكالة / شركة تكامل' },
        { value: 'consultant', label: 'مستشار / شريك' },
        { value: 'other', label: 'آخر' },
      ],
      companyNameLabel: 'اسم الشركة',
      companyNamePlaceholder: 'Acme Inc.',
      websiteLabel: 'الموقع الإلكتروني',
      websitePlaceholder: 'https://company.com',
      teamSizeLabel: 'حجم الفريق',
      teamSizePlaceholder: '5–20 شخصاً',

      complexityTitle: 'ما مدى تعقيد المنتج أو النظام؟',
      complexityDescription: 'تساعدنا هذه المعطيات على تقدير حجم العمل',
      rolesCountLabel: 'عدد الأدوار',
      rolesCountPlaceholder: '2–3 أدوار',
      screenCountLabel: 'العدد التقريبي للشاشات / الوحدات',
      screenCountPlaceholder: '10–20 شاشة',
      complexityFlags: [
        { value: 'صلاحيات قائمة على الأدوار' },
        { value: 'واجهات Dashboard' },
        { value: 'واجهات الجوال' },
        { value: 'Prototype' },
        { value: 'نظام مكونات أساسي' },
        { value: 'مواد للتطوير' },
        { value: 'دعم متعدد اللغات' },
        { value: 'Arabic / RTL' },
        { value: 'توجد هوية بصرية' },
      ],

      materialsTitle: 'ما المواد المتوفرة لديك الآن؟',
      materialsDescription: 'هذا يساعدنا على فهم نقطة البداية',
      materialsOptions: [
        { value: 'notes', label: 'ملاحظات أولية' },
        { value: 'brief', label: 'brief للمنتج' },
        { value: 'prd', label: 'PRD / متطلبات' },
        { value: 'screens', label: 'شاشات حالية' },
        { value: 'legacy', label: 'منتج قديم / Legacy' },
        { value: 'brand', label: 'عناصر العلامة التجارية' },
        { value: 'wireframes', label: 'Wireframes' },
        { value: 'nothing', label: 'لا شيء بعد' },
      ],
      wizardUploadLabel: 'ملفات إضافية',
      wizardUploadHint: 'PDF، PNG، JPG، DOCX، ZIP — حتى 50 MB لكل ملف',

      timelineTitle: 'ما توقعاتك من حيث الوقت والميزانية؟',
      timelineDescription: 'هذا يساعد في اختيار الصيغة الأنسب للعمل',
      timelineLabel: 'الجدول الزمني المتوقع',
      timelineOptions: [
        { value: 'asap', label: 'في أقرب وقت' },
        { value: '2weeks', label: 'خلال أسبوعين' },
        { value: '1month', label: 'خلال شهر' },
        { value: '6weeks', label: 'خلال 6 أسابيع' },
        { value: 'flexible', label: 'مرن' },
      ],
      budgetLabel: 'نطاق الميزانية',
      budgetOptions: [
        { value: '3-5k', label: '$3k–$5k' },
        { value: '5-7k', label: '$5k–$7k' },
        { value: '7-10k', label: '$7k–$10k' },
        { value: '10-15k', label: '$10k–$15k' },
        { value: '15k+', label: '$15k+' },
        { value: 'recommend', label: 'أحتاج توصية' },
      ],
      notesLabel: 'ملاحظة مختصرة',
      notesPlaceholder: 'أضف أي تفاصيل إضافية هنا إذا كانت مهمة...',

      contactTitle: 'إلى أين نرسل لك العرض؟',
      contactDescription: 'املأ بيانات التواصل لتلقي التوصية',
      nameLabel: 'الاسم *',
      namePlaceholder: 'أحمد',
      emailLabel: 'البريد المهني *',
      emailPlaceholder: 'ahmad@company.com',
      companyLabel: 'الشركة',
      companyPlaceholder: 'Acme Inc.',
      roleLabel: 'الدور',
      rolePlaceholder: 'Product Manager',
      regionLabel: 'الدولة / المنطقة',
      regionPlaceholder: 'UAE',
      phoneLabel: 'Telegram / WhatsApp / الهاتف (اختياري)',
      phonePlaceholder: '+971 50 123 4567',
      commentLabel: 'تعليق إضافي',
      commentPlaceholder: 'أخبرنا أكثر عن المشروع...',
      noCallLabel: 'أريد عرضاً بنظام no-call-first',
      expertReviewLabel: 'أنا منفتح على expert review إذا لزم الأمر',
      ndaLabel: 'قد أحتاج إلى NDA قبل إرسال المواد الحساسة',

      nextLabel: 'التالي',
      submitLabel: 'إرسال brief المشروع',

      summaryTitle: 'brief الخاص بك',
      summaryProjectTypeLabel: 'نوع المشروع',
      summaryGoalLabel: 'الهدف',
      summaryTeamLabel: 'الفريق',
      summaryTimelineLabel: 'المدة',
      summaryResultsTitle: 'بعد الإرسال ستحصل على',
      summaryResults: [
        { value: 'توصية بصيغة العمل المناسبة' },
        { value: 'نطاق زمني متوقع' },
        { value: 'اتجاه مبدئي للسعر' },
        { value: 'الخطوة التالية الأكثر وضوحاً للمشروع' },
      ],
      summaryFooter:
        'يعتمد النطاق النهائي على التعقيد وعدد الأدوار والوحدات واللغات وعمق العمل المطلوب.',
    },

    upload: {
      title: 'لديك مواد جاهزة؟',
      description:
        'ارفع brief أو ملاحظات أو لقطات شاشة أو PRD أو روابط أو شاشات قائمة — هذا كافٍ لنا لإعداد توصية بالخطوة التالية.',
      backLabel: 'رجوع للخيارات',
      filesLabel: 'ارفع الملفات',
      filesTitle: 'اسحب الملفات هنا أو انقر للتصفح',
      filesHint: 'PDF، PNG، JPG، DOCX، ZIP — حتى 50 MB لكل ملف',
      linksLabel: 'أضف الروابط',
      linksPlaceholder: 'Figma، Google Docs، Notion، Miro...',
      descriptionLabel: 'وصف مختصر للمشروع',
      descriptionPlaceholder:
        'أخبرنا بما تعمل عليه، وما الهدف الرئيسي، وما النتيجة التي تتوقعها...',
      contactLabel: 'معلومات التواصل',
      namePlaceholder: 'الاسم',
      emailPlaceholder: 'البريد الإلكتروني',
      cancelLabel: 'إلغاء',
      submitLabel: 'إرسال المواد',
    },

    success: {
      title: 'تم استلام طلبك',
      description: 'نحن نعد عرضاً منظماً لمشروعك.',
      stepsTitle: 'ماذا يحدث بعد ذلك',
      steps: [
        {
          number: '01',
          title: 'مراجعة الـ brief',
          description: 'ندرس موادك ومتطلباتك',
        },
        {
          number: '02',
          title: 'التوصية بالصيغة',
          description: 'نحدد صيغة العمل المناسبة',
        },
        {
          number: '03',
          title: 'مشاركة الجدول والسعر',
          description: 'نرسل الجدول الزمني المقدر ونقطة بداية السعر',
        },
        {
          number: '04',
          title: 'طلب التفاصيل',
          description: 'نوضح التفاصيل فقط عند الحاجة',
        },
      ],
      homeLabel: 'العودة للرئيسية',
      homePageKey: 'home',
      pricingLabel: 'صيغ العمل',
      pricingPageKey: 'pricing',
      uploadMoreLabel: 'رفع مواد إضافية',
      supportNotePrefix: 'لديك أسئلة؟ تواصل معنا على',
      supportEmail: 'hello@atelier-meridian.com',
    },
  },
}

function upsertBlock(layout: BlockData[], nextBlock: BlockData): BlockData[] {
  const existingIndex = layout.findIndex((block) => block?.blockType === nextBlock.blockType)

  if (existingIndex === -1) {
    return [...layout, nextBlock]
  }

  const existingBlock = layout[existingIndex]
  const mergedBlock = existingBlock?.id ? { ...nextBlock, id: existingBlock.id } : nextBlock

  const nextLayout = [...layout]
  nextLayout[existingIndex] = mergedBlock

  return nextLayout
}

async function getProposalPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: 'method',
      },
    },
    limit: 1,
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  return result.docs[0] ?? null
}

async function ensureProposalPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const existing = await getProposalPage(payload)

  if (existing) {
    return existing
  }

  return payload.create({
    collection: 'pages',
    locale: 'ru',
    depth: 0,
    data: {
      pageKey: 'get-proposal',
      internalName: 'get-proposal',
      layout: [],
    },
  })
}

async function seedBlockForLocale(
  payload: Awaited<ReturnType<typeof getPayload>>,
  pageId: string | number,
  locale: Locale,
  blockData: BlockData,
) {
  const page = await payload.findByID({
    collection: 'pages',
    id: pageId,
    locale,
    fallbackLocale: 'none',
    depth: 0,
  })

  const currentLayout = Array.isArray(page?.layout) ? (page.layout as BlockData[]) : []
  const nextLayout = upsertBlock(currentLayout, blockData)

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale,
    depth: 0,
    data: {
      layout: nextLayout,
    },
  })
}

async function main() {
  const payload = await getPayload({ config })

  const homePage = await ensureProposalPage(payload)


    await seedBlockForLocale(payload, homePage.id, 'ru', HERO_PROPOSAL_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', HERO_PROPOSAL_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', HERO_PROPOSAL_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', TRUST_PROPOSAL_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', TRUST_PROPOSAL_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', TRUST_PROPOSAL_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', FAQ_PROPOSAL_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', FAQ_PROPOSAL_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', FAQ_PROPOSAL_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', PROPOSAL_FLOW_PROPOSAL_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', PROPOSAL_FLOW_PROPOSAL_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', PROPOSAL_FLOW_PROPOSAL_SEED.ar)


  console.log('✅ Method page seed completed')
  process.exit(0)
}

main().catch((error) => {
  console.error('❌ Method page seed failed')
  console.error(error)
  process.exit(1)
})