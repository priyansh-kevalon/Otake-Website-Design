import OtakeProductPreview from '../ui/OtakeProductPreview.jsx'
import OtakePerformancePreview from '../ui/OtakePerformancePreview.jsx'

function PurpleBlueIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ps-icon-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="ps-icon-b" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>
      <ellipse cx="28" cy="48" rx="16" ry="4" fill="#4c1d95" opacity="0.12" />
      <path d="M16 22l12-8 12 8v14l-12 8-12-8V22Z" fill="url(#ps-icon-a)" />
      <path d="M16 22l12 8 12-8-12-8-12 8Z" fill="url(#ps-icon-b)" />
      <path d="M28 30l12-8v14l-12 8V30Z" fill="#4f46e5" opacity="0.55" />
      <circle cx="22" cy="18" r="4" fill="#ddd6fe" />
    </svg>
  )
}

function BlueOrangeIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ps-icon-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="ps-icon-d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <ellipse cx="28" cy="48" rx="16" ry="4" fill="#1e3a8a" opacity="0.1" />
      <path d="M18 30h20v10a3 3 0 0 1-3 3H21a3 3 0 0 1-3-3V30Z" fill="url(#ps-icon-c)" />
      <path d="M18 30l10-6 10 6-10 6-10-6Z" fill="#bfdbfe" />
      <path d="M22 16h12v10H22z" fill="url(#ps-icon-d)" />
      <path d="M22 16l6-4 6 4-6 4-6-4Z" fill="#fed7aa" />
    </svg>
  )
}

const BULLETS = [
  'Register users in seconds.',
  'Collect authorization via secure portals.',
]

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus. Nullam congue blandit quam, sit amet scelerisque turpis.'

function FeatureCopy({ heading, muted, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <span className="inline-block rounded-full border border-neutral-300 px-3 py-1 text-[11px] font-medium text-neutral-700">
        Product Features
      </span>
      <h2 className="mt-5 text-[27px] font-bold leading-[1.15] tracking-tight sm:text-[32px] lg:text-[36px]">
        <span className="text-neutral-900">{heading}</span>
        <br />
        <span className="text-neutral-400">{muted}</span>
      </h2>
      <p className="mt-4 max-w-[420px] text-[13.5px] leading-relaxed text-neutral-500">
        {DESCRIPTION}
      </p>
      <button
        type="button"
        className="mt-6 rounded-lg bg-neutral-900 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
      >
        Find Out More
      </button>
      <ul className="mt-5 space-y-2">
        {BULLETS.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2.5 text-[13px] text-neutral-600"
          >
            <span
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
              aria-hidden="true"
            />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PowerfulSolutions() {
  return (
    <section className="otake-solutions w-full">
      <div className="mx-auto max-w-[1120px] px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-1">
            <FeatureCopy heading="Powerful solutions" muted="redefining growth." />
          </div>

          <div className="relative order-2">
            <OtakeProductPreview />
            <span
              className="pointer-events-none absolute -bottom-5 -left-3 z-10 sm:-left-5"
              aria-hidden="true"
            >
              <PurpleBlueIcon />
            </span>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <OtakePerformancePreview />
            <span
              className="pointer-events-none absolute -bottom-5 -right-3 z-10 sm:-right-5"
              aria-hidden="true"
            >
              <BlueOrangeIcon />
            </span>
          </div>

          <div className="order-1 lg:order-2">
            <FeatureCopy heading="Take control of business" muted="analytics and data." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerfulSolutions
