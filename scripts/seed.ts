import 'dotenv/config'

import { getPayload } from 'payload'
import config from '../payload.config'

type Locale = 'ru' | 'en' | 'ar'

type BlockData = Record<string, unknown> & {
  blockType: string
  id?: string
}

const HERO_AGENCIES_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'heroAgencies',
    eyebrow: 'Для партнёров',
    titlePrefix: 'Для партнёров, которым нужен внешний',
    titleAccent: 'premium-партнёр',
    titleSuffix: 'по интерфейсам и продуктовой структуре',
    description:
      'Подключаемся как внешний premium-партнёр для агентств, integrators и delivery-команд, когда проекту нужны ясная продуктовая структура, сильный интерфейс и понятная передача в разработку — будь то сайт, client portal, dashboard, digital-система или mobile app.',
    descriptionSecondary:
      'Подходит для white-label delivery, presale, redesign, сложных B2B-интерфейсов и client-facing product work.',
    partnerTags: [
      { label: 'White-label' },
      { label: 'Presale support' },
      { label: 'Сайты' },
      { label: 'Digital-системы' },
      { label: 'Dashboards' },
      { label: 'Portals' },
      { label: 'Mobile apps' },
      { label: 'Передача в разработку' },
    ],
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Посмотреть цены',
    secondaryPageKey: 'pricing',
  },
  en: {
    blockType: 'heroAgencies',
    eyebrow: 'For Partners',
    titlePrefix: 'For partners who need an external',
    titleAccent: 'premium product and interface layer',
    titleSuffix: '',
    description:
      'Atelier Meridian works as an external premium partner for agencies, integrators, and delivery teams when projects need stronger product structure, clearer user flows, better interface quality, or a more credible prototype for client delivery, presale, or development handoff.',
    descriptionSecondary:
      'Suitable for white-label delivery, presale support, redesign, portals, dashboards, websites, and mobile apps.',
    partnerTags: [
      { label: 'White-Label' },
      { label: 'Presale Support' },
      { label: 'Websites' },
      { label: 'Digital Systems' },
      { label: 'Dashboards' },
      { label: 'Portals' },
      { label: 'Mobile Apps' },
      { label: 'Dev Handoff Materials' },
    ],
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'View Pricing',
    secondaryPageKey: 'pricing',
  },
  ar: {
    blockType: 'heroAgencies',
    eyebrow: 'للشركاء',
    titlePrefix: 'للشركاء الذين يحتاجون إلى طبقة خارجية متميزة في',
    titleAccent: 'هيكلة المنتج وتصميم الواجهات',
    titleSuffix: '',
    description:
      'يعمل Atelier Meridian كشريك خارجي متميز عندما تحتاج الفرق إلى هيكل أوضح للمنتج، أو مسارات استخدام أقوى، أو جودة أعلى في الواجهات، أو نموذج أولي أكثر إقناعاً لمشاريع العملاء أو للعروض التمهيدية أو للانتقال إلى التطوير.',
    descriptionSecondary:
      'مناسب للعمل بنظام white-label، ودعم presale، وإعادة التصميم، والبوابات، ولوحات التحكم، والمواقع، وتطبيقات الجوال.',
    partnerTags: [
      { label: 'White-label' },
      { label: 'دعم presale' },
      { label: 'المواقع' },
      { label: 'الأنظمة الرقمية' },
      { label: 'البوابات' },
      { label: 'لوحات التحكم' },
      { label: 'تطبيقات الجوال' },
      { label: 'مواد التسليم للتطوير' },
    ],
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اطلع على الأسعار',
    secondaryPageKey: 'pricing',
  },
}

const PARTNERS_CLARIFICATION_AGENCIES_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'partnersClarificationAgencies',
    title: 'Не просто подрядчик по дизайну, а внешний product / interface partner',
    description:
      'Atelier Meridian подключается туда, где партнёрской команде не хватает времени, внутренней UX/UI-ёмкости или сильной продуктовой упаковки. Мы помогаем прояснить структуру, собрать интерфейсы и подготовить решение к презентации, client delivery или следующему этапу разработки.',
    pillars: [
      { label: 'Белая маркировка возможна' },
      { label: 'Удобно для presale и delivery' },
      { label: 'Премиальная подача без расширения штата' },
    ],
  },
  en: {
    blockType: 'partnersClarificationAgencies',
    title: 'Not just a design vendor, but an external product and interface partner',
    description:
      'Atelier Meridian joins partner teams where there is not enough internal product/UI capacity, where the client-facing presentation needs to be stronger, or where a clearer structure is needed before development begins. We help shape the logic, interfaces, and deliverables that make the next step easier.',
    pillars: [
      { label: 'White-label friendly' },
      { label: 'Useful for presale and delivery' },
      { label: 'Premium output without growing internal headcount' },
    ],
  },
  ar: {
    blockType: 'partnersClarificationAgencies',
    title: 'لسنا مجرد مزود تصميم، بل شريك خارجي في المنتج والواجهة',
    description:
      'ينضم Atelier Meridian إلى فرق الشركاء عندما لا تكون هناك سعة داخلية كافية على مستوى المنتج أو UX/UI، أو عندما يحتاج العرض الموجه للعميل إلى قوة أكبر، أو عندما يحتاج المشروع إلى هيكل أوضح قبل بدء التطوير. نحن نساعد في بناء المنطق والواجهات والمخرجات التي تجعل الخطوة التالية أسهل وأكثر وضوحاً.',
    pillars: [
      { label: 'مناسب للعمل بنظام white-label' },
      { label: 'مفيد لـ presale والتنفيذ' },
      { label: 'مخرجات متميزة من دون توسيع الفريق الداخلي' },
    ],
  },
}

const AUDIENCE_AGENCIES_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'audienceAgencies',
    eyebrow: 'Целевая аудитория',
    title: 'Кому подходит этот формат',
    items: [
      {
        title: 'Web-студии и digital-агентства',
        text: 'Когда нужен внешний сильный UX/UI / product-слой для клиентского сайта, redesign или digital-продукта.',
      },
      {
        title: 'System integrators',
        text: 'Когда проект сложный, ролей много, а интерфейсную логику и подачу нужно собрать аккуратно и быстро.',
      },
      {
        title: 'Outsourcing и dev shops',
        text: 'Когда разработка есть, а дизайн, structure и product clarity выгоднее закрыть внешней premium-командой.',
      },
      {
        title: 'Delivery-команды',
        text: 'Когда нужно усилить client-facing delivery, presale или прототипирование без расширения постоянного штата.',
      },
      {
        title: 'Consulting и partner teams',
        text: 'Когда нужно упаковать решение, service portal, dashboard или интерфейс цифровой системы в понятную форму.',
      },
    ],
  },
  en: {
    blockType: 'audienceAgencies',
    eyebrow: 'Audience',
    title: 'Who this works for',
    items: [
      {
        title: 'Digital Agencies',
        text: 'When you need an external premium UX/UI/product layer for a client website, redesign, or digital product without expanding internal headcount.',
      },
      {
        title: 'System Integrators',
        text: 'When the project is complex, involves multiple roles and workflows, and interface logic needs to be assembled quickly and reliably before development.',
      },
      {
        title: 'Software Houses & Outsourcing Teams',
        text: 'When development capacity is strong but design, structure, and product clarity are more efficiently handled by an external premium partner.',
      },
      {
        title: 'Delivery Teams',
        text: 'When you need to strengthen client-facing delivery, presale materials, or prototype quality without growing permanent staff.',
      },
      {
        title: 'Consulting & Partner Teams',
        text: 'When you need to package a solution, service portal, dashboard, or digital system interface into a clear, presentable form for stakeholders.',
      },
    ],
  },
  ar: {
    blockType: 'audienceAgencies',
    eyebrow: 'الجمهور',
    title: 'لمن تناسب هذه الصيغة',
    items: [
      {
        title: 'الوكالات الرقمية',
        text: 'عندما تحتاج الوكالة إلى طبقة خارجية أقوى في UX/UI أو هيكلة المنتج لدعم مشاريع العملاء أو إعادة التصميم أو المنتجات الرقمية.',
      },
      {
        title: 'شركاء التنفيذ والـ integrators',
        text: 'عندما يكون المشروع معقداً ويضم أدواراً متعددة، وتحتاج الواجهة ومنطق النظام إلى صياغة أوضح وأكثر احترافية.',
      },
      {
        title: 'شركات البرمجيات وفرق الـ outsourcing',
        text: 'عندما تكون قدرات التطوير موجودة، لكن هيكلة المنتج وتصميم الواجهات من الأفضل تغطيتهما من خلال شريك خارجي متميز.',
      },
      {
        title: 'فرق التنفيذ delivery teams',
        text: 'عندما يكون المشروع موجهاً للعميل ويحتاج إلى دعم أقوى في العرض أو الـ prototype أو بنية الواجهة، من دون توسيع الفريق الداخلي.',
      },
      {
        title: 'الفرق الاستشارية وشركاء المشاريع',
        text: 'عندما تحتاج الجهة إلى توضيح الحل وصياغته في شكل منتج أو portal أو dashboard أو واجهة نظام رقمي واضحة ومقنعة.',
      },
    ],
  },
}

