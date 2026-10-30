import { useEffect, useState } from "react";
import api from "../utils/axios";
import { Users, Mail, Newspaper, FileText } from "lucide-react";

const Card = ({ title, value, icon: Icon }) => (
  <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex items-center justify-between overflow-hidden group hover:border-purple-400/30 transition-all">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
    <div className="absolute -inset-px bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/5 group-hover:to-purple-500/5 transition-all rounded-2xl" />
    <div className="relative">
      <p className="text-sm text-white/60">{title}</p>
      <p className="text-2xl font-semibold mt-1 text-white">{value}</p>
    </div>
    <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-purple-400/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]">
      <Icon size={20} />
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, contacts: 0, newsletter: 0, applications: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, contactsRes, newsRes, appsRes] = await Promise.allSettled([
          api.get("/auth/users").catch(() => ({ data: [] })),
          api.get("/contact").catch(() => ({ data: [] })),
          api.get("/newsletter").catch(() => ({ data: [] })),
          api.get("/template-applications").catch(() => ({ data: [] })),
        ]);
        setStats({
          users: usersRes.value?.data?.length || 0,
          contacts: contactsRes.value?.data?.length || 0,
          newsletter: newsRes.value?.data?.length || 0,
          applications: appsRes.value?.data?.length || 0,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="h-6 w-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block w-fit rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-3 py-1 text-[11px] font-semibold text-white sm:px-3.5 sm:py-1.5 sm:text-[12px] shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          Overview
        </span>
        <h1 className="mt-3 text-xl font-semibold text-white">User Dashboard</h1>
        <p className="text-white/50 text-sm mt-1">Welcome to your user panel</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Users" value={stats.users} icon={Users} />
        <Card title="Contact Messages" value={stats.contacts} icon={Mail} />
        <Card title="Newsletter Subscribers" value={stats.newsletter} icon={Newspaper} />
        <Card title="Template Applications" value={stats.applications} icon={FileText} />
      </div>
    </div>
  );
};

export default Dashboard;
