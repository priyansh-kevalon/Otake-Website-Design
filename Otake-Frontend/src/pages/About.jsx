import Testimonials from '../components/sections/Testimonials.jsx'
import FAQ from '../components/sections/FAQ.jsx'

function About() {
  return (
    <div className="w-full">
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="otake-about-hero otake-about-hero-deep relative z-10 w-full pt-6 pb-12 sm:pt-24 sm:pb-0">
        <div className="relative mx-auto flow-root max-w-[1080px] px-6 sm:px-8">
          <div className="relative mx-auto max-w-[680px] text-center">
            {/* Floating 3D accents around heading */}
            <span
              className="pointer-events-none absolute -left-2 top-1 hidden select-none sm:block lg:-left-10"
              aria-hidden="true"
            >
              <img
                src="/images/6d78f5c25e29d1b3c3efb378a0895ab50206643b.png"
                alt=""
                width="52"
                height="52"
                className="h-[52px] w-[52px] object-contain"
              />
            </span>
            <span
              className="pointer-events-none absolute -right-2 top-12 hidden select-none sm:block lg:-right-10"
              aria-hidden="true"
            >
              <img
                src="/images/73d9b74f1e858692091fb4e1a35f610182e1e25f.png"
                alt=""
                width="48"
                height="48"
                className="h-[48px] w-[48px] object-contain"
              />
            </span>

            <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
              About Us
            </span>

            <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[42px] md:text-[48px]">
              Empowering Businesses
              <br />
              Large And Small
            </h1>

            <p className="mx-auto mt-3 max-w-[480px] text-[13.5px] leading-relaxed text-[#8B8A93] sm:text-[14.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="hidden sm:inline" /> Vivamus non enim lacus.
            </p>
          </div>

          {/* 3 Character Persona Cards */}
          <div className="mt-5 grid grid-cols-1 gap-6 sm:-mb-[52px] sm:grid-cols-3 lg:gap-8">
            {/* Card 1: Curly hair with headphones & orange jacket */}
            <div className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-[20px] border-2 border-white/80 bg-[#E8F4FC] p-2 shadow-[0_16px_36px_rgba(180,210,240,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-full w-full items-end justify-center">
                <img
                  src="/images/2786fe25f4b989d98d13e7610dce4df13eaeb6da.png"
                  alt="Creative team member with headphones"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 2: Creative explosion / glasses character */}
            <div className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-[20px] border-2 border-white/80 bg-[#F1ECFE] p-2 shadow-[0_16px_36px_rgba(200,180,245,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-full w-full items-end justify-center">
                <img
                  src="/images/a785e06d39ad27b7b523a3d4f8c3b1f40cd7971b.png"
                  alt="Team lead innovator"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 3: Red hair with headphones */}
            <div className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-[20px] border-2 border-white/80 bg-[#FCEEF2] p-2 shadow-[0_16px_36px_rgba(245,180,200,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-full w-full items-end justify-center">
                <img
                  src="/images/c2c6e128aaea5e42ab32d4a6f02c0d8981c2454d.png"
                  alt="Support specialist"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. MISSION & METRICS ---------------- */}
      <section className="w-full bg-white pt-14 pb-14 sm:pt-56 sm:pb-20">
        <div className="mx-auto max-w-[1040px] px-6 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-neutral-900 sm:text-[30px] md:text-[32px]">
              The growth of your business is our priority, as we are here to help.
            </h2>
            <p className="text-[13.5px] leading-relaxed text-[#8B8A93] sm:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
              Nullam congue blandit quam, sit amet scelerisque turpis pellentesque eu. Nulla
              facilisi. In hac habitasse platea dictumst.
            </p>
          </div>

          {/* 3 Metrics Box */}
          <div className="mt-12 grid grid-cols-1 divide-y divide-neutral-100 rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:p-8">
            <div className="text-center py-3 sm:py-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-wider text-[#A19FA8]">
                TOTAL REVENUE
              </p>
              <p className="mt-2 text-[32px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
                8.5M
              </p>
            </div>
            <div className="text-center py-3 sm:py-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-wider text-[#A19FA8]">
                ACTIVE USERS
              </p>
              <p className="mt-2 text-[32px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
                +330K
              </p>
            </div>
            <div className="text-center py-3 sm:py-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-wider text-[#A19FA8]">
                POSITIVE REVIEWS
              </p>
              <p className="mt-2 text-[32px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
                +44.8K
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. PRINCIPLES SECTION ---------------- */}
      <section className="otake-values w-full py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
                Our Values
              </span>
              <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight text-neutral-900 sm:text-[34px]">
                And these are
                <br />
                our principles!
              </h2>
            </div>
            <div className="space-y-3 text-[13.5px] leading-relaxed text-black">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam, sit amet scelerisque turpis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* 3 Principles Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="min-h-[250px] rounded-[22px] border border-neutral-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg sm:p-9">
              <div className="flex justify-center">
                <img
                  src="/images/value-client-focused.png"
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-neutral-900">
                Client Focused
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="min-h-[250px] rounded-[22px] border border-neutral-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg sm:p-9">
              <div className="flex justify-center">
                <img
                  src="/images/value-innovate-optimize.png"
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-neutral-900">
                Innovate & Optimize
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="min-h-[250px] rounded-[22px] border border-neutral-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg sm:p-9">
              <div className="flex justify-center">
                <img
                  src="/images/value-community-driven.png"
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-neutral-900">
                Community Driven
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. GROWTH JOURNEY ---------------- */}
      <section className="otake-journey mx-auto min-h-[760px] w-full max-w-[1040px] px-6 py-12 pb-16 md:min-h-[780px] md:px-0 md:py-0">
        <div className="mx-auto box-border min-h-full w-full max-w-[1120px] px-6 py-12 pb-16 sm:px-8 sm:pt-[72px] sm:pb-[80px] md:flex md:flex-col">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#FFE36A] px-4 py-1 text-[11px] font-semibold text-neutral-800">
              Our Story
            </span>
            <h2 className="mt-4 text-[36px] font-bold leading-tight tracking-tight text-neutral-900 sm:text-[40px]">
              Our growth journey.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-relaxed text-neutral-900 sm:text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus. Nullam
              congue blandit quam, sit amet scelerisque turpis.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[860px] grid-cols-1 items-center gap-12 md:mt-12 md:flex-1 md:grid-cols-[380px_360px] md:gap-[80px]">
            {/* Left Column: Milestones */}
            <div className="space-y-8 md:-translate-y-[17px] md:space-y-10">
              <div>
                <p className="text-[28px] font-bold leading-tight tracking-tight text-neutral-900">
                  +100,000
                </p>
                <p className="mt-2.5 max-w-[360px] text-[15px] leading-[1.5] text-[#6F6C78]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>

              <div>
                <p className="text-[28px] font-bold leading-tight tracking-tight text-neutral-900">
                  5 Minutes
                </p>
                <p className="mt-2.5 max-w-[360px] text-[15px] leading-[1.5] text-[#6F6C78]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>

              <div>
                <p className="text-[28px] font-bold leading-tight tracking-tight text-neutral-900">
                  20 Years
                </p>
                <p className="mt-2.5 max-w-[360px] text-[15px] leading-[1.5] text-[#6F6C78]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>
            </div>

            {/* Right Column: 3D Character Card with Floating Badge */}
            <div className="relative mx-auto flex w-full max-w-[360px] -translate-y-4 items-center justify-center rounded-[28px] border-[8px] border-white bg-[#EFECFF] p-3 shadow-[0_22px_55px_rgba(180,170,220,0.28)] md:-translate-y-[21px]">
              <div className="relative h-[420px] w-full">
                <img
                  src="/images/about-journey-character.png"
                  alt="Growth journey visual"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Floating Glass Pill Badge */}
              <div className="absolute bottom-12 -left-[72px] z-20 flex items-center gap-3.5 rounded-[20px] border border-white bg-white px-5 py-4 shadow-[0_16px_34px_rgba(44,33,76,0.16)]">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF0F5]">
                  <img
                    src="/images/value-innovate-optimize.png"
                    alt=""
                    aria-hidden="true"
                    className="h-9 w-9 object-contain"
                  />
                </span>
                <span>
                  <span className="block text-[20px] font-bold leading-tight text-neutral-900">+416k</span>
                  <span className="mt-1 block text-[12px] leading-tight text-[#6F6C78]">Happy Customer</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="otake-product-story">
      {/* ---------------- 5. PRIMARY FEATURES ---------------- */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-[1040px] px-6 sm:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
              Product Features
            </span>
            <h2 className="mt-4 text-[30px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
              Our primary features
            </h2>
            <p className="mx-auto mt-3 max-w-[460px] text-[13.5px] leading-relaxed text-[#8B8A93]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
            </p>
          </div>

          {/* 3 Stacked Cards */}
          <div className="mx-auto mt-12 flex w-full max-w-[476px] flex-col gap-3">
            <div className="flex h-[204.39px] items-center gap-4 rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-[0_6px_24px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <img
                src="/images/value-client-focused.png"
                alt=""
                aria-hidden="true"
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-neutral-900">
                  Business insurance
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-black">
                  We keep our promises, provide upfront timelines and bring predictability .
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-md border border-neutral-200 px-3 py-1.5 text-[12px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex h-[204.39px] items-center gap-4 rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-[0_6px_24px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <img
                src="/images/business-growth-cloud.png"
                alt=""
                aria-hidden="true"
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-neutral-900">
                  Home insurance
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-black">
                  We keep our promises, provide upfront timelines and bring predictability .
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-md border border-neutral-200 px-3 py-1.5 text-[12px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex h-[204.39px] items-center gap-4 rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-[0_6px_24px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <img
                src="/images/0decbf5f3674553f5aa9cd39eca32e91b51adb52.png"
                alt=""
                aria-hidden="true"
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-neutral-900">
                  Life insurance
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-black">
                  We keep our promises, provide upfront timelines and bring predictability .
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-md border border-neutral-200 px-3 py-1.5 text-[12px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 6. OUR STORY ---------------- */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-[760px] px-6 text-center sm:px-8">
          <h2 className="text-[28px] font-bold tracking-tight text-neutral-900 sm:text-[34px]">
            Our story
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[#8B8A93] sm:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
            Nullam congue blandit quam, sit amet scelerisque turpis pellentesque eu. Nulla
            facilisi. In hac habitasse platea dictumst. Curabitur vel purus massa. Vivamus sit
            amet tellus a neque luctus eleifend. Praesent eget ipsum sed lorem gravida
            fermentum nec nec libero.
          </p>
        </div>
      </section>
      </div>

      {/* ---------------- 7. TESTIMONIALS ---------------- */}
      <Testimonials />

      {/* ---------------- 8. FAQ ---------------- */}
      <FAQ />
    </div>
  )
}

export default About
