import { useAuth } from "../context/AuthContext";
import { User, Mail, Shield, Calendar } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <span className="inline-block w-fit rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-3 py-1 text-[11px] font-semibold text-white sm:px-3.5 sm:py-1.5 sm:text-[12px] shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          Profile
        </span>
        <h1 className="mt-3 text-xl sm:text-2xl font-semibold text-white">Admin Profile</h1>
        <p className="text-white/50 text-sm mt-1">Manage your account information</p>
      </div>

      <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pb-6 border-b border-white/10">
            <div className="relative">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-semibold ring-4 ring-purple-400/30 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </div>
              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-400 ring-3 ring-[#0b0a0f]"></span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">{user?.firstName} {user?.lastName}</h2>
              <p className="text-white/60 mt-1">{user?.email}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30">
                  <Shield size={12} className="text-purple-400" />
                  <span className="text-xs text-purple-300 font-medium">Administrator</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50">First Name</p>
                  <p className="text-sm text-white font-medium">{user?.firstName || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Last Name</p>
                  <p className="text-sm text-white font-medium">{user?.lastName || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/50">Email Address</p>
                  <p className="text-sm text-white font-medium truncate">{user?.email || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Shield size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Role</p>
                  <p className="text-sm text-white font-medium">Administrator</p>
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
