function LogoIcon({ shape }) {
  if (shape === 'square-dots') {
    return (
      <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
        <rect x="3" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="7.5" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="12" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="3" y="7.5" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="12" y="7.5" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="3" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="7.5" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="12" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
      </svg>
    )
  }
  if (shape === 'chevron') {
    return (
      <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M7 5l3 4-3 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (shape === 'triangles') {
    return (
      <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M5 6l4-3v6l-4-3Z" fill="currentColor" />
        <path d="M10 9l3-2v4l-3-2Z" fill="currentColor" />
      </svg>
    )
  }
  if (shape === 'bars') {
    return (
      <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
        <rect x="4" y="5" width="2" height="8" rx="1" fill="currentColor" />
        <rect x="8" y="7" width="2" height="6" rx="1" fill="currentColor" />
        <rect x="12" y="4" width="2" height="9" rx="1" fill="currentColor" />
      </svg>
    )
  }
  if (shape === 'diamond') {
    return (
      <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M9 4l5 5-5 5-5-5 5-5Z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="6" cy="9" r="2" fill="currentColor" />
      <circle cx="12" cy="9" r="2" fill="currentColor" />
    </svg>
  )
}

const BRANDS_ROW1 = [
  { name: 'Cyrus', shape: 'square-dots' },
  { name: 'Jambo', shape: 'chevron' },
  { name: 'Kadu', shape: 'triangles' },
  { name: 'Vario', shape: 'bars' },
  { name: 'Prism', shape: 'diamond' },
  { name: 'Aspect', shape: 'dots' },
]

const BRANDS_ROW2 = [
  { name: 'Vario', shape: 'bars' },
  { name: 'Prism', shape: 'diamond' },
  { name: 'Aspect', shape: 'dots' },
  { name: 'Cyrus', shape: 'square-dots' },
  { name: 'Kadu', shape: 'triangles' },
  { name: 'Kadu', shape: 'triangles' },
]

function TrustedBrands() {
  return (
    <section id="about" className="w-full scroll-mt-6 bg-white">
      <div className="mx-auto max-w-[1080px] px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <span className="inline-block rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-neutral-800">
              Powerful Solutions
            </span>
            <h2 className="mt-5 text-[28px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[30px]">
              A powerful solution to boost
              <br />
              your business performance
            </h2>
          </div>
          <div className="max-w-[420px]">
            <p className="text-[13px] leading-relaxed text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur
              <br />
              Vivamus non enim lacus. Nullam congue blandit quam, sit
              <br />
              amet scelerisque turpis.
            </p>
            <a
              href="#customer-reviews"
              className="mt-6 inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-[13px] font-medium text-neutral-800 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
            >
              See Customer Reviews
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:mt-16">
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {BRANDS_ROW1.map((brand) => (
              <div key={`r1-${brand.name}`} className="flex items-center gap-2.5">
                <span className="text-neutral-900">
                  <LogoIcon shape={brand.shape} />
                </span>
                <span className="text-[19px] font-bold tracking-tight text-neutral-900">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {BRANDS_ROW2.map((brand, index) => (
              <div key={`r2-${brand.name}-${index}`} className="flex items-center gap-2.5">
                <span className="text-neutral-900">
                  <LogoIcon shape={brand.shape} />
                </span>
                <span className="text-[19px] font-bold tracking-tight text-neutral-900">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBrands
