'use client'

import Link from 'next/link'
import { useMemo, useState, type ChangeEvent } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  CheckCircle,
  Clock,
  FileText,
  Home,
  Layers,
  Link as LinkIcon,
  Mail,
  Paperclip,
  Target,
  Upload,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ProcessStep = {
  icon?: 'target' | 'users' | 'layers' | 'arrowUpRight' | 'arrowUpLeft' | null
  title?: string | null
  description?: string | null
}

type SuccessStep = {
  number?: string | null
  title?: string | null
  description?: string | null
}

type ProposalFlowProposalBlockData = {
  briefCardTitle?: string | null
  briefCardDescription?: string | null
  briefButtonLabel?: string | null

  uploadCardTitle?: string | null
  uploadCardDescription?: string | null
  uploadButtonLabel?: string | null

  processEyebrow?: string | null
  processTitle?: string | null
  processDescription?: string | null
  processSteps?: ProcessStep[] | null

  uploadViewTitle?: string | null
  uploadViewDescription?: string | null
  uploadBackLabel?: string | null
  uploadFilesLabel?: string | null
  uploadFilesHint?: string | null
  uploadLinksLabel?: string | null
  uploadLinksPlaceholder?: string | null
  uploadDescriptionLabel?: string | null
  uploadDescriptionPlaceholder?: string | null
  uploadContactLabel?: string | null
  uploadNamePlaceholder?: string | null
  uploadEmailPlaceholder?: string | null
  uploadCancelLabel?: string | null
  uploadSubmitLabel?: string | null

  successTitle?: string | null
  successDescription?: string | null
  successStepsTitle?: string | null
  successSteps?: SuccessStep[] | null
  successHomeLabel?: string | null
  successHomePageKey?: PageKey | null
  successPricingLabel?: string | null
  successPricingPageKey?: PageKey | null
  successUploadMoreLabel?: string | null
  supportNotePrefix?: string | null
  supportEmail?: string | null
}

type Props = {
  block: ProposalFlowProposalBlockData
  locale: Locale
}

type ViewState = 'intro' | 'wizard' | 'upload' | 'success'

type WizardData = {
  projectType?: string
  projectGoal?: string
  teamType?: string
  companyName?: string
  website?: string
  teamSize?: string
  rolesCount?: string
  screenCount?: string
  complexityFlags: string[]
  materials: string[]
  uploadedFiles: string[]
  timeline?: string
  budget?: string
  briefNotes?: string
  name?: string
  email?: string
  company?: string
  role?: string
  region?: string
  phone?: string
  comment?: string
  noCallFirst?: boolean
  expertReview?: boolean
  nda?: boolean
}

type ChoiceItem = {
  id: string
  label: string
  desc?: string
}

type WizardCopy = {
  steps: { id: number; title: string }[]
  backToOptions: string
  previousStep: string
  back: string
  cancel: string
  stepOf: (current: number, total: number) => string

  step1Title: string
  step1Description: string
  projectTypes: ChoiceItem[]

  step2Title: string
  step2Description: string
  projectGoals: ChoiceItem[]

  step3Title: string
  step3Description: string
  teamTypes: ChoiceItem[]
  companyNameLabel: string
  companyNamePlaceholder: string
  websiteLabel: string
  websitePlaceholder: string
  teamSizeLabel: string
  teamSizePlaceholder: string

  step4Title: string
  step4Description: string
  rolesCountLabel: string
  rolesCountPlaceholder: string
  screenCountLabel: string
  screenCountPlaceholder: string
  complexityFlags: string[]

  step5Title: string
  step5Description: string
  materials: ChoiceItem[]
  wizardUploadLabel: string
  wizardUploadHint: string

  step6Title: string
  step6Description: string
  timelineLabel: string
  timelineOptions: ChoiceItem[]
  budgetLabel: string
  budgetOptions: ChoiceItem[]
  notesLabel: string
  notesPlaceholder: string

  step7Title: string
  step7Description: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  companyLabel: string
  companyPlaceholder: string
  roleLabel: string
  rolePlaceholder: string
  regionLabel: string
  regionPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  commentLabel: string
  commentPlaceholder: string
  noCallLabel: string
  expertReviewLabel: string
  ndaLabel: string

  nextLabel: string
  submitLabel: string

  summaryTitle: string
  summaryProjectType: string
  summaryGoal: string
  summaryTeam: string
  summaryTimeline: string

  summaryResultsTitle: string
  summaryResults: string[]
  summaryFooter: string
}

const PROCESS_ICONS: Record<string, LucideIcon> = {
  target: Target,
  users: Users,
  layers: Layers,
  arrowUpRight: ArrowUpRight,
  arrowUpLeft: ArrowUpLeft,
}

