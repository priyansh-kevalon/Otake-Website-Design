import { useAuth } from "../context/AuthContext";
import { User, Mail, Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = Boolean(
    user && (
      user.role === "admin" ||
      user.isAdmin === true ||
      user.email?.toLowerCase() === "admin@otake.com" ||
      user.email?.toLowerCase().startsWith("admin@")
    )
  );
  const roleName = isAdmin ? "Admin" : (user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "User");

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition mb-4"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </button>
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">My Profile</h1>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-purple-400/30 text-[11px] font-medium text-purple-300">
            {roleName}
          </span>
        </div>
        <p className="text-white/50 text-sm mt-1.5">View your account details</p>
      </div>

      <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(146,118,255,0.15)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 pb-6 lg:pb-8 border-b border-white/10">
            <div className="relative">
              <div className="h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold ring-4 ring-purple-400/40 shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </div>
              <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-green-400 ring-4 ring-[#0b0a0f] shadow-[0_0_15px_rgba(74,222,128,0.6)]"></span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{user?.firstName} {user?.lastName}</h2>
              <p className="text-white/60 mt-2 text-base sm:text-lg">{user?.email}</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  {isAdmin ? <Shield size={14} className="text-purple-300" /> : <User size={14} className="text-purple-300" />}
                  <span className="text-sm text-purple-200 font-semibold">{roleName}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-sm text-white/80 font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="group relative p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.05] transition-all">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                    <User size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 uppercase tracking-wider">First Name</p>
                    <p className="text-base text-white font-medium mt-1 truncate">{user?.firstName || "Not provided"}</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.05] transition-all">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                    <User size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 uppercase tracking-wider">Last Name</p>
                    <p className="text-base text-white font-medium mt-1 truncate">{user?.lastName || "Not provided"}</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.05] transition-all md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 uppercase tracking-wider">Email Address</p>
                    <p className="text-base text-white font-medium mt-1 truncate">{user?.email || "Not provided"}</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.05] transition-all md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                    {isAdmin ? <Shield size={18} className="text-white" /> : <User size={18} className="text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 uppercase tracking-wider">Account Role</p>
                    <p className="text-base text-white font-medium mt-1">{roleName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
