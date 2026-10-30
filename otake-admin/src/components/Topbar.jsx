import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, User, LogOut, Shield } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-3 sm:px-4 md:px-6 shadow-[0_10px_40px_rgba(146,118,255,0.08)] z-30">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-white/70 hover:text-white p-1.5"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <h2 className="text-xs sm:text-sm font-medium text-white/80 hidden sm:block">Admin Dashboard</h2>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 sm:gap-3 group px-1.5 sm:px-2 py-1 rounded-lg hover:bg-white/[0.04] transition-all"
            aria-label="Admin profile menu"
          >
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-white leading-tight">{user?.firstName} {user?.lastName}</p>
              <p className="text-[11px] text-white/50 leading-tight">{user?.email}</p>
            </div>
            <div className="relative">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-sm font-semibold ring-2 ring-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:ring-purple-400/60 transition-all">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-[#0b0a0f]"></span>
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-[calc(100vw-1.5rem)] max-w-[280px] sm:w-72 bg-[#0b0a0f]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_40px_80px_rgba(146,118,255,0.3)] overflow-hidden z-50">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
              <div className="p-3 sm:p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-base sm:text-lg font-semibold ring-2 ring-purple-400/40 shadow-[0_0_25px_rgba(168,85,247,0.4)] flex-shrink-0">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-white/50 truncate mt-0.5">{user?.email}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <Shield size={10} className="text-purple-400" />
                      <span className="text-[10px] text-purple-300 font-medium">Administrator</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1.5 sm:p-2">
                <button
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-2.5 w-full px-2.5 sm:px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/[0.05] hover:text-white transition"
                >
                  <User size={16} />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2.5 w-full px-2.5 sm:px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Topbar;
