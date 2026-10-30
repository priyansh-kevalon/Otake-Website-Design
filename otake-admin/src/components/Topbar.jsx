import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, User, LogOut, X } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 sm:px-6 shadow-[0_10px_40px_rgba(146,118,255,0.08)] z-30">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-white/70 hover:text-white"
          >
            <Menu size={22} />
          </button>
          <h2 className="text-sm font-medium text-white/80 hidden sm:block">Dashboard Overview</h2>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 group"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white group-hover:text-white/90">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-white/40 group-hover:text-white/60">Administrator</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-sm font-semibold ring-2 ring-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:ring-purple-400/50 transition-all">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
          </button>

          {isProfileOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsProfileOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-72 bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_40px_80px_rgba(146,118,255,0.25)] overflow-hidden z-50">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-lg font-semibold ring-2 ring-purple-400/30 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-white/50 truncate">{user?.email}</p>
                      <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-[10px] text-purple-300">
                        Administrator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/[0.05] hover:text-white transition"
                  >
                    <User size={16} />
                    My Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Topbar;
