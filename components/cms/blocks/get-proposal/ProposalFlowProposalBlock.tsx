'use client'

import { useMemo, useState, type ChangeEvent } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  // Checkbox as CheckboxIcon,
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
import { cn } from '@/lib/utils'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

type TextOption = {
  value?: string | null
  label?: string | null
}

type TextOptionWithDescription = TextOption & {
  description?: string | null
}

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
  intro?: {
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
  } | null
  wizard?: {
    stepLabels?: { value?: string | null }[] | null
    backToOptionsLabel?: string | null
    previousStepLabel?: string | null
    backLabel?: string | null
    cancelLabel?: string | null
    stepCounterPrefix?: string | null
    stepCounterConnector?: string | null

    projectTypeTitle?: string | null
    projectTypeDescription?: string | null
    projectTypes?: TextOptionWithDescription[] | null

    goalTitle?: string | null
    goalDescription?: string | null
    projectGoals?: TextOption[] | null

    teamTitle?: string | null
    teamDescription?: string | null
    teamTypes?: TextOption[] | null
    companyNameLabel?: string | null
    companyNamePlaceholder?: string | null
    websiteLabel?: string | null
    websitePlaceholder?: string | null
    teamSizeLabel?: string | null
    teamSizePlaceholder?: string | null

    complexityTitle?: string | null
    complexityDescription?: string | null
    rolesCountLabel?: string | null
    rolesCountPlaceholder?: string | null
    screenCountLabel?: string | null
    screenCountPlaceholder?: string | null
    complexityFlags?: { value?: string | null }[] | null

    materialsTitle?: string | null
    materialsDescription?: string | null
    materialsOptions?: TextOption[] | null
    wizardUploadLabel?: string | null
    wizardUploadHint?: string | null

    timelineTitle?: string | null
    timelineDescription?: string | null
    timelineLabel?: string | null
    timelineOptions?: TextOption[] | null
    budgetLabel?: string | null
    budgetOptions?: TextOption[] | null
    notesLabel?: string | null
    notesPlaceholder?: string | null

    contactTitle?: string | null
    contactDescription?: string | null
    nameLabel?: string | null
    namePlaceholder?: string | null
    emailLabel?: string | null
    emailPlaceholder?: string | null
    companyLabel?: string | null
    companyPlaceholder?: string | null
    roleLabel?: string | null
    rolePlaceholder?: string | null
    regionLabel?: string | null
    regionPlaceholder?: string | null
    phoneLabel?: string | null
    phonePlaceholder?: string | null
    commentLabel?: string | null
    commentPlaceholder?: string | null
    noCallLabel?: string | null
    expertReviewLabel?: string | null
    ndaLabel?: string | null

    nextLabel?: string | null
    submitLabel?: string | null

    summaryTitle?: string | null
    summaryProjectTypeLabel?: string | null
    summaryGoalLabel?: string | null
    summaryTeamLabel?: string | null
    summaryTimelineLabel?: string | null
    summaryResultsTitle?: string | null
    summaryResults?: { value?: string | null }[] | null
    summaryFooter?: string | null
  } | null
  upload?: {
    title?: string | null
    description?: string | null
    backLabel?: string | null
    filesLabel?: string | null
    filesTitle?: string | null
    filesHint?: string | null
    linksLabel?: string | null
    linksPlaceholder?: string | null
    descriptionLabel?: string | null
    descriptionPlaceholder?: string | null
    contactLabel?: string | null
    namePlaceholder?: string | null
    emailPlaceholder?: string | null
    cancelLabel?: string | null
    submitLabel?: string | null
  } | null
  success?: {
    title?: string | null
    description?: string | null
    stepsTitle?: string | null
    steps?: SuccessStep[] | null
    homeLabel?: string | null
    homePageKey?: PageKey | null
    pricingLabel?: string | null
    pricingPageKey?: PageKey | null
    uploadMoreLabel?: string | null
    supportNotePrefix?: string | null
    supportEmail?: string | null
  } | null
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

