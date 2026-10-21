function CloudIllustration() {
  return (
    <svg width="54" height="42" viewBox="0 0 64 48" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bg-cloud-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0eff6" />
        </linearGradient>
        <filter id="bg-cloud-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <ellipse
        cx="32"
        cy="39"
        rx="19"
        ry="4.5"
        fill="#c4b5fd"
        opacity="0.55"
        filter="url(#bg-cloud-shadow)"
      />
      <path
        d="M17 34a8.5 8.5 0 0 1 .9-16.9A11.5 11.5 0 0 1 39 19.6a7.5 7.5 0 0 1-.5 14.4H17Z"
        fill="url(#bg-cloud-fill)"
        stroke="#e5e3ee"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <ellipse cx="26" cy="25" rx="5" ry="3.4" fill="#ffffff" opacity="0.9" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9.5" cy="8" r="3.4" />
      <path d="M3.5 19.5a6 6 0 0 1 12 0" />
      <circle cx="17.5" cy="9" r="2.2" />
      <path d="M16.2 14.2a4.6 4.6 0 0 1 4.3 4.6" />
    </svg>
  )
}

function AnalyticsIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 20h16" />
      <path d="M7 20v-6" />
      <path d="M12 20V7" />
      <path d="M17 20v-9" />
    </svg>
  )
}

function IntegrationIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="18" cy="6" r="2.6" />
      <circle cx="12" cy="18" r="2.6" />
      <path d="M8.3 7.6l2.3 8.2" />
      <path d="M15.7 7.6l-2.3 8.2" />
      <path d="M8.6 6h6.8" />
    </svg>
  )
}

function SecurityIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3.2l7 2.8v5.4c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6L12 3.2Z" />
      <path d="M9.2 11.9l2 2 3.6-3.8" />
    </svg>
  )
}

const FEATURES = [
  { id: 'users', heading: 'User Management', icon: <UserIcon /> },
  { id: 'analytics', heading: 'Insightful Data Analytics', icon: <AnalyticsIcon /> },
  { id: 'integration', heading: 'Effortless Integration', icon: <IntegrationIcon /> },
  { id: 'security', heading: 'Robust Security Suite', icon: <SecurityIcon /> },
]

const ICON_GRADIENT =
  'bg-[linear-gradient(135deg,#fbcfe8_0%,#fdd9c0_35%,#d8b4fe_70%,#bfdbfe_100%)]'

function BusinessGrowth() {
  return (
    <section className="otake-growth w-full">
      <div className="mx-auto max-w-[1080px] px-6 py-16 sm:px-8 lg:py-24">
        <div className="flex justify-center">
          <CloudIllustration />
        </div>

        <h2 className="mt-8 text-center text-[24px] font-bold leading-[1.2] tracking-tight text-neutral-900 sm:text-[28px] lg:text-[31px]">
          Grow your business to the next level.
        </h2>

        <p className="mx-auto mt-4 max-w-[400px] text-center text-[14px] leading-relaxed text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Vivamus non enim lacus.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-[11px] text-white shadow-[0_8px_18px_rgba(196,160,220,0.35)] ${ICON_GRADIENT}`}
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-neutral-900 lg:text-[18px]">
                {feature.heading}
              </h3>
              <p className="mt-2 max-w-[250px] text-[13px] leading-relaxed text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Vivamus non enim lacus.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessGrowth
