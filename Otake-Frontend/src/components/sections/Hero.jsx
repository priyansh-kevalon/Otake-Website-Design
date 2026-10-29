import { useState } from 'react'
import { getApiUrl } from '../../config/api'

function Hero() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
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
    try {
      const response = await fetch(getApiUrl('/api/newsletter/subscribe'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: value }),
      })
      if (response.ok) {
        setMessage(`Thanks! We'll send your free trial details to ${value}.`)
        setEmail('')
      } else {
        const data = await response.json()
        setMessage(data.message || 'Error subscribing')
      }
    } catch (error) {
      setMessage('Error subscribing')
    }
  }

  return (
    <section id="top" className="mt-4 w-full scroll-mt-6 overflow-hidden sm:mt-6">
      <div className="otake-hero relative w-full">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 xl:max-w-[1360px]">
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[45%_55%] lg:gap-0 xl:grid-cols-[45%_calc(55%_-_4rem)] xl:gap-x-16">
            <div className="relative flex flex-col py-10 sm:py-12 lg:self-stretch lg:pt-20 lg:pb-[140px] xl:pb-[120px]">
              <span className="inline-block w-fit rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-neutral-800 sm:px-3.5 sm:py-1.5 sm:text-[12px]">
                Powerful Solutions
              </span>

              <h1 className="mt-4 text-[30px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:mt-5 sm:text-[36px] lg:text-[44px]">
                <span className="whitespace-nowrap">Our Cutting-Edge</span>
                <br />
                Software Solutions
              </h1>

              <p className="mt-4 max-w-[390px] text-[13px] leading-relaxed text-neutral-700 sm:mt-5 sm:text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
                non enim lacus.
              </p>

              <p className="mt-8 text-[12px] font-semibold text-neutral-800 sm:mt-10 lg:mt-12 sm:text-[13px]">
                30 Day Free Trial No Credit Card Required:
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-3 flex w-full max-w-[460px] flex-col gap-2 sm:mt-4 sm:flex-row"
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
                  className="h-10 w-full rounded-lg border border-neutral-200 bg-white px-3 text-[12px] text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 sm:h-11 sm:px-4 sm:text-[13px]"
                />
                <button
                  type="submit"
                  className="h-10 shrink-0 rounded-lg bg-neutral-900 px-4 text-[12px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 sm:h-11 sm:px-5 sm:text-[13px]"
                >
                  Get Started -&gt; it&apos;s free
                </button>
              </form>

              <p
                className="mt-2 min-h-[14px] text-[10px] text-neutral-400 sm:mt-2.5 sm:min-h-[16px] sm:text-[11px]"
                aria-live="polite"
              >
                {message || 'Add some additional disclaimer text here.'}
              </p>

              <div className="mt-8 flex items-center gap-2.5 sm:mt-10 lg:mt-auto sm:gap-3">
                <div className="flex items-center">
                  <span
                    aria-hidden="true"
                    className="relative z-30 h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-neutral-100 sm:h-9 sm:w-9"
                  >
                    <img
                      src="/images/e07579d072467e7af019063cb6ec6e26b735e97a.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative -ml-2 z-20 h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-neutral-100 sm:-ml-3 sm:h-9 sm:w-9"
                  >
                    <img
                      src="/images/e252e1ab21f27f2bc0a3eea3a6a1d9efe3b3b10e.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative -ml-2 z-10 h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-neutral-100 sm:-ml-3 sm:h-9 sm:w-9"
                  >
                    <img
                      src="/images/898dc7658d2344f68673b605a7fc58d868d88498.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                </div>
                <div className="leading-tight">
                  <p className="text-[14px] font-bold text-neutral-900 sm:text-[15px]">24K+</p>
                  <p className="text-[11px] text-neutral-500 sm:text-[12px]">Active Users</p>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[380px] lg:min-h-[780px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,228,240,0.9),transparent_65%)]"
              />

              <div className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[660px]">
                <img
                  src="/images/a64c4a78edadea01ca20ff829b7dda330c463f08 (1).png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-125 object-contain brightness-90"
                />

                <img
                  src="/images/hero-character.png"
                  alt="3D cartoon character with purple headphones jumping"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_18px_26px_rgba(30,8,25,0.16)]"
                />

                <img
                  src="/images/a0bf6f49ef240e5fd88a726d1fcf7e347b1803cb.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[4%] top-[6%] z-0 h-auto w-[70px] rotate-[20deg] sm:w-[85px] lg:w-[120px]"
                />

                <img
                  src="/images/Background+Shadow1.png"
                  alt="Designers meeting card showing 62% attendance and 2M reach"
                  className="absolute left-0 top-[53%] z-20 h-auto w-[150px] sm:-left-[3%] sm:w-[190px] lg:w-[262px] xl:-left-[4%] xl:w-[296px]"
                />

                <img
                  src="/images/Background+Shadow.png"
                  alt="Customer statistics card showing +416 happy customers"
                  className="absolute right-0 top-[28%] z-20 h-auto w-[130px] sm:-right-[3%] sm:w-[156px] lg:right-0 lg:w-[188px] xl:-right-[2%] xl:w-[238px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
