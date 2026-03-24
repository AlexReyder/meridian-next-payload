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
        description: 'Предлагаем подходящий формат работы, ориентир по срокам и стартовую стоимость.',
      },
    ],

    uploadViewTitle: 'Есть материалы по проекту?',
    uploadViewDescription:
      'Загрузите brief, заметки, screenshots, PRD, ссылки или старые экраны — этого достаточно, чтобы мы подготовили рекомендацию по следующему шагу.',
    uploadBackLabel: 'Назад к выбору',
    uploadFilesLabel: 'Загрузить файлы',
    uploadFilesHint: 'Перетащите файлы сюда или нажмите для выбора',
    uploadLinksLabel: 'Добавить ссылки',
    uploadLinksPlaceholder: 'Figma, Google Docs, Notion, Miro...',
    uploadDescriptionLabel: 'Краткое описание проекта',
    uploadDescriptionPlaceholder:
      'Расскажите, что вы планируете делать, какая главная задача, и что ожидаете получить...',
    uploadContactLabel: 'Контакт для связи',
    uploadNamePlaceholder: 'Имя',
    uploadEmailPlaceholder: 'Email',
    uploadCancelLabel: 'Отмена',
    uploadSubmitLabel: 'Отправить материалы',

    successTitle: 'Ваш brief получен',
    successDescription: 'Мы готовим структурированное предложение по вашему проекту.',
    successStepsTitle: 'Что будет дальше',
    successSteps: [
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
    successHomeLabel: 'Вернуться на главную',
    successHomePageKey: 'home',
    successPricingLabel: 'Посмотреть форматы работы',
    successPricingPageKey: 'pricing',
    successUploadMoreLabel: 'Загрузить ещё материалы',
    supportNotePrefix: 'Есть вопросы? Напишите на',
    supportEmail: 'hello@atelier-meridian.com',
  },

  en: {
    blockType: 'proposalFlowProposal',
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

    uploadViewTitle: 'Have project materials ready?',
    uploadViewDescription:
      'Upload a brief, notes, screenshots, PRD, links, or existing screens — that is enough for us to prepare a recommendation for your next step.',
    uploadBackLabel: 'Back to options',
    uploadFilesLabel: 'Upload Files',
    uploadFilesHint: 'Drag and drop files here or click to browse',
    uploadLinksLabel: 'Add Links',
    uploadLinksPlaceholder: 'Figma, Google Docs, Notion, Miro...',
    uploadDescriptionLabel: 'Brief Project Description',
    uploadDescriptionPlaceholder:
      'Tell us what you are building, what the main goal is, and what outcome you expect...',
    uploadContactLabel: 'Contact Information',
    uploadNamePlaceholder: 'Your name',
    uploadEmailPlaceholder: 'Work email',
    uploadCancelLabel: 'Cancel',
    uploadSubmitLabel: 'Send Materials',

    successTitle: 'Your brief has been received',
    successDescription: 'We are preparing a structured proposal for your project.',
    successStepsTitle: 'What happens next',
    successSteps: [
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
    successHomeLabel: 'Return to Homepage',
    successHomePageKey: 'home',
    successPricingLabel: 'View Work Formats',
    successPricingPageKey: 'pricing',
    successUploadMoreLabel: 'Upload More Materials',
    supportNotePrefix: 'Have questions? Reach out at',
    supportEmail: 'hello@atelier-meridian.com',
  },

  ar: {
    blockType: 'proposalFlowProposal',
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
        icon: 'arrowUpLeft',
        title: 'نقترح الخطوة التالية الأكثر عملية',
        description: 'نقدم توصية واضحة بالإجراء التالي.',
      },
    ],

    uploadViewTitle: 'لديك مواد جاهزة؟',
    uploadViewDescription:
      'ارفع brief أو ملاحظات أو لقطات شاشة أو PRD أو روابط أو شاشات قائمة — هذا كافٍ لنا لإعداد توصية بالخطوة التالية.',
    uploadBackLabel: 'رجوع للخيارات',
    uploadFilesLabel: 'ارفع الملفات',
    uploadFilesHint: 'اسحب الملفات هنا أو انقر للتصفح',
    uploadLinksLabel: 'أضف الروابط',
    uploadLinksPlaceholder: 'Figma، Google Docs، Notion، Miro...',
    uploadDescriptionLabel: 'وصف مختصر للمشروع',
    uploadDescriptionPlaceholder:
      'أخبرنا بما تعمل عليه، وما الهدف الرئيسي، وما النتيجة التي تتوقعها...',
    uploadContactLabel: 'معلومات التواصل',
    uploadNamePlaceholder: 'الاسم',
    uploadEmailPlaceholder: 'البريد الإلكتروني',
    uploadCancelLabel: 'إلغاء',
    uploadSubmitLabel: 'إرسال المواد',

    successTitle: 'تم استلام طلبك',
    successDescription: 'نحن نعد عرضاً منظماً لمشروعك.',
    successStepsTitle: 'ماذا يحدث بعد ذلك',
    successSteps: [
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
    successHomeLabel: 'العودة للرئيسية',
    successHomePageKey: 'home',
    successPricingLabel: 'صيغ العمل',
    successPricingPageKey: 'pricing',
    successUploadMoreLabel: 'رفع مواد إضافية',
    supportNotePrefix: 'لديك أسئلة؟ تواصل معنا على',
    supportEmail: 'hello@atelier-meridian.com',
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