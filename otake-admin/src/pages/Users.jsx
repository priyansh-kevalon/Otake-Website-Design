import { useEffect, useState } from "react";
import api from "../utils/axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("/auth/users");
        setUsers(data);
      } catch (error) {
        console.error(error);
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
        <h1 className="text-xl font-semibold">Users</h1>
        <p className="text-gray-500 text-sm mt-1">Registered users</p>
      </div>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_10px_40px_rgba(30,8,25,0.04)] overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-pink-50/40 to-purple-50/40">
            <tr>
              <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Name</th>
              <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Email</th>
              <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-pink-50/30 transition-colors">
                <td className="px-6 py-4 text-sm text-neutral-900">{user.firstName} {user.lastName}</td>
                <td className="px-6 py-4 text-sm text-neutral-600">{user.email}</td>
                <td className="px-6 py-4 text-sm text-neutral-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <div className="text-center py-10 text-neutral-500 text-sm">No users found</div>
        )}
      </div>
    </div>
  );
};

export default Users;
