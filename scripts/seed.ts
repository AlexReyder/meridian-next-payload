import 'dotenv/config'

import config from '@payload-config'
import { getPayload } from 'payload'

type Locale = 'ru' | 'en' | 'ar'
type BlockData = Record<string, any>

const STARTUPS_PAGE_KEY = 'concepts'

// const CTA_CONCEPTS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'ctaConcepts',
//     title: 'Хотите такой же уровень проработки для своего проекта?',
//     description:
//       'Опишите задачу — мы предложим подходящий формат работы, ориентир по срокам и следующий шаг.',
//     primaryButtonLabel: 'Получить предложение',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'Посмотреть цены',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Подходит для сайтов, digital-систем, client portals, dashboards, startup landing pages и mobile apps.',
//   },
//   en: {
//     blockType: 'ctaConcepts',
//     title: 'Want this level of clarity and presentation for your project?',
//     description:
//       'Tell us what you are building, and we will recommend the right format, timeline range, and next step.',
//     primaryButtonLabel: 'Get Proposal',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'View Pricing',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'Suitable for websites, digital systems, client portals, dashboards, startup landing pages, and mobile apps.',
//   },
//   ar: {
//     blockType: 'ctaConcepts',
//     title: 'هل تريد هذا المستوى من الوضوح والعرض لمشروعك؟',
//     description:
//       'أخبرنا بما تعمل عليه، وسنقترح عليك الصيغة المناسبة للعمل، والنطاق الزمني المتوقع، والخطوة التالية.',
//     primaryButtonLabel: 'اطلب عرضاً',
//     primaryPageKey: 'get-proposal',
//     secondaryButtonLabel: 'اطلع على الأسعار',
//     secondaryPageKey: 'pricing',
//     footerNote:
//       'مناسب للمواقع، والأنظمة الرقمية، وبوابات العملاء، ولوحات التحكم، وصفحات الشركات الناشئة، وتطبيقات الجوال.',
//   },
// }
// const WHY_CONCEPTS_SEED: Record<Locale, BlockData> = {
//   ru: {
//     blockType: 'whyConcepts',
//     eyebrow: 'Зачем это важно',
//     title: 'Зачем мы показываем студийные концепты',
//     description:
//       'Студийные концепты позволяют показать не только визуальный уровень, но и способ мышления. Они помогают увидеть, как мы собираем продукт из целей, ролей, сценариев, экранной структуры и interface-направления ещё до начала разработки.',
//     items: [
//       {
//         icon: 'search',
//         title: 'Показывают глубину проработки',
//         description:
//           'Каждый концепт содержит продуктовую логику, сценарии и структуру — не только визуальную подачу.',
//       },
//       {
//         icon: 'layers',
//         title: 'Демонстрируют продуктовую логику',
//         description:
//           'Роли, workflow, экранная архитектура и приоритеты — то, что стоит за каждым интерфейсом.',
//       },
//       {
//         icon: 'monitor',
//         title: 'Помогают понять уровень интерфейсной подачи',
//         description:
//           'Визуальное качество, типографика, spacing и внимание к деталям определяют восприятие продукта.',
//       },
//       {
//         icon: 'fileText',
//         title: 'Дают представление о том, что получает клиент',
//         description:
//           'Prototype, структура, visual direction и материалы для передачи в разработку.',
//       },
//     ],
//   },
//   en: {
//     blockType: 'whyConcepts',
//     eyebrow: 'Why This Matters',
//     title: 'Why we show studio concepts',
//     description:
//       'Studio concepts show more than visual taste. They show how we think — how we turn goals, roles, user flows, screen structure, and interface direction into a coherent product story before development begins.',
//     items: [
//       {
//         icon: 'search',
//         title: 'They show the depth of thinking',
//         description:
//           'Each concept contains product logic, scenarios, and structure — not just visual presentation.',
//       },
//       {
//         icon: 'layers',
//         title: 'They demonstrate product logic',
//         description:
//           'Roles, workflows, screen architecture, and priorities — what stands behind every interface.',
//       },
//       {
//         icon: 'monitor',
//         title: 'They reveal interface quality',
//         description:
//           'Visual quality, typography, spacing, and attention to detail define the perception of the product.',
//       },
//       {
//         icon: 'fileText',
//         title: 'They make the outputs more tangible',
//         description:
//           'Prototype, structure, visual direction, and materials for development handoff.',
//       },
//     ],
//   },
//   ar: {
//     blockType: 'whyConcepts',
//     eyebrow: 'لماذا هذا مهم',
//     title: 'لماذا نعرض مفاهيم الاستوديو',
//     description:
//       'مفاهيم الاستوديو لا تُظهر المستوى البصري فقط، بل تُظهر أيضاً طريقة التفكير. فهي تساعد على فهم كيف نجمع المنتج من الأهداف، والأدوار، ومسارات المستخدم، وهيكل الشاشات، واتجاه الواجهة قبل بدء التطوير.',
//     items: [
//       {
//         icon: 'search',
//         title: 'تُظهر عمق التفكير',
//         description:
//           'كل concept يتضمن منطق المنتج، والسيناريوهات، والهيكل — وليس العرض البصري فقط.',
//       },
//       {
//         icon: 'layers',
//         title: 'تُظهر منطق المنتج',
//         description:
//           'الأدوار، ومسارات العمل، وهيكل الشاشات، والأولويات — كل ما يقف خلف كل واجهة.',
//       },
//       {
//         icon: 'monitor',
//         title: 'تكشف مستوى جودة الواجهة',
//         description:
//           'الجودة البصرية، والطباعة، والمسافات، والانتباه للتفاصيل — كلها تحدد كيفية إدراك المنتج.',
//       },
//       {
//         icon: 'fileText',
//         title: 'تجعل المخرجات أكثر وضوحاً',
//         description:
//           'النموذج الأولي، والهيكل، والاتجاه البصري، ومواد التسليم للتطوير.',
//       },
//     ],
//   },
// }

const NAV_CONCEPTS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'navConcepts',
    label: 'Концепты:',
    items: [
      { anchorId: 'b2b-platform', shortLabel: 'B2B-платформа', number: '01' },
      { anchorId: 'mobile-app', shortLabel: 'Мобильное приложение', number: '02' },
      { anchorId: 'client-portal', shortLabel: 'Клиентский портал', number: '03' },
      { anchorId: 'b2b-website', shortLabel: 'Корпоративный сайт', number: '04' },
      { anchorId: 'startup-landing', shortLabel: 'Startup landing', number: '05' },
      { anchorId: 'saas-interface', shortLabel: 'SaaS-интерфейс', number: '06' },
      { anchorId: 'booking-platform', shortLabel: 'Booking interface', number: '07' },
    ],
  },
  en: {
    blockType: 'navConcepts',
    label: 'Concepts:',
    items: [
      { anchorId: 'b2b-platform', shortLabel: 'B2B Platform', number: '01' },
      { anchorId: 'mobile-app', shortLabel: 'Mobile App', number: '02' },
      { anchorId: 'client-portal', shortLabel: 'Client Portal', number: '03' },
      { anchorId: 'b2b-website', shortLabel: 'B2B Website', number: '04' },
      { anchorId: 'startup-landing', shortLabel: 'Startup Landing', number: '05' },
      { anchorId: 'saas-interface', shortLabel: 'SaaS Interface', number: '06' },
      { anchorId: 'booking-platform', shortLabel: 'Booking Platform', number: '07' },
    ],
  },
  ar: {
    blockType: 'navConcepts',
    label: 'المفاهيم:',
    items: [
      { anchorId: 'b2b-platform', shortLabel: 'منصة B2B', number: '٠١' },
      { anchorId: 'mobile-app', shortLabel: 'تطبيق جوال', number: '٠٢' },
      { anchorId: 'client-portal', shortLabel: 'بوابة العميل', number: '٠٣' },
      { anchorId: 'b2b-website', shortLabel: 'موقع B2B', number: '٠٤' },
      { anchorId: 'startup-landing', shortLabel: 'Landing للشركات الناشئة', number: '٠٥' },
      { anchorId: 'saas-interface', shortLabel: 'واجهة SaaS', number: '٠٦' },
      { anchorId: 'booking-platform', shortLabel: 'منصة حجز', number: '٠٧' },
    ],
  },
}

const CONCEPT_SECTION_CONCEPT_SEED: Record<Locale, BlockData[]> = {
  ru: [
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'b2b-platform',
      sectionNumber: '01',
      categoryLabel: 'ДИЗАЙН B2B-СИСТЕМ',
      title: 'B2B-платформа и внутренняя система',
      intro: 'Концепт для сложной операционной среды, где важно собрать workflow, роли, статусы и логику работы команды в одну понятную digital-систему.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-nfjB6TIcpHm2krsv9QxEOV6JqBP6jO.png',
      challengeLabel: 'Задача',
      challenge: 'Собрать в единую digital-систему сложный операционный workflow с несколькими ролями, сценариями согласования и dashboard-логикой.',
      structuredLabel: 'Что структурировали',
      structured: 'Роли и права доступа, ключевые пользовательские сценарии, экранную карту продукта, логику модулей и повседневные сценарии работы команды.',
      deliveredLabel: 'Что подготовили',
      delivered: 'Premium prototype, визуальную систему интерфейсов, структуру ключевых экранов и материалы для передачи в разработку.',
      suitableForLabel: 'Подходит для:',
      suitableFor: 'B2B-платформ, внутренних систем, operational tools и complex admin interfaces.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Получить предложение',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'mobile-app',
      sectionNumber: '02',
      categoryLabel: 'ДИЗАЙН МОБИЛЬНЫХ ПРИЛОЖЕНИЙ',
      title: 'Дизайн мобильного приложения',
      intro: 'Концепт mobile-first продукта, собранный так, чтобы его можно было показать инвестору, использовать в pitch или взять как основу для следующего этапа разработки.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-WPXYUHUvoGBadJ6HNUNIFKIWraf70B.png',
      challengeLabel: 'Задача',
      challenge: 'Упаковать fintech-продукт в понятный mobile-first формат, который можно показать инвесторам и использовать как основу для следующего этапа product delivery.',
      structuredLabel: 'Что структурировали',
      structured: 'Пользовательские сценарии, onboarding flow, логику финансовых экранов, приоритетные модули и структуру mobile app.',
      deliveredLabel: 'Что подготовили',
      delivered: 'Investor-ready prototype, визуальное направление, ключевые экраны приложения и материалы для следующего этапа разработки.',
      suitableForLabel: 'Подходит для:',
      suitableFor: 'Mobile apps, MVP, investor-ready concept и redesign мобильных продуктов.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'Получить предложение',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'client-portal',
      sectionNumber: '03',
      categoryLabel: 'PORTAL & DASHBOARD DESIGN',
      title: 'Клиентский портал и dashboard',
      intro: 'Концепт сервиса, где сложный процесс превращён в понятный client portal с прозрачной навигацией, статусами, workflow-логикой и role-based структурой.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%20%D0%B8%20dashboard-JlI8wKPt6UWq4rRVcyFQXwBsL2XAHb.png',
      challengeLabel: 'Задача',
      challenge: 'Превратить сложный сервисный процесс в понятный client portal с прозрачной навигацией, workflow-логикой и role-based структурой.',
      structuredLabel: 'Что структурировали',
      structured: 'Архитектуру portal, пользовательские сценарии, статусы сервисных запросов, экранную матрицу и ключевые точки взаимодействия.',
      deliveredLabel: 'Что подготовили',
      delivered: 'Структуру интерфейсов, prototype ключевых экранов, UI-направление и пакет материалов для передачи в разработку.',
      suitableForLabel: 'Подходит для:',
      suitableFor: 'Service portals, account areas, dashboards и внутренних сервисных интерфейсов.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Получить предложение',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'b2b-website',
      sectionNumber: '04',
      categoryLabel: 'ДИЗАЙН САЙТОВ',
      title: 'Корпоративный сайт для B2B-компании',
      intro: 'Концепт корпоративного сайта, который помогает premium B2B-компании ясно объяснить сложный сервис, усилить доверие и сделать первый контакт с брендом более убедительным.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-6RgbOJ9HFWZMTpHDeV3gRjnxMU9UZF.png',
      challengeLabel: 'Задача',
      challenge: 'Создать корпоративный сайт, который выглядит premium, ясно объясняет сложный сервис и усиливает доверие к компании на этапе первого контакта.',
      structuredLabel: 'Что структурировали',
      structured: 'Архитектуру сайта, иерархию смысловых блоков, логику ключевых страниц, сценарии навигации и подачу сложного B2B-предложения.',
      deliveredLabel: 'Что подготовили',
      delivered: 'Визуальную концепцию сайта, структуру основных страниц, UI-систему для web-интерфейса и материалы для передачи в разработку.',
      suitableForLabel: 'Подходит для:',
      suitableFor: 'B2B-компаний, integrators, outsourcing-команд, технологических сервисов и premium corporate websites.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'Получить предложение',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'startup-landing',
      sectionNumber: '05',
      categoryLabel: 'STARTUP WEBSITE DESIGN',
      title: 'Investor-ready landing page для startup-продукта',
      intro: 'Концепт landing page для раннего продукта, собранный так, чтобы идею было проще объяснить инвестору, партнёру и первым пользователям.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-b85KxA9lUQySVtGgn38fMd2GX2STAN.png',
      challengeLabel: 'Задача',
      challenge: 'Упаковать ранний продукт в landing page, который помогает быстро объяснить идею, ценность и сценарий продукта инвестору, партнёру или первым клиентам.',
      structuredLabel: 'Что структурировали',
      structured: 'Логику первого экрана, narrative продукта, порядок смысловых блоков, ключевые proof points и визуальную подачу startup-концепции.',
      deliveredLabel: 'Что подготовили',
      delivered: 'Landing page concept, структуру сайта, визуальное направление и набор ключевых экранов для запуска или презентации.',
      suitableForLabel: 'Подходит для:',
      suitableFor: 'Startup-сайтов, pre-seed / seed продуктов, launch pages, investor presentation и early-stage positioning.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Получить предложение',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'saas-interface',
      sectionNumber: '06',
      categoryLabel: 'WEB PRODUCT DESIGN',
      title: 'SaaS-интерфейс для web-продукта',
      intro: 'Концепт интерфейса для web-продукта, где важно собрать сложную функциональность в понятную, масштабируемую и продуктово зрелую систему.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-ypxGBLA8NjWgvW2cxBxjUL68xoXEGf.png',
      challengeLabel: 'Задача',
      challenge: 'Собрать интерфейс web-продукта так, чтобы сложная функциональность выглядела понятно, современно и была готова к росту по модулям и ролям.',
      structuredLabel: 'Что структурировали',
      structured: 'Ключевые пользовательские сценарии, экранную архитектуру, продуктовые модули, приоритетные workflows и иерархию основных разделов.',
      deliveredLabel: 'Что подготовили',
      delivered: 'Prototype web-продукта, структуру ключевых экранов, базовую систему компонентов и материалы для передачи в разработку.',
      suitableForLabel: 'Подходит для:',
      suitableFor: 'SaaS, dashboards, web products, startup software и B2B digital tools.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'Получить предложение',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'booking-platform',
      sectionNumber: '07',
      categoryLabel: 'SERVICE PLATFORM DESIGN',
      title: 'Сервисная платформа / booking interface',
      intro: 'Концепт customer-facing платформы, где сложный сервис превращён в понятный поиск, выбор, booking flow и прозрачный путь пользователя.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-LmkTbFEVKsDBsJTHI6LSbVWUfH0eCy.png',
      challengeLabel: 'Задача',
      challenge: 'Превратить сложный клиентский сервис в понятный digital-продукт с прозрачным поиском, выбором, booking flow и личным кабинетом.',
      structuredLabel: 'Что структурировали',
      structured: 'Путь пользователя от выбора до бронирования, логику сервиса, ключевые точки принятия решения, статусы, экранную карту и сценарии повторного взаимодействия.',
      deliveredLabel: 'Что подготовили',
      delivered: 'Структуру платформы, prototype ключевых flows, UI-направление и материалы для следующего этапа продукта.',
      suitableForLabel: 'Подходит для:',
      suitableFor: 'Service marketplaces, booking platforms, customer portals и digital products with transaction flow.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Получить предложение',
      ctaPageKey: 'get-proposal',
    },
  ],

  en: [
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'b2b-platform',
      sectionNumber: '01',
      categoryLabel: 'B2B SYSTEM DESIGN',
      title: 'B2B Platform & Internal System',
      intro: 'A concept built for a complex operational environment where workflows, roles, approvals, and team logic need to come together inside one clear digital system.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-nfjB6TIcpHm2krsv9QxEOV6JqBP6jO.png',
      challengeLabel: 'Challenge',
      challenge: 'Turn a complex operational workflow into one coherent system with multiple user roles, approval paths, and dashboard logic.',
      structuredLabel: 'What We Structured',
      structured: 'Roles and permissions, key user flows, the product screen map, module logic, and the day-to-day scenarios the team needs to work through.',
      deliveredLabel: 'What We Prepared',
      delivered: 'A premium prototype, interface system direction, the structure of the key screens, and materials for development.',
      suitableForLabel: 'Suitable for:',
      suitableFor: 'B2B platforms, internal systems, operational tools, and complex admin interfaces.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Get Proposal',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'mobile-app',
      sectionNumber: '02',
      categoryLabel: 'MOBILE APP DESIGN',
      title: 'Mobile App Design',
      intro: 'A mobile-first concept shaped so it can be shown to investors, used in a pitch, or taken forward as a credible base for the next development stage.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-WPXYUHUvoGBadJ6HNUNIFKIWraf70B.png',
      challengeLabel: 'Challenge',
      challenge: 'Package a fintech product into a clear mobile-first format that can be shown to investors and used as the basis for the next delivery stage.',
      structuredLabel: 'What We Structured',
      structured: 'User flows, onboarding flow, the logic of the financial screens, priority modules, and the overall mobile app structure.',
      deliveredLabel: 'What We Prepared',
      delivered: 'An investor-ready prototype, visual direction, key app screens, and materials for the next stage of development.',
      suitableForLabel: 'Suitable for:',
      suitableFor: 'Mobile apps, MVPs, investor-ready concepts, and redesign of existing mobile products.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'Get Proposal',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'client-portal',
      sectionNumber: '03',
      categoryLabel: 'PORTAL & DASHBOARD DESIGN',
      title: 'Client Portal & Dashboard',
      intro: 'A service concept where a complex process is turned into a clear client portal with transparent navigation, status logic, workflow structure, and role-based access.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%20%D0%B8%20dashboard-JlI8wKPt6UWq4rRVcyFQXwBsL2XAHb.png',
      challengeLabel: 'Challenge',
      challenge: 'Turn a complex service process into a clear client portal with transparent navigation, workflow logic, and role-based structure.',
      structuredLabel: 'What We Structured',
      structured: 'The portal architecture, user scenarios, service request statuses, the screen matrix, and the key interaction points.',
      deliveredLabel: 'What We Prepared',
      delivered: 'The interface structure, a prototype of the key screens, UI direction, and a package of materials for development.',
      suitableForLabel: 'Suitable for:',
      suitableFor: 'Service portals, account areas, dashboards, and internal service interfaces.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Get Proposal',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'b2b-website',
      sectionNumber: '04',
      categoryLabel: 'WEBSITE DESIGN',
      title: 'Corporate Website for a B2B Company',
      intro: 'A corporate website concept designed to help a premium B2B company explain a complex service more clearly, build trust faster, and create a stronger first impression.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-6RgbOJ9HFWZMTpHDeV3gRjnxMU9UZF.png',
      challengeLabel: 'Challenge',
      challenge: 'Create a corporate website that looks premium, explains a complex service clearly, and strengthens trust at the first point of contact.',
      structuredLabel: 'What We Structured',
      structured: 'The site architecture, content hierarchy, key page logic, navigation paths, and the way a complex B2B offer is presented.',
      deliveredLabel: 'What We Prepared',
      delivered: 'A visual website concept, the structure of the main pages, a UI system for the web interface, and materials for development.',
      suitableForLabel: 'Suitable for:',
      suitableFor: 'B2B companies, integrators, outsourcing teams, technology services, and premium corporate websites.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'Get Proposal',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'startup-landing',
      sectionNumber: '05',
      categoryLabel: 'STARTUP WEBSITE DESIGN',
      title: 'Investor-Ready Landing Page for a Startup Product',
      intro: 'A landing page concept for an early-stage product, built to make the idea easier to explain to investors, partners, and early users.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-b85KxA9lUQySVtGgn38fMd2GX2STAN.png',
      challengeLabel: 'Challenge',
      challenge: 'Package an early-stage product into a landing page that quickly explains the idea, value, and core user logic to investors, partners, or early customers.',
      structuredLabel: 'What We Structured',
      structured: 'The first-screen logic, the product narrative, the order of the key content blocks, the main proof points, and the visual presentation of the startup concept.',
      deliveredLabel: 'What We Prepared',
      delivered: 'A landing page concept, site structure, visual direction, and a set of key screens for launch or presentation.',
      suitableForLabel: 'Suitable for:',
      suitableFor: 'Startup websites, pre-seed and seed products, launch pages, investor presentations, and early-stage positioning.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Get Proposal',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'saas-interface',
      sectionNumber: '06',
      categoryLabel: 'WEB PRODUCT DESIGN',
      title: 'SaaS Interface for a Web Product',
      intro: 'A web product concept where complex functionality is shaped into a clear, scalable, and product-mature interface system.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-ypxGBLA8NjWgvW2cxBxjUL68xoXEGf.png',
      challengeLabel: 'Challenge',
      challenge: 'Design a web product interface so that complex functionality feels clear, modern, and ready to scale across modules and user roles.',
      structuredLabel: 'What We Structured',
      structured: 'Key user flows, screen architecture, product modules, priority workflows, and the hierarchy of the main sections.',
      deliveredLabel: 'What We Prepared',
      delivered: 'A web product prototype, the structure of key screens, a basic component system, and materials for development.',
      suitableForLabel: 'Suitable for:',
      suitableFor: 'SaaS products, dashboards, web products, startup software, and B2B digital tools.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'Get Proposal',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'booking-platform',
      sectionNumber: '07',
      categoryLabel: 'SERVICE PLATFORM DESIGN',
      title: 'Service Platform / Booking Interface',
      intro: 'A customer-facing platform concept where a complex service is turned into clear search, selection, booking flow, and a more transparent customer journey.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-LmkTbFEVKsDBsJTHI6LSbVWUfH0eCy.png',
      challengeLabel: 'Challenge',
      challenge: 'Turn a complex customer service into a clear digital product with transparent search, selection, booking flow, and a user account area.',
      structuredLabel: 'What We Structured',
      structured: 'The customer journey from choice to booking, service logic, key decision points, statuses, the screen map, and repeat-use scenarios.',
      deliveredLabel: 'What We Prepared',
      delivered: 'The platform structure, a prototype of the key flows, UI direction, and materials for the next stage of product work.',
      suitableForLabel: 'Suitable for:',
      suitableFor: 'Service marketplaces, booking platforms, customer portals, and digital products with transaction flows.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'Get Proposal',
      ctaPageKey: 'get-proposal',
    },
  ],

  ar: [
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'b2b-platform',
      sectionNumber: '٠١',
      categoryLabel: 'تصميم أنظمة B2B',
      title: 'منصة B2B ونظام داخلي',
      intro: 'مفهوم صُمم لبيئة تشغيلية معقدة حيث يجب جمع سير العمل، والأدوار، والموافقات، ومنطق الفريق داخل نظام رقمي واضح واحد.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-nfjB6TIcpHm2krsv9QxEOV6JqBP6jO.png',
      challengeLabel: 'التحدي',
      challenge: 'تحويل سير عمل تشغيلي معقد إلى نظام واحد مترابط يضم أدوار مستخدمين متعددة ومسارات موافقة ومنطق dashboard.',
      structuredLabel: 'ما الذي قمنا بهيكلته',
      structured: 'الأدوار والصلاحيات، ومسارات المستخدم الأساسية، وخريطة الشاشات، ومنطق الوحدات، وسيناريوهات العمل اليومية للفريق.',
      deliveredLabel: 'ما الذي قمنا بإعداده',
      delivered: 'نموذج أولي عالي المستوى، واتجاه بصري للواجهة، وهيكل الشاشات الأساسية، ومواد للتطوير.',
      suitableForLabel: 'مناسب لـ:',
      suitableFor: 'منصات B2B، والأنظمة الداخلية، وأدوات التشغيل، وواجهات الإدارة المعقدة.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'اطلب عرضاً',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'mobile-app',
      sectionNumber: '٠٢',
      categoryLabel: 'تصميم تطبيقات الجوال',
      title: 'تصميم تطبيق جوال',
      intro: 'مفهوم mobile-first صُمم بحيث يمكن عرضه على المستثمرين، أو استخدامه في pitch، أو اعتماده كأساس موثوق للمرحلة التالية من التطوير.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-WPXYUHUvoGBadJ6HNUNIFKIWraf70B.png',
      challengeLabel: 'التحدي',
      challenge: 'صياغة منتج fintech ضمن إطار mobile-first واضح يمكن عرضه على المستثمرين واستخدامه كقاعدة للمرحلة التالية.',
      structuredLabel: 'ما الذي قمنا بهيكلته',
      structured: 'مسارات المستخدم، وonboarding، ومنطق الشاشات المالية، والوحدات ذات الأولوية، وهيكل التطبيق.',
      deliveredLabel: 'ما الذي قمنا بإعداده',
      delivered: 'نموذج أولي جاهز للمستثمرين، واتجاه بصري، والشاشات الأساسية، ومواد للمرحلة التالية من التطوير.',
      suitableForLabel: 'مناسب لـ:',
      suitableFor: 'تطبيقات الجوال، وMVP، والمفاهيم الجاهزة للمستثمرين، وإعادة تصميم المنتجات المحمولة.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'اطلب عرضاً',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'client-portal',
      sectionNumber: '٠٣',
      categoryLabel: 'تصميم البوابات ولوحات التحكم',
      title: 'بوابة العميل ولوحة التحكم',
      intro: 'مفهوم لخدمة تتحول فيها العملية المعقدة إلى بوابة عميل واضحة مع تنقل شفاف، ومنطق حالات، وهيكل workflow، ووصول مبني على الأدوار.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%20%D0%B8%20dashboard-JlI8wKPt6UWq4rRVcyFQXwBsL2XAHb.png',
      challengeLabel: 'التحدي',
      challenge: 'تحويل عملية خدمية معقدة إلى بوابة عميل واضحة مع تنقل شفاف ومنطق workflow وهيكل قائم على الأدوار.',
      structuredLabel: 'ما الذي قمنا بهيكلته',
      structured: 'معمارية البوابة، وسيناريوهات المستخدم، وحالات طلبات الخدمة، ومصفوفة الشاشات، ونقاط التفاعل الأساسية.',
      deliveredLabel: 'ما الذي قمنا بإعداده',
      delivered: 'هيكل الواجهة، ونموذج أولي للشاشات الأساسية، واتجاه UI، وحزمة مواد للتطوير.',
      suitableForLabel: 'مناسب لـ:',
      suitableFor: 'بوابات الخدمات، ومساحات الحسابات، ولوحات التحكم، وواجهات الخدمات الداخلية.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'اطلب عرضاً',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'b2b-website',
      sectionNumber: '٠٤',
      categoryLabel: 'تصميم المواقع',
      title: 'موقع مؤسسي لشركة B2B',
      intro: 'مفهوم لموقع مؤسسي يساعد شركة B2B متميزة على شرح خدمة معقدة بوضوح أكبر، وبناء الثقة بسرعة، وترك انطباع أول أقوى.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-6RgbOJ9HFWZMTpHDeV3gRjnxMU9UZF.png',
      challengeLabel: 'التحدي',
      challenge: 'إنشاء موقع مؤسسي يبدو premium ويشرح خدمة معقدة بوضوح ويعزز الثقة عند أول نقطة تواصل.',
      structuredLabel: 'ما الذي قمنا بهيكلته',
      structured: 'معمارية الموقع، وتسلسل المحتوى، ومنطق الصفحات الأساسية، ومسارات التنقل، وطريقة تقديم العرض المعقد.',
      deliveredLabel: 'ما الذي قمنا بإعداده',
      delivered: 'مفهوم بصري للموقع، وهيكل الصفحات الأساسية، ونظام UI للويب، ومواد للتطوير.',
      suitableForLabel: 'مناسب لـ:',
      suitableFor: 'شركات B2B، وintegrators، وفرق outsourcing، والخدمات التقنية، والمواقع المؤسسية المتميزة.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'اطلب عرضاً',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'startup-landing',
      sectionNumber: '٠٥',
      categoryLabel: 'تصميم مواقع الشركات الناشئة',
      title: 'Landing جاهز للمستثمرين لمنتج ناشئ',
      intro: 'مفهوم landing page لمنتج في مراحله المبكرة، صُمم لتسهيل شرح الفكرة للمستثمرين والشركاء والمستخدمين الأوائل.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-b85KxA9lUQySVtGgn38fMd2GX2STAN.png',
      challengeLabel: 'التحدي',
      challenge: 'صياغة منتج مبكر ضمن landing page يشرح الفكرة والقيمة ومنطق الاستخدام بسرعة للمستثمر أو الشريك أو العميل الأول.',
      structuredLabel: 'ما الذي قمنا بهيكلته',
      structured: 'منطق الشاشة الأولى، وسرد المنتج، وترتيب الأقسام الأساسية، وعناصر الإثبات، والتقديم البصري للمفهوم الناشئ.',
      deliveredLabel: 'ما الذي قمنا بإعداده',
      delivered: 'مفهوم landing page، وهيكل الموقع، والاتجاه البصري، ومجموعة الشاشات الأساسية للإطلاق أو العرض.',
      suitableForLabel: 'مناسب لـ:',
      suitableFor: 'مواقع الشركات الناشئة، ومنتجات pre-seed وseed، وصفحات الإطلاق، وعروض المستثمرين، والتموضع المبكر.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'اطلب عرضاً',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'saas-interface',
      sectionNumber: '٠٦',
      categoryLabel: 'تصميم منتجات الويب',
      title: 'واجهة SaaS لمنتج ويب',
      intro: 'مفهوم لواجهة web product حيث يتم جمع الوظائف المعقدة ضمن نظام واضح وقابل للتوسع وناضج من منظور المنتج.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-ypxGBLA8NjWgvW2cxBxjUL68xoXEGf.png',
      challengeLabel: 'التحدي',
      challenge: 'تصميم واجهة web product بحيث تبدو الوظائف المعقدة واضحة وحديثة وجاهزة للتوسع عبر الوحدات والأدوار.',
      structuredLabel: 'ما الذي قمنا بهيكلته',
      structured: 'مسارات المستخدم الأساسية، ومعمارية الشاشات، ووحدات المنتج، وworkflows ذات الأولوية، وتسلسل الأقسام الرئيسية.',
      deliveredLabel: 'ما الذي قمنا بإعداده',
      delivered: 'نموذج أولي لمنتج الويب، وهيكل الشاشات الأساسية، ونظام مكونات أساسي، ومواد للتطوير.',
      suitableForLabel: 'مناسب لـ:',
      suitableFor: 'منتجات SaaS، ولوحات التحكم، ومنتجات الويب، وبرمجيات الشركات الناشئة، وأدوات B2B الرقمية.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageRight',
      ctaLabel: 'اطلب عرضاً',
      ctaPageKey: 'get-proposal',
    },
    {
      blockType: 'conceptSectionConcept',
      anchorId: 'booking-platform',
      sectionNumber: '٠٧',
      categoryLabel: 'تصميم منصات الخدمات',
      title: 'منصة خدمة / واجهة حجز',
      intro: 'مفهوم لمنصة موجهة للعميل حيث تتحول الخدمة المعقدة إلى بحث واضح واختيار وتدفق حجز ورحلة مستخدم أكثر شفافية.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-LmkTbFEVKsDBsJTHI6LSbVWUfH0eCy.png',
      challengeLabel: 'التحدي',
      challenge: 'تحويل خدمة معقدة موجهة للعميل إلى منتج رقمي واضح مع بحث شفاف واختيار وتدفق حجز ومساحة حساب.',
      structuredLabel: 'ما الذي قمنا بهيكلته',
      structured: 'رحلة العميل من الاختيار إلى الحجز، ومنطق الخدمة، ونقاط القرار الأساسية، والحالات، وخريطة الشاشات، وسيناريوهات الاستخدام المتكرر.',
      deliveredLabel: 'ما الذي قمنا بإعداده',
      delivered: 'هيكل المنصة، ونموذج أولي للتدفقات الأساسية، واتجاه UI، ومواد للمرحلة التالية من العمل على المنتج.',
      suitableForLabel: 'مناسب لـ:',
      suitableFor: 'منصات الخدمات، ومنصات الحجز، وبوابات العملاء، والمنتجات الرقمية ذات التدفقات المعاملاتية.',
      captionLabel: 'Concept',
      captionStudioLabel: 'Atelier Meridian Studio',
      layout: 'imageLeft',
      ctaLabel: 'اطلب عرضاً',
      ctaPageKey: 'get-proposal',
    },
  ],
}
function upsertBlock(layout: BlockData[], block: BlockData): BlockData[] {
  const existingIndex = layout.findIndex((item) => item?.blockType === block?.blockType)

  if (existingIndex === -1) {
    return [...layout, block]
  }

  const nextLayout = [...layout]
  nextLayout[existingIndex] = {
    ...nextLayout[existingIndex],
    ...block,
  }

  return nextLayout
}

async function getStartupsPageId(
  payload: Awaited<ReturnType<typeof getPayload>>,
): Promise<string | number> {
  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: STARTUPS_PAGE_KEY,
      },
    },
    limit: 1,
    depth: 0,
  })

  const page = result.docs[0]

  if (!page) {
    throw new Error(`Page "${STARTUPS_PAGE_KEY}" not found`)
  }

  return page.id
}

async function getPageLayoutForLocale(
  payload: Awaited<ReturnType<typeof getPayload>>,
  pageId: string | number,
  locale: Locale,
): Promise<BlockData[]> {
  const page = await payload.findByID({
    collection: 'pages',
    id: pageId,
    locale,
    fallbackLocale: 'none',
    depth: 0,
  })

  return Array.isArray(page?.layout) ? (page.layout as BlockData[]) : []
}

async function seedStartupsBlocks(
  payload: Awaited<ReturnType<typeof getPayload>>,
  pageId: string | number,
) {
  const ruLayout = await getPageLayoutForLocale(payload, pageId, 'ru')

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale: 'ru',
    depth: 0,
    data: {
      layout: upsertBlock(
        upsertBlock(ruLayout, NAV_CONCEPTS_SEED.ru),
        CONCEPT_SECTION_CONCEPT_SEED.ru,
      ),
    },
  })

  const enLayout = await getPageLayoutForLocale(payload, pageId, 'en')

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale: 'en',
    depth: 0,
    data: {
      layout: upsertBlock(
        upsertBlock(enLayout, NAV_CONCEPTS_SEED.en),
        CONCEPT_SECTION_CONCEPT_SEED.en,
      ),
    },
  })

  const arLayout = await getPageLayoutForLocale(payload, pageId, 'ar')

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale: 'ar',
    depth: 0,
    data: {
      layout: upsertBlock(
        upsertBlock(arLayout, NAV_CONCEPTS_SEED.ar),
        CONCEPT_SECTION_CONCEPT_SEED.ar,
      ),
    },
  })
}

function upsertConceptSectionByAnchor(layout: BlockData[], block: BlockData): BlockData[] {
  const existingIndex = layout.findIndex(
    (item) =>
      item?.blockType === 'conceptSectionConcept' &&
      item?.anchorId === block?.anchorId,
  )

  if (existingIndex === -1) {
    return [...layout, block]
  }

  const nextLayout = [...layout]
  nextLayout[existingIndex] = {
    ...nextLayout[existingIndex],
    ...block,
  }

  return nextLayout
}

async function seedConceptSectionConceptsForLocale(
  payload: Awaited<ReturnType<typeof getPayload>>,
  pageId: string | number,
  locale: Locale,
  blocks: BlockData[],
) {
  const page = await payload.findByID({
    collection: 'pages',
    id: pageId,
    locale,
    fallbackLocale: 'none',
    depth: 0,
  })

  let nextLayout = Array.isArray(page?.layout) ? [...page.layout] : []

  for (const block of blocks) {
    nextLayout = upsertConceptSectionByAnchor(nextLayout, block)
  }

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

async function run() {
  const payload = await getPayload({ config })

 const startupsPageId = await getStartupsPageId(payload)
await seedStartupsBlocks(payload, startupsPageId)

await seedConceptSectionConceptsForLocale(
  payload,
  startupsPageId,
  'ru',
  CONCEPT_SECTION_CONCEPT_SEED.ru,
)

await seedConceptSectionConceptsForLocale(
  payload,
  startupsPageId,
  'en',
  CONCEPT_SECTION_CONCEPT_SEED.en,
)

await seedConceptSectionConceptsForLocale(
  payload,
  startupsPageId,
  'ar',
  CONCEPT_SECTION_CONCEPT_SEED.ar,
)

  console.log('ArtifactsStartups and ProcessStartups seeded successfully')
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
