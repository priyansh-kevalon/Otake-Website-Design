function CloudIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pf-cloud-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="55%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="pf-cloud-b" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#d8b4fe" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="40" rx="20" ry="11" fill="#f9a8d4" opacity="0.18" />
      <path
        d="M20 40a10 10 0 0 1 1.2-19.9A13 13 0 0 1 45 23.5a8.5 8.5 0 0 1-1 16.5H20Z"
        fill="url(#pf-cloud-a)"
      />
      <path
        d="M20 40a10 10 0 0 1 1.2-19.9A13 13 0 0 1 45 23.5a8.5 8.5 0 0 1-1 16.5H20Z"
        fill="url(#pf-cloud-b)"
        opacity="0.35"
      />
      <circle cx="27" cy="24" r="3" fill="#ffffff" opacity="0.75" />
      <path
        d="M32 47l-4.5 9h9L32 47Z"
        fill="#fde68a"
        stroke="#f59e0b"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StackIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pf-stack-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="pf-stack-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="pf-stack-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fcd34d" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="18" ry="5" fill="#0f172a" opacity="0.08" />
      <path d="M18 38h28v12a3 3 0 0 1-3 3H21a3 3 0 0 1-3-3V38Z" fill="url(#pf-stack-b)" />
      <path d="M18 38h28l-14 8-14-8Z" fill="#60a5fa" />
      <path d="M22 22h20v12H22z" fill="url(#pf-stack-a)" />
      <path d="M22 22l10-6 10 6-10 6-10-6Z" fill="url(#pf-stack-top)" />
      <path d="M32 28l10-6v12l-10 6V28Z" fill="#f59e0b" opacity="0.55" />
    </svg>
  )
}

function SalesIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pf-sales-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <linearGradient id="pf-sales-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="18" ry="5" fill="#0f172a" opacity="0.08" />
      <path d="M20 24l12-8 12 8v16l-12 8-12-8V24Z" fill="url(#pf-sales-b)" />
      <path d="M20 24l12 8 12-8-12-8-12 8Z" fill="#ddd6fe" />
      <path d="M32 32l12-8v16l-12 8V32Z" fill="#7c3aed" opacity="0.5" />
      <circle cx="44" cy="18" r="8" fill="url(#pf-sales-a)" />
      <path d="M41 18h6M44 15v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function TaskDashboard() {
  return (
    <div className="h-[151px] rounded-xl bg-[#f3f2f7] px-3 py-3">
      <div className="text-center">
        <span className="inline-block rounded-md bg-neutral-900 px-2 py-0.5 text-[9px] font-medium text-white">
          Today
        </span>
      </div>

      <div className="mt-2 space-y-1.5">
        <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-white px-1.5 py-1">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-pink-200 text-[13px]" aria-hidden="true">
            👩🏻
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[9px] font-medium text-neutral-700">
              John just ✋ marked a task overdue.
            </span>
            <span className="block text-[8px] text-neutral-400">3 minute ago</span>
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-white px-1.5 py-1">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-rose-200 text-[13px]" aria-hidden="true">
            👨🏻
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[9px] font-medium text-neutral-700">
              Anna just completed ✅ a task.
            </span>
            <span className="block text-[8px] text-neutral-400">12 minute ago</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function AnalyticsDashboard() {
  const bars = [
    { h: 35, tone: 'bg-[#c9c7d3]' },
    { h: 50, tone: 'bg-[#c9c7d3]' },
    { h: 39, tone: 'bg-[#c9c7d3]' },
    { h: 63, tone: 'bg-neutral-900' },
    { h: 52, tone: 'bg-[#c9c7d3]' },
    { h: 25, tone: 'bg-[#c9c7d3]' },
    { h: 44, tone: 'bg-[#c9c7d3]' },
    { h: 29, tone: 'bg-[#c9c7d3]' },
  ]

  return (
    <div className="relative h-[151px] rounded-xl bg-[#f3f2f7] px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold text-neutral-800">Sales Report</p>
          <span className="block text-[8px] text-neutral-500">Last 7 Days</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] font-medium text-neutral-700">+3,2%</span>
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-neutral-800 text-[8px] text-white" aria-hidden="true">
            +
          </span>
        </div>
      </div>

      <div className="relative mt-2 flex h-[91px] items-end justify-between gap-1 border-b border-dashed border-neutral-300 px-1 pb-1">
        <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded bg-neutral-900 px-1.5 py-0.5 text-[7px] font-medium text-white">
          $8,82.21
        </span>
        {bars.map((bar, index) => (
          <span
            key={index}
            className={`w-[9px] rounded-t-[2px] ${bar.tone}`}
            style={{ height: `${bar.h}px` }}
          />
        ))}
        <span className="absolute bottom-[61px] left-1/2 z-10 h-2 w-2 -translate-x-1/2 rounded-sm border border-neutral-800 bg-white" />
      </div>
    </div>
  )
}

function SalesDashboard() {
  return (
    <div className="h-[151px] rounded-xl bg-[#f3f2f7] px-3 py-3">
      <div className="flex items-center justify-between">
        <p className="flex-1 text-center text-[9px] font-semibold text-neutral-800">
          Today&apos;s transaction
        </p>
        <span className="flex flex-col gap-[2px]" aria-hidden="true">
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
        </span>
      </div>

      <div className="mx-auto mt-2 max-w-[148px] rounded-xl border border-neutral-100 bg-white px-3 py-2">
        <div className="flex items-center justify-between border-b border-dashed border-neutral-200 pb-2">
          <span>
            <span className="text-[12px] font-bold text-neutral-800">32</span>
            <span className="text-[8px] text-neutral-400">/48</span>
            <span className="block text-[7px] text-neutral-400">Order completed</span>
          </span>
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full p-[3px]"
            style={{ background: 'conic-gradient(#8b78ff 0 68%, #eeeafd 68% 100%)' }}
            aria-label="68 percent completed"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[7px] font-semibold text-neutral-700">
              68
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span>
            <span className="text-[12px] font-bold text-neutral-800">17</span>
            <span className="text-[8px] text-neutral-400">/24</span>
            <span className="block text-[7px] text-neutral-400">On shipping</span>
          </span>
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full p-[3px]"
            style={{ background: 'conic-gradient(#ff8585 0 40%, #ffe9e9 40% 100%)' }}
            aria-label="40 percent in shipping"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[7px] font-semibold text-neutral-700">
              40
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    key: 'project',
    heading: (
      <>
        Keep on top of project
        <br />
        management.
      </>
    ),
    icon: <CloudIcon />,
    dashboard: <TaskDashboard />,
  },
  {
    key: 'analytics',
    heading: (
      <>
        Analyze your business
        <br />
        results in one place.
      </>
    ),
    icon: <StackIcon />,
    dashboard: <AnalyticsDashboard />,
  },
  {
    key: 'sales',
    heading: (
      <>
        Keep track of sales and
        <br />
        shipping progress.
      </>
    ),
    icon: <SalesIcon />,
    dashboard: <SalesDashboard />,
  },
]

function ProductFeatures() {
  return (
    <section id="features" className="otake-features w-full scroll-mt-6">
      <div className="mx-auto max-w-[1080px] px-6 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[640px] text-center">
          <span className="inline-block rounded-full bg-yellow-300 px-3 py-1 text-[12px] font-semibold text-neutral-800 sm:text-[11px]">
            Product Features
          </span>
          <h2 className="mt-5 text-[28px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[34px] lg:text-[38px]">
            Streamline tasks with
            <br />
            optimized workflows
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            Vivamus non enim lacus.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[700px] grid-cols-1 gap-3 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.key}
              className="relative flex flex-col overflow-visible rounded-[16px] bg-white shadow-[0_12px_30px_rgba(150,130,200,0.13)]"
            >
              <span
                className="pointer-events-none absolute -top-6 left-1/2 z-10 -translate-x-1/2"
                aria-hidden="true"
              >
                {feature.icon}
              </span>

              <div className="px-3 pb-3 pt-10 text-center">
                <h3 className="text-[16px] font-bold leading-[1.35] text-neutral-900">
                  {feature.heading}
                </h3>
                <p className="mt-1.5 text-[10px] leading-relaxed text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit.
                </p>
                <button
                  type="button"
                  className="mt-3 w-full rounded-md border border-neutral-200 px-3 py-1.5 text-[9px] font-medium text-neutral-800 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                >
                  Learn More
                </button>
              </div>

              <div className="mt-auto px-1.5 pb-2.5">
                {feature.dashboard}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures
