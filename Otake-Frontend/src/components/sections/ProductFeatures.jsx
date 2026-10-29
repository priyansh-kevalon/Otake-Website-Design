function TaskDashboard() {
  return (
    <div className="flex h-full min-h-[160px] flex-col rounded-xl bg-[#f3f2f7] px-4 py-4 sm:min-h-[180px] sm:px-5 sm:py-5 lg:min-h-[200px] lg:px-6 lg:py-6">
      <div className="text-center">
        <span className="inline-block rounded-md bg-neutral-900 px-3 py-1 text-[11px] font-medium text-white sm:px-4 sm:text-[12px]">
          Today
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-3 sm:gap-3.5 lg:gap-4">
        <div className="flex items-center gap-2.5 rounded-xl border border-neutral-100 bg-white px-3 py-3 sm:gap-3 sm:px-3.5 sm:py-3.5 lg:px-4 lg:py-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-pink-200 text-[16px] sm:h-9 sm:w-9 sm:text-[18px] lg:h-10 lg:w-10 lg:text-[20px]" aria-hidden="true">
            👩🏻
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[11px] font-medium text-neutral-700 sm:text-[12px] lg:text-[13px]">
              John just ✋ marked a task overdue.
            </span>
            <span className="mt-0.5 block text-[9px] text-neutral-400 sm:mt-1 sm:text-[10px] lg:text-[11px]">3 minute ago</span>
          </span>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-neutral-100 bg-white px-3 py-3 sm:gap-3 sm:px-3.5 sm:py-3.5 lg:px-4 lg:py-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-rose-200 text-[16px] sm:h-9 sm:w-9 sm:text-[18px] lg:h-10 lg:w-10 lg:text-[20px]" aria-hidden="true">
            👨🏻
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[11px] font-medium text-neutral-700 sm:text-[12px] lg:text-[13px]">
              Anna just completed ✅ a task.
            </span>
            <span className="mt-0.5 block text-[9px] text-neutral-400 sm:mt-1 sm:text-[10px] lg:text-[11px]">12 minute ago</span>
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
    <div className="relative flex h-full min-h-[160px] flex-col rounded-xl bg-[#f3f2f7] px-4 py-4 sm:min-h-[180px] sm:px-5 sm:py-5 lg:min-h-[200px] lg:px-6 lg:py-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[12px] font-semibold text-neutral-800 sm:text-[13px] lg:text-[14px]">Sales Report</p>
          <span className="block text-[10px] text-neutral-500 sm:text-[10px] lg:text-[11px]">Last 7 Days</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="text-[10px] font-medium text-neutral-700 sm:text-[10px] lg:text-[11px]">+3,2%</span>
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-neutral-800 text-white sm:h-4 sm:w-4" aria-hidden="true">
            <svg viewBox="0 0 12 12" className="h-2 w-2 sm:h-2.5 sm:w-2.5" fill="none">
              <path d="M3 8 8 3M4 3h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      <div className="relative mx-auto mt-4 flex min-h-[100px] w-[92%] flex-1 items-end justify-between sm:mt-4.5 sm:min-h-[115px] lg:mt-5 lg:min-h-[130px]">
        <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded bg-neutral-900 px-1.5 py-0.5 text-[8px] font-medium leading-none text-white sm:px-2 sm:py-1 sm:text-[9px] lg:text-[10px]">
          $8,82.21
        </span>
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[14px] -translate-x-1/2 border-l border-neutral-400 sm:top-[16px] lg:top-[20px]"
          style={{ bottom: `calc(68% + 4px)` }}
        />
        {bars.map((bar, index) => (
          <span
            key={index}
            className="relative h-full w-[6%] sm:w-[6.5%] lg:w-[7%]"
            aria-hidden="true"
          >
            <span
              className={`absolute bottom-[4px] left-0 w-full rounded-t-[2px] sm:bottom-[5px] lg:bottom-[6px] ${bar.tone}`}
              style={{ height: `${bar.h}%` }}
            >
              {bar.highlighted && (
                <span className="absolute left-1/2 top-[4px] h-1 w-1 -translate-x-1/2 border border-neutral-700 bg-white sm:top-[5px] sm:h-1.5 sm:w-1.5 lg:top-[6px]" />
              )}
            </span>
            <span className="absolute bottom-0 left-1/2 w-1 -translate-x-1/2 border-b border-dashed border-neutral-300 sm:w-1.5" />
          </span>
        ))}
      </div>
    </div>
  )
}

function SalesDashboard() {
  return (
    <div className="flex h-full min-h-[160px] flex-col rounded-xl bg-[#f3f2f7] px-4 py-4 sm:min-h-[180px] sm:px-5 sm:py-5 lg:min-h-[200px] lg:px-6 lg:py-6">
      <div className="flex items-center justify-between">
        <p className="flex-1 text-center text-[12px] font-semibold text-neutral-800 sm:text-[12px] lg:text-[13px]">
          Today&apos;s transaction
        </p>
        <span className="flex flex-col gap-[2px]" aria-hidden="true">
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
          <span className="h-[2px] w-[2px] rounded-full bg-neutral-500" />
        </span>
      </div>

      <div className="mx-auto mt-4 flex w-full max-w-[250px] flex-1 flex-col rounded-xl border border-neutral-100 bg-white px-4 py-3 sm:mt-4.5 sm:max-w-[265px] sm:px-5 sm:py-4 lg:mt-5 lg:max-w-[280px] lg:px-6 lg:py-5">
        <div className="flex flex-1 items-center justify-between border-b border-dashed border-neutral-200 py-2.5 sm:py-3 lg:py-4">
          <span>
            <span className="text-[20px] font-bold text-neutral-800 sm:text-[22px] lg:text-[24px]">32</span>
            <span className="text-[11px] text-neutral-400 sm:text-[11px] lg:text-[12px]">/48</span>
            <span className="mt-0.5 block text-[9px] text-neutral-400 sm:mt-1 sm:text-[10px] lg:text-[11px]">Order completed</span>
          </span>
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full p-1 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            style={{ background: 'conic-gradient(#8b78ff 0 68%, #eeeafd 68% 100%)' }}
            aria-label="68 percent completed"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[9px] font-semibold text-neutral-700 sm:text-[10px] lg:text-[11px]">
              68
            </span>
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between py-2.5 sm:py-3 lg:py-4">
          <span>
            <span className="text-[20px] font-bold text-neutral-800 sm:text-[22px] lg:text-[24px]">17</span>
            <span className="text-[11px] text-neutral-400 sm:text-[11px] lg:text-[12px]">/24</span>
            <span className="mt-0.5 block text-[9px] text-neutral-400 sm:mt-1 sm:text-[10px] lg:text-[11px]">On shipping</span>
          </span>
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full p-1 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            style={{ background: 'conic-gradient(#ff8585 0 40%, #ffe9e9 40% 100%)' }}
            aria-label="40 percent in shipping"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[9px] font-semibold text-neutral-700 sm:text-[10px] lg:text-[11px]">
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
      <div className="mx-auto w-full max-w-[1320px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:px-0 xl:py-28">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="inline-block rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-neutral-800 sm:text-[12px]">
            Product Features
          </span>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:mt-5 sm:text-[34px] lg:text-[38px] xl:text-[44px]">
            Streamline tasks with
            <br className="hidden sm:block" />
            optimized workflows
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-500 sm:mt-4 sm:text-[14px] lg:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur
            <br className="hidden sm:block" />
            Vivamus non enim lacus.
          </p>
        </div>

        <div className="mx-auto mt-16 grid w-full grid-cols-1 justify-items-center gap-6 sm:mt-20 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-20 xl:grid-cols-[repeat(3,minmax(0,440px))]">
          {FEATURES.map((feature) => (
            <article
              key={feature.key}
              className="relative flex h-auto min-h-[580px] w-full max-w-[440px] flex-col overflow-visible rounded-[16px] bg-white shadow-[0_12px_30px_rgba(150,130,200,0.13)] sm:min-h-[620px] lg:min-h-[660px]"
            >
              <span
                className="pointer-events-none absolute -top-12 left-1/2 z-10 -translate-x-1/2 sm:-top-14 lg:-top-16"
                aria-hidden="true"
              >
                <img
                  src={feature.key === 'project' ? '/images/product-feature-cloud.png' : feature.key === 'analytics' ? '/images/product-feature-analytics.png' : '/images/product-feature-sales.png'}
                  alt=""
                  className="h-[88px] w-[88px] object-contain sm:h-[96px] sm:w-[96px] lg:h-[108px] lg:w-[108px]"
                />
              </span>

              <div className="px-4 pb-4 pt-[100px] text-center sm:px-5 sm:pt-[110px] lg:px-7 lg:pt-[120px]">
                <h3 className="text-[20px] font-bold leading-[1.25] text-neutral-900 sm:text-[22px] lg:text-[24px] xl:text-[28px]">
                  {feature.heading}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-neutral-500 sm:mt-4 sm:text-[15px] lg:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur
                  <br className="hidden sm:block" />
                  adipiscing elit.
                </p>
                <button
                  type="button"
                  className="mt-5 w-full rounded-md border border-neutral-200 px-3 py-2.5 text-[13px] font-medium text-neutral-800 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 sm:mt-6 sm:py-3 sm:text-[14px] lg:mt-7 lg:py-3.5"
                >
                  Learn More
                </button>
              </div>

              <div className="mt-2 flex min-h-0 flex-1 flex-col px-3 pb-4 sm:px-4 sm:pb-5">
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