const VALUE_AGENCIES_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'valueAgencies',
    eyebrow: 'Value',
    title: 'Где мы усиливаем партнёрские проекты',
    layoutVariant: 'detailed',
    items: [
      {
        icon: 'presentation',
        title: 'Presale и pitch support',
        problem:
          'Нужно быстро упаковать концепцию или подготовить client-facing материалы для тендера.',
        whenRelevant: 'Pitch, тендер, presale-этап, client presentation.',
        whyHelpful:
          'Получаете premium concept package, который усиливает вашу позицию и ускоряет согласование.',
      },
      {
        icon: 'palette',
        title: 'White-label интерфейсная работа',
        problem:
          'Нужен внешний UX/UI-партнёр, который работает под вашим брендом или в тени.',
        whenRelevant: 'Агентская модель, субподряд, white-label delivery.',
        whyHelpful: 'Ваш клиент видит только ваш бренд. Мы — невидимый premium-слой.',
      },
      {
        icon: 'layout',
        title: 'Product structure before development',
        problem:
          'Перед стартом разработки нужно собрать логику продукта, роли, сценарии, экранную карту.',
        whenRelevant: 'Перед kickoff, перед передачей dev-команде, после discovery.',
        whyHelpful:
          'Разработка стартует на понятном фундаменте — без хаоса и переделок.',
      },
      {
        icon: 'send',
        title: 'Передача в разработку без хаоса',
        problem:
          'Дизайн готов, но dev-команда не понимает логику, сценарии или взаимосвязи экранов.',
        whenRelevant: 'Перед стартом разработки, после завершения UI.',
        whyHelpful:
          'Структурированные материалы для dev-команды — понятно, что делать и почему.',
      },
    ],
  },
  en: {
    blockType: 'valueAgencies',
    eyebrow: 'Value',
    title: 'Where we strengthen partner work',
    layoutVariant: 'detailed',
    items: [
      {
        icon: 'presentation',
        title: 'Presale & pitch support',
        problem:
          'You need to quickly package a concept or prepare client-facing materials for a tender or pitch.',
        whenRelevant: 'Pitch, tender, presale stage, client presentation.',
        whyHelpful:
          'You receive a premium concept package that strengthens your position and accelerates client approval.',
      },
      {
        icon: 'palette',
        title: 'White-label interface delivery',
        problem:
          'You need an external UX/UI partner who works under your brand or stays invisible to your client.',
        whenRelevant: 'Agency model, subcontracting, white-label delivery.',
        whyHelpful:
          'Your client sees only your brand. We are the invisible premium layer behind the scenes.',
      },
      {
        icon: 'layout',
        title: 'Product structure before development',
        problem:
          'Before development starts, you need to assemble the product logic, roles, scenarios, and screen map.',
        whenRelevant: 'Before kickoff, before handoff to dev team, after discovery.',
        whyHelpful:
          'Development starts on a solid foundation — without chaos and rework.',
      },
      {
        icon: 'send',
        title: 'Clear materials for development',
        problem:
          "Design is ready, but the dev team doesn't understand the logic, scenarios, or screen relationships.",
        whenRelevant: 'Before development start, after UI completion.',
        whyHelpful:
          'Structured materials for the dev team — clear on what to build and why.',
      },
    ],
  },
  ar: {
    blockType: 'valueAgencies',
    eyebrow: 'القيمة',
    title: 'أين نضيف قيمة حقيقية لمشاريع الشركاء',
    layoutVariant: 'compact',
    items: [
      {
        title: 'دعم presale والعروض التمهيدية',
        text: 'نساعد على بناء concept أو prototype أو عرض واجهات يجعل الحل أكثر وضوحاً وإقناعاً أمام العميل.',
      },
      {
        title: 'تنفيذ الواجهات بنظام white-label',
        text: 'نوفر طبقة خارجية متميزة في المنتج والواجهة من دون التأثير على علاقة الشريك مع العميل النهائي.',
      },
      {
        title: 'هيكلة المنتج قبل التطوير',
        text: 'نرتب الأدوار والمسارات ومنطق الشاشات قبل التنفيذ، بما يجعل العمل أكثر وضوحاً وأقل عشوائية.',
      },
      {
        title: 'مواد واضحة للتطوير',
        text: 'نجهز مخرجات تساعد الفريق الداخلي أو فريق التطوير على الانتقال إلى المرحلة التالية بثقة أكبر وغموض أقل.',
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

async function getAgenciesPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: 'for-partners',
      },
    },
    limit: 1,
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  return result.docs[0] ?? null
}

async function ensureAgenciesPage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const existing = await getAgenciesPage(payload)

  if (existing) {
    return existing
  }

  return payload.create({
    collection: 'pages',
    locale: 'ru',
    depth: 0,
    data: {
      pageKey: 'for-partners',
      internalName: 'for-partners',
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

  const homePage = await ensureAgenciesPage(payload)

    // await seedBlockForLocale(payload, homePage.id, 'ru', HERO_AGENCIES_SEED.ru)
    // await seedBlockForLocale(payload, homePage.id, 'en', HERO_AGENCIES_SEED.en)
    // await seedBlockForLocale(payload, homePage.id, 'ar', HERO_AGENCIES_SEED.ar)

    // await seedBlockForLocale(payload, homePage.id, 'ru', PARTNERS_CLARIFICATION_AGENCIES_SEED.ru)
    // await seedBlockForLocale(payload, homePage.id, 'en', PARTNERS_CLARIFICATION_AGENCIES_SEED.en)
    // await seedBlockForLocale(payload, homePage.id, 'ar', PARTNERS_CLARIFICATION_AGENCIES_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', AUDIENCE_AGENCIES_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', AUDIENCE_AGENCIES_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', AUDIENCE_AGENCIES_SEED.ar)

    await seedBlockForLocale(payload, homePage.id, 'ru', VALUE_AGENCIES_SEED.ru)
    await seedBlockForLocale(payload, homePage.id, 'en', VALUE_AGENCIES_SEED.en)
    await seedBlockForLocale(payload, homePage.id, 'ar', VALUE_AGENCIES_SEED.ar)


  console.log('✅ Solutions page seed completed')
  process.exit(0)
}

main().catch((error) => {
  console.error('❌ Solutions page seed failed')
  console.error(error)
  process.exit(1)
})