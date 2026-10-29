import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Mail, Newspaper, FileText, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/contacts", label: "Contacts", icon: Mail },
  { to: "/newsletter", label: "Newsletter", icon: Newspaper },
  { to: "/template-applications", label: "Template Applications", icon: FileText },
];

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border-r border-white/10 flex flex-col shadow-[0_20px_60px_rgba(146,118,255,0.1)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <div>
          <h1 className="text-lg font-bold text-white">Otake Admin</h1>
          <p className="text-[10px] text-white/40">Website Management</p>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
      <div className="p-3 border-t border-white/10">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-white/60 hover:bg-red-500/10 hover:text-red-400 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