const WIZARD_COPY: Record<Locale, WizardCopy> = {
  ru: {
    steps: [
      { id: 1, title: 'Тип проекта' },
      { id: 2, title: 'Цель' },
      { id: 3, title: 'Команда' },
      { id: 4, title: 'Сложность' },
      { id: 5, title: 'Материалы' },
      { id: 6, title: 'Сроки' },
      { id: 7, title: 'Контакты' },
    ],
    backToOptions: 'Назад к выбору',
    previousStep: 'Предыдущий шаг',
    back: 'Назад',
    cancel: 'Отмена',
    stepOf: (current, total) => `Шаг ${current} из ${total}`,

    step1Title: 'Что вы планируете делать?',
    step1Description: 'Выберите тип проекта, который лучше всего описывает вашу задачу',
    projectTypes: [
      { id: 'website', label: 'Сайт / корпоративный сайт', desc: 'Лендинг, corporate website, product page' },
      { id: 'website-redesign', label: 'Редизайн сайта', desc: 'UX/UI-улучшение существующего сайта' },
      { id: 'b2b', label: 'B2B-платформа', desc: 'SaaS, marketplace, бизнес-система' },
      { id: 'internal', label: 'Внутренняя система', desc: 'CRM, ERP, операционные инструменты' },
      { id: 'portal', label: 'Клиентский портал', desc: 'Личный кабинет, self-service' },
      { id: 'dashboard', label: 'Dashboard / analytics', desc: 'Аналитика, мониторинг, отчётность' },
      { id: 'mobile', label: 'Мобильное приложение', desc: 'iOS, Android, кроссплатформа' },
      { id: 'redesign', label: 'Редизайн digital-продукта', desc: 'UX/UI-улучшение системы или приложения' },
      { id: 'presale', label: 'Presale / investor prototype', desc: 'Демо для fundraising или tender' },
      { id: 'other', label: 'Другое', desc: 'Расскажите подробнее на следующих шагах' },
    ],

    step2Title: 'Какая у проекта главная задача сейчас?',
    step2Description: 'Это поможет нам предложить подходящий формат работы',
    projectGoals: [
      { id: 'fundraising', label: 'Fundraising / investor presentation' },
      { id: 'pitch', label: 'Pitch / tender / presale' },
      { id: 'dev-handover', label: 'Подготовка к передаче в разработку' },
      { id: 'internal-launch', label: 'Внутренний запуск / цифровизация' },
      { id: 'redesign', label: 'Redesign / UX-улучшение' },
      { id: 'whitelabel', label: 'White-label для клиента' },
      { id: 'new-market', label: 'Выход в новый рынок' },
      { id: 'other', label: 'Другое' },
    ],

    step3Title: 'Как лучше описать вашу команду?',
    step3Description: 'Это поможет адаптировать формат работы под ваш контекст',
    teamTypes: [
      { id: 'founder', label: 'Founder / startup team' },
      { id: 'product', label: 'In-house product team' },
      { id: 'b2b', label: 'B2B-компания / operations team' },
      { id: 'agency', label: 'Агентство / integrator' },
      { id: 'consultant', label: 'Консультант / партнёр' },
      { id: 'other', label: 'Другое' },
    ],
    companyNameLabel: 'Название компании',
    companyNamePlaceholder: 'Acme Inc.',
    websiteLabel: 'Website',
    websitePlaceholder: 'https://company.com',
    teamSizeLabel: 'Размер команды',
    teamSizePlaceholder: '5–20 человек',

    step4Title: 'Насколько сложный продукт или система?',
    step4Description: 'Эти параметры помогут оценить объём работы',
    rolesCountLabel: 'Количество ролей',
    rolesCountPlaceholder: '2–3 роли',
    screenCountLabel: 'Примерное число экранов / модулей',
    screenCountPlaceholder: '10–20 экранов',
    complexityFlags: [
      'Role-based permissions',
      'Dashboard views',
      'Mobile views',
      'Prototype',
      'Базовая система компонентов',
      'Материалы для разработки',
      'Multilingual support',
      'Arabic / RTL',
      'Есть брендинг',
    ],

    step5Title: 'Какие материалы уже есть?',
    step5Description: 'Это поможет понять, с чего начать работу',
    materials: [
      { id: 'notes', label: 'Rough notes' },
      { id: 'brief', label: 'Product brief' },
      { id: 'prd', label: 'PRD / требования' },
      { id: 'screens', label: 'Текущие экраны' },
      { id: 'legacy', label: 'Старый продукт / legacy' },
      { id: 'brand', label: 'Brand assets' },
      { id: 'wireframes', label: 'Wireframes' },
      { id: 'nothing', label: 'Пока ничего' },
    ],
    wizardUploadLabel: 'Дополнительные файлы',
    wizardUploadHint: 'PDF, PNG, JPG, DOCX, ZIP — до 50 MB на файл',

    step6Title: 'Какие ожидания по срокам и бюджету?',
    step6Description: 'Это поможет подобрать оптимальный формат работы',
    timelineLabel: 'Ожидаемые сроки',
    timelineOptions: [
      { id: 'asap', label: 'ASAP' },
      { id: '2weeks', label: 'До 2 недель' },
      { id: '1month', label: 'До 1 месяца' },
      { id: '6weeks', label: 'До 6 недель' },
      { id: 'flexible', label: 'Гибко' },
    ],
    budgetLabel: 'Ориентир по бюджету',
    budgetOptions: [
      { id: '3-5k', label: '$3k–$5k' },
      { id: '5-7k', label: '$5k–$7k' },
      { id: '7-10k', label: '$7k–$10k' },
      { id: '10-15k', label: '$10k–$15k' },
      { id: '15k+', label: '$15k+' },
      { id: 'recommend', label: 'Нужна рекомендация' },
    ],
    notesLabel: 'Краткий комментарий',
    notesPlaceholder: 'Если есть дополнительные детали, добавьте их здесь...',

    step7Title: 'Куда отправить предложение?',
    step7Description: 'Заполните контактные данные для получения рекомендации',
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
    summaryProjectType: 'Тип проекта',
    summaryGoal: 'Цель',
    summaryTeam: 'Команда',
    summaryTimeline: 'Сроки',

    summaryResultsTitle: 'После отправки вы получите',
    summaryResults: [
      'Рекомендацию по формату работы',
      'Ориентир по срокам',
      'Стартовую стоимость',
      'Следующий шаг по проекту',
    ],
    summaryFooter: 'Финальный объём зависит от сложности, числа ролей, модулей, языков и глубины проработки.',
  },

  en: {
    steps: [
      { id: 1, title: 'Project Type' },
      { id: 2, title: 'Goal' },
      { id: 3, title: 'Team' },
      { id: 4, title: 'Complexity' },
      { id: 5, title: 'Materials' },
      { id: 6, title: 'Timeline' },
      { id: 7, title: 'Contact' },
    ],
    backToOptions: 'Back to options',
    previousStep: 'Previous step',
    back: 'Back',
    cancel: 'Cancel',
    stepOf: (current, total) => `Step ${current} of ${total}`,

    step1Title: 'What are you planning to build?',
    step1Description: 'Choose the project type that best matches your task',
    projectTypes: [
      { id: 'website', label: 'Website / Corporate Site', desc: 'Landing page, corporate website, product page' },
      { id: 'website-redesign', label: 'Website Redesign', desc: 'UX/UI improvement of existing website' },
      { id: 'b2b', label: 'B2B Platform', desc: 'SaaS, marketplace, business system' },
      { id: 'internal', label: 'Internal System', desc: 'CRM, ERP, operational tools' },
      { id: 'portal', label: 'Client Portal', desc: 'Personal dashboard, self-service' },
      { id: 'dashboard', label: 'Dashboard / Analytics', desc: 'Analytics, monitoring, reporting' },
      { id: 'mobile', label: 'Mobile Application', desc: 'iOS, Android, cross-platform' },
      { id: 'redesign', label: 'Digital Product Redesign', desc: 'UX/UI improvement of system or app' },
      { id: 'presale', label: 'Presale / Investor Prototype', desc: 'Demo for fundraising or tender' },
      { id: 'other', label: 'Other', desc: 'Tell us more in the next steps' },
    ],

    step2Title: 'What is the main goal of the project right now?',
    step2Description: 'This helps us recommend the right format of work',
    projectGoals: [
      { id: 'fundraising', label: 'Fundraising / Investor Presentation' },
      { id: 'pitch', label: 'Pitch / Tender / Presale' },
      { id: 'dev-handover', label: 'Preparation for Development Handoff' },
      { id: 'internal-launch', label: 'Internal Launch / Digitization' },
      { id: 'redesign', label: 'Redesign / UX Improvement' },
      { id: 'whitelabel', label: 'White-label for Client' },
      { id: 'new-market', label: 'New Market Entry' },
      { id: 'other', label: 'Other' },
    ],

    step3Title: 'How would you describe your team?',
    step3Description: 'This helps adapt the format of work to your context',
    teamTypes: [
      { id: 'founder', label: 'Founder / Startup Team' },
      { id: 'product', label: 'In-house Product Team' },
      { id: 'b2b', label: 'B2B Company / Operations Team' },
      { id: 'agency', label: 'Agency / Integrator' },
      { id: 'consultant', label: 'Consultant / Partner' },
      { id: 'other', label: 'Other' },
    ],
    companyNameLabel: 'Company name',
    companyNamePlaceholder: 'Acme Inc.',
    websiteLabel: 'Website',
    websitePlaceholder: 'https://company.com',
    teamSizeLabel: 'Team size',
    teamSizePlaceholder: '5–20 people',

    step4Title: 'How complex is the product or system?',
    step4Description: 'These details help estimate scope',
    rolesCountLabel: 'Number of roles',
    rolesCountPlaceholder: '2–3 roles',
    screenCountLabel: 'Approximate number of screens / modules',
    screenCountPlaceholder: '10–20 screens',
    complexityFlags: [
      'Role-based permissions',
      'Dashboard views',
      'Mobile views',
      'Prototype',
      'Basic component system',
      'Materials for development',
      'Multilingual support',
      'Arabic / RTL',
      'Branding exists',
    ],

    step5Title: 'What materials do you already have?',
    step5Description: 'This helps understand where to start',
    materials: [
      { id: 'notes', label: 'Rough notes' },
      { id: 'brief', label: 'Product brief' },
      { id: 'prd', label: 'PRD / Requirements' },
      { id: 'screens', label: 'Current screens' },
      { id: 'legacy', label: 'Old product / Legacy' },
      { id: 'brand', label: 'Brand assets' },
      { id: 'wireframes', label: 'Wireframes' },
      { id: 'nothing', label: 'Nothing yet' },
    ],
    wizardUploadLabel: 'Additional files',
    wizardUploadHint: 'PDF, PNG, JPG, DOCX, ZIP — up to 50 MB per file',

    step6Title: 'What are your timeline and budget expectations?',
    step6Description: 'This helps choose the most suitable format',
    timelineLabel: 'Expected timeline',
    timelineOptions: [
      { id: 'asap', label: 'ASAP' },
      { id: '2weeks', label: 'Within 2 weeks' },
      { id: '1month', label: 'Within 1 month' },
      { id: '6weeks', label: 'Within 6 weeks' },
      { id: 'flexible', label: 'Flexible' },
    ],
    budgetLabel: 'Budget range',
    budgetOptions: [
      { id: '3-5k', label: '$3k–$5k' },
      { id: '5-7k', label: '$5k–$7k' },
      { id: '7-10k', label: '$7k–$10k' },
      { id: '10-15k', label: '$10k–$15k' },
      { id: '15k+', label: '$15k+' },
      { id: 'recommend', label: 'Need recommendation' },
    ],
    notesLabel: 'Short note',
    notesPlaceholder: 'Add any extra details here if relevant...',

    step7Title: 'Where should we send the proposal?',
    step7Description: 'Fill in your contact details to receive the recommendation',
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
    summaryProjectType: 'Project type',
    summaryGoal: 'Goal',
    summaryTeam: 'Team',
    summaryTimeline: 'Timeline',

    summaryResultsTitle: 'After submitting you will receive',
    summaryResults: [
      'A recommendation on the right format of work',
      'A timeline range',
      'A starting price direction',
      'The clearest next step for the project',
    ],
    summaryFooter: 'The final scope depends on complexity, number of roles, modules, languages, and depth of work.',
  },

  ar: {
    steps: [
      { id: 1, title: 'نوع المشروع' },
      { id: 2, title: 'الهدف' },
      { id: 3, title: 'الفريق' },
      { id: 4, title: 'التعقيد' },
      { id: 5, title: 'المواد' },
      { id: 6, title: 'الجدول الزمني' },
      { id: 7, title: 'التواصل' },
    ],
    backToOptions: 'رجوع للخيارات',
    previousStep: 'الخطوة السابقة',
    back: 'رجوع',
    cancel: 'إلغاء',
    stepOf: (current, total) => `الخطوة ${current} من ${total}`,

    step1Title: 'ما الذي تخطط للعمل عليه؟',
    step1Description: 'اختر نوع المشروع الذي يصف مهمتك بشكل أفضل',
    projectTypes: [
      { id: 'website', label: 'موقع إلكتروني / موقع شركة', desc: 'صفحة هبوط، موقع مؤسسي، صفحة منتج' },
      { id: 'website-redesign', label: 'إعادة تصميم موقع', desc: 'تحسين UX/UI لموقع قائم' },
      { id: 'b2b', label: 'منصة B2B', desc: 'SaaS، سوق إلكتروني، نظام أعمال' },
      { id: 'internal', label: 'نظام داخلي', desc: 'CRM، ERP، أدوات تشغيلية' },
      { id: 'portal', label: 'بوابة عملاء', desc: 'لوحة تحكم شخصية، خدمة ذاتية' },
      { id: 'dashboard', label: 'لوحة تحكم / تحليلات', desc: 'تحليلات، مراقبة، تقارير' },
      { id: 'mobile', label: 'تطبيق جوال', desc: 'iOS، Android، متعدد المنصات' },
      { id: 'redesign', label: 'إعادة تصميم منتج رقمي', desc: 'تحسين UX/UI لنظام أو تطبيق' },
      { id: 'presale', label: 'نموذج أولي للمستثمرين', desc: 'عرض توضيحي للتمويل أو المناقصات' },
      { id: 'other', label: 'آخر', desc: 'أخبرنا المزيد في الخطوات التالية' },
    ],

    step2Title: 'ما هو الهدف الرئيسي للمشروع الآن؟',
    step2Description: 'هذا يساعدنا في اقتراح صيغة العمل الأنسب',
    projectGoals: [
      { id: 'fundraising', label: 'التمويل / عرض للمستثمرين' },
      { id: 'pitch', label: 'عرض تقديمي / مناقصة / ما قبل البيع' },
      { id: 'dev-handover', label: 'التحضير لتسليم التطوير' },
      { id: 'internal-launch', label: 'إطلاق داخلي / رقمنة' },
      { id: 'redesign', label: 'إعادة تصميم / تحسين UX' },
      { id: 'whitelabel', label: 'White-label للعميل' },
      { id: 'new-market', label: 'دخول سوق جديد' },
      { id: 'other', label: 'آخر' },
    ],

    step3Title: 'كيف تصف فريقك بشكل أفضل؟',
    step3Description: 'هذا يساعدنا في تكييف صيغة العمل مع سياقك',
    teamTypes: [
      { id: 'founder', label: 'مؤسس / فريق شركة ناشئة' },
      { id: 'product', label: 'فريق منتج داخلي' },
      { id: 'b2b', label: 'شركة B2B / فريق عمليات' },
      { id: 'agency', label: 'وكالة / شركة تكامل' },
      { id: 'consultant', label: 'مستشار / شريك' },
      { id: 'other', label: 'آخر' },
    ],
    companyNameLabel: 'اسم الشركة',
    companyNamePlaceholder: 'Acme Inc.',
    websiteLabel: 'الموقع الإلكتروني',
    websitePlaceholder: 'https://company.com',
    teamSizeLabel: 'حجم الفريق',
    teamSizePlaceholder: '5–20 شخصاً',

    step4Title: 'ما مدى تعقيد المنتج أو النظام؟',
    step4Description: 'تساعدنا هذه المعطيات على تقدير حجم العمل',
    rolesCountLabel: 'عدد الأدوار',
    rolesCountPlaceholder: '2–3 أدوار',
    screenCountLabel: 'العدد التقريبي للشاشات / الوحدات',
    screenCountPlaceholder: '10–20 شاشة',
    complexityFlags: [
      'صلاحيات قائمة على الأدوار',
      'واجهات Dashboard',
      'واجهات الجوال',
      'Prototype',
      'نظام مكونات أساسي',
      'مواد للتطوير',
      'دعم متعدد اللغات',
      'Arabic / RTL',
      'توجد هوية بصرية',
    ],

    step5Title: 'ما المواد المتوفرة لديك الآن؟',
    step5Description: 'هذا يساعدنا على فهم نقطة البداية',
    materials: [
      { id: 'notes', label: 'ملاحظات أولية' },
      { id: 'brief', label: 'brief للمنتج' },
      { id: 'prd', label: 'PRD / متطلبات' },
      { id: 'screens', label: 'شاشات حالية' },
      { id: 'legacy', label: 'منتج قديم / Legacy' },
      { id: 'brand', label: 'عناصر العلامة التجارية' },
      { id: 'wireframes', label: 'Wireframes' },
      { id: 'nothing', label: 'لا شيء بعد' },
    ],
    wizardUploadLabel: 'ملفات إضافية',
    wizardUploadHint: 'PDF، PNG، JPG، DOCX، ZIP — حتى 50 MB لكل ملف',

    step6Title: 'ما توقعاتك من حيث الوقت والميزانية؟',
    step6Description: 'هذا يساعد في اختيار الصيغة الأنسب للعمل',
    timelineLabel: 'الجدول الزمني المتوقع',
    timelineOptions: [
      { id: 'asap', label: 'في أقرب وقت' },
      { id: '2weeks', label: 'خلال أسبوعين' },
      { id: '1month', label: 'خلال شهر' },
      { id: '6weeks', label: 'خلال 6 أسابيع' },
      { id: 'flexible', label: 'مرن' },
    ],
    budgetLabel: 'نطاق الميزانية',
    budgetOptions: [
      { id: '3-5k', label: '$3k–$5k' },
      { id: '5-7k', label: '$5k–$7k' },
      { id: '7-10k', label: '$7k–$10k' },
      { id: '10-15k', label: '$10k–$15k' },
      { id: '15k+', label: '$15k+' },
      { id: 'recommend', label: 'أحتاج توصية' },
    ],
    notesLabel: 'ملاحظة مختصرة',
    notesPlaceholder: 'أضف أي تفاصيل إضافية هنا إذا كانت مهمة...',

    step7Title: 'إلى أين نرسل لك العرض؟',
    step7Description: 'املأ بيانات التواصل لتلقي التوصية',
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
    summaryProjectType: 'نوع المشروع',
    summaryGoal: 'الهدف',
    summaryTeam: 'الفريق',
    summaryTimeline: 'المدة',

    summaryResultsTitle: 'بعد الإرسال ستحصل على',
    summaryResults: [
      'توصية بصيغة العمل المناسبة',
      'نطاق زمني متوقع',
      'اتجاه مبدئي للسعر',
      'الخطوة التالية الأكثر وضوحاً للمشروع',
    ],
    summaryFooter: 'يعتمد النطاق النهائي على التعقيد وعدد الأدوار والوحدات واللغات وعمق العمل المطلوب.',
  },
}

