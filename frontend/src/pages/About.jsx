import Testimonials from '../components/sections/Testimonials.jsx'
import FAQ from '../components/sections/FAQ.jsx'

function PinkGemIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="pg-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="40%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
        <linearGradient id="pg-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFF1F2" />
          <stop offset="100%" stopColor="#FECDD3" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="16" ry="4" fill="#9F1239" opacity="0.15" />
      <path d="M22 16h20l12 14-22 22-22-22 12-14Z" fill="url(#pg-a)" />
      <path d="M22 16l10 14 10-14H22Z" fill="url(#pg-top)" />
      <path d="M10 30l12-14 10 14-22 0Z" fill="#FDA4AF" opacity="0.6" />
      <path d="M54 30l-12-14-10 14 22 0Z" fill="#F43F5E" opacity="0.7" />
      <path d="M32 52L22 30h20L32 52Z" fill="#BE123C" opacity="0.8" />
      <circle cx="28" cy="22" r="2" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

function CoralOrangeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="co-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="40%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="16" ry="4" fill="#7C2D12" opacity="0.16" />
      <circle cx="25" cy="38" r="8" fill="url(#co-grad)" />
      <circle cx="39" cy="38" r="8" fill="url(#co-grad)" />
      <circle cx="20" cy="28" r="7.5" fill="url(#co-grad)" />
      <circle cx="44" cy="28" r="7.5" fill="url(#co-grad)" />
      <circle cx="26" cy="20" r="8" fill="url(#co-grad)" />
      <circle cx="38" cy="20" r="8" fill="url(#co-grad)" />
      <circle cx="32" cy="27" r="9.5" fill="url(#co-grad)" />
      <circle cx="30" cy="24" r="2.2" fill="#FFFFFF" opacity="0.7" />
    </svg>
  )
}

function PastelShellIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ps-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="35%" stopColor="#F472B6" />
          <stop offset="70%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="16" ry="4" fill="#4C1D95" opacity="0.14" />
      <path
        d="M20 44c-5-5-5-14 0-19 5-5 14-5 19 0l7 7c3 3 3 8 0 11-3 3-8 3-11 0l-4-4c-1-1-1-3 0-4 1-1 3-1 4 0l2 2"
        stroke="url(#ps-shell)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="30" cy="26" r="2.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

function RedCubeIcon() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" fill="#FDA4AF" />
        <path d="M12 2l9 5-9 5-9-5 9-5Z" fill="#F43F5E" />
        <path d="M12 12l9-5v10l-9 5V12Z" fill="#E11D48" />
        <path d="M12 12L3 7v10l9 5V12Z" fill="#FB7185" />
      </svg>
    </div>
  )
}

function PurpleCloverIcon() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="5" fill="#C084FC" />
        <circle cx="16" cy="8" r="5" fill="#A855F7" />
        <circle cx="8" cy="16" r="5" fill="#A855F7" />
        <circle cx="16" cy="16" r="5" fill="#9333EA" />
        <circle cx="12" cy="12" r="3" fill="#FFFFFF" opacity="0.8" />
      </svg>
    </div>
  )
}

function YellowFlameIcon() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2c0 4-3 6-3 10a6 6 0 0 0 12 0c0-4-3-6-3-10l-6 0Z"
          fill="#FBBF24"
        />
        <path
          d="M12 7c0 3-2 4.5-2 7.5a4.5 4.5 0 0 0 9 0c0-3-2-4.5-2-7.5l-5 0Z"
          fill="#F59E0B"
        />
        <path
          d="M12 12c0 2-1 3-1 5a2.5 2.5 0 0 0 5 0c0-2-1-3-1-5l-3 0Z"
          fill="#FEF3C7"
        />
      </svg>
    </div>
  )
}

