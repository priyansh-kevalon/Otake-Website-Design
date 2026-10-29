import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Mail, Newspaper, FileText, LogOut, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/contacts", label: "Contacts", icon: Mail },
  { to: "/newsletter", label: "Newsletter", icon: Newspaper },
  { to: "/template-applications", label: "Template Applications", icon: FileText },
];

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose?.();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#0b0a0f]/98 to-[#0b0a0f]/98 backdrop-blur-xl border-r border-white/10 flex flex-col shadow-[0_20px_60px_rgba(146,118,255,0.15)] z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <div>
            <h1 className="text-lg font-bold text-white">Otake Admin</h1>
            <p className="text-[10px] text-white/40">Website Management</p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-white/60 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={onClose}
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
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-white/60 hover:bg-red-500/10 hover:text-red-400 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
