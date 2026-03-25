import 'dotenv/config'

import config from '@payload-config'
import { getPayload } from 'payload'

type Locale = 'ru' | 'en' | 'ar'
type BlockData = Record<string, any>

const STARTUPS_PAGE_KEY = 'for-startups'

const ARTIFACTS_STARTUPS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'artifactsStartups',
    eyebrow: 'Результат',
    title: 'Что получает founder в результате',
    items: [
      {
        icon: 'fileText',
        title: 'Структура проекта',
        support: 'помогает собрать продукт по логике',
      },
      {
        icon: 'gitBranch',
        title: 'Пользовательские сценарии',
        support: 'показывает ключевые сценарии и приоритеты',
      },
      {
        icon: 'layout',
        title: 'Экранная карта продукта',
        support: 'превращает идею в понятную систему экранов',
      },
      {
        icon: 'play',
        title: 'Интерактивный прототип',
        support: 'даёт сильный prototype для обсуждения и показа',
      },
      {
        icon: 'palette',
        title: 'Визуальное направление',
        support: 'задаёт визуальный характер продукта',
      },
      {
        icon: 'package',
        title: 'Материалы для передачи в разработку',
        support: 'помогает перейти к следующему этапу разработки',
      },
    ],
  },

  en: {
    blockType: 'artifactsStartups',
    eyebrow: 'Result',
    title: 'What startup teams receive',
    items: [
      {
        icon: 'fileText',
        title: 'Project Structure',
        support: 'clarifies what the product really needs',
      },
      {
        icon: 'gitBranch',
        title: 'User Flows',
        support: 'makes key user journeys easier to align',
      },
      {
        icon: 'layout',
        title: 'Screen Matrix',
        support: 'organizes screens into one coherent system',
      },
      {
        icon: 'play',
        title: 'Clickable Prototype',
        support: 'creates something tangible to present or validate',
      },
      {
        icon: 'palette',
        title: 'Visual Direction',
        support: 'sets the tone of the interface',
      },
      {
        icon: 'package',
        title: 'Materials for Development',
        support: 'helps move cleanly into the next stage',
      },
    ],
  },

  ar: {
    blockType: 'artifactsStartups',
    eyebrow: 'النتيجة',
    title: 'ما الذي تحصل عليه فرق الشركات الناشئة',
    items: [
      {
        icon: 'fileText',
        title: 'هيكل المشروع',
        support: 'يوضح ما الذي يحتاجه المنتج فعلاً',
      },
      {
        icon: 'gitBranch',
        title: 'مسارات المستخدم',
        support: 'يسهل الاتفاق على المسارات الرئيسية',
      },
      {
        icon: 'layout',
        title: 'مصفوفة الشاشات',
        support: 'ينظم الشاشات في نظام واحد واضح',
      },
      {
        icon: 'play',
        title: 'نموذج أولي قابل للنقر',
        support: 'يقدم شيئاً ملموساً للعرض أو المراجعة',
      },
      {
        icon: 'palette',
        title: 'الاتجاه البصري',
        support: 'يحدد الطابع البصري للمنتج',
      },
      {
        icon: 'package',
        title: 'مواد التسليم للتطوير',
        support: 'يدعم الانتقال المنظم إلى المرحلة التالية',
      },
    ],
  },
}

const PROCESS_STARTUPS_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'processStartups',
    eyebrow: 'Процесс',
    title: 'Как это обычно происходит',
    steps: [
      {
        number: '01',
        title: 'Brief',
        description: 'Собираем задачу, цели, ограничения и контекст проекта.',
      },
      {
        number: '02',
        title: 'Структура',
        description: 'Определяем, какие сценарии и экраны действительно нужны на старте.',
      },
      {
        number: '03',
        title: 'Приоритеты',
        description: 'Отделяем MVP от второстепенного. Фокусируем на главном.',
      },
      {
        number: '04',
        title: 'Интерфейсы',
        description: 'Собираем prototype, сайт или mobile screens в сильную и понятную систему.',
      },
      {
        number: '05',
        title: 'Следующий этап',
        description:
          'Готовим рекомендации и материалы для передачи в разработку или следующего pitch.',
      },
    ],
  },

  en: {
    blockType: 'processStartups',
    eyebrow: 'Process',
    title: 'How this usually works',
    steps: [
      {
        number: '01',
        title: 'Brief',
        description:
          'We start by understanding the idea, the context, and the current level of clarity.',
      },
      {
        number: '02',
        title: 'Product Structure',
        description:
          'We define the key roles, flows, priorities, and what the product actually needs at this stage.',
      },
      {
        number: '03',
        title: 'Priorities',
        description: 'We separate core MVP logic from everything that can wait.',
      },
      {
        number: '04',
        title: 'Interface & Prototype',
        description:
          'We shape the screens, interaction logic, and clickable prototype.',
      },
      {
        number: '05',
        title: 'Next Step',
        description:
          'You receive materials that help you present, align, or move into development.',
      },
    ],
  },

  ar: {
    blockType: 'processStartups',
    eyebrow: 'العملية',
    title: 'كيف تسير العملية عادة',
    steps: [
      {
        number: '٠١',
        title: 'الـ brief',
        description: 'نبدأ بفهم الفكرة والسياق ودرجة الوضوح الحالية للمشروع.',
      },
      {
        number: '٠٢',
        title: 'هيكلة المنتج',
        description:
          'نحدد الأدوار الأساسية والمسارات والأولويات وما الذي يحتاجه المنتج فعلاً في هذه المرحلة.',
      },
      {
        number: '٠٣',
        title: 'تحديد الأولويات',
        description:
          'نفصل بين ما يجب أن يكون ضمن MVP الآن وما يمكن تأجيله لاحقاً.',
      },
      {
        number: '٠٤',
        title: 'الواجهة والنموذج الأولي',
        description:
          'نبني الشاشات الأساسية ومنطق الاستخدام والـ prototype القابل للنقر.',
      },
      {
        number: '٠٥',
        title: 'الخطوة التالية',
        description:
          'تحصلون على مواد تساعدكم في العرض أو التوافق الداخلي أو الانتقال إلى التطوير.',
      },
    ],
  },
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