const PROCESS_ICONS: Record<string, LucideIcon> = {
  target: Target,
  users: Users,
  layers: Layers,
  arrowUpRight: ArrowUpRight,
  arrowUpLeft: ArrowUpLeft,
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
  description?: string | null
  onClick: () => void
  rtl: boolean
}) {
  return (
    <button
      type="button"
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

function UploadChip({
  label,
  onRemove,
  icon,
  rtl,
}: {
  label: string
  onRemove: () => void
  icon: 'file' | 'link'
  rtl: boolean
}) {
  return (
    <div className={cn('flex items-center justify-between rounded-sm bg-secondary/30 p-3', rtl && 'flex-row-reverse')}>
      <div className={cn('flex items-center gap-3', rtl && 'flex-row-reverse')}>
        {icon === 'file' ? (
          <FileText className="h-4 w-4 text-muted-foreground" />
        ) : (
          <LinkIcon className="h-4 w-4 text-muted-foreground" />
        )}
        <span className="max-w-[400px] truncate text-sm text-foreground" dir={icon === 'link' ? 'ltr' : undefined}>
          {label}
        </span>
      </div>

      <button type="button" onClick={onRemove} className="text-muted-foreground hover:text-foreground">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

function ProposalWizard({
  block,
  locale,
  rtl,
  onBackToIntro,
  onSuccess,
}: {
  block: ProposalFlowProposalBlockData['wizard']
  locale: Locale
  rtl: boolean
  onBackToIntro: () => void
  onSuccess: () => void
}) {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<WizardData>({
    complexityFlags: [],
    materials: [],
    uploadedFiles: [],
  })

  const stepLabels = block?.stepLabels ?? []
  const totalSteps = stepLabels.length || 7
  const isArabic = locale === 'ar'

  const toggleArrayValue = (key: 'complexityFlags' | 'materials', value: string) => {
    setData((prev) => {
      const current = prev[key] ?? []
      return {
        ...prev,
        [key]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      }
    })
  }

  const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(e.target.files ?? []).map((file) => file.name)
    if (!nextFiles.length) return
    setData((prev) => ({ ...prev, uploadedFiles: [...prev.uploadedFiles, ...nextFiles] }))
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

  const selectedProjectType = block?.projectTypes?.find((t) => t.value === data.projectType)?.label
  const selectedProjectGoal = block?.projectGoals?.find((t) => t.value === data.projectGoal)?.label
  const selectedTeamType = block?.teamTypes?.find((t) => t.value === data.teamType)?.label
  const selectedTimeline = block?.timelineOptions?.find((t) => t.value === data.timeline)?.label

  const stepCounter = `${block?.stepCounterPrefix ?? 'Шаг'} ${currentStep} ${block?.stepCounterConnector ?? 'из'} ${totalSteps}`

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px] lg:gap-12">
          <div className="rounded-sm border border-border bg-card">
            <div className="border-b border-border px-8 py-6">
              <div className={cn('mb-4 flex items-center justify-between', rtl && 'flex-row-reverse')}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className={cn('flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground', rtl && 'flex-row-reverse')}
                >
                  {rtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                  {currentStep === 1 ? block?.backToOptionsLabel : block?.previousStepLabel}
                </button>

                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {stepCounter}
                </span>
              </div>

              <div className="flex gap-1.5">
                {Array.from({ length: totalSteps }).map((_, index) => {
                  const step = index + 1
                  return (
                    <div
                      key={step}
                      className={cn(
                        'h-1 flex-1 rounded-full transition-colors',
                        step < currentStep
                          ? 'bg-signature-cobalt'
                          : step === currentStep
                            ? isArabic
                              ? 'bg-gradient-to-l from-signature-cobalt to-signature-brass'
                              : 'bg-gradient-to-r from-signature-cobalt to-signature-brass'
                            : 'bg-border',
                      )}
                    />
                  )
                })}
              </div>
            </div>

            <div className="p-8">
              {currentStep === 1 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {block?.projectTypeTitle}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{block?.projectTypeDescription}</p>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {block?.projectTypes?.map((type) =>
                      type?.value && type?.label ? (
                        <WizardChoiceCard
                          key={type.value}
                          active={data.projectType === type.value}
                          title={type.label}
                          description={type.description}
                          onClick={() => setData((prev) => ({ ...prev, projectType: type.value! }))}
                          rtl={rtl}
                        />
                      ) : null,
                    )}
                  </div>
                </div>
              ) : null}

              {currentStep === 2 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {block?.goalTitle}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{block?.goalDescription}</p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {block?.projectGoals?.map((goal) =>
                      goal?.value && goal?.label ? (
                        <WizardChoiceCard
                          key={goal.value}
                          active={data.projectGoal === goal.value}
                          title={goal.label}
                          onClick={() => setData((prev) => ({ ...prev, projectGoal: goal.value! }))}
                          rtl={rtl}
                        />
                      ) : null,
                    )}
                  </div>
                </div>
              ) : null}

              {currentStep === 3 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {block?.teamTitle}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{block?.teamDescription}</p>

                  <div className="mb-8 grid gap-3 sm:grid-cols-2">
                    {block?.teamTypes?.map((team) =>
                      team?.value && team?.label ? (
                        <WizardChoiceCard
                          key={team.value}
                          active={data.teamType === team.value}
                          title={team.label}
                          onClick={() => setData((prev) => ({ ...prev, teamType: team.value! }))}
                          rtl={rtl}
                        />
                      ) : null,
                    )}
                  </div>

                  <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.companyNameLabel}
                      </label>
                      <Input
                        value={data.companyName ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, companyName: e.target.value }))}
                        placeholder={block?.companyNamePlaceholder ?? ''}
                        className="h-10"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.websiteLabel}
                      </label>
                      <Input
                        value={data.website ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, website: e.target.value }))}
                        placeholder={block?.websitePlaceholder ?? ''}
                        className="h-10"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.teamSizeLabel}
                      </label>
                      <Input
                        value={data.teamSize ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, teamSize: e.target.value }))}
                        placeholder={block?.teamSizePlaceholder ?? ''}
                        className="h-10"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 4 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {block?.complexityTitle}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{block?.complexityDescription}</p>

                  <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {block?.rolesCountLabel}
                        </label>
                        <Input
                          value={data.rolesCount ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, rolesCount: e.target.value }))}
                          placeholder={block?.rolesCountPlaceholder ?? ''}
                          className="h-10"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {block?.screenCountLabel}
                        </label>
                        <Input
                          value={data.screenCount ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, screenCount: e.target.value }))}
                          placeholder={block?.screenCountPlaceholder ?? ''}
                          className="h-10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                      {block?.complexityFlags?.map((flag) =>
                        flag?.value ? (
                          <label
                            key={flag.value}
                            className={cn('flex cursor-pointer items-start gap-3 rounded-sm border border-border p-3', rtl && 'flex-row-reverse')}
                          >
                            <Checkbox
                              checked={data.complexityFlags.includes(flag.value)}
                              onCheckedChange={() => toggleArrayValue('complexityFlags', flag.value!)}
                              className="mt-0.5"
                            />
                            <span className="text-sm text-foreground">{flag.value}</span>
                          </label>
                        ) : null,
                      )}
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 5 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {block?.materialsTitle}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{block?.materialsDescription}</p>

                  <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {block?.materialsOptions?.map((material) =>
                      material?.value && material?.label ? (
                        <button
                          key={material.value}
                          type="button"
                          onClick={() => toggleArrayValue('materials', material.value!)}
                          className={cn(
                            'rounded-sm border p-4 transition-all',
                            data.materials.includes(material.value)
                              ? 'border-foreground bg-foreground/5'
                              : 'border-border hover:border-foreground/30',
                            rtl ? 'text-right' : 'text-left',
                          )}
                        >
                          <div className={cn('flex items-center gap-2', rtl && 'flex-row-reverse')}>
                            {data.materials.includes(material.value) ? <Check className="h-4 w-4 text-foreground" /> : null}
                            <span className="text-sm font-medium text-foreground">{material.label}</span>
                          </div>
                        </button>
                      ) : null,
                    )}
                  </div>

                  <label className="block">
                    <span className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                      {block?.wizardUploadLabel}
                    </span>
                    <input type="file" multiple className="hidden" onChange={handleUploadFiles} />
                    <div className="cursor-pointer rounded-sm border-2 border-dashed border-border p-8 text-center transition-colors hover:border-foreground/30">
                      <Upload className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-foreground">{block?.wizardUploadHint}</p>
                    </div>
                  </label>

                  {data.uploadedFiles.length ? (
                    <div className="mt-4 space-y-2">
                      {data.uploadedFiles.map((file, index) => (
                        <div key={`${file}-${index}`} className={cn('flex items-center gap-3 rounded-sm bg-secondary/30 p-3', rtl && 'flex-row-reverse')}>
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
                    {block?.timelineTitle}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{block?.timelineDescription}</p>

                  <div className="space-y-8">
                    <div>
                      <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.timelineLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {block?.timelineOptions?.map((option) =>
                          option?.value && option?.label ? (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setData((prev) => ({ ...prev, timeline: option.value! }))}
                              className={cn(
                                'rounded-sm border px-4 py-2 text-sm transition-all',
                                data.timeline === option.value
                                  ? 'border-foreground bg-foreground text-background'
                                  : 'border-border text-foreground hover:border-foreground/30',
                              )}
                            >
                              {option.label}
                            </button>
                          ) : null,
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.budgetLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {block?.budgetOptions?.map((option) =>
                          option?.value && option?.label ? (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setData((prev) => ({ ...prev, budget: option.value! }))}
                              className={cn(
                                'rounded-sm border px-4 py-2 text-sm transition-all',
                                data.budget === option.value
                                  ? 'border-foreground bg-foreground text-background'
                                  : 'border-border text-foreground hover:border-foreground/30',
                              )}
                            >
                              {option.label}
                            </button>
                          ) : null,
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.notesLabel}
                      </label>
                      <Textarea
                        value={data.briefNotes ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, briefNotes: e.target.value }))}
                        placeholder={block?.notesPlaceholder ?? ''}
                        rows={4}
                        dir={isArabic ? 'rtl' : 'ltr'}
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 7 ? (
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
                    {block?.contactTitle}
                  </h2>
                  <p className="mb-8 text-sm text-muted-foreground">{block?.contactDescription}</p>

                  <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {block?.nameLabel}
                        </label>
                        <Input
                          value={data.name ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder={block?.namePlaceholder ?? ''}
                          className="h-10"
                          dir={isArabic ? 'rtl' : 'ltr'}
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {block?.emailLabel}
                        </label>
                        <Input
                          type="email"
                          value={data.email ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder={block?.emailPlaceholder ?? ''}
                          className="h-10"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {block?.companyLabel}
                        </label>
                        <Input
                          value={data.company ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, company: e.target.value }))}
                          placeholder={block?.companyPlaceholder ?? ''}
                          className="h-10"
                          dir={isArabic ? 'rtl' : 'ltr'}
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {block?.roleLabel}
                        </label>
                        <Input
                          value={data.role ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, role: e.target.value }))}
                          placeholder={block?.rolePlaceholder ?? ''}
                          className="h-10"
                          dir={isArabic ? 'rtl' : 'ltr'}
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                          {block?.regionLabel}
                        </label>
                        <Input
                          value={data.region ?? ''}
                          onChange={(e) => setData((prev) => ({ ...prev, region: e.target.value }))}
                          placeholder={block?.regionPlaceholder ?? ''}
                          className="h-10"
                          dir={isArabic ? 'rtl' : 'ltr'}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.phoneLabel}
                      </label>
                      <Input
                        value={data.phone ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder={block?.phonePlaceholder ?? ''}
                        className="h-10"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {block?.commentLabel}
                      </label>
                      <Textarea
                        value={data.comment ?? ''}
                        onChange={(e) => setData((prev) => ({ ...prev, comment: e.target.value }))}
                        placeholder={block?.commentPlaceholder ?? ''}
                        rows={3}
                        dir={isArabic ? 'rtl' : 'ltr'}
                      />
                    </div>

                    <div className="space-y-3 border-t border-border pt-4">
                      <label className={cn('flex cursor-pointer items-start gap-3', rtl && 'flex-row-reverse')}>
                        <Checkbox
                          checked={Boolean(data.noCallFirst)}
                          onCheckedChange={(checked) => setData((prev) => ({ ...prev, noCallFirst: Boolean(checked) }))}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-foreground">{block?.noCallLabel}</span>
                      </label>

                      <label className={cn('flex cursor-pointer items-start gap-3', rtl && 'flex-row-reverse')}>
                        <Checkbox
                          checked={Boolean(data.expertReview)}
                          onCheckedChange={(checked) => setData((prev) => ({ ...prev, expertReview: Boolean(checked) }))}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-foreground">{block?.expertReviewLabel}</span>
                      </label>

                      <label className={cn('flex cursor-pointer items-start gap-3', rtl && 'flex-row-reverse')}>
                        <Checkbox
                          checked={Boolean(data.nda)}
                          onCheckedChange={(checked) => setData((prev) => ({ ...prev, nda: Boolean(checked) }))}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-foreground">{block?.ndaLabel}</span>
                      </label>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className={cn('mt-8 flex items-center justify-between border-t border-border pt-6', rtl && 'flex-row-reverse')}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {currentStep === 1 ? block?.cancelLabel : block?.backLabel}
                </button>

                <Button
                  type="button"
                  onClick={handleNext}
                  className="h-10 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
                >
                  {currentStep === totalSteps ? block?.submitLabel : block?.nextLabel}
                  {rtl ? <ArrowLeft className="mr-2 h-3.5 w-3.5" /> : <ArrowRight className="ml-2 h-3.5 w-3.5" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-sm border border-border bg-card p-6">
              <h3 className="mb-4 font-serif text-lg font-medium text-foreground">
                {block?.summaryTitle}
              </h3>

              <div className="space-y-4 text-sm">
                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <FileText className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {block?.summaryProjectTypeLabel}
                    </div>
                    <div className="text-foreground">{selectedProjectType || '—'}</div>
                  </div>
                </div>

                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <Target className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {block?.summaryGoalLabel}
                    </div>
                    <div className="text-foreground">{selectedProjectGoal || '—'}</div>
                  </div>
                </div>

                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <Users className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {block?.summaryTeamLabel}
                    </div>
                    <div className="text-foreground">{selectedTeamType || '—'}</div>
                  </div>
                </div>

                <div className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}>
                  <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className={rtl ? 'text-right' : ''}>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {block?.summaryTimelineLabel}
                    </div>
                    <div className="text-foreground">{selectedTimeline || '—'}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                  {block?.summaryResultsTitle}
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  {block?.summaryResults?.map((item) =>
                    item?.value ? (
                      <li key={item.value} className={cn('flex items-center gap-2', rtl && 'flex-row-reverse')}>
                        <Check className="h-3.5 w-3.5 text-accent" />
                        {item.value}
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs leading-relaxed text-muted-foreground">{block?.summaryFooter}</p>
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
  rtl,
  locale,
  onBack,
  onSuccess,
}: {
  block: ProposalFlowProposalBlockData['upload']
  rtl: boolean
  locale: Locale
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

  const isArabic = locale === 'ar'

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-sm border border-border bg-card">
          <div className="border-b border-border px-8 py-6">
            <button
              type="button"
              onClick={onBack}
              className={cn('mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground', rtl && 'flex-row-reverse')}
            >
              {rtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              {block?.backLabel}
            </button>

            <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">
              {block?.title}
            </h2>
            <p className="text-sm text-muted-foreground">{block?.description}</p>
          </div>

          <div className="space-y-8 p-8">
            <div>
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block?.filesLabel}
              </label>

              <label className="block cursor-pointer">
                <input type="file" multiple className="hidden" onChange={handleUploadFiles} />
                <div className="rounded-sm border-2 border-dashed border-border p-10 text-center transition-colors hover:border-foreground/30">
                  <Upload className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                  <p className="mb-2 text-foreground">{block?.filesTitle}</p>
                  <p className="text-sm text-muted-foreground">{block?.filesHint}</p>
                </div>
              </label>

              {files.length ? (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <UploadChip
                      key={`${file}-${index}`}
                      label={file}
                      icon="file"
                      onRemove={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                      rtl={rtl}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block?.linksLabel}
              </label>
              <div className={cn('flex gap-3', rtl && 'flex-row-reverse')}>
                <Input
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  placeholder={block?.linksPlaceholder ?? ''}
                  className="h-10 flex-1"
                  dir="ltr"
                  onKeyDown={(e) => e.key === 'Enter' && addLink()}
                />
                <Button type="button" onClick={addLink} variant="outline" className="h-10 px-4">
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>

              {links.length ? (
                <div className="mt-4 space-y-2">
                  {links.map((link, index) => (
                    <UploadChip
                      key={`${link}-${index}`}
                      label={link}
                      icon="link"
                      onRemove={() => removeLink(index)}
                      rtl={rtl}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block?.descriptionLabel}
              </label>
              <Textarea
                placeholder={block?.descriptionPlaceholder ?? ''}
                rows={5}
                dir={isArabic ? 'rtl' : 'ltr'}
                className={isArabic ? 'text-right' : undefined}
              />
            </div>

            <div className="border-t border-border pt-6">
              <label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
                {block?.contactLabel}
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  placeholder={block?.namePlaceholder ?? ''}
                  className={cn('h-10', isArabic && 'text-right')}
                  dir={isArabic ? 'rtl' : 'ltr'}
                />
                <Input
                  type="email"
                  placeholder={block?.emailPlaceholder ?? ''}
                  className="h-10"
                  dir="ltr"
                />
              </div>
            </div>

            <div className={cn('flex items-center justify-between border-t border-border pt-6', rtl && 'flex-row-reverse')}>
              <button
                type="button"
                onClick={onBack}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {block?.cancelLabel}
              </button>

              <Button
                type="button"
                onClick={onSuccess}
                className="h-10 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
              >
                {block?.submitLabel}
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
  block: ProposalFlowProposalBlockData['success']
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
            {block?.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            {block?.description}
          </p>
        </div>

        <div className="mb-12 rounded-sm border border-border bg-card p-8">
          <h3 className="mb-6 text-center text-xs uppercase tracking-wider text-muted-foreground">
            {block?.stepsTitle}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {block?.steps?.map((step) =>
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
            <Link href={getHrefForPageKey(block?.homePageKey ?? 'home', locale)}>
              {rtl ? <Home className="ml-2 h-4 w-4" /> : <Home className="mr-2 h-4 w-4" />}
              {block?.homeLabel}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-11 border-foreground/20 px-6 text-[11px] uppercase tracking-[0.12em] text-foreground hover:bg-foreground/5"
          >
            <Link href={getHrefForPageKey(block?.pricingPageKey ?? 'pricing', locale)}>
              {rtl ? <Layers className="ml-2 h-4 w-4" /> : <Layers className="mr-2 h-4 w-4" />}
              {block?.pricingLabel}
            </Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="h-11 px-6 text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
            onClick={onUploadMore}
          >
            {rtl ? <Upload className="ml-2 h-4 w-4" /> : <Upload className="mr-2 h-4 w-4" />}
            {block?.uploadMoreLabel}
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {block?.supportNotePrefix}{' '}
            <a
              href={`mailto:${block?.supportEmail ?? 'hello@atelier-meridian.com'}`}
              className="text-foreground hover:underline"
              dir="ltr"
            >
              {block?.supportEmail}
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

  const processSteps = useMemo(() => block.intro?.processSteps ?? [], [block.intro?.processSteps])

  return (
    <section dir={rtl ? 'rtl' : 'ltr'}>
      {activeView === 'success' ? (
        <SuccessView
          block={block.success}
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
                    <div className={cn('absolute top-6', isArabic ? 'left-6' : 'right-6')}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                        <FileText className="h-5 w-5 text-accent" />
                      </div>
                    </div>

                    <div className={isArabic ? 'pl-14' : 'pr-14'}>
                      <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
                        {block.intro?.briefCardTitle}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {block.intro?.briefCardDescription}
                      </p>
                    </div>

                    <Button
                      type="button"
                      onClick={() => setActiveView('wizard')}
                      className="h-10 bg-foreground px-6 text-[11px] uppercase tracking-[0.12em] text-background hover:bg-foreground/90"
                    >
                      {block.intro?.briefButtonLabel}
                      {rtl ? <ArrowLeft className="mr-2 h-3.5 w-3.5" /> : <ArrowRight className="ml-2 h-3.5 w-3.5" />}
                    </Button>
                  </div>

                  <div className={cn('group relative rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent/40', rtl && 'text-right')}>
                    <div className={cn('absolute top-6', isArabic ? 'left-6' : 'right-6')}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className={isArabic ? 'pl-14' : 'pr-14'}>
                      <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
                        {block.intro?.uploadCardTitle}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {block.intro?.uploadCardDescription}
                      </p>
                    </div>

                    <Button
                      type="button"
                      onClick={() => setActiveView('upload')}
                      variant="outline"
                      className="h-10 border-foreground/20 px-6 text-[11px] uppercase tracking-[0.12em] text-foreground hover:bg-foreground/5"
                    >
                      {block.intro?.uploadButtonLabel}
                      {rtl ? <ArrowLeft className="mr-2 h-3.5 w-3.5" /> : <ArrowRight className="ml-2 h-3.5 w-3.5" />}
                    </Button>
                  </div>
                </div>

                <div className="mt-16 lg:mt-20">
                  <div className="mb-8 flex items-center gap-4">
                    <span className="h-px flex-1 bg-border/60" />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      {block.intro?.processEyebrow}
                    </span>
                    <span className="h-px flex-1 bg-border/60" />
                  </div>

                  <div className="mb-10 text-center">
                    <h3 className="mb-4 font-serif text-2xl font-light text-foreground lg:text-[1.75rem]">
                      {block.intro?.processTitle}
                    </h3>
                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {block.intro?.processDescription}
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
                          <div
                            className={cn(
                              'absolute top-4 text-[10px] font-medium text-muted-foreground/40',
                              isArabic ? 'left-4' : 'right-4',
                            )}
                          >
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
              block={block.wizard}
              locale={locale}
              rtl={rtl}
              onBackToIntro={() => setActiveView('intro')}
              onSuccess={() => setActiveView('success')}
            />
          ) : null}

          {activeView === 'upload' ? (
            <UploadMaterialsView
              block={block.upload}
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