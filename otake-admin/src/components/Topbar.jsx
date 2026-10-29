import { useAuth } from "../context/AuthContext";

const Topbar = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 shadow-[0_10px_40px_rgba(146,118,255,0.08)]">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      <div>
        <h2 className="text-sm font-medium text-white/80">Dashboard Overview</h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-white">{user?.firstName} {user?.lastName}</p>
          <p className="text-xs text-white/40">{user?.email}</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-sm font-semibold ring-2 ring-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          {user?.firstName?.[0]}{user?.lastName?.[0]}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
