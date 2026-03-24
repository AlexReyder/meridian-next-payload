import 'dotenv/config'

import { getPayload } from 'payload'
import config from '../payload.config'

type Locale = 'ru' | 'en' | 'ar'

type BlockData = Record<string, unknown> & {
  blockType: string
  id?: string
}

const HERO_CONCEPTS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'heroConcepts',
    eyebrow: 'Studio Portfolio',
    title: 'Концепты студии',
    description:
      'Демонстрационные проекты, показывающие, как Atelier Meridian подходит к сайтам, digital-системам, web-продуктам, клиентским порталам и мобильным приложениям — от продуктовой структуры до визуальной подачи и подготовки к разработке.',
    supportLine:
      'Это не клиентские кейсы, а студийные концепты, созданные для демонстрации подхода, уровня проработки и качества материалов.',
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Посмотреть цены',
    secondaryPageKey: 'pricing',
    tags: [
      { label: 'B2B-системы' },
      { label: 'Mobile apps' },
      { label: 'Websites' },
      { label: 'SaaS' },
      { label: 'Portals & dashboards' },
      { label: 'Startup landing pages' },
      { label: 'Booking platforms' },
      { label: 'Prototype' },
      { label: 'Материалы для передачи в разработку' },
    ],
  },
  en: {
    blockType: 'heroConcepts',
    eyebrow: 'Studio Portfolio',
    title: 'Studio Concepts',
    description:
      'Demonstration projects that show how Atelier Meridian approaches websites, digital systems, web products, client portals, and mobile apps — from product structure to visual direction and materials for the next stage.',
    supportLine:
      'These are not client case studies. They are studio concepts created to demonstrate approach, level of detail, and the quality of outputs.',
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'View Pricing',
    secondaryPageKey: 'pricing',
    tags: [
      { label: 'B2B Systems' },
      { label: 'Mobile Apps' },
      { label: 'Websites' },
      { label: 'SaaS' },
      { label: 'Portals & Dashboards' },
      { label: 'Startup Landing Pages' },
      { label: 'Booking Platforms' },
      { label: 'Prototype' },
      { label: 'Materials for Development' },
    ],
  },
  ar: {
    blockType: 'heroConcepts',
    eyebrow: 'أعمال الاستوديو',
    title: 'مفاهيم الاستوديو',
    description:
      'مشاريع توضيحية تُظهر كيف يتعامل Atelier Meridian مع المواقع والأنظمة الرقمية والمنتجات الويب وبوابات العملاء وتطبيقات الجوال — من هيكلة المنتج إلى الاتجاه البصري والمواد الجاهزة للمرحلة التالية.',
    supportLine:
      'هذه ليست دراسات حالة لعملاء، بل مفاهيم استوديو صُممت لإظهار المنهج ومستوى العمق وجودة المخرجات.',
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اطلع على الأسعار',
    secondaryPageKey: 'pricing',
    tags: [
      { label: 'أنظمة B2B' },
      { label: 'تطبيقات الجوال' },
      { label: 'المواقع' },
      { label: 'SaaS' },
      { label: 'البوابات ولوحات التحكم' },
      { label: 'صفحات هبوط للشركات الناشئة' },
      { label: 'منصات الحجز' },
      { label: 'Prototype' },
      { label: 'مواد للتطوير' },
    ],
  },
}

const INTRO_CONCEPTS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'introConcepts',
    eyebrow: 'О концептах',
    title: 'Что показывают эти концепты',
    description:
      'Каждый концепт — это пример того, как мы собираем продуктовую логику, роли, сценарии, структуру экранов и визуальное направление до начала разработки. Эти материалы помогают показать идею, согласовать решение и перейти к следующему этапу работы.',
    pillars: [
      {
        icon: 'layers',
        title: 'Сначала структура',
        description: 'Цели, роли, сценарии и логика продукта',
      },
      {
        icon: 'penTool',
        title: 'Потом интерфейс',
        description: 'Визуальное направление и экранная система',
      },
      {
        icon: 'arrowRight',
        title: 'Затем понятный следующий шаг',
        description: 'Материалы для согласования и разработки',
      },
    ],
  },
  en: {
    blockType: 'introConcepts',
    eyebrow: 'About These Concepts',
    title: 'What these concepts are meant to show',
    description:
      'Each concept is an example of how we shape product logic, roles, user flows, screen structure, and visual direction before development begins. These materials make it easier to explain the product, align decisions, and move into the next stage with confidence.',
    pillars: [
      {
        icon: 'layers',
        title: 'Structure first',
        description: 'Goals, roles, scenarios, and product logic',
      },
      {
        icon: 'penTool',
        title: 'Interface next',
        description: 'Visual direction and screen system',
      },
      {
        icon: 'arrowRight',
        title: 'Then a clear next step',
        description: 'Materials for alignment and development',
      },
    ],
  },
  ar: {
    blockType: 'introConcepts',
    eyebrow: 'حول هذه المفاهيم',
    title: 'ما الذي تهدف هذه المفاهيم إلى إظهاره',
    description:
      'كل مفهوم هو مثال على الطريقة التي نبني بها منطق المنتج والأدوار ومسارات المستخدم وهيكل الشاشات والاتجاه البصري قبل بدء التطوير. تساعد هذه المواد على شرح الفكرة وتوحيد القرار والانتقال بثقة إلى المرحلة التالية.',
    pillars: [
      {
        icon: 'layers',
        title: 'أولاً الهيكل',
        description: 'الأهداف والأدوار والسيناريوهات ومنطق المنتج',
      },
      {
        icon: 'penTool',
        title: 'ثم الواجهة',
        description: 'الاتجاه البصري ونظام الشاشات',
      },
      {
        icon: 'arrowRight',
        title: 'ثم خطوة تالية واضحة',
        description: 'مواد للتوافق والانتقال إلى التطوير',
      },
    ],
  },
}

const NAV_CONCEPTS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'navConcepts',
    eyebrow: 'Навигация',
    title: 'Выберите концепт',
    description:
      'Список ниже формируется автоматически из concept sections, добавленных на страницу.',
  },
  en: {
    blockType: 'navConcepts',
    eyebrow: 'Navigation',
    title: 'Choose a concept',
    description:
      'The list below is generated automatically from the concept sections added to this page.',
  },
  ar: {
    blockType: 'navConcepts',
    eyebrow: 'التنقل',
    title: 'اختر مفهوماً',
    description:
      'تتكوّن القائمة أدناه تلقائياً من concept sections المضافة إلى هذه الصفحة.',
  },
}

const CONCEPT_SECTION_CONCEPT_SEED_1: Record<Locale, BlockData> = {
  ru: {
    blockType: 'conceptSectionConcept',
    anchorId: 'medflow',
    navLabel: 'MedFlow',
    eyebrow: 'Healthcare Platform',
    title: 'MedFlow — клиентский портал и операционная система для медицинского сервиса',
    description:
      'Концепт показывает, как можно собрать многослойный digital-product для healthcare: клиентский кабинет, внутреннюю систему и операционные сценарии команды в единую структуру.',
    category: 'B2B / Client Portal',
    year: '2025',
    services: [
      { label: 'Product structure' },
      { label: 'UX/UI concept' },
      { label: 'Portal architecture' },
      { label: 'Dashboard logic' },
    ],
    results: [
      { label: 'Структура ролей и сценариев' },
      { label: 'Логика клиентского кабинета' },
      { label: 'Операционные экраны и dashboard views' },
      { label: 'Visual direction для premium healthcare product' },
    ],
    visualCaption:
      'Концепт демонстрирует направление интерфейса, модульность экранов и product framing до этапа build-ready prototype.',
  },
  en: {
    blockType: 'conceptSectionConcept',
    anchorId: 'medflow',
    navLabel: 'MedFlow',
    eyebrow: 'Healthcare Platform',
    title: 'MedFlow — a client portal and operations system for a healthcare service',
    description:
      'This concept shows how a layered healthcare product can be structured: client area, internal system, and operational scenarios combined into one coherent interface system.',
    category: 'B2B / Client Portal',
    year: '2025',
    services: [
      { label: 'Product structure' },
      { label: 'UX/UI concept' },
      { label: 'Portal architecture' },
      { label: 'Dashboard logic' },
    ],
    results: [
      { label: 'Roles and scenario structure' },
      { label: 'Client portal logic' },
      { label: 'Operational screens and dashboard views' },
      { label: 'Visual direction for a premium healthcare product' },
    ],
    visualCaption:
      'The concept demonstrates interface direction, modular screen logic, and product framing before the build-ready prototype stage.',
  },
  ar: {
    blockType: 'conceptSectionConcept',
    anchorId: 'medflow',
    navLabel: 'MedFlow',
    eyebrow: 'منصة للرعاية الصحية',
    title: 'MedFlow — بوابة عملاء ونظام تشغيل لخدمة طبية',
    description:
      'يوضح هذا المفهوم كيف يمكن جمع منتج رقمي متعدد الطبقات في مجال الرعاية الصحية: بوابة العملاء والنظام الداخلي والسيناريوهات التشغيلية ضمن بنية واحدة متماسكة.',
    category: 'B2B / بوابة عملاء',
    year: '2025',
    services: [
      { label: 'هيكلة المنتج' },
      { label: 'مفهوم UX/UI' },
      { label: 'هيكل البوابة' },
      { label: 'منطق الـ Dashboard' },
    ],
    results: [
      { label: 'هيكل الأدوار والسيناريوهات' },
      { label: 'منطق بوابة العملاء' },
      { label: 'شاشات تشغيلية وواجهات Dashboard' },
      { label: 'اتجاه بصري لمنتج صحي premium' },
    ],
    visualCaption:
      'يعرض المفهوم الاتجاه العام للواجهة ومنطق الشاشات وهيكلة المنتج قبل مرحلة build-ready prototype.',
  },
}

const CONCEPT_SECTION_CONCEPT_SEED_2: Record<Locale, BlockData> = {
  ru: {
    blockType: 'conceptSectionConcept',
    anchorId: 'aurora-booking',
    navLabel: 'Aurora Booking',
    eyebrow: 'Booking Platform',
    title: 'Aurora Booking — платформа бронирования с premium customer journey',
    description:
      'Концепт для digital-сервиса с акцентом на выбор, сравнение, бронирование и управление заказом. Показывает, как соединить marketing-facing website и продуктовую booking flow.',
    category: 'Website + Product Flow',
    year: '2025',
    services: [
      { label: 'Booking flow' },
      { label: 'Website concept' },
      { label: 'UX scenarios' },
      { label: 'Prototype direction' },
    ],
    results: [
      { label: 'Сценарии выбора и бронирования' },
      { label: 'Связка сайта и product flow' },
      { label: 'Логика статусов и customer journey' },
      { label: 'Интерфейсная система для следующего этапа' },
    ],
    visualCaption:
      'Концепт показывает, как premium-подача может сочетаться с понятной booking-логикой и структурой сервиса.',
  },
  en: {
    blockType: 'conceptSectionConcept',
    anchorId: 'aurora-booking',
    navLabel: 'Aurora Booking',
    eyebrow: 'Booking Platform',
    title: 'Aurora Booking — a booking platform with a premium customer journey',
    description:
      'A concept for a digital service focused on browsing, comparing, booking, and managing reservations. It shows how a marketing-facing website can connect with a product-level booking flow.',
    category: 'Website + Product Flow',
    year: '2025',
    services: [
      { label: 'Booking flow' },
      { label: 'Website concept' },
      { label: 'UX scenarios' },
      { label: 'Prototype direction' },
    ],
    results: [
      { label: 'Selection and booking scenarios' },
      { label: 'Connection between website and product flow' },
      { label: 'Status logic and customer journey' },
      { label: 'Interface system for the next stage' },
    ],
    visualCaption:
      'This concept shows how a premium visual layer can work together with a clear booking logic and service structure.',
  },
  ar: {
    blockType: 'conceptSectionConcept',
    anchorId: 'aurora-booking',
    navLabel: 'Aurora Booking',
    eyebrow: 'منصة حجز',
    title: 'Aurora Booking — منصة حجز برحلة عميل premium',
    description:
      'مفهوم لخدمة رقمية تركّز على التصفح والمقارنة والحجز وإدارة الطلب. يوضح كيف يمكن وصل موقع تسويقي مع booking flow على مستوى المنتج.',
    category: 'موقع + Product Flow',
    year: '2025',
    services: [
      { label: 'Booking flow' },
      { label: 'مفهوم الموقع' },
      { label: 'سيناريوهات UX' },
      { label: 'اتجاه prototype' },
    ],
    results: [
      { label: 'سيناريوهات الاختيار والحجز' },
      { label: 'ربط الموقع بالـ product flow' },
      { label: 'منطق الحالات ورحلة العميل' },
      { label: 'نظام واجهات للمرحلة التالية' },
    ],
    visualCaption:
      'يوضح هذا المفهوم كيف يمكن للعرض premium أن يتكامل مع منطق حجز واضح وبنية خدمة منظمة.',
  },
}

const WHY_CONCEPTS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'whyConcepts',
    eyebrow: 'Почему это полезно',
    title: 'Зачем смотреть концепты до старта проекта',
    description:
      'Концепты помогают быстро понять уровень мышления, глубину product structure и качество интерфейсной логики ещё до старта реальной работы. Это способ увидеть не только визуальный стиль, но и то, как мы собираем digital-product целиком.',
    items: [
      {
        title: 'Показывают глубину проработки',
        description:
          'Видно, как мы думаем о ролях, сценариях, модулях и структуре продукта, а не только о визуале.',
      },
      {
        title: 'Помогают выровнять ожидания',
        description:
          'Проще понять, какой уровень качества, детализации и подхода вы получите в реальном проекте.',
      },
      {
        title: 'Упрощают обсуждение направления',
        description:
          'По концептам легче обсудить, что ближе вашему проекту: product logic, visual layer или build-ready prototype.',
      },
      {
        title: 'Дают ясный ориентир для следующего шага',
        description:
          'После просмотра концептов проще перейти к brief, scope discussion и выбору подходящего формата работы.',
      },
    ],
  },
  en: {
    blockType: 'whyConcepts',
    eyebrow: 'Why This Matters',
    title: 'Why review concepts before starting a project',
    description:
      'Concepts make it easier to understand the level of product thinking, structural depth, and interface quality before the real project begins. They show not only visual style, but how a digital product is shaped as a whole.',
    items: [
      {
        title: 'They show the depth of work',
        description:
          'You can see how we think about roles, scenarios, modules, and product structure — not just visuals.',
      },
      {
        title: 'They align expectations',
        description:
          'It becomes easier to understand the level of quality, detail, and approach you can expect in a real engagement.',
      },
      {
        title: 'They make direction easier to discuss',
        description:
          'Concepts make it easier to discuss what fits your project best: product logic, visual layer, or build-ready prototype.',
      },
      {
        title: 'They create a clear next step',
        description:
          'After reviewing the concepts, it becomes easier to move into a brief, scope discussion, and the right engagement format.',
      },
    ],
  },
  ar: {
    blockType: 'whyConcepts',
    eyebrow: 'لماذا هذا مهم',
    title: 'لماذا يفيد الاطلاع على المفاهيم قبل بدء المشروع',
    description:
      'تساعد هذه المفاهيم على فهم مستوى التفكير في المنتج وعمق الهيكلة وجودة منطق الواجهة قبل بدء العمل الفعلي. فهي لا تعرض الأسلوب البصري فقط، بل توضح كيف نبني المنتج الرقمي ككل.',
    items: [
      {
        title: 'تُظهر عمق العمل',
        description:
          'يمكنك أن ترى كيف نفكر في الأدوار والسيناريوهات والوحدات وهيكل المنتج، وليس في الشكل البصري فقط.',
      },
      {
        title: 'تساعد على توحيد التوقعات',
        description:
          'يصبح من الأسهل فهم مستوى الجودة والتفصيل والمنهج الذي ستحصل عليه في مشروع حقيقي.',
      },
      {
        title: 'تجعل مناقشة الاتجاه أوضح',
        description:
          'تسهل المفاهيم مناقشة ما هو الأنسب لمشروعك: منطق المنتج أو الطبقة البصرية أو build-ready prototype.',
      },
      {
        title: 'تعطي خطوة تالية واضحة',
        description:
          'بعد مراجعة المفاهيم يصبح الانتقال إلى brief ومناقشة النطاق واختيار صيغة العمل المناسبة أكثر وضوحاً.',
      },
    ],
  },
}

