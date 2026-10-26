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
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-14">
            <h2 className="max-w-[390px] text-[24px] font-bold leading-[1.25] tracking-tight text-neutral-900 sm:text-[30px] md:text-[32px]">
              The growth of your business is our priority, so we are here to help.
            </h2>
            <p className="max-w-[390px] text-[13.5px] leading-[1.55] text-[#8B8A93] sm:text-[14px]">
              Eiusmod aliquot odio cursus lacus, ut sit suspendisse ultricies. Etiam enim risus
              faucibus feugiat ut enim in sed tincidunt. Eu in justo, eu porttitor vivamus neque.
            </p>
          </div>

          {/* 3 Metrics Box */}
          <div className="mt-10 grid grid-cols-1 divide-y divide-[#ECEAF1] rounded-xl border border-[#ECEAF1] bg-white px-5 py-4 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:px-6 sm:py-5">
            <div className="py-4 text-center sm:py-0">
              <p className="mx-auto w-fit rounded-md bg-[#F4F3F7] px-2.5 py-1 text-[10px] font-medium leading-none text-[#55535E]">
                CLIENT RETENTION
              </p>
              <p className="mt-2 text-[28px] font-bold leading-none tracking-tight text-neutral-900 sm:text-[30px]">
                5.2M
              </p>
            </div>
            <div className="py-4 text-center sm:py-0">
              <p className="mx-auto w-fit rounded-md bg-[#F4F3F7] px-2.5 py-1 text-[10px] font-medium leading-none text-[#55535E]">
                EMAILS PER MONTH
              </p>
              <p className="mt-2 text-[28px] font-bold leading-none tracking-tight text-neutral-900 sm:text-[30px]">
                +330K
              </p>
            </div>
            <div className="py-4 text-center sm:py-0">
              <p className="mx-auto w-fit rounded-md bg-[#F4F3F7] px-2.5 py-1 text-[10px] font-medium leading-none text-[#55535E]">
                MONTHLY CAMPAIGNS
              </p>
              <p className="mt-2 text-[28px] font-bold leading-none tracking-tight text-neutral-900 sm:text-[30px]">
                +44,5K
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. PRINCIPLES SECTION ---------------- */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1040px] px-6 sm:px-8">
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
            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <img
                  src="/images/value-client-focused.png"
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Client Focused
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <img
                  src="/images/value-innovate-optimize.png"
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Innovate & Optimize
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <img
                  src="/images/value-community-driven.png"
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Community Driven
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. GROWTH JOURNEY ---------------- */}
      <section className="otake-journey mx-auto min-h-[680px] w-full max-w-[848px] px-6 py-12 pb-16 md:h-[680px] md:px-0 md:py-0">
        <div className="mx-auto box-border h-full w-full max-w-[1040px] px-6 py-12 pb-16 sm:px-8 sm:pt-[64px] sm:pb-[70px] md:flex md:flex-col">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-0.5 text-[10px] font-semibold text-neutral-800">
              Our Story
            </span>
            <h2 className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-neutral-900">
              Our growth journey.
            </h2>
            <p className="mx-auto mt-2 max-w-[500px] text-[14px] leading-relaxed text-neutral-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus. Nullam
              congue blandit quam, sit amet scelerisque turpis.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-[700px] grid-cols-1 items-center gap-10 md:mt-10 md:flex-1 md:grid-cols-[320px_300px] md:gap-[80px]">
            {/* Left Column: Milestones */}
            <div className="space-y-6 md:-translate-y-[17px] md:space-y-8">
              <div>
                <p className="text-[24px] font-bold leading-tight tracking-tight text-neutral-900">
                  +100,000
                </p>
                <p className="mt-2 max-w-[300px] text-[14px] leading-[1.4] text-[#6F6C78]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>

              <div>
                <p className="text-[24px] font-bold leading-tight tracking-tight text-neutral-900">
                  5 Minutes
                </p>
                <p className="mt-2 max-w-[300px] text-[14px] leading-[1.4] text-[#6F6C78]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>

              <div>
                <p className="text-[24px] font-bold leading-tight tracking-tight text-neutral-900">
                  20 Years
                </p>
                <p className="mt-2 max-w-[300px] text-[14px] leading-[1.4] text-[#6F6C78]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>
            </div>

            {/* Right Column: 3D Character Card with Floating Badge */}
            <div className="relative mx-auto flex w-full max-w-[300px] -translate-y-4 items-center justify-center rounded-[24px] border-[7px] border-white bg-[#EFECFF] p-2.5 shadow-[0_20px_50px_rgba(180,170,220,0.28)] md:-translate-y-[21px]">
              <div className="relative h-[350px] w-full">
                <img
                  src="/images/about-journey-character.png"
                  alt="Growth journey visual"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Floating Glass Pill Badge */}
              <div className="absolute bottom-10 -left-[62px] z-20 flex items-center gap-3 rounded-[18px] border border-white bg-white px-4 py-3.5 shadow-[0_14px_30px_rgba(44,33,76,0.16)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0F5]">
                  <img
                    src="/images/value-innovate-optimize.png"
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 object-contain"
                  />
                </span>
                <span>
                  <span className="block text-[18px] font-bold leading-tight text-neutral-900">+416k</span>
                  <span className="mt-1 block text-[11px] leading-tight text-[#6F6C78]">Happy Customer</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. PRIMARY FEATURES ---------------- */}
      <section className="otake-product-features w-full py-16 sm:py-24">
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
      <section className="w-full bg-white py-16 sm:py-24">
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

      {/* ---------------- 7. TESTIMONIALS ---------------- */}
      <Testimonials />

      {/* ---------------- 8. FAQ ---------------- */}
      <FAQ />
    </div>
  )
}

export default About
