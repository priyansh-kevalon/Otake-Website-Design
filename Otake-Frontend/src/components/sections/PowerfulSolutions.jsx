import BrowserShell from '../ui/BrowserShell.jsx'
import OtakePerformancePreview from '../ui/OtakePerformancePreview.jsx'

const BULLETS = [
  'Register users in seconds.',
  'Collect authorization via secure portals.',
]

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus. Nullam congue blandit quam, sit amet scelerisque turpis.'

function FeatureCopy({ heading, muted }) {
  return (
    <div>
      <span className="inline-block rounded-full border border-neutral-300 px-2.5 py-1 text-[9px] font-medium tracking-wide text-neutral-600">
        Product Features
      </span>

      <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[29px] lg:text-[30px]">
        {heading}
        <br />
        <span className="text-neutral-400">{muted}</span>
      </h2>

      <p className="mt-3 max-w-[390px] text-[12px] leading-relaxed text-neutral-500">
        {DESCRIPTION}
      </p>

      <button
        type="button"
        className="mt-5 rounded-md bg-neutral-900 px-3.5 py-2 text-[10px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2"
      >
        Find Out More
      </button>

      <ul className="mt-5 space-y-2">
        {BULLETS.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-[11px] leading-[1.5] text-neutral-600"
          >
            <span
              className="mt-[2px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white"
              aria-hidden="true"
            >
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                <path d="m2.5 6 2.2 2.2L9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PreviewShell({ children, glowClass }) {
  return (
    <div className="otake-preview relative w-full max-w-[320px]">
      <div
        className={`pointer-events-none absolute -inset-4 rounded-[48px] blur-3xl sm:-inset-6 ${glowClass}`}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  )
}

function PowerfulSolutions() {
  return (
    <section id="solutions" className="otake-solutions w-full scroll-mt-6">
      <div className="mx-auto flex min-h-[1008px] w-full max-w-[944px] flex-col justify-center gap-14 px-6 py-10 sm:px-8 lg:h-[1008px] lg:justify-between lg:gap-0 lg:py-10">
        <div className="relative grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-9 lg:min-h-0 lg:flex-1">
          <img
            src="/images/solutions-cloud-decoration.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[41%] top-[68%] z-20 hidden h-16 w-16 -translate-x-1/2 object-contain md:block"
          />
          <div className="md:order-1">
            <FeatureCopy heading="Powerful solutions" muted="redefining growth." />
          </div>

          <div className="flex justify-center md:order-2">
            <PreviewShell
              glowClass="bg-gradient-to-br from-pink-100/70 via-violet-100/50 to-sky-100/60"
            >
              <BrowserShell>
                <img
                  src="/images/product-feature-preview.png"
                  alt="Otake product preview highlighting user experience and customization features"
                  className="block h-auto w-full rounded-[18px]"
                />
              </BrowserShell>
            </PreviewShell>
          </div>
        </div>

        <div className="relative grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-9 lg:min-h-0 lg:flex-1">
          <div className="flex justify-center md:order-1">
            <PreviewShell
              glowClass="bg-gradient-to-br from-sky-100/70 via-violet-100/50 to-orange-100/50"
            >
              <OtakePerformancePreview />
            </PreviewShell>
          </div>

          <div className="md:order-2">
            <FeatureCopy heading="Take control of business" muted="analytics and data." />
          </div>
          <img
            src="/images/solutions-analytics-decoration.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[3%] top-[66%] z-20 hidden h-16 w-16 object-contain md:block"
          />
        </div>
      </div>
    </section>
  )
}

export default PowerfulSolutions
