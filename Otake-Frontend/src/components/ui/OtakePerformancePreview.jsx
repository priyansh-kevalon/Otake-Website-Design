import BrowserShell from './BrowserShell.jsx'

const TABS = ['New Users', 'Online Sales', 'Daily Sales']

const AVATARS = [
  '/images/e07579d072467e7af019063cb6ec6e26b735e97a.png',
  '/images/e252e1ab21f27f2bc0a3eea3a6a1d9efe3b3b10e.png',
  '/images/898dc7658d2344f68673b605a7fc58d868d88498.png',
]

function PerformanceIcon() {
  return (
    <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#EEE8FD]">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M4 18V11M9.3 18V6M14.7 18v-9M20 18V8" stroke="#9A79F5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function LightningIcon() {
  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FFD84D]">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M13.2 2 5 13.4h5.1L9.8 22 18 10.6h-5.1L13.2 2Z" fill="#202027" />
      </svg>
    </span>
  )
}

function OtakePerformancePreview() {
  return (
    <BrowserShell>
      <div className="flex min-h-[378px] flex-col justify-between">
        <div>
          <div className="flex items-center gap-2">
            <PerformanceIcon />
            <p className="text-[11.5px] font-semibold text-[#202027]">Otake Performance:</p>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {TABS.map((tab, index) => (
              <span
                key={tab}
                className={`rounded-full px-2.5 py-[3px] text-[9.5px] font-medium leading-[1.4] sm:text-[8.5px] ${
                  index === 0
                    ? 'bg-[#171717] text-white'
                    : 'bg-white text-[#5C5866] ring-1 ring-[#E8E4F0]'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={AVATARS[0]}
                alt=""
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="text-[8.5px] font-semibold uppercase tracking-wider sm:text-[7px] text-[#85818F]">
                  Top Users
                </p>
                <p className="mt-1 truncate text-[11px] font-semibold text-[#202027]">
                  John Smith
                </p>
              </div>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-[8.5px] font-semibold uppercase tracking-wider sm:text-[7px] text-[#85818F]">
                Purchase
              </p>
              <p className="mt-1 text-[11px] font-semibold text-[#202027]">7 Items</p>
            </div>
          </div>

          <div className="mt-5 border-t border-[#E8E4F0] pt-5">
            <p className="text-[8.5px] font-semibold uppercase tracking-wider sm:text-[7px] text-[#85818F]">
              Total New Users
            </p>

            <div className="mt-3.5 flex items-center gap-2.5">
              <div className="flex shrink-0 -space-x-2">
                {AVATARS.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-[30px] w-[30px] rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <div className="flex min-w-0 flex-1 items-baseline gap-1.5">
                <p className="text-[24px] font-bold leading-none tracking-tight text-[#202027]">
                  12.4K
                </p>
                <p className="truncate text-[9.5px] text-[#85818F] sm:text-[8.5px]">Otake Users</p>
              </div>

              <LightningIcon />
            </div>
          </div>
        </div>

        <p className="text-center text-[9.5px] leading-[1.6] text-[#85818F] sm:text-[8.5px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim
          lacus.
        </p>
      </div>
    </BrowserShell>
  )
}

export default OtakePerformancePreview
