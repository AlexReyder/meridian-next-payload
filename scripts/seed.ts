import 'dotenv/config'

import { getPayload } from 'payload'
import config from '../payload.config'

type Locale = 'ru' | 'en' | 'ar'

type BlockData = Record<string, unknown> & {
  blockType: string
  id?: string
}

const HERO_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'heroPricing',
    eyebrow: 'Форматы и стоимость',
    title: 'Цены и форматы работы',
    description:
      'Эти форматы подходят для проектов разного типа — от дизайна сайта или редизайна корпоративного сайта до mobile app, клиентского портала или интерфейса сложной B2B-системы.',
    descriptionSecondary:
      'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями. Сначала структура и объём — потом prototype и материалы для разработки.',
    trustLabels: [
      { label: 'Структурированная работа' },
      { label: 'Готовность к разработке' },
      { label: 'Партнёрский формат' },
      { label: 'Прямое взаимодействие' },
    ],
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Посмотреть метод',
    secondaryPageKey: 'method',
  },
  en: {
    blockType: 'heroPricing',
    eyebrow: 'Formats & Pricing',
    title: 'Pricing and engagement formats',
    description:
      'Atelier Meridian works in a small number of structured formats — from product framing and investor-ready preparation to build-ready prototypes and white-label support for partners.',
    descriptionSecondary:
      'Suitable for websites, redesign, digital systems, portals, dashboards, and mobile apps.',
    trustLabels: [
      { label: 'Structured delivery' },
      { label: 'Build-ready output' },
      { label: 'Partner-level support' },
      { label: 'Direct collaboration' },
    ],
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Solutions',
    secondaryPageKey: 'solutions',
  },
  ar: {
    blockType: 'heroPricing',
    eyebrow: 'صيغ العمل والأسعار',
    title: 'الأسعار وصيغ العمل',
    description:
      'يعمل Atelier Meridian من خلال عدد محدود من الصيغ الواضحة والمنظمة — من هيكلة المنتج في مراحله الأولى إلى النماذج الأولية الجاهزة للعرض أو للتطوير، وصولاً إلى دعم الشركاء بنظام مرن واحترافي.',
    descriptionSecondary:
      'مناسب للمواقع، وإعادة التصميم، والأنظمة الرقمية، والبوابات، ولوحات التحكم، وتطبيقات الجوال.',
    trustLabels: [
      { label: 'تسليم منظم' },
      { label: 'مخرجات جاهزة للتطوير' },
      { label: 'دعم على مستوى الشركاء' },
      { label: 'تعاون مباشر' },
    ],
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اطلع على الحلول',
    secondaryPageKey: 'solutions',
  },
}

const POSITIONING_BLOCK_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'positioningBlockPricing',
    eyebrow: 'Понятный процесс работы',
    title: 'Не прайс на дизайн, а понятные форматы продуктовой работы',
    description:
      'Atelier Meridian продаёт не набор экранов, а структурированный результат — от понимания продукта до готовности к передаче в разработку.',
    descriptionSecondary:
      'Каждый формат — это законченный этап с понятным результатом, а не почасовая работа с размытым объёмом.',
    rightTitle: 'Работа напрямую с командой',
    deliveryElements: [
      {
        title: 'Прояснение структуры продукта',
        description: 'Роли, приоритеты и логика',
      },
      {
        title: 'Пользовательские сценарии',
        description: 'Ключевые flows и точки перехода',
      },
      {
        title: 'Архитектура экранов',
        description: 'Карта экранов и состояний',
      },
      {
        title: 'Интерактивный прототип',
        description: 'Кликабельный preview продукта',
      },
      {
        title: 'Визуальное направление',
        description: 'Стиль и компоненты',
      },
      {
        title: 'Передача в разработку',
        description: 'Готовность к следующему этапу',
      },
    ],
  },
  en: {
    blockType: 'positioningBlockPricing',
    eyebrow: 'Clear process',
    title: 'Not just pricing, but clear formats of work',
    description:
      'Atelier Meridian does not sell isolated screens. We structure product logic, user flows, interface direction, and tangible outputs that make the next stage easier.',
    descriptionSecondary:
      'Whether that means investor presentation, client alignment, or development handoff — each format is a complete milestone with a clear result.',
    rightTitle: 'Direct collaboration with the team',
    pillars: [
      {
        label: 'Clear scope',
        description: 'Defined boundaries',
      },
      {
        label: 'Premium output',
        description: 'Quality materials',
      },
      {
        label: 'Defined next step',
        description: 'What happens after',
      },
    ],
    deliveryElements: [
      {
        title: 'Product structure clarification',
        description: 'Scenarios, roles, and priorities',
      },
      {
        title: 'User flows',
        description: 'Key paths and transitions',
      },
      {
        title: 'Screen architecture',
        description: 'Screen map and states',
      },
      {
        title: 'Interactive prototype',
        description: 'Clickable product preview',
      },
      {
        title: 'Visual direction',
        description: 'Style and components',
      },
      {
        title: 'Development handoff',
        description: 'Ready for the next stage',
      },
    ],
  },
  ar: {
    blockType: 'positioningBlockPricing',
    eyebrow: 'عملية واضحة',
    title: 'ليست أسعاراً فقط، بل صيغ عمل واضحة',
    description:
      'لا يبيع Atelier Meridian شاشات منفصلة أو مخرجات سطحية. نحن نبني منطق المنتج، ومسارات المستخدم، والاتجاه البصري، والمخرجات التي تجعل المرحلة التالية أوضح — سواء كان الهدف عرضاً للمستثمرين أو توافقاً داخلياً أو انتقالاً منظماً إلى التطوير.',
    rightTitle: 'تعاون مباشر مع الفريق',
    pillars: [
      {
        label: 'نطاق عمل واضح',
        description: 'حدود محددة',
      },
      {
        label: 'مخرجات متميزة',
        description: 'مواد عالية الجودة',
      },
      {
        label: 'خطوة تالية محددة',
        description: 'ما يحدث بعد ذلك',
      },
    ],
    deliveryElements: [
      {
        title: 'توضيح هيكل المنتج',
        description: 'السيناريوهات والأدوار والأولويات',
      },
      {
        title: 'مسارات المستخدم',
        description: 'المسارات الرئيسية ونقاط الانتقال',
      },
      {
        title: 'هندسة الشاشات',
        description: 'خريطة الشاشات والحالات',
      },
      {
        title: 'نموذج تفاعلي',
        description: 'معاينة المنتج القابلة للنقر',
      },
      {
        title: 'الاتجاه البصري',
        description: 'الأسلوب والمكونات',
      },
      {
        title: 'تسليم للتطوير',
        description: 'جاهز للمرحلة التالية',
      },
    ],
  },
}

