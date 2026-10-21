import OtakeProductPreview from '../ui/OtakeProductPreview.jsx'
import OtakePerformancePreview from '../ui/OtakePerformancePreview.jsx'

function PurpleBlueIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ps-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8ccff" />
          <stop offset="55%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#5b5bf0" />
        </linearGradient>
        <linearGradient id="ps-b" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#b9a6ff" />
          <stop offset="100%" stopColor="#8fb8ff" />
        </linearGradient>
        <linearGradient id="ps-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0d7ff" />
        </linearGradient>
      </defs>

      <ellipse cx="32" cy="55" rx="19" ry="4.5" fill="#4c1d95" opacity="0.14" />

      <path d="M18 26l14-9 14 9v17l-14 9-14-9V26Z" fill="url(#ps-a)" />
      <path d="M18 26l14 9 14-9-14-9-14 9Z" fill="url(#ps-b)" />
      <path d="M32 35l14-9v17l-14 9V35Z" fill="#4f46e5" opacity="0.5" />
      <path d="M32 35l-14-9v17l14 9V35Z" fill="#7c6cf6" opacity="0.55" />

      <circle cx="24" cy="19" r="5.5" fill="url(#ps-c)" />
      <circle cx="48" cy="16" r="3.5" fill="url(#ps-b)" opacity="0.9" />
    </svg>
  )
}

function BlueOrangeIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ps-d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bcd8ff" />
          <stop offset="100%" stopColor="#3b7bf6" />
        </linearGradient>
        <linearGradient id="ps-e" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd3a3" />
          <stop offset="100%" stopColor="#f2711c" />
        </linearGradient>
        <linearGradient id="ps-f" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffe4c7" />
        </linearGradient>
      </defs>

      <ellipse cx="32" cy="55" rx="19" ry="4.5" fill="#1e3a8a" opacity="0.12" />

      <path d="M20 34h24v12a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V34Z" fill="url(#ps-d)" />
      <path d="M20 34l12-7 12 7-12 7-12-7Z" fill="#d8e7ff" />
      <path d="M32 41l12-7v12l-12 7V41Z" fill="#2563eb" opacity="0.45" />

      <path d="M25 18h14v12H25z" fill="url(#ps-e)" />
      <path d="M25 18l7-5 7 5-7 5-7-5Z" fill="url(#ps-f)" />

      <circle cx="49" cy="24" r="4" fill="#ffb066" />
    </svg>
  )
}

const BULLETS = [
  'Register users in seconds.',
  'Collect authorization via secure portals.',
]

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus. Nullam congue blandit quam, sit amet scelerisque turpis.'

function FeatureCopy({ heading, muted }) {
  return (
    <div>
      <span className="inline-block rounded-full border border-neutral-300 px-3 py-[5px] text-[10px] font-medium tracking-wide text-neutral-600">
        Product Features
      </span>

      <h2 className="mt-5 text-[27px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[32px] lg:text-[36px]">
        {heading}
        <br />
        <span className="text-neutral-400">{muted}</span>
      </h2>

      <p className="mt-4 max-w-[560px] text-[13.5px] leading-relaxed text-neutral-500">
        {DESCRIPTION}
      </p>

      <button
        type="button"
        className="mt-6 rounded-lg bg-neutral-900 px-[18px] py-[10px] text-[12px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2"
      >
        Find Out More
      </button>

      <ul className="mt-5 space-y-[9px]">
        {BULLETS.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-neutral-600"
          >
            <span
              className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-neutral-900"
              aria-hidden="true"
            />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PreviewShell({ children, decoration, decorationClass, glowClass }) {
  return (
    <div className="otake-preview relative w-full max-w-[350px]">
      <div
        className={`pointer-events-none absolute -inset-4 rounded-[48px] blur-3xl sm:-inset-6 ${glowClass}`}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
      <span
        className={`pointer-events-none absolute z-20 ${decorationClass}`}
        aria-hidden="true"
      >
        {decoration}
      </span>
    </div>
  )
}

function PowerfulSolutions() {
  return (
    <section className="otake-solutions w-full">
      <div className="mx-auto max-w-[1160px] px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div className="order-1">
            <FeatureCopy heading="Powerful solutions" muted="redefining growth." />
          </div>

          <div className="order-2 flex justify-center lg:justify-start">
            <PreviewShell
              decoration={<PurpleBlueIcon />}
              decorationClass="-bottom-4 -left-4 sm:-bottom-6 sm:-left-5"
              glowClass="bg-gradient-to-br from-pink-100/70 via-violet-100/50 to-sky-100/60"
            >
              <OtakeProductPreview />
            </PreviewShell>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:mt-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:items-center lg:gap-10">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-end">
            <PreviewShell
              decoration={<BlueOrangeIcon />}
              decorationClass="-bottom-4 -right-4 sm:-bottom-6 sm:-right-5"
              glowClass="bg-gradient-to-br from-sky-100/70 via-violet-100/50 to-orange-100/50"
            >
              <OtakePerformancePreview />
            </PreviewShell>
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
