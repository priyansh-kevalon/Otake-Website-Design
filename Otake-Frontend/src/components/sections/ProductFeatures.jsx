function TaskDashboard() {
  return (
    <div className="flex h-full min-h-[200px] flex-col rounded-xl bg-[#f3f2f7] px-6 py-6">
      <div className="text-center">
        <span className="inline-block rounded-md bg-neutral-900 px-4 py-1 text-[12px] font-medium text-white">
          Today
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4">
        <div className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white px-4 py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-pink-200 text-[20px]" aria-hidden="true">
            👩🏻
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-medium text-neutral-700">
              John just ✋ marked a task overdue.
            </span>
            <span className="mt-1 block text-[11px] text-neutral-400">3 minute ago</span>
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white px-4 py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-rose-200 text-[20px]" aria-hidden="true">
            👨🏻
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-medium text-neutral-700">
              Anna just completed ✅ a task.
            </span>
            <span className="mt-1 block text-[11px] text-neutral-400">12 minute ago</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function AnalyticsDashboard() {
  const bars = [
    { h: 35, tone: 'bg-[#c9c7d3]' },
    { h: 54, tone: 'bg-[#c9c7d3]' },
    { h: 32, tone: 'bg-[#c9c7d3]' },
    { h: 68, tone: 'bg-neutral-900', highlighted: true },
    { h: 42, tone: 'bg-[#c9c7d3]' },
    { h: 25, tone: 'bg-[#c9c7d3]' },
    { h: 48, tone: 'bg-[#c9c7d3]' },
  ]

  return (
    <div className="relative flex h-full min-h-[200px] flex-col rounded-xl bg-[#f3f2f7] px-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] font-semibold text-neutral-800">Sales Report</p>
          <span className="block text-[11px] text-neutral-500">Last 7 Days</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-medium text-neutral-700">+3,2%</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-800 text-white" aria-hidden="true">
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
              <path d="M3 8 8 3M4 3h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      <div className="relative mx-auto mt-5 flex min-h-[130px] w-[92%] flex-1 items-end justify-between">
        <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-[10px] font-medium leading-none text-white">
          $8,82.21
        </span>
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[20px] -translate-x-1/2 border-l border-neutral-400"
          style={{ bottom: `calc(68% + 5px)` }}
        />
        {bars.map((bar, index) => (
          <span
            key={index}
            className="relative h-full w-[7%]"
            aria-hidden="true"
          >
            <span
              className={`absolute bottom-[6px] left-0 w-full rounded-t-[2px] ${bar.tone}`}
              style={{ height: `${bar.h}%` }}
            >
              {bar.highlighted && (
                <span className="absolute left-1/2 top-[6px] h-1.5 w-1.5 -translate-x-1/2 border border-neutral-700 bg-white" />
              )}
            </span>
            <span className="absolute bottom-0 left-1/2 w-1.5 -translate-x-1/2 border-b border-dashed border-neutral-300" />
          </span>
        ))}
      </div>
    </div>
  )
}

function SalesDashboard() {
  return (
    <div className="flex h-full min-h-[200px] flex-col rounded-xl bg-[#f3f2f7] px-6 py-6">
      <div className="flex items-center justify-between">
        <p className="flex-1 text-center text-[13px] font-semibold text-neutral-800">
          Today&apos;s transaction
        </p>
        <span className="flex flex-col gap-[2px]" aria-hidden="true">
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
        </span>
      </div>

      <div className="mx-auto mt-5 flex w-full max-w-[280px] flex-1 flex-col rounded-xl border border-neutral-100 bg-white px-6 py-5">
        <div className="flex flex-1 items-center justify-between border-b border-dashed border-neutral-200 py-4">
          <span>
            <span className="text-[24px] font-bold text-neutral-800">32</span>
            <span className="text-[12px] text-neutral-400">/48</span>
            <span className="mt-1 block text-[11px] text-neutral-400">Order completed</span>
          </span>
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full p-1"
            style={{ background: 'conic-gradient(#8b78ff 0 68%, #eeeafd 68% 100%)' }}
            aria-label="68 percent completed"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[11px] font-semibold text-neutral-700">
              68
            </span>
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between py-4">
          <span>
            <span className="text-[24px] font-bold text-neutral-800">17</span>
            <span className="text-[12px] text-neutral-400">/24</span>
            <span className="mt-1 block text-[11px] text-neutral-400">On shipping</span>
          </span>
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full p-1"
            style={{ background: 'conic-gradient(#ff8585 0 40%, #ffe9e9 40% 100%)' }}
            aria-label="40 percent in shipping"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[11px] font-semibold text-neutral-700">
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
    icon: (
      <img
        src="/images/product-feature-cloud.png"
        alt=""
        className="h-20 w-20 object-contain"
      />
    ),
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
    icon: (
      <img
        src="/images/product-feature-analytics.png"
        alt=""
        className="h-20 w-20 object-contain"
      />
    ),
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
    icon: (
      <img
        src="/images/product-feature-sales.png"
        alt=""
        className="h-20 w-20 object-contain"
      />
    ),
    dashboard: <SalesDashboard />,
  },
]

function ProductFeatures() {
  return (
    <section id="features" className="otake-features w-full scroll-mt-6">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:px-8 lg:py-20 xl:px-0 xl:py-24">
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

        <div className="mx-auto mt-16 grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-3 xl:mt-12 xl:grid-cols-[repeat(3,420px)]">
          {FEATURES.map((feature) => (
            <article
              key={feature.key}
              className="relative flex h-[620px] w-full max-w-[420px] flex-col overflow-visible rounded-[16px] bg-white shadow-[0_12px_30px_rgba(150,130,200,0.13)]"
            >
              <span
                className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2"
                aria-hidden="true"
              >
                <img
                  src={feature.key === 'project' ? '/images/product-feature-cloud.png' : feature.key === 'analytics' ? '/images/product-feature-analytics.png' : '/images/product-feature-sales.png'}
                  alt=""
                  className="h-[88px] w-[88px] object-contain"
                />
              </span>

              <div className="px-4 pb-4 pt-[90px] text-center xl:px-6">
                <h3 className="text-[20px] font-bold leading-[1.25] text-neutral-900 sm:text-[22px] xl:text-[26px]">
                  {feature.heading}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit.
                </p>
                <button
                  type="button"
                  className="mt-5 w-full rounded-md border border-neutral-200 px-3 py-3 text-[13px] font-medium text-neutral-800 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                >
                  Learn More
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-3 pb-4">
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
