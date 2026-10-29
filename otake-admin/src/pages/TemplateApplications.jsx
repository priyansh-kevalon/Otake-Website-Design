import { useEffect, useState } from "react";
import api from "../utils/axios";

const TemplateApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await api.get("/template-applications");
        setApplications(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
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
          Applications
        </span>
        <h1 className="mt-3 text-xl font-semibold text-neutral-900">Template Applications</h1>
        <p className="text-neutral-500 text-sm mt-1">Applications from "Apply Now" form</p>
      </div>
      <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Full Name</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Email</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Phone</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Company</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Website</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Role</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Message</th>
                <th className="text-left text-xs font-medium text-white/60 px-4 sm:px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm text-white">{app.fullName}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/70">{app.email}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/70">{app.phone}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/70">{app.companyName || "-"}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/70">{app.website || "-"}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/70">{app.role || "-"}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/70 max-w-xs truncate">{app.message}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-white/50">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {applications.length === 0 && (
          <div className="text-center py-10 text-white/40 text-sm">No applications found</div>
        )}
      </div>
    </div>
  );
};

export default TemplateApplications;
