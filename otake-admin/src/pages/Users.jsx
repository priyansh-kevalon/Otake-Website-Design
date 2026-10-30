import { useEffect, useState } from "react";
import api from "../utils/axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("/auth/users");
        setUsers(data);
      } catch (error) {
        console.error(error);
        setError(error.response?.data?.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
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
        <h1 className="text-xl font-semibold text-white">Users</h1>
        <p className="text-white/50 text-sm mt-1">Registered users</p>
      </div>
      {error && (
        <div className="mb-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-2 rounded-lg">
          {error}
        </div>
      )}
      <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Name</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Email</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm text-white">{user.firstName} {user.lastName}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/70">{user.email}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/50">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {users.length === 0 && !error && (
          <div className="text-center py-10 text-white/40 text-sm">No users found</div>
        )}
      </div>
    </div>
  );
};

export default Users;