const PACKAGE_CARDS_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'packageCardsPricing',
    eyebrow: 'Пакеты',
    title: 'Основные форматы работы',
    description:
      'Ниже — базовые форматы, которые помогают быстро понять масштаб, уровень проработки и тип результата. Финальный scope уточняется после brief.',
    packages: [
      {
        badge: 'Стартовый формат',
        title: 'Concept Package',
        price: 'от $2,000',
        timeline: '1–2 недели',
        idealFor:
          'Подходит, когда нужно быстро собрать направление, показать идею, подготовить первый prototype или client-facing concept.',
        items: [
          { label: 'Структура основного сценария' },
          { label: 'Ключевые экраны или блоки' },
          { label: 'Базовое визуальное направление' },
          { label: 'Материалы для обсуждения или презентации' },
        ],
        buttonLabel: 'Получить предложение',
        buttonPageKey: 'get-proposal',
      },
      {
        badge: 'Основной формат',
        title: 'Product Structure Package',
        price: 'от $4,500',
        timeline: '2–4 недели',
        featured: true,
        idealFor:
          'Подходит, когда важно собрать продуктовую логику, user flows, экранную карту и подготовить понятную базу до этапа детального UI.',
        items: [
          { label: 'Product framing и roles/scenarios' },
          { label: 'User flows и screen map' },
          { label: 'Логика структуры и навигации' },
          { label: 'Материалы для следующего этапа' },
        ],
        buttonLabel: 'Обсудить формат',
        buttonPageKey: 'get-proposal',
      },
      {
        badge: 'Расширенный формат',
        title: 'Prototype + Handoff Package',
        price: 'от $8,000',
        timeline: '3–6 недель',
        idealFor:
          'Подходит для проектов, где нужен уже build-ready результат: сильный prototype, visual layer и материалы для передачи в разработку.',
        items: [
          { label: 'Подробный prototype' },
          { label: 'Visual direction и основные компоненты' },
          { label: 'Ключевые состояния экранов' },
          { label: 'Материалы для dev handoff' },
        ],
        buttonLabel: 'Запросить scope',
        buttonPageKey: 'get-proposal',
      },
    ],
  },
  en: {
    blockType: 'packageCardsPricing',
    eyebrow: 'Packages',
    title: 'Core engagement formats',
    description:
      'These are the baseline formats that help understand scale, depth, and expected output. Final scope is clarified after the brief.',
    packages: [
      {
        badge: 'Starter format',
        title: 'Concept Package',
        price: 'from $2,000',
        timeline: '1–2 weeks',
        idealFor:
          'Useful when you need a clear direction, an early prototype, or a client-facing concept that can be reviewed quickly.',
        items: [
          { label: 'Core scenario structure' },
          { label: 'Key screens or blocks' },
          { label: 'Initial visual direction' },
          { label: 'Presentation-ready materials' },
        ],
        buttonLabel: 'Get Proposal',
        buttonPageKey: 'get-proposal',
      },
      {
        badge: 'Core format',
        title: 'Product Structure Package',
        price: 'from $4,500',
        timeline: '2–4 weeks',
        featured: true,
        idealFor:
          'Useful when product logic, user flows, and screen architecture need to be clarified before the detailed UI stage.',
        items: [
          { label: 'Product framing and roles/scenarios' },
          { label: 'User flows and screen map' },
          { label: 'Navigation and structure logic' },
          { label: 'Clear foundation for the next stage' },
        ],
        buttonLabel: 'Discuss Format',
        buttonPageKey: 'get-proposal',
      },
      {
        badge: 'Extended format',
        title: 'Prototype + Handoff Package',
        price: 'from $8,000',
        timeline: '3–6 weeks',
        idealFor:
          'Useful when you need a stronger, build-ready result: prototype, visual layer, and structured development handoff.',
        items: [
          { label: 'Detailed prototype' },
          { label: 'Visual direction and core components' },
          { label: 'Key screen states' },
          { label: 'Development handoff materials' },
        ],
        buttonLabel: 'Request Scope',
        buttonPageKey: 'get-proposal',
      },
    ],
  },
  ar: {
    blockType: 'packageCardsPricing',
    eyebrow: 'الباقات',
    title: 'صيغ العمل الأساسية',
    description:
      'هذه هي الصيغ الأساسية التي تساعد على فهم حجم العمل ومستوى العمق ونوع النتيجة المتوقعة. يتم تحديد النطاق النهائي بعد مراجعة brief.',
    packages: [
      {
        badge: 'صيغة البداية',
        title: 'Concept Package',
        price: 'ابتداءً من $2,000',
        timeline: '1–2 أسبوع',
        idealFor:
          'مناسبة عندما تحتاج إلى اتجاه واضح أو نموذج أولي مبكر أو concept يمكن عرضه بسرعة على العميل أو الفريق.',
        items: [
          { label: 'هيكل السيناريو الأساسي' },
          { label: 'الشاشات أو الكتل الرئيسية' },
          { label: 'اتجاه بصري أولي' },
          { label: 'مواد جاهزة للعرض والمراجعة' },
        ],
        buttonLabel: 'اطلب عرضاً',
        buttonPageKey: 'get-proposal',
      },
      {
        badge: 'الصيغة الأساسية',
        title: 'Product Structure Package',
        price: 'ابتداءً من $4,500',
        timeline: '2–4 أسابيع',
        featured: true,
        idealFor:
          'مناسبة عندما تحتاج إلى توضيح منطق المنتج ومسارات المستخدم وبنية الشاشات قبل الدخول في مرحلة UI التفصيلية.',
        items: [
          { label: 'Product framing والأدوار والسيناريوهات' },
          { label: 'مسارات المستخدم وخريطة الشاشات' },
          { label: 'منطق التنقل وبنية الواجهة' },
          { label: 'أساس واضح للمرحلة التالية' },
        ],
        buttonLabel: 'ناقش الصيغة',
        buttonPageKey: 'get-proposal',
      },
      {
        badge: 'صيغة موسعة',
        title: 'Prototype + Handoff Package',
        price: 'ابتداءً من $8,000',
        timeline: '3–6 أسابيع',
        idealFor:
          'مناسبة عندما تحتاج إلى نتيجة أقرب للتنفيذ: prototype قوي وطبقة بصرية واضحة ومواد مرتبة للتطوير.',
        items: [
          { label: 'نموذج أولي مفصل' },
          { label: 'اتجاه بصري ومكونات أساسية' },
          { label: 'الحالات الرئيسية للشاشات' },
          { label: 'مواد تسليم منظمة للتطوير' },
        ],
        buttonLabel: 'اطلب النطاق',
        buttonPageKey: 'get-proposal',
      },
    ],
  },
}

const CHOOSING_GUIDE_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'choosingGuidePricing',
    eyebrow: 'Как выбрать',
    title: 'Как понять, какой формат вам подходит',
    description:
      'Обычно выбор зависит не от количества экранов, а от того, на каком этапе находится проект и какой следующий шаг вам нужен.',
    layoutVariant: 'detailed',
    items: [
      {
        title: 'Нужен быстрый concept или investor-facing материал',
        description:
          'Если вы только формулируете идею, хотите показать направление или подготовить первую презентационную версию.',
        bestForLabel: 'Подходит для',
        bestForValue: 'Старта идеи, pitch, presale, раннего согласования',
        resultLabel: 'Результат',
        resultValue: 'Concept Package',
      },
      {
        title: 'Нужно собрать продуктовую логику до UI',
        description:
          'Если сценарии, роли, экранная карта и структура ещё не собраны, но нужно двигаться к понятному решению.',
        bestForLabel: 'Подходит для',
        bestForValue: 'Discovery, product framing, сложных digital-систем',
        resultLabel: 'Результат',
        resultValue: 'Product Structure Package',
      },
      {
        title: 'Нужен готовый prototype и handoff',
        description:
          'Если структура уже понятна и проекту нужен сильный интерфейсный слой, ключевые состояния и материалы для разработки.',
        bestForLabel: 'Подходит для',
        bestForValue: 'Build-ready этапа, client delivery, передачи в разработку',
        resultLabel: 'Результат',
        resultValue: 'Prototype + Handoff Package',
      },
    ],
  },
  en: {
    blockType: 'choosingGuidePricing',
    eyebrow: 'How to choose',
    title: 'How to understand which format fits you',
    description:
      'The right format usually depends not on the number of screens, but on the stage of the project and what the next practical step should be.',
    layoutVariant: 'detailed',
    items: [
      {
        title: 'You need a fast concept or investor-facing material',
        description:
          'Useful when the idea is still being shaped and you need something presentable for alignment, pitch, or early review.',
        bestForLabel: 'Best for',
        bestForValue: 'Idea stage, pitch, presale, early alignment',
        resultLabel: 'Result',
        resultValue: 'Concept Package',
      },
      {
        title: 'You need product logic before UI',
        description:
          'Useful when roles, scenarios, and screen architecture are not yet clarified, but the project needs a clear structural base.',
        bestForLabel: 'Best for',
        bestForValue: 'Discovery, product framing, complex digital systems',
        resultLabel: 'Result',
        resultValue: 'Product Structure Package',
      },
      {
        title: 'You need a stronger prototype and handoff',
        description:
          'Useful when structure is already clear and the project needs a visual layer, key states, and better readiness for development.',
        bestForLabel: 'Best for',
        bestForValue: 'Build-ready stage, client delivery, dev handoff',
        resultLabel: 'Result',
        resultValue: 'Prototype + Handoff Package',
      },
    ],
  },
  ar: {
    blockType: 'choosingGuidePricing',
    eyebrow: 'كيف تختار',
    title: 'كيف تفهم الصيغة الأنسب لك',
    description:
      'الاختيار الصحيح لا يعتمد غالباً على عدد الشاشات، بل على مرحلة المشروع وما هي الخطوة العملية التالية التي تحتاجها.',
    layoutVariant: 'compact',
    items: [
      {
        title: 'تحتاج إلى concept سريع أو مادة جاهزة للعرض',
        description:
          'مناسب عندما تكون الفكرة ما زالت في طور الصياغة وتحتاج إلى شيء واضح يمكن عرضه أو مراجعته بسرعة.',
        bestForLabel: 'مناسب لـ',
        bestForValue: 'مرحلة الفكرة، العروض، presale، التوافق الأولي',
        resultLabel: 'النتيجة',
        resultValue: 'Concept Package',
      },
      {
        title: 'تحتاج إلى منطق المنتج قبل مرحلة UI',
        description:
          'مناسب عندما لا تزال الأدوار والسيناريوهات وبنية الشاشات غير واضحة وتحتاج إلى أساس هيكلي واضح.',
        bestForLabel: 'مناسب لـ',
        bestForValue: 'Discovery، product framing، الأنظمة الرقمية المعقدة',
        resultLabel: 'النتيجة',
        resultValue: 'Product Structure Package',
      },
      {
        title: 'تحتاج إلى prototype أقوى وتسليم أوضح',
        description:
          'مناسب عندما تكون البنية واضحة بالفعل ويحتاج المشروع إلى طبقة بصرية وحالات رئيسية واستعداد أفضل للتطوير.',
        bestForLabel: 'مناسب لـ',
        bestForValue: 'المرحلة الجاهزة للتنفيذ، التسليم للعميل، handoff للتطوير',
        resultLabel: 'النتيجة',
        resultValue: 'Prototype + Handoff Package',
      },
    ],
  },
}