const CTA_CONCEPTS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'ctaConcepts',
    title: 'Нужен похожий уровень проработки для вашего проекта?',
    description:
      'Если вам нужен сайт, digital-система, портал, booking-platform, dashboard или mobile app с таким же уровнем структуры и интерфейсной логики — расскажите о задаче, и мы предложим подходящий формат работы.',
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Посмотреть цены',
    secondaryPageKey: 'pricing',
    footerNote:
      'Подходит для startup teams, B2B-команд, агентств, integrators и проектов с product-first подходом.',
  },
  en: {
    blockType: 'ctaConcepts',
    title: 'Need this level of thinking and execution for your project?',
    description:
      'If you need a website, digital system, portal, booking platform, dashboard, or mobile app shaped with the same level of structure and interface logic, tell us about your project and we will recommend the right format.',
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'View Pricing',
    secondaryPageKey: 'pricing',
    footerNote:
      'Suitable for startup teams, B2B teams, agencies, integrators, and product-first digital projects.',
  },
  ar: {
    blockType: 'ctaConcepts',
    title: 'هل تحتاج إلى هذا المستوى من التفكير والتنفيذ في مشروعك؟',
    description:
      'إذا كنت تحتاج إلى موقع أو نظام رقمي أو بوابة أو منصة حجز أو dashboard أو تطبيق جوال بهذا المستوى من الهيكلة ومنطق الواجهة، فأخبرنا عن مشروعك وسنقترح عليك الصيغة الأنسب للعمل.',
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اطلع على الأسعار',
    secondaryPageKey: 'pricing',
    footerNote:
      'مناسب لفرق الشركات الناشئة وفرق B2B والوكالات وشركاء التنفيذ والمشاريع الرقمية ذات المنهج product-first.',
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

async function getConceptsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: 'concepts',
      },
    },
    limit: 1,
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  return result.docs[0] ?? null
}

async function ensureConceptsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const existing = await getConceptsPage(payload)

  if (existing) {
    return existing
  }

  return payload.create({
    collection: 'pages',
    locale: 'ru',
    depth: 0,
    data: {
      pageKey: 'concepts',
      internalName: 'concepts',
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

  const homePage = await ensureConceptsPage(payload)


    await seedBlockForLocale(payload, homePage.id, 'ru', HERO_CONCEPTS_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', HERO_CONCEPTS_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', HERO_CONCEPTS_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', INTRO_CONCEPTS_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', INTRO_CONCEPTS_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', INTRO_CONCEPTS_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', NAV_CONCEPTS_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', NAV_CONCEPTS_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', NAV_CONCEPTS_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', CONCEPT_SECTION_CONCEPT_SEED_1.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', CONCEPT_SECTION_CONCEPT_SEED_1.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', CONCEPT_SECTION_CONCEPT_SEED_1.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', CONCEPT_SECTION_CONCEPT_SEED_2.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', CONCEPT_SECTION_CONCEPT_SEED_2.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', CONCEPT_SECTION_CONCEPT_SEED_2.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', WHY_CONCEPTS_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', WHY_CONCEPTS_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', WHY_CONCEPTS_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', CTA_CONCEPTS_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', CTA_CONCEPTS_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', CTA_CONCEPTS_SEED.ar)


  console.log('✅ Solutions page seed completed')
  process.exit(0)
}

main().catch((error) => {
  console.error('❌ Solutions page seed failed')
  console.error(error)
  process.exit(1)
})