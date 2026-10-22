import { useState } from 'react'

function CommandLoopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6a3 3 0 1 0-3 3h3V6Zm0 6H6a3 3 0 1 0 3 3v-3Zm6-6a3 3 0 1 1 3 3h-3V6Zm0 6h3a3 3 0 1 1-3 3v-3ZM9 9h6v6H9V9Z"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WindowPlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="15" rx="3" stroke="#8B5CF6" strokeWidth="2" />
      <path d="M3 9h18" stroke="#8B5CF6" strokeWidth="2" />
      <path d="M15 14h4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 12v4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SecurityShapesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="5" height="5" rx="1" fill="#8B5CF6" />
      <circle cx="17.5" cy="6.5" r="3" fill="#8B5CF6" />
      <path d="M6.5 14.5v5M4 17h5" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="#8B5CF6" />
      <rect x="18" y="18" width="3" height="3" rx="0.5" fill="#8B5CF6" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z"
        fill="#8B5CF6"
      />
      <circle cx="18.5" cy="17.5" r="1.8" fill="#8B5CF6" />
      <circle cx="6" cy="17" r="1.2" fill="#8B5CF6" />
    </svg>
  )
}

function LeftFloating3D() {
  return (
    <div
      className="pointer-events-none select-none drop-shadow-[0_16px_24px_rgba(40,20,90,0.22)]"
      aria-hidden="true"
    >
      <img
        src="/images/66303513e76c9555d5583ac0_Element-05.png"
        alt=""
        width="80"
        height="80"
        loading="lazy"
        decoding="async"
        className="h-20 w-20"
      />
    </div>
  )
}

function RightFloating3D() {
  return (
    <div
      className="pointer-events-none select-none drop-shadow-[0_16px_24px_rgba(40,20,90,0.22)]"
      aria-hidden="true"
    >
      <img
        src="/images/66303513e76c9555d5583aa1_Element-07.png"
        alt=""
        width="80"
        height="80"
        loading="lazy"
        decoding="async"
        className="h-20 w-20"
      />
    </div>
  )
}

const CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <CommandLoopIcon />,
    questions: [
      {
        q: 'What is Otake and how can it benefit my startup?',
        a: 'Otake is an all-in-one SaaS platform engineered to automate repetitive workflows, unify data analytics, and accelerate product velocity for modern teams.',
      },
      {
        q: 'Is Otake suitable for all types of startups, regardless of industry size?',
        a: 'Yes. Whether you are an early-stage founder building an MVP or a scaling venture with multi-regional operations, Otake adapts to your team size and operational complexity.',
      },
      {
        q: 'How do I begin using Otake to develop my startup business effectively?',
        a: 'Sign up for our 14-day free trial with no credit card required. Follow our interactive 5-minute onboarding flow to connect your tools, invite collaborators, and start tracking metrics right away.',
      },
    ],
  },
  {
    id: 'features-support',
    title: 'Features and Support',
    icon: <WindowPlusIcon />,
    questions: [
      {
        q: 'Which third-party integrations are natively supported?',
        a: 'Otake integrates seamlessly with Slack, GitHub, Figma, Stripe, Google Workspace, Jira, and hundreds of custom webhooks.',
      },
      {
        q: 'What level of technical support do you provide?',
        a: 'Every tier includes 24/7 in-app chat and email assistance. Growth and Enterprise plans receive dedicated customer success managers and guaranteed SLAs.',
      },
      {
        q: 'Can we request custom feature developments?',
        a: 'Yes, our product roadmap heavily prioritizes customer feedback, and Enterprise customers receive tailored API customizations.',
      },
    ],
  },
  {
    id: 'security-privacy',
    title: 'Security and Privacy',
    icon: <SecurityShapesIcon />,
    questions: [
      {
        q: 'How is our data protected and encrypted?',
        a: 'All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We utilize zero-trust architecture across all cloud infrastructure.',
      },
      {
        q: 'Are you compliant with international privacy laws?',
        a: 'Otake is fully compliant with GDPR, CCPA, HIPAA standards, and regularly audited for SOC 2 Type II certification.',
      },
      {
        q: 'Do you offer on-premise or private cloud deployment?',
        a: 'Yes, Enterprise customers can deploy Otake in their own isolated AWS, GCP, or Azure Virtual Private Clouds (VPC).',
      },
    ],
  },
  {
    id: 'oteka-assistance',
    title: 'Oteka Assistance',
    icon: <SparklesIcon />,
    questions: [
      {
        q: 'What is Oteka Assistance and how does it work?',
        a: 'Oteka Assistance is our embedded AI copilot that synthesizes reports, flags anomalies in sales pipelines, and suggests automated workflow improvements.',
      },
      {
        q: 'Is our company data used to train public AI models?',
        a: 'Never. Your workspace data is completely siloed and strictly prohibited from training any foundation or shared models.',
      },
      {
        q: 'Can Oteka Assistance be disabled or restricted by role?',
        a: 'Yes, administrators have granular permission toggles to enable, limit, or disable AI features on a per-member or per-team basis.',
      },
    ],
  },
]

function FAQ() {
  const [activeTab, setActiveTab] = useState('getting-started')
  const [openIndexes, setOpenIndexes] = useState({})

  const currentCategory = CATEGORIES.find((cat) => cat.id === activeTab) || CATEGORIES[0]

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section id="faq" className="otake-faq relative w-full scroll-mt-6 py-16 sm:py-24">
      {/* Subtle Ambient Background Pastel Glows */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-pink-200/35 via-purple-100/30 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-bl from-indigo-200/35 via-violet-100/30 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        {/* Floating 3D Elements at Outer Edges */}
        <div className="absolute left-2 top-[120px] hidden xl:block">
          <LeftFloating3D />
        </div>
        <div className="absolute -right-2 bottom-[90px] hidden xl:block">
          <RightFloating3D />
        </div>

        {/* Section Header */}
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-[32px] font-bold leading-[1.15] tracking-tight text-[#1E1C27] sm:text-[40px] md:text-[44px]">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-[13.5px] text-[#6E6C79] sm:text-[14.5px]">
            All Plans come with a 14-day free trial period.
          </p>
        </div>

        {/* Category Cards (2x2 Grid) */}
        <div className="mx-auto mt-10 grid max-w-[640px] grid-cols-1 gap-3.5 sm:grid-cols-2">
          {CATEGORIES.map((category) => {
            const isActive = activeTab === category.id
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveTab(category.id)
                  setOpenIndexes({})
                }}
                className={`flex items-center gap-3 rounded-2xl p-4 text-left transition-all ${
                  isActive
                    ? 'border border-[#9A79F5]/70 bg-white shadow-[0_8px_24px_rgba(154,121,245,0.12)] ring-1 ring-[#9A79F5]/40'
                    : 'border border-neutral-100 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-neutral-200 hover:shadow-md'
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                  {category.icon}
                </span>
                <span className="text-[14px] font-semibold text-[#25232A]">
                  {category.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Category Heading & Accordion List */}
        <div className="mx-auto mt-12 max-w-[640px] sm:mt-14">
          <h3 className="text-[18px] font-bold text-[#1E1C27] sm:text-[19px]">
            {currentCategory.title}:
          </h3>

          <div className="mt-5 divide-y divide-neutral-100/90">
            {currentCategory.questions.map((item, idx) => {
              const isOpen = !!openIndexes[idx]
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left transition-colors hover:text-neutral-900"
                  >
                    <span className="text-[13.5px] font-medium leading-snug text-[#25232A] sm:text-[14px]">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-neutral-900' : 'text-neutral-700'
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-2.5 pr-6 text-[12.5px] leading-relaxed text-[#6E6C79] sm:text-[13px]">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