const DELIVERABLES_PREVIEW_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'deliverablesPreviewPricing',
    eyebrow: 'Состав работ',
    title: 'Что входит в каждый формат работы',
    description:
      'Каждый артефакт — готовый к использованию материал, а не промежуточный набросок. Реальные документы для продуктовой работы и передачи в разработку.',
    layoutVariant: 'visuals',
    topLinkLabel: 'Посмотреть концепты',
    topLinkPageKey: 'concepts',
    items: [
      {
        name: 'Структура проекта',
        subtitle: 'Фиксирует цели, ограничения и приоритеты',
        visual: 'structure',
      },
      {
        name: 'Пользовательские сценарии',
        subtitle: 'Показывает ключевые сценарии и точки перехода',
        visual: 'scenarios',
      },
      {
        name: 'Экранная карта продукта',
        subtitle: 'Собирает логику экранов в единую систему',
        visual: 'screen-map',
      },
      {
        name: 'Интерактивный прототип',
        subtitle: 'Даёт visual preview будущего продукта',
        visual: 'prototype',
      },
      {
        name: 'Базовая система компонентов',
        subtitle: 'Задаёт основу интерфейсной системы',
        visual: 'design-system',
      },
      {
        name: 'Материалы для передачи в разработку',
        subtitle: 'Помогает команде перейти к разработке',
        visual: 'dev-materials',
      },
    ],
    footerNote: 'Это реальные, серьёзные материалы — не просто наборы слайдов.',
    footerLinkLabel: 'Получить предложение',
    footerLinkPageKey: 'get-proposal',
  },
  en: {
    blockType: 'deliverablesPreviewPricing',
    eyebrow: 'Deliverables',
    title: 'What clients receive',
    description:
      'Every format includes tangible outputs — not just concepts, but materials that support the next stage of work.',
    layoutVariant: 'simple',
    items: [
      {
        name: 'Project Structure',
        subtitle: 'Captures goals, constraints, and priorities',
      },
      {
        name: 'User Flows',
        subtitle: 'Shows critical user paths and transitions',
      },
      {
        name: 'Screen Matrix',
        subtitle: 'Organizes screen logic into one system',
      },
      {
        name: 'Clickable Prototype',
        subtitle: 'Makes the product tangible before development',
      },
      {
        name: 'Basic Component System',
        subtitle: 'Sets the foundation for interface consistency',
      },
      {
        name: 'Materials for Development',
        subtitle: 'Helps move cleanly into development',
      },
    ],
    footerLinkLabel: 'See all solutions and formats',
    footerLinkPageKey: 'solutions',
  },
  ar: {
    blockType: 'deliverablesPreviewPricing',
    eyebrow: 'المخرجات',
    title: 'ما الذي يحصل عليه العميل',
    description:
      'كل صيغة تتضمن مخرجات ملموسة — ليست مجرد مفاهيم، بل مواد تدعم المرحلة التالية من العمل.',
    layoutVariant: 'simple',
    items: [
      {
        name: 'هيكل المشروع',
        subtitle: 'يوضح الأهداف والقيود والأولويات',
      },
      {
        name: 'مسارات المستخدم',
        subtitle: 'يبين المسارات الرئيسية ونقاط الانتقال',
      },
      {
        name: 'مصفوفة الشاشات',
        subtitle: 'يجمع الشاشات في نظام منتج واحد',
      },
      {
        name: 'نموذج أولي قابل للنقر',
        subtitle: 'يجعل المنتج ملموساً قبل التطوير',
      },
      {
        name: 'نظام مكونات أساسي',
        subtitle: 'يدعم اتساق الواجهة',
      },
      {
        name: 'مواد التسليم للتطوير',
        subtitle: 'يسهل الانتقال المنظم إلى التطوير',
      },
    ],
    footerLinkLabel: 'اطلع على جميع الحلول والصيغ',
    footerLinkPageKey: 'solutions',
  },
}

const PRICE_EXPLANATION_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'priceExplanationPricing',
    eyebrow: 'Почему так',
    title: 'Почему это стоит столько',
    description:
      'Atelier Meridian стоит ниже крупных агентств не потому, что делает меньше, а потому что работает без лишних накладных расходов.',
    descriptionSecondary:
      'Premium-результат с более рациональной моделью работы. Быстрее за счёт структуры, а не компромисса по качеству.',
    quote:
      '«Мы не продаём часы. Мы продаём результат — структурированный продукт, готовый к следующему этапу.»',
    points: [
      {
        title: 'Опытный специалист ведёт проект',
        description: 'Работу ведёт senior, а не джуниор под присмотром',
      },
      {
        title: 'Ускоренные внутренние процессы',
        description: 'AI-assisted workflow без потери качества',
      },
      {
        title: 'Структурированные форматы работы',
        description: 'Понятные packages вместо размытого почасового биллинга',
      },
      {
        title: 'Без лишних слоёв',
        description: 'Прямая работа без account-менеджеров и промежуточных согласований',
      },
      {
        title: 'Быстрая итерация',
        description: 'Скорость за счёт структуры, а не компромисса по качеству',
      },
    ],
  },
  en: {
    blockType: 'priceExplanationPricing',
    eyebrow: 'Why it is priced this way',
    title: 'Premium and efficient',
    description:
      'Atelier Meridian is more efficient than a traditional layered agency model because the work is senior-led, AI-accelerated internally, and structured into focused delivery formats.',
    descriptionSecondary:
      'This is not about being cheap. It is about delivering premium output with a more rational working model.',
    quote:
      '"We do not sell hours. We sell results — a structured product ready for the next stage."',
    points: [
      {
        title: 'Senior-level product thinking',
        description: 'Work is led by a senior, not a junior under supervision',
      },
      {
        title: 'Fewer layers and less overhead',
        description: 'Direct work without account managers or intermediate approvals',
      },
      {
        title: 'AI-accelerated internal workflow',
        description: 'Faster delivery without compromising quality',
      },
      {
        title: 'Structured sprints',
        description: 'Clear packages instead of vague hourly billing',
      },
      {
        title: 'Premium output, efficient model',
        description: 'Speed through structure, not through shortcuts',
      },
    ],
  },
  ar: {
    blockType: 'priceExplanationPricing',
    eyebrow: 'لماذا تم تسعير العمل بهذه الطريقة',
    title: 'متميز وفعّال',
    description:
      'يعمل Atelier Meridian بكفاءة أعلى من نموذج الوكالة التقليدية متعدد الطبقات، لأن العمل يقاد بخبرة senior، ويدار داخلياً بأسلوب أكثر مرونة، ويقدَّم ضمن صيغ مركزة وواضحة.',
    descriptionSecondary:
      'هذا ليس عن أن نكون رخيصين. بل عن تقديم مخرجات متميزة بنموذج عمل أكثر عقلانية.',
    quote:
      '"نحن لا نبيع ساعات. نبيع نتائج — منتج منظم جاهز للمرحلة التالية."',
    points: [
      {
        title: 'تفكير منتجي على مستوى senior',
        description: 'العمل يقوده خبير متمرس، وليس مبتدئاً تحت إشراف',
      },
      {
        title: 'طبقات تشغيل أقل وفعالية أعلى',
        description: 'عمل مباشر من دون مديري حسابات أو موافقات وسيطة',
      },
      {
        title: 'عمل منظم على شكل sprints',
        description: 'حزم واضحة بدلاً من فوترة ساعات غامضة',
      },
      {
        title: 'مخرجات متميزة بنموذج تنفيذ أكثر كفاءة',
        description: 'سرعة من خلال الهيكلة، وليس من خلال الاختصارات',
      },
    ],
  },
}