function WizardChoiceCard({
  active,
  title,
  description,
  onClick,
  rtl,
}: {
  active: boolean
  title: string
  description?: string
  onClick: () => void
  rtl: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-sm border p-4 transition-all',
        active ? 'border-foreground bg-foreground/5' : 'border-border hover:border-foreground/30',
        rtl ? 'text-right' : 'text-left',
      )}
    >
      <div className="font-medium text-sm text-foreground">{title}</div>
      {description ? <div className="mt-1 text-xs text-muted-foreground">{description}</div> : null}
    </button>
  )
}

function ProposalWizard({
  locale,
  rtl,
  onBackToIntro,
  onSuccess,
}: {
  locale: Locale
  rtl: boolean
  onBackToIntro: () => void
  onSuccess: () => void
}) {
  const copy = WIZARD_COPY[locale]
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<WizardData>({
    complexityFlags: [],
    materials: [],
    uploadedFiles: [],
  })

  const totalSteps = copy.steps.length

  const selectedProjectType = copy.projectTypes.find((t) => t.id === data.projectType)?.label
  const selectedProjectGoal = copy.projectGoals.find((t) => t.id === data.projectGoal)?.label
  const selectedTeamType = copy.teamTypes.find((t) => t.id === data.teamType)?.label
  const selectedTimeline = copy.timelineOptions.find((t) => t.id === data.timeline)?.label

  const toggleArrayValue = (key: 'complexityFlags' | 'materials', value: string) => {
    setData((prev) => {
      const current = prev[key] ?? []
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]

      return { ...prev, [key]: next }
    })
  }

  const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(e.target.files ?? []).map((file) => file.name)
    if (!nextFiles.length) return
    setData((prev) => ({ ...prev, uploadedFiles: [...(prev.uploadedFiles ?? []), ...nextFiles] }))
    e.target.value = ''
  }

  const handleNext = () => {
    if (currentStep === totalSteps) {
      onSuccess()
      return
    }
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (currentStep === 1) {
      onBackToIntro()
      return
    }
    setCurrentStep((prev) => prev - 1)
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px] lg:gap-12">
          <div className="rounded-sm border border-border bg-card">
            <div className="border-b border-border px-8 py-6">
              <div className={cn('mb-4 flex items-center justify-between', rtl && 'flex-row-reverse')}>
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {rtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                  {currentStep === 1 ? copy.back : copy.previousStep}
                </button>

                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {copy.stepOf(currentStep, totalSteps)}
                </span>
              </div>

              <div className="flex gap-1.5">
                {copy.steps.map((step) => (
                  <div
                    key={step.id}
                    className={cn(
                      'h-1 flex-1 rounded-full transition-colors',
                      step.id < currentStep
                        ? 'bg-signature-cobalt'
                        : step.id === currentStep
                          ? 'bg-gradient-to-r from-signature-cobalt to-signature-brass'
                          : 'bg-border',
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="p-8">
              {currentStep === 1 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {copy.step1Title}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{copy.step1Description}</p>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {copy.projectTypes.map((type) => (
                      <WizardChoiceCard
                        key={type.id}
                        active={data.projectType === type.id}
                        title={type.label}
                        description={type.desc}
                        onClick={() => setData((prev) => ({ ...prev, projectType: type.id }))}
                        rtl={rtl}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {currentStep === 2 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {copy.step2Title}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{copy.step2Description}</p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {copy.projectGoals.map((goal) => (
                      <WizardChoiceCard
                        key={goal.id}
                        active={data.projectGoal === goal.id}
                        title={goal.label}
                        onClick={() => setData((prev) => ({ ...prev, projectGoal: goal.id }))}
                        rtl={rtl}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {currentStep === 3 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {copy.step3Title}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{copy.step3Description}</p>

                  <div className="mb-8 grid gap-3 sm:grid-cols-2">
                    {copy.teamTypes.map((team) => (
                      <WizardChoiceCard
                        key={team.id}
                        active={data.teamType === team.id}
                        title={team.label}
                        onClick={() => setData((prev) => ({ ...prev, teamType: team.id }))}
                        rtl={rtl}
                      />
                    ))}
                  </div>

                  <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.companyNameLabel}
                      </label>
                      <Input
                        value={data.companyName ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, companyName: e.target.value }))}
                        placeholder={copy.companyNamePlaceholder}
                        className="h-10"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.websiteLabel}
                      </label>
                      <Input
                        value={data.website ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, website: e.target.value }))}
                        placeholder={copy.websitePlaceholder}
                        className="h-10"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.teamSizeLabel}
                      </label>
                      <Input
                        value={data.teamSize ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, teamSize: e.target.value }))}
                        placeholder={copy.teamSizePlaceholder}
                        className="h-10"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 4 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {copy.step4Title}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{copy.step4Description}</p>

                  <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.rolesCountLabel}
                        </label>
                        <Input
                          value={data.rolesCount ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, rolesCount: e.target.value }))}
                          placeholder={copy.rolesCountPlaceholder}
                          className="h-10"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.screenCountLabel}
                        </label>
                        <Input
                          value={data.screenCount ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, screenCount: e.target.value }))}
                          placeholder={copy.screenCountPlaceholder}
                          className="h-10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                      {copy.complexityFlags.map((flag) => (
                        <label
                          key={flag}
                          className="flex cursor-pointer items-start gap-3 rounded-sm border border-border p-3"
                        >
                          <Checkbox
                            checked={data.complexityFlags.includes(flag)}
                            onCheckedChange={() => toggleArrayValue('complexityFlags', flag)}
                            className="mt-0.5"
                          />
                          <span className="text-sm text-foreground">{flag}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 5 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {copy.step5Title}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{copy.step5Description}</p>

                  <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {copy.materials.map((material) => (
                      <button
                        key={material.id}
                        onClick={() => toggleArrayValue('materials', material.id)}
                        className={cn(
                          'rounded-sm border p-4 transition-all',
                          data.materials.includes(material.id)
                            ? 'border-foreground bg-foreground/5'
                            : 'border-border hover:border-foreground/30',
                          rtl ? 'text-right' : 'text-left',
                        )}
                      >
                        <div className={cn('flex items-center gap-2', rtl && 'flex-row-reverse')}>
                          {data.materials.includes(material.id) ? <Check className="h-4 w-4 text-foreground" /> : null}
                          <span className="text-sm font-medium text-foreground">{material.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <label className="block">
                    <span className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                      {copy.wizardUploadLabel}
                    </span>
                    <input type="file" multiple className="hidden" onChange={handleUploadFiles} />
                    <div className="cursor-pointer rounded-sm border-2 border-dashed border-border p-8 text-center transition-colors hover:border-foreground/30">
                      <Upload className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-foreground">{copy.wizardUploadHint}</p>
                    </div>
                  </label>

                  {data.uploadedFiles.length ? (
                    <div className="mt-4 space-y-2">
                      {data.uploadedFiles.map((file, index) => (
                        <div key={`${file}-${index}`} className="flex items-center gap-3 rounded-sm bg-secondary/30 p-3">
                          <Paperclip className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{file}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {currentStep === 6 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {copy.step6Title}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{copy.step6Description}</p>

                  <div className="space-y-8">
                    <div>
                      <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.timelineLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {copy.timelineOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setData((prev) => ({ ...prev, timeline: option.id }))}
                            className={cn(
                              'rounded-sm border px-4 py-2 text-sm transition-all',
                              data.timeline === option.id
                                ? 'border-foreground bg-foreground text-background'
                                : 'border-border text-foreground hover:border-foreground/30',
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.budgetLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {copy.budgetOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setData((prev) => ({ ...prev, budget: option.id }))}
                            className={cn(
                              'rounded-sm border px-4 py-2 text-sm transition-all',
                              data.budget === option.id
                                ? 'border-foreground bg-foreground text-background'
                                : 'border-border text-foreground hover:border-foreground/30',
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.notesLabel}
                      </label>
                      <Textarea
                        value={data.briefNotes ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, briefNotes: e.target.value }))}
                        placeholder={copy.notesPlaceholder}
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 7 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {copy.step7Title}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{copy.step7Description}</p>

                  <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.nameLabel}
                        </label>
                        <Input
                          value={data.name ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder={copy.namePlaceholder}
                          className="h-10"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.emailLabel}
                        </label>
                        <Input
                          type="email"
                          value={data.email ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder={copy.emailPlaceholder}
                          className="h-10"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.companyLabel}
                        </label>
                        <Input
                          value={data.company ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, company: e.target.value }))}
                          placeholder={copy.companyPlaceholder}
                          className="h-10"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.roleLabel}
                        </label>
                        <Input
                          value={data.role ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, role: e.target.value }))}
                          placeholder={copy.rolePlaceholder}
                          className="h-10"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.regionLabel}
                        </label>
                        <Input
                          value={data.region ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, region: e.target.value }))}
                          placeholder={copy.regionPlaceholder}
                          className="h-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.phoneLabel}
                      </label>
                      <Input
                        value={data.phone ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder={copy.phonePlaceholder}
                        className="h-10"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {copy.commentLabel}
                      </label>
                      <Textarea
                        value={data.comment ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, comment: e.target.value }))}
                        placeholder={copy.commentPlaceholder}
                        rows={3}
                      />
                    </div>

                    <div className="space-y-3 border-t border-border pt-4">
                      <label className="flex cursor-pointer items-start gap-3">
                        <Checkbox
                          checked={Boolean(data.noCallFirst)}
                          onCheckedChange={(checked: Boolean) => setData((prev) => ({ ...prev, noCallFirst: Boolean(checked) }))}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-foreground">{copy.noCallLabel}</span>
                      </label>

                      <label className="flex cursor-pointer items-start gap-3">
                        <Checkbox
                          checked={Boolean(data.expertReview)}
                          onCheckedChange={(checked: Boolean) => setData((prev) => ({ ...prev, expertReview: Boolean(checked) }))}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-foreground">{copy.expertReviewLabel}</span>
                      </label>

                      <label className="flex cursor-pointer items-start gap-3">
                        <Checkbox
                          checked={Boolean(data.nda)}
                          onCheckedChange={(checked: Boolean) => setData((prev) => ({ ...prev, nda: Boolean(checked) }))}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-foreground">{copy.ndaLabel}</span>
                      </label>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className={cn('mt-8 flex items-center justify-between border-t border-border pt-6', rtl && 'flex-row-reverse')}>
                <button
                  onClick={handlePrev}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {currentStep === 1 ? copy.cancel : copy.back}
                </button>

                <Button
                  onClick={handleNext}
                  className="h-10 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
                >
                  {currentStep === totalSteps ? copy.submitLabel : copy.nextLabel}
                  {rtl ? <ArrowLeft className="mr-2 h-3.5 w-3.5" /> : <ArrowRight className="ml-2 h-3.5 w-3.5" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-sm border border-border bg-card p-6">
              <h3 className="mb-4 font-serif text-lg font-medium text-foreground">
                {copy.summaryTitle}
              </h3>

              <div className="space-y-4 text-sm">
                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <FileText className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {copy.summaryProjectType}
                    </div>
                    <div className="text-foreground">{selectedProjectType || '—'}</div>
                  </div>
                </div>

                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <Target className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {copy.summaryGoal}
                    </div>
                    <div className="text-foreground">{selectedProjectGoal || '—'}</div>
                  </div>
                </div>

                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <Users className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {copy.summaryTeam}
                    </div>
                    <div className="text-foreground">{selectedTeamType || '—'}</div>
                  </div>
                </div>

                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {copy.summaryTimeline}
                    </div>
                    <div className="text-foreground">{selectedTimeline || '—'}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                  {copy.summaryResultsTitle}
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  {copy.summaryResults.map((item) => (
                    <li key={item} className={cn('flex items-center gap-2', rtl && 'flex-row-reverse')}>
                      <Check className="h-3.5 w-3.5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {copy.summaryFooter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UploadMaterialsView({
  block,
  locale,
  rtl,
  onBack,
  onSuccess,
}: {
  block: ProposalFlowProposalBlockData
  locale: Locale
  rtl: boolean
  onBack: () => void
  onSuccess: () => void
}) {
  const [files, setFiles] = useState<string[]>([])
  const [links, setLinks] = useState<string[]>([])
  const [newLink, setNewLink] = useState('')

  const addLink = () => {
    if (!newLink.trim()) return
    setLinks((prev) => [...prev, newLink.trim()])
    setNewLink('')
  }

  const removeLink = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index))
  }

  const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(e.target.files ?? []).map((file) => file.name)
    if (!nextFiles.length) return
    setFiles((prev) => [...prev, ...nextFiles])
    e.target.value = ''
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-sm border border-border bg-card">
          <div className="border-b border-border px-8 py-6">
            <button
              onClick={onBack}
              className={cn(
                'mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground',
                rtl && 'flex-row-reverse',
              )}
            >
              {rtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              {block.uploadBackLabel}
            </button>

            <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
              {block.uploadViewTitle}
            </h2>
            <p className="text-sm text-muted-foreground">{block.uploadViewDescription}</p>
          </div>

          <div className="space-y-8 p-8">
            <div>
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block.uploadFilesLabel}
              </label>

              <label className="block cursor-pointer">
                <input type="file" multiple className="hidden" onChange={handleUploadFiles} />
                <div className="rounded-sm border-2 border-dashed border-border p-10 text-center transition-colors hover:border-foreground/30">
                  <Upload className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                  <p className="mb-2 text-foreground">{block.uploadFilesHint}</p>
                </div>
              </label>

              {files.length ? (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={`${file}-${index}`} className={cn('flex items-center justify-between rounded-sm bg-secondary/30 p-3', rtl && 'flex-row-reverse')}>
                      <div className={cn('flex items-center gap-3', rtl && 'flex-row-reverse')}>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{file}</span>
                      </div>
                      <button
                        onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block.uploadLinksLabel}
              </label>
              <div className={cn('flex gap-3', rtl && 'flex-row-reverse')}>
                <Input
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  placeholder={block.uploadLinksPlaceholder ?? ''}
                  className="h-10 flex-1"
                  dir="ltr"
                  onKeyDown={(e) => e.key === 'Enter' && addLink()}
                />
                <Button onClick={addLink} variant="outline" className="h-10 px-4">
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>

              {links.length ? (
                <div className="mt-4 space-y-2">
                  {links.map((link, index) => (
                    <div key={`${link}-${index}`} className={cn('flex items-center justify-between rounded-sm bg-secondary/30 p-3', rtl && 'flex-row-reverse')}>
                      <div className={cn('flex items-center gap-3', rtl && 'flex-row-reverse')}>
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="max-w-[400px] truncate text-sm text-foreground" dir="ltr">
                          {link}
                        </span>
                      </div>
                      <button onClick={() => removeLink(index)} className="text-muted-foreground hover:text-foreground">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block.uploadDescriptionLabel}
              </label>
              <Textarea placeholder={block.uploadDescriptionPlaceholder ?? ''} rows={5} />
            </div>

            <div className="border-t border-border pt-6">
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block.uploadContactLabel}
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder={block.uploadNamePlaceholder ?? ''} className="h-10" />
                <Input type="email" placeholder={block.uploadEmailPlaceholder ?? ''} className="h-10" />
              </div>
            </div>

            <div className={cn('flex items-center justify-between border-t border-border pt-6', rtl && 'flex-row-reverse')}>
              <button onClick={onBack} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {block.uploadCancelLabel}
              </button>

              <Button
                onClick={onSuccess}
                className="h-10 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
              >
                {block.uploadSubmitLabel}
                {rtl ? <ArrowLeft className="mr-2 h-3.5 w-3.5" /> : <ArrowRight className="ml-2 h-3.5 w-3.5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SuccessView({
  block,
  locale,
  rtl,
  onUploadMore,
}: {
  block: ProposalFlowProposalBlockData
  locale: Locale
  rtl: boolean
  onUploadMore: () => void
}) {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/15">
            <Check className="h-10 w-10 text-accent" />
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
            {block.successTitle}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            {block.successDescription}
          </p>
        </div>

        <div className="mb-12 rounded-sm border border-border bg-card p-8">
          <h3 className="mb-6 text-center text-xs uppercase tracking-wider text-muted-foreground">
            {block.successStepsTitle}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {block.successSteps?.map((step) =>
              step?.number && step?.title && step?.description ? (
                <div key={step.number} className={cn('flex gap-4', rtl && 'flex-row-reverse text-right')}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <span className="text-xs font-medium text-foreground">{step.number}</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-foreground">{step.title}</div>
                    <div className="text-xs text-muted-foreground">{step.description}</div>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>

        <div className={cn('flex flex-col items-center justify-center gap-4 sm:flex-row', rtl && 'sm:flex-row-reverse')}>
          <Button
            asChild
            className="h-11 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
          >
            <Link href={getHrefForPageKey(block.successHomePageKey ?? 'home', locale)}>
              {rtl ? <Home className="ml-2 h-4 w-4" /> : <Home className="mr-2 h-4 w-4" />}
              {block.successHomeLabel}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-11 border-foreground/20 px-6 text-[11px] uppercase tracking-[0.12em] text-foreground hover:bg-foreground/5"
          >
            <Link href={getHrefForPageKey(block.successPricingPageKey ?? 'pricing', locale)}>
              {rtl ? <Layers className="ml-2 h-4 w-4" /> : <Layers className="mr-2 h-4 w-4" />}
              {block.successPricingLabel}
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="h-11 px-6 text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
            onClick={onUploadMore}
          >
            {rtl ? <Upload className="ml-2 h-4 w-4" /> : <Upload className="mr-2 h-4 w-4" />}
            {block.successUploadMoreLabel}
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {block.supportNotePrefix}{' '}
            <a href={`mailto:${block.supportEmail}`} className="text-foreground hover:underline">
              {block.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export function ProposalFlowProposalBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isArabic = locale === 'ar'
  const [activeView, setActiveView] = useState<ViewState>('intro')

  const processSteps = useMemo(() => block.processSteps ?? [], [block.processSteps])

  return (
    <section dir={rtl ? 'rtl' : 'ltr'}>
      {activeView === 'success' ? (
        <SuccessView
          block={block}
          locale={locale}
          rtl={rtl}
          onUploadMore={() => setActiveView('upload')}
        />
      ) : (
        <>
          {activeView === 'intro' ? (
            <section className="py-12 lg:py-16">
              <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className={cn('group relative rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent/40', rtl && 'text-right')}>
                    <div className={cn('absolute top-6', rtl ? 'left-6' : 'right-6')}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                        <FileText className="h-5 w-5 text-accent" />
                      </div>
                    </div>

                    <div className={rtl ? 'pl-14' : 'pr-14'}>
                      <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
                        {block.briefCardTitle}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {block.briefCardDescription}
                      </p>
                    </div>

                    <Button
                      onClick={() => setActiveView('wizard')}
                      className="h-10 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
                    >
                      {block.briefButtonLabel}
                      {rtl ? <ArrowLeft className="mr-2 h-3.5 w-3.5" /> : <ArrowRight className="ml-2 h-3.5 w-3.5" />}
                    </Button>
                  </div>

                  <div className={cn('group relative rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent/40', rtl && 'text-right')}>
                    <div className={cn('absolute top-6', rtl ? 'left-6' : 'right-6')}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className={rtl ? 'pl-14' : 'pr-14'}>
                      <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
                        {block.uploadCardTitle}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {block.uploadCardDescription}
                      </p>
                    </div>

                    <Button
                      onClick={() => setActiveView('upload')}
                      variant="outline"
                      className="h-10 border-foreground/20 px-6 text-[11px] uppercase tracking-[0.12em] text-foreground hover:bg-foreground/5"
                    >
                      {block.uploadButtonLabel}
                      {rtl ? <ArrowLeft className="mr-2 h-3.5 w-3.5" /> : <ArrowRight className="ml-2 h-3.5 w-3.5" />}
                    </Button>
                  </div>
                </div>

                <div className="mt-16 lg:mt-20">
                  <div className="mb-8 flex items-center gap-4">
                    <span className="h-px flex-1 bg-border/60" />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      {block.processEyebrow}
                    </span>
                    <span className="h-px flex-1 bg-border/60" />
                  </div>

                  <div className="mb-10 text-center">
                    <h3 className="mb-4 font-serif text-2xl font-light text-foreground lg:text-[1.75rem]">
                      {block.processTitle}
                    </h3>
                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {block.processDescription}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                    {processSteps.map((step, index) => {
                      if (!step?.title || !step?.description) return null
                      const iconKey =
                        step.icon === 'arrowUpRight' && isArabic
                          ? 'arrowUpLeft'
                          : step.icon ?? 'target'
                      const Icon = PROCESS_ICONS[iconKey] ?? Target

                      return (
                        <div
                          key={`${step.title}-${index}`}
                          className={cn('relative rounded-sm border border-border/50 bg-secondary/30 p-5', rtl && 'text-right')}
                        >
                          <div className={cn('absolute top-4 text-[10px] font-medium text-muted-foreground/40', rtl ? 'left-4' : 'right-4')}>
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background">
                            <Icon className="h-4 w-4 text-foreground/70" />
                          </div>

                          <h4 className="mb-2 text-sm font-medium text-foreground">{step.title}</h4>
                          <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {activeView === 'wizard' ? (
            <ProposalWizard
              locale={locale}
              rtl={rtl}
              onBackToIntro={() => setActiveView('intro')}
              onSuccess={() => setActiveView('success')}
            />
          ) : null}

          {activeView === 'upload' ? (
            <UploadMaterialsView
              block={block}
              locale={locale}
              rtl={rtl}
              onBack={() => setActiveView('intro')}
              onSuccess={() => setActiveView('success')}
            />
          ) : null}
        </>
      )}
    </section>
  )
}