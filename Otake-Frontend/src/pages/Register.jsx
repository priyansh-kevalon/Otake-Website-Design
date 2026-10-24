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

function GeometricLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="200" y1="100" x2="400" y2="200" stroke="#d8b4fe" strokeOpacity="0.18" strokeWidth="1" />
      <line x1="1000" y1="150" x2="800" y2="250" stroke="#f9a8d4" strokeOpacity="0.18" strokeWidth="1" />
      <line x1="150" y1="650" x2="350" y2="550" stroke="#fca5a5" strokeOpacity="0.16" strokeWidth="1" />
      <line x1="1050" y1="620" x2="850" y2="520" stroke="#fdba74" strokeOpacity="0.16" strokeWidth="1" />
      <line x1="600" y1="80" x2="600" y2="180" stroke="#c4b5fd" strokeOpacity="0.15" strokeWidth="1" />
      <line x1="600" y1="620" x2="600" y2="720" stroke="#fda4af" strokeOpacity="0.15" strokeWidth="1" />
    </svg>
  )
}

function LeftDecor() {
  return (
    <div
      className="pointer-events-none absolute left-4 top-[70px] hidden md:left-16 md:block xl:left-32"
      aria-hidden="true"
    >
      <img
        src="/images/register-decor-left.png"
        alt=""
        width="56"
        height="56"
        className="h-12 w-12 xl:h-[80px] xl:w-[80px]"
      />
    </div>
  )
}

function RightDecor() {
  return (
    <div
      className="pointer-events-none absolute right-4 top-[260px] hidden md:right-16 md:block xl:right-32"
      aria-hidden="true"
    >
      <img
        src="/images/register-decor-right.png"
        alt=""
        width="56"
        height="56"
        className="h-12 w-12 xl:h-[80px] xl:w-[80px]"
      />
    </div>
  )
}

function Register({ onNavigate }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!email) {
      setError('Please enter your email address.')
      return
    }
    if (!password) {
      setError('Please enter your password.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    // No actual auth implementation - just validation per requirements
    setError('Registration functionality is not configured in this environment.')
  }

  const handleGoogleSignIn = () => {
    // Google OAuth not configured as per existing setup
    setError('Google sign-in is not configured in this environment.')
  }

  return (
    <div className="relative w-full py-10 sm:py-14">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="otake-register-background absolute inset-0" />
        <GeometricLines />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <LeftDecor />
        <RightDecor />

        {/* Heading */}
        <div className="relative z-10 text-center">
          <span className="inline-block rounded-full bg-[#FFE36A] px-3 py-[5px] text-[11px] font-semibold text-[#1A1A1A]">
            Online Register
          </span>
          <h1 className="mt-3 text-[26px] font-bold tracking-tight text-neutral-900 sm:mt-4 sm:text-[28px] md:text-[30px]">
            Welcome Otake!
          </h1>
        </div>

        {/* Form Container */}
        <div className="relative z-10 mx-auto mt-7 w-full max-w-[420px] rounded-lg border border-neutral-200/90 bg-transparent px-6 py-7 shadow-none sm:max-w-[430px] sm:px-7 sm:py-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="register-name" className="mb-1.5 block text-[12px] font-medium text-neutral-800">
                Full Name
              </label>
              <input
                id="register-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="register-email" className="mb-1.5 block text-[12px] font-medium text-neutral-800">
                Email Address
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="business@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="register-password" className="mb-1.5 block text-[12px] font-medium text-neutral-800">
                Password
              </label>
              <input
                id="register-password"
                name="new-password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="8+ characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="register-confirm" className="mb-1.5 block text-[12px] font-medium text-neutral-800">
                Confirm Password
              </label>
              <input
                id="register-confirm"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              />
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 text-[12px] text-neutral-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-400"
                />
                <span>Remember me</span>
              </label>
              <a
                href="#forgot-password"
                className="inline-flex min-h-[24px] items-center text-[12px] text-neutral-700 hover:text-neutral-900 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-1 h-11 w-full rounded-lg bg-black text-[13px] font-medium text-white transition-colors hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
            >
              Register
            </button>

            {error && (
              <p className="text-center text-[11.5px] text-red-600">{error}</p>
            )}
          </form>

          <div className="my-4 flex items-center gap-3">
            <div className="h-[1px] flex-1 bg-neutral-200" />
            <div className="h-[1px] flex-1 bg-neutral-200" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-neutral-200 bg-white text-[12.5px] font-medium text-neutral-800 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>
        </div>

        <p className="relative z-10 mt-6 text-center text-[12px] text-neutral-600">
          Don't have an account?{' '}
          <a
            href="#login"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigate) onNavigate('login')
            }}
            className="inline-flex min-h-[24px] items-center font-medium text-neutral-900 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register