const NO_CALL_CTA_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'noCallCtaPricing',
    title: 'Не хотите начинать с созвона?',
    description:
      'Это нормально. Большинство проектов можно начать асинхронно: вы присылаете задачу, контекст и ссылки, а мы возвращаем формат работы и ориентир по scope.',
    descriptionSecondary:
      'Без обязательной встречи на старте. Сначала — ясность по задаче, потом уже созвон, если он действительно нужен.',
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Написать вместо созвона',
    secondaryPageKey: 'contact',
    footerNote:
      'Подходит для founders, product teams, partners и всех, кто хочет сначала получить понятный ответ в письменном виде.',
    benefits: [
      {
        label: 'Можно начать с brief, заметок или даже rough context',
      },
      {
        label: 'Мы сами структурируем входящие данные и предложим формат работы',
      },
      {
        label: 'Созвон подключаем только там, где он действительно ускоряет процесс',
      },
    ],
  },
  en: {
    blockType: 'noCallCtaPricing',
    title: "Don't want to start with a call?",
    description:
      "That's completely fine. Most projects can begin asynchronously: you send the brief, context, and links, and we reply with the suggested format and scope direction.",
    descriptionSecondary:
      'No mandatory intro call. First — clarity on the task. Then a call only if it genuinely helps.',
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Write Instead of a Call',
    secondaryPageKey: 'contact',
    footerNote:
      'Useful for founders, product teams, and partners who prefer to get a clear written answer before scheduling anything.',
    benefits: [
      {
        label: 'You can start from a brief, notes, or rough context',
      },
      {
        label: 'We structure the input and suggest the right working format',
      },
      {
        label: 'A call is added only when it genuinely speeds things up',
      },
    ],
  },
  ar: {
    blockType: 'noCallCtaPricing',
    title: 'لا تريد أن تبدأ بمكالمة؟',
    description:
      'هذا طبيعي تماماً. يمكن بدء معظم المشاريع بشكل غير متزامن: ترسل brief والسياق والروابط، ونعود إليك بصيغة العمل المقترحة واتجاه النطاق.',
    descriptionSecondary:
      'لا توجد مكالمة إلزامية في البداية. أولاً نفهم المهمة بوضوح، ثم نضيف مكالمة فقط إذا كانت مفيدة فعلاً.',
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اكتب بدلاً من المكالمة',
    secondaryPageKey: 'contact',
    footerNote:
      'مناسب للمؤسسين وفرق المنتج والشركاء الذين يفضّلون الحصول على رد واضح مكتوب قبل جدولة أي مكالمة.',
    benefits: [
      {
        label: 'يمكنك البدء من brief أو ملاحظات أو حتى سياق أولي بسيط',
      },
      {
        label: 'نقوم نحن بتنظيم المدخلات واقتراح صيغة العمل الأنسب',
      },
      {
        label: 'لا نضيف مكالمة إلا إذا كانت ستسرّع العملية فعلاً',
      },
    ],
  },
}

