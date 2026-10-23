function CloudIllustration() {
  return (
    <img
      src="/images/business-growth-cloud.png"
      alt=""
      aria-hidden="true"
      className="h-9 w-12 object-contain"
    />
  )
}

function UserIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9.5 14.5 7 17a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0" />
      <path d="m14.5 9.5 2.5-2.5a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0" />
      <path d="m8.5 15.5 7-7" />
    </svg>
  )
}

function AnalyticsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8.2 14.5a6 6 0 1 1 7.6 0c-.9.7-1.3 1.4-1.5 2.5h-4.6c-.2-1.1-.6-1.8-1.5-2.5Z" />
      <path d="M12 2v1.5M4.9 4.9 6 6M19.1 4.9 18 6" />
    </svg>
  )
}

function IntegrationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="6" cy="17" r="3.5" />
      <circle cx="18" cy="17" r="3.5" />
      <path d="M3 8h5l2 6M21 8h-5l-2 6M8 10h8" />
    </svg>
  )
}

function SecurityIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14.5 3.5c-4.5.4-8.2 3.2-9.8 7.8l-.8 2.2 3.1 3.1 2.2-.8c4.6-1.6 7.4-5.3 7.8-9.8l.2-2.7-2.7.2Z" />
      <path d="m7.5 15.5-2 4 4-2M10 11l3 3" />
      <circle cx="13.5" cy="7.5" r="1" />
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
  'bg-[linear-gradient(135deg,#d9b4fe_0%,#fbcfe8_25%,#fcd9c9_60%,#bfdbfe_100%)]'

function BusinessGrowth() {
  return (
    <section id="growth" className="otake-growth w-full scroll-mt-6">
      <div className="mx-auto h-auto min-h-[408px] w-full max-w-[1136px] px-6 py-10 sm:px-8 lg:h-[408px] lg:py-12">
        <div className="flex justify-center">
          <CloudIllustration />
        </div>

        <h2 className="mt-3 text-center text-[20px] font-bold leading-[1.2] tracking-tight text-neutral-900 sm:text-[22px]">
          Grow your business to the next level.
        </h2>

        <p className="mx-auto mt-2 max-w-[400px] text-center text-[11px] leading-[1.45] text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Vivamus non enim lacus.
        </p>

        <div className="mt-11 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-[7px] text-white shadow-[0_5px_12px_rgba(124,58,237,0.2)] [&_svg]:h-4 [&_svg]:w-4 ${ICON_GRADIENT}`}
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <h3 className="mt-3 text-[13px] font-semibold leading-snug text-neutral-900 lg:text-[14px]">
                {feature.heading}
              </h3>
              <p className="mt-1.5 max-w-[220px] text-[9px] leading-[1.5] text-neutral-500">
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
