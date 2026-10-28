import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Mail, Newspaper, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/contacts", label: "Contacts", icon: Mail },
  { to: "/newsletter", label: "Newsletter", icon: Newspaper },
];

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/95 backdrop-blur-sm border-r border-neutral-200 flex flex-col shadow-[0_10px_40px_rgba(30,8,25,0.04)]">
      <div className="h-16 flex items-center px-6 border-b border-neutral-200">
        <div>
          <h1 className="text-lg font-bold text-neutral-900">Otake Admin</h1>
          <p className="text-[10px] text-neutral-500">Website Management</p>
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
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "text-neutral-600 hover:bg-pink-50/60 hover:text-neutral-900"
                }`
              }
            >
              <Icon size={18} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
      <div className="p-3 border-t border-neutral-200">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-red-50 hover:text-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
