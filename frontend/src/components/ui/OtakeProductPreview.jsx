import BrowserShell from './BrowserShell.jsx'

const TAGS = [
  { label: 'Designer', className: 'border-[#F6D2E6] bg-[#FDE8F3] text-[#B4578E]' },
  { label: 'Flowbase', className: 'border-[#DCCFF8] bg-[#EEE8FD] text-[#7B5BD3]' },
  { label: 'John', className: 'border-[#CFE0FA] bg-[#E5EEFD] text-[#4B76C3]' },
]

const FEATURES = [
  {
    label: 'Enhanced User Experience',
    copy: 'Intuitive interface for seamless navigation and interaction.',
    icon: 'spark',
  },
  {
    label: 'Customization Options',
    copy: 'User-controlled settings for person...',
    icon: 'sliders',
  },
]

function FeatureIcon({ type }) {
  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-[#EEE8FD]">
      {type === 'spark' ? (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path
            d="M12 3l1.9 4.9L19 9.8l-4.4 2.6L13.3 18 12 13.6 8.9 18 7.6 12.4 3.2 9.8l5.1-1.9L12 3Z"
            fill="#9A79F5"
          />
        </svg>
      ) : (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M4 7h10M18 7h2M4 12h4M12 12h8M4 17h10M18 17h2" stroke="#9A79F5" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="16" cy="7" r="2" fill="#9A79F5" />
          <circle cx="10" cy="12" r="2" fill="#9A79F5" />
          <circle cx="16" cy="17" r="2" fill="#9A79F5" />
        </svg>
      )}
    </span>
  )
}

function SelectionHandles() {
  const positions = ['left-0 top-0', 'right-0 top-0', 'left-0 bottom-0', 'right-0 bottom-0']

  return (
    <>
      {positions.map((position) => (
        <span
          key={position}
          className={`absolute ${position} h-[7px] w-[7px] rounded-full border border-[#9A79F5] bg-white`}
          aria-hidden="true"
        />
      ))}
    </>
  )
}

function OtakeProductPreview() {
  return (
    <BrowserShell>
      <div className="flex min-h-[378px] flex-col">
        <div className="relative">
          <p className="text-[26px] font-bold leading-none tracking-tight text-[#202027]">
            Otake
          </p>
          <p className="mt-2 text-[10.5px] font-medium text-[#85818F] sm:text-[9.5px]">500+ Experience</p>

          <div className="absolute -top-2 right-0 flex flex-col items-end gap-[6px]">
            {TAGS.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-full border px-2 py-[2px] text-[9px] font-medium leading-[1.3] sm:text-[8px] ${tag.className}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-9">
          {FEATURES.map((feature) => (
            <div key={feature.label}>
              <div className="flex items-center gap-2">
                <FeatureIcon type={feature.icon} />
                <p className="text-[10.5px] font-semibold text-[#9A79F5] sm:text-[9.5px]">{feature.label}</p>
              </div>

              <div className="relative mt-2.5 min-h-[62px] rounded-lg border border-[#E8E4F0] bg-white px-3 py-3">
                <SelectionHandles />
                <p className="text-[9.5px] leading-[1.55] text-[#85818F] sm:text-[8.5px]">{feature.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="mt-auto w-full cursor-default rounded-lg border border-[#E8E4F0] bg-white py-2.5 text-[10.5px] font-medium text-[#5C5866] sm:text-[9.5px]"
        >
          Redefining UI/UX
        </button>
      </div>
    </BrowserShell>
  )
}

export default OtakeProductPreview
