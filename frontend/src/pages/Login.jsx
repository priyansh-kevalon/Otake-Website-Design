import { useState } from 'react'

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function PerspectiveLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 700 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="0" x2="350" y2="300" stroke="#FFFFFF" strokeOpacity="0.35" />
      <line x1="700" y1="0" x2="350" y2="300" stroke="#FFFFFF" strokeOpacity="0.35" />
      <line x1="0" y1="600" x2="350" y2="300" stroke="#FFFFFF" strokeOpacity="0.35" />
      <line x1="700" y1="600" x2="350" y2="300" stroke="#FFFFFF" strokeOpacity="0.35" />
      <rect
        x="120"
        y="80"
        width="460"
        height="440"
        stroke="#FFFFFF"
        strokeOpacity="0.25"
        fill="none"
      />
    </svg>
  )
}

function Login({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <div className="w-full py-6 sm:py-10">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white shadow-[0_24px_60px_rgba(150,130,200,0.12)] sm:rounded-[36px] lg:grid lg:grid-cols-12">
          {/* ---------------- LEFT COLUMN: LOGIN FORM ---------------- */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-5 lg:p-14">
            <div>
              <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
                Otake Login
              </span>

              <h1 className="mt-4 text-[28px] font-bold tracking-tight text-neutral-900 sm:text-[34px]">
                Otake Login
              </h1>
            </div>

            {/* Social Logins */}
            <div className="mt-7 space-y-3">
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 text-[12.5px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              >
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 text-[12.5px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              >
                <TwitterIcon />
                <span>Continue with Twitter</span>
              </button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center justify-center">
              <span className="h-[1px] w-full bg-neutral-200" />
              <span className="px-3 text-[11.5px] text-neutral-400">or</span>
              <span className="h-[1px] w-full bg-neutral-200" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="text-[11.5px] font-semibold text-neutral-700"
                >
                  Email Address
                </label>
                <input
                  id="login-email"
                  type="email"
                  required
                  placeholder="business@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="text-[11.5px] font-semibold text-neutral-700"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  required
                  placeholder="min 8 character."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
                />
              </div>

              {/* Options */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-[12px] text-neutral-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-purple-400"
                  />
                  <span>Remember me</span>
                </label>

                <a
                  href="#forgot-password"
                  className="text-[12px] font-medium text-neutral-700 transition-colors hover:text-neutral-900 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center rounded-xl bg-neutral-900 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                >
                  {submitted ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-[12.5px] text-neutral-500">
              Don&apos;t have an account?{' '}
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigate) onNavigate('register')
                }}
                className="font-semibold text-neutral-900 hover:underline"
              >
                Register
              </a>
            </p>
          </div>

          {/* ---------------- RIGHT COLUMN: 3D HERO VISUAL ---------------- */}
          <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-gradient-to-tr from-[#ECE7FF] via-[#FCE7F3] to-[#FFF0EA] p-8 sm:p-12 lg:col-span-7 lg:min-h-[640px]">
            {/* Perspective grid lines */}
            <PerspectiveLines />

            {/* Ambient Floating 3D Spheres & Clouds */}
            <span
              aria-hidden="true"
              className="absolute left-16 top-16 z-10 h-10 w-10 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow-lg shadow-orange-300/40"
            />
            <span
              aria-hidden="true"
              className="absolute right-16 top-14 z-10 h-8 w-14 rounded-full bg-white/80 shadow-md backdrop-blur-sm"
            />
            <span
              aria-hidden="true"
              className="absolute right-12 bottom-36 z-10 h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-yellow-400 shadow-lg shadow-yellow-200/50"
            />
            <span
              aria-hidden="true"
              className="absolute right-28 bottom-16 z-10 h-5 w-5 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400"
            />

            {/* Central 3D Jumping Character */}
            <img
              src="/images/hero-character.png"
              alt="Otake 3D jumping character"
              className="relative z-10 h-auto w-full max-w-[380px] object-contain drop-shadow-[0_30px_60px_rgba(40,10,35,0.4)] sm:max-w-[420px]"
            />

            {/* Floating Card 1: All Designers */}
            <div className="absolute bottom-10 left-6 z-20 w-[190px] rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl shadow-purple-500/10 backdrop-blur-md sm:bottom-12 sm:left-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11.5px] font-bold text-neutral-900">All Designers</p>
                  <p className="text-[10px] text-neutral-400">Meeting-Up</p>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-100 text-orange-600 text-[10px]">
                  🦊
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[10px] text-neutral-500">
                <span>62%</span>
                <span>2M</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500" />
              </div>
            </div>

            {/* Floating Card 2: +416 Happy Customer */}
            <div className="absolute top-20 right-6 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-xl shadow-purple-500/10 backdrop-blur-md sm:top-24 sm:right-10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-300 to-rose-400 text-white text-xs shadow-sm">
                👤
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-bold text-neutral-900">+416</p>
                <p className="text-[10px] text-neutral-400">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
