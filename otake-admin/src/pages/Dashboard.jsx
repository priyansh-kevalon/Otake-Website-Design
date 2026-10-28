import { useEffect, useState } from "react";
import api from "../utils/axios";
import { Users, Mail, Newspaper } from "lucide-react";

const Card = ({ title, value, icon: Icon }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_10px_40px_rgba(30,8,25,0.04)] p-6 flex items-center justify-between">
    <div>
      <p className="text-sm text-neutral-500">{title}</p>
      <p className="text-2xl font-semibold mt-1 text-neutral-900">{value}</p>
    </div>
    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-neutral-900">
      <Icon size={20} />
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, contacts: 0, newsletter: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, contactsRes, newsRes] = await Promise.allSettled([
          api.get("/auth/users").catch(() => ({ data: [] })),
          api.get("/contact").catch(() => ({ data: [] })),
          api.get("/newsletter").catch(() => ({ data: [] })),
        ]);
        setStats({
          users: usersRes.value?.data?.length || 0,
          contacts: contactsRes.value?.data?.length || 0,
          newsletter: newsRes.value?.data?.length || 0,
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
        <span className="inline-block w-fit rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-neutral-800 sm:px-3.5 sm:py-1.5 sm:text-[12px]">
          Overview
        </span>
        <h1 className="mt-3 text-xl font-semibold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-500 text-sm mt-1">Overview of your website activity</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Users" value={stats.users} icon={Users} />
        <Card title="Contact Messages" value={stats.contacts} icon={Mail} />
        <Card title="Newsletter Subscribers" value={stats.newsletter} icon={Newspaper} />
      </div>
    </div>
  );
};

export default Dashboard;
