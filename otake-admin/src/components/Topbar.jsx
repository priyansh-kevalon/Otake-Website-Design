import { useAuth } from "../context/AuthContext";

const Topbar = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white/95 backdrop-blur-sm border-b border-neutral-200 flex items-center justify-between px-6 shadow-[0_1px_30px_rgba(30,8,25,0.02)]">
      <div>
        <h2 className="text-sm font-medium text-neutral-600">Dashboard Overview</h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-neutral-900">{user?.firstName} {user?.lastName}</p>
          <p className="text-xs text-neutral-500">{user?.email}</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 text-neutral-900 flex items-center justify-center text-sm font-semibold ring-2 ring-white">
          {user?.firstName?.[0]}{user?.lastName?.[0]}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
