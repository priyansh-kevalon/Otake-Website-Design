import { useEffect, useState } from "react";
import api from "../utils/axios";

const Newsletter = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const { data } = await api.get("/newsletter");
        setSubscribers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubscribers();
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
        <h1 className="text-xl font-semibold">Newsletter</h1>
        <p className="text-gray-500 text-sm mt-1">Subscribed emails</p>
      </div>
      <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <table className="w-full min-w-[500px]">
          <thead className="bg-white/[0.03]">
            <tr>
              <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Email</th>
              <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Subscribed On</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {subscribers.map((sub) => (
              <tr key={sub._id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-4 sm:px-6 py-4 text-sm text-white">{sub.email}</td>
                <td className="px-4 sm:px-6 py-4 text-sm text-white/50">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {subscribers.length === 0 && (
          <div className="text-center py-10 text-white/40 text-sm">No subscribers found</div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
