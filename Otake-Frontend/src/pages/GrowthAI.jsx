import GetStarted from '../components/sections/GetStarted.jsx'
import FAQ from '../components/sections/FAQ.jsx'

function GrowthAI() {
  return (
    <div className="w-full">
      <section className="otake-about-hero relative w-full pt-6 pb-12 sm:pt-16 sm:pb-16 lg:pt-24">
        <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[720px] text-center">
            <span className="inline-block rounded-[4px] bg-[#FFE36A] px-4 py-1.5 text-[11px] font-semibold text-neutral-800 sm:text-[12px]">
              Growth AI
            </span>
            <h1 className="mt-5 text-[34px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[48px] md:text-[56px]">
              Smarter Growth With
              <br />
              AI-Powered Insights
            </h1>
            <p className="mx-auto mt-4 max-w-[580px] text-[14px] leading-relaxed text-neutral-900 sm:text-[16px]">
              Automate decisions, predict trends, and unlock actionable insights with Otake&apos;s intelligent growth engine.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex h-11 items-center rounded-lg bg-neutral-900 px-6 text-[13px] font-medium text-white hover:bg-neutral-800">
                Try Growth AI
              </button>
              <button className="inline-flex h-11 items-center rounded-lg border border-neutral-200 px-6 text-[13px] font-medium text-neutral-900 hover:bg-neutral-50">
                See How It Works
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Predictive Analytics', desc: 'Forecast revenue and churn with AI models.' },
              { title: 'Smart Recommendations', desc: 'Personalized actions to boost conversion rates.' },
              { title: 'Automated Reports', desc: 'Share insights across teams in one click.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[22px] border border-neutral-100 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                <h3 className="text-[18px] font-bold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GetStarted />
      <FAQ />
    </div>
  )
}

export default GrowthAI
