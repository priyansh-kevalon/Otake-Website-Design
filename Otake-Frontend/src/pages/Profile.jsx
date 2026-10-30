import { useEffect, useState } from 'react'

function Profile({ onNavigate }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('otake_site_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        setUser(null)
      }
    } else {
      setUser(null)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('otake_site_token')
    localStorage.removeItem('otake_site_user')
    setUser(null)
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
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => {
              if (onNavigate) onNavigate('home')
              window.location.hash = '#home'
            }}
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition mb-4"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </button>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-[28px] font-bold tracking-tight text-neutral-900 sm:text-[34px]">My Profile</h1>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-200 text-[11px] font-medium text-purple-700">
              User
            </span>
          </div>
          <p className="mt-2 text-sm text-neutral-600">View your account details</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(150,130,200,0.08)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
          
          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 pb-6 lg:pb-8 border-b border-neutral-100">
              <div className="relative">
                <div className="h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold ring-4 ring-purple-100 shadow-[0_20px_60px_rgba(168,85,247,0.25)]">
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </div>
                <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-green-400 ring-4 ring-white"></span>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">{user?.firstName} {user?.lastName}</h2>
                <p className="text-neutral-600 mt-2 text-base sm:text-lg">{user?.email}</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span className="text-sm text-purple-700 font-semibold">User</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-green-700 font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="group relative p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-purple-200 hover:bg-purple-50/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">First Name</p>
                      <p className="text-base text-neutral-900 font-medium mt-1 truncate">{user?.firstName || "Not provided"}</p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-purple-200 hover:bg-purple-50/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">Last Name</p>
                      <p className="text-base text-neutral-900 font-medium mt-1 truncate">{user?.lastName || "Not provided"}</p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-purple-200 hover:bg-purple-50/30 transition-all md:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">Email Address</p>
                      <p className="text-base text-neutral-900 font-medium mt-1 truncate">{user?.email || "Not provided"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-neutral-100">
              <button
                onClick={handleLogout}
                className="inline-flex h-9 items-center rounded-md bg-red-50 px-4 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
