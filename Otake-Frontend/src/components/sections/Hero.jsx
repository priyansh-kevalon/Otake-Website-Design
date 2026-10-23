import { useState } from 'react'

const AVATARS = [
  { id: 1, className: 'bg-gradient-to-br from-pink-300 to-fuchsia-400' },
  { id: 2, className: 'bg-gradient-to-br from-amber-300 to-orange-400' },
  { id: 3, className: 'bg-gradient-to-br from-violet-300 to-indigo-400' },
]

function Hero() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = email.trim()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

    if (!value) {
      setMessage('Please enter your email address.')
      return
    }
    if (!isValid) {
      setMessage('Please enter a valid email address.')
      return
    }
    setMessage(`Thanks! We'll send your free trial details to ${value}.`)
  }

  return (
    <section id="top" className="mt-6 w-full scroll-mt-6 overflow-hidden">
      <div className="otake-hero relative w-full">
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="max-w-[620px] px-6 py-12 lg:py-[72px] lg:pl-[11%]">
            <span className="inline-block rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-neutral-800">
              Powerful Solutions
            </span>

            <h1 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-[38px] lg:text-[44px]">
              <span className="whitespace-nowrap">Our Cutting-Edge</span>
              <br />
              Software Solutions
            </h1>

            <p className="mt-5 max-w-[390px] text-[14px] leading-relaxed text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
              non enim lacus.
            </p>

            <p className="mt-6 text-[14px] font-semibold text-neutral-800">
              30 Days Free Trial No Credit Card Required!
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-3 flex max-w-[420px] flex-col gap-2 sm:flex-row"
              noValidate
            >
              <label htmlFor="hero-email" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your mail"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setMessage('')
                }}
                className="h-11 w-full rounded-lg border border-neutral-200 bg-white px-4 text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-lg bg-neutral-900 px-5 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                Get Started - it&apos;s free
              </button>
            </form>

            <p
              className="mt-2 min-h-[16px] text-[11px] text-neutral-400"
              aria-live="polite"
            >
              {message || 'Add some additional disclaimer text here.'}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center">
                <span
                  aria-hidden="true"
                  className="relative z-30 h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-neutral-100"
                >
                  <img
                    src="/images/e07579d072467e7af019063cb6ec6e26b735e97a.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="relative -ml-3 z-20 h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-neutral-100"
                >
                  <img
                    src="/images/e252e1ab21f27f2bc0a3eea3a6a1d9efe3b3b10e.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="relative -ml-3 z-10 h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-neutral-100"
                >
                  <img
                    src="/images/898dc7658d2344f68673b605a7fc58d868d88498.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-bold text-neutral-900">24K+</p>
                <p className="text-[11px] text-neutral-500">Active Users</p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[560px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,228,240,0.9),transparent_65%)]"
            />

            <span
              aria-hidden="true"
              className="absolute bottom-14 left-1/2 z-10 h-10 w-10 -translate-x-[150px] rounded-full bg-gradient-to-br from-pink-400 to-violet-500 shadow-lg shadow-pink-300/60"
            />
            <span
              aria-hidden="true"
              className="absolute right-1/2 top-16 z-10 h-10 w-10 translate-x-[130px] rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-lg shadow-orange-200/60"
            />

            <img
              src="/images/hero-character.png"
              alt="3D cartoon character with purple headphones jumping"
              className="relative z-10 h-auto w-full max-w-[400px] object-contain drop-shadow-[0_40px_60px_rgba(30,8,25,0.9)] lg:max-w-[480px]"
            />

            <div className="absolute bottom-6 left-4 z-20 w-[150px] -rotate-3 rounded-2xl bg-white p-3 shadow-lg shadow-pink-100/60 sm:bottom-10 sm:left-1/2 sm:w-[180px] sm:-translate-x-[190px]">
              <p className="text-[11px] font-semibold text-neutral-800">
                AI Designers
              </p>
              <p className="mt-1 text-[10px] text-neutral-400">Meeting-Up</p>
              <div className="mt-1 flex items-center justify-between text-[10px] text-neutral-500">
                <span>62%</span>
                <span>3/8</span>
              </div>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-pink-400 to-violet-500" />
              </div>
            </div>

            <div className="absolute right-4 top-16 z-20 flex -rotate-3 items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-lg shadow-pink-100/60 sm:right-1/2 sm:translate-x-[170px] sm:top-20">
              <div className="leading-tight">
                <p className="text-[12px] font-bold text-neutral-900">+416</p>
                <p className="text-[10px] text-neutral-400">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
