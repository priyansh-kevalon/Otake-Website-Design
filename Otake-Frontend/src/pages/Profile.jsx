import { useEffect, useState } from 'react'

function Profile({ onNavigate }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('otake_site_user') || localStorage.getItem('otake_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        setUser(null)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('otake_site_token')
    localStorage.removeItem('otake_site_user')
    localStorage.removeItem('otake_token')
    localStorage.removeItem('otake_user')
    if (onNavigate) onNavigate('home')
    window.location.hash = '#home'
    window.location.reload()
  }

  if (!user) {
    return (
      <div className="w-full py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="text-2xl font-bold text-neutral-900">Please login to view profile</h1>
          <button
            onClick={() => {
              if (onNavigate) onNavigate('login')
              window.location.hash = '#login'
            }}
            className="mt-4 inline-flex h-10 items-center rounded-md bg-neutral-900 px-6 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8">
          <span className="inline-block rounded-full bg-[#FFE36A] px-3 py-1 text-[11px] font-semibold text-neutral-800">
            My Profile
          </span>
          <h1 className="mt-3 text-[28px] font-bold tracking-tight text-neutral-900 sm:text-[34px]">
            Account Information
          </h1>
          <p className="mt-2 text-sm text-neutral-600">Manage your personal details</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(150,130,200,0.08)]">
          <div className="flex flex-col items-center gap-4 border-b border-neutral-100 px-6 py-8 sm:flex-row sm:gap-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-2xl font-semibold">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold text-neutral-900">{user.firstName} {user.lastName}</h2>
              <p className="text-sm text-neutral-500">{user.email}</p>
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">First Name</label>
              <p className="mt-1 text-sm text-neutral-900">{user.firstName}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Last Name</label>
              <p className="mt-1 text-sm text-neutral-900">{user.lastName}</p>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Email Address</label>
              <p className="mt-1 text-sm text-neutral-900">{user.email}</p>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Account Type</label>
              <p className="mt-1 text-sm text-neutral-900">User</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-neutral-100 px-6 py-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home')
                window.location.hash = '#home'
              }}
              className="inline-flex h-9 items-center rounded-md border border-neutral-200 px-4 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Back to Home
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex h-9 items-center rounded-md bg-red-50 px-4 text-sm font-medium text-red-600 hover:bg-red-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
