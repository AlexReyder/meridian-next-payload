import 'dotenv/config'

import { getPayload } from 'payload'
import config from '../payload.config'

type Locale = 'ru' | 'en' | 'ar'

type BlockData = Record<string, unknown> & {
  blockType: string
  id?: string
}

const SOLUTIONS_HERO_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'heroSolutions',
    eyebrow: 'UX/UI Design Solutions',
    title: 'Решения для сайтов, digital-систем и мобильных приложений',
    description:
      'Atelier Meridian помогает founders, B2B-командам, агентствам и integrators превращать идею, сырой workflow или сложную цифровую задачу в понятную структуру, сильный интерфейс и материалы для следующего этапа — будь то сайт, digital-система, client portal или mobile app.',
    note: 'Подходит для новых проектов, redesign, presale, investor presentation и передачи в разработку.',
    tags: [
      { label: 'Сайты' },
      { label: 'Корпоративные сайты' },
      { label: 'Digital-системы' },
      { label: 'B2B-платформы' },
      { label: 'Клиентские порталы' },
      { label: 'Dashboards' },
      { label: 'Мобильные приложения' },
      { label: 'Redesign и UX/UI' },
      { label: 'White-label' },
    ],
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Посмотреть цены',
    secondaryPageKey: 'pricing',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2015_27_08-Hno8Y8Yi5GvsrPDqbYym9CLoCCxXWk.png',
    imageAlt: 'Premium Digital Solutions - websites, digital systems, and mobile applications',
    floatingLabel: 'Сайты · Системы · Приложения',
  },
  en: {
    blockType: 'heroSolutions',
    eyebrow: 'UX/UI Design Solutions',
    title: 'Solutions for websites, digital systems, and mobile apps',
    description:
      'Atelier Meridian helps founders, B2B teams, agencies, and integrators turn complex requirements, raw workflows, and early product ideas into clear structure, premium interfaces, and materials ready for the next stage — whether it is a website, digital system, client portal, or mobile app.',
    note: 'Suitable for new products, redesign, presale, investor presentations, and dev handoff.',
    tags: [
      { label: 'Websites' },
      { label: 'Corporate Websites' },
      { label: 'Digital Systems' },
      { label: 'B2B Platforms' },
      { label: 'Client Portals' },
      { label: 'Dashboards' },
      { label: 'Mobile Apps' },
      { label: 'Redesign' },
      { label: 'White-Label' },
    ],
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'View Pricing',
    secondaryPageKey: 'pricing',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2015_27_08-Hno8Y8Yi5GvsrPDqbYym9CLoCCxXWk.png',
    imageAlt: 'Premium Digital Solutions - websites, digital systems, and mobile applications',
    floatingLabel: 'Websites · Systems · Apps',
  },
  ar: {
    blockType: 'heroSolutions',
    eyebrow: 'حلول تصميم UX/UI',
    title: 'حلول للمواقع والأنظمة الرقمية وتطبيقات الجوال',
    description:
      'يساعد Atelier Meridian المؤسسين وفرق B2B والوكالات والشركاء التقنيين على تحويل الفكرة أو سير العمل الخام أو التحدي الرقمي المعقد إلى هيكل واضح وواجهة قوية ومواد جاهزة للمرحلة التالية — سواء كان المشروع موقعاً أو نظاماً رقمياً أو بوابة عميل أو تطبيق موبايل.',
    note: 'مناسب للمشاريع الجديدة وإعادة التصميم ومرحلة presale وعروض المستثمرين وتسليم التطوير.',
    tags: [
      { label: 'المواقع' },
      { label: 'مواقع الشركات' },
      { label: 'الأنظمة الرقمية' },
      { label: 'منصات B2B' },
      { label: 'بوابات العملاء' },
      { label: 'لوحات التحكم' },
      { label: 'تطبيقات الجوال' },
      { label: 'إعادة التصميم' },
      { label: 'White-label' },
    ],
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اطلع على الأسعار',
    secondaryPageKey: 'pricing',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2015_27_08-Hno8Y8Yi5GvsrPDqbYym9CLoCCxXWk.png',
    imageAlt: 'حلول رقمية متميزة - المواقع والأنظمة الرقمية وتطبيقات الجوال',
    floatingLabel: 'المواقع · الأنظمة · التطبيقات',
  },
}

const SOLUTIONS_POSITIONING_INTRO_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'positioningIntroSolutions',
    title: 'Не просто дизайн, а решение под тип задачи',
    description:
      'Atelier Meridian работает не как студия «наборов экранов», а как boutique-партнёр по продуктовой структуре и интерфейсам. Мы помогаем собрать логику сайта, digital-системы или mobile app до начала разработки, чтобы проект было проще согласовать, показать и передать дальше.',
    items: [
      {
        number: '01',
        title: 'Сначала структура',
        description: 'Прояснение логики продукта до визуального дизайна',
      },
      {
        number: '02',
        title: 'Потом интерфейс',
        description: 'Экраны и прототип на основе понятной архитектуры',
      },
      {
        number: '03',
        title: 'Затем понятный следующий шаг',
        description: 'Материалы для презентации, согласования или разработки',
      },
    ],
  },
  en: {
    blockType: 'positioningIntroSolutions',
    title: 'Not just design services, but the right solution for the task',
    description:
      'Atelier Meridian does not work like a studio that simply "produces screens." We help structure websites, digital systems, portals, and mobile apps before development begins — so the project is easier to explain, align, present, and move forward.',
    items: [
      {
        number: '01',
        title: 'Structure first',
        description: 'Clarifying product logic before visual design begins',
      },
      {
        number: '02',
        title: 'Interface next',
        description: 'Screens and prototype built on clear architecture',
      },
      {
        number: '03',
        title: 'Then a clear next step',
        description: 'Materials ready for presentation, alignment, or development',
      },
    ],
  },
  ar: {
    blockType: 'positioningIntroSolutions',
    title: 'ليست مجرد خدمات تصميم، بل الحل المناسب لطبيعة المشروع',
    description:
      'لا يعمل Atelier Meridian كاستوديو ينتج شاشات فقط. نحن نساعد على بناء منطق المنتج وهيكل الموقع أو النظام أو التطبيق قبل بدء التطوير، بحيث يصبح المشروع أسهل في الشرح والاعتماد والعرض والتنفيذ.',
    items: [
      {
        number: '٠١',
        title: 'الهيكل أولاً',
        description: 'توضيح منطق المنتج قبل بدء التصميم البصري',
      },
      {
        number: '٠٢',
        title: 'ثم الواجهة',
        description: 'الشاشات والنموذج الأولي يُبنيان على أساس معماري واضح',
      },
      {
        number: '٠٣',
        title: 'ثم خطوة تالية واضحة',
        description: 'مواد جاهزة للعرض أو الاعتماد أو الانتقال إلى التطوير',
      },
    ],
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

async function getSolutionsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: 'solutions',
      },
    },
    limit: 1,
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  return result.docs[0] ?? null
}

async function ensureSolutionsPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const existing = await getSolutionsPage(payload)

  if (existing) {
    return existing
  }

  return payload.create({
    collection: 'pages',
    locale: 'ru',
    depth: 0,
    data: {
      pageKey: 'solutions',
      internalName: 'solutions',
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

  const homePage = await ensureSolutionsPage(payload)

    await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_HERO_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_HERO_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_HERO_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', SOLUTIONS_POSITIONING_INTRO_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', SOLUTIONS_POSITIONING_INTRO_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', SOLUTIONS_POSITIONING_INTRO_SEED.ar)
  console.log('✅ Solutions page seed completed')
  process.exit(0)
}

main().catch((error) => {
  console.error('❌ Solutions page seed failed')
  console.error(error)
  process.exit(1)
})