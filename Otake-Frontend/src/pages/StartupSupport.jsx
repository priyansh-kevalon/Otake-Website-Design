import GetStarted from '../components/sections/GetStarted.jsx'
import FAQ from '../components/sections/FAQ.jsx'

function StartupSupport() {
  return (
    <div className="w-full">
      <section className="otake-about-hero relative w-full pt-6 pb-12 sm:pt-16 sm:pb-16 lg:pt-24">
        <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[720px] text-center">
            <span className="inline-block rounded-[4px] bg-[#FFE36A] px-4 py-1.5 text-[11px] font-semibold text-neutral-800 sm:text-[12px]">
              Startup Support
            </span>
            <h1 className="mt-5 text-[34px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[48px] md:text-[56px]">
              Launch Faster With
              <br />
              Built-In Startup Support
            </h1>
            <p className="mx-auto mt-4 max-w-[580px] text-[14px] leading-relaxed text-neutral-900 sm:text-[16px]">
              From onboarding to go-to-market, Otake gives early-stage teams the tools, guidance, and automation to scale with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex h-11 items-center rounded-lg bg-neutral-900 px-6 text-[13px] font-medium text-white hover:bg-neutral-800">
                Get Started
              </button>
              <button className="inline-flex h-11 items-center rounded-lg border border-neutral-200 px-6 text-[13px] font-medium text-neutral-900 hover:bg-neutral-50">
                Talk to an Expert
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Guided Onboarding', desc: 'Step-by-step setup tailored to your stack and goals.' },
              { title: 'Founder Playbooks', desc: 'Proven templates to validate, price, and launch faster.' },
              { title: 'Priority Support', desc: 'Get answers from product specialists when it matters most.' },
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

export default StartupSupport