function findBlock(layout: BlockData[], blockType: string): BlockData | undefined {
  return layout.find((block) => block?.blockType === blockType)
}

function syncRowIds<T extends { id?: string }>(
  nextRows: T[] | undefined,
  savedRows: Array<{ id?: string }> | undefined,
): T[] {
  if (!nextRows?.length) return []

  return nextRows.map((row, index) => ({
    ...row,
    ...(savedRows?.[index]?.id ? { id: savedRows[index].id } : {}),
  }))
}

function syncArtifactsBlock(nextBlock: BlockData, savedBlock: BlockData | undefined): BlockData {
  return {
    ...nextBlock,
    ...(savedBlock?.id ? { id: savedBlock.id } : {}),
    items: syncRowIds(
      Array.isArray(nextBlock.items) ? nextBlock.items : [],
      Array.isArray(savedBlock?.items) ? savedBlock.items : [],
    ),
  }
}

function syncProcessBlock(nextBlock: BlockData, savedBlock: BlockData | undefined): BlockData {
  return {
    ...nextBlock,
    ...(savedBlock?.id ? { id: savedBlock.id } : {}),
    steps: syncRowIds(
      Array.isArray(nextBlock.steps) ? nextBlock.steps : [],
      Array.isArray(savedBlock?.steps) ? savedBlock.steps : [],
    ),
  }
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
  // RU: replace both blocks in one update
  const ruLayout = await getPageLayoutForLocale(payload, pageId, 'ru')
  const ruNextLayout = upsertBlock(
    upsertBlock(ruLayout, ARTIFACTS_STARTUPS_SEED.ru),
    PROCESS_STARTUPS_SEED.ru,
  )

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale: 'ru',
    depth: 0,
    data: {
      layout: ruNextLayout,
    },
  })

  // Read created RU block ids
  const savedRuLayout = await getPageLayoutForLocale(payload, pageId, 'ru')
  const savedRuArtifacts = findBlock(savedRuLayout, 'artifactsStartups')
  const savedRuProcess = findBlock(savedRuLayout, 'processStartups')

  if (!savedRuArtifacts) {
    throw new Error('artifactsStartups block not found after RU seed')
  }

  if (!savedRuProcess) {
    throw new Error('processStartups block not found after RU seed')
  }

  // EN: replace both blocks in one update
  const enLayout = await getPageLayoutForLocale(payload, pageId, 'en')
  const enNextLayout = upsertBlock(
    upsertBlock(enLayout, syncArtifactsBlock(ARTIFACTS_STARTUPS_SEED.en, savedRuArtifacts)),
    syncProcessBlock(PROCESS_STARTUPS_SEED.en, savedRuProcess),
  )

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale: 'en',
    depth: 0,
    data: {
      layout: enNextLayout,
    },
  })

  // AR: replace both blocks in one update
  const arLayout = await getPageLayoutForLocale(payload, pageId, 'ar')
  const arNextLayout = upsertBlock(
    upsertBlock(arLayout, syncArtifactsBlock(ARTIFACTS_STARTUPS_SEED.ar, savedRuArtifacts)),
    syncProcessBlock(PROCESS_STARTUPS_SEED.ar, savedRuProcess),
  )

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale: 'ar',
    depth: 0,
    data: {
      layout: arNextLayout,
    },
  })
}

async function run() {
  const payload = await getPayload({ config })
  const startupsPageId = await getStartupsPageId(payload)

  await seedStartupsBlocks(payload, startupsPageId)

  console.log('ArtifactsStartups and ProcessStartups seeded successfully')
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })