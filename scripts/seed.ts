import 'dotenv/config'

import { getPayload } from 'payload'
import config from '../payload.config'

type Locale = 'ru' | 'en' | 'ar'

type BlockData = Record<string, unknown> & {
  blockType: string
  id?: string
}

const HOME_HERO_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'hero',
    eyebrow: 'UX/UI Design Studio',
    titleRows: [
      {
        segments: [{ text: 'Проектируем', tone: 'default' }],
      },
      {
        segments: [
          { text: 'сайты', tone: 'emphasis' },
          { text: ', digital-системы', tone: 'default' },
        ],
      },
      {
        segments: [
          { text: 'и ', tone: 'default' },
          { text: 'mobile apps', tone: 'emphasis' },
        ],
      },
      {
        segments: [{ text: 'до начала разработки', tone: 'muted' }],
      },
    ],
    title: 'Проектируем сайты, digital-системы и mobile apps до начала разработки',
    description:
      'Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.',
    supportingNote: '',
    tags: [
      { label: 'Landing pages и сайты' },
      { label: 'Web products' },
      { label: 'Mobile apps' },
      { label: 'MVP interfaces' },
      { label: 'Investor-ready prototype' },
      { label: 'Redesign' },
    ],
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Посмотреть цены',
    secondaryPageKey: 'pricing',
    desktopBadgeLabel: 'Digital-система',
    mobileBadgeLabel: 'Mobile app',
  },

  en: {
    blockType: 'hero',
    eyebrow: 'UX/UI Design Studio',
    titleRows: [
      {
        segments: [
          { text: 'We design ', tone: 'default' },
          { text: 'websites', tone: 'emphasis' },
          { text: ',', tone: 'default' },
        ],
      },
      {
        segments: [{ text: 'digital systems', tone: 'default' }],
      },
      {
        segments: [
          { text: 'and ', tone: 'default' },
          { text: 'mobile apps', tone: 'emphasis' },
        ],
      },
      {
        segments: [{ text: 'before development begins', tone: 'muted' }],
      },
    ],
    title: 'We design websites, digital systems and mobile apps before development begins',
    description:
      'Atelier Meridian helps founders, B2B teams, agencies, and integrators turn rough ideas, complex workflows, and product requirements into clear structure, premium interfaces, and a confident next step.',
    supportingNote: '',
    tags: [
      { label: 'Websites' },
      { label: 'Corporate Sites' },
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
    desktopBadgeLabel: 'Digital System',
    mobileBadgeLabel: 'Mobile App',
  },

  ar: {
    blockType: 'hero',
    eyebrow: 'استوديو لبنية المنتجات وتصميم الواجهات',
    titleRows: [
      {
        segments: [{ text: 'نصمم المواقع والأنظمة الرقمية', tone: 'default' }],
      },
      {
        segments: [{ text: 'وتطبيقات الجوال', tone: 'default' }],
      },
      {
        segments: [{ text: 'قبل أن تبدأ مرحلة التطوير', tone: 'muted' }],
      },
    ],
    title: 'نصمم المواقع والأنظمة الرقمية وتطبيقات الجوال قبل أن تبدأ مرحلة التطوير',
    description:
      'يساعد Atelier Meridian المؤسسين وفرق B2B والوكالات وشركاء التنفيذ على تحويل الفكرة الأولية أو المتطلبات المعقدة أو سير العمل غير الواضح إلى هيكل منتج واضح وواجهات متميزة وخطوة تالية يمكن البناء عليها بثقة.',
    supportingNote:
      'مناسب للمواقع، والأنظمة الرقمية، والبوابات، ولوحات التحكم، وتطبيقات الجوال، ومشاريع إعادة التصميم.',
    tags: [
      { label: 'المواقع' },
      { label: 'مواقع الشركات' },
      { label: 'الأنظمة الرقمية' },
      { label: 'منصات B2B' },
      { label: 'بوابات العملاء' },
      { label: 'لوحات التحكم' },
      { label: 'تطبيقات الجوال' },
      { label: 'إعادة التصميم' },
      { label: 'دعم الشركاء' },
    ],
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اطلع على الأسعار',
    secondaryPageKey: 'pricing',
    desktopBadgeLabel: 'نظام رقمي',
    mobileBadgeLabel: 'تطبيق موبايل',
  },
}

const HOME_VALUE_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'valueHome',
    eyebrow:
      'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями.',
    title:
      'Для проектов, которые нужно не просто нарисовать, а объяснить, согласовать и запустить',
    description: '',
    items: [
      {
        variant: 'icon',
        icon: 'trendingUp',
        kicker: 'Raise',
        title: 'Привлечь инвестиции',
        description:
          'Investor-ready prototype сайта, web-продукта или mobile app. Визуализация, которая говорит на языке инвестора.',
      },
      {
        variant: 'icon',
        icon: 'trophy',
        kicker: 'Win',
        title: 'Выиграть сделку',
        description:
          'Presale материалы для сложных B2B-сделок. Понятная архитектура системы или портала, которая убеждает enterprise-клиентов.',
      },
      {
        variant: 'icon',
        icon: 'code',
        kicker: 'Build',
        title: 'Передать в разработку',
        description:
          'Build-ready дизайн сайта, системы или приложения. Разработчики понимают, что делать, без лишних вопросов.',
      },
    ],
  },

  en: {
    blockType: 'valueHome',
    eyebrow: 'Websites, digital systems, portals, dashboards, and mobile apps',
    title:
      'For projects that need more than design — they need clarity, alignment, and a confident path forward',
    description: '',
    items: [
      {
        variant: 'icon',
        icon: 'trendingUp',
        kicker: '',
        title: 'Raise',
        description:
          'Investor-ready prototype for your website, web product, or mobile app. A visual narrative that speaks the language of investors.',
      },
      {
        variant: 'icon',
        icon: 'trophy',
        kicker: '',
        title: 'Win',
        description:
          'Presale materials for complex B2B deals. Clear system architecture that convinces enterprise clients to move forward.',
      },
      {
        variant: 'icon',
        icon: 'code',
        kicker: '',
        title: 'Build',
        description:
          'Build-ready design for your website, platform, or app. Developers understand exactly what to do — no guesswork.',
      },
    ],
  },

  ar: {
    blockType: 'valueHome',
    eyebrow: 'المواقع، الأنظمة الرقمية، البوابات، لوحات التحكم، وتطبيقات الجوال',
    title:
      'للمشاريع التي لا تحتاج إلى تصميم فقط، بل إلى شرح أوضح واعتماد أسرع وانطلاقة أقوى',
    description:
      'لا نبدأ بالشاشات مباشرة. نبدأ بتوضيح الهدف، وحدود المشروع، والأدوار، ومسارات الاستخدام، ومنطق المنتج. بهذه الطريقة يصبح المشروع أسهل في العرض، وأسهل في التوافق الداخلي، وأسهل في الانتقال إلى التطوير.',
    items: [
      {
        variant: 'step',
        kicker: '',
        title: 'الوضوح أولاً',
        description: 'نبدأ بتوضيح الهدف، وحدود المشروع، والأدوار، ومسارات الاستخدام.',
      },
      {
        variant: 'step',
        kicker: '',
        title: 'ثم الواجهة',
        description: 'نبني واجهات متميزة تعكس منطق المنتج وتدعم أهداف المستخدم.',
      },
      {
        variant: 'step',
        kicker: '',
        title: 'ثم الخطوة التالية',
        description: 'نسلم مواد جاهزة للعرض أو التوافق الداخلي أو الانتقال إلى التطوير.',
      },
    ],
  },
}

const HOME_VIDEO_WALKTHROUGH_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'videoWalkthroughHome',
    eyebrow: 'Walkthrough',
    title: 'От задачи до готового прототипа',
    subheadline:
      'Показываем на практике, как выглядит путь проекта: от brief и структуры до prototype и материалов для следующего этапа.',
    metaBadges: [
      { label: '3–5 минут' },
      { label: 'Реальный процесс работы' },
      { label: 'Понятно, что получает клиент' },
    ],
    videoLabel: 'Видео',
    durationLabel: '4:32',
    timeline: [
      { number: '01', label: 'Задача', description: 'Разбор входящего brief' },
      { number: '02', label: 'Структура', description: 'Архитектура продукта' },
      { number: '03', label: 'Сценарии', description: 'Пользовательские пути' },
      { number: '04', label: 'Прототип', description: 'Кликабельный интерфейс' },
      { number: '05', label: 'Передача', description: 'Материалы для dev' },
    ],
    highlightsTitle: 'Что вы увидите в ролике',
    highlights: [
      { label: 'Как мы разбираем входящую задачу' },
      { label: 'Как появляются структура и сценарии' },
      { label: 'Какие материалы получает клиент' },
      { label: 'Как выглядит кликабельный prototype' },
      { label: 'Как результат используется для pitch или передачи в разработку' },
    ],
    ctaTitle: 'Хотите такой же уровень проработки для своего проекта?',
    ctaSubtext:
      'Подходит для сайтов, digital-систем, mobile apps, portals и client-facing продуктов.',
    primaryButtonLabel: 'Получить предложение',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'Посмотреть цены',
    secondaryPageKey: 'pricing',
  },
  en: {
    blockType: 'videoWalkthroughHome',
    eyebrow: 'Walkthrough',
    title: 'From task to finished prototype',
    subheadline:
      'See how we work in practice: from brief and structure to prototype and dev handoff materials.',
    metaBadges: [
      { label: '3–5 minutes' },
      { label: 'Real working process' },
      { label: 'Clear deliverables' },
    ],
    videoLabel: 'Video',
    durationLabel: '4:32',
    timeline: [
      { number: '01', label: 'Task', description: 'Brief analysis' },
      { number: '02', label: 'Structure', description: 'Product architecture' },
      { number: '03', label: 'Scenarios', description: 'User paths' },
      { number: '04', label: 'Prototype', description: 'Clickable interface' },
      { number: '05', label: 'Handoff', description: 'Dev materials' },
    ],
    highlightsTitle: 'What you will see in the video',
    highlights: [
      { label: 'How we analyze the incoming task' },
      { label: 'How structure and scenarios emerge' },
      { label: 'What materials the client receives' },
      { label: 'What the clickable prototype looks like' },
      { label: 'How the result is used for pitch or dev handoff' },
    ],
    ctaTitle: 'Want this level of depth for your project?',
    ctaSubtext:
      'Works for websites, digital systems, mobile apps, portals, and client-facing products.',
    primaryButtonLabel: 'Get Proposal',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'View Pricing',
    secondaryPageKey: 'pricing',
  },
  ar: {
    blockType: 'videoWalkthroughHome',
    eyebrow: 'العرض التوضيحي',
    title: 'من المهمة إلى نموذج أولي قابل للنقر',
    subheadline:
      'شاهد كيف نعمل عملياً: من الملخص والهيكلة إلى النموذج الأولي ومواد تسليم المطورين.',
    metaBadges: [
      { label: '٣-٥ دقائق' },
      { label: 'عملية عمل حقيقية' },
      { label: 'ناتج واضح للعميل' },
    ],
    videoLabel: 'فيديو',
    durationLabel: '4:32',
    timeline: [
      { number: '٠١', label: 'المهمة', description: 'تحليل الملخص' },
      { number: '٠٢', label: 'الهيكلة', description: 'هندسة المنتج' },
      { number: '٠٣', label: 'السيناريوهات', description: 'مسارات المستخدم' },
      { number: '٠٤', label: 'النموذج', description: 'واجهة قابلة للنقر' },
      { number: '٠٥', label: 'التسليم', description: 'مواد التطوير' },
    ],
    highlightsTitle: 'ما ستشاهده في الفيديو',
    highlights: [
      { label: 'كيف نحلل المهمة الواردة' },
      { label: 'كيف تنشأ الهيكلة والسيناريوهات' },
      { label: 'ما المواد التي يحصل عليها العميل' },
      { label: 'كيف يبدو النموذج القابل للنقر' },
      { label: 'كيف تُستخدم النتيجة للعرض أو تسليم المطورين' },
    ],
    ctaTitle: 'هل تريد هذا المستوى من العمق لمشروعك؟',
    ctaSubtext: 'يناسب المواقع والأنظمة الرقمية وتطبيقات الموبايل والبوابات.',
    primaryButtonLabel: 'اطلب عرضاً',
    primaryPageKey: 'get-proposal',
    secondaryButtonLabel: 'اطلع على الأسعار',
    secondaryPageKey: 'pricing',
  },
}

const HOME_DELIVERABLES_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'deliverablesHome',
    eyebrow: 'Что входит в работу',
    title: 'Что вы получаете на первом этапе',
    items: [
      {
        icon: 'fileText',
        title: 'Проектный каркас',
        description: 'Цели, контекст, границы проекта — всё в одном документе',
      },
      {
        icon: 'users',
        title: 'Карта ролей и прав',
        description: 'Кто что видит и зачем. Логика интерфейса до дизайна',
      },
      {
        icon: 'gitBranch',
        title: 'Ключевые пользовательские сценарии',
        description: 'Основные пути использования продукта в деталях',
      },
      {
        icon: 'layoutGrid',
        title: 'Матрица экранов',
        description: 'Полный состав экранов по ролям и состояниям',
      },
      {
        icon: 'palette',
        title: 'Визуальное направление',
        description: 'Эстетика, стиль, референсы — согласованы до design-этапа',
      },
      {
        icon: 'mousePointer',
        title: 'Интерактивный прототип',
        description: 'Premium прототип для презентаций и тестирования',
      },
      {
        icon: 'layers',
        title: 'Базовая система компонентов',
        description: 'Базовые компоненты, готовые к масштабированию',
      },
      {
        icon: 'fileCheck',
        title: 'Сводка для передачи в разработку',
        description: 'Всё, что нужно разработчику, чтобы начать без вопросов',
      },
    ],
  },
  en: {
    blockType: 'deliverablesHome',
    eyebrow: 'What You Receive',
    title: 'What clients receive at the first stage',
    items: [
      {
        icon: 'fileText',
        title: 'Project Framework',
        description: 'Goals, context, scope boundaries — all in one structured document',
      },
      {
        icon: 'users',
        title: 'Roles & Permissions Map',
        description: 'Who sees what and why. Structure before screen design',
      },
      {
        icon: 'gitBranch',
        title: 'Core User Flows',
        description: 'Key usage scenarios documented in detail',
      },
      {
        icon: 'layoutGrid',
        title: 'Screen Matrix',
        description: 'All product screens organized by role and state',
      },
      {
        icon: 'palette',
        title: 'Visual Direction',
        description: 'Aesthetics, style, references — aligned before the design phase',
      },
      {
        icon: 'mousePointer',
        title: 'Interactive Prototype',
        description: 'Premium clickable prototype for presentations and testing',
      },
      {
        icon: 'layers',
        title: 'Component Foundation',
        description: 'Base UI components ready to scale',
      },
      {
        icon: 'fileCheck',
        title: 'Developer Handoff Package',
        description: 'Everything developers need to start — no questions asked',
      },
    ],
  },
  ar: {
    blockType: 'deliverablesHome',
    eyebrow: 'ما تحصل عليه',
    title: 'ما يحصل عليه العملاء في المرحلة الأولى',
    items: [
      {
        icon: 'fileText',
        title: 'هيكل المشروع',
        description: 'يوضح الأهداف والقيود والأولويات',
      },
      {
        icon: 'users',
        title: 'مسارات المستخدم',
        description: 'يبرز المسارات الأساسية ونقاط الانتقال',
      },
      {
        icon: 'layoutGrid',
        title: 'خريطة الشاشات',
        description: 'يجمع منطق الشاشات في نظام واحد',
      },
      {
        icon: 'mousePointer',
        title: 'نموذج أولي قابل للنقر',
        description: 'يجعل المنتج ملموساً قبل التطوير',
      },
      {
        icon: 'layers',
        title: 'نظام مكونات أساسي',
        description: 'يضع أساساً متماسكاً للواجهة',
      },
      {
        icon: 'fileCheck',
        title: 'مواد التسليم للتطوير',
        description: 'يسهل الانتقال إلى مرحلة التطوير',
      },
    ],
  },
}

const HOME_WHY_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'whyHome',
    eyebrow: 'Почему мы',
    title: 'Почему Atelier Meridian',
    description:
      'Проектируем дизайн сайтов, digital-систем и мобильных приложений с продуктовым подходом.',
    items: [
      {
        title: 'Экспертный подход senior-уровня',
        description:
          'Каждый проект ведёт опытный product-архитектор. Без junior-итераций, без пересогласований основ.',
      },
      {
        title: 'AI-ускоренный workflow',
        description:
          'Используем AI для рутинных задач — больше времени на стратегические решения и качество.',
      },
      {
        title: 'Структурированные спринты',
        description:
          'Понятный scope, фиксированные сроки, предсказуемый результат. Никаких сюрпризов.',
      },
      {
        title: 'Без agency overhead',
        description:
          'Бутиковый формат без лишних слоёв менеджмента. Работаете напрямую с теми, кто делает.',
      },
    ],
  },
  en: {
    blockType: 'whyHome',
    eyebrow: 'Why Us',
    title: 'Why Atelier Meridian',
    description:
      'We design websites, digital systems, and mobile apps with a product-first approach.',
    items: [
      {
        title: 'Senior-level expertise',
        description:
          'Every project is led by an experienced product architect. No junior iterations, no re-aligning fundamentals.',
      },
      {
        title: 'AI-accelerated workflow',
        description:
          'We use AI for routine tasks — freeing more time for strategic decisions and quality refinement.',
      },
      {
        title: 'Structured sprints',
        description:
          'Clear scope, fixed timelines, predictable outcomes. No surprises along the way.',
      },
      {
        title: 'No agency overhead',
        description:
          'Boutique format without unnecessary management layers. You work directly with the people who do the work.',
      },
    ],
  },
  ar: {
    blockType: 'whyHome',
    eyebrow: 'لماذا نحن',
    title: 'لماذا Atelier Meridian',
    description:
      'نصمم المواقع والأنظمة الرقمية وتطبيقات الموبايل بمنهجية تضع المنتج أولاً.',
    items: [
      {
        title: 'خبرة على مستوى كبار المحترفين',
        description:
          'كل مشروع يقوده معماري منتجات ذو خبرة. لا تكرارات مبتدئة، ولا إعادة توجيه للأساسيات.',
      },
      {
        title: 'سير عمل معزز بالذكاء الاصطناعي',
        description:
          'نستخدم الذكاء الاصطناعي للمهام الروتينية — مما يوفر المزيد من الوقت للقرارات الاستراتيجية وتحسين الجودة.',
      },
      {
        title: 'سباقات منظمة',
        description:
          'نطاق واضح، جداول زمنية ثابتة، نتائج متوقعة. لا مفاجآت على طول الطريق.',
      },
      {
        title: 'بدون أعباء الوكالات',
        description:
          'نموذج بوتيكي بدون طبقات إدارية غير ضرورية. تعمل مباشرة مع من ينفذون العمل.',
      },
    ],
  },
}

const HOME_AUDIENCE_SEED: Record<Locale, BlockData> = {
  ru: {
    blockType: 'audienceHome',
    sectionId: 'startups',
    eyebrow: 'Для кого',
    title: 'Кому мы помогаем',
    problemLabel: 'Проблема',
    solutionLabel: 'Что упрощаем',
    resultLabel: 'Результат',
    ctaLabel: 'Получить предложение',
    ctaPageKey: 'get-proposal',
    items: [
      {
        title: 'Founders и startup-команды',
        problem: 'Нужен дизайн сайта, landing page или mobile app для презентации инвестору',
        solution: 'Превращаем идею в структурированный прототип сайта или приложения',
        result: 'Investor-ready визуализация и понятный scope для первой версии',
      },
      {
        title: 'Агентства и integrators',
        problem: 'Нужен дизайн сайта, портала или системы для клиента, но нет ресурсов',
        solution: 'White-label дизайн сайтов, mobile apps, B2B-систем под вашим брендом',
        result: 'Готовый deliverable для вашего клиента без расширения штата',
      },
      {
        title: 'B2B-команды и enterprise',
        problem: 'Нужен дизайн портала, dashboard или внутренней системы с ясной логикой',
        solution: 'Проектируем интерфейсы B2B-платформ, порталов и корпоративных систем',
        result: 'Документация и прототип для уверенного старта разработки',
      },
    ],
  },
  en: {
    blockType: 'audienceHome',
    sectionId: 'startups',
    eyebrow: 'Who We Help',
    title: 'Who we work with',
    problemLabel: 'Challenge',
    solutionLabel: 'What We Simplify',
    resultLabel: 'Outcome',
    ctaLabel: 'Get Proposal',
    ctaPageKey: 'get-proposal',
    items: [
      {
        title: 'Founders & Startup Teams',
        problem: 'Need a website, landing page, or mobile app to present to investors',
        solution: 'We turn your idea into a structured prototype ready for stakeholders',
        result: 'Investor-ready visualization and a clear scope for your first version',
      },
      {
        title: 'Agencies & Integrators',
        problem: 'Need website, portal, or system design for a client but lack capacity',
        solution: 'White-label design for websites, mobile apps, B2B systems under your brand',
        result: 'Ready deliverable for your client without expanding your team',
      },
      {
        title: 'B2B Teams & Enterprise',
        problem: 'Need a portal, dashboard, or internal system with clear logic',
        solution: 'We design interfaces for B2B platforms, portals, and corporate systems',
        result: 'Documentation and prototype for a confident development start',
      },
    ],
  },
  ar: {
    blockType: 'audienceHome',
    sectionId: 'startups',
    eyebrow: 'من نساعد',
    title: 'مع من نعمل',
    problemLabel: 'التحدي',
    solutionLabel: 'ما نبسطه',
    resultLabel: 'النتيجة',
    ctaLabel: 'طلب عرض',
    ctaPageKey: 'get-proposal',
    items: [
      {
        title: 'المؤسسون وفرق الشركات الناشئة',
        problem: 'تحتاج موقعاً أو صفحة هبوط أو تطبيق موبايل لعرضه على المستثمرين',
        solution: 'نحول فكرتك إلى نموذج أولي منظم جاهز لأصحاب المصلحة',
        result: 'عرض مرئي جاهز للمستثمرين ونطاق واضح للنسخة الأولى',
      },
      {
        title: 'الوكالات والشركاء',
        problem: 'تحتاج تصميم موقع أو بوابة أو نظام لعميل لكن ليس لديك القدرة',
        solution: 'تصميم White-label للمواقع وتطبيقات الموبايل وأنظمة B2B تحت علامتك التجارية',
        result: 'تسليم جاهز لعميلك بدون توسيع فريقك',
      },
      {
        title: 'فرق B2B والشركات الكبرى',
        problem: 'تحتاج بوابة أو لوحة تحكم أو نظام داخلي بمنطق واضح',
        solution: 'نصمم واجهات لمنصات B2B والبوابات والأنظمة المؤسسية',
        result: 'توثيق ونموذج أولي لبداية تطوير واثقة',
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

async function getHomePage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: 'home',
      },
    },
    limit: 1,
    locale: 'ru',
    fallbackLocale: 'none',
    depth: 0,
  })

  return result.docs[0] ?? null
}