function About() {
  return (
    <div className="w-full">
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="otake-about-hero otake-about-hero-deep relative z-10 w-full pt-6 pb-12 sm:pt-10 sm:pb-0">
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
          <div className="mt-5 grid grid-cols-1 gap-6 sm:-mb-[172px] sm:grid-cols-3 lg:gap-8">
            {/* Card 1: Curly hair with headphones & orange jacket */}
            <div className="group relative flex flex-col items-center justify-end overflow-hidden rounded-[28px] border border-white/80 bg-[#E8F4FC] p-4 shadow-[0_16px_36px_rgba(180,210,240,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-[280px] w-full items-end justify-center sm:h-[310px]">
                <img
                  src="/images/2786fe25f4b989d98d13e7610dce4df13eaeb6da.png"
                  alt="Creative team member with headphones"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 2: Creative explosion / glasses character */}
            <div className="group relative flex flex-col items-center justify-end overflow-hidden rounded-[28px] border border-white/80 bg-[#F1ECFE] p-4 shadow-[0_16px_36px_rgba(200,180,245,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-[280px] w-full items-end justify-center sm:h-[310px]">
                <img
                  src="/images/a785e06d39ad27b7b523a3d4f8c3b1f40cd7971b.png"
                  alt="Team lead innovator"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 3: Red hair with headphones */}
            <div className="group relative flex flex-col items-center justify-end overflow-hidden rounded-[28px] border border-white/80 bg-[#FCEEF2] p-4 shadow-[0_16px_36px_rgba(245,180,200,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-[280px] w-full items-end justify-center sm:h-[310px]">
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
      <section className="otake-values-bg w-full py-16 sm:py-24">
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
            <div className="space-y-3 text-[13.5px] leading-relaxed text-[#8B8A93]">
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
                <PinkGemIcon />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Client Focused
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <CoralOrangeIcon />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Innovate & Optimize
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <PastelShellIcon />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Community Driven
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. GROWTH JOURNEY ---------------- */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1040px] px-6 sm:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
              Our Journey
            </span>
            <h2 className="mt-4 text-[30px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
              Our growth journey.
            </h2>
            <p className="mx-auto mt-3 max-w-[460px] text-[13.5px] leading-relaxed text-[#8B8A93]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Column: Milestones */}
            <div className="space-y-8">
              <div>
                <p className="text-[32px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
                  +100,000
                </p>
                <p className="mt-1.5 max-w-[360px] text-[13px] leading-relaxed text-[#8B8A93]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>

              <div>
                <p className="text-[32px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
                  5 Minutes
                </p>
                <p className="mt-1.5 max-w-[360px] text-[13px] leading-relaxed text-[#8B8A93]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>

              <div>
                <p className="text-[32px] font-bold tracking-tight text-neutral-900 sm:text-[38px]">
                  2-3 Years
                </p>
                <p className="mt-1.5 max-w-[360px] text-[13px] leading-relaxed text-[#8B8A93]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue blandit quam.
                </p>
              </div>
            </div>

            {/* Right Column: 3D Character Card with Floating Badge */}
            <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FE] p-6 shadow-[0_20px_50px_rgba(180,190,240,0.3)]">
              <div className="relative h-[320px] w-full sm:h-[360px]">
                <img
                  src="/images/hero-character.png"
                  alt="Growth journey visual"
                  className="h-full w-full object-contain drop-shadow-[0_20px_30px_rgba(20,10,30,0.2)]"
                />
              </div>

              {/* Floating Glass Pill Badge */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 rounded-2xl border border-white/90 bg-white/95 px-4 py-2.5 shadow-lg shadow-purple-500/10 backdrop-blur-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-600">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="text-[12px] font-semibold text-neutral-800">
                  Otake ~ Redefining UI/UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. PRIMARY FEATURES ---------------- */}
      <section className="w-full bg-[#FAFAFC] py-16 sm:py-24">
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
          <div className="mx-auto mt-12 flex max-w-[580px] flex-col gap-4">
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <RedCubeIcon />
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-neutral-900">
                  Streamline Tasks
                </h3>
                <p className="mt-1 text-[12.5px] text-[#8B8A93]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim.
                </p>
                <button
                  type="button"
                  className="mt-2.5 rounded-md border border-neutral-200 px-3 py-1 text-[11px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <PurpleCloverIcon />
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-neutral-900">
                  Powerful Insights
                </h3>
                <p className="mt-1 text-[12.5px] text-[#8B8A93]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim.
                </p>
                <button
                  type="button"
                  className="mt-2.5 rounded-md border border-neutral-200 px-3 py-1 text-[11px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <YellowFlameIcon />
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-neutral-900">
                  Effortless Growth
                </h3>
                <p className="mt-1 text-[12.5px] text-[#8B8A93]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim.
                </p>
                <button
                  type="button"
                  className="mt-2.5 rounded-md border border-neutral-200 px-3 py-1 text-[11px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
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