const FAQ_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'faqPricing',
    eyebrow: 'FAQ',
    title: 'Частые вопросы по стоимости и формату работы',
    description:
      'Коротко о том, как формируется цена, что влияет на scope и как устроен старт проекта.',
    items: [
      {
        question: 'Это фиксированные цены или ориентиры?',
        answer:
          'Это стартовые ориентиры по типовым форматам. Финальная стоимость зависит от объёма, сложности, количества ролей, состояния продукта и требуемого уровня детализации.',
      },
      {
        question: 'Что сильнее всего влияет на стоимость?',
        answer:
          'Больше всего на цену влияют: объём продукта, сложность сценариев, количество экранов и состояний, необходимость в prototype, а также степень готовности входных материалов.',
      },
      {
        question: 'Можно ли прийти без чёткого scope?',
        answer:
          'Да. Это нормальный сценарий. Мы помогаем прояснить scope на старте и предложим подходящий формат работы под ваш этап.',
      },
      {
        question: 'Можно ли начать с маленького этапа, а потом расширить?',
        answer:
          'Да. Часто работа начинается с concept или structure stage, а затем расширяется до prototype и handoff, когда появляется ясность по продукту.',
      },
      {
        question: 'Считаете ли вы по часам?',
        answer:
          'Нет, базово мы работаем пакетами и этапами. Это даёт более предсказуемый результат и убирает размытость, которая часто бывает в почасовой модели.',
      },
      {
        question: 'Подходит ли это для партнёров и white-label работы?',
        answer:
          'Да. Эти же форматы подходят для partners, agencies, integrators и white-label collaboration, если нужно усилить delivery без расширения штата.',
      },
      {
        question: 'Что происходит после заявки?',
        answer:
          'Вы присылаете brief или контекст, мы смотрим задачу, уточняем scope и возвращаем предложенный формат, ориентир по срокам и следующий шаг.',
      },
      {
        question: 'Нужен ли созвон перед стартом?',
        answer:
          'Не обязательно. Часто достаточно письменного контекста. Созвон нужен только там, где он действительно ускоряет понимание задачи.',
      },
    ],
  },
  en: {
    blockType: 'faqPricing',
    eyebrow: 'FAQ',
    title: 'Frequently asked questions about pricing and working format',
    description:
      'A quick explanation of how pricing is shaped, what affects scope, and how projects usually start.',
    items: [
      {
        question: 'Are these fixed prices or starting ranges?',
        answer:
          'These are starting ranges for typical engagement formats. Final pricing depends on scope, complexity, number of roles, current product state, and required level of detail.',
      },
      {
        question: 'What affects pricing the most?',
        answer:
          'The main factors are product size, scenario complexity, number of screens and states, whether a prototype is needed, and how structured the input materials already are.',
      },
      {
        question: 'Can we come without a clearly defined scope?',
        answer:
          'Yes. This is a common case. We can help clarify the scope and suggest the right engagement format for your current stage.',
      },
      {
        question: 'Can we start with a smaller stage and expand later?',
        answer:
          'Yes. Many projects start with concept or structure work and then expand into prototype and handoff once the product direction becomes clearer.',
      },
      {
        question: 'Do you bill by the hour?',
        answer:
          'Not by default. We usually work through defined packages and stages, because that creates a more predictable result than a vague hourly model.',
      },
      {
        question: 'Does this work for partners and white-label delivery?',
        answer:
          'Yes. The same formats also work for partners, agencies, integrators, and white-label collaboration when delivery needs to be strengthened without growing internal headcount.',
      },
      {
        question: 'What happens after I submit a request?',
        answer:
          'You send the brief or context, we review the task, clarify the scope, and return the suggested format, timeline range, and next step.',
      },
      {
        question: 'Is a call required before starting?',
        answer:
          'Not always. Written context is often enough. A call is used only when it truly helps speed up understanding.',
      },
    ],
  },
  ar: {
    blockType: 'faqPricing',
    eyebrow: 'الأسئلة الشائعة',
    title: 'أسئلة متكررة حول التسعير وصيغة العمل',
    description:
      'شرح سريع لكيفية تحديد السعر، وما الذي يؤثر على النطاق، وكيف تبدأ المشاريع عادة.',
    items: [
      {
        question: 'هل هذه أسعار ثابتة أم نطاقات بداية؟',
        answer:
          'هذه نطاقات بداية لصيغ العمل المعتادة. السعر النهائي يعتمد على حجم النطاق، وتعقيد المنتج، وعدد الأدوار، وحالة المنتج الحالية، ومستوى التفصيل المطلوب.',
      },
      {
        question: 'ما الذي يؤثر أكثر على السعر؟',
        answer:
          'أكثر ما يؤثر على السعر هو حجم المنتج، وتعقيد السيناريوهات، وعدد الشاشات والحالات، والحاجة إلى prototype، ومدى تنظيم المواد الأولية.',
      },
      {
        question: 'هل يمكن أن نبدأ من دون نطاق واضح تماماً؟',
        answer:
          'نعم. هذا سيناريو شائع. يمكننا المساعدة في توضيح النطاق في البداية واقتراح الصيغة الأنسب لمرحلتك الحالية.',
      },
      {
        question: 'هل يمكن أن نبدأ بمرحلة صغيرة ثم نتوسع لاحقاً؟',
        answer:
          'نعم. كثير من المشاريع تبدأ بمرحلة concept أو structure ثم تتوسع لاحقاً إلى prototype وhandoff عندما يصبح اتجاه المنتج أوضح.',
      },
      {
        question: 'هل تعتمدون على التسعير بالساعة؟',
        answer:
          'ليس بشكل افتراضي. نحن نعمل عادة من خلال حزم ومراحل واضحة، لأن ذلك يعطي نتيجة أكثر قابلية للتنبؤ من نموذج الساعات المفتوح.',
      },
      {
        question: 'هل هذا مناسب للشركاء والعمل بنظام white-label؟',
        answer:
          'نعم. الصيغ نفسها مناسبة أيضاً للشركاء والوكالات والـ integrators والعمل بنظام white-label عندما تكون الحاجة إلى تقوية delivery من دون توسيع الفريق الداخلي.',
      },
      {
        question: 'ماذا يحدث بعد إرسال الطلب؟',
        answer:
          'ترسل brief أو سياق المشروع، ونراجع المهمة، ونوضح النطاق، ثم نعود إليك بصيغة العمل المقترحة، والنطاق الزمني المتوقع، والخطوة التالية.',
      },
      {
        question: 'هل المكالمة مطلوبة قبل البداية؟',
        answer:
          'ليس دائماً. غالباً ما يكفي السياق المكتوب. نستخدم المكالمة فقط عندما تساعد فعلاً على تسريع الفهم.',
      },
    ],
  },
}