async function ensureHomePage(payload: Awaited<ReturnType<typeof getPayload>>) {
  const existing = await getHomePage(payload)

  if (existing) {
    return existing
  }

  return payload.create({
    collection: 'pages',
    locale: 'ru',
    depth: 0,
    data: {
      pageKey: 'home',
      internalName: 'Home',
      layout: [],
    },
  })
}

async function seedHomeHeroForLocale(
  payload: Awaited<ReturnType<typeof getPayload>>,
  pageId: string | number,
  locale: Locale,
) {
  const page = await payload.findByID({
    collection: 'pages',
    id: pageId,
    locale,
    fallbackLocale: 'none',
    depth: 0,
  })

  const currentLayout = Array.isArray(page?.layout) ? (page.layout as BlockData[]) : []
  const nextLayout = upsertBlock(currentLayout, HOME_HERO_SEED[locale])

  await payload.update({
    collection: 'pages',
    id: pageId,
    locale,
    depth: 0,
    data: {
      layout: nextLayout,
    },
  })

  console.log(`✔ Seeded home hero for locale: ${locale}`)
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

  const homePage = await ensureHomePage(payload)

//   await seedHomeHeroForLocale(payload, homePage.id, 'ru')
//   await seedHomeHeroForLocale(payload, homePage.id, 'en')
//   await seedHomeHeroForLocale(payload, homePage.id, 'ar')

//   await seedBlockForLocale(payload, homePage.id, 'ru', HOME_VALUE_SEED.ru)
//   await seedBlockForLocale(payload, homePage.id, 'en', HOME_VALUE_SEED.en)
//   await seedBlockForLocale(payload, homePage.id, 'ar', HOME_VALUE_SEED.ar)

//   await seedBlockForLocale(payload, homePage.id, 'ru', HOME_VIDEO_WALKTHROUGH_SEED.ru)
//   await seedBlockForLocale(payload, homePage.id, 'en', HOME_VIDEO_WALKTHROUGH_SEED.en)
//   await seedBlockForLocale(payload, homePage.id, 'ar', HOME_VIDEO_WALKTHROUGH_SEED.ar)

//   await seedBlockForLocale(payload, homePage.id, 'ru', HOME_DELIVERABLES_SEED.ru)
//   await seedBlockForLocale(payload, homePage.id, 'en', HOME_DELIVERABLES_SEED.en)
//   await seedBlockForLocale(payload, homePage.id, 'ar', HOME_DELIVERABLES_SEED.ar)

await seedBlockForLocale(payload, homePage.id, 'ru', HOME_WHY_SEED.ru)
await seedBlockForLocale(payload, homePage.id, 'en', HOME_WHY_SEED.en)
await seedBlockForLocale(payload, homePage.id, 'ar', HOME_WHY_SEED.ar)

await seedBlockForLocale(payload, homePage.id, 'ru', HOME_AUDIENCE_SEED.ru)
await seedBlockForLocale(payload, homePage.id, 'en', HOME_AUDIENCE_SEED.en)
await seedBlockForLocale(payload, homePage.id, 'ar', HOME_AUDIENCE_SEED.ar)
  
  console.log('✅ Home hero seed completed')
  process.exit(0)
}

main().catch((error) => {
  console.error('❌ Home hero seed failed')
  console.error(error)
  process.exit(1)
})