const FINAL_CTA_PRICING_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'finalCtaPricing',
    eyebrow: 'Следующий шаг',
    title: 'Закажите дизайн сайта, системы или приложения',
    description:
      'Опишите проект — сайт, портал, B2B-платформу или mobile app. Мы предложим формат, сроки и стоимость.',
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'На главную',
    secondaryPageKey: 'home',
    footerNote: 'Для сайтов · Digital-систем · Порталов · Mobile apps',
  },
  en: {
    blockType: 'finalCtaPricing',
    eyebrow: 'Next step',
    title: 'Ready to discuss your project?',
    description:
      'Describe your project — a website, portal, B2B platform, or mobile app. We will recommend the format, timeline, and starting price.',
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Back to Home',
    secondaryPageKey: 'home',
    footerNote: 'For websites · Digital systems · Portals · Mobile apps',
  },
  ar: {
    blockType: 'finalCtaPricing',
    eyebrow: 'الخطوة التالية',
    title: 'هل أنت جاهز لمناقشة مشروعك؟',
    description:
      'صِف مشروعك — موقع أو بوابة أو منصة B2B أو تطبيق جوال. سنقترح عليك الصيغة والجدول الزمني ونقطة بداية السعر.',
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'العودة للرئيسية',
    secondaryPageKey: 'home',
    footerNote: 'للمواقع · الأنظمة الرقمية · البوابات · تطبيقات الجوال',
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

async function getPricingPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: 'pricing',
      },
    },
    limit: 1,
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  return result.docs[0] ?? null
}

async function ensurePricingPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const existing = await getPricingPage(payload)

  if (existing) {
    return existing
  }

  return payload.create({
    collection: 'pages',
    locale: 'ru',
    depth: 0,
    data: {
      pageKey: 'pricing',
      internalName: 'pricing',
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

  const homePage = await ensurePricingPage(payload)

    await seedBlockForLocale(payload, homePage.id, 'ru', HERO_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', HERO_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', HERO_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', POSITIONING_BLOCK_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', POSITIONING_BLOCK_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', POSITIONING_BLOCK_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', PACKAGE_CARDS_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', PACKAGE_CARDS_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', PACKAGE_CARDS_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', CHOOSING_GUIDE_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', CHOOSING_GUIDE_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', CHOOSING_GUIDE_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', DELIVERABLES_PREVIEW_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', DELIVERABLES_PREVIEW_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', DELIVERABLES_PREVIEW_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', PRICE_EXPLANATION_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', PRICE_EXPLANATION_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', PRICE_EXPLANATION_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', NO_CALL_CTA_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', NO_CALL_CTA_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', NO_CALL_CTA_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', FAQ_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', FAQ_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', FAQ_PRICING_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', FINAL_CTA_PRICING_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', FINAL_CTA_PRICING_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', FINAL_CTA_PRICING_SEED.ar)


  console.log('✅ Pricing page seed completed')
  process.exit(0)
}

main().catch((error) => {
  console.error('❌ Pricing page seed failed')
  console.error(error)
  process.exit(1)
})